/**
 * Respiratory System Data Store
 *
 * Contains respiratory anatomy from nasal cavity to alveoli,
 * ventilation mechanics, and gas exchange concepts.
 */

import type {
  RespiratoryStructure,
  Lung,
  RespiratoryMuscle,
  VentilationParameter,
  GasExchangeConcept,
  RespiratoryRegion,
  RespiratoryStatistics,
} from './types';

// In-memory stores
const structures = new Map<string, RespiratoryStructure>();
const lungs = new Map<string, Lung>();
const muscles = new Map<string, RespiratoryMuscle>();

// Indexes
const structuresByRegion = new Map<RespiratoryRegion, string[]>();

/**
 * Initialize respiratory structures
 */
function initializeStructures(): void {
  // ============================================
  // UPPER RESPIRATORY TRACT
  // ============================================

  const nasalCavity: RespiratoryStructure = {
    id: 'nasal-cavity',
    name: 'Nasal Cavity',
    latinName: 'Cavitas nasi',
    fmaId: 'FMA:54378',
    division: 'upper',
    region: 'nasal-cavity',
    paired: true,
    location: 'Between the anterior nares and choanae',
    function: 'Filters, warms, and humidifies inspired air; olfaction',
    epitheliumType: 'Pseudostratified ciliated columnar with goblet cells (respiratory); olfactory epithelium superiorly',
    explanations: {
      level1: 'Your nasal cavity is the space inside your nose. It\'s like an air conditioner - it warms up cold air, adds moisture, and catches dust and germs before they reach your lungs. The hairs and sticky mucus inside your nose are part of this cleaning system!',
      level2: 'The nasal cavity extends from the nostrils to the back of the throat. Three curved bones called turbinates (conchae) increase the surface area to warm and humidify air. The lining produces mucus that traps particles, and tiny hair-like cilia sweep the mucus toward the throat.',
      level3: 'The nasal cavity is divided by the nasal septum (septal cartilage, vomer, perpendicular plate of ethmoid). Three paired turbinates (inferior, middle, superior) create air channels (meatuses). The paranasal sinuses drain under the turbinates. Kiesselbach\'s plexus on the anterior septum is a common epistaxis site.',
      level4: 'The nasal cycle involves alternating congestion/decongestion every 2-6 hours controlled by autonomic tone. The mucociliary apparatus requires proper mucus viscoelasticity and ciliary beat frequency. Type I and II pneumocytes line the olfactory region. NALT (nasal-associated lymphoid tissue) provides immune surveillance.',
      level5: 'Nasal obstruction workup includes anterior rhinoscopy, nasal endoscopy, and CT sinuses. Septal deviation affects 80% of people to some degree. Functional endoscopic sinus surgery (FESS) addresses chronic rhinosinusitis by improving sinus drainage. Nasal polyposis is associated with aspirin-exacerbated respiratory disease (Samter\'s triad).',
    },
    keyFacts: [
      'Filters, warms, and humidifies air',
      'Three paired turbinates increase surface area',
      'Olfactory epithelium in roof detects smell',
      'Kiesselbach\'s plexus: common nosebleed site',
      'Paranasal sinuses drain into meatuses',
    ],
    bloodSupply: ['Sphenopalatine artery', 'Anterior ethmoidal artery', 'Posterior ethmoidal artery', 'Superior labial artery', 'Greater palatine artery'],
    innervation: ['Olfactory nerve (CN I)', 'Ophthalmic division (V1)', 'Maxillary division (V2)'],
    pathologies: [
      { name: 'Rhinitis', description: 'Inflammation of nasal mucosa', symptoms: ['Congestion', 'Rhinorrhea', 'Sneezing'], causes: ['Allergic', 'Viral', 'Vasomotor'] },
      { name: 'Epistaxis', description: 'Nosebleed', symptoms: ['Bleeding from nose'], causes: ['Trauma', 'Dry air', 'Hypertension', 'Anticoagulation'] },
      { name: 'Septal deviation', description: 'Deviation of nasal septum', symptoms: ['Nasal obstruction', 'Recurrent sinusitis'] },
    ],
    relatedStructures: ['pharynx', 'paranasal-sinuses'],
  };

  const pharynx: RespiratoryStructure = {
    id: 'pharynx',
    name: 'Pharynx',
    latinName: 'Pharynx',
    fmaId: 'FMA:46622',
    division: 'upper',
    region: 'pharynx',
    paired: false,
    side: 'midline',
    location: 'Behind the nasal and oral cavities, extends from skull base to C6',
    function: 'Common passage for air and food; contains lymphoid tissue',
    explanations: {
      level1: 'Your pharynx is your throat! It\'s a tube that both air and food pass through. It\'s divided into three parts - the part behind your nose (nasopharynx), behind your mouth (oropharynx), and behind your voice box (laryngopharynx).',
      level2: 'The pharynx has three regions: nasopharynx (posterior to nasal cavity), oropharynx (posterior to mouth), and laryngopharynx (behind the larynx). It contains tonsils (adenoid, palatine, lingual) that help fight infection. During swallowing, the soft palate rises to close off the nasopharynx.',
      level3: 'The pharyngeal wall consists of four muscles (superior, middle, inferior constrictors and stylopharyngeus) that propel food during swallowing. The eustachian tube opens into the nasopharynx. Waldeyer\'s ring (tonsillar lymphoid tissue) provides mucosal immunity. The pyriform sinuses flank the laryngeal inlet.',
      level4: 'Pharyngeal constrictor innervation is via pharyngeal plexus (CN IX, X, XI). Stylopharyngeus is the only muscle innervated by CN IX alone. Killian\'s dehiscence between thyropharyngeus and cricopharyngeus is the site of Zenker\'s diverticulum. Pharyngeal phase of swallowing involves 26 muscle pairs.',
      level5: 'Obstructive sleep apnea results from pharyngeal collapse during sleep; treatment includes CPAP, mandibular advancement, and uvulopalatopharyngoplasty. Pharyngeal cancer (SCC) is associated with HPV (especially oropharyngeal), tobacco, and alcohol. Nasopharyngeal carcinoma is EBV-associated and common in Southeast Asia.',
    },
    keyFacts: [
      'Three parts: nasopharynx, oropharynx, laryngopharynx',
      'Common passage for respiratory and digestive tracts',
      'Contains Waldeyer\'s ring (tonsils)',
      'Site of OSA collapse',
      'Swallowing requires coordinated muscle action',
    ],
    bloodSupply: ['Ascending pharyngeal artery', 'Ascending palatine artery', 'Tonsillar branches'],
    innervation: ['Pharyngeal plexus (CN IX, X, XI)'],
    pathologies: [
      { name: 'Pharyngitis', description: 'Sore throat', symptoms: ['Pain', 'Dysphagia'], causes: ['Viral', 'Bacterial (strep)'] },
      { name: 'Obstructive sleep apnea', description: 'Airway collapse during sleep', symptoms: ['Snoring', 'Apneas', 'Daytime sleepiness'] },
      { name: 'Zenker\'s diverticulum', description: 'Outpouching at Killian\'s dehiscence', symptoms: ['Dysphagia', 'Regurgitation', 'Halitosis'] },
    ],
    relatedStructures: ['nasal-cavity', 'larynx', 'esophagus'],
  };

  const larynx: RespiratoryStructure = {
    id: 'larynx',
    name: 'Larynx',
    latinName: 'Larynx',
    fmaId: 'FMA:55097',
    division: 'upper',
    region: 'larynx',
    paired: false,
    side: 'midline',
    location: 'Anterior neck at C3-C6, suspended from hyoid bone',
    function: 'Phonation (voice production), airway protection during swallowing',
    cartilagePresent: true,
    explanations: {
      level1: 'Your larynx is your voice box! It\'s in your throat and contains your vocal cords. When air from your lungs passes through, your vocal cords vibrate to make sounds. It also closes when you swallow to keep food out of your airways.',
      level2: 'The larynx contains the vocal cords (vocal folds) that vibrate to produce sound. It has several cartilages - the thyroid cartilage forms the "Adam\'s apple," the cricoid is a complete ring below it. The epiglottis flips down during swallowing to protect the airway.',
      level3: 'The laryngeal framework includes unpaired cartilages (thyroid, cricoid, epiglottis) and paired cartilages (arytenoid, corniculate, cuneiform). Intrinsic muscles control vocal cord tension and position. The cricothyroid membrane is the site for emergency airway access.',
      level4: 'All intrinsic laryngeal muscles are innervated by the recurrent laryngeal nerve (CN X) except cricothyroid (superior laryngeal nerve). Unilateral RLN injury causes hoarseness; bilateral causes stridor. The cricoarytenoid joints allow vocal cord ab/adduction. Reinke\'s space allows vocal cord swelling.',
      level5: 'Laryngeal cancer (95% SCC) presents with hoarseness; early glottic has good prognosis. Direct laryngoscopy and microlaryngoscopy allow diagnosis and treatment. Vocal cord paralysis evaluation includes CT neck/chest and laryngeal EMG. Injection laryngoplasty or thyroplasty addresses glottic insufficiency.',
    },
    keyFacts: [
      'Voice production via vocal cord vibration',
      'Airway protection during swallowing',
      'Thyroid cartilage = Adam\'s apple',
      'Cricothyroid membrane: emergency airway access',
      'RLN injury causes hoarseness',
    ],
    bloodSupply: ['Superior laryngeal artery', 'Inferior laryngeal artery'],
    innervation: ['Superior laryngeal nerve (sensory above cords, cricothyroid motor)', 'Recurrent laryngeal nerve (motor to all other intrinsic muscles)'],
    pathologies: [
      { name: 'Laryngitis', description: 'Laryngeal inflammation', symptoms: ['Hoarseness', 'Cough'], causes: ['Viral', 'Voice overuse', 'GERD'] },
      { name: 'Vocal cord paralysis', description: 'Immobile vocal cord', symptoms: ['Hoarseness', 'Aspiration', 'Weak voice'] },
      { name: 'Laryngeal cancer', description: 'Malignancy of larynx', symptoms: ['Persistent hoarseness', 'Dysphagia', 'Stridor'] },
    ],
    relatedStructures: ['pharynx', 'trachea'],
  };

  // ============================================
  // LOWER RESPIRATORY TRACT
  // ============================================

  const trachea: RespiratoryStructure = {
    id: 'trachea',
    name: 'Trachea',
    latinName: 'Trachea',
    fmaId: 'FMA:7394',
    division: 'lower',
    region: 'trachea',
    paired: false,
    side: 'midline',
    location: 'From C6 (cricoid) to T4-5 (carina), anterior to esophagus',
    function: 'Conducts air between larynx and bronchi',
    epitheliumType: 'Pseudostratified ciliated columnar with goblet cells',
    cartilagePresent: true,
    explanations: {
      level1: 'Your trachea is your windpipe - the tube that carries air from your throat down to your lungs. It has rings of cartilage that keep it open, kind of like a vacuum cleaner hose!',
      level2: 'The trachea is about 10-12 cm long and has 16-20 C-shaped cartilage rings that keep it open. The rings are incomplete posteriorly where the esophagus (food tube) runs behind it. At its bottom, it divides into the right and left main bronchi.',
      level3: 'The trachea extends from the cricoid cartilage (C6) to the carina (T4-5). C-shaped cartilages are connected by annular ligaments. The posterior trachealis muscle allows esophageal expansion during swallowing. Mucociliary clearance moves mucus upward.',
      level4: 'The carina contains a high density of cough receptors. Blood supply is segmental from inferior thyroid and bronchial arteries - relevant for tracheal resection limits. The trachea deviates slightly right due to the aortic arch. Tracheal stenosis can follow prolonged intubation.',
      level5: 'Tracheomalacia presents with expiratory stridor and dynamic airway collapse on bronchoscopy. Tracheal resection up to 4-5cm is feasible with primary anastomosis. Tracheal tumors are rare; most are SCC or adenoid cystic carcinoma. Tracheostomy complications include hemorrhage (innominate artery fistula) and stenosis.',
    },
    keyFacts: [
      '10-12 cm long, 16-20 C-shaped rings',
      'Extends C6 to T4-5 (carina)',
      'Right main bronchus more vertical - aspiration path',
      'Mucociliary escalator clears secretions',
      'C-shaped rings allow esophageal expansion',
    ],
    bloodSupply: ['Inferior thyroid artery', 'Bronchial arteries'],
    innervation: ['Vagus nerve (CN X)', 'Recurrent laryngeal nerves'],
    pathologies: [
      { name: 'Tracheitis', description: 'Tracheal inflammation', symptoms: ['Cough', 'Stridor', 'Fever'], causes: ['Bacterial', 'Viral'] },
      { name: 'Tracheal stenosis', description: 'Narrowing of trachea', symptoms: ['Stridor', 'Dyspnea'], causes: ['Post-intubation', 'Trauma'] },
      { name: 'Tracheomalacia', description: 'Tracheal wall weakness', symptoms: ['Expiratory stridor', 'Cough'] },
    ],
    relatedStructures: ['larynx', 'main-bronchus-right', 'main-bronchus-left'],
  };

  const rightMainBronchus: RespiratoryStructure = {
    id: 'main-bronchus-right',
    name: 'Right Main Bronchus',
    latinName: 'Bronchus principalis dexter',
    fmaId: 'FMA:7395',
    division: 'lower',
    region: 'bronchi',
    paired: true,
    side: 'right',
    location: 'From carina to right lung hilum',
    function: 'Conducts air to right lung',
    cartilagePresent: true,
    explanations: {
      level1: 'The right main bronchus is the air tube going to your right lung. It\'s wider and more straight than the left one, which is why if you accidentally breathe in something, it usually goes to the right lung.',
      level2: 'The right main bronchus is shorter (about 2.5 cm), wider, and more vertical than the left. This makes it the more common path for aspirated (inhaled) objects. It divides into three lobar bronchi for the three lobes of the right lung.',
      level3: 'The right main bronchus is approximately 2.5 cm long, 25° from vertical, and wider than the left. The pulmonary artery passes anterior to it at the hilum. It divides into upper lobe bronchus (before entering hilum - "eparterial") and an intermediate bronchus (within hilum).',
      level4: 'The right upper lobe bronchus branches before the pulmonary artery crosses (eparterial), making it accessible for separate intubation. The intermediate bronchus continues to middle and lower lobe bronchi. Foreign body aspiration favors the right side, especially the right lower lobe.',
      level5: 'Bronchoscopic anatomy: RUL bronchus at 9 o\'clock immediately after carina, then bronchus intermedius continues with RML at 12 o\'clock and RLL continuing. Right-sided double-lumen tubes must avoid RUL occlusion. Lung isolation is easier on the left.',
    },
    keyFacts: [
      '2.5 cm long, 25° from vertical',
      'Wider than left - foreign body aspiration path',
      'Upper lobe bronchus is eparterial',
      'Divides into 3 lobar bronchi',
      'Preferred side for single-lung ventilation',
    ],
    bloodSupply: ['Bronchial arteries'],
    innervation: ['Vagus nerve (pulmonary plexus)'],
    pathologies: [
      { name: 'Foreign body aspiration', description: 'Inhaled object lodged in airway', symptoms: ['Cough', 'Wheeze', 'Decreased breath sounds'] },
      { name: 'Bronchogenic carcinoma', description: 'Lung cancer arising from bronchial epithelium', symptoms: ['Cough', 'Hemoptysis', 'Weight loss'] },
    ],
    relatedStructures: ['trachea', 'lung-right'],
  };

  const leftMainBronchus: RespiratoryStructure = {
    id: 'main-bronchus-left',
    name: 'Left Main Bronchus',
    latinName: 'Bronchus principalis sinister',
    fmaId: 'FMA:7396',
    division: 'lower',
    region: 'bronchi',
    paired: true,
    side: 'left',
    location: 'From carina to left lung hilum, passing under aortic arch',
    function: 'Conducts air to left lung',
    cartilagePresent: true,
    explanations: {
      level1: 'The left main bronchus is the air tube going to your left lung. It\'s longer and goes more sideways than the right one because it has to go under the big blood vessel from your heart (the aorta).',
      level2: 'The left main bronchus is about 5 cm long and angles more horizontally (45°) because it passes under the aortic arch. It divides into two lobar bronchi for the two lobes of the left lung.',
      level3: 'The left main bronchus is approximately 5 cm long and 45° from vertical, passing inferior to the aortic arch. Both lobar bronchi arise after the pulmonary artery crosses (hyparterial). The lingula is supplied by a branch of the upper lobe bronchus.',
      level4: 'The longer left main bronchus makes left-sided double-lumen tube placement and lung isolation more straightforward. Compression by enlarged left atrium (mitral stenosis) or mediastinal masses can cause left main bronchus narrowing.',
      level5: 'Compression of the left main bronchus can occur with giant left atrium, thoracic aortic aneurysm, or subcarinal lymphadenopathy. Virtual bronchoscopy from CT can plan procedures. Bronchial sleeve resection preserves lung tissue compared to pneumonectomy.',
    },
    keyFacts: [
      '5 cm long, 45° from vertical',
      'Passes under aortic arch',
      'Narrower and longer than right',
      'Divides into 2 lobar bronchi',
      'Preferred side for double-lumen tube',
    ],
    bloodSupply: ['Bronchial arteries'],
    innervation: ['Vagus nerve (pulmonary plexus)'],
    relatedStructures: ['trachea', 'lung-left'],
  };

  // Store structures
  structures.set('nasal-cavity', nasalCavity);
  structures.set('pharynx', pharynx);
  structures.set('larynx', larynx);
  structures.set('trachea', trachea);
  structures.set('main-bronchus-right', rightMainBronchus);
  structures.set('main-bronchus-left', leftMainBronchus);

  // Build region index
  structures.forEach((structure, id) => {
    const regionList = structuresByRegion.get(structure.region) || [];
    regionList.push(id);
    structuresByRegion.set(structure.region, regionList);
  });
}

/**
 * Initialize lungs
 */
function initializeLungs(): void {
  const rightLung: Lung = {
    id: 'lung-right',
    name: 'Right Lung',
    side: 'right',
    fmaId: 'FMA:7309',
    lobes: ['right-upper', 'right-middle', 'right-lower'],
    segments: [
      'Apical (S1)', 'Posterior (S2)', 'Anterior (S3)',
      'Lateral (S4)', 'Medial (S5)',
      'Superior (S6)', 'Medial basal (S7)', 'Anterior basal (S8)', 'Lateral basal (S9)', 'Posterior basal (S10)',
    ],
    fissures: ['Oblique fissure', 'Horizontal fissure'],
    hilum: 'Main bronchus posterior, pulmonary artery anterosuperior, pulmonary veins anterior',
    bronchialTree: '3 lobar bronchi → 10 segmental bronchi',
    explanations: {
      level1: 'Your right lung is slightly bigger than your left and has three parts called lobes. Your heart takes up space on the left side, so your right lung has more room!',
      level2: 'The right lung has three lobes (upper, middle, lower) separated by two fissures. It\'s larger than the left lung because the heart sits more to the left. It receives blood from the right pulmonary artery and returns it via two pulmonary veins.',
      level3: 'The right lung has 10 bronchopulmonary segments: 3 in the upper lobe, 2 in the middle lobe, and 5 in the lower lobe. The oblique fissure separates upper/middle from lower; the horizontal fissure separates upper from middle. The hilum contains the bronchus, vessels, nerves, and lymph nodes.',
      level4: 'Bronchopulmonary segments are the smallest surgically resectable lung units. Segment-sparing resections preserve lung function. The middle lobe is prone to atelectasis (middle lobe syndrome) due to narrowed bronchial angles. The right inferior pulmonary vein drains the middle and lower lobes.',
      level5: 'Lobectomy is the standard for early-stage lung cancer; segmentectomy is an alternative for small tumors or compromised patients. VATS approach is preferred. Lymph node stations for right lung include 2R, 4R, 7, 8, 9. Bronchoscopic anatomy guides biopsy and stent placement.',
    },
    keyFacts: [
      'Three lobes (upper, middle, lower)',
      '10 bronchopulmonary segments',
      'Two fissures (oblique, horizontal)',
      'Larger than left lung',
      'Receives ~55% of pulmonary blood flow',
    ],
    bloodSupply: {
      pulmonary: 'Right pulmonary artery (deoxygenated blood)',
      bronchial: 'Bronchial arteries from thoracic aorta (oxygenated blood)',
    },
    lymphDrainage: ['Hilar nodes', 'Mediastinal nodes', 'Thoracic duct'],
    pathologies: [
      { name: 'Pneumonia', description: 'Lung infection', symptoms: ['Cough', 'Fever', 'Dyspnea', 'Sputum'], relevantImaging: ['CXR', 'CT chest'] },
      { name: 'Lung cancer', description: 'Primary lung malignancy', symptoms: ['Cough', 'Hemoptysis', 'Weight loss'], relevantImaging: ['CT chest', 'PET-CT'] },
      { name: 'Pulmonary embolism', description: 'Clot in pulmonary artery', symptoms: ['Dyspnea', 'Pleuritic pain', 'Tachycardia'], relevantImaging: ['CT angiography'] },
    ],
  };

  const leftLung: Lung = {
    id: 'lung-left',
    name: 'Left Lung',
    side: 'left',
    fmaId: 'FMA:7310',
    lobes: ['left-upper', 'left-lower', 'lingula'],
    segments: [
      'Apicoposterior (S1+2)', 'Anterior (S3)', 'Superior lingular (S4)', 'Inferior lingular (S5)',
      'Superior (S6)', 'Anteromedial basal (S7+8)', 'Lateral basal (S9)', 'Posterior basal (S10)',
    ],
    fissures: ['Oblique fissure'],
    hilum: 'Bronchus posterior, pulmonary artery superior, pulmonary veins anterior',
    bronchialTree: '2 lobar bronchi → 8-9 segmental bronchi',
    explanations: {
      level1: 'Your left lung is a bit smaller than your right because your heart needs room on that side. It only has two main parts (lobes) instead of three.',
      level2: 'The left lung has two lobes (upper and lower) separated by one oblique fissure. The cardiac notch is an indentation where the heart sits. The lingula is a tongue-shaped projection of the upper lobe, equivalent to the right middle lobe.',
      level3: 'The left lung has 8-9 bronchopulmonary segments (some are combined). The lingula (segments 4 and 5) corresponds functionally to the right middle lobe. The cardiac notch creates the anterior border indentation. The left hilum is slightly higher than the right.',
      level4: 'The lingula receives a dedicated bronchus from the upper lobe bronchus and separate arterial supply, making lingulectomy feasible. The left recurrent laryngeal nerve loops under the aortic arch near the hilum - at risk during surgery.',
      level5: 'Left pneumonectomy requires careful RLN identification. The left pulmonary artery is shorter than the right, complicating pneumonectomy. Post-pneumonectomy syndrome (mediastinal shift causing tracheal compression) is more common after right pneumonectomy.',
    },
    keyFacts: [
      'Two lobes (upper, lower)',
      '8-9 bronchopulmonary segments',
      'One fissure (oblique)',
      'Cardiac notch accommodates heart',
      'Lingula = equivalent of right middle lobe',
    ],
    bloodSupply: {
      pulmonary: 'Left pulmonary artery',
      bronchial: 'Bronchial arteries',
    },
    lymphDrainage: ['Hilar nodes', 'Mediastinal nodes', 'Thoracic duct'],
    pathologies: [
      { name: 'Pneumonia', description: 'Lung infection', symptoms: ['Cough', 'Fever', 'Dyspnea'] },
      { name: 'Lung cancer', description: 'Primary lung malignancy', symptoms: ['Cough', 'Hemoptysis'] },
    ],
  };

  lungs.set('lung-right', rightLung);
  lungs.set('lung-left', leftLung);
}

/**
 * Initialize respiratory muscles
 */
function initializeMuscles(): void {
  const diaphragm: RespiratoryMuscle = {
    id: 'diaphragm',
    name: 'Diaphragm',
    latinName: 'Musculus diaphragma',
    fmaId: 'FMA:13295',
    function: 'inspiration',
    origin: 'Xiphoid process, lower 6 costal cartilages, L1-L3 vertebrae (crura)',
    insertion: 'Central tendon',
    innervation: 'Phrenic nerve (C3-C5)',
    action: 'Primary muscle of inspiration; flattens on contraction to increase thoracic volume',
    explanations: {
      level1: 'The diaphragm is a big dome-shaped muscle under your lungs. When you breathe in, it pulls down and flattens, making room for your lungs to fill with air. When you breathe out, it relaxes and goes back up like a parachute.',
      level2: 'The diaphragm is the main muscle of breathing. It separates your chest from your abdomen. When it contracts, it moves downward, creating negative pressure that draws air into the lungs. At rest, it does about 70% of the breathing work.',
      level3: 'The diaphragm has three parts (sternal, costal, lumbar) converging on a central tendon. It has openings for the aorta (T12), esophagus (T10), and IVC (T8). Contraction increases thoracic volume and decreases intrathoracic pressure by ~3 cmH2O during quiet breathing.',
      level4: 'The diaphragm receives motor innervation from the phrenic nerve (C3-C5). "C3, 4, 5 keeps the diaphragm alive." Diaphragmatic contraction causes paradoxical abdominal movement. Zone of apposition is where it attaches to the lower ribs - its length determines ventilatory capacity.',
      level5: 'Diaphragmatic paralysis (unilateral) may be asymptomatic or cause dyspnea; sniff test shows paradoxical movement. Bilateral paralysis requires ventilatory support. Diaphragmatic pacing is an option for high cervical SCI. COPD causes diaphragm flattening and inefficiency.',
    },
    keyFacts: [
      'Primary muscle of inspiration',
      'Dome-shaped, separates thorax from abdomen',
      'Innervated by phrenic nerve (C3-C5)',
      'Three openings: aortic (T12), esophageal (T10), caval (T8)',
      'Accounts for ~70% of ventilatory work at rest',
    ],
  };

  const externalIntercostals: RespiratoryMuscle = {
    id: 'external-intercostals',
    name: 'External Intercostal Muscles',
    latinName: 'Musculi intercostales externi',
    fmaId: 'FMA:9757',
    function: 'inspiration',
    origin: 'Inferior border of rib above',
    insertion: 'Superior border of rib below',
    innervation: 'Intercostal nerves (T1-T11)',
    action: 'Elevate ribs during inspiration (bucket handle and pump handle motion)',
    explanations: {
      level1: 'These muscles are between your ribs on the outside. When they pull, they lift your ribs up and out, kind of like raising the handle on a bucket. This helps make more room for air in your lungs.',
      level2: 'The external intercostal muscles run between the ribs with fibers angling down and forward. When they contract, they lift the ribs up and out, increasing the front-to-back and side-to-side dimensions of the chest. This helps draw air into the lungs.',
      level3: 'External intercostals run inferoanteriorly from the tubercle of the rib to the costochondral junction. Their contraction elevates the ribs, increasing both the anteroposterior (pump handle) and lateral (bucket handle) dimensions of the thorax.',
      level4: 'The intercostal nerve, artery, and vein run in the costal groove, protected by the overhanging rib edge (VAN order, vein most superior). Thoracentesis and chest tube insertion should go just above a rib to avoid the neurovascular bundle.',
      level5: 'In COPD with hyperinflation, the ribs are already elevated, reducing the mechanical advantage of the intercostals. Intercostal muscle recruitment increases with exercise and respiratory distress. Accessory respiratory muscle use is a sign of increased work of breathing.',
    },
    keyFacts: [
      'Elevate ribs during inspiration',
      'Fibers run inferoanteriorly',
      'Pump handle and bucket handle motion',
      'Active during increased ventilatory demand',
      'VAN bundle in costal groove',
    ],
  };

  muscles.set('diaphragm', diaphragm);
  muscles.set('external-intercostals', externalIntercostals);
}

// Initialize all data
initializeStructures();
initializeLungs();
initializeMuscles();

// ============================================
// Ventilation Parameters
// ============================================

export const VENTILATION_PARAMETERS: VentilationParameter[] = [
  { name: 'Tidal Volume', abbreviation: 'TV', normalValue: '500', unit: 'mL', description: 'Volume of air moved in one breath', clinicalSignificance: 'Reduced in restrictive disease' },
  { name: 'Respiratory Rate', abbreviation: 'RR', normalValue: '12-20', unit: 'breaths/min', description: 'Number of breaths per minute', clinicalSignificance: 'Increased in respiratory distress' },
  { name: 'Minute Ventilation', abbreviation: 'VE', normalValue: '6-8', unit: 'L/min', description: 'TV × RR', clinicalSignificance: 'Increased demand with exercise or metabolic acidosis' },
  { name: 'Vital Capacity', abbreviation: 'VC', normalValue: '4.6', unit: 'L', description: 'Maximum air exhaled after max inspiration', clinicalSignificance: 'Reduced in both restrictive and obstructive disease' },
  { name: 'FEV1', abbreviation: 'FEV1', normalValue: '3.7', unit: 'L', description: 'Volume exhaled in first second of forced expiration', clinicalSignificance: 'Reduced in obstructive disease; FEV1/FVC ratio diagnostic' },
  { name: 'Total Lung Capacity', abbreviation: 'TLC', normalValue: '6', unit: 'L', description: 'Total air in lungs after max inspiration', clinicalSignificance: 'Increased in obstructive, decreased in restrictive' },
  { name: 'Residual Volume', abbreviation: 'RV', normalValue: '1.2', unit: 'L', description: 'Air remaining after max expiration', clinicalSignificance: 'Increased in air trapping (COPD)' },
  { name: 'Functional Residual Capacity', abbreviation: 'FRC', normalValue: '2.4', unit: 'L', description: 'Air in lungs after normal expiration', clinicalSignificance: 'Determines oxygen reserve' },
];

// ============================================
// Gas Exchange Concepts
// ============================================

export const GAS_EXCHANGE_CONCEPTS: GasExchangeConcept[] = [
  {
    id: 'diffusion',
    name: 'Gas Diffusion',
    description: 'Movement of O2 and CO2 across alveolar-capillary membrane by concentration gradient',
    formula: 'V = (A × D × ΔP) / T (Fick\'s law)',
    normalValues: 'Diffusion capacity (DLCO) ~25 mL/min/mmHg',
    explanations: {
      level1: 'Oxygen and carbon dioxide move between your lungs and blood like how a smell spreads across a room - from where there\'s more to where there\'s less.',
      level2: 'Gases move across the alveolar membrane by diffusion - oxygen goes from air to blood, CO2 goes from blood to air. This happens because gases move from high to low concentration.',
      level3: 'Diffusion depends on surface area, membrane thickness, and pressure gradient (Fick\'s law). The alveolar-capillary barrier is extremely thin (~0.5 μm). DLCO measures diffusion capacity, mainly limited by pulmonary capillary blood volume.',
      level4: 'Perfusion-limited vs diffusion-limited gas exchange: O2 is normally perfusion-limited (equilibrates quickly), but becomes diffusion-limited in disease or exercise. CO is always diffusion-limited, making it ideal for DLCO testing.',
      level5: 'Low DLCO differential: interstitial lung disease, emphysema (loss of surface area), pulmonary vascular disease, anemia. DLCO corrected for hemoglobin (DLCO/VA) helps distinguish emphysema from other causes.',
    },
  },
  {
    id: 'vq-matching',
    name: 'Ventilation-Perfusion Matching',
    description: 'Optimal gas exchange requires matching ventilation (V) to perfusion (Q)',
    formula: 'Ideal V/Q = 0.8-1.0',
    normalValues: 'V/Q varies from apex (high) to base (low) in upright position',
    explanations: {
      level1: 'Your lungs work best when the air you breathe in matches up with the blood flowing by. If there\'s a mismatch, your blood can\'t pick up as much oxygen.',
      level2: 'Some lung areas get more blood flow, others get more air. Healthy lungs match ventilation and perfusion so gas exchange is efficient. Diseases can create V/Q mismatch.',
      level3: 'V/Q ratio varies from apex (high V/Q ≈3.0) to base (low V/Q ≈0.6) due to gravity effects on blood flow. Overall V/Q ≈0.8. Hypoxic pulmonary vasoconstriction (HPV) minimizes V/Q mismatch by reducing blood flow to poorly ventilated areas.',
      level4: 'V/Q mismatch is the most common cause of hypoxemia. Shunt (V/Q=0) is extreme V/Q mismatch that doesn\'t respond to supplemental O2. Dead space (V/Q=∞) wastes ventilation. The iso-shunt diagram relates FiO2 to PaO2 for different V/Q states.',
      level5: 'V/Q scan (scintigraphy) diagnoses PE and quantifies regional ventilation/perfusion. Multiple inert gas elimination technique (MIGET) precisely measures V/Q distribution. Shunt fraction calculation: Qs/Qt = (CcO2 - CaO2)/(CcO2 - CvO2).',
    },
  },
];

// ============================================
// API Functions
// ============================================

export function getStructure(id: string): RespiratoryStructure | undefined {
  return structures.get(id);
}

export function getAllStructures(): RespiratoryStructure[] {
  return Array.from(structures.values());
}

export function getStructuresByRegion(region: RespiratoryRegion): RespiratoryStructure[] {
  const ids = structuresByRegion.get(region) || [];
  return ids.map(id => structures.get(id)!).filter(Boolean);
}

export function getLung(id: string): Lung | undefined {
  return lungs.get(id);
}

export function getAllLungs(): Lung[] {
  return Array.from(lungs.values());
}

export function getMuscle(id: string): RespiratoryMuscle | undefined {
  return muscles.get(id);
}

export function getAllMuscles(): RespiratoryMuscle[] {
  return Array.from(muscles.values());
}

export function searchStructures(query: string): RespiratoryStructure[] {
  const lowerQuery = query.toLowerCase();
  return Array.from(structures.values()).filter(s =>
    s.name.toLowerCase().includes(lowerQuery) ||
    (s.latinName && s.latinName.toLowerCase().includes(lowerQuery))
  );
}

export function getStatistics(): RespiratoryStatistics {
  const upper = Array.from(structures.values()).filter(s => s.division === 'upper').length;
  const lower = Array.from(structures.values()).filter(s => s.division === 'lower').length;
  return {
    totalStructures: structures.size + lungs.size,
    upperTract: upper,
    lowerTract: lower,
    respiratoryMuscles: muscles.size,
  };
}

export function getExplanation(
  structure: RespiratoryStructure | Lung | RespiratoryMuscle | GasExchangeConcept,
  level: 1 | 2 | 3 | 4 | 5
): string {
  const levelKey = `level${level}` as keyof typeof structure.explanations;
  if (structure.explanations[levelKey]) {
    return structure.explanations[levelKey];
  }
  for (let l = level - 1; l >= 1; l--) {
    const fallbackKey = `level${l}` as keyof typeof structure.explanations;
    if (structure.explanations[fallbackKey]) {
      return structure.explanations[fallbackKey];
    }
  }
  return 'No explanation available.';
}
