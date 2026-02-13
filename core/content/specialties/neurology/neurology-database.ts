/**
 * Biological Self — Neurology Specialty Database
 * 50 entries covering cerebrovascular, seizure, neurodegenerative, demyelinating,
 * neuromuscular, headache, movement disorder, neuro-oncology, infectious, and trauma.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type NeurologyCategory =
  | 'cerebrovascular' | 'seizure' | 'neurodegenerative' | 'demyelinating'
  | 'neuromuscular' | 'headache' | 'movement-disorder' | 'neuro-oncology'
  | 'infectious' | 'trauma';

export interface NeurologyEntry {
  id: string;
  name: string;
  nameEs: string;
  category: NeurologyCategory;
  icd11: string;
  description: string;
  pathophysiology: string;
  clinicalFeatures: string[];
  diagnostics: string[];
  treatment: string[];
  prognosis: string;
  patientExplanation: string;
  emergencySigns: string[];
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const neuro = (
  id: string, name: string, nameEs: string, category: NeurologyCategory,
  icd11: string, description: string, pathophysiology: string,
  clinicalFeatures: string[], diagnostics: string[], treatment: string[],
  prognosis: string, patientExplanation: string, emergencySigns: string[],
): NeurologyEntry => ({
  id, name, nameEs, category, icd11, description, pathophysiology,
  clinicalFeatures, diagnostics, treatment, prognosis, patientExplanation, emergencySigns,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const NEUROLOGY_ENTRIES: Record<string, NeurologyEntry> = {

  // ===== CEREBROVASCULAR (7) ==================================================

  'ischemic-stroke': neuro(
    'ischemic-stroke', 'Ischemic Stroke', 'Accidente cerebrovascular isquémico', 'cerebrovascular',
    '8B11', 'Acute neurological deficit caused by arterial occlusion leading to brain ischemia and infarction.',
    'Thrombus or embolus occludes a cerebral artery, causing ischemia in the vascular territory. Penumbra tissue is salvageable if perfusion is restored rapidly. Mechanisms include large-vessel atherosclerosis, cardioembolism, and small-vessel lacunar infarction.',
    ['Sudden unilateral weakness or numbness', 'Aphasia or dysarthria', 'Visual field deficits', 'Ataxia or vertigo (posterior circulation)', 'Facial droop', 'Altered consciousness in large infarcts'],
    ['Non-contrast CT head (rule out hemorrhage)', 'CT angiography or MR angiography', 'MRI DWI (diffusion-weighted imaging)', 'ECG and telemetry', 'Echocardiography', 'Lipid panel, HbA1c, coagulation studies'],
    ['IV alteplase within 4.5 hours of onset', 'Mechanical thrombectomy for large vessel occlusion up to 24 hours', 'Antiplatelet therapy (aspirin +/- clopidogrel)', 'Statin therapy', 'Blood pressure management', 'DVT prophylaxis', 'Acute stroke unit care', 'Early rehabilitation'],
    'Depends on territory, size, and reperfusion success. ~30% achieve functional independence at 3 months. Thrombectomy improves outcomes in large vessel occlusion.',
    'A stroke occurs when blood flow to part of the brain is blocked. Fast treatment can save brain tissue and reduce disability. Call emergency services immediately if you notice sudden weakness, speech difficulty, or vision loss.',
    ['Sudden severe headache', 'Rapid neurological deterioration', 'Signs of herniation (fixed dilated pupil, posturing)', 'Airway compromise', 'NIHSS score rising'],
  ),

  'hemorrhagic-stroke': neuro(
    'hemorrhagic-stroke', 'Hemorrhagic Stroke (Intracerebral Hemorrhage)', 'Accidente cerebrovascular hemorrágico', 'cerebrovascular',
    '8B00', 'Spontaneous bleeding into brain parenchyma, most commonly from hypertensive small-vessel disease.',
    'Chronic hypertension causes lipohyalinosis of small penetrating arteries (basal ganglia, thalamus, pons, cerebellum). Rupture leads to expanding hematoma with surrounding edema and mass effect. Cerebral amyloid angiopathy causes lobar hemorrhages in elderly.',
    ['Sudden onset severe headache', 'Rapid focal neurological deficits', 'Vomiting', 'Altered consciousness', 'Seizures in ~10%', 'Signs of raised intracranial pressure'],
    ['Non-contrast CT head (hyperdense lesion)', 'CT angiography (spot sign predicts expansion)', 'MRI with gradient echo (prior microbleeds)', 'Coagulation studies', 'Toxicology screen if indicated'],
    ['Aggressive blood pressure reduction (target SBP <140 mmHg)', 'Reversal of anticoagulation if applicable', 'ICP monitoring and management', 'Surgical evacuation for cerebellar hemorrhage or life-threatening mass effect', 'Seizure prophylaxis (controversial)', 'ICU monitoring', 'Early rehabilitation'],
    'Mortality ~40% at 30 days. Hematoma volume and GCS at presentation are strongest predictors. Survivors often have significant disability.',
    'This type of stroke is caused by bleeding inside the brain. Controlling blood pressure is the most important step to prevent it and limit damage. Treatment in an intensive care setting is critical.',
    ['Rapid decline in consciousness', 'Pupil asymmetry (herniation)', 'Cushing triad (hypertension, bradycardia, irregular respirations)', 'Seizures', 'New or worsening deficit'],
  ),

  'transient-ischemic-attack': neuro(
    'transient-ischemic-attack', 'Transient Ischemic Attack (TIA)', 'Ataque isquémico transitorio', 'cerebrovascular',
    '8B10', 'Transient neurological dysfunction from focal brain ischemia without acute infarction.',
    'Temporary occlusion or hypoperfusion of a cerebral artery causes reversible neurological deficit. No permanent tissue injury on imaging. Often due to carotid atherosclerosis, cardioembolism, or small vessel disease.',
    ['Transient unilateral weakness or numbness', 'Transient aphasia or dysarthria', 'Amaurosis fugax (monocular vision loss)', 'Symptoms resolve within minutes to hours', 'No persistent deficits on examination'],
    ['MRI with DWI (confirm no infarct)', 'Carotid ultrasound or CT angiography', 'ECG and Holter monitoring', 'Echocardiography', 'Basic labs including lipids and glucose', 'ABCD2 score for risk stratification'],
    ['Dual antiplatelet therapy (aspirin + clopidogrel for 21 days)', 'High-intensity statin', 'Blood pressure control', 'Carotid endarterectomy if ipsilateral stenosis >70%', 'Anticoagulation if atrial fibrillation', 'Lifestyle modification'],
    '90-day stroke risk 10-20% without treatment. ABCD2 score stratifies risk. Urgent evaluation and treatment dramatically reduce subsequent stroke.',
    'A TIA is a warning sign that a full stroke may follow. Even though symptoms resolve, it requires urgent medical evaluation and treatment to prevent a future stroke.',
    ['Recurrent or prolonged symptoms', 'Crescendo TIAs (increasing frequency)', 'High ABCD2 score (>=4)', 'Known high-grade carotid stenosis', 'New atrial fibrillation'],
  ),

  'subarachnoid-hemorrhage': neuro(
    'subarachnoid-hemorrhage', 'Subarachnoid Hemorrhage', 'Hemorragia subaracnoidea', 'cerebrovascular',
    '8B01.0', 'Bleeding into the subarachnoid space, most commonly from ruptured saccular (berry) aneurysm.',
    'Rupture of an intracranial aneurysm (85%) releases arterial blood into the subarachnoid space. Raises ICP acutely. Complications include vasospasm (days 4-14), rebleeding, and hydrocephalus. Risk factors: hypertension, smoking, family history, polycystic kidney disease.',
    ['Thunderclap headache ("worst headache of my life")', 'Meningismus (neck stiffness)', 'Nausea and vomiting', 'Photophobia', 'Loss of consciousness (~50%)', 'Focal deficits from vasospasm', 'Seizures'],
    ['Non-contrast CT head (sensitivity >95% in first 6 hours)', 'Lumbar puncture if CT negative (xanthochromia)', 'CT angiography to identify aneurysm', 'Conventional catheter angiography (gold standard)', 'Transcranial Doppler for vasospasm monitoring'],
    ['Secure aneurysm within 24 hours (endovascular coiling preferred or surgical clipping)', 'Nimodipine 60 mg q4h for 21 days (vasospasm prophylaxis)', 'Maintain euvolemia and avoid hypotension', 'External ventricular drain for hydrocephalus', 'Seizure prophylaxis', 'ICU monitoring', 'Blood pressure control before aneurysm secured'],
    'Overall mortality ~30-50%. Good outcome (Hunt-Hess grade I-II) in ~70%. Vasospasm is leading cause of delayed morbidity.',
    'A sudden, severe "thunderclap" headache may indicate bleeding around the brain from a burst blood vessel. This is a medical emergency requiring immediate hospital treatment.',
    ['Sudden thunderclap headache', 'Declining consciousness', 'New focal neurological deficit (vasospasm)', 'Seizure', 'Signs of rebleeding (sudden worsening)'],
  ),

  'arteriovenous-malformation': neuro(
    'arteriovenous-malformation', 'Arteriovenous Malformation (AVM)', 'Malformación arteriovenosa cerebral', 'cerebrovascular',
    'LA80.0', 'Congenital tangle of abnormal arteries and veins in the brain without normal capillary bed.',
    'Direct arteriovenous shunting through a nidus of dysplastic vessels. High-flow, low-resistance system prone to rupture. Surrounding brain may be ischemic from vascular steal. Annual hemorrhage risk ~2-4% for unruptured AVMs.',
    ['Hemorrhage (most common presentation, 50%)', 'Seizures (30%)', 'Headache', 'Progressive neurological deficit from steal phenomenon', 'Cranial bruit (rare)', 'Often asymptomatic until rupture'],
    ['CT/MRI showing flow voids or hemorrhage', 'CT angiography or MR angiography', 'Catheter angiography (gold standard for grading)', 'Spetzler-Martin grading scale'],
    ['Observation for low-risk unruptured AVMs', 'Microsurgical resection (definitive for accessible lesions)', 'Stereotactic radiosurgery (Gamma Knife) for small deep AVMs', 'Endovascular embolization (adjunctive or palliative)', 'Antiepileptic drugs for seizures', 'Multidisciplinary neurovascular team decision'],
    'Untreated annual hemorrhage risk 2-4%. Surgical cure rate >95% for Spetzler-Martin grades I-II. ARUBA trial showed observation may be superior to intervention for unruptured AVMs.',
    'An AVM is a tangle of blood vessels in the brain present from birth. It can sometimes bleed or cause seizures. Treatment decisions are made carefully based on the size, location, and symptoms.',
    ['Acute headache suggesting hemorrhage', 'New seizure', 'Sudden neurological deficit', 'Altered consciousness'],
  ),

  'cerebral-aneurysm': neuro(
    'cerebral-aneurysm', 'Cerebral Aneurysm (Unruptured)', 'Aneurisma cerebral', 'cerebrovascular',
    '8B01.1', 'Focal dilation of a cerebral artery wall, most commonly saccular, at arterial bifurcations.',
    'Weakening of the internal elastic lamina and media at arterial branch points, forming a sac-like outpouching. Most common at anterior communicating, posterior communicating, and middle cerebral artery bifurcation. Risk of rupture increases with size (>7 mm), location, and growth.',
    ['Usually asymptomatic (incidental finding)', 'Cranial nerve palsy (CN III from posterior communicating artery aneurysm)', 'Headache', 'Visual field defects from compression', 'Sentinel headache before rupture'],
    ['MR angiography (screening)', 'CT angiography', 'Catheter angiography (gold standard)', 'Serial imaging for observation'],
    ['Observation with serial imaging for small aneurysms (<7 mm, anterior circulation)', 'Endovascular coiling (first-line for most aneurysms)', 'Flow diverter stents for large/wide-neck aneurysms', 'Surgical clipping (durable, preferred in some anatomies)', 'Risk factor modification (blood pressure control, smoking cessation)'],
    'Annual rupture risk for small anterior circulation aneurysms <0.5%. Larger and posterior circulation aneurysms carry higher risk. Treatment risk must be weighed against natural history.',
    'A brain aneurysm is a balloon-like bulge in a blood vessel. Most are small and never rupture. Your doctor will monitor it with imaging and discuss treatment if the risk of rupture is significant.',
    ['Sudden severe headache (possible sentinel leak)', 'New cranial nerve palsy (expansion)', 'Change in aneurysm size on imaging'],
  ),

  'cavernous-sinus-thrombosis': neuro(
    'cavernous-sinus-thrombosis', 'Cavernous Sinus Thrombosis', 'Trombosis del seno cavernoso', 'cerebrovascular',
    '8B22', 'Thrombosis of the cavernous sinus, usually secondary to infection of the face, sinuses, or orbits.',
    'Infection (most commonly Staphylococcus aureus) spreads via valveless facial and ophthalmic veins to the cavernous sinus. Thrombus formation leads to venous congestion and compression of cranial nerves III, IV, V1, V2, VI, and the internal carotid artery within the sinus.',
    ['Periorbital edema and proptosis', 'Ophthalmoplegia (CN III, IV, VI palsies)', 'Chemosis', 'Decreased visual acuity', 'Fever and sepsis', 'Headache', 'Papilledema', 'Bilateral involvement common'],
    ['MRI with MR venography (best sensitivity)', 'CT with contrast (filling defect)', 'Blood cultures', 'CBC with inflammatory markers', 'LP if meningitis suspected'],
    ['Broad-spectrum IV antibiotics (vancomycin + ceftriaxone + metronidazole)', 'Anticoagulation with heparin (controversial but generally recommended)', 'Surgical drainage of primary source (sinus, abscess)', 'Corticosteroids for CN inflammation (adjunctive)', 'ICU monitoring'],
    'Mortality 20-30% even with treatment. Significant morbidity with residual CN palsies in 50%. Early aggressive antibiotic therapy improves outcomes.',
    'This is a serious infection-related blood clot in a vein behind the eye. It requires emergency hospital treatment with strong antibiotics and possibly blood thinners.',
    ['Rapid vision loss', 'Bilateral eye involvement', 'Meningeal signs', 'Declining consciousness', 'Septic shock'],
  ),

  // ===== SEIZURE DISORDERS (4) ================================================

  'focal-epilepsy': neuro(
    'focal-epilepsy', 'Focal (Partial) Epilepsy', 'Epilepsia focal', 'seizure',
    '8A61', 'Recurrent seizures originating from a localized cortical region.',
    'Abnormal hypersynchronous neuronal discharges from a discrete cortical focus. May be due to mesial temporal sclerosis, cortical dysplasia, tumors, vascular malformations, or post-traumatic gliosis. Focal seizures may remain localized or secondarily generalize.',
    ['Aura (epigastric rising, deja vu, olfactory hallucination)', 'Focal motor symptoms (clonic movements of one limb)', 'Automatisms (lip smacking, hand fumbling)', 'Impaired awareness (temporal lobe origin)', 'Todd paralysis post-ictally', 'Secondary generalization to bilateral tonic-clonic'],
    ['EEG (focal epileptiform discharges)', 'MRI brain with epilepsy protocol', 'Video-EEG monitoring for surgical candidates', 'PET scan (interictal hypometabolism)', 'Neuropsychological testing'],
    ['Carbamazepine or oxcarbazepine (first-line for focal)', 'Lamotrigine', 'Levetiracetam', 'Lacosamide', 'Epilepsy surgery (temporal lobectomy) for drug-resistant focal epilepsy', 'Vagus nerve stimulation'],
    '~60-70% seizure-free with first or second antiseizure medication. Drug-resistant epilepsy (~30%) may benefit from surgery with 60-80% seizure freedom rates for temporal lobe epilepsy.',
    'Focal epilepsy means seizures start in one specific area of the brain. Medications control seizures in most people. If medications do not work, surgery can be very effective.',
    ['Status epilepticus (seizure >5 minutes)', 'Cluster seizures', 'Post-ictal confusion lasting >30 minutes', 'New focal deficit post-seizure', 'Aspiration risk'],
  ),

  'generalized-epilepsy': neuro(
    'generalized-epilepsy', 'Generalized Epilepsy', 'Epilepsia generalizada', 'seizure',
    '8A62', 'Epilepsy with seizures originating simultaneously from both hemispheres.',
    'Generalized epileptiform activity arises from both hemispheres simultaneously, involving thalamocortical circuits. Genetic generalized epilepsies (formerly idiopathic) include juvenile myoclonic epilepsy, juvenile absence epilepsy, and epilepsy with generalized tonic-clonic seizures alone.',
    ['Bilateral tonic-clonic seizures', 'Myoclonic jerks (especially morning)', 'Absence episodes (staring, unresponsiveness)', 'No aura (immediate loss of consciousness)', 'EEG shows generalized discharges', 'Often triggered by sleep deprivation, alcohol, photic stimulation'],
    ['EEG (generalized 3 Hz spike-wave in absence; 4-6 Hz polyspike-wave in JME)', 'MRI brain (often normal in genetic generalized epilepsy)', 'Sleep-deprived EEG if routine is normal', 'Genetic testing in selected cases'],
    ['Valproic acid (broad-spectrum, first-line for many generalized syndromes)', 'Lamotrigine (preferred in women of childbearing age)', 'Levetiracetam', 'Ethosuximide (absence seizures only)', 'Avoid carbamazepine, phenytoin (may worsen absence and myoclonic seizures)', 'Lifestyle: sleep hygiene, alcohol avoidance'],
    'Genetic generalized epilepsies often well-controlled with medication. Juvenile myoclonic epilepsy typically lifelong treatment. Childhood absence epilepsy may remit by adolescence.',
    'Generalized epilepsy involves seizures affecting the whole brain at once. Medications work well for most patients. Consistent sleep, avoiding alcohol, and medication adherence are key.',
    ['Tonic-clonic seizure >5 minutes (status epilepticus)', 'Injury during seizure', 'Post-ictal respiratory distress', 'Repeated seizures without recovery'],
  ),

  'status-epilepticus': neuro(
    'status-epilepticus', 'Status Epilepticus', 'Estado epiléptico', 'seizure',
    '8A62.1', 'Prolonged or repetitive seizures without recovery of consciousness, a neurological emergency.',
    'Failure of seizure termination mechanisms or initiation of self-sustaining seizure activity. After 5 minutes of continuous seizure, GABA-mediated inhibition fails and excitotoxic injury begins. Causes include AED non-compliance, CNS infection, stroke, metabolic derangement, and alcohol withdrawal.',
    ['Continuous convulsive activity >5 minutes', 'Repetitive seizures without return to baseline', 'Non-convulsive: prolonged altered consciousness without motor activity', 'Autonomic instability', 'Hyperthermia', 'Metabolic acidosis'],
    ['Bedside glucose', 'Continuous EEG monitoring (essential for non-convulsive)', 'Basic metabolic panel, calcium, magnesium', 'Antiepileptic drug levels', 'CT head (emergent)', 'LP if infection suspected', 'Toxicology screen'],
    ['ABCs and IV access', 'IV lorazepam 4 mg (or IM midazolam 10 mg) as first-line', 'IV fosphenytoin/phenytoin or levetiracetam or valproate as second-line', 'Refractory: continuous midazolam, propofol, or pentobarbital infusion with EEG monitoring', 'Treat underlying cause', 'ICU admission'],
    'Mortality 10-20% for convulsive SE. Increases with duration, etiology, and age. Non-convulsive SE carries high morbidity from delayed diagnosis.',
    'Status epilepticus is a prolonged seizure that is a medical emergency. Immediate treatment with medication is needed to stop the seizure and prevent brain injury.',
    ['Any seizure lasting >5 minutes', 'Failure to respond to first-line benzodiazepine', 'Recurrent seizures without recovery', 'Respiratory compromise', 'Hyperthermia >40C'],
  ),

  'febrile-seizures': neuro(
    'febrile-seizures', 'Febrile Seizures', 'Convulsiones febriles', 'seizure',
    '8A6Y', 'Seizures occurring in children aged 6 months to 5 years associated with fever without CNS infection.',
    'Immature brain has lower seizure threshold during rapid temperature changes. Genetic susceptibility plays a role. Simple febrile seizures are generalized, last <15 minutes, and do not recur within 24 hours. Complex febrile seizures are focal, prolonged (>15 min), or recur within 24 hours.',
    ['Generalized tonic-clonic seizure with fever', 'Typical age 6 months to 5 years', 'Brief post-ictal drowsiness', 'No focal neurological signs (simple)', 'Focal features or prolonged duration (complex)', 'Family history common'],
    ['Clinical diagnosis (simple febrile seizures)', 'Lumbar puncture if <12 months or signs of meningitis', 'EEG not routinely indicated for simple febrile seizures', 'MRI if complex features or abnormal neurological exam', 'Basic labs to identify infection source'],
    ['Acute: supportive care, fever management', 'Rectal diazepam or intranasal midazolam for prolonged seizures', 'Antipyretics for comfort (do not prevent recurrence)', 'Parental education and reassurance', 'Daily prophylaxis rarely indicated', 'No chronic antiepileptic drugs for simple febrile seizures'],
    'Excellent. Simple febrile seizures do not cause brain damage or epilepsy in vast majority. Recurrence risk ~33%. Risk of subsequent epilepsy ~2% (similar to general population).',
    'Febrile seizures are common in young children and are triggered by fever. They look scary but almost never cause harm. Most children outgrow them completely.',
    ['Seizure lasting >5 minutes', 'Focal features', 'Multiple seizures in 24 hours', 'Prolonged post-ictal state', 'Signs of meningitis (neck stiffness, bulging fontanelle)'],
  ),

  // ===== NEURODEGENERATIVE (7) ================================================

  'alzheimers-disease': neuro(
    'alzheimers-disease', 'Alzheimer Disease', 'Enfermedad de Alzheimer', 'neurodegenerative',
    '8A20', 'Progressive neurodegenerative dementia characterized by amyloid plaques and neurofibrillary tangles.',
    'Extracellular amyloid-beta plaques and intracellular hyperphosphorylated tau neurofibrillary tangles cause neuronal death, starting in entorhinal cortex and hippocampus, then spreading cortically. Cholinergic deficit underlies memory impairment. Genetic factors include APOE e4, APP, PSEN1/2 mutations.',
    ['Progressive short-term memory loss (earliest)', 'Word-finding difficulty', 'Visuospatial disorientation', 'Executive dysfunction', 'Behavioral and personality changes (later)', 'Apraxia, agnosia in advanced stages', 'Anosognosia'],
    ['Clinical diagnosis with neuropsychological testing', 'MRI (hippocampal and medial temporal atrophy)', 'FDG-PET (temporoparietal hypometabolism)', 'Amyloid PET or CSF biomarkers (Abeta42, tau, p-tau)', 'Exclude reversible causes (B12, TSH, RPR, metabolic panel)'],
    ['Cholinesterase inhibitors (donepezil, rivastigmine, galantamine)', 'Memantine for moderate-severe disease', 'Anti-amyloid antibodies (lecanemab, aducanumab) in early stages', 'Cognitive stimulation and structured activities', 'Caregiver support and education', 'Safety planning (driving, wandering)', 'Advance care planning early'],
    'Progressive and ultimately fatal. Average survival 8-10 years from diagnosis. Rate of decline varies. Anti-amyloid therapies may slow early-stage progression.',
    'Alzheimer disease gradually affects memory and thinking. While there is no cure yet, medications and supportive care can help maintain quality of life. Planning ahead with family is important.',
    ['Rapid cognitive decline (consider other cause)', 'Wandering and unsafe behavior', 'Agitation or psychosis requiring intervention', 'Dysphagia and aspiration risk', 'Caregiver burnout'],
  ),

  'parkinsons-disease': neuro(
    'parkinsons-disease', 'Parkinson Disease', 'Enfermedad de Parkinson', 'neurodegenerative',
    '8A00.0', 'Progressive movement disorder caused by dopaminergic neuron loss in the substantia nigra.',
    'Loss of dopaminergic neurons in the substantia nigra pars compacta leads to striatal dopamine depletion. Alpha-synuclein aggregates (Lewy bodies) are the pathological hallmark. Non-motor symptoms arise from involvement of other brainstem nuclei, limbic system, and cortex.',
    ['Resting tremor (pill-rolling, asymmetric onset)', 'Bradykinesia', 'Rigidity (cogwheel)', 'Postural instability (later)', 'Masked facies', 'Micrographia', 'Shuffling gait', 'Non-motor: anosmia, constipation, REM sleep behavior disorder, depression'],
    ['Clinical diagnosis (UK Brain Bank criteria)', 'DaTscan (dopamine transporter SPECT) if uncertain', 'MRI to exclude structural causes', 'Trial of levodopa (robust response supports diagnosis)', 'Neuropsychological testing if cognitive concerns'],
    ['Levodopa/carbidopa (most effective)', 'Dopamine agonists (pramipexole, ropinirole)', 'MAO-B inhibitors (rasagiline, selegiline)', 'COMT inhibitors (entacapone)', 'Deep brain stimulation for motor fluctuations', 'Physical therapy and exercise (critical)', 'Speech therapy', 'Management of non-motor symptoms'],
    'Slowly progressive over decades. Levodopa provides excellent early symptomatic relief. Motor complications (dyskinesia, wearing off) develop over years. Cognitive impairment and falls in advanced stages.',
    'Parkinson disease affects movement due to reduced dopamine in the brain. Medications and exercise can significantly improve symptoms and quality of life for many years.',
    ['Falls causing injury', 'Neuroleptic malignant syndrome (with dopamine withdrawal)', 'Aspiration pneumonia', 'Psychosis or hallucinations', 'Severe on-off fluctuations'],
  ),

  'amyotrophic-lateral-sclerosis': neuro(
    'amyotrophic-lateral-sclerosis', 'Amyotrophic Lateral Sclerosis (ALS)', 'Esclerosis lateral amiotrófica', 'neurodegenerative',
    '8B60.0', 'Progressive motor neuron disease affecting both upper and lower motor neurons.',
    'Degeneration of upper motor neurons (cortex) and lower motor neurons (brainstem, spinal cord) leads to progressive weakness. TDP-43 protein aggregates in most cases. ~10% familial (SOD1, C9orf72 mutations). Glutamate excitotoxicity and oxidative stress contribute.',
    ['Asymmetric limb weakness (often distal onset)', 'Muscle atrophy and fasciculations (LMN)', 'Spasticity and hyperreflexia (UMN)', 'Dysarthria and dysphagia (bulbar onset)', 'Respiratory muscle weakness', 'Preserved eye movements and sphincter function', 'Emotional lability (pseudobulbar affect)'],
    ['EMG/NCS (widespread denervation in multiple regions)', 'MRI brain and spine (exclude structural mimics)', 'El Escorial criteria (definite, probable, possible)', 'Genetic testing if familial', 'Pulmonary function tests (FVC)', 'Exclude mimics: cervical myelopathy, multifocal motor neuropathy'],
    ['Riluzole (modest survival benefit ~2-3 months)', 'Edaravone (slows functional decline in select patients)', 'Non-invasive ventilation (BiPAP) improves survival and quality of life', 'PEG tube for nutrition when dysphagia progresses', 'Multidisciplinary ALS clinic care', 'Symptomatic: baclofen for spasticity, dextromethorphan/quinidine for pseudobulbar affect', 'Palliative care and advance directives'],
    'Median survival 3-5 years from symptom onset. Bulbar onset has worse prognosis. ~10% survive >10 years. Respiratory failure is the most common cause of death.',
    'ALS progressively weakens muscles throughout the body. While there is no cure, treatments and supportive care can improve quality of life and breathing. A specialized ALS care team is essential.',
    ['Acute respiratory distress', 'FVC <50% predicted', 'Aspiration pneumonia', 'Rapid functional decline', 'Weight loss >10%'],
  ),

  'huntingtons-disease': neuro(
    'huntingtons-disease', 'Huntington Disease', 'Enfermedad de Huntington', 'neurodegenerative',
    '8A01.10', 'Autosomal dominant neurodegenerative disorder causing chorea, cognitive decline, and psychiatric symptoms.',
    'CAG trinucleotide repeat expansion (>36 repeats) in the huntingtin gene (HTT) on chromosome 4. Mutant huntingtin protein aggregates cause selective neuronal loss in the caudate nucleus and putamen (striatum), disrupting basal ganglia circuitry.',
    ['Chorea (involuntary dance-like movements)', 'Progressive cognitive decline', 'Psychiatric symptoms (depression, irritability, apathy)', 'Impaired saccadic eye movements', 'Dystonia and rigidity (later stages)', 'Weight loss', 'Juvenile form: rigidity and seizures (Westphal variant)'],
    ['Genetic testing for CAG repeat expansion (diagnostic)', 'MRI (caudate atrophy, ex vacuo ventriculomegaly)', 'Clinical exam with family history', 'Neuropsychological testing', 'Presymptomatic genetic counseling and testing available'],
    ['Tetrabenazine or deutetrabenazine for chorea', 'Antipsychotics (low-dose) for chorea and psychiatric symptoms', 'SSRIs for depression', 'Supportive: physical therapy, speech therapy, nutritional support', 'Genetic counseling for family members', 'No disease-modifying therapy available currently'],
    'Progressive and fatal. Average survival 15-20 years from symptom onset. Cognitive and functional decline inevitable. Aspiration pneumonia and suicide are major causes of death.',
    'Huntington disease is an inherited condition that causes involuntary movements, thinking changes, and mood difficulties. Genetic counseling is available for at-risk family members. Symptom management can improve daily functioning.',
    ['Severe chorea causing injury', 'Suicidal ideation (high risk in HD)', 'Aspiration', 'Marked weight loss', 'Psychosis'],
  ),

  'frontotemporal-dementia': neuro(
    'frontotemporal-dementia', 'Frontotemporal Dementia', 'Demencia frontotemporal', 'neurodegenerative',
    '8A21', 'Group of dementias from progressive frontal and temporal lobe degeneration, presenting with behavioral or language changes.',
    'Degeneration of frontal and temporal lobes with accumulations of tau, TDP-43, or FUS proteins. Behavioral variant (bvFTD) affects orbitofrontal and anterior cingulate cortex. Primary progressive aphasia variants affect left perisylvian language networks.',
    ['Personality and behavioral changes (disinhibition, apathy)', 'Loss of empathy and social awareness', 'Compulsive behaviors', 'Dietary changes (sweet preference)', 'Progressive non-fluent aphasia or semantic dementia', 'Executive dysfunction with relatively preserved memory early', 'Often misdiagnosed as psychiatric illness'],
    ['MRI (frontal and/or temporal atrophy)', 'FDG-PET (frontal/temporal hypometabolism)', 'Neuropsychological testing', 'Genetic testing (MAPT, GRN, C9orf72)', 'CSF biomarkers to distinguish from AD'],
    ['No disease-modifying therapy', 'SSRIs for behavioral symptoms (disinhibition, compulsions)', 'Trazodone for agitation', 'Avoid anticholinesterase inhibitors (may worsen behavior)', 'Behavioral management strategies', 'Caregiver education and support', 'Speech therapy for language variants'],
    'Progressive and fatal. Average survival 6-8 years from symptom onset. Behavioral variant progresses to global dementia. Motor neuron disease overlap portends worse prognosis.',
    'Frontotemporal dementia affects personality, behavior, and language before memory. It is different from Alzheimer disease. Family support and behavioral strategies are central to care.',
    ['Dangerous disinhibited behavior', 'Aggression or severe agitation', 'Dysphagia and aspiration', 'Development of motor neuron disease features', 'Caregiver safety concerns'],
  ),

  'lewy-body-dementia': neuro(
    'lewy-body-dementia', 'Dementia with Lewy Bodies', 'Demencia con cuerpos de Lewy', 'neurodegenerative',
    '8A22', 'Progressive dementia with visual hallucinations, parkinsonism, and fluctuating cognition.',
    'Alpha-synuclein aggregates (Lewy bodies) deposited in cortical and limbic neurons. Shares pathology with Parkinson disease but cortical involvement is earlier and more diffuse. Cholinergic deficit is prominent. Dopaminergic deficit causes parkinsonism.',
    ['Fluctuating cognition and attention', 'Recurrent well-formed visual hallucinations', 'Parkinsonism (may be mild or develop after cognitive symptoms)', 'REM sleep behavior disorder', 'Severe sensitivity to neuroleptics', 'Autonomic dysfunction', 'Depression'],
    ['Clinical diagnosis (McKeith criteria)', 'DaTscan (reduced dopamine transporter uptake)', 'Polysomnography (REM sleep without atonia)', 'MRI (relative preservation of hippocampi vs. AD)', 'FDG-PET (occipital hypometabolism)', 'MIBG cardiac scintigraphy (reduced uptake)'],
    ['Cholinesterase inhibitors (rivastigmine preferred; often more effective than in AD)', 'Low-dose quetiapine or pimavanserin for hallucinations if needed', 'AVOID typical antipsychotics and high-potency atypicals (severe neuroleptic sensitivity)', 'Levodopa cautiously for parkinsonism', 'Melatonin for REM sleep behavior disorder', 'Caregiver education about fluctuations'],
    'Progressive. Average survival 5-8 years. Fluctuations and hallucinations may respond to cholinesterase inhibitors. Neuroleptic sensitivity makes management challenging.',
    'Lewy body dementia causes changing levels of alertness, visual hallucinations, and movement problems. Certain medications used for confusion can be very harmful, so careful medical management is essential.',
    ['Severe neuroleptic sensitivity reaction', 'Falls from parkinsonism', 'Autonomic crises (orthostatic hypotension)', 'Agitated delirium', 'Aspiration'],
  ),

  'multiple-system-atrophy': neuro(
    'multiple-system-atrophy', 'Multiple System Atrophy', 'Atrofia multisistémica', 'neurodegenerative',
    '8A00.1', 'Progressive neurodegenerative synucleinopathy with autonomic failure plus parkinsonism or cerebellar ataxia.',
    'Alpha-synuclein inclusions in oligodendrocytes (glial cytoplasmic inclusions). Two subtypes: MSA-P (parkinsonian predominant, striatonigral degeneration) and MSA-C (cerebellar predominant, olivopontocerebellar atrophy). Prominent autonomic failure distinguishes from Parkinson disease.',
    ['Severe autonomic dysfunction (orthostatic hypotension, urinary retention/incontinence)', 'Poorly levodopa-responsive parkinsonism (MSA-P)', 'Cerebellar ataxia and dysarthria (MSA-C)', 'Inspiratory stridor', 'Erectile dysfunction (early)', 'Rapid progression compared to PD'],
    ['MRI (hot cross bun sign in pons for MSA-C; putaminal rim sign for MSA-P)', 'Autonomic testing (tilt table, thermoregulatory sweat test)', 'Poor levodopa response trial', 'DaTscan (abnormal but non-specific)', 'EMG of sphincter muscles (denervation)'],
    ['Midodrine and fludrocortisone for orthostatic hypotension', 'Droxidopa for neurogenic orthostatic hypotension', 'Levodopa trial (modest benefit in ~30%)', 'CPAP or tracheostomy for stridor', 'Physical and occupational therapy', 'No disease-modifying therapy available'],
    'Poor prognosis. Median survival 6-10 years from onset. More rapid decline than Parkinson disease. Stridor and autonomic failure are major mortality factors.',
    'Multiple system atrophy is a progressive brain condition causing low blood pressure, movement, and balance problems. It progresses faster than Parkinson disease. Managing blood pressure and breathing are key treatment goals.',
    ['Severe orthostatic hypotension with syncope', 'Stridor (airway compromise)', 'Recurrent falls', 'Aspiration pneumonia', 'Urinary sepsis from retention'],
  ),

  // ===== DEMYELINATING (5) ====================================================

  'multiple-sclerosis': neuro(
    'multiple-sclerosis', 'Multiple Sclerosis', 'Esclerosis múltiple', 'demyelinating',
    '8A40', 'Chronic autoimmune demyelinating disease of the central nervous system with relapsing or progressive course.',
    'Autoreactive T-cells cross the blood-brain barrier and attack myelin and oligodendrocytes, causing inflammatory demyelinating plaques in white matter (periventricular, juxtacortical, infratentorial, spinal cord). Axonal damage occurs early and accumulates, driving progressive disability.',
    ['Optic neuritis (vision loss, pain with eye movement)', 'Sensory symptoms (numbness, tingling, Lhermitte sign)', 'Motor weakness (upper motor neuron pattern)', 'Cerebellar ataxia and tremor', 'Uhthoff phenomenon (heat sensitivity)', 'Fatigue', 'Bladder and bowel dysfunction', 'Cognitive impairment'],
    ['MRI brain and spine with contrast (McDonald criteria)', 'CSF: oligoclonal bands, elevated IgG index', 'Visual evoked potentials', 'OCT (retinal nerve fiber layer thinning)', 'Exclude mimics: NMO, sarcoidosis, B12 deficiency, Lyme'],
    ['Acute relapse: IV methylprednisolone 1 g x 3-5 days', 'Disease-modifying therapies: high-efficacy (ocrelizumab, natalizumab, alemtuzumab) or moderate (dimethyl fumarate, fingolimod, teriflunomide)', 'Symptom management: baclofen for spasticity, amantadine for fatigue, anticholinergics for bladder', 'Physical and occupational therapy', 'Vitamin D supplementation'],
    'Highly variable. Relapsing-remitting MS (85%) may convert to secondary progressive. Early high-efficacy treatment improves long-term outcomes. ~50% need walking aid within 15-20 years without treatment.',
    'Multiple sclerosis is an immune condition where the body attacks the protective covering of nerves. Modern treatments can greatly reduce relapses and slow disability. Early treatment is important.',
    ['Acute severe relapse (optic neuritis, myelitis)', 'Rapidly worsening disability', 'Brainstem symptoms (diplopia, dysphagia, vertigo)', 'Severe spasticity or spasms', 'Urinary retention'],
  ),

  'neuromyelitis-optica': neuro(
    'neuromyelitis-optica', 'Neuromyelitis Optica Spectrum Disorder (NMOSD)', 'Trastorno del espectro de neuromielitis óptica', 'demyelinating',
    '8A41', 'Autoimmune astrocytopathy targeting aquaporin-4 channels, causing severe optic neuritis and longitudinally extensive transverse myelitis.',
    'IgG antibodies against aquaporin-4 (AQP4) water channels on astrocyte foot processes cause complement-mediated astrocyte destruction, secondary demyelination, and necrosis. Predilection for optic nerves and spinal cord (especially central gray matter). Distinct from MS pathologically.',
    ['Severe bilateral optic neuritis (often with poor recovery)', 'Longitudinally extensive transverse myelitis (>=3 vertebral segments)', 'Area postrema syndrome (intractable nausea, vomiting, hiccups)', 'Brain lesions in AQP4-rich regions (hypothalamus, periependymal)', 'Attacks tend to be more severe than MS with less recovery'],
    ['AQP4-IgG serology (highly specific)', 'MRI spine (longitudinally extensive T2 lesion)', 'MRI brain (may show AQP4-pattern lesions)', 'CSF: pleocytosis, often no oligoclonal bands', 'MOG-IgG testing if AQP4-negative'],
    ['Acute attack: high-dose IV steroids, plasma exchange if poor response', 'Prevention: rituximab, eculizumab, satralizumab, inebilizumab', 'DO NOT use MS-specific DMTs (interferon, fingolimod may worsen NMOSD)', 'Long-term immunosuppression essential', 'Low-threshold plasma exchange for severe attacks'],
    'Relapsing course with attack-related disability accumulation. Without prevention therapy, significant disability from optic nerve and spinal cord damage. Modern prevention therapies dramatically reduce relapse rates.',
    'NMOSD is different from MS. It causes attacks on the eye nerves and spinal cord that can be severe. Specific preventive medications are very effective at stopping attacks.',
    ['Acute vision loss', 'Acute paraplegia or quadriplegia', 'Respiratory failure from cervical myelitis', 'Intractable vomiting (area postrema)', 'Bilateral optic neuritis simultaneously'],
  ),

  'acute-disseminated-encephalomyelitis': neuro(
    'acute-disseminated-encephalomyelitis', 'Acute Disseminated Encephalomyelitis (ADEM)', 'Encefalomielitis diseminada aguda', 'demyelinating',
    '8A42', 'Monophasic inflammatory demyelinating disorder of the CNS, typically post-infectious, most common in children.',
    'Post-infectious or post-vaccination autoimmune response causes multifocal perivenular demyelination throughout the brain and spinal cord. Molecular mimicry between microbial antigens and myelin proteins drives the immune attack. Typically a single-episode illness in children.',
    ['Encephalopathy (altered consciousness, confusion - required for diagnosis)', 'Multifocal neurological deficits', 'Fever', 'Headache', 'Seizures', 'Optic neuritis', 'Myelitis', 'Recent viral illness or vaccination (1-4 weeks prior)'],
    ['MRI brain (large, bilateral, asymmetric white matter lesions)', 'MRI spine (may show long lesions)', 'CSF (mild pleocytosis, elevated protein, may have oligoclonal bands)', 'MOG-IgG antibodies (positive in subset)', 'Exclude infection (viral encephalitis)'],
    ['High-dose IV methylprednisolone (first-line)', 'IVIG if steroid-refractory', 'Plasma exchange for severe cases', 'Supportive care and rehabilitation', 'Monitor for rare multiphasic course'],
    'Generally good with full or near-full recovery in most children (60-80%). Adults may have more residual deficits. Multiphasic ADEM or MOG-IgG positivity may indicate relapsing course.',
    'ADEM is a one-time brain inflammation that usually occurs after an infection, most often in children. With treatment, most children recover fully. Follow-up imaging ensures the condition does not return.',
    ['Rapid neurological deterioration', 'Seizures', 'Altered consciousness', 'Respiratory compromise', 'Failure to respond to steroids'],
  ),

  'guillain-barre-syndrome': neuro(
    'guillain-barre-syndrome', 'Guillain-Barre Syndrome', 'Sindrome de Guillain-Barre', 'demyelinating',
    '8C00', 'Acute inflammatory demyelinating polyradiculoneuropathy causing ascending weakness, often post-infectious.',
    'Molecular mimicry: antibodies against microbial antigens (Campylobacter jejuni, CMV, EBV, Zika) cross-react with gangliosides on peripheral nerve myelin. Complement-mediated demyelination causes conduction block. Axonal variants (AMAN/AMSAN) target axonal gangliosides directly.',
    ['Ascending symmetric weakness (legs first)', 'Areflexia or hyporeflexia', 'Distal paresthesias', 'Facial weakness (bilateral in 50%)', 'Autonomic dysfunction (tachycardia, blood pressure lability)', 'Respiratory failure (~30% need ventilation)', 'Preceding infection 1-4 weeks prior'],
    ['CSF: albuminocytologic dissociation (elevated protein, normal cells) - may be normal in first week', 'Nerve conduction studies (demyelinating pattern, conduction block, prolonged F-waves)', 'Serial FVC monitoring (critical)', 'Anti-ganglioside antibodies (GQ1b in Miller Fisher variant)', 'MRI spine (nerve root enhancement)'],
    ['IVIG 0.4 g/kg/day x 5 days OR plasma exchange x 5 sessions (equally effective)', 'Corticosteroids NOT effective in GBS', 'ICU monitoring for respiratory and autonomic failure', 'Intubation if FVC <20 mL/kg or declining', 'DVT prophylaxis', 'Physical rehabilitation', 'Pain management (neuropathic pain common)'],
    '~80% recover ability to walk at 6 months. ~5% mortality. 5-10% have significant residual disability. Recovery may take months to years. Axonal variants have slower recovery.',
    'Guillain-Barre syndrome causes the immune system to attack the nerves, leading to weakness that usually starts in the legs and moves up. Most people recover well, but some need intensive care for breathing support.',
    ['Rapidly declining FVC (approaching 20 mL/kg)', 'Autonomic instability (arrhythmias, blood pressure swings)', 'Bulbar weakness (aspiration risk)', 'Rapid ascending paralysis', 'Inability to stand or walk'],
  ),

  'chronic-inflammatory-demyelinating-polyneuropathy': neuro(
    'chronic-inflammatory-demyelinating-polyneuropathy', 'Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)', 'Polineuropatia desmielinizante inflamatoria cronica', 'demyelinating',
    '8C01', 'Chronic acquired immune-mediated demyelinating neuropathy with progressive or relapsing course over >8 weeks.',
    'Immune-mediated attack on peripheral nerve myelin, similar to GBS but chronic. T-cell and antibody-mediated mechanisms. Unlike GBS, steroids are effective. Must progress for >8 weeks to distinguish from GBS. Variants include multifocal (Lewis-Sumner) and distal (DADS).',
    ['Symmetric proximal and distal weakness', 'Sensory loss (large fiber: vibration, proprioception)', 'Areflexia', 'Progressive course over >2 months', 'Relapsing-remitting or chronic progressive', 'Gait ataxia from proprioceptive loss', 'Cranial nerve involvement uncommon'],
    ['Nerve conduction studies (demyelinating features: prolonged distal latency, slow conduction velocity, temporal dispersion, conduction block)', 'CSF (elevated protein)', 'MRI (nerve root or plexus enhancement)', 'Nerve biopsy in atypical cases (onion bulbs)', 'Exclude mimics: hereditary neuropathy, paraproteinemic neuropathy'],
    ['IVIG (first-line, 2 g/kg over 2-5 days then maintenance)', 'Corticosteroids (prednisolone or pulsed IV methylprednisolone)', 'Plasma exchange', 'Steroid-sparing agents: azathioprine, mycophenolate, rituximab', 'Physical rehabilitation', 'Regular reassessment for treatment reduction'],
    'Most patients (80%) respond to immunotherapy. ~30% achieve remission off treatment. Some require long-term maintenance IVIG or steroids. Axonal damage correlates with disability.',
    'CIDP is a treatable condition where the immune system attacks nerve coverings, causing weakness and numbness. Unlike its acute cousin (GBS), CIDP develops slowly but responds well to ongoing treatment.',
    ['Rapid worsening mimicking GBS', 'Respiratory involvement (rare in CIDP)', 'Significant functional decline', 'Falls from weakness or sensory ataxia', 'Treatment failure requiring therapy change'],
  ),

  // ===== NEUROMUSCULAR (6) ====================================================

  'myasthenia-gravis': neuro(
    'myasthenia-gravis', 'Myasthenia Gravis', 'Miastenia gravis', 'neuromuscular',
    '8C60', 'Autoimmune disorder with antibodies against the neuromuscular junction causing fatigable weakness.',
    'Autoantibodies (anti-AChR in 85%, anti-MuSK in 5-8%) attack the postsynaptic neuromuscular junction, reducing functional acetylcholine receptors. Complement activation destroys the postsynaptic membrane. Thymus abnormalities (hyperplasia or thymoma) are common.',
    ['Fatigable weakness (worse with exertion, better with rest)', 'Ptosis and diplopia (ocular onset in 50%)', 'Bulbar weakness (dysarthria, dysphagia, nasal speech)', 'Proximal limb weakness', 'Respiratory muscle weakness', 'Diurnal fluctuation (worse in evening)', 'No sensory involvement'],
    ['Anti-AChR antibodies (85% positive)', 'Anti-MuSK antibodies (if AChR negative)', 'Repetitive nerve stimulation (decremental response)', 'Single-fiber EMG (increased jitter, most sensitive)', 'CT chest (thymoma screening)', 'Ice pack test for ptosis (bedside)'],
    ['Pyridostigmine (symptomatic)', 'Prednisone (often needed for moderate-severe)', 'Steroid-sparing: azathioprine, mycophenolate, rituximab', 'Thymectomy (for thymoma or generalized AChR+ MG)', 'IVIG or plasma exchange for exacerbations and myasthenic crisis', 'Avoid: aminoglycosides, beta-blockers, magnesium, neuromuscular blockers'],
    'Good with treatment. Most achieve stable remission or minimal symptoms. Thymectomy improves outcomes even without thymoma. Myasthenic crisis requires ICU management but is survivable.',
    'Myasthenia gravis causes muscles to tire easily because the immune system blocks the signal between nerves and muscles. Medications and sometimes surgery are very effective at controlling symptoms.',
    ['Myasthenic crisis (respiratory failure)', 'Rapid worsening of bulbar symptoms (aspiration risk)', 'FVC <20 mL/kg', 'Cholinergic crisis (from pyridostigmine excess)', 'Medication trigger (aminoglycosides, surgery)'],
  ),

  'lambert-eaton-syndrome': neuro(
    'lambert-eaton-syndrome', 'Lambert-Eaton Myasthenic Syndrome', 'Sindrome miasténico de Lambert-Eaton', 'neuromuscular',
    '8C61', 'Autoimmune presynaptic neuromuscular junction disorder with antibodies against voltage-gated calcium channels.',
    'Antibodies against P/Q-type voltage-gated calcium channels (VGCC) on the presynaptic motor nerve terminal reduce acetylcholine release. ~60% are paraneoplastic (small cell lung cancer). Autonomic dysfunction from VGCC antibodies at autonomic synapses.',
    ['Proximal leg weakness (difficulty rising from chair)', 'Weakness improves transiently with repeated effort', 'Hyporeflexia that improves post-exercise', 'Autonomic dysfunction (dry mouth, constipation, erectile dysfunction)', 'Less ocular involvement than MG', 'Cancer association (SCLC)'],
    ['Anti-VGCC antibodies (P/Q type)', 'Repetitive nerve stimulation (incremental response at high-frequency; >100% increment)', 'EMG (low baseline CMAP amplitude)', 'CT chest (screening for SCLC)', 'Whole-body PET-CT if paraneoplastic suspected', 'SOX1 antibodies (if cancer-associated)'],
    ['3,4-Diaminopyridine (amifampridine - first-line symptomatic)', 'IVIG', 'Treat underlying malignancy if paraneoplastic', 'Immunosuppression (prednisone, azathioprine) for autoimmune form', 'Plasma exchange for severe cases', 'Cancer screening every 6 months for 2 years'],
    'Paraneoplastic form: prognosis depends on cancer treatment. Autoimmune form: generally responds to immunotherapy. Improvement with cancer treatment supports paraneoplastic etiology.',
    'Lambert-Eaton syndrome causes weakness because the immune system reduces nerve signals to muscles. It can be associated with cancer, so screening is important. Treatment targeting the immune system is effective.',
    ['Respiratory muscle weakness', 'Rapid worsening suggesting underlying cancer progression', 'Severe autonomic dysfunction', 'Anesthesia risk (sensitivity to neuromuscular blockers)'],
  ),

  'duchenne-muscular-dystrophy': neuro(
    'duchenne-muscular-dystrophy', 'Duchenne Muscular Dystrophy', 'Distrofia muscular de Duchenne', 'neuromuscular',
    '8C70.0', 'X-linked recessive progressive muscular dystrophy caused by absence of dystrophin protein.',
    'Mutations in the DMD gene (Xp21) cause absent or non-functional dystrophin, a structural protein linking the cytoskeleton to the extracellular matrix. Without dystrophin, muscle fibers are vulnerable to contraction-induced injury, undergo necrosis, and are replaced by fibrosis and fat.',
    ['Progressive proximal weakness (onset age 2-5)', 'Gowers sign (uses hands to climb up legs)', 'Pseudohypertrophy of calves', 'Waddling gait', 'Loss of ambulation by age 10-12', 'Cardiomyopathy', 'Respiratory failure', 'Intellectual disability in ~30%'],
    ['Serum CK (markedly elevated, >10,000 U/L)', 'Genetic testing (dystrophin gene deletion/duplication, sequencing)', 'Muscle biopsy (absent dystrophin on immunostaining) if genetic testing inconclusive', 'ECG and echocardiography', 'Pulmonary function tests'],
    ['Corticosteroids (deflazacort or prednisone) - standard of care, prolong ambulation', 'Exon-skipping therapies (eteplirsen, golodirsen for specific mutations)', 'Cardiac management (ACE inhibitors or ARBs, beta-blockers)', 'Non-invasive ventilation for respiratory decline', 'Physical therapy and orthoses', 'Scoliosis surgery when indicated', 'Multidisciplinary care coordination'],
    'Progressive and fatal. Median survival into late 20s-30s with modern care (ventilation, cardiac management). Corticosteroids prolong ambulation by 2-3 years.',
    'Duchenne muscular dystrophy causes progressive muscle weakness starting in early childhood. While there is no cure, corticosteroids and supportive care have significantly improved quality and length of life.',
    ['Respiratory failure', 'Cardiac arrhythmia or cardiomyopathy', 'Fractures from falls or osteoporosis', 'Anesthesia risk (malignant hyperthermia-like, hyperkalemia with succinylcholine)', 'Aspiration'],
  ),

  'diabetic-neuropathy': neuro(
    'diabetic-neuropathy', 'Diabetic Peripheral Neuropathy', 'Neuropatia diabética periférica', 'neuromuscular',
    '8C10.0', 'Most common peripheral neuropathy, caused by chronic hyperglycemia-induced nerve damage.',
    'Chronic hyperglycemia activates polyol pathway, accumulates advanced glycation end-products, increases oxidative stress, and impairs microvascular blood supply to nerves. Small fibers (pain, temperature) are affected first, progressing to large fibers (vibration, proprioception). Distal symmetric polyneuropathy is the most common pattern.',
    ['Distal symmetric "stocking-glove" numbness and tingling', 'Burning or lancinating pain (worse at night)', 'Loss of protective sensation (foot ulcer risk)', 'Decreased ankle reflexes', 'Autonomic neuropathy (gastroparesis, orthostatic hypotension, erectile dysfunction)', 'Diabetic amyotrophy (proximal leg weakness and pain)'],
    ['Clinical examination (monofilament testing, vibration, reflexes)', 'HbA1c and fasting glucose', 'Nerve conduction studies (axonal sensorimotor polyneuropathy)', 'Exclude other causes (B12, TSH, SPEP, HIV)', 'Quantitative sensory testing'],
    ['Glycemic control (most important - slows progression)', 'Neuropathic pain: duloxetine, pregabalin, gabapentin (first-line)', 'Tricyclic antidepressants (amitriptyline, nortriptyline)', 'Topical capsaicin or lidocaine patches', 'Foot care and podiatry referral', 'Annual foot examinations', 'Treatment of autonomic symptoms'],
    'Irreversible once established, but tight glucose control prevents progression. Pain may improve with treatment. Foot ulcers and amputations are preventable with proper foot care.',
    'Diabetes can damage nerves over time, especially in the feet. Keeping blood sugar controlled is the best way to prevent nerve damage from worsening. Daily foot checks are very important.',
    ['Non-healing foot ulcer', 'Charcot foot (acute warm swollen foot)', 'Severe gastroparesis with dehydration', 'Painless myocardial infarction (cardiac autonomic neuropathy)', 'Sudden unilateral foot drop'],
  ),

  'alcoholic-neuropathy': neuro(
    'alcoholic-neuropathy', 'Alcoholic Neuropathy', 'Neuropatia alcohólica', 'neuromuscular',
    '8C10.1', 'Peripheral neuropathy from chronic alcohol use, involving direct toxic and nutritional deficiency mechanisms.',
    'Dual mechanism: direct ethanol neurotoxicity to peripheral nerves and nutritional deficiency (particularly thiamine and other B vitamins). Affects small and large nerve fibers. Axonal degeneration predominates, with distal-to-proximal gradient.',
    ['Painful burning dysesthesias in feet', 'Distal symmetric sensory loss', 'Weakness (late, distal > proximal)', 'Diminished ankle reflexes', 'Gait instability', 'Autonomic symptoms (tachycardia, orthostatic hypotension)'],
    ['Clinical history of heavy alcohol use', 'Nerve conduction studies (axonal pattern)', 'Thiamine, folate, B12, methylmalonic acid levels', 'Liver function tests', 'Exclude other causes of neuropathy'],
    ['Alcohol cessation (essential)', 'Thiamine supplementation (high-dose initially)', 'B-complex vitamins', 'Neuropathic pain management (gabapentin, pregabalin, duloxetine)', 'Physical rehabilitation', 'Nutritional optimization'],
    'Partial improvement possible with abstinence and nutritional repletion. Sensory symptoms may stabilize. Complete recovery is uncommon if advanced.',
    'Alcohol can directly damage nerves and also causes vitamin deficiencies that harm nerves. Stopping alcohol and taking B vitamins are the most important steps. Some improvement is possible.',
    ['Wernicke encephalopathy symptoms (confusion, ophthalmoplegia, ataxia)', 'Acute worsening suggesting Wernicke encephalopathy', 'Severe autonomic dysfunction', 'Falls from gait instability'],
  ),

  'b12-deficiency-neuropathy': neuro(
    'b12-deficiency-neuropathy', 'Vitamin B12 Deficiency Neuropathy', 'Neuropatia por deficiencia de vitamina B12', 'neuromuscular',
    '8C10.2', 'Neuropathy and myelopathy from B12 deficiency, causing subacute combined degeneration of the spinal cord.',
    'B12 is a cofactor for methionine synthase and methylmalonyl-CoA mutase. Deficiency impairs myelin synthesis in peripheral nerves and posterior/lateral columns of the spinal cord (subacute combined degeneration). Causes: pernicious anemia, vegan diet, metformin use, gastrectomy, malabsorption.',
    ['Distal paresthesias (hands and feet)', 'Loss of vibration and proprioception (posterior columns)', 'Sensory ataxia with positive Romberg sign', 'Spastic paraparesis (lateral corticospinal tracts)', 'Absent ankle reflexes with extensor plantar responses', 'Cognitive changes and depression', 'Glossitis'],
    ['Serum B12 level (<200 pg/mL)', 'Methylmalonic acid and homocysteine (elevated)', 'CBC (macrocytic anemia may or may not be present)', 'Anti-intrinsic factor antibodies', 'MRI spine (T2 signal in posterior columns)', 'Nerve conduction studies'],
    ['IM cyanocobalamin 1000 mcg daily x 7 days, then weekly x 4 weeks, then monthly', 'High-dose oral B12 (2000 mcg daily) for mild deficiency', 'Treat underlying cause', 'Monitor neurological recovery over months', 'Address concurrent folate or iron deficiency'],
    'Hematologic findings reverse promptly. Neurological recovery depends on duration; deficits present >6 months may be permanent. Early treatment is critical.',
    'Vitamin B12 is essential for nerve health. Deficiency can damage the spinal cord and peripheral nerves. B12 injections or high-dose pills can stop the damage, and early treatment gives the best chance of recovery.',
    ['Rapidly progressive myelopathy', 'Severe gait ataxia with falls', 'Neuropsychiatric symptoms (psychosis, dementia)', 'Pancytopenia'],
  ),

  // ===== HEADACHE (6) =========================================================

  'migraine-with-aura': neuro(
    'migraine-with-aura', 'Migraine with Aura', 'Migrana con aura', 'headache',
    '8A80.1', 'Recurrent headache disorder preceded by reversible focal neurological symptoms (aura).',
    'Cortical spreading depression: a wave of neuronal depolarization followed by suppression that spreads across the cortex at 3 mm/min. This causes the aura and triggers trigeminal activation, neurogenic inflammation, and CGRP release, producing headache. Increased risk of stroke in women with aura who smoke or use estrogen-containing contraceptives.',
    ['Visual aura most common (scintillating scotoma, fortification spectra)', 'Sensory aura (unilateral paresthesias)', 'Speech disturbance (aphasia)', 'Aura develops over 5-60 minutes and resolves before or during headache', 'Unilateral throbbing headache', 'Nausea, photophobia, phonophobia', 'Duration 4-72 hours'],
    ['Clinical diagnosis (ICHD-3 criteria)', 'Neuroimaging not routinely needed if typical presentation', 'MRI brain if atypical aura, new onset over age 50, or prolonged aura', 'Consider hypercoagulability workup if stroke-like episodes'],
    ['Acute: triptans (sumatriptan), NSAIDs, anti-emetics', 'Avoid estrogen-containing contraceptives', 'Preventive if >=4 attacks/month: CGRP monoclonal antibodies (erenumab, galcanezumab), topiramate, propranolol, amitriptyline, valproate', 'Gepants (ubrogepant, rimegepant) for acute or preventive use', 'Lifestyle: regular sleep, hydration, trigger avoidance'],
    'Chronic relapsing condition. Aura frequency may decrease with age. Risk of migrainous infarction is small but real. Preventive therapy reduces attack frequency by 50% or more.',
    'Migraine with aura involves visual or sensory symptoms before the headache. Identifying and avoiding triggers, along with modern preventive medications, can significantly reduce attacks.',
    ['Aura lasting >60 minutes (possible stroke)', 'New-onset aura symptoms', 'Worst headache of life', 'Focal neurological deficit persisting after aura', 'Thunderclap onset'],
  ),

  'migraine-without-aura': neuro(
    'migraine-without-aura', 'Migraine without Aura', 'Migrana sin aura', 'headache',
    '8A80.0', 'Most common migraine subtype, presenting with recurrent moderate-to-severe headache without preceding aura.',
    'Trigeminovascular activation releases CGRP and other neuropeptides, causing meningeal vasodilation and neurogenic inflammation. Central sensitization leads to allodynia and photophobia. Brainstem migraine generator in dorsal pons and periaqueductal gray.',
    ['Unilateral pulsating headache (may be bilateral)', 'Moderate to severe intensity', 'Aggravated by routine physical activity', 'Nausea and/or vomiting', 'Photophobia and phonophobia', 'Duration 4-72 hours', 'Prodrome (yawning, food cravings, mood changes)', 'Postdrome ("migraine hangover")'],
    ['Clinical diagnosis (ICHD-3: >=5 attacks meeting criteria)', 'Headache diary', 'Neuroimaging if atypical features, sudden change in pattern, or first presentation >50 years', 'Exclude secondary causes'],
    ['Acute: triptans, NSAIDs, combination analgesics, gepants', 'Anti-emetics (metoclopramide, ondansetron)', 'Avoid medication overuse (>10-15 days/month)', 'Preventive: CGRP monoclonal antibodies, topiramate, propranolol, amitriptyline, candesartan', 'Non-pharmacologic: biofeedback, cognitive behavioral therapy, neuromodulation devices'],
    'Variable. Many patients experience improvement with age, especially in women after menopause. Chronic migraine (>=15 days/month) develops in ~3% per year. Preventive treatment is effective.',
    'Migraine is a brain condition that causes recurring headaches with nausea and sensitivity to light. It is not just a headache. Effective treatments exist for both stopping and preventing attacks.',
    ['Sudden onset "worst headache ever" (rule out SAH)', 'New neurological deficit', 'Fever with headache (rule out meningitis)', 'Status migrainosus (>72 hours)', 'Medication overuse headache'],
  ),

  'cluster-headache': neuro(
    'cluster-headache', 'Cluster Headache', 'Cefalea en racimos', 'headache',
    '8A81', 'Severe unilateral periorbital headache with ipsilateral autonomic features, occurring in clusters.',
    'Hypothalamic activation (posterior hypothalamus is the "cluster generator") drives the trigeminal-autonomic reflex arc. Parasympathetic activation via the sphenopalatine ganglion causes lacrimation, rhinorrhea, and conjunctival injection. Strong circadian and circannual periodicity.',
    ['Excruciating unilateral periorbital pain', 'Ipsilateral lacrimation and conjunctival injection', 'Nasal congestion or rhinorrhea', 'Ptosis and miosis (partial Horner syndrome)', 'Restlessness and agitation during attack', 'Duration 15-180 minutes', 'Frequency: 1-8 attacks/day during cluster period', 'Cluster periods last weeks to months with remissions'],
    ['Clinical diagnosis (ICHD-3 criteria)', 'MRI brain (exclude structural lesion, especially pituitary)', 'Exclude secondary causes (carotid dissection, posterior fossa lesion)', 'Polysomnography if sleep apnea suspected as trigger'],
    ['Acute: high-flow oxygen 12-15 L/min via non-rebreather (first-line), subcutaneous sumatriptan 6 mg', 'Transitional: prednisone taper, greater occipital nerve block', 'Preventive: verapamil (first-line, requires ECG monitoring), lithium, topiramate', 'Galcanezumab (CGRP antibody) for episodic cluster', 'Neuromodulation (vagus nerve, SPG stimulator) for refractory cases'],
    'Episodic form: cluster periods with months-to-years remissions. Chronic form (~15%): no significant remission. Attacks remain severe but preventive therapy can reduce burden.',
    'Cluster headache causes extremely intense pain around one eye, with tearing and nasal congestion. High-flow oxygen and injectable medication can stop attacks quickly. Preventive medication reduces attack frequency during cluster periods.',
    ['First-ever attack (exclude secondary cause)', 'Prolonged attack or status cluster', 'Failure of oxygen and triptans', 'New Horner syndrome (exclude carotid dissection)', 'Suicidal ideation from pain severity'],
  ),

  'tension-type-headache': neuro(
    'tension-type-headache', 'Tension-Type Headache', 'Cefalea tensional', 'headache',
    '8A82', 'Most prevalent primary headache, characterized by bilateral pressing/tightening pain of mild-to-moderate intensity.',
    'Peripheral mechanism: myofascial tenderness and pericranial muscle contraction. Central mechanism: sensitization of second-order neurons in trigeminal nucleus caudalis and impaired descending pain modulation. Chronic form involves central sensitization more prominently.',
    ['Bilateral pressing or tightening quality (non-pulsating)', 'Mild to moderate intensity', 'Not aggravated by routine physical activity', 'No nausea (mild photophobia OR phonophobia may be present, not both)', 'Duration 30 minutes to 7 days', 'Episodic (<15 days/month) or chronic (>=15 days/month)'],
    ['Clinical diagnosis (ICHD-3 criteria)', 'No routine neuroimaging needed for typical presentation', 'Consider imaging if features change or secondary features develop', 'Headache diary to distinguish from migraine'],
    ['Acute: simple analgesics (acetaminophen, NSAIDs)', 'Avoid frequent analgesic use (risk of medication overuse headache)', 'Preventive (if chronic): amitriptyline (first-line), mirtazapine, venlafaxine', 'Non-pharmacologic: stress management, physical therapy, biofeedback, regular exercise', 'Cognitive behavioral therapy for chronic form'],
    'Episodic: excellent with lifestyle modification and simple analgesics. Chronic: may be disabling; responds to amitriptyline and behavioral approaches.',
    'Tension-type headaches are the most common headache type, causing a pressing or tight sensation. Over-the-counter pain relievers work well occasionally, but frequent use can worsen headaches. Stress management and regular exercise help prevent them.',
    ['Sudden change in headache pattern', 'New neurological symptoms', 'Headache awakening from sleep regularly', 'Progressive worsening despite treatment', 'New onset in patient >50 years'],
  ),

  'trigeminal-neuralgia': neuro(
    'trigeminal-neuralgia', 'Trigeminal Neuralgia', 'Neuralgia del trigémino', 'headache',
    '8B82.0', 'Severe paroxysmal unilateral facial pain in the distribution of one or more trigeminal nerve branches.',
    'Classical: neurovascular compression of the trigeminal root entry zone (usually superior cerebellar artery) causes focal demyelination, leading to ephaptic transmission and ectopic firing. Secondary causes: MS plaques in the pons, cerebellopontine angle tumors. Idiopathic: no identifiable cause on imaging.',
    ['Electric shock-like, stabbing, lancinating pain', 'Duration: seconds to 2 minutes per paroxysm', 'V2/V3 distribution most common (V1 less common)', 'Triggered by light touch (eating, brushing teeth, wind, talking)', 'Refractory period after attack', 'No neurological deficit between attacks (if classical)', 'May have continuous background pain between paroxysms'],
    ['MRI brain with thin-cut posterior fossa sequences (neurovascular compression, MS, tumor)', 'Trigeminal reflex testing (blink reflex)', 'Clinical diagnosis based on ICHD-3 criteria', 'MR angiography if surgical planning'],
    ['Carbamazepine (first-line, NNT ~1.5) or oxcarbazepine', 'Baclofen or lamotrigine as add-on', 'Microvascular decompression (Jannetta procedure) for classical TN refractory to medication', 'Stereotactic radiosurgery (Gamma Knife)', 'Percutaneous procedures (balloon compression, glycerol rhizotomy, radiofrequency thermocoagulation)', 'Treat underlying cause if secondary'],
    'Carbamazepine effective in 70-80%. Microvascular decompression provides long-term relief in 80% with classical TN. Recurrence rates higher with ablative procedures.',
    'Trigeminal neuralgia causes brief but extremely intense facial pain, often triggered by everyday activities like eating or talking. Medication is effective for most, and surgery is an option if medication is insufficient.',
    ['Sudden severe facial pain not responding to carbamazepine', 'Neurological deficit suggesting secondary cause', 'Bilateral symptoms (suggest MS)', 'Weight loss from inability to eat', 'New onset in patient <40 years (evaluate for MS)'],
  ),

  'idiopathic-intracranial-hypertension': neuro(
    'idiopathic-intracranial-hypertension', 'Idiopathic Intracranial Hypertension', 'Hipertensión intracraneal idiopática', 'headache',
    '8A64', 'Elevated intracranial pressure without hydrocephalus, mass lesion, or identifiable cause.',
    'Impaired CSF absorption at arachnoid granulations or increased venous sinus pressure leads to elevated ICP. Strongly associated with obesity and female sex. Venous sinus stenosis (possibly cause or effect) identified in many patients. Medications: tetracyclines, vitamin A, growth hormone.',
    ['Daily headache (worse with Valsalva, positional)', 'Transient visual obscurations', 'Pulsatile tinnitus', 'Papilledema on fundoscopy', 'Visual field loss (enlarged blind spot, nasal field loss)', 'Diplopia from CN VI palsy', 'Predominantly affects obese women of childbearing age'],
    ['Fundoscopy (papilledema)', 'MRI brain with MRV (exclude mass, hydrocephalus, venous thrombosis; may show empty sella, flattened posterior sclera, optic nerve sheath distention)', 'Lumbar puncture with opening pressure (>25 cmH2O in adult)', 'Normal CSF composition', 'Formal visual field testing (perimetry)', 'OCT (retinal nerve fiber layer thickening)'],
    ['Weight loss (10-15% body weight; most effective long-term)', 'Acetazolamide (500-4000 mg/day, titrate to response)', 'Topiramate (adjunctive; promotes weight loss)', 'Serial lumbar punctures for acute visual loss', 'Optic nerve sheath fenestration (for vision-threatening papilledema)', 'CSF shunting (VP or LP shunt) for refractory cases', 'Venous sinus stenting (emerging treatment)'],
    'Good if treated early. Vision loss is the major morbidity and can be permanent if untreated. Weight loss produces sustained improvement. ~40% have chronic or recurrent course.',
    'This condition means the pressure inside the skull is too high without an obvious cause. It mainly affects young women who are overweight. Weight loss and medication to reduce fluid pressure protect vision. Regular eye exams are essential.',
    ['Rapid visual decline', 'New visual field deficit', 'Severe papilledema with hemorrhages', 'Acute CN VI palsy', 'Headache not responding to maximum medical therapy'],
  ),

  // ===== MOVEMENT DISORDERS (4) ===============================================

  'essential-tremor': neuro(
    'essential-tremor', 'Essential Tremor', 'Temblor esencial', 'movement-disorder',
    '8A04.0', 'Most common movement disorder, causing bilateral action tremor of the hands, forearms, and sometimes head or voice.',
    'Cerebellar-thalamocortical circuit dysfunction. Oscillatory activity in the cerebellothalamic pathway generates the tremor. GABA-ergic dysfunction in the cerebellum may play a role. Familial in >50% of cases (autosomal dominant with variable penetrance).',
    ['Bilateral postural and kinetic tremor of hands (4-12 Hz)', 'Head tremor (no-no or yes-yes)', 'Voice tremor', 'Improved by alcohol (characteristic)', 'No resting tremor component (distinguishes from PD)', 'Slow progression over years', 'May cause functional disability (writing, eating, drinking)'],
    ['Clinical diagnosis', 'Tremor analysis (accelerometry if needed)', 'DaTscan (normal, to exclude Parkinson disease)', 'Thyroid function tests', 'Medication and substance review', 'Neuroimaging if atypical features'],
    ['Propranolol (first-line)', 'Primidone (first-line alternative)', 'Topiramate, gabapentin, benzodiazepines (second-line)', 'Botulinum toxin for head or voice tremor', 'Deep brain stimulation (VIM thalamus) for refractory disabling tremor', 'MRI-guided focused ultrasound (thalamotomy)', 'Occupational therapy for functional aids'],
    'Slowly progressive. Many patients manage with medication or lifestyle adaptation. Disability increases with age. DBS provides sustained benefit in severe cases.',
    'Essential tremor is the most common cause of shaking and tends to run in families. It mainly affects the hands during activities. Effective medications and procedures are available for when tremor interferes with daily life.',
    ['Sudden onset or rapid worsening (exclude secondary causes)', 'Resting tremor developing (reassess for PD)', 'Severe disability affecting independence', 'New additional neurological signs'],
  ),

  'dystonia': neuro(
    'dystonia', 'Dystonia', 'Distonía', 'movement-disorder',
    '8A02', 'Movement disorder characterized by sustained or intermittent muscle contractions causing abnormal postures or movements.',
    'Dysfunction of basal ganglia-thalamocortical circuits leads to loss of inhibition and overflow of motor activity. May be genetic (DYT genes), acquired (perinatal injury, drugs, Wilson disease), or idiopathic. Neuroplastic changes in sensorimotor cortex contribute to chronicity.',
    ['Sustained or intermittent muscle contractions', 'Abnormal postures (torticollis, writer\'s cramp)', 'Patterned, directional, and often repetitive movements', 'Sensory trick (geste antagoniste) that alleviates dystonia', 'Worsened by voluntary action (action-specific dystonia)', 'May be focal, segmental, multifocal, or generalized'],
    ['Clinical assessment of dystonia distribution and pattern', 'MRI brain (exclude structural causes)', 'Wilson disease workup (ceruloplasmin, 24-hour urine copper, slit lamp for KF rings) in young-onset', 'DYT1 genetic testing for early-onset generalized dystonia', 'Drug history (neuroleptics, metoclopramide)'],
    ['Botulinum toxin injection (first-line for focal dystonia)', 'Oral medications: trihexyphenidyl (anticholinergic), baclofen, benzodiazepines', 'Deep brain stimulation (GPi) for generalized or refractory focal dystonia', 'Physical therapy and sensory re-training', 'Treat underlying cause if secondary (Wilson disease: penicillamine, zinc)'],
    'Focal dystonia: often chronic but manageable with botulinum toxin. Generalized: DBS can be transformative, especially in DYT1-positive. Secondary dystonia prognosis depends on etiology.',
    'Dystonia causes involuntary muscle contractions leading to abnormal postures. Botulinum toxin injections are very effective for localized forms. For more widespread dystonia, brain stimulation surgery can help significantly.',
    ['Acute dystonic reaction (from neuroleptics - treat with IV diphenhydramine or benztropine)', 'Status dystonicus (life-threatening continuous dystonia)', 'Respiratory compromise from laryngeal dystonia', 'Dysphagia from cervical dystonia'],
  ),

  'tardive-dyskinesia': neuro(
    'tardive-dyskinesia', 'Tardive Dyskinesia', 'Discinesia tardía', 'movement-disorder',
    '8A04.1', 'Involuntary choreiform movements, typically orofacial, caused by chronic dopamine receptor-blocking agent exposure.',
    'Chronic blockade of D2 dopamine receptors (by antipsychotics, metoclopramide) causes receptor upregulation and supersensitivity. Impaired striatal cholinergic interneuron function and oxidative stress contribute. Risk increases with duration of exposure, older age, female sex, and affective disorders.',
    ['Repetitive orofacial movements (lip smacking, tongue protrusion, chewing)', 'Choreiform limb movements', 'Trunk rocking', 'Respiratory dyskinesia (rare)', 'May persist after discontinuation of causative agent', 'Onset after months to years of dopamine blocker exposure'],
    ['Clinical diagnosis (AIMS - Abnormal Involuntary Movement Scale)', 'History of dopamine receptor-blocking agent use', 'Exclude other causes of chorea (Huntington disease, Wilson disease, hyperthyroidism)', 'Drug history review'],
    ['VMAT2 inhibitors: valbenazine or deutetrabenazine (FDA-approved for TD)', 'Reduce or switch causative antipsychotic if clinically possible', 'Avoid abrupt antipsychotic discontinuation (may worsen TD)', 'Avoid anticholinergics (may worsen TD)', 'Regular AIMS monitoring for patients on antipsychotics'],
    'VMAT2 inhibitors improve TD in ~40-50%. Some cases are irreversible despite stopping the offending agent. Early detection and intervention improve outcomes.',
    'Tardive dyskinesia causes involuntary facial and body movements from long-term use of certain medications. New treatments (VMAT2 inhibitors) can reduce these movements. Talk to your doctor before changing any medications.',
    ['Severe functional impairment (eating, breathing)', 'Respiratory dyskinesia', 'Rapid worsening after medication change', 'Suicidal ideation related to disfiguring movements'],
  ),

  'restless-legs-syndrome': neuro(
    'restless-legs-syndrome', 'Restless Legs Syndrome', 'Sindrome de piernas inquietas', 'movement-disorder',
    '8A06.Y', 'Sensorimotor disorder with an irresistible urge to move the legs, worse at rest and in the evening.',
    'Dopaminergic dysfunction in the A11 diencephalospinal pathway and brain iron deficiency (even with normal serum ferritin) are central mechanisms. Iron is a cofactor for tyrosine hydroxylase, the rate-limiting enzyme in dopamine synthesis. Genetic contribution (BTBD9, MEIS1 loci).',
    ['Urge to move legs, often with uncomfortable sensations', 'Symptoms at rest (sitting, lying)', 'Relief with movement', 'Worse in evening/night (circadian pattern)', 'Periodic limb movements during sleep (PLMS)', 'Insomnia and daytime fatigue', 'May affect arms'],
    ['Clinical diagnosis (IRLSSG essential criteria)', 'Serum ferritin (target >75 ng/mL for RLS)', 'Iron studies', 'Exclude secondary causes: iron deficiency, renal failure, pregnancy, neuropathy', 'Polysomnography if PLMS assessment needed'],
    ['Iron supplementation if ferritin <75 ng/mL (oral or IV iron)', 'Alpha-2-delta ligands: gabapentin enacarbil or pregabalin (first-line)', 'Low-dose dopamine agonists (pramipexole, ropinirole, rotigotine patch) short-term', 'Avoid dopamine agonist augmentation (worsening of RLS)', 'Avoid antihistamines, SSRIs, antipsychotics (worsen RLS)', 'Sleep hygiene, regular exercise'],
    'Chronic condition. Iron repletion may resolve secondary RLS. Dopamine agonist augmentation is a major complication requiring medication switch. Alpha-2-delta ligands have lower augmentation risk.',
    'Restless legs syndrome causes an uncomfortable urge to move your legs, especially at night. Checking and treating low iron levels is the first step. Effective medications can improve sleep and quality of life.',
    ['Severe insomnia from RLS', 'Dopamine agonist augmentation (worsening symptoms)', 'Suicidal ideation from sleep deprivation', 'Impulse control disorders from dopamine agonists'],
  ),

  // ===== NEURO-ONCOLOGY (4) ===================================================

  'glioblastoma': neuro(
    'glioblastoma', 'Glioblastoma (Grade 4 Astrocytoma)', 'Glioblastoma', 'neuro-oncology',
    '2A00.0', 'Most common and aggressive primary malignant brain tumor in adults.',
    'IDH-wildtype high-grade astrocytoma with hallmarks of microvascular proliferation, necrosis, and rapid infiltrative growth. TERT promoter mutations, +7/-10 chromosomal changes, and EGFR amplification are characteristic molecular features. Highly invasive along white matter tracts, precluding complete resection.',
    ['Progressive headache (worse in morning, with Valsalva)', 'Focal neurological deficits depending on location', 'Seizures (~30%)', 'Cognitive decline and personality changes', 'Nausea and vomiting from raised ICP', 'Rapid symptom progression over weeks to months'],
    ['MRI with contrast (ring-enhancing mass with central necrosis, surrounding edema)', 'Stereotactic biopsy or surgical resection with histopathology', 'Molecular profiling (IDH, MGMT promoter methylation, TERT, EGFR)', 'MR spectroscopy and perfusion (elevated choline, cerebral blood volume)', 'CT chest/body if metastases suspected'],
    ['Maximal safe surgical resection', 'Stupp protocol: concurrent temozolomide + radiotherapy (60 Gy/30 fractions), then adjuvant temozolomide x 6 cycles', 'Tumor-treating fields (TTFields)', 'Dexamethasone for peritumoral edema', 'Antiepileptic drugs if seizures', 'Bevacizumab for recurrence (improves symptoms, not survival)', 'Clinical trials', 'Palliative care integration early'],
    'Median survival 14-16 months with standard treatment. MGMT methylation confers better response to temozolomide (median survival ~21 months). 5-year survival <7%. Recurrence is near-universal.',
    'Glioblastoma is an aggressive brain tumor. Treatment involves surgery, radiation, and chemotherapy. While it is serious, treatment extends life and maintains quality. Clinical trials offer access to new therapies.',
    ['Rapid neurological deterioration', 'Signs of herniation (dilated pupil, posturing)', 'Seizures', 'Severe headache with vomiting', 'Acute hemorrhage into tumor'],
  ),

  'meningioma': neuro(
    'meningioma', 'Meningioma', 'Meningioma', 'neuro-oncology',
    '2A01.0', 'Most common primary intracranial tumor, arising from arachnoid cap cells, usually benign (WHO Grade 1).',
    'Arises from meningothelial (arachnoid cap) cells of the meninges. Usually slow-growing, well-circumscribed, extra-axial tumors. NF2 gene mutations common. More frequent in women (estrogen/progesterone receptor expression). WHO Grade 1 (benign 80%), Grade 2 (atypical 15-20%), Grade 3 (malignant 1-3%).',
    ['Often asymptomatic (incidental finding)', 'Headache', 'Seizures', 'Focal deficits depending on location (parasagittal: leg weakness; sphenoid wing: vision changes; olfactory groove: anosmia)', 'Proptosis (sphenoid wing)', 'Cognitive changes for large frontal tumors', 'Hyperostosis of adjacent bone'],
    ['MRI with contrast (intensely homogeneously enhancing extra-axial mass, dural tail sign)', 'CT (hyperostosis, calcification)', 'MR venography if near dural sinuses', 'Observation with serial imaging for small asymptomatic lesions'],
    ['Observation with serial MRI (small, asymptomatic)', 'Surgical resection (Simpson grade determines recurrence risk)', 'Stereotactic radiosurgery (Gamma Knife) for small, surgically inaccessible, or recurrent tumors', 'Fractionated radiotherapy for large or atypical tumors', 'Pre-operative embolization for vascular tumors'],
    'WHO Grade 1: 10-year recurrence ~10% after gross total resection. Grade 2: higher recurrence requiring adjuvant radiation. Grade 3: aggressive, worse prognosis. Most meningiomas are benign and curable.',
    'Meningiomas are usually benign brain tumors that grow slowly. Many can be simply monitored with periodic MRI scans. If treatment is needed, surgery or focused radiation is often curative.',
    ['Acute neurological deficit from mass effect', 'Seizures', 'Visual loss (optic nerve compression)', 'Rapid growth on serial imaging', 'Peritumoral edema causing symptoms'],
  ),

  'acoustic-neuroma': neuro(
    'acoustic-neuroma', 'Vestibular Schwannoma (Acoustic Neuroma)', 'Schwannoma vestibular (Neurinoma del acústico)', 'neuro-oncology',
    '2F80', 'Benign tumor of the Schwann cells of the vestibular nerve (CN VIII), located in the cerebellopontine angle.',
    'Arises from Schwann cells of the vestibular division of CN VIII. Loss-of-function mutations in NF2 (merlin) gene. Bilateral acoustic neuromas are pathognomonic for neurofibromatosis type 2. Slow-growing; compresses adjacent structures (CN VII, brainstem, cerebellum) as it enlarges.',
    ['Unilateral sensorineural hearing loss (gradual, most common)', 'Tinnitus (unilateral)', 'Disequilibrium or unsteadiness (true vertigo less common)', 'Facial numbness (CN V) with large tumors', 'Facial weakness (CN VII) - late finding', 'Hydrocephalus with very large tumors'],
    ['MRI with gadolinium (enhancing CPA mass centered on IAC)', 'Audiometry (asymmetric sensorineural hearing loss, poor speech discrimination)', 'ABR (auditory brainstem response) for screening', 'CT temporal bones (widened IAC)', 'Genetic testing if bilateral (NF2)'],
    ['Observation with serial MRI (small tumors with preserved hearing)', 'Microsurgical resection (translabyrinthine, retrosigmoid, or middle fossa approach)', 'Stereotactic radiosurgery (Gamma Knife) for tumors <3 cm', 'Hearing rehabilitation (hearing aids, cochlear implant, BAHA)', 'Monitor CN VII function'],
    'Benign and slow-growing. Radiosurgery controls growth in >90%. Surgery risks hearing loss and facial nerve injury but is curative. Small tumors may not grow for years.',
    'An acoustic neuroma is a benign growth on the hearing and balance nerve. Many small tumors can be watched with MRI. Treatment options include focused radiation or surgery, and the goal is to preserve hearing and facial movement.',
    ['Sudden hearing loss', 'Facial weakness', 'Signs of brainstem compression', 'Hydrocephalus symptoms (headache, gait difficulty, cognitive changes)', 'Rapid tumor growth'],
  ),

  'brain-metastases': neuro(
    'brain-metastases', 'Brain Metastases', 'Metástasis cerebrales', 'neuro-oncology',
    '2D6Z', 'Secondary brain tumors from hematogenous spread of systemic cancer; most common intracranial tumors in adults.',
    'Cancer cells cross the blood-brain barrier via hematogenous spread, establishing metastatic deposits most commonly at the gray-white junction (watershed territory with narrowing vessels). Most common primaries: lung (most frequent), breast, melanoma, renal cell, and colorectal cancer. Peritumoral edema causes significant mass effect.',
    ['Headache (~50%)', 'Focal neurological deficits', 'Seizures (~20%)', 'Cognitive dysfunction', 'Signs of elevated ICP', 'Symptoms may be first presentation of cancer', 'Multiple lesions common'],
    ['MRI with contrast (enhancing lesions at gray-white junction, often multiple, surrounding edema)', 'CT chest/abdomen/pelvis for primary cancer workup', 'PET-CT', 'Stereotactic biopsy if primary unknown', 'Molecular profiling of primary tumor (guides systemic therapy)'],
    ['Dexamethasone for peritumoral edema', 'Stereotactic radiosurgery (SRS) for limited metastases (1-4 lesions, <3 cm)', 'Whole-brain radiotherapy (WBRT) for multiple metastases', 'Surgical resection for large symptomatic single metastasis', 'Systemic therapy: immunotherapy and targeted therapy increasingly effective (melanoma, lung)', 'Anticonvulsants only if seizures occur (not prophylactic)', 'Best supportive care and palliative input'],
    'Depends on primary tumor biology, number of metastases, and extracranial disease. Median survival 6-12 months historically, but immunotherapy and targeted agents have dramatically improved outcomes in some cancers.',
    'Brain metastases mean cancer from elsewhere in the body has spread to the brain. Treatment has improved significantly with focused radiation and new drug therapies. Outcomes depend on the type of original cancer.',
    ['Rapid neurological decline (herniation risk)', 'Seizures', 'Hemorrhage into metastasis (melanoma, renal cell)', 'Leptomeningeal disease (poor prognosis)', 'Status epilepticus'],
  ),

  // ===== INFECTIOUS (3) =======================================================

  'bacterial-meningitis': neuro(
    'bacterial-meningitis', 'Bacterial Meningitis', 'Meningitis bacteriana', 'infectious',
    '8A50.0', 'Acute bacterial infection of the leptomeninges and cerebrospinal fluid, a medical emergency.',
    'Bacteria reach the meninges via hematogenous spread, direct extension (sinusitis, otitis), or post-neurosurgical/trauma. Most common organisms: Streptococcus pneumoniae and Neisseria meningitidis in adults; Group B Streptococcus, E. coli, and Listeria in neonates. Inflammatory cascade causes cerebral edema, raised ICP, and ischemia.',
    ['Headache, fever, nuchal rigidity (classic triad)', 'Altered mental status', 'Photophobia', 'Petechial or purpuric rash (meningococcal)', 'Kernig and Brudzinski signs', 'Seizures', 'Cranial nerve palsies', 'Neonates: irritability, poor feeding, bulging fontanelle'],
    ['Blood cultures (before antibiotics if possible)', 'Lumbar puncture (elevated WBC with neutrophil predominance, elevated protein, low glucose, elevated opening pressure)', 'CSF Gram stain and culture', 'CSF multiplex PCR panel', 'CT head before LP if: focal deficit, papilledema, altered consciousness, immunocompromised, seizure', 'Procalcitonin and CRP'],
    ['DO NOT delay antibiotics for imaging or LP', 'Empiric: ceftriaxone + vancomycin (add ampicillin if Listeria risk)', 'Dexamethasone 0.15 mg/kg before or with first antibiotic dose (reduces mortality in pneumococcal meningitis)', 'Adjust antibiotics based on culture and sensitivity', 'Supportive: ICP management, seizure treatment, fluid management', 'Close contacts: rifampin or ciprofloxacin prophylaxis for meningococcal meningitis'],
    'Mortality 15-25% even with treatment. Neurological sequelae in 30% (hearing loss, cognitive impairment, seizures). Pneumococcal meningitis has highest mortality (~30%). Dexamethasone reduces mortality and sequelae.',
    'Bacterial meningitis is a serious brain infection requiring emergency antibiotics. Do not wait for test results to start treatment. Most people survive with prompt care, but some may have lasting effects like hearing loss.',
    ['Rapid deterioration in consciousness', 'Seizures', 'Signs of septic shock (hypotension, tachycardia)', 'Spreading purpuric rash (meningococcal sepsis)', 'Signs of herniation', 'New focal neurological deficit'],
  ),

  'viral-meningitis': neuro(
    'viral-meningitis', 'Viral (Aseptic) Meningitis', 'Meningitis viral', 'infectious',
    '8A50.1', 'Self-limited viral infection of the meninges, most commonly caused by enteroviruses.',
    'Viral replication in the meninges causes lymphocytic inflammation. Most common: enteroviruses (echovirus, coxsackievirus), herpes simplex type 2, varicella-zoster, mumps, and arboviruses. Less severe inflammatory response than bacterial meningitis. Usually hematogenous spread.',
    ['Headache and fever', 'Nuchal rigidity (milder than bacterial)', 'Photophobia', 'Malaise and myalgias', 'Nausea and vomiting', 'Alert or mildly altered mental status', 'Rash may be present (enteroviral, varicella)', 'Self-limited course (7-10 days)'],
    ['Lumbar puncture (lymphocytic pleocytosis, normal or mildly elevated protein, normal glucose)', 'CSF viral PCR panel (enterovirus, HSV, VZV)', 'CSF bacterial culture (to exclude bacterial meningitis)', 'CBC, CRP (less elevated than bacterial)', 'May be initially difficult to distinguish from early bacterial meningitis'],
    ['Supportive care (analgesics, antiemetics, hydration)', 'Acyclovir if HSV-2 or VZV meningitis suspected', 'Empiric antibiotics until bacterial meningitis excluded', 'Symptom management', 'Most cases resolve without specific antiviral therapy'],
    'Excellent. Full recovery in most immunocompetent patients within 7-14 days. HSV-2 meningitis may recur (Mollaret meningitis). Immunocompromised patients at risk for chronic enteroviral meningitis.',
    'Viral meningitis is a milder infection of the brain lining, usually caused by common viruses. It typically resolves on its own with rest, fluids, and pain relief. It is important to rule out bacterial meningitis, which requires antibiotics.',
    ['Altered mental status (may suggest encephalitis)', 'Seizures', 'Focal neurological deficit', 'Inability to exclude bacterial meningitis', 'Immunocompromised patient with meningitis'],
  ),

  'viral-encephalitis': neuro(
    'viral-encephalitis', 'Viral Encephalitis', 'Encefalitis viral', 'infectious',
    '8A55', 'Inflammation of the brain parenchyma caused by viral infection, presenting with altered consciousness and focal deficits.',
    'Direct viral invasion of brain parenchyma causes neuronal injury and inflammation. HSV-1 is the most common sporadic cause, with predilection for temporal and frontal lobes (hemorrhagic necrotizing encephalitis). Arboviruses (West Nile, Japanese encephalitis) cause seasonal outbreaks. Autoimmune encephalitis must be excluded.',
    ['Altered consciousness (confusion to coma)', 'Fever', 'Seizures (~50% in HSV)', 'Focal neurological deficits', 'Behavioral and personality changes (temporal lobe)', 'Aphasia (dominant temporal lobe)', 'Headache', 'Preceding flu-like illness'],
    ['MRI brain (temporal lobe T2/FLAIR hyperintensity in HSV)', 'Lumbar puncture (lymphocytic pleocytosis, elevated protein, normal glucose, RBCs in HSV)', 'CSF PCR for HSV, VZV, enteroviruses, arboviruses', 'EEG (periodic lateralized epileptiform discharges in HSV)', 'Anti-neuronal antibody panel (exclude autoimmune encephalitis)', 'Consider brain biopsy if diagnosis unclear'],
    ['IV acyclovir 10 mg/kg q8h empirically (do NOT wait for PCR results)', 'Continue acyclovir x 14-21 days for confirmed HSV encephalitis', 'Seizure management', 'ICP monitoring and management if needed', 'ICU admission for declining consciousness', 'Supportive care: airway, nutrition, DVT prophylaxis', 'Rehabilitation'],
    'Untreated HSV encephalitis: mortality >70%. With acyclovir: mortality ~20%, but 50% of survivors have neuropsychiatric sequelae. Arboviral encephalitis prognosis varies by agent.',
    'Encephalitis is a brain infection that can cause confusion, seizures, and serious illness. The most important treatment is antiviral medication started immediately. Early treatment dramatically improves survival and recovery.',
    ['Rapidly declining consciousness', 'Refractory seizures', 'Signs of brain herniation', 'Status epilepticus', 'Respiratory failure'],
  ),

  'brain-abscess': neuro(
    'brain-abscess', 'Brain Abscess', 'Absceso cerebral', 'infectious',
    '8A60', 'Focal collection of pus within the brain parenchyma, usually from contiguous or hematogenous bacterial spread.',
    'Bacteria reach the brain via direct extension (sinusitis, otitis, dental infection), hematogenous spread (endocarditis, lung abscess, right-to-left cardiac shunt), or post-trauma/neurosurgery. Abscess evolves through stages: early cerebritis, late cerebritis, early capsule, and mature capsule. Common organisms: Streptococcus, Staphylococcus, anaerobes; Toxoplasma and Nocardia in immunocompromised.',
    ['Headache (most common)', 'Fever (present in only ~50%)', 'Focal neurological deficit', 'Seizures (~25%)', 'Signs of elevated ICP (papilledema, vomiting)', 'Classic triad (headache, fever, focal deficit) present in only ~20%', 'Altered mental status'],
    ['MRI with contrast (ring-enhancing lesion with restricted diffusion on DWI - distinguishes from tumor)', 'CT with contrast (ring-enhancing lesion)', 'Blood cultures', 'CBC, CRP, ESR', 'Echocardiography if hematogenous source suspected', 'Stereotactic aspiration for culture and drainage', 'Source investigation (dental, sinus, ear CT)'],
    ['Empiric antibiotics: ceftriaxone + metronidazole +/- vancomycin', 'Duration: 6-8 weeks IV antibiotics', 'Stereotactic aspiration or surgical excision for abscesses >2.5 cm', 'Serial imaging to monitor response', 'Dexamethasone for significant edema and mass effect', 'Antiepileptic drugs if seizures', 'Treat source of infection (dental, sinus surgery)'],
    'Mortality 5-15% with modern treatment. Complete recovery in ~70%. Seizures may persist long-term in ~30%. Prognosis worse with rupture into ventricles, immunocompromised state, or delayed diagnosis.',
    'A brain abscess is a pocket of infection in the brain. It requires long-term antibiotics and sometimes a procedure to drain the infection. Most patients recover well with proper treatment.',
    ['Rapid neurological deterioration (abscess expansion or rupture)', 'Signs of herniation', 'Seizures', 'Meningeal signs (possible rupture into ventricles)', 'Persistent fever despite antibiotics'],
  ),

  // ===== TRAUMA (3) ===========================================================

  'concussion': neuro(
    'concussion', 'Concussion (Mild Traumatic Brain Injury)', 'Concusión cerebral', 'trauma',
    '8A68.0', 'Mild traumatic brain injury causing transient neurological dysfunction without macroscopic structural damage.',
    'Biomechanical force to the head causes rapid acceleration-deceleration of the brain within the skull. Neurometabolic cascade: ionic flux, neurotransmitter release (glutamate), mitochondrial dysfunction, and impaired cerebral blood flow autoregulation. Neuroimaging is typically normal; injury is functional/microstructural.',
    ['Headache (most common)', 'Confusion or feeling "foggy"', 'Amnesia (retrograde and/or anterograde)', 'Brief loss of consciousness (<30 minutes, optional)', 'Dizziness and balance problems', 'Nausea', 'Light and noise sensitivity', 'Sleep disturbance', 'Emotional lability and irritability'],
    ['Clinical evaluation (SCAT5 or equivalent)', 'GCS 13-15', 'CT head if red flags (Canadian CT Head Rule or PECARN for children)', 'MRI (usually normal; research sequences: DTI, SWI may show microstructural injury)', 'Neuropsychological testing if symptoms persist >2 weeks', 'Vestibular and oculomotor assessment'],
    ['Relative cognitive and physical rest for 24-48 hours (not complete rest)', 'Graduated return to activity (stepwise protocol)', 'Symptom-limited aerobic exercise (sub-threshold) after initial rest', 'Avoid contact sports until cleared', 'Manage symptoms: analgesics for headache, melatonin for sleep', 'Vestibular rehabilitation for dizziness', 'Cognitive behavioral therapy for persistent symptoms', 'Return-to-learn and return-to-play protocols'],
    'Most (80-90%) recover within 2-4 weeks. Persistent post-concussion symptoms in 10-20%. Risk factors for prolonged recovery: prior concussions, female sex, psychiatric history, young age. Repeated concussions may cause long-term cognitive problems.',
    'A concussion is a brain injury from a blow to the head. Most people recover fully with rest and gradual return to activity. It is important not to return to sports until fully recovered to prevent another injury.',
    ['Worsening headache after initial assessment', 'Repeated vomiting', 'Increasing confusion or agitation', 'Seizure', 'Unequal pupils', 'Weakness or numbness', 'Slurred speech worsening', 'Loss of consciousness'],
  ),

  'traumatic-brain-injury': neuro(
    'traumatic-brain-injury', 'Moderate-to-Severe Traumatic Brain Injury', 'Traumatismo craneoencefálico moderado a grave', 'trauma',
    '8A68', 'Brain injury from external force causing prolonged alteration of consciousness or structural brain damage.',
    'Primary injury: direct mechanical damage to brain parenchyma, blood vessels, and axons at time of impact (contusion, diffuse axonal injury, hemorrhage). Secondary injury: ischemia, cerebral edema, raised ICP, excitotoxicity, and inflammation cascade over hours to days. Herniation syndromes if ICP not controlled.',
    ['Loss of consciousness >30 minutes', 'GCS 3-12 (moderate 9-12, severe 3-8)', 'Post-traumatic amnesia >24 hours', 'Focal neurological deficits', 'Pupil abnormalities', 'Seizures (early post-traumatic)', 'Polytrauma common', 'Signs of skull fracture (raccoon eyes, Battle sign, CSF otorrhea/rhinorrhea)'],
    ['CT head without contrast (emergent: hemorrhage, fracture, edema, midline shift)', 'CT angiography if vascular injury suspected', 'MRI (subacute phase: DAI, contusions, brainstem injury)', 'ICP monitoring (bolt or EVD) for GCS <=8', 'Serial neurological exams', 'Labs: coagulation, blood type, CBC, BMP'],
    ['ABCs with cervical spine immobilization', 'ICP management: head of bed elevation, osmotherapy (mannitol or hypertonic saline), sedation, CSF drainage', 'Surgical: evacuation of epidural/subdural hematoma, decompressive craniectomy for refractory ICP', 'Seizure prophylaxis (levetiracetam x 7 days)', 'Avoid hypotension (SBP <90) and hypoxia', 'Target CPP 60-70 mmHg', 'DVT prophylaxis', 'Nutritional support early', 'Multidisciplinary rehabilitation'],
    'Severe TBI (GCS 3-8): mortality ~30-40%. Good functional outcome in ~40% of moderate TBI. Recovery continues for months to years. Age, GCS, pupil reactivity, and CT findings are strongest predictors.',
    'A serious head injury can cause brain swelling and bleeding that requires intensive care treatment. Recovery can take months to years with rehabilitation. Family support and specialized therapy are essential to maximize recovery.',
    ['Declining GCS or new pupil asymmetry (herniation)', 'Refractory elevated ICP >22 mmHg', 'New hemorrhage on repeat CT', 'Seizures', 'Coagulopathy with expanding hematoma', 'Polytrauma with hemodynamic instability'],
  ),

  'spinal-cord-injury': neuro(
    'spinal-cord-injury', 'Spinal Cord Injury', 'Lesión de la médula espinal', 'trauma',
    '8B40', 'Traumatic damage to the spinal cord causing motor, sensory, and autonomic dysfunction below the injury level.',
    'Mechanical disruption (compression, contusion, transection) of spinal cord from vertebral fracture, dislocation, or disc herniation. Primary injury causes immediate neuronal and axonal damage. Secondary injury: ischemia, edema, inflammation, and excitotoxicity expand the lesion over hours to days. Complete vs incomplete injury determines prognosis.',
    ['Motor loss below injury level (paraplegia or quadriplegia)', 'Sensory loss below injury level', 'Spinal shock (flaccid areflexia acutely, evolves to spastic paralysis)', 'Neurogenic shock in cervical/high thoracic (hypotension with bradycardia)', 'Autonomic dysreflexia (T6 and above, in chronic phase)', 'Bowel and bladder dysfunction', 'Respiratory failure (cervical cord injuries)', 'Incomplete syndromes: central cord, Brown-Séquard, anterior cord, cauda equina'],
    ['Spinal immobilization in field', 'CT spine (fracture, alignment)', 'MRI spine (cord compression, hemorrhage, edema, ligamentous injury)', 'ASIA (American Spinal Injury Association) impairment scale', 'CT angiography if vertebral artery injury suspected', 'Serial neurological examinations'],
    ['Emergency surgical decompression within 24 hours (preferably <12 hours) for cord compression', 'Spinal stabilization (surgical fixation or external orthosis)', 'Blood pressure augmentation: MAP >85 mmHg for first 7 days', 'Methylprednisolone no longer routinely recommended', 'DVT prophylaxis', 'Respiratory management (ventilator for high cervical)', 'Bladder management (intermittent catheterization)', 'Bowel program', 'Comprehensive rehabilitation', 'Psychological support and peer counseling'],
    'Complete injuries (ASIA A) have <5% chance of significant motor recovery. Incomplete injuries (ASIA B-D) have variable but better prognosis. Most recovery occurs in first 6 months. Lifelong multidisciplinary care required.',
    'A spinal cord injury affects movement and sensation below the level of damage. Early surgery to relieve pressure can improve outcomes. Rehabilitation is a long but important process, and many people with spinal cord injuries lead active, meaningful lives.',
    ['Neurological deterioration (expanding cord injury)', 'Respiratory failure (ascending edema in cervical injury)', 'Neurogenic shock (hypotension, bradycardia)', 'Autonomic dysreflexia (hypertensive crisis in chronic phase)', 'DVT/PE', 'New onset priapism (sign of cord injury)'],
  ),

  // ===== ADDITIONAL ENTRIES FOR COMPREHENSIVENESS =============================

  'absence-seizures': neuro(
    'absence-seizures', 'Absence Seizures (Childhood Absence Epilepsy)', 'Crisis de ausencia', 'seizure',
    '8A62.0', 'Generalized seizures characterized by brief episodes of unresponsiveness with 3 Hz spike-wave on EEG.',
    'Abnormal oscillatory activity in thalamocortical circuits generates the characteristic 3 Hz spike-and-wave pattern. T-type calcium channels in thalamic relay neurons play a key role. Genetic basis in most cases. Peak onset age 4-8 years.',
    ['Brief staring episodes (5-30 seconds)', 'Abrupt onset and offset', 'No post-ictal confusion', 'Automatisms (eye blinking, lip smacking)', 'Provoked by hyperventilation', 'Multiple episodes per day (up to 100+)', 'Often misdiagnosed as daydreaming or inattention'],
    ['EEG: 3 Hz generalized spike-and-wave (provoked by hyperventilation)', 'Clinical observation with hyperventilation in office', 'MRI brain (usually normal)', 'Consider genetic testing'],
    ['Ethosuximide (first-line for absence-only)', 'Valproic acid (if concurrent tonic-clonic seizures)', 'Lamotrigine (less effective but fewer side effects)', 'Avoid carbamazepine, phenytoin, gabapentin (may worsen absence)', 'School accommodations'],
    'Childhood absence epilepsy: ~70% remit by adolescence. Risk of developing generalized tonic-clonic seizures ~40%. Juvenile absence epilepsy typically requires lifelong treatment.',
    'Absence seizures cause brief staring spells in children where they are momentarily unaware. They are very treatable with medication, and most children outgrow them by their teenage years.',
    ['Status absence (prolonged absence seizure)', 'Development of generalized tonic-clonic seizures', 'Declining academic performance', 'Misdiagnosis as ADHD delaying treatment'],
  ),
};

// =============================================================================
// QUERY FUNCTIONS
// =============================================================================

/** Retrieve a single entry by ID */
export function getNeurologyEntry(id: string): NeurologyEntry | undefined {
  return NEUROLOGY_ENTRIES[id];
}

/** Search entries by keyword across name, description, clinical features, and treatment */
export function searchNeurology(query: string): NeurologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(NEUROLOGY_ENTRIES).filter(entry =>
    entry.name.toLowerCase().includes(q) ||
    entry.nameEs.toLowerCase().includes(q) ||
    entry.description.toLowerCase().includes(q) ||
    entry.clinicalFeatures.some(f => f.toLowerCase().includes(q)) ||
    entry.treatment.some(t => t.toLowerCase().includes(q)) ||
    entry.diagnostics.some(d => d.toLowerCase().includes(q))
  );
}

/** Get all entries for a given category */
export function getNeurologyByCategory(category: NeurologyCategory): NeurologyEntry[] {
  return Object.values(NEUROLOGY_ENTRIES).filter(e => e.category === category);
}

/** Total number of entries */
export function getNeurologyCount(): number {
  return Object.keys(NEUROLOGY_ENTRIES).length;
}

/** Get entries with emergency signs containing a specific keyword */
export function searchNeurologyEmergencies(query: string): NeurologyEntry[] {
  const q = query.toLowerCase();
  return Object.values(NEUROLOGY_ENTRIES).filter(entry =>
    entry.emergencySigns.some(s => s.toLowerCase().includes(q))
  );
}

/** Get all unique ICD-11 codes with their entry names */
export function getNeurologyICD11Map(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const entry of Object.values(NEUROLOGY_ENTRIES)) {
    map[entry.icd11] = entry.name;
  }
  return map;
}
