import { EducationalContent } from '../types';

/** Voice Disorders Educational Content - nameEs: Trastornos de la Voz */
const today = '2026-01-30T00:00:00.000Z';

const laryngitis: EducationalContent = {
  id: 'voice-laryngitis', type: 'condition', name: 'Laryngitis',
  alternateNames: ['Laringitis', 'Voice Box Inflammation'],
  levels: {
    1: {
      level: 1,
      summary: 'Laryngitis is swelling of your voice box that makes your voice sound raspy or causes you to lose it.',
      explanation: `Laryngitis happens when your vocal cords get swollen and irritated. This can be from a cold, yelling too much, or breathing in smoke. Your voice may sound hoarse, weak, or disappear.
**Common causes:** Colds, flu, yelling, singing too hard, smoking, dry air.
**What to do:** Rest your voice, drink water, use a humidifier, avoid whispering (it strains the cords more).
**See a doctor if:** Hoarseness lasts more than 2-3 weeks, you have trouble breathing, or you cough up blood.`,
      keyTerms: [
        { term: 'laryngitis', definition: 'Swelling of the voice box making your voice hoarse' },
        { term: 'hoarseness', definition: 'A rough or raspy sound to the voice' },
      ],
      analogies: ['Laryngitis is like a guitar string that got wet and swollen - it can\'t vibrate correctly to make clear sound.'],
      patientCounselingPoints: ['Rest your voice completely - do not whisper.', 'Drink plenty of water and use a humidifier.', 'See a doctor if hoarseness lasts more than 3 weeks.'],
    },
    2: {
      level: 2,
      summary: 'Laryngitis is inflammation of the larynx, either acute (viral/overuse) or chronic (smoking, reflux, allergies), causing hoarseness.',
      explanation: `**Acute:** Usually viral (rhinovirus, influenza, parainfluenza). Vocal strain from overuse. Resolves in 1-2 weeks with voice rest and hydration.
**Chronic:** Lasts >3 weeks. Causes: smoking, LPR, allergies, vocal misuse. Requires treating the underlying cause.
**Treatment:** Voice rest, hydration, humidification. Chronic cases may need voice therapy or acid reflux management.`,
      keyTerms: [
        { term: 'acute laryngitis', definition: 'Short-term laryngeal inflammation, usually viral, lasting <3 weeks', pronunciation: 'lar-in-JYE-tis' },
        { term: 'chronic laryngitis', definition: 'Persistent laryngeal inflammation lasting >3 weeks' },
        { term: 'dysphonia', definition: 'Medical term for abnormal voice quality', pronunciation: 'dis-FOH-nee-uh' },
      ],
      patientCounselingPoints: ['Antibiotics do not help viral laryngitis.', 'Chronic hoarseness needs evaluation to rule out serious causes.'],
    },
    3: {
      level: 3,
      summary: 'Laryngitis involves vocal fold mucosal edema disrupting vibratory patterns. Acute forms are self-limited; chronic forms require etiologic investigation.',
      explanation: `**Pathophysiology:** Mucosal edema increases mass, altering fundamental frequency and mucosal wave.
**Acute:** Viral pathogens cause diffuse edema. Vocal abuse causes localized hemorrhage at mid-membranous fold.
**Chronic:** Smoking causes Reinke's edema. LPR causes posterior commissure hypertrophy, pseudosulcus.
**Evaluation:** Flexible laryngoscopy and stroboscopy. GRBAS scale quantifies voice quality.
**Management:** Voice therapy, PPIs for LPR, surgery for refractory Reinke's edema.`,
      keyTerms: [
        { term: 'Reinke\'s edema', definition: 'Polypoid degeneration of the superficial lamina propria, typically from smoking' },
        { term: 'mucosal wave', definition: 'Traveling wave of vocal fold mucosa essential for normal phonation' },
        { term: 'GRBAS scale', definition: 'Perceptual voice assessment: Grade, Roughness, Breathiness, Asthenia, Strain' },
      ],
      clinicalNotes: 'Hoarseness >3 weeks requires laryngoscopy per AAO-HNS guidelines to exclude malignancy.',
    },
    4: {
      level: 4,
      summary: 'Laryngitis pathophysiology involves disruption of vocal fold microstructure with inflammatory mediators altering ECM composition and biomechanical properties.',
      explanation: `**Molecular:** IL-1, TNF-alpha, IL-6 increase SLP vascular permeability. HA degradation reduces viscosity. MMP disrupts collagen.
**Reinke's Edema:** Myxoid material in Reinke's space. Smoking-induced HA metabolism changes.
**Fungal:** Candida in immunocompromised/ICS users. Treatment: antifungals, spacer use.
**Voice Therapy:** Semi-occluded vocal tract exercises reduce collision forces.`,
      keyTerms: [
        { term: 'semi-occluded vocal tract exercises', definition: 'Voice therapy using partial airway closure to reduce fold collision forces' },
        { term: 'MMP', definition: 'Matrix metalloproteinases - enzymes degrading ECM in inflammation' },
      ],
      clinicalNotes: 'Suspect fungal laryngitis in ICS users with persistent hoarseness despite appropriate technique.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based laryngitis management integrates AAO-HNS guidelines, advanced diagnostics, and targeted therapies with vigilance for malignancy.',
      explanation: `**AAO-HNS 2018:** Laryngoscopy mandatory for hoarseness >3 weeks. Steroids/antibiotics NOT routine.
**Imaging:** NBI detects dysplasia. OCT assesses lamina propria integrity.
**Emerging:** PRP for vocal fold scarring. HA biomaterials. Stem cell research.
**Metrics:** VHI-10, MPT, cepstral peak prominence for outcomes.`,
      keyTerms: [
        { term: 'cepstral peak prominence', definition: 'Acoustic measure of voice periodicity, robust dysphonia marker' },
        { term: 'NBI', definition: 'Narrow band imaging - enhanced endoscopic mucosal vasculature visualization' },
      ],
      clinicalNotes: 'Imaging (CT/MRI) NOT indicated unless mass identified or malignancy suspected on laryngoscopy.',
    },
  },
  media: [],
  citations: [{ id: 'aao-hoarseness-2018', type: 'article', title: 'Clinical Practice Guideline: Hoarseness (Dysphonia) Update', source: 'Otolaryngology-Head and Neck Surgery', authors: ['Stachler RJ', 'Francis DO', 'Schwartz SR'] }],
  crossReferences: [{ targetId: 'voice-lpr', targetType: 'condition', relationship: 'related', label: 'Laryngopharyngeal Reflux' }],
  tags: { systems: ['respiratory', 'upper-airway'], topics: ['laryngology', 'voice-disorders'], keywords: ['laryngitis', 'hoarseness', 'dysphonia', 'laringitis'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['family-medicine'] } },
  createdAt: today, updatedAt: today, version: 1, status: 'published',
};

const vocalCordNodulesPolyps: EducationalContent = {
  id: 'voice-nodules-polyps', type: 'condition', name: 'Vocal Cord Nodules and Polyps',
  alternateNames: ['Nódulos y Pólipos de Cuerdas Vocales', 'Singer\'s Nodules', 'Vocal Fold Lesions'],
  levels: {
    1: {
      level: 1,
      summary: 'Vocal cord nodules are small calluses and polyps are small growths on the vocal cords, both causing hoarseness.',
      explanation: `**Nodules** form from overusing your voice (common in singers/teachers). They appear on both cords. Voice therapy usually fixes them.
**Polyps** are fluid-filled growths, usually on one cord, from vocal strain. They usually need surgery.
**Symptoms:** Hoarseness, breathy voice, voice fatigue.`,
      keyTerms: [{ term: 'nodules', definition: 'Callus-like bumps on both vocal cords from overuse' }, { term: 'polyps', definition: 'Fluid-filled growths on a vocal cord' }],
      analogies: ['Nodules are like calluses on your hands from too much work.'],
      patientCounselingPoints: ['Voice therapy can shrink nodules without surgery.', 'Drink water and rest your voice regularly.'],
    },
    2: {
      level: 2,
      summary: 'Nodules are bilateral fibrous lesions from chronic vocal abuse; polyps are usually unilateral vascular/gelatinous lesions from acute trauma.',
      explanation: `**Nodules:** Bilateral, symmetric, anterior/middle third junction. Voice therapy first-line.
**Polyps:** Unilateral, pedunculated or sessile. Hemorrhagic or gelatinous. Usually require surgical excision.
**Diagnosis:** Laryngoscopy and stroboscopy.`,
      keyTerms: [{ term: 'phonotrauma', definition: 'Vocal cord injury from excessive or improper voice use' }, { term: 'stroboscopy', definition: 'Slow-motion visualization of vocal cord vibration' }],
      patientCounselingPoints: ['Nodules respond to voice therapy; polyps often need surgery.'],
    },
    3: {
      level: 3,
      summary: 'Nodules represent fibrous remodeling at the mid-membranous fold from collision forces. Polyps involve vascular/edematous changes.',
      explanation: `**Nodules:** Fibrous tissue at striking zone. BMZ thickening, bilateral/symmetric. Voice therapy first-line.
**Polyps:** Hemorrhagic (vascular/hemosiderin) or gelatinous (myxoid). Microlaryngeal excision with mucosal preservation.
**Stroboscopy:** Nodules: hourglass closure. Polyps: asymmetric vibration.`,
      keyTerms: [{ term: 'hourglass closure', definition: 'Incomplete glottic closure with gaps around bilateral nodules' }, { term: 'microlaryngeal surgery', definition: 'Microscopic technique for precise vocal fold lesion removal' }],
      clinicalNotes: 'Always biopsy polyps to exclude dysplasia, especially in smokers.',
    },
    4: {
      level: 4,
      summary: 'Nodules and polyps involve distinct histopathological alterations of the lamina propria affecting phonatory function through mass and stiffness changes.',
      explanation: `**Nodules:** BMZ thickening (type IV collagen). SLP fibrosis, reduced HA, increased stiffness.
**Polyps:** Vascular (hemosiderin), fibrous, or edematous. Focal mass lowers F0.
**Biomechanics:** Increased PTP, disrupted cover-body coupling.
**Surgery:** Microflap preserves SLP. Cold steel preferred over laser.`,
      keyTerms: [{ term: 'microflap technique', definition: 'Epithelial flap elevation to excise submucosal lesion preserving cover' }, { term: 'phonation threshold pressure', definition: 'Minimum subglottic pressure to initiate fold vibration' }],
      clinicalNotes: 'Vocal fold scar from aggressive surgery is worse than original lesion. Mucosal preservation paramount.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based protocols emphasize voice therapy for nodules and precision phonosurgery for polyps, with emerging regenerative approaches.',
      explanation: `**Evidence:** Voice therapy resolves 50-80% of nodules. PDL promising for hemorrhagic polyps.
**Outcomes:** VHI-10 improvement 10+ points. Acoustic measures normalize in 80-90%.
**Emerging:** PRP for vocal fold scar. HA fillers for SLP restoration.`,
      keyTerms: [{ term: 'VHI-10', definition: 'Voice Handicap Index - 10-item patient-reported outcome measure' }],
      clinicalNotes: 'Professional voice users need specialized surgical/rehabilitation protocols with laryngologist and SLP.',
    },
  },
  media: [],
  citations: [{ id: 'rosen-phonosurgery', type: 'textbook', title: 'Operative Techniques in Laryngology', source: 'Springer', authors: ['Rosen CA', 'Simpson CB'] }],
  crossReferences: [{ targetId: 'voice-laryngitis', targetType: 'condition', relationship: 'related', label: 'Laryngitis' }],
  tags: { systems: ['respiratory'], topics: ['laryngology', 'voice-disorders'], keywords: ['vocal cord nodules', 'vocal cord polyps', 'nódulos vocales', 'pólipos vocales', 'phonotrauma'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] } },
  createdAt: today, updatedAt: today, version: 1, status: 'published',
};

const vocalCordParalysis: EducationalContent = {
  id: 'voice-vocal-cord-paralysis', type: 'condition', name: 'Vocal Cord Paralysis',
  alternateNames: ['Parálisis de Cuerdas Vocales', 'Vocal Fold Immobility', 'Recurrent Laryngeal Nerve Palsy'],
  levels: {
    1: {
      level: 1,
      summary: 'Vocal cord paralysis means one or both vocal cords cannot move, causing a weak, breathy voice or breathing problems.',
      explanation: `A nerve controls each vocal cord. If damaged (surgery, tumor, infection), the cord stops moving. One paralyzed cord causes weak voice and choking on liquids. Both can block your airway.
**Causes:** Thyroid surgery, neck/chest surgery, tumors, viral infections, stroke.
**Treatment:** Speech therapy, injections to bulk up the cord, or surgery.`,
      keyTerms: [{ term: 'vocal cord paralysis', definition: 'When a vocal cord cannot move because its nerve is damaged' }],
      analogies: ['Like a door stuck open - air leaks through and you can\'t make a strong sound.'],
      patientCounselingPoints: ['Some cases recover on their own within 6-12 months.', 'Thickened liquids can help prevent choking.'],
    },
    2: {
      level: 2,
      summary: 'Vocal cord paralysis results from recurrent laryngeal nerve injury causing unilateral (breathy voice) or bilateral (airway obstruction) immobility.',
      explanation: `**Unilateral:** Breathy, weak voice. Aspiration risk. Causes: thyroidectomy, lung cancer, idiopathic.
**Bilateral:** Airway obstruction, stridor. May need tracheostomy.
**Workup:** CT skull base to aortic arch. Laryngeal EMG for prognosis.
**Treatment:** Observation (6-12 mo), injection laryngoplasty (temporary), thyroplasty (permanent).`,
      keyTerms: [{ term: 'recurrent laryngeal nerve', definition: 'Nerve controlling vocal cord movement; loops under aortic arch (left) or subclavian (right)' }, { term: 'thyroplasty', definition: 'Surgery placing implant to push paralyzed cord to midline' }],
      patientCounselingPoints: ['CT imaging is needed to find the cause.', 'Injection provides temporary improvement while waiting for recovery.'],
    },
    3: {
      level: 3,
      summary: 'Vocal fold paralysis involves RLN or SLN disruption with glottic insufficiency or airway compromise depending on laterality and cord position.',
      explanation: `**Anatomy:** Left RLN loops under aortic arch (longer, vulnerable). Right under subclavian. SLN innervates cricothyroid.
**Unilateral:** Paramedian position, glottic gap, breathiness, aspiration.
**Bilateral:** Paramedian cords, airway obstruction. May need tracheostomy/cordotomy.
**EMG:** Fibrillation = denervation. Recruitment predicts recovery. Synkinesis causes persistent immobility.`,
      keyTerms: [{ term: 'synkinesis', definition: 'Aberrant reinnervation with simultaneous adductor/abductor firing preventing normal movement' }, { term: 'cordotomy', definition: 'Surgical cord incision to widen airway in bilateral paralysis' }],
      clinicalNotes: 'Left cord paralysis: always evaluate for thoracic pathology (lung apex mass, aortic aneurysm).',
    },
    4: {
      level: 4,
      summary: 'Pathophysiology encompasses Wallerian degeneration, synkinesis, and neuroplasticity, with surgical rehabilitation targeting glottic competence.',
      explanation: `**Nerve Injury:** Seddon: neurapraxia (weeks), axonotmesis (months), neurotmesis (no recovery).
**Synkinesis:** Aberrant reinnervation mimics fixation. EMG diagnostic.
**Medialization:** Type I thyroplasty, arytenoid adduction. Injection: CaHA (12-24mo), fat, HA (3-6mo).
**Reinnervation:** Ansa cervicalis to RLN. Optimal within 6-24 months.`,
      keyTerms: [{ term: 'Wallerian degeneration', definition: 'Distal nerve fiber degeneration following axonal injury' }, { term: 'arytenoid adduction', definition: 'Surgery rotating arytenoid to close posterior glottic gap' }],
      clinicalNotes: 'Laryngeal EMG at 6 months post-injury provides most reliable recovery prognosis.',
    },
    5: {
      level: 5,
      summary: 'Contemporary management integrates early injection, selective reinnervation, and framework surgery guided by EMG and patient-centered outcomes.',
      explanation: `**Evidence:** Early injection (2-4 weeks) improves outcomes. CaHA bridges to definitive surgery.
**Reinnervation:** Ansa-RLN transfer: 85-90% good outcomes. Laryngeal pacing under investigation.
**Bilateral:** Posterior cordotomy (CO2 laser) standard. Arytenoidectomy for refractory cases.
**Metrics:** VHI-10, MPT, aspiration prevention. FEES for swallow safety.`,
      keyTerms: [{ term: 'FEES', definition: 'Fiberoptic endoscopic evaluation of swallowing' }, { term: 'laryngeal pacing', definition: 'Experimental stimulation to restore fold abduction in bilateral paralysis' }],
      clinicalNotes: 'Early injection increasingly favored over watchful waiting without compromising future surgical options.',
    },
  },
  media: [],
  citations: [{ id: 'sulica-vfp', type: 'article', title: 'Vocal Fold Paralysis', source: 'NEJM', authors: ['Sulica L'] }],
  crossReferences: [{ targetId: 'voice-laryngitis', targetType: 'condition', relationship: 'related', label: 'Laryngitis' }],
  tags: { systems: ['respiratory', 'nervous'], topics: ['laryngology', 'voice-disorders'], keywords: ['vocal cord paralysis', 'parálisis de cuerdas vocales', 'recurrent laryngeal nerve', 'thyroplasty'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery', 'neurology'] } },
  createdAt: today, updatedAt: today, version: 1, status: 'published',
};

const spasmodicDysphonia: EducationalContent = {
  id: 'voice-spasmodic-dysphonia', type: 'condition', name: 'Spasmodic Dysphonia',
  alternateNames: ['Disfonía Espasmódica', 'Laryngeal Dystonia', 'SD'],
  levels: {
    1: {
      level: 1,
      summary: 'Spasmodic dysphonia causes the voice box muscles to spasm, making the voice break or sound strained.',
      explanation: `The vocal cord muscles tighten involuntarily, making it hard to speak smoothly. The voice may cut in and out or sound strangled. It is a neurological condition, not caused by stress. Botox injections every few months are the main treatment.`,
      keyTerms: [{ term: 'spasmodic dysphonia', definition: 'Involuntary vocal cord muscle spasms during speech' }],
      analogies: ['Like a hand cramp that happens in your voice box when you try to speak.'],
      patientCounselingPoints: ['This is neurological, not caused by stress.', 'Botox injections significantly improve voice quality.'],
    },
    2: {
      level: 2,
      summary: 'SD is a focal dystonia of laryngeal muscles: adductor (strained voice) or abductor (breathy breaks).',
      explanation: `**Adductor SD (most common):** Cords squeeze together causing strained, strangled voice with breaks.
**Abductor SD:** Cords open causing breathy voice breaks on voiceless consonants.
**Treatment:** Botox injections every 3-4 months. Voice therapy as adjunct. No cure but excellent control.`,
      keyTerms: [{ term: 'adductor SD', definition: 'Cords squeeze shut causing strained voice' }, { term: 'abductor SD', definition: 'Cords open causing breathy breaks' }, { term: 'dystonia', definition: 'Involuntary sustained muscle contractions' }],
      patientCounselingPoints: ['Botox effects last 3-4 months and need repeat injections.'],
    },
    3: {
      level: 3,
      summary: 'SD is a task-specific focal dystonia with basal ganglia dysfunction, managed primarily with botulinum toxin.',
      explanation: `**Pathophysiology:** Basal ganglia dysfunction. Task-specific: affects speech but not laughing/singing.
**Diagnosis:** Characteristic voice breaks. Laryngoscopy shows spasms. EMG-guided Botox is diagnostic/therapeutic.
**Adductor:** Botox to thyroarytenoid bilaterally (0.5-2.5U/side).
**Abductor:** Botox to PCA unilaterally. Higher airway risk.`,
      keyTerms: [{ term: 'task-specific dystonia', definition: 'Dystonia triggered by specific tasks (speaking) but not others (singing)' }, { term: 'thyroarytenoid muscle', definition: 'Vocal fold body; target for adductor SD Botox' }],
      clinicalNotes: 'Distinguish SD from muscle tension dysphonia: SD is task-specific and does not respond to voice therapy alone.',
    },
    4: {
      level: 4,
      summary: 'SD involves aberrant sensorimotor integration in cortico-basal ganglia-thalamocortical circuits.',
      explanation: `**Neuroimaging:** Reduced sensorimotor gray matter. Altered corticobulbar connectivity. GABA deficit.
**Genetics:** DYT-THAP1 (DYT6) associated. Variable penetrance.
**Botulinum Toxin:** Cleaves SNARE proteins. Antibody formation (~5%) causes failure.
**SLAD-R:** Bilateral RLN section with ansa reinnervation. Permanent adductor SD treatment.`,
      keyTerms: [{ term: 'SLAD-R', definition: 'Selective laryngeal adductor denervation-reinnervation for adductor SD' }, { term: 'SNARE proteins', definition: 'Synaptic vesicle fusion proteins cleaved by botulinum toxin' }],
      clinicalNotes: 'Botox antibody formation ~5%. Consider serotype B or surgical options.',
    },
    5: {
      level: 5,
      summary: 'SD management centers on EMG-guided botulinum toxin with SLAD-R for refractory cases; research explores neuromodulation.',
      explanation: `**Evidence:** Botox >90% satisfaction for adductor SD. SLAD-R durable 10+ years.
**Emerging:** TMS, DBS (case reports), sodium oxybate (trials), gene therapy for DYT forms.
**Diagnostics:** ML voice analysis, EMG biomarkers, fMRI phenotyping.`,
      keyTerms: [{ term: 'sodium oxybate', definition: 'GABAergic agent under investigation for laryngeal dystonia' }],
      clinicalNotes: 'SLAD-R only at experienced centers. Must exclude muscle tension dysphonia.',
    },
  },
  media: [],
  citations: [{ id: 'blitzer-sd', type: 'article', title: 'Spasmodic Dysphonia: A Laryngeal Dystonia', source: 'Laryngoscope', authors: ['Blitzer A'] }],
  crossReferences: [{ targetId: 'voice-vocal-cord-paralysis', targetType: 'condition', relationship: 'related', label: 'Vocal Cord Paralysis' }],
  tags: { systems: ['nervous', 'respiratory'], topics: ['laryngology', 'voice-disorders', 'neurology'], keywords: ['spasmodic dysphonia', 'disfonía espasmódica', 'laryngeal dystonia', 'botox voice'], clinicalRelevance: 'medium', examRelevance: { usmle: true, nbme: false, shelf: ['neurology'] } },
  createdAt: today, updatedAt: today, version: 1, status: 'published',
};

const laryngopharyngealReflux: EducationalContent = {
  id: 'voice-lpr', type: 'condition', name: 'Laryngopharyngeal Reflux',
  alternateNames: ['Reflujo Laringofaríngeo', 'LPR', 'Silent Reflux', 'Extraesophageal Reflux'],
  levels: {
    1: {
      level: 1,
      summary: 'LPR is when stomach acid travels up to the throat, causing hoarseness, throat clearing, and a lump-in-throat feeling.',
      explanation: `Unlike regular heartburn, LPR often does not cause chest burning. Stomach acid reaches the throat and voice box, causing chronic hoarseness, throat clearing, cough, and feeling like something is stuck. Treatment: diet changes, not eating before bed, acid-reducing medication.`,
      keyTerms: [{ term: 'LPR', definition: 'Stomach acid irritating the throat and voice box' }, { term: 'silent reflux', definition: 'Acid reflux reaching the throat without heartburn' }],
      analogies: ['LPR is like heartburn that bypasses your chest and goes straight to your throat.'],
      patientCounselingPoints: ['Avoid eating 3 hours before bedtime.', 'Elevate head of bed 6 inches.', 'Reduce caffeine, alcohol, spicy foods.'],
    },
    2: {
      level: 2,
      summary: 'LPR involves retrograde gastric flow to the laryngopharynx, distinct from GERD, with hoarseness, globus, and chronic cough.',
      explanation: `**vs GERD:** LPR patients often lack heartburn. Laryngeal mucosa more susceptible (damage at pH <5 vs <4). Primarily daytime/upright.
**Symptoms:** Hoarseness, globus, throat clearing, chronic cough, dysphagia.
**Findings:** Posterior commissure hypertrophy, vocal fold edema, pseudosulcus, erythema.
**Treatment:** BID PPI for 2-3 months. Behavioral modifications. Voice therapy.`,
      keyTerms: [{ term: 'globus pharyngeus', definition: 'Persistent lump-in-throat sensation', pronunciation: 'GLOH-bus' }, { term: 'pseudosulcus', definition: 'Infraglottic edema mimicking vocal fold sulcus, characteristic of LPR' }],
      patientCounselingPoints: ['LPR treatment requires 2-3 months of medication to see improvement.'],
    },
    3: {
      level: 3,
      summary: 'LPR involves pepsin-mediated mucosal injury with diagnostic challenges requiring RSI/RFS clinical scoring.',
      explanation: `**Pepsin Theory:** Pepsin (not acid alone) drives injury. Endocytosed, reactivated at low pH, depleting carbonic anhydrase III and E-cadherin.
**Diagnosis:** RSI >13, RFS >7 suggestive. pH monitoring gold standard but impractical. Empiric PPI common.
**Treatment:** BID PPI 30min before meals, 2-3 months. Alginate therapy. Fundoplication for refractory.`,
      keyTerms: [{ term: 'RSI', definition: 'Reflux Symptom Index - 9-item LPR questionnaire' }, { term: 'RFS', definition: 'Reflux Finding Score - 8-item laryngoscopic LPR scale' }, { term: 'pepsin', definition: 'Gastric protease causing mucosal damage in laryngeal tissue' }],
      clinicalNotes: 'RSI and RFS lack specificity. LPR findings overlap with allergic laryngitis and MTD.',
    },
    4: {
      level: 4,
      summary: 'LPR pathobiology centers on pepsin-mediated epithelial injury via endocytosis and intracellular reactivation.',
      explanation: `**Molecular:** Pepsin endocytosed, reactivated by pH drops. Depletes E-cadherin, CA-III. May drive carcinogenesis.
**Mucosal Defense:** Larynx lacks esophageal protection (no peristalsis, minimal bicarbonate).
**Impedance:** MII-pH detects non-acid/weakly acid reflux events.
**Surgery:** Nissen fundoplication or TIF for refractory LPR.`,
      keyTerms: [{ term: 'MII-pH', definition: 'Multichannel impedance with pH - detects acid and non-acid reflux' }, { term: 'TIF', definition: 'Transoral incisionless fundoplication' }],
      clinicalNotes: 'Pepsin detectable in saliva/tissue - emerging LPR biomarker.',
    },
    5: {
      level: 5,
      summary: 'LPR management evolving from empiric PPI toward biomarker-guided diagnosis with pepsin assays and targeted therapies.',
      explanation: `**Diagnostics:** PepTest (salivary pepsin): 78-87% sensitivity. Restech pharyngeal pH monitoring.
**Evidence:** PPIs modest benefit (NNT ~8). Mediterranean diet comparable to PPI in one study.
**Emerging:** Anti-pepsin agents, P-CABs with superior acid suppression.
**Quality:** Over-diagnosis common. Empiric PPI max 2-3 months without reassessment.`,
      keyTerms: [{ term: 'PepTest', definition: 'Point-of-care salivary pepsin assay for LPR diagnosis' }, { term: 'P-CAB', definition: 'Potassium-competitive acid blocker - faster/longer than PPIs' }],
      clinicalNotes: 'Over-prescription of PPIs for presumed LPR is a recognized quality issue.',
    },
  },
  media: [],
  citations: [{ id: 'koufman-lpr', type: 'article', title: 'Laryngopharyngeal Reflux: Position Statement', source: 'Otolaryngology-Head and Neck Surgery', authors: ['Koufman JA'] }],
  crossReferences: [{ targetId: 'voice-laryngitis', targetType: 'condition', relationship: 'related', label: 'Laryngitis' }],
  tags: { systems: ['digestive', 'respiratory'], topics: ['laryngology', 'gastroenterology'], keywords: ['LPR', 'laryngopharyngeal reflux', 'reflujo laringofaríngeo', 'silent reflux', 'pepsin'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'family-medicine'] } },
  createdAt: today, updatedAt: today, version: 1, status: 'published',
};

// Legacy single-topic export for backward compatibility
export const voiceContent = laryngitis;

/** Voice Disorders Content Collection - nameEs: Trastornos de la Voz */
export const voiceDisordersContent: Record<string, EducationalContent> = {
  laryngitis,
  vocalCordNodulesPolyps,
  vocalCordParalysis,
  spasmodicDysphonia,
  laryngopharyngealReflux,
};

export default voiceDisordersContent;
