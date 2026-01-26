import { EducationalContent } from '../types';

export const voiceContent: EducationalContent = {
  id: 'ent-voice',
  type: 'topic',
  name: 'Voice and Laryngeal Disorders',
  alternateNames: ['Laryngology', 'Voice Disorders', 'Hoarseness'],

  levels: {
    1: {
      level: 1,
      summary: 'Your voice box (larynx) contains vocal cords that vibrate when you speak. Voice problems can make your voice sound raspy, weak, or different than normal.',
      explanation: `Your voice is produced by your vocal cords, which are two small bands of tissue in your throat. When you speak, air from your lungs makes the vocal cords vibrate, creating sound. When your vocal cords are swollen or damaged, your voice can sound different.

**Common Voice Problems:**

1. **Hoarseness (Dysphonia)** - When your voice sounds raspy, breathy, or strained. Most often caused by laryngitis from a cold or overusing your voice.

2. **Laryngitis** - Swelling of the vocal cords from infection, overuse, or irritation. Makes your voice sound raspy or makes you lose your voice temporarily.

3. **Vocal Cord Nodules** - Small calluses that form on the vocal cords from overuse, common in singers, teachers, and others who use their voice a lot.

4. **Vocal Cord Polyps** - Small growths on the vocal cords that can cause hoarseness and voice changes.

5. **Laryngopharyngeal Reflux (LPR)** - When stomach acid comes up and irritates the throat and vocal cords.

**Causes of Voice Problems:**
- Colds and respiratory infections
- Yelling or straining your voice
- Smoking
- Acid reflux
- Allergies
- Dehydration

**Keeping Your Voice Healthy:**
- Drink plenty of water
- Don't smoke
- Rest your voice when it's tired
- Avoid yelling or throat clearing
- Use a microphone when speaking to groups

**When to See a Doctor:**
- Hoarseness lasting more than 2-3 weeks
- Difficulty breathing
- Coughing up blood
- Pain when speaking or swallowing
- Lump in the neck`,
      keyTerms: [
        { term: 'larynx', definition: 'The voice box, located in your throat' },
        { term: 'vocal cords', definition: 'Two bands of tissue in the larynx that vibrate to make sound' },
        { term: 'hoarseness', definition: 'When your voice sounds rough, raspy, or strained' },
        { term: 'laryngitis', definition: 'Swelling of the vocal cords making your voice sound raspy' },
        { term: 'nodules', definition: 'Small calluses on the vocal cords from overuse' },
      ],
      analogies: [
        'Your vocal cords are like the reed in a musical instrument - they vibrate to make sound.',
        'Vocal cord nodules are like calluses on your hands - they develop from repeated irritation.',
      ],
      examples: [
        'Cheerleaders often get hoarse from yelling loudly at games.',
        'Teachers may develop voice problems from speaking all day without proper vocal rest.',
      ],
      patientCounselingPoints: [
        'Rest your voice when you have laryngitis - whispering can actually strain your voice more than speaking softly.',
        'Drink plenty of water to keep your vocal cords lubricated.',
        'If hoarseness lasts more than 3 weeks, see a doctor to check for serious problems.',
      ],
    },

    2: {
      level: 2,
      summary: 'Voice disorders encompass a range of conditions affecting the larynx and vocal cords, including hoarseness, laryngitis, vocal cord lesions (nodules, polyps), and paralysis. Understanding the causes and proper voice care is essential for treatment and prevention.',
      explanation: `The larynx (voice box) houses the vocal cords and is responsible for voice production. Disorders of the larynx can significantly impact communication and quality of life.

## Hoarseness (Dysphonia)

**Description:**
- Abnormal voice quality: Raspy, breathy, strained, weak
- Most common symptom of laryngeal disorders
- Can be acute (sudden onset) or chronic (long-term)

**Common Causes:**
- Acute laryngitis: Viral infection, vocal strain
- Chronic laryngitis: Smoking, reflux, allergies
- Vocal cord lesions: Nodules, polyps, cysts
- Vocal cord paralysis: Nerve damage
- Laryngeal cancer: Tobacco and alcohol use

**Red Flag Symptoms:**
- Hoarseness lasting more than 3 weeks
- Difficulty breathing
- Coughing up blood
- Pain when speaking or swallowing
- Difficulty swallowing
- Lump in the neck

## Laryngitis

**Acute Laryngitis:**
- Usually viral (cold, flu)
- Vocal strain from overuse
- Symptoms: Hoarseness, voice loss, throat discomfort
- Treatment: Voice rest, hydration
- Usually resolves in 1-2 weeks

**Chronic Laryngitis:**
- Lasts more than 3 weeks
- Causes: Smoking, acid reflux, allergies, overuse
- Requires identifying and treating underlying cause
- May require voice therapy

## Vocal Cord Lesions

**Vocal Cord Nodules:**
- Callus-like growths on vocal cords
- Bilateral (both cords)
- From vocal abuse/misuse
- Common in: Singers, teachers, cheerleaders
- Treatment: Voice therapy, surgery rarely needed

**Vocal Cord Polyps:**
- Fluid-filled sacs or growths
- Usually unilateral (one cord)
- Can be from vocal trauma or hemorrhage
- Treatment: Surgical removal often required

**Vocal Cord Cysts:**
- Fluid-filled sacs under the vocal cord surface
- Can be congenital or acquired
- Treatment: Surgical removal

## Vocal Cord Paralysis

**Description:**
- One or both vocal cords cannot move properly
- Causes nerve damage to recurrent laryngeal nerve

**Causes:**
- Surgery: Thyroid, neck, chest surgery
- Stroke or brain injury
- Tumors: Lung, thyroid, throat
- Viral infections
- Unknown (idiopathic)

**Symptoms:**
- Breathy voice
- Voice weakness
- Choking when drinking
- Breathing difficulty (if both cords affected)

## Laryngopharyngeal Reflux (LPR)

**Description:**
- Stomach acid comes up and irritates throat
- Different from typical GERD
- Acid reaches throat and vocal cords

**Symptoms:**
- Chronic hoarseness
- Throat clearing
- Lump sensation in throat
- Chronic cough
- Post-nasal drip

**Treatment:**
- Acid-reducing medications
- Diet changes
- Avoid eating before bedtime
- Elevate head of bed

## Spasmodic Dysphonia

**Description:**
- Neurological voice disorder
- Involuntary spasms of vocal cords
- Causes voice to break or sound strained

**Types:**
- Adductor type: Strained, strangled voice
- Abductor type: Breathy, whispery voice

**Treatment:**
- Botox injections into vocal cords
- Voice therapy

## Professional Voice Users

**People at Higher Risk:**
- Singers, actors, broadcasters
- Teachers, coaches, clergy
- Salespeople, customer service

**Voice Care:**
- Proper vocal technique
- Regular voice warm-ups
- Adequate hydration
- Vocal rest when needed
- Microphone use for extended speaking
- Avoid throat clearing (sip water instead)`,
      keyTerms: [
        { term: 'larynx', definition: 'Voice box containing vocal cords, located in the neck', pronunciation: 'LAR-inks' },
        { term: 'dysphonia', definition: 'Medical term for hoarseness or voice disorder', pronunciation: 'dis-FOH-nee-uh' },
        { term: 'laryngitis', definition: 'Inflammation of the larynx causing hoarseness', pronunciation: 'lar-in-JYE-tis' },
        { term: 'nodules', definition: 'Benign callus-like growths on vocal cords from overuse' },
        { term: 'polyps', definition: 'Fluid-filled growths on vocal cords' },
        { term: 'vocal cord paralysis', definition: 'Inability of vocal cord to move due to nerve damage' },
        { term: 'LPR', definition: 'Laryngopharyngeal reflux - acid irritating the throat and vocal cords' },
        { term: 'recurrent laryngeal nerve', definition: 'Nerve controlling vocal cord movement', pronunciation: 'luh-RIN-jent' },
      ],
      analogies: [
        'The vocal cords work like the strings on a violin - they need proper tension to vibrate correctly.',
        'LPR is like heartburn in your throat - the acid irritates your voice box instead of just your chest.',
      ],
      patientCounselingPoints: [
        'Voice rest means not talking at all, not even whispering, as whispering can strain the vocal cords.',
        'Drink 6-8 glasses of water daily to keep your vocal cords hydrated.',
        'If you use your voice professionally, consider working with a voice therapist to learn proper technique.',
        'See a doctor if hoarseness lasts more than 3 weeks - this could be a sign of cancer.',
      ],
    },

    3: {
      level: 3,
      summary: 'Laryngeal disorders encompass a spectrum from self-limited acute laryngitis to complex neuromuscular dysfunction and neoplastic disease. Systematic evaluation including laryngoscopy, stroboscopy, and voice assessment enables accurate diagnosis and targeted management of voice disorders.',
      explanation: `## Laryngeal Anatomy

**Cartilaginous Framework:**
- Thyroid cartilage: Largest, protects anterior larynx
- Cricoid cartilage: Complete ring, foundation of larynx
- Arytenoid cartilages: Mobile, attach to vocal cords
- Epiglottis: Elastic cartilage, protects airway during swallowing
- Corniculate and cuneiform cartilages: Support aryepiglottic folds

**Membranous Structures:**
- True vocal cords (folds): Vibrating margin for phonation
- False vocal cords (vestibular folds): Superior to true cords, protective
- Aryepiglottic folds: Lateral borders of laryngeal inlet
- Ventricles: Space between true and false cords

**Musculature:**
- Posterior cricoarytenoid: ONLY cord abductor (critical for breathing)
- Lateral cricoarytenoid: Cord adductor
- Interarytenoid: Cord adductor, only unpaired muscle
- Thyroarytenoid: Cord tensor, body of vocal cord
- Cricothyroid: Cord tensing (pitch elevation)
- Thyroarytenoid/Vocalis: Fine-tuning of tension

**Innervation:**
- Recurrent laryngeal nerve: Adduction/abduction (all muscles except cricothyroid)
- Superior laryngeal nerve: Sensory above cords, motor to cricothyroid
- Left RLN: Loops under aortic arch
- Right RLN: Loops under subclavian artery

## Voice Production Mechanism

**Phonatory Physiology:**
- Subglottic pressure: From lungs, drives vocal fold vibration
- Glottic closure: Vocal folds must close completely
- Mucosal wave: Travels superiorly from subglottis
- Fundamental frequency (F0): Determines pitch
- Harmonics: Overtones determining voice quality

**Vocal Fold Vibration Cycle:**
1. Closed phase: Vocal folds closed, subglottic pressure builds
2. Opening phase: Bottom of folds opens first
3. Open phase: Airflow rushes through
4. Closing phase: Bernoulli effect draws folds back together

## Laryngitis

**Acute Laryngitis:**
- Viral: Rhinovirus, influenza, parainfluenza, RSV
- Bacterial: Secondary infection, rare
- Vocal abuse/misuse: Excessive use, improper technique
- Environmental: Irritants, smoke, dry air
- Clinical: Erythema, edema of vocal folds, reduced vibration
- Treatment: Voice rest (absolute for 2-3 days severe cases), hydration, humidification

**Chronic Laryngitis:**
- Smoking: Reversible initially, permanent with continued use
- LPR: Posterior commissure hypertrophy, pseudosulcus
- Allergic rhinitis: Postnasal drip, throat clearing
- Environmental exposures: Chemicals, dust
- Vocal abuse: Chronic muscle tension dysphonia

## Vocal Fold Lesions

**Vocal Fold Nodules:**
- Pathology: Fibrous tissue deposition at midpoint of membranous vocal fold
- Bilateral: Symmetric lesions at same location
- Mechanism: Repeated trauma (collision) during phonation
- Associated with: Vocal abuse/misuse
- Treatment: Voice therapy first-line, surgery for refractory cases
- Prevention: Proper vocal technique, hydration

**Vocal Fold Polyps:**
- Pathology: Gelatinous edema, hemorrhage, or organized fibrous tissue
- Usually unilateral: May be pedunculated or broad-based
- Mechanism: Acute vocal trauma (hemorrhagic) or chronic irritation
- Location: Variable, but often at midpoint of vocal fold
- Treatment: Microlaryngeal surgery, voice therapy
- Histology: Vascular, with hemosiderin if hemorrhagic

**Vocal Fold Cysts:**
- Mucus retention cyst: Obstruction of gland
- Epidermoid inclusion cyst: Trapped epithelial cells
- Subepithelial location: Elevates mucosa, affects vibration
- Treatment: Surgical removal with mucosal preservation
- Voice therapy: Post-op to prevent recurrence

**Reinke's Edema:**
- Polypoid degeneration of Reinke's space
- Bilateral, usually in smokers
- Deep, hoarse voice
- May require surgery (decortication) and smoking cessation

**Granuloma:**
- Posterior: Vocal process of arytenoid
- Causes: Intubation trauma, LPR, throat clearing
- Treatment: PPI, voice therapy, surgery (high recurrence)

## Vocal Fold Paralysis/Immobil

**Etiologies:**
- Iatrogenic: Thyroidectomy (most common), neck dissection, cardiac surgery
- Neoplastic: Thyroid, lung, esophageal tumors
- Neurologic: Stroke, brain injury, ALS, myasthenia gravis
- Idiopathic: Viral neuritis (most common unilateral)
- Traumatic: Neck injury

**Classification:**
- Unilateral vs bilateral
- Paramedian vs lateral position
- Abductor vs adductor preference

**Unilateral Paralysis:**
- Glottic gap: Air escape during phonation
- Breathiness, weak voice
- Aspiration risk: If posterior gap
- Compensation: Contralateral cord hypertrophy, medialization

**Bilateral Paralysis:**
- Airway obstruction: Paramedian position
- Stridor, respiratory distress
- May require tracheostomy
- Treatment: Cordotomy, arytenoidectomy, reinnervation

**Vocal Fold Paresis:**
- Weakness with some mobility
- Difficult to diagnose
- Stroboscopy and EMG helpful

## Neuromuscular Voice Disorders

**Spasmodic Dysphonia:**
- Adductor type: Intermittent adductor spasms, strained-strangled voice
- Abductor type: Abductor spasms, breathy voice breaks
- Mixed type: Features of both
- Pathogenesis: Basal ganglia dysfunction, likely dystonia
- Treatment: Botox injections every 3-4 months

**Muscle Tension Dysphonia:**
- Hyperfunctional vocal patterns
- Anterior-posterior squeezing, false cord phonation
- Often secondary to other laryngeal pathology
- Treatment: Voice therapy, address underlying cause

**Tremor:**
- Essential tremor, Parkinsonian tremor
- Regular oscillation of vocal folds
- Treatment: Beta blockers, Botox, voice therapy

**Puberphonia:**
- Persistently high pitch in males during puberty
- Failure to lengthen/lower larynx
- Treatment: Voice therapy to lower pitch

## Laryngeal Papillomatosis

**Etiology:**
- HPV types 6 and 11
- Juvenile onset: Vertical transmission from mother
- Adult onset: Sexual transmission

**Clinical:**
- Exophytic lesions, wart-like appearance
- Hoarseness, stridor in children
- Recurrent nature, may require multiple procedures

**Treatment:**
- Surgical removal: Microlaryngeal debridement, laser
- Adjuvant: Cidofovir, bevacizumab (anti-VEGF)
- HPV vaccine: Prevention of new infections

## Diagnostic Evaluation

**Laryngoscopy:**
- Flexible fiber-optic: Office-based, dynamic assessment
- Rigid telescope: Superior magnification, requires positioning
- Mirror examination: Limited use, now largely historical

**Stroboscopy:**
- Slow-motion view of vocal fold vibration
- Essential for evaluating mucosal wave
- Detects subtle lesions, submucosal pathology
- Assesses vibratory characteristics: Amplitude, symmetry, periodicity

**Voice Assessment:**
- GRBAS scale: Grade, Roughness, Breathiness, Asthenia, Strain
- Voice Handicap Index (VHI): Patient-reported outcome
- Acoustic analysis: Fundamental frequency, jitter, shimmer

**Electromyography:**
- Differentiates paralysis vs fixation
- Prognostic for recovery
- Used for guiding reinnervation surgery

**Imaging:**
- CT: Cartilage assessment, thyroid cartilage invasion
- MRI: Soft tissue characterization, deep extension
- Ultrasound: Vocal fold mobility assessment`,
      keyTerms: [
        { term: 'mucosal wave', definition: 'Traveling wave of vocal fold mucosa during phonation, essential for voice production' },
        { term: 'Reinke\'s space', definition: 'Superficial layer of lamina propria, potential space that can fill with fluid in Reinke\'s edema' },
        { term: 'stroboscopy', definition: 'Imaging technique creating slow-motion view of vocal fold vibration' },
        { term: 'spasmodic dysphonia', definition: 'Focal dystonia of laryngeal muscles causing voice breaks' },
        { term: 'adductor spasmodic dysphonia', definition: 'SD subtype with involuntary vocal cord closing causing strained voice' },
        { term: 'muscle tension dysphonia', definition: 'Hyperfunctional voice pattern with excessive laryngeal muscle tension' },
        { term: 'anterior commissure', definition: 'Anterior junction of vocal cords at thyroid cartilage' },
        { term: 'posterior commissure', definition: 'Posterior aspect of glottis, common site for granulomas and LPR changes' },
      ],
      clinicalNotes: `Hoarseness lasting >3 weeks is considered a red flag requiring visualization of the larynx to exclude malignancy. The posterior cricoarytenoid muscle is the ONLY vocal cord abductor - bilateral paralysis causes airway obstruction that may require emergency intervention. Stroboscopy is essential for evaluating submucosal lesions like cysts that may not be visible on routine laryngoscopy.`,
      patientCounselingPoints: [
        'Complete voice rest means not talking at all, including whispering, for 2-3 days for severe acute laryngitis.',
        'Smoking cessation is critical for voice health - it causes Reinke\'s edema and is the major risk factor for laryngeal cancer.',
        'Professional voice users should consider regular voice check-ups and work with a voice therapist.',
        'Acid reflux affecting the throat (LPR) often causes throat clearing more than heartburn.',
      ],
    },

    4: {
      level: 4,
      summary: 'Voice production requires complex coordination of respiratory, phonatory, and resonatory systems. Disorders can arise at any level - from central neural circuits to peripheral neuromuscular junctions to the vibrating vocal fold edge. Advanced understanding of these mechanisms informs precise diagnosis and targeted interventions.',
      explanation: `## Central Control of Voice

**Central Pathways:**
- Primary motor cortex (lateral precentral gyrus): Laryngeal motor control
- Premotor cortex: Planning and sequencing
- Anterior cingulate: Volitional control
- Basal ganglia: Motor patterns, modulation
- Thalamus: Sensory integration
- Cerebellum: Timing and coordination

**Descending Pathways:**
- Corticobulbar tracts: To nucleus ambiguus
- Bilateral innervation: Most laryngeal muscles
- Right hemisphere: Dominant for prosody and emotional content
- Left hemisphere: Dominant for linguistic content

**Nucleus Ambiguus:**
- Location: Medulla, ventrolateral
- Motor neurons: Pharynx, larynx, upper esophagus
- Cranial nerves IX, X, XI origins
- Somatotopic organization: Different neuron pools for different muscles

## Molecular Aspects of Vocal Fold Function

**Vocal Fold Structure (Layered Model):**
1. Epithelium: Stratified squamous, protective barrier
2. Basement membrane zone: Anchors epithelium, limits spread
3. Superficial layer of lamina propria (Reinke's space): Loose extracellular matrix, critical for vibration
4. Intermediate layer: Elastin fibers, moderate stiffness
5. Deep layer: Collagen fibers, high stiffness
6. Thyroarytenoid muscle: Body of vocal fold

**Extracellular Matrix Composition:**
- Hyaluronic acid: Viscosity, pliability, shock absorption
- Decorin, biglycan: Collagen organization
- Elastin: Elastic recoil
- Fibronectin: ECM organization
- Alterations in pathology: Fibrosis, scarring

**Vocal Fold Scarring:**
- Disorganized collagen deposition
- Reduced hyaluronic acid
- Increased stiffness
- Diminished mucosal wave
- Treatment challenges: Limited regeneration

## Neuromuscular Junction and Ion Channels

**Neuromuscular Transmission:**
- Acetylcholine release: Calcium-dependent exocytosis
- Postsynaptic receptors: Nicotinic (muscle-type)
- Acetylcholinesterase: Terminates signal
- Disorders: Myasthenia gravis, Lambert-Eaton, botulism

**Ion Channel Function:**
- Sodium channels: Action potential initiation
- Potassium channels: Repolarization
- Calcium channels: Transmitter release, muscle contraction
- Channelopathies: Paroxysmal dysphonia, episodic laryngospasm

## Biomechanics of Phonation

**Myoelastic-Aerodynamic Theory:**
- Myoelastic: Vocal fold tension and elasticity
- Aerodynamic: Subglottic pressure and airflow
- Interaction: Creates self-sustaining oscillation

**Glottal Flow Parameters:**
- Phonation threshold pressure: Minimum pressure to initiate vibration
- Glottal flow waveform: Shape reflects vocal closure
- Mucosal wave propagation: Traveling wave from bottom to top
- Vertical phase difference: Critical for sound generation

**Source-Filter Theory:**
- Source: Glottal sound generation
- Filter: Vocal tract resonance (formants)
- Interaction: Complex interplay determines final acoustic output

## Vocal Fatigue and Overuse

**Physiologic Changes:**
- Increased phonation threshold pressure
- Reduced mucosal wave amplitude
- Vocal fold edema: Capillary leak
- Lactic acid accumulation: Muscle fatigue
- Reduced efficiency: Increased effort for same output

**Recovery:**
- Hydration: Systemic and topical
- Voice rest: Reduced use
- Anti-inflammatory measures: Steroids for acute cases
- Muscle re-education: Voice therapy

## Advanced Laryngeal Imaging

**High-Speed Videoendoscopy:**
- Captures true vocal fold vibration
- Thousands of frames per second
- Overcomes stroboscopic limitations (asymmetry)
- Research tool currently, limited clinical use

**Optical Coherence Tomography:**
- Cross-sectional imaging of tissue layers
- Detects subepithelial pathology
- Microscopic resolution (~10 micrometers)
- Potential for early cancer detection

**Narrow Band Imaging:**
- Enhanced visualization of vasculature
- Superficial capillary patterns
- Distinguishes benign vs malignant lesions
- ICAP (International Cooperative Working Group) classification

**Laser-Based Therapies:**
- CO2 laser: Precise ablation, hemostasis
- Pulsed dye laser (PDL): Vascular lesions
- KTP laser: Office-based treatment
- Thulium laser: Alternative to KTP

## Surgical Approaches

**Microlaryngeal Surgery:**
- Microsuspension laryngoscopy: Direct visualization
- Microscopic instrumentation: Precision
- Cold steel: Sharp dissection, minimizes thermal damage
- Laser applications: Precise ablation

**Phonosurgery Principles:**
- Mucosal preservation: Maximizes voice outcome
- Microflap technique: Elevate, excise, replace
- Submucosal infusion: Separates planes
- Steroid injection: Reduce scarring

**Medialization Procedures:**
- Type I thyroplasty: Silastic implant medialization
- Arytenoid adduction: Rotates arytenoid for posterior glottis
- Fat injection: Temporary medialization
- Calcium hydroxylapatite: Longer lasting injection

**Reinnervation Surgery:**
- Ansa cervicalis to RLN: For unilateral paralysis
- Nerve-muscle pedicle: Alternative technique
- Time window: Within 2 years for best results
- Outcomes: Improved strength and tone over time

## Laryngeal Cancer Epidemiology

**Risk Factors:**
- Tobacco: Dose-response relationship
- Alcohol: Synergistic with tobacco
- HPV 16/18: Increasing incidence in oropharynx, some larynx
- Occupational: Asbestos, chemicals, metalworking
- Nutritional: Low fruits and vegetables

**Anatomic Subsites:**
- Supraglottis: Rich lymphatic, early nodal spread
- Glottis: Poor lymphatic, late nodal spread
- Subglottis: Rare, circumferential spread, cricothyroid invasion

**Staging Considerations:**
- T1: Limited to subsite, normal mobility
- T2: Adjacent subsite involvement or impaired mobility
- T3: Fixed cord
- T4: Cartilage invasion or extralaryngeal spread

## Voice Therapy Techniques

**Resonant Voice:**
- Easy voicing with forward focus
- Reduces impact forces
- Improves efficiency

**Flow Phonation:**
- Continuous airflow during phonation
- Reduces glottal closure force
- Helpful for muscle tension dysphonia

**Vocal Function Exercises:**
- Semi-occluded tract exercises
- Stretch and contract
- Power, range, and flexibility training

**Manual Therapy:**
- Circum-laryngeal massage
- Myofascial release
- Reduces muscle tension`,
      keyTerms: [
        { term: 'myoelastic-aerodynamic theory', definition: 'Theory explaining vocal fold vibration through interaction of muscle elasticity and airflow' },
        { term: 'phonation threshold pressure', definition: 'Minimum subglottic pressure required to initiate vocal fold vibration' },
        { term: 'source-filter theory', definition: 'Voice production model separating glottal source from vocal tract filter' },
        { term: 'type I thyroplasty', definition: 'Surgical medialization of paralyzed vocal cord using implant' },
        { term: 'ICAP classification', definition: 'International Cooperative Working Group classification of vascular patterns in laryngeal lesions' },
        { term: 'ansa cervicalis transfer', definition: 'Reinnervation procedure for unilateral vocal fold paralysis' },
        { term: 'semi-occluded tract exercises', definition: 'Voice therapy technique with partial airway closure (straw phonation, lip trills)' },
      ],
      clinicalNotes: `HPV-related oropharyngeal cancer incidence has increased dramatically, but HPV-related laryngeal cancer remains less common. The layered microstructure of the vocal folds is essential for normal vibration - damage to the superficial layer (Reinke's space) causes permanent voice changes. Stroboscopy can detect subtle abnormalities missed by white light laryngoscopy, particularly early malignancy and submucosal cysts.`,
    },

    5: {
      level: 5,
      summary: 'Contemporary laryngology integrates advanced diagnostics, minimally invasive therapeutics, voice rehabilitation, and multidisciplinary cancer care. Evidence-based management emphasizes voice preservation, functional outcomes, and quality of life across the spectrum of benign and malignant laryngeal disorders.',
      explanation: `## Clinical Practice Guidelines

**Hoarseness (Dysphonia) - AAO-HNS (2018):**

*Key Recommendations:*
- Hoarseness >3 weeks: Visualize larynx (Strong Recommendation)
- Anti-reflux medication: Only if LPR signs present (Recommendation)
- Steroids: NOT recommended for primary treatment (Recommendation against)
- Antibiotics: NOT recommended without evidence of bacterial infection (Recommendation against)
- Imaging: CT/MRI only if mass identified or suspicion of malignancy (Recommendation)
- Voice therapy: First-line for many benign causes (Recommendation)
- Surgery: Only after failed conservative management (Recommendation)

**Red Flags Requiring Urgent Evaluation:**
- Progressive hoarseness
- Dysphagia or odynophagia
- Otalgia (referred ear pain)
- Hemoptysis
- Neck mass
- Weight loss
- Stridor or respiratory distress

## Diagnostic Innovations

**Office-Based Procedures:**
- Transnasal flexible laryngoscopy: Standard of care
- Narrow band imaging (NBI): Improved lesion detection
- Stroboscopy: Essential for vibratory assessment
- Laryngeal electromyography: Prognostic value

**Advanced Imaging Indications:**
- Suspected malignancy staging
- Cartilage invasion assessment
- Deep tissue extension
- Surgical planning
- Post-treatment surveillance

**Biomarkers:**
- p16: Surrogate marker for HPV
- EGFR: Prognostic significance
- COX-2: Potential therapeutic target
- Emerging: Molecular signatures for treatment response

## Therapeutic Advances

**KTP Laser Therapy:**
- Office-based treatment
- Selective vascular targeting
- Applications: Papilloma, vascular lesions, selected malignancies
- Minimal tissue damage
- Can be repeated

**PDL (Pulsed Dye Laser):**
- Hemoglobin absorption
- Vascular lesions
- Office-based, minimal discomfort

**Injection Laryngoplasty:**
- Office or OR procedure
- Materials: Calcium hydroxylapatite (Radiesse) preferred
- Duration: 12-24 months typically
- Improves voice and prevents aspiration

**Botulinum Toxin for SD:**
- EMG-guided injection
- Dose titration
- Interval: 3-4 months
- Side effects: Breathiness, swallowing difficulty

## Laryngeal Cancer Management

**Early Glottic Cancer (T1-T2):**
- Radiotherapy: Voice preservation, equivalent control
- Transoral laser microsurgery: Organ preservation
- Open partial laryngectomy: Historical, limited current use
- Selection: Patient preference, tumor characteristics, expertise

**Advanced Laryngeal Cancer:**
- Organ preservation protocols: Chemo + RT
- Total laryngectomy: When organ preservation not feasible
- Neck dissection: N+ disease or high-risk N0
- Reconstruction: Free tissue transfer for pharyngectomy defects

**Rehabilitation:**
- Voice prosthesis (Blom-Singer): After total laryngectomy
- Esophageal speech: Requires training
- Electrolarynx: Mechanical alternative
- Swallowing rehabilitation: Critical for QoL

## Professional Voice Care

**Voice Wellness Programs:**
- Hydration: 2-3 liters water daily
- Vocal rest: Strategic, not absolute
- Warm-up and cool-down: For extensive voice use
- Amplification: Reduce vocal load
- Environmental modifications: Humidification, noise reduction

**Voice Therapy Indications:**
- Muscle tension dysphonia
- Vocal fold nodules
- Post-surgical rehabilitation
- Gender-affirming voice training
- Transgender voice modification

**Performance Optimization:**
- Resonant voice training
- Belting technique for singers
- Stamina building
- Injury prevention

## Outcomes and Quality Measures

**Voice-Related Quality of Life:**
- VHI-10 (Voice Handicap Index): 10-item validated instrument
- VHI-30: More detailed assessment
- V-RQQL: Voice-related quality of life
- Patient satisfaction: Primary outcome measure

**Acoustic Measures:**
- Jitter: Frequency perturbation
- Shimmer: Amplitude perturbation
- Noise-to-harmonics ratio (NHR)
- Cepstral peak prominence (CPP)

**Aerodynamic Measures:**
- Maximum phonation time (MPT)
- Phonation threshold pressure (PTP)
- Glottal flow rate
- Subglottic pressure

## Multidisciplinary Care

**Laryngology Team:**
- Laryngologist: Medical/surgical management
- Speech-language pathologist: Voice therapy
- Singing voice specialist: Professional voice users
- Neurologist: Movement disorders
- Gastroenterologist: Reflux management
- Pulmonology: Airway comorbidity
- Radiology: Imaging interpretation
- Pathology: Tissue diagnosis

**Special Populations:**
- Elderly: Presbyphonia, age-related changes
- Children: Congenital disorders, trauma
- Professional voice users: Performance demands
- Gender-diverse: Voice communication needs

## Future Directions

**Tissue Engineering:**
- Scaffold design for vocal fold replacement
- Stem cell therapies for regeneration
- Biomaterials for injection

**Gene Therapy:**
- RRP: HPV-targeted approaches
- Genetic voice disorders
- Personalized medicine

**Neuromodulation:**
- Laryngeal pacing for paralysis
- Central stimulation for SD
- Biofeedback systems

**Artificial Intelligence:**
- Automated voice assessment
- Cancer detection from voice samples
- Remote monitoring applications`,
      keyTerms: [
        { term: 'VHI-10', definition: '10-item Voice Handicap Index questionnaire for voice-related quality of life assessment' },
        { term: 'ICAP', definition: 'International Cooperative Working Group classification for vascular patterns in NBI' },
        { term: 'presbyphonia', definition: 'Age-related voice changes, typically from vocal fold atrophy' },
        { term: 'organ preservation', definition: 'Treatment approach preserving laryngeal function while treating cancer' },
        { term: 'Blom-Singer', definition: 'Tracheoesophageal puncture voice prosthesis for post-laryngectomy voice restoration' },
        { term: 'maximum phonation time', definition: 'Duration of sustained /s/ or /a/ on one breath, measures respiratory and glottic function' },
      ],
      clinicalNotes: `AAO-HNS Clinical Practice Guideline: Hoarseness (Dysphonia) (2018)

Key Recommendations Summary:

Strong Recommendations:
- Clinicians should identify patients with hoarseness and perform laryngoscopy when it persists for >3 weeks or if a serious underlying cause is suspected

Recommendations:
- Clinicians should NOT prescribe anti-reflux medications to treat hoarseness without signs or symptoms of GERD
- Clinicians should NOT routinely prescribe antibiotics for hoarseness
- Clinicians should prescribe or recommend voice therapy for patients with hoarseness
- Clinicians should NOT prescribe steroids for patients with hoarseness
- Clinicians should perform laryngoscopy or refer to another clinician who can perform laryngoscopy before prescribing steroids
- Clinicians should NOT obtain imaging of the head and neck for patients with hoarseness unless a mass lesion is identified on laryngoscopy
- Clinicians should recommend surgical management for patients with hoarseness when a definite lesion is identified and conservative measures have failed

Red Flags Requiring Urgent Evaluation:
- Progressive hoarseness
- Dysphagia or odynophagia
- Otalgia (referred pain)
- Hemoptysis
- Neck mass
- Weight loss
- Stridor or respiratory distress`,
    },
  },

  media: [
    {
      id: 'larynx-anterior-view',
      type: 'diagram',
      filename: 'larynx-cartilage-anatomy.svg',
      title: 'Laryngeal Cartilage Anatomy',
      description: 'Anterior view of thyroid, cricoid, and arytenoid cartilages',
    },
    {
      id: 'vocal-cord-anatomy',
      type: 'diagram',
      filename: 'vocal-cord-layered-structure.svg',
      title: 'Vocal Cord Layered Structure',
      description: 'Cross-section showing epithelium, lamina propria layers, and muscle',
    },
    {
      id: 'vocal-cord-lesions',
      type: 'diagram',
      filename: 'vocal-cord-lesions-comparison.svg',
      title: 'Vocal Cord Lesions Comparison',
      description: 'Comparison of nodules, polyps, and cysts',
    },
  ],

  citations: [
    {
      id: 'aao-hns-hoarseness-guideline-2018',
      type: 'article',
      title: 'Clinical Practice Guideline: Hoarseness (Dysphonia) (Update 2018)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Stachler, R.J.', 'Francis, D.O.', 'Schwartz, S.R.', 'et al.'],
    },
    {
      id: 'benninger-laryngology',
      type: 'textbook',
      title: 'Benninger and Ford: Laryngology (3rd Edition)',
      source: 'Plural Publishing',
    },
    {
      id: 'cummings-larynx',
      type: 'textbook',
      title: 'The Larynx',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section V',
    },
  ],

  crossReferences: [
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'sibling', label: 'Throat Disorders' },
    { targetId: 'ent-pediatric', targetType: 'topic', relationship: 'related', label: 'Pediatric ENT' },
    { targetId: 'ent-head-neck-cancer', targetType: 'topic', relationship: 'related', label: 'Head and Neck Cancer' },
    { targetId: 'respiratory-upper', targetType: 'system', relationship: 'related', label: 'Upper Respiratory System' },
  ],

  tags: {
    systems: ['respiratory', 'upper-airway', 'nervous'],
    structures: ['FMA:55303', 'FMA:55306', 'FMA:55315'],
    topics: ['laryngology', 'voice-disorders', 'hoarseness', 'laryngitis', 'dysphonia'],
    keywords: ['hoarseness', 'laryngitis', 'vocal cord nodules', 'vocal cord paralysis', 'spasmodic dysphonia', 'laryngoscopy'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'family-medicine', 'emergency'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default voiceContent;
