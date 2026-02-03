/**
 * ENT (Otolaryngology) Specialty Database
 *
 * Comprehensive clinical reference covering ear, nose/sinus, throat,
 * head & neck, voice, and pediatric ENT conditions.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ENTEntry {
  id: string;
  name: string;
  nameEs: string;
  subcategory: 'ear' | 'nose-sinus' | 'throat' | 'head-neck' | 'voice' | 'pediatric-ent';
  summary: string;
  anatomy: string;
  symptoms: string[];
  diagnosticWorkup: string[];
  treatment: string;
  surgicalOptions: string;
  homeRemedies: string;
  whenToSeeSpecialist: string;
  prevention: string;
  patientTip: string;
}

// ---------------------------------------------------------------------------
// Compact helper
// ---------------------------------------------------------------------------

const ent = (
  id: string,
  name: string,
  nameEs: string,
  subcategory: ENTEntry['subcategory'],
  summary: string,
  anatomy: string,
  symptoms: string[],
  diagnosticWorkup: string[],
  treatment: string,
  surgicalOptions: string,
  homeRemedies: string,
  whenToSeeSpecialist: string,
  prevention: string,
  patientTip: string,
): ENTEntry => ({
  id, name, nameEs, subcategory, summary, anatomy, symptoms,
  diagnosticWorkup, treatment, surgicalOptions, homeRemedies,
  whenToSeeSpecialist, prevention, patientTip,
});

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const ENT_ENTRIES: Record<string, ENTEntry> = {
  // ── Ear (5) ──────────────────────────────────────────────────────────────
  'acute-otitis-media': ent(
    'acute-otitis-media', 'Acute Otitis Media', 'Otitis media aguda', 'ear',
    'Middle-ear infection commonly caused by bacteria or viruses, frequent in children under 5.',
    'The middle ear is an air-filled space behind the tympanic membrane containing the ossicles. The Eustachian tube connects it to the nasopharynx and equalizes pressure.',
    ['Ear pain (otalgia)', 'Fever', 'Hearing reduction', 'Irritability in infants', 'Otorrhea if TM perforates'],
    ['Otoscopy showing bulging erythematous TM', 'Pneumatic otoscopy for mobility', 'Tympanometry if diagnosis uncertain'],
    'Amoxicillin is first-line antibiotic for 7-10 days. Observation without antibiotics may be appropriate for mild cases in children over 2. Analgesics for pain control.',
    'Myringotomy with or without tube placement for recurrent AOM (3+ episodes in 6 months or 4+ in 12 months).',
    'Warm compress over the ear. OTC pain relievers (acetaminophen/ibuprofen). Elevate head during sleep.',
    'Seek care if ear pain lasts >48 hours, fever >102.2 F, discharge from the ear, or symptoms in an infant under 6 months.',
    'Breastfeeding, up-to-date vaccinations (pneumococcal, influenza), avoid secondhand smoke, limit pacifier use after 6 months.',
    'Most ear infections resolve within days. Finish the full antibiotic course even if symptoms improve early.',
  ),
  'otitis-externa': ent(
    'otitis-externa', 'Otitis Externa (Swimmer\'s Ear)', 'Otitis externa', 'ear',
    'Infection of the external auditory canal, often from moisture or trauma. Pseudomonas and Staph aureus are common pathogens.',
    'The external auditory canal extends from the pinna to the tympanic membrane, lined with skin containing cerumen glands that provide a protective acidic barrier.',
    ['Ear pain worsened by tragal pressure', 'Itching in the canal', 'Canal edema and discharge', 'Conductive hearing loss', 'Pain with jaw movement'],
    ['Clinical exam with otoscopy', 'Culture if refractory', 'CT temporal bone if malignant OE suspected (immunocompromised)'],
    'Topical antibiotic/steroid drops (ciprofloxacin-dexamethasone) for 7-10 days. Wick placement if canal is significantly swollen. Keep ear dry.',
    'Surgical debridement reserved for malignant (necrotizing) otitis externa, which requires IV antibiotics and possible mastoid surgery.',
    'White vinegar and rubbing alcohol drops (1:1) after swimming. Keep ears dry with a hair dryer on low. Avoid inserting objects into the ear canal.',
    'See a specialist if pain is severe, swelling occludes the canal, symptoms worsen after 48 hours of treatment, or you have diabetes/immunosuppression.',
    'Use earplugs when swimming. Dry ears thoroughly after water exposure. Avoid aggressive cleaning with cotton swabs.',
    'Cotton swabs push wax deeper and can damage the canal lining. Let ears self-clean naturally.',
  ),
  'sensorineural-hearing-loss': ent(
    'sensorineural-hearing-loss', 'Sensorineural Hearing Loss', 'Hipoacusia neurosensorial', 'ear',
    'Hearing loss caused by damage to the inner ear (cochlea) or auditory nerve. May be sudden or gradual, unilateral or bilateral.',
    'The cochlea contains the organ of Corti with inner and outer hair cells that convert sound vibrations into electrical signals transmitted via the cochlear nerve to the auditory cortex.',
    ['Difficulty understanding speech especially in noise', 'Muffled hearing', 'Tinnitus', 'Difficulty with phone conversations', 'Social withdrawal'],
    ['Pure-tone audiometry', 'Speech discrimination testing', 'Tympanometry', 'MRI with gadolinium (rule out acoustic neuroma)', 'Blood work for autoimmune or metabolic causes'],
    'Sudden SNHL is a medical emergency: high-dose oral or intratympanic steroids within 72 hours. Chronic SNHL managed with hearing aids or cochlear implants.',
    'Cochlear implantation for severe-to-profound bilateral loss not benefiting from hearing aids. Bone-anchored hearing aids for select candidates.',
    'No home remedy restores sensorineural hearing. Reduce background noise, face the speaker, use captioning services.',
    'Sudden hearing loss in one ear is an emergency — see an ENT within 24-48 hours. Gradual loss warrants audiologic evaluation.',
    'Avoid prolonged loud noise exposure (use hearing protection >85 dB). Manage cardiovascular risk factors. Avoid ototoxic medications when possible.',
    'Sudden hearing loss in one ear is a medical emergency. Early steroid treatment (within 2 weeks) significantly improves recovery odds.',
  ),
  'bppv': ent(
    'bppv', 'Benign Paroxysmal Positional Vertigo', 'Vertigo posicional paroxistico benigno', 'ear',
    'Most common cause of vertigo, caused by displaced otoconia (calcium carbonate crystals) in the semicircular canals.',
    'The vestibular labyrinth contains three semicircular canals (anterior, posterior, lateral) with cupulae that detect rotational head movement. Otoconia normally reside in the utricle.',
    ['Brief episodes of spinning triggered by head position changes', 'Nausea with episodes', 'Nystagmus', 'Imbalance after episodes', 'Episodes lasting <60 seconds'],
    ['Dix-Hallpike maneuver (posterior canal)', 'Supine roll test (lateral canal)', 'Videonystagmography if atypical', 'MRI if central cause suspected'],
    'Canalith repositioning maneuver (Epley) for posterior canal BPPV is curative in ~80% in 1-2 sessions. Barbecue roll for lateral canal variant.',
    'Rarely needed. Posterior canal occlusion or singular neurectomy for truly intractable cases unresponsive to repeated repositioning.',
    'Brandt-Daroff exercises at home can help residual symptoms. Sleep with head elevated 30 degrees. Move slowly when changing positions.',
    'See a specialist if vertigo episodes are prolonged (>1 minute), accompanied by hearing loss, or if repositioning maneuvers fail after several attempts.',
    'No reliable prevention, but prompt treatment of initial episodes reduces chronicity. Vitamin D supplementation may reduce recurrence in deficient patients.',
    'BPPV is the most treatable form of vertigo. The Epley maneuver performed in the office often resolves symptoms in a single visit.',
  ),
  'menieres-disease': ent(
    'menieres-disease', 'Meniere\'s Disease', 'Enfermedad de Meniere', 'ear',
    'Inner ear disorder characterized by episodic vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness due to endolymphatic hydrops.',
    'The membranous labyrinth contains endolymph. In Meniere\'s, excess endolymph (hydrops) distends the membranes, disrupting both hearing and balance function.',
    ['Episodic vertigo lasting 20 min to 12 hours', 'Fluctuating low-frequency hearing loss', 'Roaring tinnitus', 'Aural fullness', 'Nausea and vomiting during attacks'],
    ['Audiometry showing low-frequency SNHL', 'Electrocochleography (ECoG)', 'MRI to exclude retrocochlear pathology', 'Vestibular testing (VNG/ENG)'],
    'Low-sodium diet (<2g/day), diuretics (hydrochlorothiazide/triamterene), vestibular suppressants for acute attacks (meclizine, benzodiazepines). Betahistine used internationally.',
    'Intratympanic steroid or gentamicin injections. Endolymphatic sac decompression. Vestibular nerve section or labyrinthectomy for refractory disabling cases.',
    'Strict low-sodium diet. Limit caffeine and alcohol. Stress management. Stay hydrated. Keep a symptom diary to identify triggers.',
    'See a specialist at first episode of prolonged vertigo with hearing changes. Urgent evaluation if drop attacks (Tumarkin crises) occur.',
    'Low-sodium diet is the cornerstone. Avoid known triggers (stress, caffeine, alcohol, high-salt meals). Regular sleep schedule.',
    'Meniere\'s is a chronic condition but many patients stabilize over time. A symptom diary helps identify your personal triggers.',
  ),

  // ── Nose/Sinus (5) ──────────────────────────────────────────────────────
  'acute-sinusitis': ent(
    'acute-sinusitis', 'Acute Sinusitis', 'Sinusitis aguda', 'nose-sinus',
    'Inflammation of the paranasal sinuses lasting <4 weeks, usually following a viral URI. Bacterial superinfection occurs in ~2% of cases.',
    'Four paired sinuses: maxillary, ethmoid, frontal, and sphenoid. They drain via ostia into the nasal cavity through the ostiomeatal complex.',
    ['Facial pain/pressure over sinuses', 'Purulent nasal discharge', 'Nasal congestion', 'Hyposmia', 'Postnasal drip', 'Cough worsening at night'],
    ['Clinical diagnosis based on symptom duration', 'CT sinus if complications suspected', 'Nasal endoscopy if recurrent', 'Culture via endoscopic swab if refractory'],
    'Most cases are viral — supportive care for 7-10 days. Antibiotics (amoxicillin-clavulanate) if symptoms >10 days, worsen after initial improvement, or severe onset. Nasal saline irrigation, intranasal corticosteroids.',
    'Functional endoscopic sinus surgery (FESS) not indicated for isolated acute sinusitis. Reserved for complications (orbital abscess, intracranial extension).',
    'Nasal saline irrigation (neti pot or squeeze bottle). Steam inhalation. Warm compresses over sinuses. Adequate hydration. Head elevation during sleep.',
    'Seek immediate care for high fever >102 F, periorbital swelling/redness, severe headache, visual changes, or mental status changes suggesting intracranial complication.',
    'Hand hygiene, influenza vaccination, treat allergies, avoid smoking, use humidifier in dry environments.',
    'Antibiotics are rarely needed for sinus infections. Most resolve on their own. Saline rinses are one of the most effective treatments.',
  ),
  'chronic-sinusitis': ent(
    'chronic-sinusitis', 'Chronic Sinusitis', 'Sinusitis cronica', 'nose-sinus',
    'Sinonasal inflammation persisting >=12 weeks despite treatment. Subtypes include CRS with nasal polyps (CRSwNP) and without (CRSsNP).',
    'Chronic inflammation leads to mucosal thickening, ostial obstruction, and impaired mucociliary clearance. Biofilm formation may perpetuate infection.',
    ['Persistent nasal congestion', 'Facial pressure', 'Discolored postnasal drainage', 'Hyposmia/anosmia', 'Fatigue', 'Ear fullness'],
    ['Nasal endoscopy', 'CT sinuses (Lund-Mackay scoring)', 'Allergy testing', 'Tissue biopsy if fungal sinusitis suspected', 'Ciliary function testing if indicated'],
    'Intranasal corticosteroid sprays (long-term), saline irrigation, short courses of oral steroids for polyps. Culture-directed antibiotics for exacerbations. Biologic therapies (dupilumab) for CRSwNP.',
    'FESS to open obstructed sinuses and remove polyps. Balloon sinuplasty for select cases. Revision surgery for recurrence.',
    'Daily high-volume saline irrigation with budesonide rinses (if prescribed). Avoid irritants and allergens. Use HEPA air filters. Stay hydrated.',
    'See a specialist if symptoms persist >12 weeks, recurrent acute episodes (4+/year), or loss of smell that does not return.',
    'Aggressively treat allergies and GERD. Avoid smoking and environmental irritants. Regular saline irrigations as maintenance.',
    'Chronic sinusitis is an inflammatory condition, not just an infection. Long-term management focuses on reducing inflammation rather than repeated antibiotics.',
  ),
  'nasal-polyps': ent(
    'nasal-polyps', 'Nasal Polyps', 'Polipos nasales', 'nose-sinus',
    'Benign, painless, edematous growths of the sinonasal mucosa. Associated with asthma, aspirin sensitivity (Samter\'s triad), and chronic sinusitis.',
    'Polyps arise from the ethmoid sinuses and middle meatus, composed of edematous stroma with eosinophilic infiltrate and pseudostratified epithelium.',
    ['Progressive nasal obstruction', 'Anosmia or hyposmia', 'Postnasal drip', 'Facial pressure', 'Snoring', 'Mouth breathing'],
    ['Anterior rhinoscopy and nasal endoscopy', 'CT sinuses', 'Allergy testing', 'CBC with eosinophil count', 'Consider CF testing in children'],
    'Intranasal corticosteroid sprays and budesonide irrigations. Oral steroid bursts for severe obstruction. Biologic therapies (dupilumab, omalizumab, mepolizumab) for refractory CRSwNP.',
    'Endoscopic polypectomy with FESS. Polyps recur in up to 40% — ongoing medical therapy is essential post-operatively.',
    'Daily saline irrigations. Avoid aspirin/NSAIDs if Samter\'s triad confirmed. Manage comorbid asthma aggressively.',
    'See ENT if you have persistent one-sided nasal obstruction (to exclude other diagnoses), complete loss of smell, or failed medical therapy.',
    'Long-term intranasal steroids reduce recurrence. Aspirin desensitization for Samter\'s triad. Treat underlying allergies and asthma.',
    'If you have nasal polyps with asthma and aspirin sensitivity, alert all your doctors — this triad affects treatment choices across specialties.',
  ),
  'deviated-septum': ent(
    'deviated-septum', 'Deviated Nasal Septum', 'Tabique nasal desviado', 'nose-sinus',
    'Displacement of the nasal septum from midline, present in up to 80% of people. Clinically significant when causing obstruction or recurrent issues.',
    'The nasal septum is composed of the quadrangular cartilage anteriorly, the perpendicular plate of the ethmoid superiorly, and the vomer posteroinferiorly.',
    ['Unilateral nasal obstruction', 'Recurrent sinusitis', 'Nosebleeds from the convex side', 'Noisy breathing during sleep', 'Facial pain (if spur contacts lateral wall)'],
    ['Anterior rhinoscopy', 'Nasal endoscopy', 'CT sinuses if surgery planned or coexisting sinus disease', 'Acoustic rhinometry (research)'],
    'Medical management includes nasal steroid sprays and saline irrigation to optimize airflow. Decongestants short-term only (avoid >3 days).',
    'Septoplasty is definitive treatment for symptomatic deviation. Often combined with turbinate reduction. Septorhinoplasty if external nasal deformity is also present.',
    'Nasal saline irrigation. Nasal strips at night. Sleep on the side of better airflow. Humidifier in the bedroom.',
    'See ENT if nasal obstruction significantly impacts quality of life, sleep, or exercise tolerance, or causes recurrent sinusitis.',
    'Avoid nasal trauma (wear helmets during sports). No prevention for congenital deviation.',
    'A deviated septum alone is not dangerous. Surgery is elective — pursue it only if symptoms significantly affect your daily life.',
  ),
  'allergic-rhinitis-mgmt': ent(
    'allergic-rhinitis-mgmt', 'Allergic Rhinitis Management (ENT)', 'Manejo de rinitis alergica (ORL)', 'nose-sinus',
    'ENT-focused management of allergic rhinitis, emphasizing anatomic contributors, surgical adjuncts, and refractory cases beyond allergy clinic management.',
    'The nasal turbinates (inferior, middle, superior) are bony shelves lined with erectile mucosa that warms, humidifies, and filters air. Allergic inflammation causes turbinate hypertrophy.',
    ['Chronic nasal congestion', 'Rhinorrhea (clear)', 'Sneezing paroxysms', 'Itchy nose and palate', 'Allergic shiners and nasal crease'],
    ['Nasal endoscopy to evaluate turbinates and rule out polyps', 'Skin-prick or serum-specific IgE testing', 'CT sinuses if coexisting sinusitis', 'Nasal cytology (eosinophils)'],
    'Intranasal corticosteroids are first-line. Add antihistamine spray (azelastine) for combination effect. Oral antihistamines and leukotriene inhibitors as adjuncts. Immunotherapy for long-term control.',
    'Inferior turbinate reduction (radiofrequency, submucosal resection, or microdebrider) for turbinate hypertrophy refractory to medical therapy. Posterior nasal nerve ablation.',
    'Allergen avoidance measures: HEPA filters, dust mite covers, nasal saline rinses, keeping windows closed during high-pollen seasons.',
    'See ENT if maximal medical therapy fails, nasal obstruction is anatomic (septal/turbinate), or polyps are suspected.',
    'Environmental controls, regular nasal saline irrigation, early treatment of symptoms, and allergen immunotherapy for sustained remission.',
    'Intranasal steroid sprays work best when used daily — they are not rescue medications. Point the spray laterally, away from the septum.',
  ),

  // ── Throat (5) ──────────────────────────────────────────────────────────
  'tonsillitis-abscess': ent(
    'tonsillitis-abscess', 'Tonsillitis / Peritonsillar Abscess', 'Amigdalitis / Absceso periamigdalino', 'throat',
    'Acute tonsillitis is inflammation of the palatine tonsils. Peritonsillar abscess (PTA) is the most common deep neck space infection, forming between the tonsil capsule and pharyngeal constrictors.',
    'The palatine tonsils sit in the tonsillar fossa between the anterior (palatoglossus) and posterior (palatopharyngeus) pillars. Rich lymphoid tissue makes them vulnerable to infection.',
    ['Severe sore throat (often unilateral in PTA)', 'Odynophagia', 'Trismus', 'Fever', '"Hot potato" voice', 'Uvula deviation away from abscess'],
    ['Rapid strep test and throat culture', 'Monospot if mononucleosis suspected', 'CT neck with contrast if deep space infection suspected', 'Needle aspiration of abscess (diagnostic and therapeutic)'],
    'Strep tonsillitis: penicillin or amoxicillin for 10 days. PTA: needle aspiration or incision and drainage, IV antibiotics (ampicillin-sulbactam), and pain control.',
    'Tonsillectomy for recurrent tonsillitis (Paradise criteria: 7 in 1 year, 5/year for 2 years, or 3/year for 3 years). Quinsy tonsillectomy (during abscess) or interval tonsillectomy after PTA.',
    'Salt-water gargles, cold fluids and popsicles, adequate hydration, rest. OTC analgesics (avoid aspirin in children).',
    'Seek immediate care for inability to swallow, drooling, difficulty breathing, muffled voice, or inability to open mouth fully.',
    'Good hand hygiene, avoid sharing utensils/drinks. Tonsillectomy for recurrent disease eliminates the source.',
    'A peritonsillar abscess is a true emergency. If you cannot swallow your saliva or open your mouth, go to the ER immediately.',
  ),
  'laryngitis': ent(
    'laryngitis', 'Laryngitis', 'Laringitis', 'throat',
    'Inflammation of the larynx causing hoarseness. Acute laryngitis is usually viral; chronic laryngitis (>3 weeks) has broader causes including reflux, overuse, and smoking.',
    'The larynx houses the vocal folds (true vocal cords) which vibrate to produce voice. The mucosa is pseudostratified ciliated epithelium with stratified squamous epithelium on the vocal folds.',
    ['Hoarseness or voice loss', 'Sore throat', 'Dry cough', 'Globus sensation', 'Voice fatigue', 'Throat clearing'],
    ['Laryngoscopy (flexible or rigid)', 'Stroboscopy for chronic cases', 'Voice evaluation by speech-language pathologist', 'pH/impedance study if reflux suspected'],
    'Acute: voice rest, hydration, humidification. Chronic: treat underlying cause — PPI for reflux, smoking cessation, voice therapy for muscle tension dysphonia.',
    'Microlaryngoscopy with excision if suspicious lesion is found on chronic laryngoscopy. Not typically surgical unless mass or structural pathology.',
    'Strict voice rest (not whispering — whispering strains cords). Steam inhalation. Honey in warm water. Avoid irritants (smoke, alcohol, caffeine).',
    'See a specialist if hoarseness persists >3 weeks, especially in smokers (to rule out laryngeal cancer) or if voice is critical to livelihood.',
    'Stay hydrated, avoid shouting, use amplification if speaking publicly, manage reflux, stop smoking.',
    'Whispering is actually harder on your vocal cords than speaking softly. If you need voice rest, go completely silent or write notes.',
  ),
  'dysphagia-evaluation': ent(
    'dysphagia-evaluation', 'Dysphagia Evaluation', 'Evaluacion de disfagia', 'throat',
    'Systematic evaluation of swallowing difficulty. ENT evaluates oropharyngeal dysphagia involving the mouth, pharynx, and upper esophageal sphincter.',
    'Swallowing involves oral preparatory, oral propulsive, pharyngeal, and esophageal phases. The pharynx is shared airway/foodway; the epiglottis deflects food from the larynx during swallowing.',
    ['Food sticking in throat', 'Coughing or choking during meals', 'Nasal regurgitation', 'Weight loss', 'Recurrent pneumonia', 'Wet/gurgly voice after eating'],
    ['Flexible endoscopic evaluation of swallowing (FEES)', 'Modified barium swallow (videofluoroscopy)', 'Direct laryngoscopy', 'Esophagoscopy (transnasal or rigid)', 'CT/MRI if mass suspected'],
    'Diet modification (thickened liquids, pureed foods) based on swallow study. Swallowing therapy with SLP. Treat underlying cause (reflux, neurologic condition, structural lesion).',
    'Esophageal dilation for strictures. Cricopharyngeal myotomy or botox for cricopharyngeal bar. Excision of Zenker\'s diverticulum. Medialization for unilateral vocal fold paralysis causing aspiration.',
    'Eat slowly with small bites. Sit upright during meals and for 30 minutes after. Tuck chin to chest while swallowing if recommended. Alternate solids and liquids.',
    'See a specialist for any new-onset dysphagia, especially progressive difficulty, unintentional weight loss, or food impaction.',
    'Maintain good oral hygiene. Manage reflux. Chew food thoroughly. Stay upright after eating.',
    'Dysphagia is a symptom, not a diagnosis. A thorough evaluation to find the cause is more important than simply modifying the diet.',
  ),
  'osa-surgical': ent(
    'osa-surgical', 'Obstructive Sleep Apnea (Surgical Management)', 'Apnea obstructiva del sueno (manejo quirurgico)', 'throat',
    'ENT surgical perspective on OSA when CPAP is not tolerated or anatomic obstruction is identified. Multi-level obstruction is common.',
    'Obstruction may occur at the nose, palate, tongue base, or epiglottis. The soft palate and tongue base collapse against the posterior pharyngeal wall during sleep.',
    ['Loud snoring', 'Witnessed apneas', 'Excessive daytime sleepiness', 'Morning headaches', 'Nocturia', 'Unrefreshing sleep'],
    ['Polysomnography (AHI scoring)', 'Drug-induced sleep endoscopy (DISE) to localize obstruction', 'Lateral cephalometry', 'Nasal endoscopy', 'Muller maneuver'],
    'CPAP remains first-line. Oral appliances for mild-moderate OSA. Weight loss if overweight. Positional therapy for supine-dependent OSA.',
    'UPPP (uvulopalatopharyngoplasty) for palatal obstruction. Tongue base reduction (radiofrequency, TORS). Hypoglossal nerve stimulation (Inspire). Septoplasty/turbinate reduction for nasal component. MMA (maxillomandibular advancement) for severe cases.',
    'Weight management, sleep on side, elevate head of bed, avoid alcohol and sedatives before sleep, maintain regular sleep schedule.',
    'See ENT if CPAP is intolerable, AHI remains elevated on CPAP, or anatomic obstruction (large tonsils, deviated septum, retrognathia) is identified.',
    'Weight management is the most impactful modifiable factor. Avoid alcohol within 3 hours of bedtime. Treat nasal obstruction.',
    'Sleep apnea surgery is most successful when the specific site(s) of obstruction are identified with DISE before choosing a procedure.',
  ),
  'epiglottitis': ent(
    'epiglottitis', 'Epiglottitis', 'Epiglotitis', 'throat',
    'Acute life-threatening inflammation of the epiglottis and supraglottic structures. Now more common in adults than children due to Hib vaccination.',
    'The epiglottis is a leaf-shaped elastic cartilage that covers the laryngeal inlet during swallowing. Swelling can rapidly obstruct the airway.',
    ['Severe sore throat with rapid onset', 'Muffled voice', 'Drooling', 'Dysphagia', 'Stridor', 'Tripod positioning (leaning forward)'],
    ['Lateral neck X-ray (thumbprint sign)', 'Flexible laryngoscopy in controlled setting', 'CT neck if stable and diagnosis uncertain', 'Blood cultures'],
    'Secure airway immediately (intubation or surgical airway). IV antibiotics (ceftriaxone + vancomycin). IV dexamethasone. ICU admission. Keep patient calm; do not examine the throat in children without airway readiness.',
    'Emergent tracheotomy or cricothyrotomy if intubation fails. Rarely, debridement for epiglottic abscess.',
    'None — this is a medical emergency requiring immediate hospital care.',
    'Call 911 or go to the ER immediately for sudden severe sore throat with drooling, stridor, difficulty breathing, or inability to swallow.',
    'Hib vaccination has drastically reduced pediatric epiglottitis. Immunize on schedule. Smoking cessation may reduce adult risk.',
    'Epiglottitis is rare but deadly. If an adult suddenly cannot swallow and is drooling with a severe sore throat, assume epiglottitis until proven otherwise.',
  ),

  // ── Head & Neck (4) ──────────────────────────────────────────────────────
  'thyroid-nodule-ent': ent(
    'thyroid-nodule-ent', 'Thyroid Nodule (ENT Perspective)', 'Nodulo tiroideo (perspectiva ORL)', 'head-neck',
    'ENT surgeons perform the majority of thyroid surgeries. Evaluation focuses on differentiating benign from malignant nodules and assessing recurrent laryngeal nerve function.',
    'The thyroid gland lies anterior to the trachea below the larynx. The recurrent laryngeal nerves run in the tracheoesophageal groove and innervate all intrinsic laryngeal muscles except the cricothyroid.',
    ['Palpable neck mass', 'Voice changes (RLN involvement)', 'Dysphagia', 'Sensation of neck pressure', 'Incidental finding on imaging'],
    ['Thyroid ultrasound with TI-RADS scoring', 'Fine-needle aspiration biopsy (Bethesda system)', 'TSH level', 'Pre-operative laryngoscopy to assess vocal cord function', 'Molecular testing (Afirma, ThyroSeq) for indeterminate cytology'],
    'Observation with serial ultrasound for benign-appearing nodules. Thyroid hormone suppression is no longer routinely recommended. Radiofrequency ablation for symptomatic benign nodules in select centers.',
    'Thyroid lobectomy for indeterminate/suspicious nodules or small cancers. Total thyroidectomy for larger cancers or bilateral disease. Intraoperative nerve monitoring to protect RLN.',
    'No home remedies change nodule biology. Ensure adequate iodine intake. Avoid unnecessary radiation to the neck.',
    'See ENT for nodules >1 cm, rapidly growing nodules, associated voice changes, family history of thyroid cancer, or history of neck radiation.',
    'Avoid unnecessary neck radiation, especially in childhood. Regular self-examination of the neck. Adequate dietary iodine.',
    'Most thyroid nodules are benign (>95%). Pre-operative voice assessment is essential because the nerve controlling your vocal cord runs right next to the thyroid.',
  ),
  'salivary-gland-stones': ent(
    'salivary-gland-stones', 'Salivary Gland Stones (Sialolithiasis)', 'Calculos de glandulas salivales', 'head-neck',
    'Calcium-based stones that obstruct salivary ducts, most commonly the submandibular gland (80%) due to its thicker, more alkaline secretion and upward-draining duct.',
    'The submandibular gland drains via Wharton\'s duct into the floor of mouth. The parotid drains via Stensen\'s duct opposite the upper second molar.',
    ['Intermittent swelling of the gland during meals', 'Pain worsened by eating (especially sour foods)', 'Palpable stone in floor of mouth', 'Recurrent sialadenitis', 'Purulent discharge from duct orifice'],
    ['Bimanual palpation of the floor of mouth', 'CT without contrast (best for calcified stones)', 'Ultrasound of salivary glands', 'Sialendoscopy (diagnostic and therapeutic)', 'MR sialography for non-calcified stones'],
    'Conservative management: hydration, sialogogues (sour candies, lemon drops), warm compresses, gland massage, antibiotics if infected.',
    'Sialendoscopy with basket retrieval. Transoral duct stone excision for distal stones. Lithotripsy for larger stones. Submandibular gland excision for recurrent disease or large intraglandular stones.',
    'Suck on sour candy or lemon drops to stimulate saliva flow. Warm compresses over the gland. Gentle massage from gland toward duct opening. Stay well hydrated.',
    'See a specialist if swelling does not resolve, recurrent infections, or fever develops.',
    'Stay well hydrated. Good oral hygiene. Some evidence that avoiding hard-water consumption may reduce risk.',
    'Sucking on sour candy can sometimes help a small stone pass on its own. If swelling and pain persist, a minimally invasive sialendoscopy can retrieve the stone.',
  ),
  'head-neck-cancer-screening': ent(
    'head-neck-cancer-screening', 'Head & Neck Cancer Screening', 'Deteccion de cancer de cabeza y cuello', 'head-neck',
    'ENT screening for squamous cell carcinoma of the oral cavity, oropharynx, larynx, and hypopharynx. HPV-related oropharyngeal cancer is rising in younger nonsmokers.',
    'Head and neck SCC arises from mucosal surfaces. Key subsites include the oral tongue, tonsil, base of tongue, supraglottis, glottis, and hypopharynx. Cervical lymph node drainage is predictable by site.',
    ['Non-healing oral ulcer >3 weeks', 'Persistent hoarseness >3 weeks', 'Unilateral ear pain (referred otalgia)', 'Dysphagia', 'Neck mass in an adult', 'Unexplained weight loss'],
    ['Complete head and neck exam with flexible laryngoscopy', 'Biopsy of suspicious lesions', 'CT neck with contrast / MRI', 'PET-CT for staging', 'HPV/p16 testing for oropharyngeal tumors', 'Panendoscopy under anesthesia'],
    'Treatment depends on site and stage. Early-stage: surgery or radiation alone. Advanced: combined surgery + adjuvant radiation/chemoradiation, or primary chemoradiation with surgical salvage.',
    'Transoral robotic surgery (TORS) for oropharyngeal tumors. Laser microsurgery for glottic cancers. Open procedures (partial/total laryngectomy, mandibulotomy, free flap reconstruction) for advanced disease.',
    'Monthly oral self-exam: check for sores, white/red patches, lumps. Limit alcohol. Stop tobacco in all forms.',
    'See ENT urgently for any oral lesion not healing in 3 weeks, persistent hoarseness, unilateral ear pain with normal ear exam, or a new neck mass.',
    'Stop tobacco and limit alcohol (synergistic risk). HPV vaccination. Regular dental exams with oral cancer screening. Sun protection for lip cancers.',
    'HPV vaccination prevents the most common type of oropharyngeal cancer now seen in young adults. The vaccine is recommended through age 26.',
  ),
  'neck-mass-evaluation': ent(
    'neck-mass-evaluation', 'Neck Mass Evaluation', 'Evaluacion de masa cervical', 'head-neck',
    'Systematic approach to a new neck mass. In adults, a neck mass persisting >2 weeks should be considered malignant until proven otherwise.',
    'The neck is divided into anterior and posterior triangles with predictable lymph node levels (I-VI). Mass location, consistency, and patient age guide differential diagnosis.',
    ['Palpable neck lump', 'Pain or tenderness', 'Dysphagia or voice change', 'Weight loss', 'Night sweats', 'History of tobacco/alcohol use'],
    ['Complete H&N exam with flexible laryngoscopy', 'Ultrasound with FNA biopsy', 'CT neck with contrast', 'MRI for deep or skull base lesions', 'PET-CT if primary malignancy suspected', 'Core biopsy or excisional biopsy if FNA non-diagnostic'],
    'Treatment depends on diagnosis: antibiotics for infectious lymphadenitis, observation for reactive nodes, chemotherapy/radiation/surgery for malignancy, excision for benign tumors.',
    'Excision of branchial cleft cysts, thyroglossal duct cysts, or benign tumors. Neck dissection for metastatic SCC. Excisional biopsy for lymphoma diagnosis.',
    'None recommended until diagnosis is established. Do not massage or apply heat to undiagnosed masses.',
    'Any adult with a neck mass lasting >2 weeks needs ENT evaluation. Children: seek evaluation if mass >2 cm, firm, fixed, or persists >4-6 weeks.',
    'HPV vaccination, smoking cessation, and limiting alcohol reduce head and neck cancer risk. No prevention for congenital cysts.',
    'In adults, the rule of 80s applies: 80% of non-thyroid neck masses are neoplastic, and 80% of those are malignant. Do not delay evaluation.',
  ),

  // ── Voice (3) ──────────────────────────────────────────────────────────
  'vocal-cord-nodules': ent(
    'vocal-cord-nodules', 'Vocal Cord Nodules', 'Nodulos de cuerdas vocales', 'voice',
    'Bilateral, symmetric, callous-like lesions at the junction of the anterior and middle thirds of the vocal folds, caused by chronic vocal trauma (phonotrauma).',
    'The vocal folds are layered: epithelium, lamina propria (superficial/intermediate/deep), and vocalis muscle. Nodules form in the superficial lamina propria at the point of maximal contact.',
    ['Hoarseness (breathy, rough quality)', 'Voice fatigue by end of day', 'Pitch breaks', 'Increased effort to speak', 'Reduced vocal range'],
    ['Laryngoscopy (flexible or rigid)', 'Videostroboscopy (shows incomplete glottal closure and mucosal wave changes)', 'Voice assessment (perceptual, acoustic, aerodynamic)', 'SLP evaluation'],
    'Voice therapy with a speech-language pathologist is first-line and curative in most cases. Addresses vocal hygiene, resonant voice technique, and reduction of phonotraumatic behaviors.',
    'Microlaryngoscopy with excision only if nodules persist despite adequate voice therapy (typically >6 weeks). Post-operative voice therapy is mandatory to prevent recurrence.',
    'Vocal hygiene: hydrate well (64+ oz water daily), avoid shouting/whispering, use amplification, reduce caffeine, humidify air, and rest voice when fatigued.',
    'See a laryngologist or voice-specialized ENT if hoarseness persists >3 weeks or if voice is critical to your profession (singer, teacher, lawyer).',
    'Vocal hygiene education, voice amplification for teachers, warm-up exercises for performers, hydration, and avoiding phonotraumatic behaviors.',
    'Voice therapy alone cures most vocal cord nodules. Surgery without follow-up voice therapy leads to recurrence. Patience with therapy pays off.',
  ),
  'vocal-cord-paralysis': ent(
    'vocal-cord-paralysis', 'Vocal Cord Paralysis', 'Paralisis de cuerda vocal', 'voice',
    'Immobility of one or both vocal folds from recurrent laryngeal nerve (RLN) or vagus nerve injury. Causes include surgical injury (thyroid, cardiac), viral neuritis, malignancy, and idiopathic.',
    'The RLN innervates all intrinsic laryngeal muscles except the cricothyroid (superior laryngeal nerve). Left RLN has a longer course (loops under the aortic arch), making it more vulnerable.',
    ['Breathy, weak voice', 'Vocal fatigue', 'Aspiration with liquids', 'Ineffective cough', 'Stridor (bilateral paralysis)', 'Dyspnea on exertion'],
    ['Flexible laryngoscopy (gold standard)', 'Videostroboscopy', 'CT from skull base to aortic arch to evaluate nerve course', 'Laryngeal EMG to assess prognosis', 'Modified barium swallow if aspiration concerns'],
    'Observation for 6-12 months if spontaneous recovery possible (viral, post-surgical). Voice therapy to optimize compensatory strategies. Temporary injection laryngoplasty (hyaluronic acid) as bridge.',
    'Medialization thyroplasty (type I) with or without arytenoid adduction for permanent unilateral paralysis. Injection laryngoplasty (calcium hydroxyapatite) for permanent augmentation. Tracheotomy or cordotomy/arytenoidectomy for bilateral paralysis.',
    'Chin-tuck swallowing technique to reduce aspiration. Speak in short phrases. Avoid noisy environments. Stay hydrated to keep vocal folds supple.',
    'See ENT immediately for new-onset voice change after neck/chest surgery, or if aspiration is occurring. Any unexplained vocal fold paralysis needs imaging to rule out malignancy.',
    'Careful surgical technique during thyroid/parathyroid surgery with nerve monitoring. No prevention for idiopathic cases.',
    'If your voice becomes breathy after thyroid surgery, insist on laryngoscopy to check vocal cord movement. Early intervention improves outcomes.',
  ),
  'laryngopharyngeal-reflux': ent(
    'laryngopharyngeal-reflux', 'Laryngopharyngeal Reflux', 'Reflujo laringofaringeo', 'voice',
    'Retrograde flow of gastric contents to the larynx and pharynx. Unlike classic GERD, patients often lack heartburn. Also called silent reflux or extraesophageal reflux.',
    'The upper esophageal sphincter normally prevents refluxate from reaching the larynx. The posterior larynx (arytenoids, interarytenoid area, posterior commissure) is most vulnerable to acid/pepsin injury.',
    ['Chronic throat clearing', 'Globus sensation (lump in throat)', 'Hoarseness (worse in morning)', 'Postnasal drip sensation', 'Chronic cough', 'Excess throat mucus'],
    ['Laryngoscopy showing posterior laryngeal edema, erythema, pseudosulcus', 'Reflux Symptom Index (RSI) and Reflux Finding Score (RFS)', 'pH-impedance monitoring (dual probe)', 'Esophagoscopy if alarm symptoms'],
    'Twice-daily PPI for 2-3 months (30 min before meals). Behavioral modifications are equally important. H2 blockers at bedtime. Alginate therapy (Gaviscon Advance) as adjunct.',
    'Nissen fundoplication or transoral incisionless fundoplication (TIF) for refractory, objectively confirmed reflux failing maximal medical therapy.',
    'Elevate head of bed 6 inches. Avoid eating 3 hours before bed. Small frequent meals. Avoid trigger foods (coffee, alcohol, chocolate, citrus, tomato, spicy food). Alkaline water (pH >8) may help.',
    'See ENT if symptoms persist despite 2 months of PPI therapy, or for associated voice changes, dysphagia, or weight loss.',
    'Dietary and lifestyle modifications: maintain healthy weight, avoid late-night eating, limit trigger foods, elevate head of bed, and do not lie down after meals.',
    'LPR is often misdiagnosed as allergies or sinusitis. If throat clearing and globus do not respond to allergy treatment, reflux is a likely culprit.',
  ),

  // ── Pediatric ENT (3) ───────────────────────────────────────────────────
  'ear-tubes': ent(
    'ear-tubes', 'Ear Tubes (Tympanostomy)', 'Tubos de ventilacion (timpanostomia)', 'pediatric-ent',
    'Tympanostomy tube insertion is the most common pediatric ambulatory surgery. Indicated for recurrent AOM or chronic OME causing hearing loss or speech delay.',
    'A small incision (myringotomy) is made in the tympanic membrane and a tiny ventilation tube is placed, equalizing middle-ear pressure and allowing drainage.',
    ['Recurrent ear infections (3 in 6 months or 4 in 12 months)', 'Persistent middle-ear fluid >3 months', 'Hearing loss affecting speech', 'Balance problems', 'Ear pain with flying or altitude changes'],
    ['Audiometry or OAE testing', 'Tympanometry (flat type B curve)', 'Otoscopic exam showing effusion or TM retraction', 'Speech and language assessment if delay suspected'],
    'Observation may be appropriate for OME <3 months if hearing is near normal. Autoinflation devices and nasal steroids have limited evidence.',
    'Myringotomy with tube insertion under brief general anesthesia (typically 10-15 minutes). Tubes remain 6-18 months and usually extrude spontaneously. Repeat tubes if needed; consider adenoidectomy at second tube placement.',
    'Keep ears dry during bathing (use earplugs or cotton ball with petroleum jelly). Treat tube otorrhea with prescribed otic drops rather than oral antibiotics.',
    'See ENT if child has recurrent infections despite prophylaxis, persistent hearing loss, speech delay, or fluid lasting >3 months.',
    'Breastfeeding, avoiding secondhand smoke, up-to-date vaccinations, and limiting daycare exposure during the first year.',
    'Ear tubes are safe and effective. Most children do not need water precautions for surface swimming, but check with your surgeon about diving.',
  ),
  'pediatric-tonsillectomy': ent(
    'pediatric-tonsillectomy', 'Pediatric Tonsillectomy', 'Amigdalectomia pediatrica', 'pediatric-ent',
    'Removal of the palatine tonsils in children. Most common indication has shifted from recurrent infection to sleep-disordered breathing/OSA.',
    'The palatine tonsils are part of Waldeyer\'s ring (along with adenoids, tubal, and lingual tonsils). Peak lymphoid hypertrophy occurs at ages 3-7.',
    ['Snoring with witnessed pauses', 'Mouth breathing', 'Restless sleep', 'Enuresis', 'Behavioral issues and poor school performance', 'Recurrent strep throat infections'],
    ['Sleep study (polysomnography) for OSA indication', 'History meeting Paradise criteria for infection indication', 'Pre-op labs if bleeding disorder suspected', 'Drug-induced sleep endoscopy in Down syndrome patients'],
    'Watchful waiting for mild SDB. Intranasal steroids and montelukast may temporarily reduce adenotonsillar size. Weight management.',
    'Tonsillectomy (with or without adenoidectomy). Techniques: cold steel, electrocautery, coblation, microdebrider intracapsular tonsillectomy. Intracapsular (partial) tonsillectomy has less pain and faster recovery for OSA indication.',
    'Post-op: cold liquids, soft foods for 10-14 days, adequate pain control (acetaminophen, ibuprofen — avoid in <6 months post-op per some protocols). No aspirin. Encourage hydration.',
    'See ENT for recurrent tonsillitis meeting Paradise criteria, tonsillar hypertrophy causing OSA, peritonsillar abscess, or suspicion of tonsillar malignancy (unilateral enlargement).',
    'Good hand hygiene and prompt strep treatment reduce infection frequency but cannot prevent tonsillar hypertrophy.',
    'Post-tonsillectomy bleeding can occur up to 2 weeks after surgery, peaking around days 5-7. Go to the ER immediately for any bleeding from the throat.',
  ),
  'congenital-hearing-loss': ent(
    'congenital-hearing-loss', 'Congenital Hearing Loss', 'Hipoacusia congenita', 'pediatric-ent',
    'Hearing loss present at birth, affecting 1-3 per 1,000 newborns. Approximately 50% genetic (GJB2/connexin 26 most common) and 50% acquired or idiopathic.',
    'The auditory system develops from the otic placode by gestational week 3. The cochlea reaches adult configuration by week 25. Myelination of auditory pathways continues postnatally.',
    ['Failed newborn hearing screen', 'No startle response to loud sounds', 'Lack of babbling by 9 months', 'Speech delay', 'Not responding to name by 12 months', 'Family history of childhood hearing loss'],
    ['OAE and ABR testing (newborn screen)', 'Diagnostic ABR under sedation', 'Genetic testing (GJB2, SLC26A4, mitochondrial)', 'CMV testing (urine PCR in first 3 weeks)', 'CT temporal bone and MRI inner ear', 'Ophthalmology and cardiology evaluation for syndromic causes'],
    'Early amplification with hearing aids by 6 months of age. Early intervention services including speech therapy and sign language as appropriate. Monitoring for progressive loss.',
    'Cochlear implantation for severe-to-profound bilateral SNHL not benefiting from hearing aids (FDA approved from 9 months). Bone-anchored hearing aids for conductive or mixed loss. Atresia repair for select cases.',
    'Rich language environment (spoken, signed, or both). Read to children daily. Minimize background noise during communication. Join family support organizations (Hands & Voices).',
    'See pediatric ENT/audiologist immediately if newborn hearing screen is failed/not completed, or at any age if speech/language milestones are delayed.',
    'Genetic counseling for at-risk families. Avoid ototoxic medications during pregnancy. Rubella vaccination before pregnancy. CMV prevention education.',
    'Early identification (by 1 month), diagnosis (by 3 months), and intervention (by 6 months) — the 1-3-6 guideline — gives children the best chance for normal language development.',
  ),
};

// ---------------------------------------------------------------------------
// Access helpers
// ---------------------------------------------------------------------------

/** Retrieve a single ENT entry by its id, or undefined if not found. */
export function getENTEntry(id: string): ENTEntry | undefined {
  return ENT_ENTRIES[id];
}

/** Search entries whose name, summary, symptoms, or anatomy match the query (case-insensitive). */
export function searchENT(query: string): ENTEntry[] {
  const q = query.toLowerCase();
  return Object.values(ENT_ENTRIES).filter((e) => {
    return (
      e.name.toLowerCase().includes(q) ||
      e.nameEs.toLowerCase().includes(q) ||
      e.summary.toLowerCase().includes(q) ||
      e.anatomy.toLowerCase().includes(q) ||
      e.symptoms.some((s) => s.toLowerCase().includes(q))
    );
  });
}

/** Get all entries belonging to a specific subcategory. */
export function getENTBySubcategory(sub: ENTEntry['subcategory']): ENTEntry[] {
  return Object.values(ENT_ENTRIES).filter((e) => e.subcategory === sub);
}

/** Total number of entries in the database. */
export function getENTCount(): number {
  return Object.keys(ENT_ENTRIES).length;
}
