/**
 * Respiratory System Encyclopedia Entries
 * 
 * Transcribed from OpenStax Anatomy & Physiology (CC BY 4.0)
 * Local comprehensive reference for offline access
 */

import type { EncyclopediaEntry } from '../types';

/**
 * Respiratory System Overview Entry
 */
export const respiratorySystemEntry: EncyclopediaEntry = {
  entryId: 'respiratory-system',
  name: 'Respiratory System',
  entryType: 'anatomy',
  category: 'respiratory',
  summary: 'The system responsible for gas exchange, bringing oxygen into the body and removing carbon dioxide.',
  overview: {
    patient: 'The respiratory system is your body\'s breathing system. It brings oxygen from the air into your blood and removes carbon dioxide, a waste product your cells produce. The system includes your nose and mouth (air entry), throat and windpipe (air passage), lungs (where gas exchange happens), and diaphragm (the muscle that helps you breathe). An adult breathes about 12-20 times per minute at rest, moving about 500 mL of air with each breath.',
    intermediate: 'The respiratory system consists of the upper respiratory tract (nose, nasal cavity, pharynx, larynx) and lower respiratory tract (trachea, bronchi, bronchioles, lungs, alveoli). Its primary function is gas exchange: oxygen from air diffuses into blood, while carbon dioxide diffuses from blood into air to be exhaled. The system also regulates blood pH, protects against pathogens (mucociliary escalator), produces speech, and senses smell. The conducting zone (nose to terminal bronchioles) warms, humidifies, and filters air. The respiratory zone (respiratory bronchioles, alveolar ducts, alveoli) performs gas exchange across a thin air-blood barrier (~0.5 μm).',
    professional: 'The respiratory system comprises structural and functional components organized into conducting and respiratory zones. Conducting zone: Nasal cavity (vestibule, respiratory region, olfactory region), paranasal sinuses, pharynx (naso/oro/laryngo), larynx (cartilages, vocal folds), trachea (C-shaped cartilages, posterior smooth muscle), bronchi (primary, lobar, segmental), bronchioles (terminal at generation 16). Respiratory zone: Respiratory bronchioles (generations 17-19), alveolar ducts (generations 20-22), alveolar sacs, alveoli (300-500 million, total surface area 70-100 m²). Gas exchange occurs across type I alveolar cells and capillary endothelium (0.5 μm barrier). Type II pneumocytes produce surfactant. Ventilation: tidal volume ~500 mL, respiratory rate 12-20/min, minute ventilation 6 L/min, alveolar ventilation ~4.2 L/min (accounting for dead space). Respiratory muscles: diaphragm (primary, provides 75% of tidal volume), external intercostals (inspiration), internal intercostals/abdominals (forced expiration).',
  },
  content: [
    {
      title: 'Upper Respiratory Tract',
      content: {
        patient: `The upper respiratory tract includes your nose, mouth, throat, and voice box. Air enters through your nostrils (or mouth), where it's warmed, humidified, and filtered by tiny hairs called cilia and sticky mucus. The air then passes through your throat (pharynx) and voice box (larynx). The larynx contains your vocal cords and has a flap called the epiglottis that closes over your windpipe when you swallow to prevent food from entering your lungs.`,
        intermediate: `The upper respiratory tract functions in air conditioning and protection. The nasal cavity is divided by the nasal septum (cartilaginous anterior, bony posterior) into two passages. Each passage has three nasal conchae (superior, middle, inferior) that create turbulence to warm and humidify air. The nasal mucosa is pseudostratified ciliated columnar epithelium with goblet cells (mucus production). The paranasal sinuses (frontal, ethmoid, sphenoid, maxillary) lighten the skull and add resonance to voice. The pharynx connects nasal/oral cavities to larynx/esophagus: nasopharynx (contains pharyngeal tonsil, pharyngotympanic tube openings), oropharynx (posterior to oral cavity), laryngopharynx. The larynx (voice box) has cartilages (thyroid-largest, cricoid-complete ring, arytenoids-vocal fold movement), intrinsic muscles (vocal fold tension/position), and extrinsic muscles (elevate larynx during swallowing). The epiglottis deflects food to esophagus.`,
        professional: `Upper respiratory anatomy and function:

Nasal cavity: Vestibule (skin with vibrissae), respiratory region (pseudostratified ciliated columnar epithelium, rich vascular plexus - Kiesselbach's plexus/Little's area), olfactory region (superior concha/sepia, olfactory epithelium with bipolar neurons). Turbinates/conchae (superior, middle, inferior) create turbulent airflow and increase surface area for conditioning. Blood supply: anterior/posterior ethmoidal arteries (ophthalmic), sphenopalatine artery (maxillary), facial artery branches; anastomoses in Little's area (90% of epistaxis). Innervation: olfactory (CN I), trigeminal (CN V1/V2 for general sensation). Paranasal sinuses: Frontal (drains middle meatus via frontonasal duct), Ethmoid (anterior/middle drain middle meatus, posterior drain superior meatus), Sphenoid (drains sphenoethmoidal recess), Maxillary (drains middle meatus under hiatus semilunaris); all lined by respiratory epithelium.

Pharynx: Nasopharynx (superior, posterior to nasal cavity, pharyngeal tonsil/adenoids, torus tubarius with pharyngotympanic tube openings, salpingopharyngeal fold); Oropharynx (posterior to oral cavity, palatine tonsils between palatoglossal and palatopharyngeal arches, lingual tonsil); Laryngopharynx (hypopharynx, posterior to larynx, piriform recesses lateral to laryngeal inlet). Waldeyer's ring: lymphoid tissue ring (pharyngeal, tubal, palatine, lingual tonsils).

Larynx: Skeleton: Thyroid cartilage (laryngeal prominence, laminae, superior/inferior horns), Cricoid cartilage (signet ring, arch and lamina), Arytenoid cartilages (muscular/vocal processes), Epiglottis (leaf-shaped, stalk to thyroid cartilage, prevents aspiration). Crico-thyroid and crico-arytenoid joints allow movement. Membranes: Thyrohyoid, cricothyroid (site of emergency airway), quadrangular membrane, cricovocal membrane (conus elasticus). Vocal folds (true cords): stratified squamous epithelium; vestibular folds (false cords). Glottis (vocal folds + rima glottidis). Intrinsic muscles: Posterior cricoarytenoid (only abductor), Lateral cricoarytenoid, Transverse arytenoid, Oblique arytenoid, Thyroarytenoid (vocalis adjusts tension), Cricothyroid (lengthens/tenses). RLN innervates all intrinsic except cricothyroid (external laryngeal nerve).`,
      },
    },
    {
      title: 'Lower Respiratory Tract',
      content: {
        patient: `The lower respiratory tract includes your windpipe and lungs. The trachea (windpipe) is a tube about 4-5 inches long held open by C-shaped cartilage rings. It splits into two main bronchi, one for each lung. These branch repeatedly into smaller tubes called bronchioles, ending in tiny air sacs called alveoli - like clusters of grapes. The alveoli have extremely thin walls surrounded by capillaries where oxygen enters your blood and carbon dioxide leaves it.`,
        intermediate: `The lower respiratory tract begins at the larynx and includes the trachea, bronchial tree, and lungs. The trachea is 10-12 cm long with 16-20 C-shaped hyaline cartilage rings (open posteriorly where smooth muscle - trachealis - allows esophageal expansion). It bifurcates at the carina (T4-T5 level, sensitive to touch - triggers cough). The right main bronchus is wider, shorter, and more vertical than the left, making aspiration more common on the right. Each lung has 10 bronchopulmonary segments supplied by segmental bronchi (tertiary bronchi). The bronchial tree branches 23 times: conducting bronchioles (generations 1-16) lack cartilage and glands; respiratory bronchioles (17-19) have alveoli budding from walls; alveolar ducts (20-22) lead to alveolar sacs containing alveoli. Lungs: right lung has 3 lobes (upper, middle, lower), left has 2 (upper with cardiac notch, lower) with lingula (homologous to right middle lobe).`,
        professional: `Lower respiratory anatomy:

Trachea: 10-11 cm long, 2-2.5 cm diameter; 16-20 incomplete C-shaped cartilage rings (hyaline); posterior trachealis muscle (smooth muscle); submucosal glands; carina at T4-T5 (last tracheal cartilage keel-shaped, sensitive to touch receptors - cough reflex). Blood supply: inferior thyroid arteries; venous drainage to brachiocephalic veins. Innervation: vagus (parasympathetic - constriction), sympathetic T1-T4 ganglia (dilation).

Bronchial tree: Main/primary bronchi: right (2.5 cm, 20-30° angle, wider/shorter/vertical), left (5 cm, 45° angle). Lobar/secondary bronchi: right (3 - upper, middle, lower), left (2 - upper/lingula, lower). Segmental/tertiary bronchi: 10 per lung (Boyden system numbering). Bronchioles: <1 mm diameter, lack cartilage and glands, ciliated cuboidal epithelium; terminal bronchioles (generation 16, last of conducting zone). Respiratory bronchioles (generations 17-19): non-ciliated, squamous epithelium, alveoli bud from walls. Alveolar ducts (20-22): lined by alveoli. Alveolar sacs: common spaces surrounded by alveoli. Alveoli: 300-500 million per lung, 200-300 μm diameter, total surface area 70-100 m²; two types: Type I pneumocytes (95% surface, squamous, gas exchange), Type II pneumocytes (cuboidal, surfactant production, progenitor cells).

Lungs: Right lung: 3 lobes (upper, middle, lower), 2 fissures (horizontal/oblique), 10 segments. Left lung: 2 lobes (upper with cardiac notch, lower), 1 fissure (oblique), lingula (superior/inferior parts = RML), 8-10 segments. Hilum: pulmonary artery (superior), main bronchus (posterior), pulmonary veins (anterior/inferior), bronchial vessels, lymphatics, nerves. Pleura: visceral (on lung), parietal (costal, mediastinal, diaphragmatic, cervical), pleural cavity with fluid.`,
      },
    },
    {
      title: 'Pulmonary Ventilation',
      content: {
        patient: `Breathing involves two phases: breathing in (inspiration) and breathing out (expiration). When you inhale, your diaphragm (a muscle below your lungs) contracts and moves down, while your rib muscles contract to expand your chest. This creates negative pressure that draws air into your lungs. When you exhale, these muscles relax, your chest shrinks, and air is pushed out. At rest, breathing is mostly passive - the lungs naturally recoil when the diaphragm relaxes.`,
        intermediate: `Pulmonary ventilation is the process of air movement into (inspiration) and out of (expiration) the lungs. Inspiration is active: diaphragm contracts (descends ~1.5 cm at rest, 7-10 cm during exercise) providing 75% of tidal volume; external intercostals elevate ribs, increasing anterior-posterior and lateral dimensions. Accessory muscles (sternocleidomastoid, scalenes) assist during forced inspiration. Expiration is passive at rest: lungs and chest wall recoil due to elastic properties and surface tension. Forced expiration uses internal intercostals and abdominal muscles (rectus abdominis, obliques). Pressure changes: intrapleural pressure is always negative (-4 to -8 cmH₂O at rest, -4 to -18 during inspiration); alveolar pressure is negative during inspiration (-1 cmH₂O), positive during expiration (+1 cmH₂O), zero at end-expiration. Transpulmonary pressure (alveolar - intrapleural) keeps alveoli inflated.`,
        professional: `Mechanics of ventilation:

Pressure relationships: Atmospheric pressure (Patm) = 0 reference; Alveolar pressure (Palv) = intrapulmonary pressure; Intrapleural pressure (Pip) = negative relative to Palv; Transpulmonary pressure (Ptp = Palv - Pip) = alveolar distending pressure. At end-expiration: Palv = 0, Pip = -5 cmH₂O, Ptp = +5 cmH₂O. During inspiration: Pip becomes more negative (-8 cmH₂O), Palv becomes negative (-1 cmH₂O), air flows in. During expiration: Pip less negative, Palv positive (+1 cmH₂O), air flows out.

Inspiration mechanics: Active process requiring muscle contraction. Diaphragm: dome-shaped, central tendon, costal/lumbar attachments; innervated by phrenic nerves (C3-C5); flattens on contraction, increasing vertical dimension; accounts for ~75% of tidal volume increase at rest. External intercostals: elevate ribs (pump handle - vertical axis, bucket handle - horizontal axis), increasing AP and lateral dimensions. Accessory muscles (forced inspiration): SCM, scalenes (elevate sternum/first ribs), serratus anterior, pectoralis major/minor. Compliance relationship: Volume change/Pressure change; chest wall and lung have separate compliances that sum.

Expiration mechanics: Passive at rest: elastic recoil of lung tissue (elastin, collagen) and alveolar surface tension (surfactant reduces this). Dynamic compression: as lung volume decreases, airways narrow (enhanced by cough - dynamic compression). Forced expiration: Internal intercostals depress ribs; abdominal muscles (rectus abdominis, external/internal obliques, transversus abdominis) increase intra-abdominal pressure, pushing diaphragm upward.

Lung volumes (spirometry): Tidal volume (TV) ~500 mL; Inspiratory reserve volume (IRV) ~3000 mL; Expiratory reserve volume (ERV) ~1100 mL; Residual volume (RV) ~1200 mL (cannot be exhaled). Capacities: Inspiratory capacity (IC = TV + IRV) ~3500 mL; Functional residual capacity (FRC = ERV + RV) ~2300 mL; Vital capacity (VC = IRV + TV + ERV) ~4600 mL; Total lung capacity (TLC = VC + RV) ~5800 mL.

Dead space: Anatomical dead space (conducting airways, ~150 mL); Alveolar dead space (non-perfused alveoli, normally minimal); Physiological dead space = anatomical + alveolar. Alveolar ventilation = (TV - VD) × respiratory rate = (~500 - 150) × 15 = 5250 mL/min.`,
      },
    },
    {
      title: 'Gas Exchange and Transport',
      content: {
        patient: `Gas exchange happens in the tiny air sacs called alveoli. Oxygen from the air you breathe passes through the thin alveolar walls into nearby capillaries (tiny blood vessels) and attaches to red blood cells. At the same time, carbon dioxide - a waste gas from your cells - moves from the blood into the alveoli to be breathed out. This exchange works because oxygen levels are higher in the alveoli than in the blood, while carbon dioxide levels are higher in the blood than in the alveoli. Gases naturally move from areas of high concentration to low concentration.`,
        intermediate: `Gas exchange occurs by diffusion across the respiratory membrane (air-blood barrier), which is extremely thin (~0.5 μm) consisting of alveolar epithelium, fused basement membranes, and capillary endothelium. Oxygen diffuses from alveoli (PO₂ ~104 mmHg) to pulmonary capillary blood (PO₂ ~40 mmHg), while CO₂ diffuses from blood (PCO₂ ~45 mmHg) to alveoli (PCO₂ ~40 mmHg). Oxygen transport: 98.5% bound to hemoglobin (oxyhemoglobin), 1.5% dissolved in plasma. Each hemoglobin binds 4 O₂ molecules; saturation depends on PO₂ (sigmoid curve), pH (Bohr effect), PCO₂, temperature, and 2,3-BPG. Carbon dioxide transport: 7% dissolved, 23% as carbaminohemoglobin, 70% as bicarbonate (HCO₃⁻ formed by carbonic anhydrase in RBCs: CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻). H⁺ binds Hb (buffering); HCO₃⁻ exchanges for Cl⁻ (chloride shift) entering RBCs.`,
        professional: `Gas exchange and transport:

Partial pressures: Dry atmospheric air at sea level: PO₂ = 760 × 0.2093 = 159 mmHg, PCO₂ ~0.3 mmHg. Humidified tracheal air (saturated at 37°C, PH₂O = 47 mmHg): PO₂ = (760-47) × 0.2093 = 149 mmHg. Alveolar air: PO₂ ~104 mmHg, PCO₂ ~40 mmHg (alveolar gas equation: PAO₂ = FiO₂(Patm - PH₂O) - PACO₂/R). Arterial blood: PaO₂ ~95-100 mmHg, PaCO₂ ~40 mmHg. Venous blood: PvO₂ ~40 mmHg, PvCO₂ ~46 mmHg. Tissue interstitial fluid: PO₂ ~40 mmHg (range 5-40), PCO₂ ~46 mmHg.

Respiratory membrane: Type I alveolar cells (squamous, 95% surface), Type II cells (surfactant), capillary endothelium; total thickness 0.5 μm, surface area 70-100 m². Diffusion limited by: membrane thickness, surface area, diffusion coefficient (solubility/√MW), partial pressure gradient.

Oxygen transport: Hemoglobin: 4 subunits (2α, 2β), each with heme (Fe²⁺ binds O₂). Cooperativity: sigmoid dissociation curve; P50 (50% saturation) = 26.6 mmHg. Factors shifting curve right (decreased affinity, increased release): increased temperature, decreased pH, increased PCO₂ (Bohr effect), increased 2,3-BPG. Left shift (increased affinity): decreased temperature, increased pH, decreased PCO₂, decreased 2,3-BPG, fetal Hb, CO poisoning. O₂ content = (Hb × 1.34 × SaO₂) + (0.003 × PaO₂) ≈ 20 mL O₂/dL blood.

CO₂ transport: Three forms: dissolved (7%, PCO₂ × 0.03); carbaminohemoglobin (23%, CO₂ binds amino groups, forms carbamic acid); bicarbonate (70%, CO₂ + H₂O ↔ H₂CO₃ ↔ H⁺ + HCO₃⁻ via carbonic anhydrase in RBCs). H⁺ buffered by Hb (reduced Hb better buffer); HCO₃⁻ exits RBC via Cl⁻/HCO₃⁻ exchanger (chloride shift), Cl⁻ enters. In lungs, reactions reverse: CO₂ exhaled. Haldane effect: deoxygenated Hb binds more CO₂; oxygenation releases CO₂ for exhalation.

Ventilation-perfusion coupling: Local hypoxia causes pulmonary vasoconstriction (opposite of systemic); optimizes V/Q matching. V/Q ratio: normal 0.8 (4 L alveolar ventilation / 5 L perfusion); zones of lung: zone 1 (dead space, apex), zone 2 (intermittent flow), zone 3 (continuous flow, base).`,
      },
    },
  ],
  anatomyLinks: [
    { structureId: 'lungs', structureName: 'Lungs', linkText: 'Lungs', relevance: 'Primary respiratory organs' },
    { structureId: 'diaphragm', structureName: 'Diaphragm', linkText: 'Diaphragm', relevance: 'Primary breathing muscle' },
    { structureId: 'trachea', structureName: 'Trachea', linkText: 'Trachea', relevance: 'Airway passage' },
  ],
  references: [
    {
      referenceId: 'openstax-ap-22',
      type: 'textbook',
      title: 'Anatomy and Physiology - Chapter 22: The Respiratory System',
      authors: 'Betts JG, et al.',
      source: 'OpenStax',
      year: 2021,
      url: 'https://openstax.org/books/anatomy-and-physiology/pages/22-introduction',
      citation: 'Betts JG, et al. Anatomy and Physiology. Chapter 22: The Respiratory System. OpenStax; 2021.',
    },
  ],
  relatedEntries: [
    { entryId: 'alveoli', entryType: 'anatomy', name: 'Alveoli', relationship: 'see-also' },
    { entryId: 'hemoglobin', entryType: 'physiology', name: 'Hemoglobin', relationship: 'see-also' },
  ],
  searchMetadata: {
    primaryKeywords: ['respiratory system', 'lungs', 'breathing', 'gas exchange', 'alveoli', 'ventilation'],
    tags: ['pulmonology', 'anatomy', 'respiratory'],
    synonyms: ['respiratory tract', 'breathing system', 'pulmonary system'],
  },
};

// Export all entries
export const respiratorySystemEntries: EncyclopediaEntry[] = [
  respiratorySystemEntry,
];
