/**
 * Anatomy Region Encyclopedia
 *
 * Comprehensive reference of 100+ anatomical structures organized by body system.
 * Each entry includes bilingual naming, location, function, associated conditions,
 * symptoms, and common procedures.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface AnatomyRegion {
  id: string;
  name: string;
  spanish: string;
  system: AnatomySystem;
  location: string;
  function: string;
  conditions: string[];
  symptoms: string[];
  procedures: string[];
}

export type AnatomySystem =
  | 'nervous'
  | 'cardiovascular'
  | 'respiratory'
  | 'digestive'
  | 'urinary'
  | 'reproductive'
  | 'musculoskeletal'
  | 'endocrine'
  | 'integumentary'
  | 'lymphatic'
  | 'sensory';

// ---------------------------------------------------------------------------
// Encyclopedia
// ---------------------------------------------------------------------------

export const ANATOMY_REGIONS: AnatomyRegion[] = [

  // =========================================================================
  // HEAD & BRAIN (17)
  // =========================================================================

  {
    id: 'brain', name: 'Brain', spanish: 'Cerebro', system: 'nervous',
    location: 'Within the cranial cavity of the skull',
    function: 'Central processing of sensory input, motor control, cognition, and homeostasis',
    conditions: ['stroke','brain-tumor','traumatic-brain-injury','meningitis','encephalitis'],
    symptoms: ['headache','confusion','seizures','memory-loss','dizziness'],
    procedures: ['mri-brain','ct-head','lumbar-puncture','craniotomy','eeg'],
  },
  {
    id: 'cerebrum', name: 'Cerebrum', spanish: 'Cerebro (hemisferios)', system: 'nervous',
    location: 'Upper and largest part of the brain, divided into two hemispheres',
    function: 'Higher cognitive functions including thought, reasoning, language, and voluntary movement',
    conditions: ['cerebral-palsy','epilepsy','cerebral-edema','glioma'],
    symptoms: ['cognitive-decline','speech-difficulty','motor-weakness','personality-changes'],
    procedures: ['mri-brain','functional-mri','neuropsychological-testing'],
  },
  {
    id: 'cerebellum', name: 'Cerebellum', spanish: 'Cerebelo', system: 'nervous',
    location: 'Posterior cranial fossa, beneath the occipital lobes',
    function: 'Coordination of voluntary movement, balance, and motor learning',
    conditions: ['cerebellar-ataxia','medulloblastoma','cerebellar-stroke'],
    symptoms: ['ataxia','tremor','loss-of-balance','dysarthria'],
    procedures: ['mri-posterior-fossa','ct-head','vestibular-testing'],
  },
  {
    id: 'brainstem', name: 'Brainstem', spanish: 'Tronco encef\u00e1lico', system: 'nervous',
    location: 'Connects the cerebrum to the spinal cord, anterior to the cerebellum',
    function: 'Controls vital autonomic functions: breathing, heart rate, consciousness',
    conditions: ['brainstem-stroke','brainstem-glioma','locked-in-syndrome'],
    symptoms: ['difficulty-breathing','dysphagia','diplopia','altered-consciousness'],
    procedures: ['mri-brainstem','ct-angiography','evoked-potentials'],
  },
  {
    id: 'hypothalamus', name: 'Hypothalamus', spanish: 'Hipot\u00e1lamo', system: 'nervous',
    location: 'Below the thalamus, forming the floor of the third ventricle',
    function: 'Regulates body temperature, hunger, thirst, sleep, and hormonal release',
    conditions: ['hypothalamic-dysfunction','diabetes-insipidus','craniopharyngioma'],
    symptoms: ['temperature-dysregulation','excessive-thirst','sleep-disorders','obesity'],
    procedures: ['mri-brain','hormone-panel','water-deprivation-test'],
  },
  {
    id: 'thalamus', name: 'Thalamus', spanish: 'T\u00e1lamo', system: 'nervous',
    location: 'Deep within the brain, between the cerebral cortex and brainstem',
    function: 'Relays sensory and motor signals to the cerebral cortex',
    conditions: ['thalamic-stroke','thalamic-pain-syndrome','thalamic-tumor'],
    symptoms: ['sensory-loss','chronic-pain','tremor','cognitive-impairment'],
    procedures: ['mri-brain','ct-head','deep-brain-stimulation'],
  },
  {
    id: 'hippocampus', name: 'Hippocampus', spanish: 'Hipocampo', system: 'nervous',
    location: 'Medial temporal lobe, within the limbic system',
    function: 'Formation and consolidation of new memories and spatial navigation',
    conditions: ['alzheimers-disease','temporal-lobe-epilepsy','hippocampal-sclerosis'],
    symptoms: ['memory-loss','disorientation','difficulty-learning','seizures'],
    procedures: ['mri-brain','pet-scan','neuropsychological-testing'],
  },
  {
    id: 'frontal-lobe', name: 'Frontal Lobe', spanish: 'L\u00f3bulo frontal', system: 'nervous',
    location: 'Anterior portion of each cerebral hemisphere',
    function: 'Executive function, planning, decision-making, voluntary motor control, speech production',
    conditions: ['frontotemporal-dementia','frontal-lobe-tumor','traumatic-brain-injury'],
    symptoms: ['personality-changes','impaired-judgment','motor-weakness','speech-difficulty'],
    procedures: ['mri-brain','functional-mri','neuropsychological-testing'],
  },
  {
    id: 'temporal-lobe', name: 'Temporal Lobe', spanish: 'L\u00f3bulo temporal', system: 'nervous',
    location: 'Lateral sides of each cerebral hemisphere, beneath the Sylvian fissure',
    function: 'Auditory processing, language comprehension, memory encoding',
    conditions: ['temporal-lobe-epilepsy','acoustic-neuroma','wernickes-aphasia'],
    symptoms: ['hearing-loss','memory-impairment','language-difficulty','seizures'],
    procedures: ['mri-brain','eeg','audiometry'],
  },
  {
    id: 'parietal-lobe', name: 'Parietal Lobe', spanish: 'L\u00f3bulo parietal', system: 'nervous',
    location: 'Superior-posterior portion of the cerebral hemisphere',
    function: 'Somatosensory processing, spatial awareness, and integration of sensory information',
    conditions: ['parietal-lobe-tumor','gerstmann-syndrome','hemispatial-neglect'],
    symptoms: ['numbness','spatial-disorientation','difficulty-reading','agnosia'],
    procedures: ['mri-brain','ct-head','somatosensory-evoked-potentials'],
  },
  {
    id: 'occipital-lobe', name: 'Occipital Lobe', spanish: 'L\u00f3bulo occipital', system: 'nervous',
    location: 'Posterior portion of the cerebral hemisphere',
    function: 'Visual processing and interpretation of visual stimuli',
    conditions: ['cortical-blindness','occipital-lobe-tumor','visual-agnosia'],
    symptoms: ['vision-loss','visual-hallucinations','difficulty-reading'],
    procedures: ['mri-brain','visual-field-testing','visual-evoked-potentials'],
  },
  {
    id: 'meninges', name: 'Meninges', spanish: 'Meninges', system: 'nervous',
    location: 'Three membranes surrounding the brain and spinal cord',
    function: 'Protect the central nervous system, contain cerebrospinal fluid',
    conditions: ['meningitis','meningioma','subdural-hematoma','epidural-hematoma'],
    symptoms: ['headache','neck-stiffness','fever','photophobia'],
    procedures: ['lumbar-puncture','mri-brain','ct-head'],
  },
  {
    id: 'pituitary-gland', name: 'Pituitary Gland', spanish: 'Gl\u00e1ndula pituitaria', system: 'endocrine',
    location: 'Sella turcica at the base of the brain',
    function: 'Master endocrine gland; secretes hormones regulating growth, metabolism, and reproduction',
    conditions: ['pituitary-adenoma','hypopituitarism','cushings-disease','acromegaly'],
    symptoms: ['hormonal-imbalance','vision-changes','headache','growth-abnormalities'],
    procedures: ['mri-sella','hormone-panel','transsphenoidal-surgery'],
  },
  {
    id: 'pineal-gland', name: 'Pineal Gland', spanish: 'Gl\u00e1ndula pineal', system: 'endocrine',
    location: 'Epithalamus, between the two cerebral hemispheres',
    function: 'Produces melatonin to regulate circadian rhythm and sleep-wake cycles',
    conditions: ['pineal-cyst','pinealoma','sleep-disorders'],
    symptoms: ['sleep-disturbances','headache','hormonal-disruption'],
    procedures: ['mri-brain','melatonin-levels','ct-head'],
  },
  {
    id: 'cranial-nerves', name: 'Cranial Nerves', spanish: 'Nervios craneales', system: 'nervous',
    location: 'Emerge from the brainstem, exit through skull foramina',
    function: 'Twelve pairs controlling sensation and motor function of the head and neck',
    conditions: ['trigeminal-neuralgia','bells-palsy','cranial-nerve-palsy','vestibular-neuritis'],
    symptoms: ['facial-pain','facial-weakness','diplopia','hearing-loss','dysphagia'],
    procedures: ['mri-brain','ct-skull-base','nerve-conduction-study','emg'],
  },
  {
    id: 'scalp', name: 'Scalp', spanish: 'Cuero cabelludo', system: 'integumentary',
    location: 'Soft tissue covering the skull from supraorbital ridges to the nuchal line',
    function: 'Protects the skull, provides blood supply, supports hair growth',
    conditions: ['scalp-laceration','seborrheic-dermatitis','alopecia','scalp-psoriasis'],
    symptoms: ['bleeding','itching','hair-loss','pain'],
    procedures: ['wound-closure','skin-biopsy','dermoscopy'],
  },
  {
    id: 'skull', name: 'Skull', spanish: 'Cr\u00e1neo', system: 'musculoskeletal',
    location: 'Bony structure enclosing the brain, forming the face',
    function: 'Protects the brain, supports facial structures, provides attachment for muscles',
    conditions: ['skull-fracture','craniosynostosis','pagets-disease'],
    symptoms: ['head-pain','swelling','deformity','neurological-deficits'],
    procedures: ['ct-head','x-ray-skull','cranioplasty'],
  },

  // =========================================================================
  // EYES, EARS, NOSE & THROAT (12)
  // =========================================================================

  {
    id: 'eye', name: 'Eye', spanish: 'Ojo', system: 'sensory',
    location: 'Within the orbital cavity of the skull',
    function: 'Detects light and converts it into neural signals for vision',
    conditions: ['glaucoma','cataracts','macular-degeneration','diabetic-retinopathy','conjunctivitis'],
    symptoms: ['blurred-vision','eye-pain','redness','light-sensitivity','floaters'],
    procedures: ['slit-lamp-exam','fundoscopy','tonometry','cataract-surgery','vitrectomy'],
  },
  {
    id: 'retina', name: 'Retina', spanish: 'Retina', system: 'sensory',
    location: 'Inner layer at the back of the eye',
    function: 'Contains photoreceptors that convert light into electrical signals',
    conditions: ['retinal-detachment','diabetic-retinopathy','retinitis-pigmentosa','retinoblastoma'],
    symptoms: ['floaters','flashes-of-light','vision-loss','dark-spots'],
    procedures: ['fundoscopy','optical-coherence-tomography','retinal-laser-therapy','vitrectomy'],
  },
  {
    id: 'cornea', name: 'Cornea', spanish: 'C\u00f3rnea', system: 'sensory',
    location: 'Transparent front surface of the eye',
    function: 'Refracts and focuses incoming light onto the lens and retina',
    conditions: ['corneal-ulcer','keratoconus','corneal-abrasion','fuchs-dystrophy'],
    symptoms: ['eye-pain','blurred-vision','tearing','light-sensitivity'],
    procedures: ['slit-lamp-exam','corneal-topography','corneal-transplant','lasik'],
  },
  {
    id: 'ear', name: 'Ear', spanish: 'O\u00eddo', system: 'sensory',
    location: 'Lateral aspect of the head; external, middle, and inner components',
    function: 'Hearing and balance (vestibular function)',
    conditions: ['otitis-media','otitis-externa','menieres-disease','cholesteatoma','hearing-loss'],
    symptoms: ['ear-pain','hearing-loss','tinnitus','vertigo','ear-discharge'],
    procedures: ['otoscopy','audiometry','tympanometry','myringotomy','cochlear-implant'],
  },
  {
    id: 'cochlea', name: 'Cochlea', spanish: 'C\u00f3clea', system: 'sensory',
    location: 'Inner ear, within the petrous part of the temporal bone',
    function: 'Converts sound vibrations into nerve impulses for auditory processing',
    conditions: ['sensorineural-hearing-loss','cochlear-otosclerosis','labyrinthitis'],
    symptoms: ['hearing-loss','tinnitus','difficulty-understanding-speech'],
    procedures: ['audiometry','ct-temporal-bone','cochlear-implant'],
  },
  {
    id: 'nasal-cavity', name: 'Nasal Cavity', spanish: 'Cavidad nasal', system: 'respiratory',
    location: 'Behind the nose, between the palate and the skull base',
    function: 'Filters, warms, and humidifies inhaled air; olfactory sensation',
    conditions: ['sinusitis','nasal-polyps','deviated-septum','epistaxis','rhinitis'],
    symptoms: ['nasal-congestion','runny-nose','loss-of-smell','nosebleed','facial-pain'],
    procedures: ['nasal-endoscopy','ct-sinuses','septoplasty','turbinate-reduction'],
  },
  {
    id: 'paranasal-sinuses', name: 'Paranasal Sinuses', spanish: 'Senos paranasales', system: 'respiratory',
    location: 'Air-filled cavities within the frontal, maxillary, ethmoid, and sphenoid bones',
    function: 'Lighten the skull, produce mucus, resonate voice',
    conditions: ['sinusitis','sinus-tumor','mucocele','fungal-sinusitis'],
    symptoms: ['facial-pressure','headache','nasal-discharge','post-nasal-drip'],
    procedures: ['ct-sinuses','nasal-endoscopy','functional-endoscopic-sinus-surgery'],
  },
  {
    id: 'pharynx', name: 'Pharynx', spanish: 'Faringe', system: 'digestive',
    location: 'Posterior to the nasal and oral cavities, extending to the esophagus',
    function: 'Passageway for air and food; plays a role in speech and swallowing',
    conditions: ['pharyngitis','pharyngeal-cancer','obstructive-sleep-apnea','peritonsillar-abscess'],
    symptoms: ['sore-throat','difficulty-swallowing','snoring','voice-changes'],
    procedures: ['throat-culture','laryngoscopy','pharyngeal-biopsy','uvulopalatopharyngoplasty'],
  },
  {
    id: 'larynx', name: 'Larynx', spanish: 'Laringe', system: 'respiratory',
    location: 'Anterior neck at C3-C6, between pharynx and trachea',
    function: 'Voice production, airway protection during swallowing',
    conditions: ['laryngitis','vocal-cord-nodules','laryngeal-cancer','vocal-cord-paralysis'],
    symptoms: ['hoarseness','voice-loss','stridor','difficulty-breathing','sore-throat'],
    procedures: ['laryngoscopy','stroboscopy','laryngeal-biopsy','laryngectomy'],
  },
  {
    id: 'tonsils', name: 'Tonsils', spanish: 'Am\u00edgdalas', system: 'lymphatic',
    location: 'Oropharynx, between the palatoglossal and palatopharyngeal arches',
    function: 'Immune defense; first line of protection against ingested and inhaled pathogens',
    conditions: ['tonsillitis','peritonsillar-abscess','tonsillar-hypertrophy','tonsillar-cancer'],
    symptoms: ['sore-throat','difficulty-swallowing','fever','swollen-lymph-nodes'],
    procedures: ['throat-culture','tonsillectomy','ct-neck'],
  },
  {
    id: 'tongue', name: 'Tongue', spanish: 'Lengua', system: 'digestive',
    location: 'Floor of the oral cavity',
    function: 'Taste sensation, speech articulation, manipulation of food during chewing and swallowing',
    conditions: ['glossitis','tongue-cancer','geographic-tongue','ankyloglossia'],
    symptoms: ['tongue-pain','difficulty-speaking','taste-changes','swelling'],
    procedures: ['oral-exam','tongue-biopsy','frenulectomy'],
  },
  {
    id: 'salivary-glands', name: 'Salivary Glands', spanish: 'Gl\u00e1ndulas salivales', system: 'digestive',
    location: 'Parotid, submandibular, and sublingual glands around the oral cavity',
    function: 'Produce saliva for lubrication, digestion, and oral hygiene',
    conditions: ['sialolithiasis','sialadenitis','parotid-tumor','sjogrens-syndrome'],
    symptoms: ['dry-mouth','facial-swelling','pain-while-eating','foul-taste'],
    procedures: ['ultrasound-salivary','sialography','salivary-gland-biopsy','parotidectomy'],
  },

  // =========================================================================
  // THORAX, HEART & LUNGS (16)
  // =========================================================================

  {
    id: 'heart', name: 'Heart', spanish: 'Coraz\u00f3n', system: 'cardiovascular',
    location: 'Center of chest, between lungs, in the mediastinum',
    function: 'Pumps blood throughout the body via systemic and pulmonary circulation',
    conditions: ['coronary-artery-disease','heart-failure','atrial-fibrillation','myocardial-infarction'],
    symptoms: ['chest-pain','palpitations','shortness-of-breath','fatigue','edema'],
    procedures: ['echocardiogram','cardiac-catheterization','coronary-artery-bypass','ekg'],
  },
  {
    id: 'aorta', name: 'Aorta', spanish: 'Aorta', system: 'cardiovascular',
    location: 'Arises from the left ventricle, arches over the heart, descends through the thorax and abdomen',
    function: 'Largest artery; distributes oxygenated blood to the entire body',
    conditions: ['aortic-aneurysm','aortic-dissection','aortic-stenosis','coarctation-of-aorta'],
    symptoms: ['chest-pain','back-pain','shortness-of-breath','syncope'],
    procedures: ['ct-angiography','echocardiogram','aortic-repair','aortic-valve-replacement'],
  },
  {
    id: 'coronary-arteries', name: 'Coronary Arteries', spanish: 'Arterias coronarias', system: 'cardiovascular',
    location: 'Surface of the heart, branching from the aortic root',
    function: 'Supply oxygenated blood to the heart muscle (myocardium)',
    conditions: ['coronary-artery-disease','myocardial-infarction','coronary-artery-spasm'],
    symptoms: ['chest-pain','angina','shortness-of-breath','fatigue'],
    procedures: ['coronary-angiography','coronary-artery-bypass','percutaneous-coronary-intervention','ct-coronary-angiography'],
  },
  {
    id: 'pericardium', name: 'Pericardium', spanish: 'Pericardio', system: 'cardiovascular',
    location: 'Double-layered sac enclosing the heart',
    function: 'Protects the heart, reduces friction, anchors it within the mediastinum',
    conditions: ['pericarditis','pericardial-effusion','cardiac-tamponade','constrictive-pericarditis'],
    symptoms: ['chest-pain','shortness-of-breath','fever','pericardial-friction-rub'],
    procedures: ['echocardiogram','pericardiocentesis','ct-chest','pericardial-window'],
  },
  {
    id: 'lungs', name: 'Lungs', spanish: 'Pulmones', system: 'respiratory',
    location: 'Thoracic cavity, flanking the mediastinum, enclosed by the pleura',
    function: 'Gas exchange: oxygen absorption and carbon dioxide elimination',
    conditions: ['pneumonia','asthma','copd','lung-cancer','pulmonary-embolism','tuberculosis'],
    symptoms: ['cough','shortness-of-breath','wheezing','chest-pain','hemoptysis'],
    procedures: ['chest-x-ray','ct-chest','pulmonary-function-test','bronchoscopy','lobectomy'],
  },
  {
    id: 'bronchi', name: 'Bronchi', spanish: 'Bronquios', system: 'respiratory',
    location: 'Branch from the trachea at the carina into left and right main bronchi',
    function: 'Conduct air from the trachea into the lungs and distribute to bronchioles',
    conditions: ['bronchitis','bronchial-asthma','bronchiectasis','foreign-body-aspiration'],
    symptoms: ['cough','wheezing','sputum-production','shortness-of-breath'],
    procedures: ['bronchoscopy','chest-x-ray','ct-chest','pulmonary-function-test'],
  },
  {
    id: 'trachea', name: 'Trachea', spanish: 'Tr\u00e1quea', system: 'respiratory',
    location: 'Anterior neck and superior mediastinum, C6 to T5',
    function: 'Conducts air between the larynx and the bronchi',
    conditions: ['tracheal-stenosis','tracheomalacia','tracheal-tumor','tracheitis'],
    symptoms: ['stridor','difficulty-breathing','cough','hoarseness'],
    procedures: ['bronchoscopy','ct-neck','tracheostomy','tracheal-dilation'],
  },
  {
    id: 'diaphragm', name: 'Diaphragm', spanish: 'Diafragma', system: 'musculoskeletal',
    location: 'Dome-shaped muscle separating the thoracic and abdominal cavities',
    function: 'Primary muscle of respiration; contracts to expand the lungs',
    conditions: ['diaphragmatic-hernia','diaphragm-paralysis','hiatal-hernia'],
    symptoms: ['shortness-of-breath','difficulty-breathing','hiccups','chest-pain'],
    procedures: ['chest-x-ray','fluoroscopy','ct-chest','diaphragm-plication'],
  },
  {
    id: 'pleura', name: 'Pleura', spanish: 'Pleura', system: 'respiratory',
    location: 'Double-layered membrane lining the thoracic cavity and covering the lungs',
    function: 'Reduces friction during breathing, maintains negative pressure for lung expansion',
    conditions: ['pleural-effusion','pleurisy','pneumothorax','mesothelioma'],
    symptoms: ['chest-pain','shortness-of-breath','cough','pleuritic-pain'],
    procedures: ['chest-x-ray','thoracentesis','ct-chest','pleurodesis','chest-tube'],
  },
  {
    id: 'mediastinum', name: 'Mediastinum', spanish: 'Mediastino', system: 'cardiovascular',
    location: 'Central compartment of the thorax between the lungs',
    function: 'Contains the heart, great vessels, trachea, esophagus, and lymph nodes',
    conditions: ['mediastinal-tumor','mediastinitis','pneumomediastinum'],
    symptoms: ['chest-pain','cough','shortness-of-breath','dysphagia'],
    procedures: ['ct-chest','mediastinoscopy','mri-chest'],
  },
  {
    id: 'thymus', name: 'Thymus', spanish: 'Timo', system: 'lymphatic',
    location: 'Anterior mediastinum, behind the sternum',
    function: 'T-cell maturation; critical for adaptive immunity during childhood',
    conditions: ['thymoma','myasthenia-gravis','thymic-hyperplasia','thymic-carcinoma'],
    symptoms: ['chest-pain','cough','muscle-weakness','shortness-of-breath'],
    procedures: ['ct-chest','thymectomy','mri-chest','biopsy'],
  },
  {
    id: 'esophagus', name: 'Esophagus', spanish: 'Es\u00f3fago', system: 'digestive',
    location: 'Posterior mediastinum, from pharynx to stomach, passing through the diaphragm',
    function: 'Transports food from the throat to the stomach via peristalsis',
    conditions: ['gerd','esophageal-cancer','barretts-esophagus','esophageal-varices','achalasia'],
    symptoms: ['heartburn','dysphagia','regurgitation','chest-pain','odynophagia'],
    procedures: ['upper-endoscopy','barium-swallow','esophageal-manometry','esophagectomy'],
  },
  {
    id: 'ribs', name: 'Ribs', spanish: 'Costillas', system: 'musculoskeletal',
    location: 'Twelve pairs of curved bones forming the thoracic cage',
    function: 'Protect thoracic organs, assist in breathing mechanics',
    conditions: ['rib-fracture','costochondritis','flail-chest','rib-tumor'],
    symptoms: ['chest-pain','pain-with-breathing','tenderness','bruising'],
    procedures: ['chest-x-ray','ct-chest','rib-fixation','bone-scan'],
  },
  {
    id: 'sternum', name: 'Sternum', spanish: 'Estern\u00f3n', system: 'musculoskeletal',
    location: 'Midline of the anterior chest wall',
    function: 'Anchors ribs, protects mediastinal structures, site of bone marrow',
    conditions: ['sternal-fracture','median-sternotomy-complications','pectus-excavatum'],
    symptoms: ['chest-pain','tenderness','deformity','clicking'],
    procedures: ['chest-x-ray','ct-chest','bone-marrow-biopsy','sternal-repair'],
  },
  {
    id: 'intercostal-muscles', name: 'Intercostal Muscles', spanish: 'M\u00fasculos intercostales', system: 'musculoskeletal',
    location: 'Between adjacent ribs',
    function: 'Assist in breathing by elevating and depressing the rib cage',
    conditions: ['intercostal-neuralgia','muscle-strain','intercostal-hernia'],
    symptoms: ['chest-wall-pain','pain-with-breathing','tenderness','muscle-spasm'],
    procedures: ['intercostal-nerve-block','ultrasound','chest-x-ray'],
  },
  {
    id: 'breast', name: 'Breast', spanish: 'Mama/Seno', system: 'integumentary',
    location: 'Anterior chest wall, overlying the pectoralis major muscle',
    function: 'Mammary gland for lactation; secondary sexual characteristic',
    conditions: ['breast-cancer','fibrocystic-changes','mastitis','fibroadenoma','gynecomastia'],
    symptoms: ['breast-lump','breast-pain','nipple-discharge','skin-changes','swelling'],
    procedures: ['mammography','breast-ultrasound','breast-mri','breast-biopsy','mastectomy','lumpectomy'],
  },

  // =========================================================================
  // ABDOMEN & GI (17)
  // =========================================================================

  {
    id: 'stomach', name: 'Stomach', spanish: 'Est\u00f3mago', system: 'digestive',
    location: 'Left upper quadrant of the abdomen, beneath the diaphragm',
    function: 'Mechanical and chemical digestion of food, acid secretion',
    conditions: ['gastritis','peptic-ulcer','gastric-cancer','gastroparesis'],
    symptoms: ['abdominal-pain','nausea','vomiting','bloating','loss-of-appetite'],
    procedures: ['upper-endoscopy','barium-swallow','h-pylori-test','gastrectomy'],
  },
  {
    id: 'liver', name: 'Liver', spanish: 'H\u00edgado', system: 'digestive',
    location: 'Right upper quadrant, beneath the diaphragm',
    function: 'Detoxification, bile production, protein synthesis, glycogen storage, metabolism',
    conditions: ['hepatitis','cirrhosis','liver-cancer','fatty-liver-disease','liver-failure'],
    symptoms: ['jaundice','abdominal-pain','fatigue','nausea','ascites','dark-urine'],
    procedures: ['liver-function-tests','ultrasound-abdomen','ct-abdomen','liver-biopsy','liver-transplant'],
  },
  {
    id: 'gallbladder', name: 'Gallbladder', spanish: 'Ves\u00edcula biliar', system: 'digestive',
    location: 'Inferior surface of the right lobe of the liver',
    function: 'Stores and concentrates bile for fat digestion',
    conditions: ['gallstones','cholecystitis','cholangitis','gallbladder-cancer','biliary-dyskinesia'],
    symptoms: ['right-upper-quadrant-pain','nausea','vomiting','jaundice','fever'],
    procedures: ['ultrasound-abdomen','hida-scan','mrcp','cholecystectomy','ercp'],
  },
  {
    id: 'pancreas', name: 'Pancreas', spanish: 'P\u00e1ncreas', system: 'digestive',
    location: 'Retroperitoneal, behind the stomach, across the upper abdomen',
    function: 'Exocrine (digestive enzymes) and endocrine (insulin, glucagon) secretion',
    conditions: ['pancreatitis','pancreatic-cancer','diabetes-mellitus','pancreatic-cyst'],
    symptoms: ['abdominal-pain','nausea','weight-loss','jaundice','steatorrhea'],
    procedures: ['ct-abdomen','mrcp','endoscopic-ultrasound','whipple-procedure','ercp'],
  },
  {
    id: 'spleen', name: 'Spleen', spanish: 'Bazo', system: 'lymphatic',
    location: 'Left upper quadrant, behind the stomach, below the diaphragm',
    function: 'Filters blood, recycles old red blood cells, stores platelets, immune surveillance',
    conditions: ['splenomegaly','splenic-rupture','splenic-infarction','hypersplenism'],
    symptoms: ['left-upper-quadrant-pain','early-satiety','fatigue','frequent-infections'],
    procedures: ['ultrasound-abdomen','ct-abdomen','splenectomy','blood-smear'],
  },
  {
    id: 'small-intestine', name: 'Small Intestine', spanish: 'Intestino delgado', system: 'digestive',
    location: 'Central abdomen, coiled between the stomach and large intestine',
    function: 'Primary site of nutrient absorption; enzymatic digestion',
    conditions: ['celiac-disease','crohns-disease','small-bowel-obstruction','duodenal-ulcer','malabsorption'],
    symptoms: ['abdominal-pain','diarrhea','bloating','weight-loss','nausea'],
    procedures: ['upper-endoscopy','capsule-endoscopy','ct-enterography','small-bowel-resection'],
  },
  {
    id: 'large-intestine', name: 'Large Intestine (Colon)', spanish: 'Intestino grueso (Colon)', system: 'digestive',
    location: 'Frames the small intestine; ascending, transverse, descending, and sigmoid segments',
    function: 'Water absorption, electrolyte balance, formation and storage of stool',
    conditions: ['colorectal-cancer','ulcerative-colitis','diverticulitis','irritable-bowel-syndrome','polyps'],
    symptoms: ['abdominal-pain','change-in-bowel-habits','blood-in-stool','bloating','constipation'],
    procedures: ['colonoscopy','ct-abdomen','barium-enema','colectomy','polypectomy'],
  },
  {
    id: 'appendix', name: 'Appendix', spanish: 'Ap\u00e9ndice', system: 'digestive',
    location: 'Attached to the cecum in the right lower quadrant',
    function: 'Thought to play a role in gut immunity and microbiome recolonization',
    conditions: ['appendicitis','appendiceal-tumor','appendiceal-abscess'],
    symptoms: ['right-lower-quadrant-pain','nausea','vomiting','fever','rebound-tenderness'],
    procedures: ['ct-abdomen','ultrasound-abdomen','appendectomy'],
  },
  {
    id: 'rectum', name: 'Rectum', spanish: 'Recto', system: 'digestive',
    location: 'Terminal portion of the large intestine, anterior to the sacrum',
    function: 'Stores feces before defecation',
    conditions: ['rectal-cancer','hemorrhoids','rectal-prolapse','proctitis'],
    symptoms: ['rectal-bleeding','pain-with-defecation','tenesmus','change-in-bowel-habits'],
    procedures: ['digital-rectal-exam','proctoscopy','colonoscopy','rectal-resection'],
  },
  {
    id: 'anus', name: 'Anus', spanish: 'Ano', system: 'digestive',
    location: 'Terminal opening of the gastrointestinal tract in the perineum',
    function: 'Controls elimination of feces via internal and external sphincters',
    conditions: ['hemorrhoids','anal-fissure','anal-abscess','anal-fistula','anal-cancer'],
    symptoms: ['rectal-pain','rectal-bleeding','itching','swelling','discharge'],
    procedures: ['anoscopy','digital-rectal-exam','hemorrhoidectomy','fistulotomy'],
  },
  {
    id: 'peritoneum', name: 'Peritoneum', spanish: 'Peritoneo', system: 'digestive',
    location: 'Serous membrane lining the abdominal cavity and covering abdominal organs',
    function: 'Supports and suspends organs, secretes lubricating fluid to reduce friction',
    conditions: ['peritonitis','ascites','peritoneal-carcinomatosis','adhesions'],
    symptoms: ['abdominal-pain','abdominal-distension','fever','nausea','rigidity'],
    procedures: ['paracentesis','ct-abdomen','diagnostic-laparoscopy','peritoneal-dialysis'],
  },
  {
    id: 'abdominal-wall', name: 'Abdominal Wall', spanish: 'Pared abdominal', system: 'musculoskeletal',
    location: 'Layered muscles and fascia forming the anterior and lateral abdominal boundaries',
    function: 'Protects abdominal organs, supports trunk movement, maintains intra-abdominal pressure',
    conditions: ['inguinal-hernia','umbilical-hernia','diastasis-recti','ventral-hernia'],
    symptoms: ['abdominal-bulge','pain','discomfort-with-straining','tenderness'],
    procedures: ['ultrasound-abdomen','ct-abdomen','hernia-repair'],
  },
  {
    id: 'kidneys', name: 'Kidneys', spanish: 'Ri\u00f1ones', system: 'urinary',
    location: 'Retroperitoneal, flanking the vertebral column at T12-L3',
    function: 'Filter blood, produce urine, regulate fluid balance, blood pressure, and electrolytes',
    conditions: ['chronic-kidney-disease','kidney-stones','renal-cell-carcinoma','pyelonephritis','polycystic-kidney-disease'],
    symptoms: ['flank-pain','blood-in-urine','frequent-urination','edema','fatigue'],
    procedures: ['urinalysis','renal-ultrasound','ct-abdomen','renal-biopsy','nephrectomy','dialysis'],
  },
  {
    id: 'ureters', name: 'Ureters', spanish: 'Ur\u00e9teres', system: 'urinary',
    location: 'Retroperitoneal tubes from the renal pelvis to the urinary bladder',
    function: 'Transport urine from the kidneys to the bladder via peristalsis',
    conditions: ['ureteral-stones','ureteral-stricture','ureteral-cancer','vesicoureteral-reflux'],
    symptoms: ['flank-pain','hematuria','urinary-obstruction','colicky-pain'],
    procedures: ['ct-urogram','retrograde-pyelogram','ureteroscopy','ureteral-stent'],
  },
  {
    id: 'adrenal-glands', name: 'Adrenal Glands', spanish: 'Gl\u00e1ndulas suprarrenales', system: 'endocrine',
    location: 'Superior to each kidney, retroperitoneal',
    function: 'Produce cortisol, aldosterone, adrenaline, and sex hormone precursors',
    conditions: ['addisons-disease','cushings-syndrome','pheochromocytoma','adrenal-insufficiency','adrenal-adenoma'],
    symptoms: ['fatigue','weight-changes','high-blood-pressure','muscle-weakness','skin-darkening'],
    procedures: ['ct-abdomen','adrenal-function-tests','mri-abdomen','adrenalectomy'],
  },
  {
    id: 'abdominal-aorta', name: 'Abdominal Aorta', spanish: 'Aorta abdominal', system: 'cardiovascular',
    location: 'Retroperitoneal, anterior to the lumbar spine, from diaphragm to bifurcation at L4',
    function: 'Supplies oxygenated blood to the abdominal organs and lower extremities',
    conditions: ['abdominal-aortic-aneurysm','aortic-occlusion','aortoiliac-disease'],
    symptoms: ['abdominal-pain','back-pain','pulsatile-mass','leg-pain'],
    procedures: ['ultrasound-abdomen','ct-angiography','aortic-aneurysm-repair'],
  },
  {
    id: 'mesentery', name: 'Mesentery', spanish: 'Mesenterio', system: 'digestive',
    location: 'Double fold of peritoneum suspending the intestines from the posterior abdominal wall',
    function: 'Supports the intestines, carries blood vessels, nerves, and lymphatics',
    conditions: ['mesenteric-ischemia','mesenteric-lymphadenitis','mesenteric-cyst'],
    symptoms: ['abdominal-pain','nausea','weight-loss','diarrhea'],
    procedures: ['ct-angiography','ct-abdomen','mesenteric-angioplasty'],
  },

  // =========================================================================
  // PELVIS & REPRODUCTIVE (12)
  // =========================================================================

  {
    id: 'urinary-bladder', name: 'Urinary Bladder', spanish: 'Vejiga urinaria', system: 'urinary',
    location: 'Pelvic cavity, posterior to the pubic symphysis',
    function: 'Stores urine until voluntary micturition',
    conditions: ['urinary-tract-infection','bladder-cancer','overactive-bladder','urinary-retention','interstitial-cystitis'],
    symptoms: ['frequent-urination','urgency','dysuria','hematuria','pelvic-pain'],
    procedures: ['urinalysis','cystoscopy','ultrasound-pelvis','urodynamic-testing','cystectomy'],
  },
  {
    id: 'urethra', name: 'Urethra', spanish: 'Uretra', system: 'urinary',
    location: 'From the bladder neck to the external urethral meatus',
    function: 'Conducts urine from the bladder to outside the body; in males also carries semen',
    conditions: ['urethritis','urethral-stricture','urethral-diverticulum'],
    symptoms: ['dysuria','urethral-discharge','weak-urine-stream','urinary-frequency'],
    procedures: ['urethroscopy','retrograde-urethrogram','urethral-dilation','urethroplasty'],
  },
  {
    id: 'prostate', name: 'Prostate', spanish: 'Pr\u00f3stata', system: 'reproductive',
    location: 'Surrounds the urethra just below the bladder in males',
    function: 'Secretes prostatic fluid that nourishes and transports sperm',
    conditions: ['benign-prostatic-hyperplasia','prostate-cancer','prostatitis'],
    symptoms: ['difficulty-urinating','weak-stream','frequent-urination','pelvic-pain','hematuria'],
    procedures: ['psa-test','digital-rectal-exam','prostate-biopsy','transurethral-resection','prostatectomy'],
  },
  {
    id: 'testes', name: 'Testes', spanish: 'Test\u00edculos', system: 'reproductive',
    location: 'Within the scrotum, inferior to the penis',
    function: 'Produce sperm and testosterone',
    conditions: ['testicular-cancer','testicular-torsion','epididymitis','varicocele','hydrocele'],
    symptoms: ['testicular-pain','scrotal-swelling','testicular-lump','infertility'],
    procedures: ['scrotal-ultrasound','tumor-markers','orchiectomy','testicular-biopsy'],
  },
  {
    id: 'penis', name: 'Penis', spanish: 'Pene', system: 'reproductive',
    location: 'External male genitalia, anterior to the scrotum',
    function: 'Urination, sexual intercourse, and delivery of semen',
    conditions: ['erectile-dysfunction','phimosis','peyronies-disease','penile-cancer','priapism'],
    symptoms: ['erectile-difficulty','pain','curvature','discharge','lesions'],
    procedures: ['penile-ultrasound','nocturnal-penile-tumescence-test','circumcision','penile-prosthesis'],
  },
  {
    id: 'uterus', name: 'Uterus', spanish: '\u00datero', system: 'reproductive',
    location: 'Pelvic cavity, between the bladder and rectum',
    function: 'Site of embryo implantation, fetal development, and menstruation',
    conditions: ['uterine-fibroids','endometrial-cancer','endometriosis','uterine-prolapse','adenomyosis'],
    symptoms: ['abnormal-bleeding','pelvic-pain','heavy-periods','infertility','pelvic-pressure'],
    procedures: ['pelvic-ultrasound','hysteroscopy','endometrial-biopsy','hysterectomy','mri-pelvis'],
  },
  {
    id: 'ovaries', name: 'Ovaries', spanish: 'Ovarios', system: 'reproductive',
    location: 'Lateral pelvic walls, attached to the uterus by the ovarian ligament',
    function: 'Produce oocytes (eggs), estrogen, and progesterone',
    conditions: ['ovarian-cysts','ovarian-cancer','polycystic-ovary-syndrome','ovarian-torsion'],
    symptoms: ['pelvic-pain','bloating','irregular-periods','infertility','abdominal-swelling'],
    procedures: ['pelvic-ultrasound','ca-125-test','laparoscopy','oophorectomy'],
  },
  {
    id: 'fallopian-tubes', name: 'Fallopian Tubes', spanish: 'Trompas de Falopio', system: 'reproductive',
    location: 'Extend from the uterine cornua to the ovaries',
    function: 'Transport ova from the ovary to the uterus; site of fertilization',
    conditions: ['ectopic-pregnancy','salpingitis','tubal-blockage','hydrosalpinx'],
    symptoms: ['pelvic-pain','abnormal-bleeding','infertility','shoulder-pain'],
    procedures: ['hysterosalpingography','laparoscopy','salpingectomy','tubal-ligation'],
  },
  {
    id: 'cervix', name: 'Cervix', spanish: 'C\u00e9rvix/Cuello uterino', system: 'reproductive',
    location: 'Lower portion of the uterus, opening into the vaginal canal',
    function: 'Connects uterus and vagina; regulates passage of substances and allows childbirth',
    conditions: ['cervical-cancer','cervical-dysplasia','cervicitis','cervical-incompetence'],
    symptoms: ['abnormal-bleeding','pelvic-pain','vaginal-discharge','post-coital-bleeding'],
    procedures: ['pap-smear','colposcopy','cervical-biopsy','leep','cone-biopsy','cerclage'],
  },
  {
    id: 'vagina', name: 'Vagina', spanish: 'Vagina', system: 'reproductive',
    location: 'Muscular canal between the cervix and the vulva',
    function: 'Birth canal, passage for menstrual flow, and receptacle during intercourse',
    conditions: ['vaginitis','vaginal-prolapse','vaginal-cancer','bacterial-vaginosis'],
    symptoms: ['vaginal-discharge','itching','pain','bleeding','discomfort'],
    procedures: ['pelvic-exam','vaginal-culture','colposcopy','vaginal-repair'],
  },
  {
    id: 'pelvic-floor', name: 'Pelvic Floor', spanish: 'Suelo p\u00e9lvico', system: 'musculoskeletal',
    location: 'Muscular sling at the base of the pelvis',
    function: 'Supports pelvic organs, maintains continence, assists in childbirth',
    conditions: ['pelvic-organ-prolapse','urinary-incontinence','pelvic-floor-dysfunction'],
    symptoms: ['urinary-incontinence','pelvic-pressure','pain','difficulty-with-defecation'],
    procedures: ['pelvic-floor-therapy','urodynamic-testing','pelvic-floor-repair','mri-pelvis'],
  },
  {
    id: 'pelvis', name: 'Pelvis (Bony)', spanish: 'Pelvis', system: 'musculoskeletal',
    location: 'Bony ring formed by the sacrum, coccyx, and two hip bones',
    function: 'Supports body weight, protects pelvic organs, anchors lower extremity muscles',
    conditions: ['pelvic-fracture','sacroiliac-joint-dysfunction','pubic-symphysis-diastasis'],
    symptoms: ['pelvic-pain','difficulty-walking','instability','groin-pain'],
    procedures: ['x-ray-pelvis','ct-pelvis','mri-pelvis','pelvic-fixation'],
  },

  // =========================================================================
  // UPPER EXTREMITY (11)
  // =========================================================================

  {
    id: 'shoulder', name: 'Shoulder', spanish: 'Hombro', system: 'musculoskeletal',
    location: 'Junction of the upper arm and trunk, formed by glenohumeral and acromioclavicular joints',
    function: 'Greatest range of motion of any joint; allows arm elevation, rotation, and reaching',
    conditions: ['rotator-cuff-tear','shoulder-impingement','frozen-shoulder','shoulder-dislocation','labral-tear'],
    symptoms: ['shoulder-pain','limited-range-of-motion','weakness','clicking','instability'],
    procedures: ['shoulder-x-ray','mri-shoulder','ultrasound-shoulder','arthroscopy','rotator-cuff-repair'],
  },
  {
    id: 'humerus', name: 'Humerus', spanish: 'H\u00famero', system: 'musculoskeletal',
    location: 'Long bone of the upper arm, from shoulder to elbow',
    function: 'Structural support for the arm; attachment site for muscles of arm and shoulder',
    conditions: ['humeral-fracture','humerus-tumor','avascular-necrosis'],
    symptoms: ['arm-pain','swelling','deformity','inability-to-move-arm'],
    procedures: ['x-ray-humerus','ct-arm','open-reduction-internal-fixation','intramedullary-nailing'],
  },
  {
    id: 'elbow', name: 'Elbow', spanish: 'Codo', system: 'musculoskeletal',
    location: 'Joint between the humerus, radius, and ulna',
    function: 'Flexion, extension, pronation, and supination of the forearm',
    conditions: ['tennis-elbow','golfers-elbow','olecranon-bursitis','elbow-fracture','cubital-tunnel-syndrome'],
    symptoms: ['elbow-pain','swelling','stiffness','numbness-in-fingers','weakness'],
    procedures: ['x-ray-elbow','mri-elbow','ultrasound-elbow','arthroscopy','ulnar-nerve-transposition'],
  },
  {
    id: 'forearm', name: 'Forearm', spanish: 'Antebrazo', system: 'musculoskeletal',
    location: 'Between the elbow and the wrist, containing the radius and ulna',
    function: 'Pronation and supination; houses muscles controlling the wrist and hand',
    conditions: ['forearm-fracture','compartment-syndrome','forearm-strain'],
    symptoms: ['pain','swelling','deformity','numbness','weakness'],
    procedures: ['x-ray-forearm','ct-forearm','fasciotomy','open-reduction-internal-fixation'],
  },
  {
    id: 'wrist', name: 'Wrist', spanish: 'Mu\u00f1eca', system: 'musculoskeletal',
    location: 'Joint between the forearm and hand, formed by the carpal bones',
    function: 'Flexion, extension, and deviation of the hand; fine motor positioning',
    conditions: ['carpal-tunnel-syndrome','scaphoid-fracture','de-quervains-tenosynovitis','wrist-sprain','ganglion-cyst'],
    symptoms: ['wrist-pain','numbness','tingling','weakness','swelling'],
    procedures: ['x-ray-wrist','mri-wrist','nerve-conduction-study','carpal-tunnel-release','wrist-arthroscopy'],
  },
  {
    id: 'hand', name: 'Hand', spanish: 'Mano', system: 'musculoskeletal',
    location: 'Distal to the wrist, including metacarpals and phalanges',
    function: 'Gripping, fine motor manipulation, tactile sensation',
    conditions: ['dupuytrens-contracture','trigger-finger','hand-fracture','rheumatoid-arthritis','osteoarthritis'],
    symptoms: ['hand-pain','stiffness','swelling','deformity','loss-of-grip'],
    procedures: ['x-ray-hand','ultrasound-hand','tendon-repair','joint-replacement','fasciotomy'],
  },
  {
    id: 'clavicle', name: 'Clavicle', spanish: 'Clav\u00edcula', system: 'musculoskeletal',
    location: 'Horizontal bone connecting the sternum to the scapula',
    function: 'Struts the shoulder away from the trunk, transmits forces from the upper limb',
    conditions: ['clavicle-fracture','acromioclavicular-separation','sternoclavicular-dislocation'],
    symptoms: ['shoulder-pain','swelling','deformity','difficulty-raising-arm'],
    procedures: ['x-ray-clavicle','ct-shoulder','clavicle-fixation'],
  },
  {
    id: 'scapula', name: 'Scapula', spanish: 'Esc\u00e1pula/Om\u00f3plato', system: 'musculoskeletal',
    location: 'Posterior thorax, overlying ribs 2-7',
    function: 'Anchors muscles of the shoulder and arm; provides socket for glenohumeral joint',
    conditions: ['scapular-fracture','scapular-winging','snapping-scapula'],
    symptoms: ['shoulder-blade-pain','weakness','abnormal-scapular-movement','grinding'],
    procedures: ['x-ray-scapula','ct-shoulder','mri-shoulder','scapular-stabilization'],
  },
  {
    id: 'brachial-plexus', name: 'Brachial Plexus', spanish: 'Plexo braquial', system: 'nervous',
    location: 'Network of nerves from C5-T1, passing through the neck and axilla',
    function: 'Innervates the upper extremity: motor and sensory supply to shoulder, arm, and hand',
    conditions: ['brachial-plexus-injury','thoracic-outlet-syndrome','brachial-neuritis'],
    symptoms: ['arm-weakness','numbness','tingling','burning-pain','loss-of-function'],
    procedures: ['emg','nerve-conduction-study','mri-brachial-plexus','nerve-repair','nerve-transfer'],
  },
  {
    id: 'axillary-lymph-nodes', name: 'Axillary Lymph Nodes', spanish: 'Ganglios linf\u00e1ticos axilares', system: 'lymphatic',
    location: 'Axilla (armpit), grouped in several levels around axillary vessels',
    function: 'Filter lymph from the upper limb, breast, and chest wall; immune surveillance',
    conditions: ['lymphadenopathy','lymphoma','metastatic-breast-cancer','axillary-abscess'],
    symptoms: ['armpit-lump','swelling','tenderness','arm-edema'],
    procedures: ['ultrasound-axilla','lymph-node-biopsy','sentinel-node-biopsy','axillary-dissection'],
  },
  {
    id: 'rotator-cuff', name: 'Rotator Cuff', spanish: 'Manguito rotador', system: 'musculoskeletal',
    location: 'Four muscles (supraspinatus, infraspinatus, teres minor, subscapularis) surrounding the glenohumeral joint',
    function: 'Stabilizes the shoulder joint and enables rotation and abduction of the arm',
    conditions: ['rotator-cuff-tear','rotator-cuff-tendinitis','impingement-syndrome'],
    symptoms: ['shoulder-pain','weakness','difficulty-lifting-arm','night-pain'],
    procedures: ['mri-shoulder','ultrasound-shoulder','rotator-cuff-repair','subacromial-decompression'],
  },

  // =========================================================================
  // LOWER EXTREMITY (12)
  // =========================================================================

  {
    id: 'hip', name: 'Hip', spanish: 'Cadera', system: 'musculoskeletal',
    location: 'Ball-and-socket joint between the femoral head and acetabulum of the pelvis',
    function: 'Weight-bearing; allows flexion, extension, abduction, adduction, and rotation of the leg',
    conditions: ['hip-osteoarthritis','hip-fracture','avascular-necrosis','hip-labral-tear','hip-bursitis'],
    symptoms: ['hip-pain','groin-pain','stiffness','limping','reduced-range-of-motion'],
    procedures: ['x-ray-hip','mri-hip','hip-replacement','hip-arthroscopy','hip-fixation'],
  },
  {
    id: 'femur', name: 'Femur', spanish: 'F\u00e9mur', system: 'musculoskeletal',
    location: 'Longest bone in the body, extending from the hip to the knee',
    function: 'Principal weight-bearing bone of the lower limb; attachment for major muscles',
    conditions: ['femoral-fracture','femoral-head-avascular-necrosis','femur-tumor'],
    symptoms: ['thigh-pain','inability-to-walk','swelling','leg-shortening','deformity'],
    procedures: ['x-ray-femur','ct-leg','intramedullary-nailing','hip-replacement'],
  },
  {
    id: 'knee', name: 'Knee', spanish: 'Rodilla', system: 'musculoskeletal',
    location: 'Hinge joint between the femur, tibia, and patella',
    function: 'Flexion and extension of the leg; weight-bearing and locomotion',
    conditions: ['acl-tear','meniscus-tear','knee-osteoarthritis','patellar-tendinitis','bakers-cyst'],
    symptoms: ['knee-pain','swelling','instability','locking','difficulty-walking'],
    procedures: ['x-ray-knee','mri-knee','knee-arthroscopy','acl-reconstruction','knee-replacement'],
  },
  {
    id: 'tibia', name: 'Tibia', spanish: 'Tibia', system: 'musculoskeletal',
    location: 'Medial bone of the lower leg, from knee to ankle',
    function: 'Primary weight-bearing bone of the lower leg',
    conditions: ['tibial-fracture','stress-fracture','shin-splints','tibial-plateau-fracture'],
    symptoms: ['leg-pain','swelling','deformity','inability-to-bear-weight'],
    procedures: ['x-ray-tibia','ct-leg','intramedullary-nailing','open-reduction-internal-fixation'],
  },
  {
    id: 'fibula', name: 'Fibula', spanish: 'Perone', system: 'musculoskeletal',
    location: 'Lateral bone of the lower leg, from knee to ankle',
    function: 'Muscle attachment, stabilizes the ankle joint, non-weight-bearing support',
    conditions: ['fibular-fracture','ankle-instability','peroneal-nerve-injury'],
    symptoms: ['lateral-leg-pain','ankle-pain','swelling','foot-drop'],
    procedures: ['x-ray-leg','ct-ankle','fibular-fixation'],
  },
  {
    id: 'ankle', name: 'Ankle', spanish: 'Tobillo', system: 'musculoskeletal',
    location: 'Hinge joint between the tibia, fibula, and talus',
    function: 'Dorsiflexion and plantarflexion of the foot; weight-bearing during locomotion',
    conditions: ['ankle-sprain','ankle-fracture','achilles-tendinitis','ankle-arthritis','achilles-rupture'],
    symptoms: ['ankle-pain','swelling','instability','stiffness','difficulty-walking'],
    procedures: ['x-ray-ankle','mri-ankle','ankle-arthroscopy','ankle-repair','ankle-replacement'],
  },
  {
    id: 'foot', name: 'Foot', spanish: 'Pie', system: 'musculoskeletal',
    location: 'Distal to the ankle, composed of tarsals, metatarsals, and phalanges',
    function: 'Weight-bearing, balance, and propulsion during walking and running',
    conditions: ['plantar-fasciitis','bunion','flat-feet','mortons-neuroma','diabetic-foot-ulcer','gout'],
    symptoms: ['foot-pain','swelling','deformity','numbness','difficulty-walking'],
    procedures: ['x-ray-foot','mri-foot','orthotics','bunionectomy','plantar-fascia-release'],
  },
  {
    id: 'quadriceps', name: 'Quadriceps', spanish: 'Cu\u00e1driceps', system: 'musculoskeletal',
    location: 'Anterior thigh, four muscle group from hip/femur to the patella',
    function: 'Extension of the knee, flexion of the hip (rectus femoris)',
    conditions: ['quadriceps-strain','quadriceps-tendon-rupture','quadriceps-contusion'],
    symptoms: ['anterior-thigh-pain','weakness','swelling','difficulty-extending-knee'],
    procedures: ['ultrasound-thigh','mri-thigh','tendon-repair','physical-therapy'],
  },
  {
    id: 'hamstrings', name: 'Hamstrings', spanish: 'Isquiotibiales', system: 'musculoskeletal',
    location: 'Posterior thigh, from ischial tuberosity to the tibia and fibula',
    function: 'Flexion of the knee and extension of the hip',
    conditions: ['hamstring-strain','hamstring-tendinopathy','hamstring-avulsion'],
    symptoms: ['posterior-thigh-pain','bruising','weakness','difficulty-walking'],
    procedures: ['mri-thigh','ultrasound-thigh','hamstring-repair','physical-therapy'],
  },
  {
    id: 'sciatic-nerve', name: 'Sciatic Nerve', spanish: 'Nervio ci\u00e1tico', system: 'nervous',
    location: 'Largest nerve; exits the pelvis through the greater sciatic foramen, descends the posterior thigh',
    function: 'Motor and sensory innervation to the posterior thigh, leg, and foot',
    conditions: ['sciatica','piriformis-syndrome','sciatic-nerve-injury'],
    symptoms: ['radiating-leg-pain','numbness','tingling','weakness','foot-drop'],
    procedures: ['mri-lumbar-spine','emg','nerve-conduction-study','epidural-injection'],
  },
  {
    id: 'femoral-artery', name: 'Femoral Artery', spanish: 'Arteria femoral', system: 'cardiovascular',
    location: 'Passes through the femoral triangle into the adductor canal of the thigh',
    function: 'Primary arterial supply to the lower extremity',
    conditions: ['peripheral-artery-disease','femoral-artery-aneurysm','femoral-artery-occlusion'],
    symptoms: ['leg-pain-with-walking','cold-extremity','weak-pulse','leg-numbness'],
    procedures: ['doppler-ultrasound','ct-angiography','angioplasty','femoral-bypass'],
  },
  {
    id: 'achilles-tendon', name: 'Achilles Tendon', spanish: 'Tend\u00f3n de Aquiles', system: 'musculoskeletal',
    location: 'Posterior ankle, connecting the gastrocnemius and soleus to the calcaneus',
    function: 'Transmits force for plantarflexion; essential for walking, running, and jumping',
    conditions: ['achilles-tendinitis','achilles-rupture','achilles-tendinosis'],
    symptoms: ['heel-pain','stiffness','swelling','difficulty-walking','popping-sensation'],
    procedures: ['ultrasound-ankle','mri-ankle','achilles-repair','physical-therapy'],
  },

  // =========================================================================
  // SPINE (11)
  // =========================================================================

  {
    id: 'cervical-spine', name: 'Cervical Spine', spanish: 'Columna cervical', system: 'musculoskeletal',
    location: 'Seven vertebrae (C1-C7) forming the neck',
    function: 'Supports the head, protects the spinal cord, allows neck movement',
    conditions: ['cervical-disc-herniation','cervical-spondylosis','cervical-fracture','cervical-stenosis'],
    symptoms: ['neck-pain','radiating-arm-pain','numbness','stiffness','headache'],
    procedures: ['x-ray-c-spine','mri-c-spine','cervical-discectomy','cervical-fusion'],
  },
  {
    id: 'thoracic-spine', name: 'Thoracic Spine', spanish: 'Columna tor\u00e1cica', system: 'musculoskeletal',
    location: 'Twelve vertebrae (T1-T12) of the upper and mid back, articulating with ribs',
    function: 'Supports the rib cage, protects the spinal cord, limits rotation',
    conditions: ['thoracic-disc-herniation','kyphosis','compression-fracture','scheuermanns-disease'],
    symptoms: ['mid-back-pain','stiffness','postural-changes','radiating-pain'],
    procedures: ['x-ray-t-spine','mri-t-spine','vertebroplasty','kyphoplasty'],
  },
  {
    id: 'lumbar-spine', name: 'Lumbar Spine', spanish: 'Columna lumbar', system: 'musculoskeletal',
    location: 'Five vertebrae (L1-L5) of the lower back',
    function: 'Bears the majority of body weight, allows flexion and extension of the trunk',
    conditions: ['lumbar-disc-herniation','lumbar-stenosis','spondylolisthesis','degenerative-disc-disease','sciatica'],
    symptoms: ['low-back-pain','radiating-leg-pain','numbness','weakness','stiffness'],
    procedures: ['x-ray-l-spine','mri-l-spine','lumbar-discectomy','lumbar-fusion','epidural-injection'],
  },
  {
    id: 'sacrum', name: 'Sacrum', spanish: 'Sacro', system: 'musculoskeletal',
    location: 'Fused five vertebrae at the base of the spine, between the hip bones',
    function: 'Transmits body weight to the pelvis, anchors the spine to the pelvic girdle',
    conditions: ['sacral-fracture','sacroiliitis','sacral-tumor','coccydynia'],
    symptoms: ['lower-back-pain','buttock-pain','difficulty-sitting','radiating-pain'],
    procedures: ['x-ray-pelvis','mri-sacrum','ct-pelvis','sacroiliac-joint-injection'],
  },
  {
    id: 'coccyx', name: 'Coccyx', spanish: 'Coxis', system: 'musculoskeletal',
    location: 'Small triangular bone at the base of the sacrum (tailbone)',
    function: 'Attachment for pelvic floor muscles and ligaments; weight-bearing when seated',
    conditions: ['coccydynia','coccyx-fracture','pilonidal-cyst'],
    symptoms: ['tailbone-pain','pain-with-sitting','tenderness','bruising'],
    procedures: ['x-ray-coccyx','mri-pelvis','coccygectomy','corticosteroid-injection'],
  },
  {
    id: 'spinal-cord', name: 'Spinal Cord', spanish: 'M\u00e9dula espinal', system: 'nervous',
    location: 'Within the vertebral canal, from the foramen magnum to approximately L1-L2',
    function: 'Transmits motor and sensory signals between the brain and body; mediates reflexes',
    conditions: ['spinal-cord-injury','myelopathy','transverse-myelitis','spinal-cord-tumor','syringomyelia'],
    symptoms: ['paralysis','numbness','weakness','bladder-dysfunction','pain'],
    procedures: ['mri-spine','ct-myelogram','somatosensory-evoked-potentials','spinal-decompression'],
  },
  {
    id: 'intervertebral-discs', name: 'Intervertebral Discs', spanish: 'Discos intervertebrales', system: 'musculoskeletal',
    location: 'Between adjacent vertebral bodies from C2 to the sacrum',
    function: 'Shock absorption, flexibility, and spacing between vertebrae',
    conditions: ['disc-herniation','degenerative-disc-disease','disc-protrusion','discitis'],
    symptoms: ['back-pain','radiating-pain','numbness','weakness','stiffness'],
    procedures: ['mri-spine','ct-spine','discectomy','disc-replacement','epidural-injection'],
  },
  {
    id: 'spinal-nerves', name: 'Spinal Nerves', spanish: 'Nervios espinales', system: 'nervous',
    location: '31 pairs exiting through intervertebral foramina along the spine',
    function: 'Carry motor, sensory, and autonomic signals between the spinal cord and body',
    conditions: ['radiculopathy','nerve-root-compression','spinal-nerve-tumor','herpes-zoster'],
    symptoms: ['radiating-pain','numbness','tingling','muscle-weakness','burning'],
    procedures: ['mri-spine','emg','nerve-conduction-study','nerve-root-block','foraminotomy'],
  },
  {
    id: 'paraspinal-muscles', name: 'Paraspinal Muscles', spanish: 'M\u00fasculos paravertebrales', system: 'musculoskeletal',
    location: 'Along both sides of the vertebral column',
    function: 'Extend and stabilize the spine; control posture and trunk movement',
    conditions: ['muscle-strain','myofascial-pain','muscle-spasm','paraspinal-abscess'],
    symptoms: ['back-pain','stiffness','muscle-spasm','tenderness','reduced-mobility'],
    procedures: ['mri-spine','ultrasound','trigger-point-injection','physical-therapy'],
  },
  {
    id: 'cauda-equina', name: 'Cauda Equina', spanish: 'Cola de caballo', system: 'nervous',
    location: 'Bundle of nerve roots below the conus medullaris, within the lumbar cistern (L2 and below)',
    function: 'Innervates the lower limbs, bladder, bowel, and perineum',
    conditions: ['cauda-equina-syndrome','lumbar-disc-herniation','spinal-tumor'],
    symptoms: ['bilateral-leg-pain','saddle-anesthesia','bladder-dysfunction','bowel-dysfunction','leg-weakness'],
    procedures: ['mri-lumbar-spine','ct-myelogram','emergency-decompression'],
  },
  {
    id: 'facet-joints', name: 'Facet Joints', spanish: 'Articulaciones facetarias', system: 'musculoskeletal',
    location: 'Paired synovial joints on the posterior aspect of each vertebral level',
    function: 'Guide and limit spinal motion; bear axial load in extension',
    conditions: ['facet-joint-arthropathy','facet-joint-syndrome','facet-hypertrophy'],
    symptoms: ['localized-back-pain','stiffness','pain-with-extension','referred-pain'],
    procedures: ['x-ray-spine','ct-spine','facet-joint-injection','medial-branch-block','radiofrequency-ablation'],
  },

  // =========================================================================
  // ENDOCRINE GLANDS (6)
  // =========================================================================

  {
    id: 'thyroid', name: 'Thyroid Gland', spanish: 'Gl\u00e1ndula tiroides', system: 'endocrine',
    location: 'Anterior neck, wrapping around the trachea below the larynx',
    function: 'Produces T3 and T4 hormones regulating metabolism, growth, and development',
    conditions: ['hypothyroidism','hyperthyroidism','thyroid-nodule','thyroid-cancer','goiter','hashimotos-thyroiditis'],
    symptoms: ['fatigue','weight-changes','neck-swelling','temperature-intolerance','hair-loss'],
    procedures: ['thyroid-function-tests','thyroid-ultrasound','thyroid-biopsy','thyroidectomy','radioactive-iodine'],
  },
  {
    id: 'parathyroid', name: 'Parathyroid Glands', spanish: 'Gl\u00e1ndulas paratiroides', system: 'endocrine',
    location: 'Four small glands on the posterior surface of the thyroid',
    function: 'Regulate calcium and phosphorus levels via parathyroid hormone (PTH)',
    conditions: ['hyperparathyroidism','hypoparathyroidism','parathyroid-adenoma'],
    symptoms: ['bone-pain','kidney-stones','fatigue','muscle-cramps','tingling'],
    procedures: ['calcium-level','pth-level','sestamibi-scan','parathyroidectomy','ultrasound-neck'],
  },
  {
    id: 'pancreatic-islets', name: 'Pancreatic Islets (Islets of Langerhans)', spanish: 'Islotes pancre\u00e1ticos', system: 'endocrine',
    location: 'Scattered throughout the pancreas, concentrated in the tail',
    function: 'Secrete insulin (beta cells), glucagon (alpha cells), and somatostatin (delta cells)',
    conditions: ['type-1-diabetes','type-2-diabetes','insulinoma','glucagonoma'],
    symptoms: ['high-blood-sugar','frequent-urination','thirst','weight-loss','fatigue'],
    procedures: ['fasting-glucose','hba1c','insulin-level','ct-pancreas','islet-cell-transplant'],
  },
  {
    id: 'ovaries-endocrine', name: 'Ovaries (Endocrine Function)', spanish: 'Ovarios (funci\u00f3n endocrina)', system: 'endocrine',
    location: 'Lateral pelvic walls, attached to the uterus',
    function: 'Produce estrogen and progesterone regulating the menstrual cycle and secondary sex characteristics',
    conditions: ['polycystic-ovary-syndrome','premature-ovarian-failure','estrogen-deficiency'],
    symptoms: ['irregular-periods','hot-flashes','mood-changes','weight-gain','acne'],
    procedures: ['hormone-panel','pelvic-ultrasound','anti-mullerian-hormone-test'],
  },
  {
    id: 'testes-endocrine', name: 'Testes (Endocrine Function)', spanish: 'Test\u00edculos (funci\u00f3n endocrina)', system: 'endocrine',
    location: 'Within the scrotum',
    function: 'Produce testosterone regulating male secondary sex characteristics and spermatogenesis',
    conditions: ['hypogonadism','testosterone-deficiency','klinefelter-syndrome'],
    symptoms: ['low-libido','fatigue','muscle-loss','erectile-dysfunction','mood-changes'],
    procedures: ['testosterone-level','lh-fsh-levels','semen-analysis','testicular-ultrasound'],
  },
  {
    id: 'hypothalamic-pituitary-axis', name: 'Hypothalamic-Pituitary Axis', spanish: 'Eje hipotal\u00e1mico-hipofisario', system: 'endocrine',
    location: 'Hypothalamus connected to the pituitary gland via the infundibulum',
    function: 'Master control system integrating nervous and endocrine systems via releasing hormones',
    conditions: ['hypopituitarism','central-diabetes-insipidus','kallmann-syndrome','sheehan-syndrome'],
    symptoms: ['hormonal-deficiency','growth-failure','amenorrhea','fatigue','low-blood-pressure'],
    procedures: ['hormone-panel','mri-sella','stimulation-tests','dynamic-pituitary-testing'],
  },

  // =========================================================================
  // VASCULAR & LYMPHATIC (additional) (5)
  // =========================================================================

  {
    id: 'carotid-arteries', name: 'Carotid Arteries', spanish: 'Arterias car\u00f3tidas', system: 'cardiovascular',
    location: 'Lateral neck, ascending from the aortic arch to the skull base',
    function: 'Primary blood supply to the brain, face, and neck',
    conditions: ['carotid-artery-stenosis','carotid-dissection','carotid-body-tumor'],
    symptoms: ['transient-ischemic-attack','stroke-symptoms','neck-bruit','dizziness'],
    procedures: ['carotid-ultrasound','ct-angiography','carotid-endarterectomy','carotid-stenting'],
  },
  {
    id: 'jugular-veins', name: 'Jugular Veins', spanish: 'Venas yugulares', system: 'cardiovascular',
    location: 'Lateral neck, draining blood from the brain and face back to the heart',
    function: 'Primary venous drainage of the head and neck',
    conditions: ['jugular-vein-thrombosis','jugular-vein-distension','jugular-venous-reflux'],
    symptoms: ['neck-swelling','headache','facial-edema','elevated-venous-pressure'],
    procedures: ['ultrasound-neck','ct-venography','central-venous-catheterization'],
  },
  {
    id: 'inferior-vena-cava', name: 'Inferior Vena Cava', spanish: 'Vena cava inferior', system: 'cardiovascular',
    location: 'Retroperitoneal, right of the aorta, from iliac veins to the right atrium',
    function: 'Returns deoxygenated blood from the lower body to the heart',
    conditions: ['ivc-thrombosis','ivc-compression','budd-chiari-syndrome'],
    symptoms: ['leg-edema','abdominal-distension','lower-back-pain','ascites'],
    procedures: ['ct-venography','ultrasound-abdomen','ivc-filter-placement','venography'],
  },
  {
    id: 'lymphatic-system', name: 'Lymphatic System', spanish: 'Sistema linf\u00e1tico', system: 'lymphatic',
    location: 'Network of vessels, nodes, and organs throughout the body',
    function: 'Fluid balance, fat absorption, immune defense and surveillance',
    conditions: ['lymphedema','lymphoma','lymphangitis','lymphadenopathy'],
    symptoms: ['swelling','recurrent-infections','fatigue','night-sweats','weight-loss'],
    procedures: ['lymph-node-biopsy','lymphoscintigraphy','ct-scan','pet-scan'],
  },
  {
    id: 'bone-marrow', name: 'Bone Marrow', spanish: 'M\u00e9dula \u00f3sea', system: 'lymphatic',
    location: 'Within the medullary cavities of bones, especially pelvis, sternum, and vertebrae',
    function: 'Produces red blood cells, white blood cells, and platelets (hematopoiesis)',
    conditions: ['leukemia','aplastic-anemia','multiple-myeloma','myelodysplastic-syndrome','myelofibrosis'],
    symptoms: ['fatigue','frequent-infections','easy-bruising','bone-pain','anemia'],
    procedures: ['bone-marrow-biopsy','complete-blood-count','bone-marrow-transplant','pet-scan'],
  },
];

// ---------------------------------------------------------------------------
// Lookup Helpers
// ---------------------------------------------------------------------------

/** Retrieve a single anatomy region by its unique ID. */
export function getAnatomyRegion(id: string): AnatomyRegion | undefined {
  return ANATOMY_REGIONS.find((r) => r.id === id);
}

/** Search anatomy regions by free-text query across name, spanish name, location, and function. */
export function searchAnatomyRegions(query: string): AnatomyRegion[] {
  const q = query.toLowerCase();
  return ANATOMY_REGIONS.filter(
    (r) =>
      r.id.includes(q) ||
      r.name.toLowerCase().includes(q) ||
      r.spanish.toLowerCase().includes(q) ||
      r.location.toLowerCase().includes(q) ||
      r.function.toLowerCase().includes(q) ||
      r.conditions.some((c) => c.includes(q)) ||
      r.symptoms.some((s) => s.includes(q)) ||
      r.procedures.some((p) => p.includes(q)),
  );
}

/** Get all anatomy regions belonging to a given body system. */
export function getAnatomyBySystem(system: AnatomySystem): AnatomyRegion[] {
  return ANATOMY_REGIONS.filter((r) => r.system === system);
}

/** Find all anatomy regions associated with a specific condition slug. */
export function getAnatomyForCondition(conditionId: string): AnatomyRegion[] {
  const q = conditionId.toLowerCase();
  return ANATOMY_REGIONS.filter((r) => r.conditions.some((c) => c === q));
}
