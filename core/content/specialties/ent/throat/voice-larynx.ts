/**
 * Voice and Larynx - Comprehensive Educational Content
 *
 * Covers laryngeal anatomy, voice production, and voice disorders.
 */

import { EducationalContent } from '../../../types';

export const voiceAndLarynx: EducationalContent = {
  id: 'ent-voice-larynx',
  type: 'topic',
  name: 'Voice and Larynx',
  alternateNames: ['Voice Box', 'Laryngeal Function', 'Phonation', 'Voice Production'],
  fmaId: 'FMA:55097',

  levels: {
    1: {
      level: 1,
      summary: 'Your voice box (larynx) is in your throat and contains your vocal cords, which vibrate when air passes through them to make the sounds of your voice.',
      explanation: `Have you ever wondered how you make sounds when you talk or sing? It all happens in your larynx, also called your voice box!

**Where Is Your Voice Box?**
Your larynx is in the front of your neck, right behind your Adam's apple. You can feel it move up and down when you swallow.

**How Does Your Voice Work?**
1. You breathe in air
2. You push air out from your lungs
3. The air passes through your vocal cords
4. Your vocal cords vibrate (like guitar strings)
5. This makes sound!
6. Your mouth and tongue shape the sound into words

**Your Vocal Cords:**
- There are two vocal cords
- They open when you breathe
- They close and vibrate when you talk
- When you whisper, they barely touch
- When you shout, they press together tightly

**Why Do Voices Sound Different?**
- Longer, thicker vocal cords make deeper sounds (usually men)
- Shorter, thinner vocal cords make higher sounds (usually women and children)
- That's why everyone's voice is unique!

**Taking Care of Your Voice:**
- Drink plenty of water
- Don't yell or scream too much
- Rest your voice when it's tired or sore`,
      keyTerms: [
        { term: 'larynx', definition: 'Your voice box; the part of your throat that makes sounds' },
        { term: 'vocal cords', definition: 'Two stretchy bands in your throat that vibrate to make sounds' },
        { term: 'Adam\'s apple', definition: 'The bump in the front of your neck made by your voice box' },
        { term: 'vibrate', definition: 'To move back and forth very quickly' },
      ],
      analogies: [
        'Your vocal cords work like rubber bands. When you stretch them and blow air past them, they vibrate and make sound.',
        'Your voice box is like a musical instrument. The vocal cords are the strings, and your lungs provide the air to play them.',
      ],
      examples: [
        'When you hum, you can feel your throat vibrate because your vocal cords are moving back and forth.',
        'When you get laryngitis, your vocal cords are swollen and can\'t vibrate properly, so your voice sounds hoarse.',
      ],
    },
    2: {
      level: 2,
      summary: 'The larynx is a cartilaginous structure containing the vocal folds, which produce voice through controlled vibration (phonation) as air passes from the lungs.',
      explanation: `The larynx serves three functions: protection of the airway, respiration, and phonation (voice production).

**Laryngeal Framework (Cartilages):**
- **Thyroid cartilage:** Largest; forms Adam's apple
- **Cricoid cartilage:** Complete ring below thyroid cartilage
- **Arytenoid cartilages (paired):** Control vocal fold movement
- **Epiglottis:** Covers larynx during swallowing

**Vocal Folds:**
- True vocal folds (cords): Produce voice
- False vocal folds (vestibular folds): Above true folds, protection

**Voice Production (Phonation):**
1. **Air supply:** Lungs provide airflow
2. **Sound source:** Vocal folds vibrate (100-300 times/second)
3. **Resonance:** Pharynx, mouth, and nose shape sound
4. **Articulation:** Tongue, lips, teeth form words

**Pitch Control:**
- Higher pitch: Vocal folds thin and stretch (cricothyroid muscle)
- Lower pitch: Vocal folds thick and relaxed

**Volume Control:**
- Louder: More air pressure, tighter vocal fold closure
- Softer: Less air pressure, looser closure

**Muscles:**
- Intrinsic muscles: Within the larynx, control vocal folds
- Extrinsic muscles: Move the entire larynx up/down

**Nerves:**
- Superior laryngeal nerve: Sensation above vocal folds, cricothyroid muscle
- Recurrent laryngeal nerve: All other laryngeal muscles

**Common Voice Problems:**
- Laryngitis: Inflammation causing hoarseness
- Nodules: "Calluses" from voice overuse
- Polyps: Fluid-filled swellings
- Paralysis: Nerve injury affecting vocal fold movement

**Voice Care:**
- Hydration essential for healthy mucosa
- Avoid smoking and irritants
- Vocal warm-ups before heavy use
- Rest voice when ill or strained`,
      keyTerms: [
        { term: 'phonation', definition: 'The production of voice through vocal fold vibration', pronunciation: 'foh-NAY-shun' },
        { term: 'vocal folds', definition: 'The more accurate term for vocal cords; vibrating tissue that produces sound' },
        { term: 'arytenoid cartilages', definition: 'Paired cartilages that move the vocal folds to open and close them', pronunciation: 'air-ih-TEE-noyd' },
        { term: 'laryngitis', definition: 'Inflammation of the larynx causing hoarseness or voice loss' },
        { term: 'recurrent laryngeal nerve', definition: 'Nerve controlling most muscles of the larynx; can be injured during thyroid surgery' },
      ],
      analogies: [
        'The vocal folds act like the reed of a clarinet - air passes through and makes them vibrate to create sound.',
        'Pitch control is like a guitar string: tighten it for higher pitch, loosen it for lower pitch.',
      ],
    },
    3: {
      level: 3,
      summary: 'Laryngeal anatomy comprises cartilaginous, muscular, and membranous structures innervated by branches of the vagus nerve, producing voice through aerodynamic-myoelastic interaction at the glottis.',
      explanation: `The larynx is a complex organ requiring precise coordination for phonation, respiration, and airway protection.

**Cartilaginous Framework:**

*Unpaired Cartilages:*
- Thyroid: Shield-shaped, 90-degree angle (male) vs. 120-degree (female)
- Cricoid: Signet ring shape, complete ring
- Epiglottis: Leaf-shaped, attached to thyroid

*Paired Cartilages:*
- Arytenoids: Pyramid-shaped, vocal process (anterior), muscular process (lateral)
- Corniculates: Apex of arytenoids
- Cuneiforms: Within aryepiglottic folds

**Laryngeal Spaces:**

*Supraglottis:*
- Epiglottis to ventricle
- False vocal folds (vestibular)
- Pre-epiglottic space (fat-filled)
- Paraglottic space (lateral)

*Glottis:*
- True vocal folds
- Anterior commissure
- Posterior commissure

*Subglottis:*
- Below vocal folds to inferior cricoid

**Intrinsic Muscles:**

| Muscle | Action | Nerve |
|--------|--------|-------|
| Lateral cricoarytenoid (LCA) | Adducts (closes) | RLN |
| Thyroarytenoid (TA) | Shortens/tenses | RLN |
| Interarytenoid | Adducts | RLN |
| Posterior cricoarytenoid (PCA) | Abducts (opens) | RLN |
| Cricothyroid (CT) | Lengthens/tenses | SLN (external) |

*Key Point:* PCA is the only abductor (opens vocal folds for breathing).

**Vocal Fold Layers (Cover-Body Theory):**
1. Epithelium: Stratified squamous
2. Superficial lamina propria (Reinke's space): Loose, key for vibration
3. Intermediate lamina propria: Elastic fibers
4. Deep lamina propria: Collagen fibers
5. Vocalis muscle: Body of the fold

**Voice Production Physics:**

*Aerodynamic-Myoelastic Theory:*
1. Vocal folds adducted
2. Subglottic pressure builds
3. Folds blown apart at threshold
4. Bernoulli effect draws folds back together
5. Cycle repeats (fundamental frequency)

*Mucosal Wave:*
- Visible undulation of vocal fold cover
- Essential for healthy voice
- Absent in scarring or carcinoma

**Clinical Assessment:**

*Laryngoscopy:*
- Indirect: Mirror or flexible scope
- Direct: Rigid scope (stroboscopy)
- Microlaryngoscopy: Under anesthesia

*Stroboscopy:*
- Flashing light synchronized to vocal fold vibration
- Creates "slow motion" effect
- Assesses mucosal wave, closure pattern

*Voice Analysis:*
- Fundamental frequency (F0)
- Jitter (frequency perturbation)
- Shimmer (amplitude perturbation)
- Noise-to-harmonic ratio`,
      keyTerms: [
        { term: 'posterior cricoarytenoid', definition: 'Only abductor of the vocal folds; opens the glottis for breathing' },
        { term: 'Reinke space', definition: 'Superficial lamina propria; loose tissue layer essential for vocal fold vibration' },
        { term: 'mucosal wave', definition: 'Visible traveling wave on vocal fold surface during phonation, assessed by stroboscopy' },
        { term: 'aerodynamic-myoelastic theory', definition: 'Model of voice production where airflow and tissue elasticity create self-sustaining vocal fold oscillation' },
        { term: 'stroboscopy', definition: 'Technique using flashing light to visualize vocal fold vibration in apparent slow motion' },
      ],
      clinicalNotes: 'Unilateral vocal fold paralysis causes breathy voice and aspiration; bilateral paralysis causes stridor. RLN injury can occur during thyroid surgery, carotid endarterectomy, or from mediastinal tumors. SLN injury causes voice fatigue and reduced pitch range.',
    },
    4: {
      level: 4,
      summary: 'Advanced laryngology integrates vocal fold biomechanics, neural control of phonation, comprehensive voice assessment, and surgical techniques for benign and malignant laryngeal pathology.',
      explanation: `Expert understanding of voice and larynx requires integration of physiology, pathology, and therapeutic interventions.

**Vocal Fold Biomechanics:**

*Layered Structure (Cover-Body):*
- Cover: Epithelium + superficial lamina propria (SLP)
- Transition: Intermediate and deep lamina propria (vocal ligament)
- Body: Thyroarytenoid muscle (vocalis)

*Mechanical Properties:*
- Cover more pliable than body
- SLP has lowest stiffness - allows wave propagation
- Vocal ligament provides elastic recoil

*Vibration Characteristics:*
- Open quotient: Time open / cycle duration
- Closed quotient: Time closed / cycle duration
- Normal: ~50% closed quotient
- Breathy: Decreased closed quotient
- Pressed: Increased closed quotient

**Neural Control:**

*Phonation Central Control:*
- Periaqueductal gray (PAG): Initiates vocalization
- Laryngeal motor cortex: Voluntary control
- Reticular formation: Rhythmic coordination

*Vagus Nerve Branches:*
- Superior laryngeal nerve (SLN):
  - Internal: Sensory above glottis
  - External: Motor to cricothyroid
- Recurrent laryngeal nerve (RLN):
  - All intrinsic muscles except cricothyroid
  - Sensory below glottis

*Clinical Nerve Testing:*
- SLN external: Ask patient to say "ee" at high pitch
- RLN: Observe vocal fold mobility on scope

**Voice Disorders:**

*Structural:*
- Nodules: Bilateral, anterior-middle junction, voice overuse
- Polyps: Unilateral, hemorrhagic or translucent
- Reinke's edema: Bilateral SLP swelling, often in smokers
- Cysts: Intracordal, mucus retention or epidermoid
- Sulcus vocalis: Groove along vocal fold edge

*Neurogenic:*
- Unilateral paralysis: Breathy, weak voice, aspiration
- Bilateral paralysis: Stridor, airway compromise
- Spasmodic dysphonia: Adductor (strained) or abductor (breathy)

*Functional:*
- Muscle tension dysphonia: Excessive tension, hyperfunctional
- Functional aphonia: No phonation without structural cause
- Puberphonia: Persistence of high-pitched voice after puberty

**Laryngeal Cancer:**

*Risk Factors:*
- Smoking (strongest association)
- Alcohol synergy
- HPV (rarely in larynx vs. oropharynx)

*Subsite Distribution:*
- Glottic: Most common in US (60-65%)
- Supraglottic: 30-35%
- Subglottic: 5% (rare)

*TNM Considerations:*
- T stage: Vocal fold mobility (T2 = impaired, T3 = fixed)
- Nodal spread: Rare for early glottic (sparse lymphatics)

**Surgical Approaches:**

*Microlaryngoscopy:*
- Direct laryngoscopy under anesthesia
- CO2 laser for excision
- Microsurgical techniques for benign lesions

*Laryngeal Framework Surgery:*
- Medialization laryngoplasty: Implant pushes paralyzed fold
- Arytenoid adduction: Rotates arytenoid for closure
- Cricothyroid approximation: Raises pitch

*Injection Laryngoplasty:*
- Temporary: Hyaluronic acid, calcium hydroxylapatite
- Permanent: Fat, Teflon (historical)
- Office-based or OR

**Voice Therapy:**

*Behavioral Approaches:*
- Vocal hygiene education
- Laryngeal massage
- Resonant voice therapy
- Lee Silverman Voice Treatment (LSVT): Parkinson's`,
      keyTerms: [
        { term: 'medialization laryngoplasty', definition: 'Surgical placement of implant to push paralyzed vocal fold toward midline' },
        { term: 'spasmodic dysphonia', definition: 'Neurogenic voice disorder with involuntary laryngeal spasms during speech' },
        { term: 'sulcus vocalis', definition: 'Groove or depression along the vocal fold edge causing incomplete closure' },
        { term: 'injection laryngoplasty', definition: 'Injection of material into vocal fold for medialization or augmentation' },
        { term: 'open quotient', definition: 'Proportion of vibratory cycle during which glottis is open' },
      ],
      clinicalNotes: 'Any hoarseness lasting >2-3 weeks requires laryngoscopy to rule out malignancy. Early glottic cancer has excellent prognosis (95% cure for T1) due to early symptoms and sparse lymphatics.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art laryngology encompasses vocal fold regenerative medicine, high-speed imaging, computational voice models, transoral laser and robotic surgery, and multidisciplinary voice restoration approaches.',
      explanation: `Frontier laryngology integrates advanced technology with molecular and computational approaches.

**Advanced Vocal Fold Imaging:**

*High-Speed Videolaryngoscopy (HSV):*
- 2000-10,000 frames per second
- Real-time visualization of each cycle
- No sampling artifact (unlike stroboscopy)
- Reveals asymmetries, aperiodicity

*Kymography:*
- Single line extraction from video
- Shows mucosal wave over time
- Quantitative amplitude and phase measurements

*Optical Coherence Tomography (OCT):*
- Cross-sectional imaging of vocal fold layers
- ~10 μm resolution
- Detects basement membrane invasion (cancer)
- Visualizes Reinke's space changes

**Vocal Fold Regeneration:**

*Biomaterials for Injection:*
- Hyaluronic acid: Temporary, office-based
- Calcium hydroxylapatite: Longer-lasting
- Autologous fat: Permanent, requires harvest
- Hybrid collagen: Emerging option

*Tissue Engineering:*
- Decellularized vocal fold scaffolds
- Stem cell seeding
- Growth factor delivery
- Goal: Restore lamina propria structure

*Scarred Vocal Fold Research:*
- Reinke's space fibrosis ablates mucosal wave
- Hepatocyte growth factor (HGF) reduces scarring
- PRP injection (platelet-rich plasma): Mixed results
- Clinical trials ongoing

**Computational Voice Analysis:**

*Acoustic Analysis:*
- Fundamental frequency (F0): ~125 Hz (male), ~250 Hz (female)
- Harmonics-to-noise ratio (HNR)
- Cepstral peak prominence (CPP): Correlates with dysphonia

*Aerodynamic Assessment:*
- Mean airflow rate
- Subglottic pressure (from /p/)
- Laryngeal resistance
- Phonation threshold pressure

*Voice Handicap Index (VHI):*
- 30-item patient-reported outcome
- Functional, physical, emotional domains
- Tracks treatment response

**Advanced Surgical Techniques:**

*Transoral Laser Microsurgery (TLM):*
- CO2 laser via operating microscope
- Endoscopic cordectomy for T1/T2 glottic SCC
- Supraglottic laryngectomy possible

*Transoral Robotic Surgery (TORS):*
- Supraglottic laryngectomy
- Improved visualization
- Limited for glottic lesions

*Organ Preservation:*
- Chemoradiation for advanced laryngeal cancer
- Goal: Avoid total laryngectomy
- Requires functional larynx assessment

*Total Laryngectomy:*
- For advanced/recurrent cancer
- Creates permanent tracheostome
- Separates airway from digestive tract
- Voice restoration options: TEP, EL, esophageal speech

**Voice Restoration After Laryngectomy:**

*Tracheoesophageal Puncture (TEP):*
- Primary (at time of laryngectomy) or secondary
- One-way valve (Provox, Blom-Singer)
- Best voice quality
- Requires manual occlusion of stoma

*Electrolarynx (EL):*
- External vibration source
- Applied to neck or cheek
- Immediate use, no surgery required

*Esophageal Speech:*
- Air swallowed and released through PE segment
- No device needed
- Difficult to learn

**Special Populations:**

*Professional Voice Users:*
- Singers, actors, teachers, clergy
- Detailed stroboscopic assessment
- Conservative management when possible
- Consider singing voice specialist (SVS)

*Transgender Voice:*
- Male-to-female: Pitch raising, behavioral therapy, thyroplasty
- Female-to-male: Testosterone typically sufficient
- Comprehensive care with speech pathology

*Pediatric Larynx:*
- Different anatomy (higher, more anterior)
- Subglottic stenosis common problem
- Laryngomalacia most common stridor cause`,
      keyTerms: [
        { term: 'high-speed videolaryngoscopy', definition: 'Imaging technique capturing vocal fold vibration at thousands of frames per second' },
        { term: 'tracheoesophageal puncture', definition: 'Surgical creation of tract between trachea and esophagus with one-way valve for post-laryngectomy voice' },
        { term: 'optical coherence tomography', definition: 'Cross-sectional imaging technique visualizing vocal fold microanatomy' },
        { term: 'cepstral peak prominence', definition: 'Acoustic measure correlating with voice quality and dysphonia severity' },
        { term: 'phonation threshold pressure', definition: 'Minimum subglottic pressure required to initiate vocal fold vibration' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. High-speed imaging: Use when stroboscopy is aperiodic or asymmetric; reveals true vibratory pattern
2. Early glottic SCC: TLM offers excellent oncologic outcomes with voice preservation
3. Vocal fold paralysis: Wait 9-12 months for possible recovery before permanent medialization
4. TEP voice: First-line for post-laryngectomy; requires motivated patient and caregiver education
5. Reinke's edema: Smoking cessation essential; surgery for persistent dysphonia or airway compromise
6. Spasmodic dysphonia: Botox injection to thyroarytenoid muscle is mainstay treatment
7. Professional voice: Involve singing voice specialist; timing of surgery around performances`,
    },
  },

  media: [
    {
      id: 'laryngeal-cartilages',
      type: 'diagram',
      filename: 'laryngeal-cartilages.svg',
      title: 'Laryngeal Cartilages',
      description: 'Anterior and lateral views of laryngeal framework',
    },
    {
      id: 'vocal-fold-layers',
      type: 'diagram',
      filename: 'vocal-fold-layers.svg',
      title: 'Vocal Fold Microanatomy',
      description: 'Coronal section showing layers of the vocal fold',
    },
    {
      id: 'phonation-cycle',
      type: 'animation',
      filename: 'phonation-cycle.mp4',
      title: 'Phonation Cycle',
      description: 'Animation of vocal fold vibration during voice production',
    },
  ],

  citations: [
    {
      id: 'cummings-larynx',
      type: 'textbook',
      title: 'Laryngeal Anatomy and Physiology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Chapters 53-65',
    },
    {
      id: 'titze-voice',
      type: 'textbook',
      title: 'Principles of Voice Production',
      authors: ['Titze IR'],
      source: 'National Center for Voice and Speech',
    },
  ],

  crossReferences: [
    { targetId: 'ent-throat-anatomy', targetType: 'structure', relationship: 'related', label: 'Throat Anatomy' },
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
  ],

  tags: {
    systems: ['respiratory'],
    structures: ['FMA:55097'],
    topics: ['anatomy', 'physiology', 'laryngology', 'voice'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default voiceAndLarynx;
