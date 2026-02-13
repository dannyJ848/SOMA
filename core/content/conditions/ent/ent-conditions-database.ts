/**
 * ENT Conditions Database
 *
 * Comprehensive reference of 30+ ear, nose, and throat conditions with
 * clinical summaries, diagnostic approach, treatment, and complications.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ENTConditionCategory =
  | 'otologic'
  | 'rhinologic'
  | 'laryngologic'
  | 'head-neck-oncology'
  | 'pediatric-ent'
  | 'salivary'
  | 'vestibular'
  | 'congenital';

export interface ENTConditionEntry {
  id: string;
  name: string;
  nameEs?: string;
  category: ENTConditionCategory;
  description: string;
  clinicalFeatures: string[];
  diagnosticApproach: string[];
  treatment: string;
  complications: string[];
  icdCode: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

function ent(
  id: string, name: string, nameEs: string, category: ENTConditionCategory,
  icdCode: string, description: string,
  clinicalFeatures: string[], diagnosticApproach: string[],
  treatment: string, complications: string[],
): ENTConditionEntry {
  return { id, name, nameEs, category, description, clinicalFeatures, diagnosticApproach, treatment, complications, icdCode };
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ENT_CONDITION_ENTRIES: Record<string, ENTConditionEntry> = {

  // ---- Otologic (6) --------------------------------------------------------

  'acute-otitis-media': ent(
    'acute-otitis-media', 'Acute Otitis Media', 'Otitis Media Aguda', 'otologic', 'H66.90',
    'Acute infection of the middle ear, most common in children ages 6-24 months, typically following an upper respiratory infection with eustachian tube dysfunction.',
    ['Rapid-onset otalgia', 'Fever', 'Irritability in infants', 'Bulging erythematous tympanic membrane', 'Otorrhea if TM perforated', 'Hearing loss (conductive)'],
    ['Pneumatic otoscopy (decreased TM mobility)', 'Tympanometry', 'Clinical diagnosis based on TM appearance', 'Culture of drainage if chronic or refractory'],
    'Watchful waiting for mild cases in children >2 years. First-line: amoxicillin 80-90 mg/kg/day for 10 days. Second-line: amoxicillin-clavulanate or ceftriaxone. Analgesics (acetaminophen, ibuprofen). Myringotomy for refractory cases.',
    ['TM perforation', 'Chronic suppurative otitis media', 'Mastoiditis', 'Cholesteatoma', 'Intracranial abscess', 'Hearing loss'],
  ),

  'chronic-otitis-media': ent(
    'chronic-otitis-media', 'Chronic Otitis Media', 'Otitis Media Crónica', 'otologic', 'H66.3',
    'Persistent middle ear inflammation lasting >12 weeks, often with TM perforation and chronic otorrhea. Divided into mucosal (tubotympanic) and squamous (atticoantral/cholesteatoma) types.',
    ['Chronic painless otorrhea', 'Conductive hearing loss', 'TM perforation (central or marginal)', 'Aural fullness', 'Intermittent ear drainage exacerbated by URI or water exposure'],
    ['Otoscopy and otomicroscopy', 'Audiometry (conductive hearing loss)', 'CT temporal bone (evaluate mastoid, ossicular chain, cholesteatoma)', 'Culture of discharge'],
    'Aural toilet and topical antibiotics (fluoroquinolone drops) for acute exacerbations. Avoid water exposure. Definitive: tympanoplasty with or without mastoidectomy. Ossicular chain reconstruction if needed.',
    ['Cholesteatoma formation', 'Ossicular erosion', 'Labyrinthine fistula', 'Facial nerve injury', 'Intracranial complications (meningitis, abscess)'],
  ),

  'otitis-externa': ent(
    'otitis-externa', 'Otitis Externa', 'Otitis Externa', 'otologic', 'H60.9',
    'Diffuse inflammation of the external auditory canal, commonly bacterial (Pseudomonas, Staph aureus). Often called "swimmer\'s ear."',
    ['Otalgia worsened by tragal pressure or pinna traction', 'Pruritus', 'Otorrhea', 'Canal edema and erythema', 'Conductive hearing loss if canal occluded', 'Periauricular lymphadenopathy'],
    ['Clinical examination with otoscopy', 'Tragal tenderness and pinna traction sign', 'Culture if refractory', 'CT if malignant otitis externa suspected (diabetic/immunocompromised)'],
    'Aural toilet (gentle debridement). Topical fluoroquinolone +/- steroid drops. Wick placement if canal edematous. Avoid water exposure. Malignant OE: IV anti-pseudomonal antibiotics, prolonged course.',
    ['Malignant (necrotizing) otitis externa', 'Skull base osteomyelitis', 'Cranial nerve palsies (VII, IX-XII)', 'Abscess formation'],
  ),

  'cholesteatoma': ent(
    'cholesteatoma', 'Cholesteatoma', 'Colesteatoma', 'otologic', 'H71.9',
    'Abnormal keratinizing squamous epithelium in the middle ear or mastoid that progressively erodes bone. May be congenital or acquired (pars flaccida retraction pocket).',
    ['Chronic foul-smelling otorrhea unresponsive to antibiotics', 'Progressive conductive hearing loss', 'White pearly mass behind or involving TM', 'Aural fullness', 'Dizziness if labyrinthine erosion'],
    ['Otoscopy (pearly white mass, retraction pocket with debris)', 'CT temporal bone (soft tissue mass, bone erosion)', 'MRI diffusion-weighted (distinguish from granulation)', 'Audiometry'],
    'Surgical excision is definitive. Canal wall-up (CWU) or canal wall-down (CWD) mastoidectomy with tympanoplasty. No effective medical therapy. Second-look surgery or MRI surveillance for recurrence.',
    ['Ossicular chain erosion', 'Facial nerve paralysis', 'Labyrinthine fistula (vertigo, SNHL)', 'Intracranial complications (epidural/brain abscess, meningitis, sigmoid sinus thrombosis)'],
  ),

  'conductive-hearing-loss': ent(
    'conductive-hearing-loss', 'Conductive Hearing Loss', 'Hipoacusia Conductiva', 'otologic', 'H90.2',
    'Hearing impairment caused by pathology in the external or middle ear preventing sound conduction to the inner ear. Common causes: cerumen impaction, TM perforation, otosclerosis, ossicular discontinuity.',
    ['Difficulty hearing, especially soft sounds', 'Preserved speech discrimination', 'Patient may speak softly (hears own voice amplified by bone)', 'Weber lateralizes to affected ear', 'Rinne: bone > air on affected side'],
    ['Tuning fork tests (Weber, Rinne)', 'Pure tone audiometry (air-bone gap)', 'Tympanometry', 'Otoscopy', 'CT temporal bone if surgical evaluation needed'],
    'Treat underlying cause: cerumen removal, TM repair (tympanoplasty), ossicular reconstruction, stapedectomy for otosclerosis. Hearing aids. Bone-anchored hearing devices for non-surgical candidates.',
    ['Chronic hearing impairment', 'Speech and language delay in children', 'Social isolation', 'Progression of underlying pathology'],
  ),

  'sensorineural-hearing-loss': ent(
    'sensorineural-hearing-loss', 'Sensorineural Hearing Loss', 'Hipoacusia Neurosensorial', 'otologic', 'H90.5',
    'Hearing loss due to cochlear (sensory) or auditory nerve (neural) pathology. Common causes: presbycusis, noise exposure, ototoxicity, Meniere disease, acoustic neuroma.',
    ['Gradual or sudden hearing loss', 'Poor speech discrimination especially in noisy settings', 'Tinnitus', 'Weber lateralizes to unaffected ear', 'Rinne: air > bone bilaterally', 'High-frequency loss (presbycusis) or low-frequency loss (Meniere)'],
    ['Pure tone audiometry (no air-bone gap)', 'Speech discrimination testing', 'OAE and ABR testing', 'MRI IAC with contrast (rule out acoustic neuroma)', 'Labs: CBC, RPR, ANA, thyroid if etiology unclear'],
    'Sudden SNHL: urgent high-dose oral/intratympanic corticosteroids. Chronic: hearing aids, assistive listening devices, cochlear implant for severe-profound bilateral loss. Avoid ototoxic medications and noise exposure.',
    ['Permanent hearing loss', 'Communication difficulties', 'Cognitive decline association (presbycusis)', 'Depression and social isolation', 'Missed acoustic neuroma if workup incomplete'],
  ),

  // ---- Vestibular (3) ------------------------------------------------------

  'bppv': ent(
    'bppv', 'Benign Paroxysmal Positional Vertigo (BPPV)', 'Vértigo Posicional Paroxístico Benigno (VPPB)', 'vestibular', 'H81.1',
    'Most common cause of peripheral vertigo caused by free-floating otoconia (calcium carbonate crystals) in the semicircular canals, most often the posterior canal.',
    ['Brief episodes (< 1 minute) of intense rotational vertigo', 'Triggered by head position changes (rolling in bed, looking up)', 'Nausea', 'No hearing loss or tinnitus', 'Positive Dix-Hallpike (upbeat torsional nystagmus)'],
    ['Dix-Hallpike maneuver (posterior canal)', 'Supine roll test (horizontal canal BPPV)', 'Clinical diagnosis; imaging not routinely needed', 'MRI if atypical features or central signs'],
    'Epley maneuver (canalith repositioning) for posterior canal BPPV, success rate >80% in 1-2 treatments. Lempert (BBQ roll) for horizontal canal variant. Brandt-Daroff exercises. Surgical posterior canal plugging for refractory cases.',
    ['Recurrence (30-50% within 1 year)', 'Fall risk especially in elderly', 'Canal conversion (posterior to horizontal)', 'Persistent positional vertigo'],
  ),

  'meniere-disease': ent(
    'meniere-disease', 'Meniere Disease', 'Enfermedad de Ménière', 'vestibular', 'H81.0',
    'Idiopathic endolymphatic hydrops causing episodic vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness. Typically unilateral; bilateral in 25-40% over time.',
    ['Recurrent spontaneous vertigo lasting 20 min to 12 hours', 'Fluctuating low-frequency SNHL', 'Tinnitus (roaring or buzzing)', 'Aural fullness preceding attacks', 'Nystagmus during acute episodes'],
    ['AAO-HNS diagnostic criteria (2 or more vertigo episodes >20 min, audiometrically documented SNHL, tinnitus/fullness)', 'Serial audiometry', 'ECoG (elevated SP/AP ratio)', 'MRI to exclude acoustic neuroma', 'VNG for vestibular function'],
    'Conservative: low-sodium diet (<2g/day), avoidance of caffeine/alcohol, betahistine, diuretics. Acute attacks: vestibular suppressants (meclizine, benzodiazepines), antiemetics. Refractory: intratympanic dexamethasone or gentamicin, endolymphatic sac surgery, vestibular nerve section, labyrinthectomy (last resort).',
    ['Progressive bilateral hearing loss', 'Chronic imbalance', 'Tumarkin crises (drop attacks)', 'Disability and quality-of-life impairment', 'Bilateral disease'],
  ),

  'vestibular-neuritis': ent(
    'vestibular-neuritis', 'Vestibular Neuritis', 'Neuritis Vestibular', 'vestibular', 'H81.2',
    'Acute unilateral vestibular hypofunction, likely viral (HSV-1 reactivation), presenting with severe prolonged vertigo without hearing loss. When hearing loss coexists, termed labyrinthitis.',
    ['Acute onset severe sustained vertigo lasting days', 'Nausea and vomiting', 'Unidirectional horizontal-torsional nystagmus beating away from affected side', 'Positive head impulse test toward affected side', 'Normal hearing', 'Postural imbalance'],
    ['HINTS exam (Head Impulse, Nystagmus, Test of Skew) — distinguishes from stroke', 'Caloric testing (reduced response on affected side)', 'MRI brain/IAC if central cause suspected', 'Audiometry (normal in neuritis, abnormal in labyrinthitis)'],
    'Acute: vestibular suppressants (diazepam, meclizine) and antiemetics for 48-72h only. Corticosteroids (methylprednisolone taper). Early vestibular rehabilitation is cornerstone of recovery. Gradual resolution over weeks to months.',
    ['Incomplete vestibular compensation', 'Chronic dizziness/imbalance', 'Secondary BPPV', 'Persistent postural-perceptual dizziness (PPPD)', 'Contralateral involvement (rare)'],
  ),

  // ---- Rhinologic (6) ------------------------------------------------------

  'acute-sinusitis': ent(
    'acute-sinusitis', 'Acute Sinusitis', 'Sinusitis Aguda', 'rhinologic', 'J01.9',
    'Inflammation of the paranasal sinuses lasting <4 weeks, most commonly viral (90-98%). Bacterial sinusitis suspected with symptoms >10 days, double worsening, or severe onset.',
    ['Facial pain/pressure over affected sinus', 'Nasal congestion and purulent discharge', 'Hyposmia', 'Fever (bacterial)', 'Maxillary tooth pain', 'Postnasal drip with cough'],
    ['Clinical diagnosis based on symptom duration and pattern', 'CT sinus if complication suspected (not routine)', 'Nasal endoscopy if recurrent', 'No imaging for uncomplicated acute sinusitis'],
    'Viral: supportive care, saline irrigation, intranasal corticosteroids, decongestants (short course). Bacterial: amoxicillin-clavulanate first-line for 5-7 days. Second-line: doxycycline or respiratory fluoroquinolone. Adjuncts: saline irrigation, topical steroids.',
    ['Orbital cellulitis/abscess', 'Frontal bone osteomyelitis (Pott puffy tumor)', 'Cavernous sinus thrombosis', 'Intracranial abscess', 'Meningitis', 'Chronic sinusitis'],
  ),

  'chronic-sinusitis': ent(
    'chronic-sinusitis', 'Chronic Rhinosinusitis', 'Rinosinusitis Crónica', 'rhinologic', 'J32.9',
    'Sinus inflammation persisting >12 weeks with objective evidence (endoscopy or CT). Subtypes: with nasal polyps (CRSwNP) and without (CRSsNP). Type 2 inflammation predominates in CRSwNP.',
    ['Persistent nasal congestion', 'Anterior or posterior mucopurulent drainage', 'Facial pressure/pain', 'Hyposmia or anosmia (especially CRSwNP)', 'Fatigue', 'Symptom duration >12 weeks'],
    ['Nasal endoscopy (edema, polyps, purulence)', 'CT sinus (mucosal thickening, opacification)', 'Allergy testing', 'Consider biopsy if unilateral mass/concerning features', 'Labs: IgE, eosinophil count, ANCA if vasculitis suspected'],
    'Medical: saline irrigation, topical corticosteroid sprays, short-course oral steroids (CRSwNP), antibiotics for acute exacerbations. Biologic therapy (dupilumab, omalizumab, mepolizumab) for refractory CRSwNP. Surgical: endoscopic sinus surgery (FESS) for medical treatment failure.',
    ['Recurrence after surgery (especially CRSwNP)', 'Asthma exacerbation (unified airway)', 'Mucocele formation', 'Orbital or intracranial complications', 'Anosmia'],
  ),

  'nasal-polyps': ent(
    'nasal-polyps', 'Nasal Polyps', 'Pólipos Nasales', 'rhinologic', 'J33.9',
    'Benign edematous outgrowths of the sinonasal mucosa, most commonly arising from the ethmoid sinuses. Strongly associated with type 2 inflammation, asthma, and aspirin sensitivity (Samter triad).',
    ['Progressive bilateral nasal obstruction', 'Anosmia or hyposmia', 'Rhinorrhea (anterior and posterior)', 'Facial pressure', 'Pale grapefruit-like masses on endoscopy', 'Mouth breathing and hyponasal voice'],
    ['Nasal endoscopy (bilateral translucent polyps)', 'CT sinus (diffuse polypoid opacification, especially ethmoid)', 'Allergy testing', 'Consider CF testing in children', 'IgE and eosinophil levels', 'Aspirin challenge if Samter triad suspected'],
    'Topical intranasal corticosteroids (mainstay). Short-course oral steroids for polyp shrinkage. Biologic therapy (dupilumab, omalizumab, mepolizumab) for refractory type 2 CRSwNP. Endoscopic polypectomy and sinus surgery when medical therapy fails. Aspirin desensitization for Samter triad.',
    ['High recurrence rate (40-60% after surgery)', 'Asthma worsening', 'Anosmia (may be permanent)', 'Frontoethmoid mucocele', 'Obstructive sleep disturbance'],
  ),

  'epistaxis': ent(
    'epistaxis', 'Epistaxis', 'Epistaxis', 'rhinologic', 'R04.0',
    'Nasal bleeding originating from either the anterior (Kiesselbach plexus, 90%) or posterior (sphenopalatine artery) nasal vasculature. Very common; most cases are anterior and self-limited.',
    ['Active nasal bleeding (unilateral or bilateral)', 'Anterior bleeds: visible bleeding from anterior septum', 'Posterior bleeds: bleeding down pharynx, often bilateral, more profuse', 'Hematemesis or hemoptysis from swallowed blood', 'Lightheadedness if significant blood loss'],
    ['Anterior rhinoscopy after suctioning/vasoconstriction', 'Nasal endoscopy for posterior or recurrent bleeding', 'Labs: CBC, PT/INR, type and screen if severe', 'CT angiography if refractory', 'Consider HHT evaluation if recurrent bilateral'],
    'Anterior: direct pressure 15-20 min, topical vasoconstrictor (oxymetazoline), silver nitrate cautery, anterior nasal packing (Merocel, Rapid Rhino). Posterior: posterior pack or balloon (Foley, double balloon), admit for observation. Refractory: endoscopic sphenopalatine artery ligation or embolization.',
    ['Recurrence', 'Aspiration of blood', 'Septal perforation (from cautery)', 'Toxic shock syndrome (nasal packing)', 'Hypovolemic shock (posterior bleeds)', 'Nasal alar necrosis from prolonged packing'],
  ),

  'deviated-septum': ent(
    'deviated-septum', 'Deviated Nasal Septum', 'Desviación del Tabique Nasal', 'rhinologic', 'J34.2',
    'Displacement of the nasal septum from midline, present in up to 80% of the population to some degree. May be congenital, developmental, or post-traumatic. Symptomatic deviation warrants treatment.',
    ['Unilateral or alternating nasal obstruction', 'Recurrent sinusitis (impaired drainage)', 'Recurrent epistaxis from turbulent airflow', 'Headache (septal contact point)', 'Snoring and sleep disturbance', 'Compensatory inferior turbinate hypertrophy on contralateral side'],
    ['Anterior rhinoscopy', 'Nasal endoscopy', 'Acoustic rhinometry or rhinomanometry (objective assessment)', 'CT sinus if concurrent sinus disease or surgical planning'],
    'Conservative: nasal saline irrigation, topical nasal steroids for turbinate congestion. Definitive: septoplasty (realignment of the cartilaginous/bony septum). Often combined with turbinate reduction or functional rhinoplasty. Medical management alone if mild.',
    ['Septal perforation (surgical)', 'Persistent deviation/recurrence', 'Saddle nose deformity (over-resection)', 'Septal hematoma if post-traumatic (requires urgent drainage)'],
  ),

  'allergic-rhinitis': ent(
    'allergic-rhinitis', 'Allergic Rhinitis', 'Rinitis Alérgica', 'rhinologic', 'J30.9',
    'IgE-mediated inflammatory response of the nasal mucosa to aeroallergens. Affects 10-30% of adults. Classified as intermittent vs persistent and mild vs moderate-severe (ARIA guidelines).',
    ['Sneezing paroxysms', 'Rhinorrhea (clear, watery)', 'Nasal congestion', 'Nasal and ocular pruritus', 'Allergic shiners (infraorbital darkening)', 'Allergic salute and nasal crease', 'Pale boggy turbinates on examination'],
    ['Clinical history and symptom pattern', 'Skin prick testing (first-line)', 'Serum specific IgE (ImmunoCAP)', 'Nasal endoscopy to evaluate for polyps', 'Nasal cytology (eosinophilia) if diagnosis uncertain'],
    'Allergen avoidance. Pharmacotherapy stepwise: second-generation antihistamines (cetirizine, fexofenadine), intranasal corticosteroids (fluticasone, mometasone), combination therapy, leukotriene antagonists. Allergen immunotherapy (subcutaneous or sublingual) for refractory cases. Nasal saline irrigation adjunct.',
    ['Sinusitis', 'Eustachian tube dysfunction and otitis media', 'Nasal polyps', 'Sleep impairment', 'Asthma exacerbation (unified airway)', 'Impaired quality of life and work productivity'],
  ),

  // ---- Laryngologic (5) ----------------------------------------------------

  'acute-laryngitis': ent(
    'acute-laryngitis', 'Acute Laryngitis', 'Laringitis Aguda', 'laryngologic', 'J04.0',
    'Inflammation of the laryngeal mucosa lasting <3 weeks, most commonly viral. Leads to edema and impaired vocal fold vibration with resulting hoarseness.',
    ['Hoarseness or dysphonia', 'Sore throat', 'Dry cough', 'Globus sensation', 'Low-grade fever', 'Malaise'],
    ['Clinical diagnosis based on history', 'Laryngoscopy only if >3 weeks or concerning features (smoker, hemoptysis, dysphagia)', 'No imaging for uncomplicated viral laryngitis'],
    'Supportive: voice rest (avoid whispering), hydration, humidified air, lozenges. Avoid irritants (smoking, alcohol). Antibiotics not indicated for viral. Short-course oral corticosteroids if professional voice demands. Treat underlying GERD/LPR if contributing.',
    ['Vocal fold hemorrhage (if forceful voice use)', 'Secondary bacterial infection', 'Progression to chronic laryngitis'],
  ),

  'vocal-cord-nodules': ent(
    'vocal-cord-nodules', 'Vocal Cord Nodules and Polyps', 'Nódulos y Pólipos de Cuerdas Vocales', 'laryngologic', 'J38.1',
    'Benign lesions of the vocal folds. Nodules are bilateral, symmetric, at the junction of anterior and middle thirds (from chronic voice abuse). Polyps are typically unilateral, may be hemorrhagic or edematous.',
    ['Persistent hoarseness or breathy voice', 'Vocal fatigue', 'Reduced vocal range', 'Throat clearing', 'Diplophonia (two-toned voice)', 'Worse with prolonged voice use'],
    ['Flexible or rigid videolaryngoscopy', 'Videostroboscopy (assess mucosal wave and glottic closure)', 'Voice assessment (perceptual and acoustic analysis)', 'Consider laryngeal EMG if vocal fold mobility questionable'],
    'Nodules: voice therapy with speech-language pathologist (primary treatment), vocal hygiene education. Polyps: voice therapy trial, then microlaryngoscopy with excision if persistent. Address contributing factors: GERD, smoking, hydration.',
    ['Persistent dysphonia', 'Voice-dependent career impact', 'Malignant transformation (polyps, very rare)', 'Recurrence if vocal behaviors not modified'],
  ),

  'laryngeal-cancer': ent(
    'laryngeal-cancer', 'Laryngeal Cancer', 'Cáncer de Laringe', 'head-neck-oncology', 'C32.9',
    'Squamous cell carcinoma of the larynx, strongly associated with tobacco and alcohol use. Classified by subsite: glottic (most common, early hoarseness), supraglottic, or subglottic.',
    ['Persistent hoarseness >3 weeks (glottic)', 'Dysphagia and odynophagia (supraglottic)', 'Referred otalgia', 'Neck mass (cervical lymphadenopathy)', 'Stridor and dyspnea (advanced)', 'Unintentional weight loss', 'Hemoptysis'],
    ['Flexible laryngoscopy with biopsy', 'CT neck with contrast (tumor extent, nodal disease)', 'MRI (cartilage invasion assessment)', 'PET-CT for staging', 'Panendoscopy (evaluate for synchronous primaries)', 'TNM staging'],
    'Early glottic (T1-T2): radiation therapy or transoral laser microsurgery (comparable cure rates). Advanced (T3-T4): concurrent chemoradiation (organ preservation) or total laryngectomy with adjuvant therapy. Neck dissection for nodal disease. Rehabilitation: voice prosthesis, speech therapy.',
    ['Loss of voice (laryngectomy)', 'Aspiration and pneumonia', 'Pharyngocutaneous fistula', 'Hypothyroidism (post-radiation)', 'Chondroradionecrosis', 'Recurrence', 'Permanent tracheostomy'],
  ),

  'laryngopharyngeal-reflux': ent(
    'laryngopharyngeal-reflux', 'Laryngopharyngeal Reflux (LPR)', 'Reflujo Laringofaríngeo (RLF)', 'laryngologic', 'K21.0',
    'Retrograde flow of gastric contents to the larynx and pharynx, often without classic heartburn ("silent reflux"). Causes chronic laryngeal irritation and a variety of throat symptoms.',
    ['Chronic throat clearing', 'Globus pharyngeus', 'Hoarseness (worse in morning)', 'Postnasal drip sensation', 'Chronic cough', 'Excessive throat mucus', 'Dysphagia', 'Heartburn absent in >50%'],
    ['Flexible laryngoscopy (posterior laryngeal edema, erythema, pseudosulcus vocalis)', 'Reflux Symptom Index (RSI) and Reflux Finding Score (RFS)', '24-hour dual-probe pH monitoring (gold standard)', 'Empiric trial of PPI often used diagnostically'],
    'Behavioral: dietary modifications (avoid acidic/fatty foods, caffeine, alcohol, late meals), weight loss, head-of-bed elevation. Pharmacologic: twice-daily PPI for 3-6 months, then taper. H2 blockers adjunct. Alginate-based agents. Fundoplication for refractory cases.',
    ['Laryngeal granuloma', 'Subglottic stenosis', 'Vocal fold scarring', 'Exacerbation of asthma and sinusitis', 'Barrett esophagus (concurrent GERD)'],
  ),

  'vocal-cord-paralysis': ent(
    'vocal-cord-paralysis', 'Vocal Cord Paralysis', 'Parálisis de Cuerdas Vocales', 'laryngologic', 'J38.0',
    'Immobility of one or both vocal folds due to recurrent laryngeal nerve or vagus nerve injury. Most common causes: iatrogenic (thyroid/neck surgery), idiopathic, malignancy.',
    ['Breathy or weak voice (unilateral)', 'Aspiration with liquids', 'Stridor and dyspnea (bilateral)', 'Ineffective cough', 'Dysphagia', 'Voice fatigue'],
    ['Flexible laryngoscopy (immobile vocal fold)', 'Videostroboscopy', 'CT skull base to mediastinum (recurrent laryngeal nerve course)', 'Laryngeal EMG (prognosis, denervation vs fixation)', 'Modified barium swallow if aspiration'],
    'Unilateral: voice therapy, observation for 6-12 months (potential recovery). Injection laryngoplasty (temporary filler or permanent). Medialization thyroplasty for permanent paralysis. Bilateral: tracheostomy for airway, posterior cordotomy or arytenoidectomy to widen glottis, reinnervation procedures.',
    ['Aspiration pneumonia', 'Airway compromise (bilateral)', 'Permanent dysphonia', 'Need for tracheostomy', 'Synkinesis after reinnervation'],
  ),

  // ---- Head & Neck Oncology (3) --------------------------------------------

  'nasopharyngeal-carcinoma': ent(
    'nasopharyngeal-carcinoma', 'Nasopharyngeal Carcinoma', 'Carcinoma Nasofaríngeo', 'head-neck-oncology', 'C11.9',
    'Malignancy arising from the nasopharyngeal epithelium, strongly associated with EBV and endemic in Southern China/Southeast Asia. WHO types: keratinizing SCC, nonkeratinizing (differentiated/undifferentiated).',
    ['Painless neck mass (cervical lymphadenopathy, often bilateral)', 'Unilateral serous otitis media (eustachian tube obstruction)', 'Nasal obstruction and epistaxis', 'Cranial nerve palsies (III-VI) with skull base invasion', 'Headache', 'Trismus'],
    ['Nasopharyngeal endoscopy with biopsy', 'EBV plasma DNA (screening and monitoring)', 'MRI nasopharynx and skull base (tumor extent)', 'PET-CT (staging, distant metastases)', 'CT chest', 'TNM staging (AJCC)'],
    'Primary: concurrent chemoradiation (cisplatin-based) for stage II-IVA. Radiation alone for stage I. Intensity-modulated radiation therapy (IMRT) to minimize toxicity. Adjuvant chemotherapy for advanced stage. Salvage nasopharyngectomy for local recurrence.',
    ['Radiation-induced xerostomia', 'Sensorineural hearing loss', 'Cranial neuropathy', 'Trismus', 'Hypothyroidism', 'Osteoradionecrosis', 'Secondary malignancy', 'Distant metastases (bone, lung, liver)'],
  ),

  'oral-leukoplakia': ent(
    'oral-leukoplakia', 'Oral Leukoplakia', 'Leucoplasia Oral', 'head-neck-oncology', 'K13.21',
    'White patch or plaque of the oral mucosa that cannot be scraped off or classified as another entity. Considered a premalignant condition with 1-9% malignant transformation risk (higher for non-homogeneous type).',
    ['Painless white patch on oral mucosa', 'Homogeneous (flat, thin, uniform) or non-homogeneous (speckled, verrucous, nodular)', 'Most common sites: buccal mucosa, tongue, floor of mouth', 'Floor of mouth and ventral tongue carry highest risk'],
    ['Incisional biopsy (mandatory to assess dysplasia)', 'Toluidine blue or autofluorescence to guide biopsy', 'Clinical photography for monitoring', 'Rule out candidiasis, lichen planus, hairy leukoplakia'],
    'Eliminate risk factors (tobacco, alcohol, betel quid). Observation with serial biopsy for mild dysplasia. Surgical excision (cold knife, laser ablation, cryotherapy) for moderate-severe dysplasia. Close surveillance every 3-6 months. No proven effective chemoprevention.',
    ['Malignant transformation to SCC (1-9%)', 'Recurrence after excision (15-35%)', 'Proliferative verrucous leukoplakia (high transformation rate)', 'Functional impairment if extensive excision'],
  ),

  'salivary-gland-tumors': ent(
    'salivary-gland-tumors', 'Salivary Gland Tumors', 'Tumores de Glándulas Salivales', 'salivary', 'D11.9',
    'Neoplasms of the major (parotid, submandibular, sublingual) or minor salivary glands. "Rule of 80s": 80% in parotid, 80% of parotid tumors benign, 80% of benign are pleomorphic adenoma.',
    ['Painless slow-growing parotid or submandibular mass', 'Pain suggests malignancy', 'Facial nerve weakness (malignant parotid tumors)', 'Fixed mass or skin involvement (malignancy)', 'Minor salivary gland: submucosal palatal mass (adenoid cystic carcinoma)'],
    ['FNA biopsy (first-line, 90% accuracy)', 'CT or MRI (tumor extent, deep lobe involvement)', 'Ultrasound for superficial lesions', 'PET-CT for high-grade malignancies', 'Frozen section intraoperatively'],
    'Benign parotid: superficial parotidectomy with facial nerve preservation. Malignant: total parotidectomy +/- facial nerve sacrifice if directly invaded, neck dissection, adjuvant radiation. Submandibular: gland excision. Minor salivary: wide local excision with clear margins.',
    ['Facial nerve injury (parotidectomy)', 'Frey syndrome (gustatory sweating)', 'First bite syndrome', 'Tumor recurrence (especially pleomorphic adenoma)', 'Perineural invasion (adenoid cystic)', 'Distant metastases (lung)'],
  ),

  // ---- Pediatric ENT (4) ---------------------------------------------------

  'tonsillitis': ent(
    'tonsillitis', 'Tonsillitis', 'Amigdalitis', 'pediatric-ent', 'J03.9',
    'Acute inflammation of the palatine tonsils, viral (70%) or bacterial (Group A Strep most common). Recurrent episodes may warrant surgical intervention.',
    ['Sore throat with odynophagia', 'Fever', 'Tonsillar erythema and exudates', 'Tender cervical lymphadenopathy', 'Malaise and headache', 'GAS: palatal petechiae, scarlatiniform rash, absence of cough'],
    ['Clinical examination', 'Rapid strep antigen test', 'Throat culture if rapid test negative in children', 'Centor/McIsaac score for clinical decision-making', 'Monospot if mononucleosis suspected'],
    'Viral: supportive (analgesics, fluids, rest). GAS: penicillin V or amoxicillin for 10 days (first-line), azithromycin if penicillin-allergic. Tonsillectomy for: recurrent (Paradise criteria: 7 episodes/1 yr, 5/yr for 2 yrs, or 3/yr for 3 yrs), peritonsillar abscess, or obstructive symptoms.',
    ['Peritonsillar abscess', 'Retropharyngeal abscess', 'Rheumatic fever (untreated GAS)', 'Post-streptococcal glomerulonephritis', 'Lemierre syndrome (septic jugular thrombophlebitis)'],
  ),

  'peritonsillar-abscess': ent(
    'peritonsillar-abscess', 'Peritonsillar Abscess (Quinsy)', 'Absceso Periamigdalino', 'pediatric-ent', 'J36',
    'Collection of pus between the tonsillar capsule and the pharyngeal constrictor muscles. Most common deep neck space infection. Typically polymicrobial (GAS + anaerobes).',
    ['Severe unilateral sore throat', 'Trismus (difficulty opening mouth)', 'Muffled "hot potato" voice', 'Uvular deviation away from affected side', 'Asymmetric tonsillar bulge', 'Drooling and dysphagia', 'Fever and toxic appearance'],
    ['Clinical diagnosis (classic presentation)', 'Intraoral ultrasound or needle aspiration (diagnostic and therapeutic)', 'CT neck with contrast if deep space extension suspected', 'Culture of aspirate'],
    'Needle aspiration or incision and drainage (I&D) under local anesthesia. IV antibiotics (ampicillin-sulbactam or clindamycin), then oral step-down. IV fluids and analgesics. Consider interval tonsillectomy for recurrence. Quinsy tonsillectomy (immediate) in select cases.',
    ['Airway obstruction', 'Parapharyngeal or retropharyngeal space extension', 'Lemierre syndrome', 'Recurrence (10-15%)', 'Aspiration of abscess contents', 'Mediastinitis'],
  ),

  'epiglottitis': ent(
    'epiglottitis', 'Epiglottitis', 'Epiglotitis', 'pediatric-ent', 'J05.1',
    'Acute life-threatening inflammation of the epiglottis and supraglottic structures. In pre-vaccine era, primarily children (H. influenzae type b). Now more common in adults; causes include other bacteria, viruses, thermal injury.',
    ['Rapid onset severe sore throat', 'Muffled voice', 'Dysphagia and drooling', 'Tripod positioning (sitting upright, leaning forward, neck extended)', 'Stridor', 'High fever and toxic appearance', 'Adults: severe odynophagia disproportionate to pharyngeal findings'],
    ['Clinical suspicion — do NOT examine throat in children until airway secured', 'Lateral neck X-ray: thumbprint sign (enlarged epiglottis)', 'Flexible nasopharyngoscopy in adults (cherry-red swollen epiglottis)', 'CT neck if diagnosis uncertain', 'Blood cultures'],
    'Airway management is priority. Children: controlled intubation in OR with ENT standby for surgical airway. IV antibiotics: ceftriaxone or ampicillin-sulbactam (cover H. influenzae and other pathogens). IV dexamethasone. ICU monitoring. Adults: close airway monitoring, many managed without intubation.',
    ['Airway obstruction and death', 'Epiglottic abscess', 'Pulmonary edema (post-obstructive)', 'Cervical lymphadenitis', 'Pneumonia'],
  ),

  'foreign-body-ear': ent(
    'foreign-body-ear', 'Foreign Body — Ear', 'Cuerpo Extraño — Oído', 'pediatric-ent', 'T16',
    'Object lodged in the external auditory canal, most common in children (beads, insects, food). Button batteries are a true emergency requiring immediate removal.',
    ['Otalgia', 'Hearing loss', 'Otorrhea or bleeding', 'Buzzing/crawling sensation (live insects)', 'Asymptomatic (incidental finding)', 'Foul-smelling discharge if retained'],
    ['Otoscopy with adequate lighting', 'Determine object type (button battery requires urgent action)', 'Assess TM integrity', 'Imaging rarely needed unless deep or suspected middle ear involvement'],
    'Mineral oil to kill live insects before removal. Removal techniques: irrigation (contraindicated if TM perforation or button battery), curette, alligator forceps, suction. General anesthesia in children if uncooperative. Button battery: immediate removal, do NOT irrigate. Refer to ENT if failed primary attempt.',
    ['Canal laceration or abrasion', 'TM perforation', 'Ossicular dislocation', 'Canal wall necrosis (button battery)', 'Retained foreign body with secondary infection'],
  ),

  'foreign-body-nose': ent(
    'foreign-body-nose', 'Foreign Body — Nose', 'Cuerpo Extraño — Nariz', 'pediatric-ent', 'T17.1',
    'Object lodged in the nasal cavity, common in children aged 2-5 years. Button batteries are emergent (nasal septal perforation within hours).',
    ['Unilateral foul-smelling nasal discharge', 'Unilateral nasal obstruction', 'Epistaxis', 'Child may be asymptomatic initially', 'Rhinolith formation if chronic retained foreign body'],
    ['Anterior rhinoscopy with headlight', 'Topical vasoconstrictor to reduce edema', 'Button battery appears as round dark object with halo on imaging', 'X-ray if radiopaque object suspected'],
    'Positive-pressure technique (parent kiss, Katz extractor). Instrumented removal under direct visualization: hook, forceps, suction. Topical vasoconstrictor and anesthetic. Button battery: emergent removal, copious saline irrigation after extraction. GA if cooperative removal fails.',
    ['Aspiration into airway', 'Septal perforation (button battery)', 'Sinusitis', 'Rhinolith', 'Epistaxis during removal'],
  ),

  'foreign-body-throat': ent(
    'foreign-body-throat', 'Foreign Body — Throat/Aerodigestive', 'Cuerpo Extraño — Garganta/Aerodigestivo', 'pediatric-ent', 'T17.2',
    'Foreign body lodged in the pharynx, esophagus, or airway. Coins, food, and small toys most common in children. Fish/chicken bones in adults. Esophageal FB at cricopharyngeus (most common site).',
    ['Dysphagia or odynophagia', 'Drooling', 'Stridor and respiratory distress (airway FB)', 'Choking episode', 'Chest or neck pain', 'Inability to swallow secretions (complete esophageal obstruction)'],
    ['Lateral and AP neck/chest X-ray', 'CT neck/chest if X-ray negative but high suspicion', 'Flexible laryngoscopy (hypopharyngeal FB)', 'Esophagoscopy (diagnostic and therapeutic)', 'Button battery and sharp objects require urgent imaging and intervention'],
    'Airway FB: Heimlich maneuver (back blows/chest thrusts in infants), rigid bronchoscopy for removal. Esophageal FB: rigid or flexible esophagoscopy. Blunt objects <24h: observation for spontaneous passage possible. Sharp objects and button batteries: urgent endoscopic removal. Glucagon for food bolus impaction trial.',
    ['Airway obstruction', 'Esophageal perforation', 'Mediastinitis', 'Aortoesophageal fistula (button battery)', 'Aspiration pneumonia', 'Retropharyngeal abscess'],
  ),

  // ---- Head & Neck / Other (4) ---------------------------------------------

  'obstructive-sleep-apnea': ent(
    'obstructive-sleep-apnea', 'Obstructive Sleep Apnea', 'Apnea Obstructiva del Sueño', 'laryngologic', 'G47.33',
    'Recurrent upper airway collapse during sleep causing apneas/hypopneas, oxygen desaturation, and sleep fragmentation. Affects 15-30% of men and 10-15% of women. Major risk factor for cardiovascular disease.',
    ['Loud habitual snoring', 'Witnessed apneas', 'Excessive daytime sleepiness', 'Unrefreshing sleep', 'Morning headaches', 'Nocturia', 'Obesity (BMI >30)', 'Crowded oropharynx, retrognathia, large neck circumference (>17" men, >16" women)'],
    ['Polysomnography (PSG, gold standard)', 'Home sleep apnea test (HSAT) for uncomplicated cases', 'AHI classification: mild (5-15), moderate (15-30), severe (>30)', 'Drug-induced sleep endoscopy (DISE) for surgical planning', 'Epworth Sleepiness Scale', 'Cephalometric analysis'],
    'First-line: CPAP (continuous positive airway pressure). Weight loss (10% weight loss can halve AHI). Oral appliances (mandibular advancement devices) for mild-moderate or CPAP intolerance. Positional therapy. Surgical options: UPPP, tonsillectomy, tongue base reduction, hypoglossal nerve stimulator (Inspire), maxillomandibular advancement. Pediatric: adenotonsillectomy first-line.',
    ['Hypertension', 'Atrial fibrillation and arrhythmias', 'Stroke', 'Heart failure', 'Motor vehicle accidents (drowsy driving)', 'Metabolic syndrome', 'Depression', 'Increased perioperative risk'],
  ),

  'temporomandibular-disorder': ent(
    'temporomandibular-disorder', 'Temporomandibular Disorder (TMD)', 'Trastorno Temporomandibular (TTM)', 'otologic', 'M26.60',
    'Group of conditions affecting the TMJ, muscles of mastication, and related structures. Includes myofascial pain, internal derangement (disc displacement), and degenerative joint disease.',
    ['Jaw pain or tenderness (preauricular)', 'Clicking, popping, or crepitus with jaw movement', 'Limited mouth opening or jaw locking', 'Headache (temporal)', 'Otalgia (referred)', 'Bruxism history', 'Pain worse with chewing'],
    ['Clinical examination: palpation of TMJ and masticatory muscles, range of motion, joint sounds', 'Panoramic X-ray', 'MRI TMJ (disc position, joint effusion)', 'CT (bony detail, degenerative changes)', 'Diagnostic joint injection'],
    'Conservative first (85% improve): soft diet, jaw rest, moist heat/ice, NSAIDs, muscle relaxants, physical therapy, oral splint/night guard. Behavioral: stress management, sleep hygiene, habit modification. Refractory: arthrocentesis, arthroscopy, Botox injection to masseters. Open joint surgery rare and last resort.',
    ['Chronic pain', 'Degenerative joint disease', 'Ankylosis', 'Depression and disability', 'Malocclusion'],
  ),

  'bells-palsy': ent(
    'bells-palsy', 'Bell\'s Palsy', 'Parálisis de Bell', 'otologic', 'G51.0',
    'Acute idiopathic unilateral facial nerve (CN VII) paralysis, likely due to HSV-1 reactivation within the temporal bone. Most common cause of unilateral facial paralysis. Peak incidence age 15-45.',
    ['Acute onset unilateral facial weakness (upper AND lower face)', 'Inability to close eye, raise eyebrow, or smile on affected side', 'Ear pain (prodromal or concurrent)', 'Hyperacusis (stapedius involvement)', 'Taste disturbance (anterior 2/3 tongue)', 'Drooling', 'Maximal weakness by 72 hours'],
    ['Clinical diagnosis of exclusion', 'House-Brackmann grading scale (I-VI)', 'Rule out: Raman Hunt syndrome (vesicles), otitis media, cholesteatoma, parotid tumor, stroke (forehead spared in UMN)', 'MRI if no improvement by 3 months or atypical features', 'EMG/ENoG for prognosis if complete paralysis'],
    'Early oral corticosteroids within 72 hours of onset (prednisone 60-80mg/day for 7 days with taper). Antiviral (valacyclovir) addition controversial but commonly prescribed for severe cases. Eye care: artificial tears, lubricating ointment at night, taping eyelid closed. Physical therapy. Gold weight eyelid implant or tarsorrhaphy for persistent paralysis.',
    ['Incomplete recovery (15-20%)', 'Synkinesis (aberrant nerve regeneration)', 'Corneal exposure and ulceration', 'Crocodile tears (gustolacrimal reflex)', 'Contracture', 'Psychological impact'],
  ),

  'acoustic-neuroma': ent(
    'acoustic-neuroma', 'Acoustic Neuroma (Vestibular Schwannoma)', 'Neuroma Acústico (Schwannoma Vestibular)', 'otologic', 'D33.3',
    'Benign tumor arising from Schwann cells of the vestibular portion of CN VIII in the cerebellopontine angle. Accounts for 6-10% of intracranial tumors. Bilateral tumors pathognomonic for NF2.',
    ['Asymmetric/unilateral sensorineural hearing loss (most common presenting symptom)', 'Unilateral tinnitus', 'Disequilibrium (gradual, not acute vertigo)', 'Facial numbness (CN V, large tumors)', 'Facial weakness (CN VII, late/large tumors)', 'Headache and hydrocephalus (very large tumors)'],
    ['MRI IAC with gadolinium (gold standard, enhancing CPA mass)', 'Audiometry (asymmetric SNHL, poor speech discrimination)', 'ABR (prolonged I-V interpeak latency)', 'CT temporal bone (widened IAC)', 'Genetic testing if bilateral (NF2)'],
    'Observation with serial MRI for small tumors (<1.5 cm) or elderly/poor surgical candidates. Stereotactic radiosurgery (Gamma Knife): tumor control >90% for tumors <3 cm. Microsurgery (retrosigmoid, translabyrinthine, or middle fossa approach): larger tumors, serviceable hearing considerations. Treatment individualized based on tumor size, hearing, age, and patient preference.',
    ['Hearing loss (progressive or post-treatment)', 'Facial nerve injury (surgery)', 'CSF leak', 'Meningitis', 'Tumor recurrence/regrowth', 'Hydrocephalus', 'Trigeminal neuropathy'],
  ),

  // ---- Congenital (2) ------------------------------------------------------

  'thyroglossal-duct-cyst': ent(
    'thyroglossal-duct-cyst', 'Thyroglossal Duct Cyst', 'Quiste del Conducto Tirogloso', 'congenital', 'Q89.2',
    'Most common congenital neck mass. Arises from remnant of the thyroglossal duct (tract of thyroid descent from foramen cecum to its final position). Typically presents in children as midline neck mass.',
    ['Painless midline neck mass (at or below hyoid bone)', 'Elevates with tongue protrusion and swallowing', 'May become infected (tender, erythematous)', 'Draining sinus if previously infected', 'Smooth, well-circumscribed, mobile'],
    ['Clinical examination (midline, moves with swallowing/tongue protrusion)', 'Ultrasound neck (cystic midline mass)', 'Thyroid ultrasound (confirm normal thyroid tissue in normal position — mandatory)', 'CT or MRI if complex or recurrent', 'Thyroid function tests'],
    'Sistrunk procedure: excision of cyst, tract, central portion of hyoid bone, and tissue up to foramen cecum (to prevent recurrence). Must confirm normal orthotopic thyroid present preoperatively. Antibiotics if infected; drain abscess first, then definitive surgery after inflammation resolves.',
    ['Recurrence (2-6% with Sistrunk, higher with simple excision)', 'Infection/abscess', 'Rare malignancy (papillary thyroid carcinoma in 1% of adults)', 'Hypothyroidism if ectopic thyroid removed inadvertently'],
  ),

  'branchial-cleft-cyst': ent(
    'branchial-cleft-cyst', 'Branchial Cleft Cyst', 'Quiste de Hendidura Branquial', 'congenital', 'Q18.0',
    'Congenital cyst arising from branchial apparatus remnants. Second branchial cleft anomaly most common (95%), presenting as lateral neck mass at anterior border of SCM. May present as cyst, sinus, or fistula.',
    ['Painless lateral neck mass (anterior to SCM, at junction of upper and middle thirds)', 'May enlarge with URI', 'Recurrent infections', 'Draining sinus or fistula (external opening at anterior SCM border)', 'First cleft: periauricular; third/fourth: lower neck'],
    ['Ultrasound (well-defined cystic mass, lateral neck)', 'CT or MRI neck with contrast (cyst relationship to adjacent structures)', 'FNA (if adult presentation, to exclude cystic metastatic SCC)', 'Barium swallow for third/fourth cleft sinus (pyriform sinus fistula)'],
    'Definitive: surgical excision of entire cyst and tract. Second cleft: tract passes between internal and external carotid arteries to tonsillar fossa. Drain infection first if abscess present, then excise 6-8 weeks later. Important: in adults >40 with new lateral cystic neck mass, exclude cystic metastatic SCC (from oropharyngeal primary) before assuming branchial cyst.',
    ['Recurrence if incomplete excision', 'Recurrent infection', 'Cranial nerve injury (XI, XII, marginal mandibular VII)', 'Vascular injury', 'Malignant transformation (rare, branchiogenic carcinoma controversial)'],
  ),

  // ---- Additional conditions to reach 30+ ----------------------------------

  'otosclerosis': ent(
    'otosclerosis', 'Otosclerosis', 'Otosclerosis', 'otologic', 'H80.9',
    'Abnormal bone remodeling of the otic capsule causing progressive fixation of the stapes footplate. Most common cause of conductive hearing loss in young adults. Autosomal dominant with incomplete penetrance.',
    ['Progressive conductive hearing loss (bilateral in 70%)', 'Tinnitus', 'Paradoxical improvement in noisy environments (paracusis of Willis)', 'Family history', 'Carhart notch (dip at 2kHz on bone conduction audiometry)', 'Schwartze sign (pink blush on promontory from vascular otospongiosis)'],
    ['Audiometry (conductive hearing loss with Carhart notch)', 'Tympanometry (type As, reduced compliance)', 'Absent stapedial reflexes', 'CT temporal bone (demineralization of fissula ante fenestram)', 'Family history assessment'],
    'Observation for mild cases. Hearing aids (non-surgical option). Stapedectomy or stapedotomy (surgical, 90-95% closure of air-bone gap). Sodium fluoride (controversial, may slow otospongiotic progression). Avoid stapedectomy in only-hearing ear.',
    ['Dead ear (total SNHL, <1% with surgery)', 'Perilymph fistula', 'Tinnitus worsening', 'Vertigo (transient postoperative)', 'Facial nerve injury (rare)', 'Cochlear otosclerosis (SNHL component)'],
  ),

  'sudden-sensorineural-hearing-loss': ent(
    'sudden-sensorineural-hearing-loss', 'Sudden Sensorineural Hearing Loss', 'Hipoacusia Neurosensorial Súbita', 'otologic', 'H91.2',
    'Rapid-onset SNHL of at least 30 dB over 3 or more contiguous frequencies within 72 hours. Otologic emergency. Idiopathic in most cases; viral, vascular, and autoimmune etiologies proposed.',
    ['Sudden unilateral hearing loss (noticed upon waking or over hours)', 'Tinnitus (90%)', 'Aural fullness', 'Vertigo or disequilibrium (30-40%)', 'Normal otoscopic exam'],
    ['Urgent audiometry (confirms SNHL >= 30 dB in 3 frequencies)', 'MRI IAC with gadolinium (exclude acoustic neuroma, mandatory)', 'Labs: CBC, ESR, CRP, ANA, RPR, thyroid, glucose', 'Tuning fork tests (Weber lateralizes to unaffected ear)'],
    'Urgent high-dose oral corticosteroids (prednisone 1 mg/kg/day for 10-14 days with taper). Intratympanic dexamethasone as salvage or primary (if systemic steroids contraindicated). Initiate within 2 weeks of onset for best outcomes. Hyperbaric oxygen therapy (adjunct, evidence limited). Hearing aid or CROS for non-recovery.',
    ['Permanent hearing loss (one-third recover fully, one-third partial, one-third no recovery)', 'Tinnitus (may persist)', 'Contralateral ear involvement (rare)', 'Missed acoustic neuroma', 'Psychological impact'],
  ),

  'croup': ent(
    'croup', 'Croup (Laryngotracheobronchitis)', 'Crup (Laringotraqueobronquitis)', 'pediatric-ent', 'J05.0',
    'Viral upper airway infection causing subglottic edema, primarily affecting children 6 months to 3 years. Parainfluenza virus (type 1) is the most common cause. Typically fall/winter seasonality.',
    ['Barking "seal-like" cough', 'Inspiratory stridor', 'Hoarseness', 'Low-grade fever', 'Symptoms worse at night', 'Preceded by URI prodrome', 'Steeple sign on AP neck X-ray (subglottic narrowing)'],
    ['Clinical diagnosis (barking cough, stridor, hoarseness triad)', 'Westley croup score for severity grading', 'AP neck X-ray: steeple sign (subglottic narrowing) — not routinely needed', 'Differentiate from epiglottitis (no drooling, gradual onset, lower fever)'],
    'Mild: cool mist, oral dexamethasone 0.6 mg/kg single dose. Moderate-severe: nebulized racemic epinephrine (observe 3-4 hours for rebound) + dexamethasone. Severe/impending respiratory failure: ICU, repeated nebulized epinephrine, heliox, intubation (rare). Humidification, comfort measures, minimal agitation.',
    ['Respiratory distress and airway obstruction', 'Bacterial tracheitis (secondary infection)', 'Pneumonia', 'Recurrent croup (consider subglottic stenosis or airway anomaly)', 'Post-intubation subglottic stenosis'],
  ),

  'periauricular-sinus': ent(
    'periauricular-sinus', 'Preauricular Sinus (Pit)', 'Seno Preauricular', 'congenital', 'Q18.1',
    'Congenital epithelium-lined tract anterior to the ear, arising from incomplete fusion of the first and second branchial arch hillocks. Present in 0.1-0.9% of US population, up to 10% in some African and Asian populations.',
    ['Small pit or opening anterior to the tragus or ascending helix', 'Asymptomatic until infected', 'Recurrent periauricular abscess', 'Purulent discharge from pit', 'May be bilateral (25-50%)'],
    ['Clinical examination (visible pit)', 'No imaging needed if uncomplicated', 'CT or MRI if deep infection or complex tract', 'Evaluate for associated anomalies (branchio-oto-renal syndrome: hearing loss, renal anomalies)'],
    'Asymptomatic: observation only. Acute infection: antibiotics +/- incision and drainage. Definitive: complete surgical excision of sinus tract (recurrence high with incomplete removal). Supra-auricular approach with tract dissection to temporalis fascia. Excise only after infection resolves.',
    ['Recurrent infection', 'Abscess formation', 'Incomplete excision and recurrence (up to 40% if incomplete)', 'Post-surgical scarring'],
  ),

  'subglottic-stenosis': ent(
    'subglottic-stenosis', 'Subglottic Stenosis', 'Estenosis Subglótica', 'laryngologic', 'J38.6',
    'Narrowing of the subglottic airway (most narrow portion of the pediatric airway). Acquired form from prolonged intubation is most common. Congenital form: complete cricoid cartilage ring. Graded by Myer-Cotton system (I-IV).',
    ['Biphasic stridor', 'Recurrent croup (especially in young children)', 'Exercise intolerance', 'Dyspnea on exertion', 'Failed extubation (acquired)', 'Neonatal or infantile stridor (congenital)'],
    ['Flexible laryngoscopy (preliminary evaluation)', 'Direct laryngoscopy and bronchoscopy under anesthesia (gold standard, allows sizing)', 'CT airway or MRI (adjunct for surgical planning)', 'Myer-Cotton grading (I: <50% obstruction to IV: no detectable lumen)'],
    'Mild (grade I-II): observation, endoscopic dilation, endoscopic laser or cold knife incision. Moderate-severe (grade III-IV): laryngotracheal reconstruction (LTR) with cartilage grafting (anterior +/- posterior), cricotracheal resection (CTR) for severe mature stenosis. Tracheostomy for airway while awaiting definitive repair.',
    ['Tracheostomy dependence', 'Restenosis', 'Voice changes', 'Swallowing difficulty', 'Need for multiple procedures'],
  ),
};

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

/** Look up a single ENT condition by its ID. */
export function getENTConditionById(id: string): ENTConditionEntry | undefined {
  return ENT_CONDITION_ENTRIES[id];
}

/** Filter conditions by category. */
export function getENTByCategory(category: ENTConditionCategory): ENTConditionEntry[] {
  return Object.values(ENT_CONDITION_ENTRIES).filter(c => c.category === category);
}

/** Return the total number of ENT conditions in the database. */
export function getENTConditionCount(): number {
  return Object.keys(ENT_CONDITION_ENTRIES).length;
}

/** Get all condition IDs as an array. */
export function getAllENTConditionIds(): string[] {
  return Object.keys(ENT_CONDITION_ENTRIES);
}

/** Search conditions by name or description (case-insensitive). */
export function searchENTConditions(query: string): ENTConditionEntry[] {
  const q = query.toLowerCase();
  return Object.values(ENT_CONDITION_ENTRIES).filter(c =>
    c.name.toLowerCase().includes(q) || (c.nameEs && c.nameEs.toLowerCase().includes(q)) || c.description.toLowerCase().includes(q),
  );
}

/** Get all unique categories represented in the database. */
export function getENTCategories(): ENTConditionCategory[] {
  return [...new Set(Object.values(ENT_CONDITION_ENTRIES).map(c => c.category))];
}
