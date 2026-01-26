/**
 * Throat Anatomy - Comprehensive Educational Content
 *
 * Covers the anatomical structure of the pharynx and related structures.
 */

import { EducationalContent } from '../../../types';

export const throatAnatomy: EducationalContent = {
  id: 'ent-throat-anatomy',
  type: 'structure',
  name: 'Throat Anatomy',
  alternateNames: ['Pharynx Anatomy', 'Upper Aerodigestive Tract', 'Pharyngeal Anatomy'],
  fmaId: 'FMA:46688',

  levels: {
    1: {
      level: 1,
      summary: 'Your throat is a tube that connects your mouth and nose to your voice box and food pipe, helping you breathe, swallow, and talk.',
      explanation: `Your throat is an important passageway in your body that does several jobs at once!

**What Your Throat Does:**
- Lets air travel from your nose and mouth to your lungs
- Moves food and drinks from your mouth to your stomach
- Helps you make sounds when you talk

**Parts of Your Throat:**

1. **The Back of Your Mouth (Oropharynx):**
   - Where you can see your tonsils
   - Contains your uvula (the dangling thing at the back)

2. **Behind Your Nose (Nasopharynx):**
   - Connects your nose to your throat
   - Contains your adenoids

3. **By Your Voice Box (Laryngopharynx):**
   - The lowest part of your throat
   - Where food and air pathways separate

**Special Feature: The Epiglottis**
This is a flap that closes over your windpipe when you swallow. It makes sure food goes to your stomach, not your lungs!

**Tonsils and Adenoids:**
These are like guards at the entrance to your body, helping fight off germs that come in through your mouth and nose.`,
      keyTerms: [
        { term: 'throat', definition: 'The tube connecting your mouth and nose to your windpipe and food pipe' },
        { term: 'tonsils', definition: 'Two round lumps at the sides of your throat that help fight germs' },
        { term: 'adenoids', definition: 'Tissue behind your nose that helps fight germs' },
        { term: 'uvula', definition: 'The small piece of soft tissue that hangs down at the back of your throat' },
        { term: 'epiglottis', definition: 'A flap that covers your windpipe when you swallow' },
      ],
      analogies: [
        'Your throat is like a highway interchange where two roads (air and food) have to share space but end up going to different destinations.',
        'The epiglottis is like a traffic cop that directs food to the stomach and air to the lungs.',
        'Tonsils and adenoids are like security guards checking everyone who enters your body through your mouth and nose.',
      ],
      examples: [
        'When you swallow water, you can feel it going down your throat to your stomach.',
        'When you get a sore throat, the inside of your throat looks red and swollen.',
      ],
    },
    2: {
      level: 2,
      summary: 'The pharynx is a muscular tube extending from the skull base to the esophagus, divided into nasopharynx, oropharynx, and laryngopharynx, serving respiration, deglutition, and speech.',
      explanation: `The throat (pharynx) is a funnel-shaped muscular tube about 12-15 cm long that serves as a shared pathway for the respiratory and digestive systems.

**Three Divisions of the Pharynx:**

**1. Nasopharynx:**
- Location: Behind the nasal cavity, above the soft palate
- Key structures:
  - Adenoids (pharyngeal tonsils)
  - Eustachian tube openings
  - Torus tubarius (cartilage around Eustachian tube)
- Function: Respiratory only (not food passage)

**2. Oropharynx:**
- Location: Behind the mouth, from soft palate to hyoid bone
- Key structures:
  - Palatine tonsils (the "tonsils" people refer to)
  - Base of tongue (lingual tonsils)
  - Uvula
  - Soft palate
  - Posterior pharyngeal wall
- Function: Both respiratory and digestive

**3. Laryngopharynx (Hypopharynx):**
- Location: From hyoid bone to cricoid cartilage
- Key structures:
  - Epiglottis
  - Pyriform sinuses (recesses on sides)
  - Posterior cricoid area
- Function: Directs air to larynx, food to esophagus

**Muscles:**
- Constrictor muscles (superior, middle, inferior): Squeeze during swallowing
- Longitudinal muscles: Elevate the pharynx

**Waldeyer's Ring:**
The ring of lymphoid tissue protecting the entrance to the respiratory and digestive tracts:
- Adenoids (pharyngeal tonsil)
- Tubal tonsils
- Palatine tonsils
- Lingual tonsils

**Swallowing (Deglutition):**
1. Oral phase: Voluntary, tongue pushes food back
2. Pharyngeal phase: Reflexive, soft palate closes, epiglottis covers larynx
3. Esophageal phase: Food travels to stomach

**Blood Supply:**
- Ascending pharyngeal artery
- Branches from external carotid

**Nerve Supply:**
- Pharyngeal plexus (CN IX, X, XI)
- Sensation and motor function`,
      keyTerms: [
        { term: 'pharynx', definition: 'The medical term for the throat; a muscular tube connecting the mouth and nose to the esophagus and larynx', pronunciation: 'FAIR-inks' },
        { term: 'nasopharynx', definition: 'Upper part of the pharynx behind the nose, above the soft palate' },
        { term: 'oropharynx', definition: 'Middle part of the pharynx behind the mouth, containing the tonsils' },
        { term: 'hypopharynx', definition: 'Lowest part of the pharynx, also called laryngopharynx, leading to the esophagus' },
        { term: 'Waldeyer ring', definition: 'The ring of lymphoid tissue (tonsils, adenoids) at the entrance to the upper aerodigestive tract' },
        { term: 'deglutition', definition: 'The process of swallowing' },
      ],
      analogies: [
        'The pharynx is like an intersection where two highways (airway and food passage) merge temporarily before separating again.',
        'Waldeyer ring is like a ring of security guards positioned around all the entrances to your body.',
      ],
    },
    3: {
      level: 3,
      summary: 'The pharynx extends from the skull base to C6, comprising three anatomically and functionally distinct regions with complex muscular, vascular, and neural relationships critical for swallowing, respiration, and speech.',
      explanation: `Detailed understanding of pharyngeal anatomy is essential for managing upper aerodigestive tract pathology.

**Anatomical Boundaries:**

*Nasopharynx:*
- Superior: Skull base (basisphenoid, basiocciput)
- Inferior: Superior surface of soft palate
- Anterior: Posterior choanae
- Posterior: Clivus and upper cervical vertebrae

*Oropharynx:*
- Superior: Soft palate
- Inferior: Superior edge of epiglottis (hyoid level)
- Anterior: Circumvallate papillae of tongue
- Lateral: Tonsillar pillars and palatine tonsils
- Posterior: Pharyngeal constrictors overlying C2-C3

*Hypopharynx:*
- Superior: Tip of epiglottis (hyoid level)
- Inferior: Inferior border of cricoid (C6)
- Three subsites:
  1. Pyriform sinuses
  2. Posterior pharyngeal wall
  3. Postcricoid region

**Pharyngeal Constrictor Muscles:**

| Muscle | Origin | Nerve |
|--------|--------|-------|
| Superior constrictor | Pterygomandibular raphe, pterygoid plate | Pharyngeal plexus (X) |
| Middle constrictor | Hyoid bone, stylohyoid ligament | Pharyngeal plexus (X) |
| Inferior constrictor | Thyroid and cricoid cartilages | Pharyngeal plexus (X), recurrent laryngeal |

*Killian's Dehiscence:* Gap between thyropharyngeus and cricopharyngeus portions of inferior constrictor; site of Zenker's diverticulum.

**Longitudinal Muscles:**
- Stylopharyngeus (CN IX)
- Palatopharyngeus (CN X)
- Salpingopharyngeus (CN X)
- Function: Elevate pharynx and larynx during swallowing

**Fascial Spaces:**

*Parapharyngeal Space:*
- Lateral to pharynx
- Contains: Carotid sheath, cranial nerves IX-XII
- Infection/tumor can spread here

*Retropharyngeal Space:*
- Between pharynx and prevertebral fascia
- Danger space (extends to mediastinum)
- Retropharyngeal abscess in children

**Vascular Anatomy:**

*Arterial:*
- Ascending pharyngeal (major supply)
- Tonsillar branch of facial artery
- Ascending palatine artery
- Pharyngeal branches of internal maxillary

*Venous:*
- Pharyngeal venous plexus
- Drains to internal jugular vein

*Lymphatic:*
- Retropharyngeal nodes (Rouvière nodes)
- Jugulodigastric nodes (tonsillar)
- Deep cervical chain

**Innervation:**

*Pharyngeal Plexus:*
- Motor: Vagus nerve (via cranial root of XI)
- Sensory: Glossopharyngeal (CN IX)
- Location: On middle constrictor

*Special Innervation:*
- Nasopharynx sensation: V2 (maxillary)
- Oropharynx sensation: IX
- Hypopharynx sensation: X (internal laryngeal nerve)
- Stylopharyngeus muscle: Only CN IX motor in pharynx`,
      keyTerms: [
        { term: 'parapharyngeal space', definition: 'Lateral pharyngeal space containing carotid sheath and cranial nerves, important in tumor spread' },
        { term: 'retropharyngeal space', definition: 'Potential space between pharynx and prevertebral fascia, communicating with mediastinum' },
        { term: 'Killian dehiscence', definition: 'Muscular weak point between thyropharyngeus and cricopharyngeus; site of Zenker diverticulum' },
        { term: 'pharyngeal plexus', definition: 'Network of nerves (IX, X, XI) on the middle constrictor providing motor and sensory innervation' },
        { term: 'pyriform sinus', definition: 'Pear-shaped recess lateral to the laryngeal inlet, common site for foreign body lodging and carcinoma' },
      ],
      clinicalNotes: 'The retropharyngeal space (danger space) extends from skull base to posterior mediastinum; retropharyngeal abscess can spread to the chest. Parapharyngeal space tumors often present as oropharyngeal bulge with intact mucosa.',
    },
    4: {
      level: 4,
      summary: 'Advanced pharyngeal anatomy integrates embryological development, precise neurovascular relationships critical for skull base surgery, swallowing physiology, and complex deep neck space anatomy relevant to infection and tumor spread.',
      explanation: `Expert understanding of pharyngeal anatomy enables safe surgical approaches and management of complex pathology.

**Embryology:**

*Pharyngeal Arches:*
- Pharynx develops from primitive pharyngeal arches
- Arches contain mesoderm (muscles, vessels) and neural crest (cartilage, nerve)

| Arch | Muscle | Nerve | Artery |
|------|--------|-------|--------|
| 1st | Muscles of mastication | V3 | Maxillary artery |
| 2nd | Muscles of facial expression | VII | Stapedial artery |
| 3rd | Stylopharyngeus | IX | Common carotid, internal carotid |
| 4th | Constrictors, levator palatini | X (superior laryngeal) | Aortic arch (left) |
| 6th | Intrinsic laryngeal muscles | X (recurrent laryngeal) | Pulmonary arteries |

*Pharyngeal Pouches:*
- 1st: Eustachian tube, middle ear
- 2nd: Palatine tonsil
- 3rd: Inferior parathyroids, thymus
- 4th: Superior parathyroids, ultimobranchial body (C-cells)

**Deep Neck Space Anatomy:**

*Spaces and Contents:*

| Space | Boundaries | Contents | Clinical |
|-------|------------|----------|----------|
| Parapharyngeal | Base to hyoid | Carotid, CN IX-XII, sympathetics | Tumor spread, infection |
| Retropharyngeal | Skull base to T4 | Nodes (pediatric), fat | Abscess, spread to mediastinum |
| Prevertebral | Clivus to coccyx | Vertebrae, paraspinal muscles | Spinal infection |
| Danger space | Skull base to diaphragm | Loose areolar tissue | Mediastinitis |
| Submandibular | Mandible, digastric | Submandibular gland, nodes | Ludwig angina |

*Parapharyngeal Space Details:*
- Prestyloid compartment: Fat, minor salivary gland tissue
- Poststyloid compartment (carotid space): ICA, IJV, CN IX-XII, sympathetic chain

**Swallowing Neurophysiology:**

*Central Pattern Generators:*
- Nucleus tractus solitarius (afferent)
- Nucleus ambiguus (motor, pharynx/larynx)
- Dorsal motor nucleus of vagus
- Coordination with respiration

*Phases:*
1. **Oral preparatory:** Voluntary, tongue manipulation
2. **Oral propulsive:** Voluntary initiation, tongue drives bolus posteriorly
3. **Pharyngeal phase:** Reflex triggered by bolus at pillars
   - Velopharyngeal closure
   - Laryngeal elevation and closure
   - Pharyngeal stripping wave
   - UES relaxation
4. **Esophageal phase:** Peristalsis through esophagus

*Protective Mechanisms:*
- Epiglottic retroflexion
- Laryngeal vestibule closure (false cords, true cords, arytenoids)
- Laryngeal elevation (hyoid excursion)
- Breath-holding during swallow

**Transoral Surgical Anatomy:**

*Transoral Robotic Surgery (TORS) Considerations:*
- Lingual artery: Deep to base of tongue
- Internal carotid: 2-3 cm lateral to tonsillar fossa
- Glossopharyngeal nerve: Deep to tonsil, crosses stylopharyngeus

*Boundaries for Safe Resection:*
- Superior constrictor represents lateral limit
- Prevertebral fascia represents posterior limit
- Lingual artery bleeds require external approach

**Nasopharyngeal Anatomy for Skull Base:**

*Key Landmarks:*
- Fossa of Rosenmüller: Lateral nasopharyngeal recess; NPC origin
- Eustachian tube: Landmark for carotid (lateral) and foramen lacerum (anterosuperior)
- Longus capitis/colli: Prevertebral muscles, limit of safe dissection

*Transnasal Corridor to Skull Base:*
- Sphenoid sinus → clivus → petrous apex
- Nasopharynx as corridor to anterior skull base`,
      keyTerms: [
        { term: 'pharyngeal arches', definition: 'Embryonic structures that give rise to pharyngeal muscles, nerves, and vascular elements' },
        { term: 'danger space', definition: 'Potential space between alar and prevertebral fascia extending from skull base to diaphragm' },
        { term: 'fossa of Rosenmüller', definition: 'Lateral pharyngeal recess posterior to Eustachian tube opening; common site of nasopharyngeal carcinoma' },
        { term: 'upper esophageal sphincter', definition: 'Cricopharyngeus muscle controlling pharyngoesophageal junction' },
        { term: 'nucleus ambiguus', definition: 'Brainstem nucleus providing motor innervation to pharynx and larynx via vagus nerve' },
      ],
      clinicalNotes: 'The internal carotid artery may course medially and be at risk during tonsillectomy, especially in patients with submucosal pulsation. Average distance from tonsillar fossa to ICA is 2.5 cm but can be as close as 4 mm.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art pharyngeal anatomy incorporates advanced imaging correlates, transoral robotic surgical corridors, neurophysiology of swallowing dysfunction, and molecular/immunologic considerations of pharyngeal lymphoid tissue.',
      explanation: `Expert-level pharyngeal anatomy integrates clinical application with research frontiers.

**Advanced Imaging:**

*CT Anatomy:*
- Nasopharynx: Symmetric soft tissue, patent Eustachian tubes
- Oropharynx: Tonsil size, base of tongue volume
- Hypopharynx: Pyriform apex, postcricoid region
- Retropharyngeal space: Normally <7mm at C2, <22mm at C6

*MRI Sequences:*
- T1: Anatomic detail, fat planes
- T2: Tumor vs. inflammation
- T1+Gd: Enhancement patterns, perineural spread
- Diffusion: Tumor characterization

*PET-CT:*
- HPV-related oropharyngeal cancer staging
- Occult primary detection
- Post-treatment surveillance

**Transoral Robotic Surgery (TORS):**

*Surgical Anatomy by Subsite:*

*Tonsil:*
- Develop dissection plane on constrictor
- Internal carotid lateral and posterior
- Ascending pharyngeal artery encountered
- Glossopharyngeal nerve deep to muscle

*Base of Tongue:*
- Lingual artery at depth
- Hypoglossal nerve lateral
- Maintain midline orientation

*Supraglottis:*
- Superior laryngeal nerve and artery (thyrohyoid membrane)
- Pre-epiglottic fat space
- Ventricular mucosa

*Posterior Pharyngeal Wall:*
- Prevertebral fascia limits resection
- Longus colli muscles visible

**Swallowing Physiology:**

*High-Resolution Manometry:*
- Measures pharyngeal/UES pressure dynamics
- Integrated relaxation pressure
- Pharyngeal contractile integral

*Fiberoptic Endoscopic Evaluation of Swallowing (FEES):*
- Assesses velopharyngeal closure
- Laryngeal penetration
- Aspiration (before, during, after swallow)
- Pharyngeal residue

*Videofluoroscopic Swallow Study (VFSS):*
- Gold standard for swallow phases
- Oral transit time
- Pharyngeal transit time
- Hyoid excursion
- UES opening diameter

*Dysphagia After Treatment:*
- Radiation fibrosis limits pharyngeal contraction
- Surgical resection removes propulsive tissue
- Laryngeal elevation impaired → aspiration
- Rehabilitation targets: Effortful swallow, Mendelsohn

**Pharyngeal Immunology:**

*Tonsil Immunobiology:*
- B-cell development and maturation
- Germinal center formation
- M cells: Antigen sampling
- Cryptolymphatic circulation

*Waldeyer Ring Function:*
- First-line mucosal immunity
- IgA production
- Antigen presentation to naive lymphocytes
- May serve as reservoir for pathogens

*HPV in Oropharynx:*
- Tonsillar crypt epithelium permissive for HPV
- Transformation zone analog
- HPV16 accounts for >90% of HPV-positive OPC
- Distinct molecular phenotype from HPV-negative

**Fascial Planes in Depth:**

*Alar Fascia:*
- Separates retropharyngeal from danger space
- Key landmark in cervical fasciotomy

*Buccopharyngeal Fascia:*
- Covers external surface of constrictors
- Continuous with adventitia of esophagus

*Deep Cervical Fascia Layers:*
- Superficial: Invests SCM, trapezius
- Middle (visceral): Encloses pharynx, larynx, thyroid, esophagus
- Deep (prevertebral): Covers vertebral column, paraspinal muscles

**Contemporary Classification:**

*Oropharyngeal Cancer Staging (8th Edition AJCC):*
- HPV-positive and HPV-negative have separate staging
- HPV-positive downstaged due to better prognosis
- p16 immunohistochemistry as surrogate marker`,
      keyTerms: [
        { term: 'TORS', definition: 'Transoral robotic surgery; robotic-assisted resection of pharyngeal and laryngeal tumors' },
        { term: 'high-resolution manometry', definition: 'Pressure-sensing catheter measuring pharyngeal and esophageal contractile function' },
        { term: 'FEES', definition: 'Fiberoptic endoscopic evaluation of swallowing; bedside assessment of swallow function' },
        { term: 'p16', definition: 'Tumor suppressor protein used as surrogate marker for HPV in oropharyngeal cancer' },
        { term: 'M cells', definition: 'Microfold cells in tonsillar epithelium that sample antigens for immune processing' },
      ],
      clinicalNotes: `**Clinical Pearls:**
1. Asymmetric tonsils: Biopsy to rule out lymphoma; CT to evaluate parapharyngeal extension
2. Retropharyngeal abscess: Widening >7mm at C2 on lateral XR; CT with contrast for definitive diagnosis
3. TORS safety: Palpate for carotid pulsation before resection; ligate vessels before transecting
4. Post-radiation dysphagia: Often progressive years later due to fibrosis; FEES/VFSS for assessment
5. HPV-positive oropharyngeal cancer: Better prognosis; de-escalation trials ongoing
6. Nasopharyngeal carcinoma: EBV-associated; arises from fossa of Rosenmüller; radiation-sensitive
7. Parapharyngeal tumors: Most common is pleomorphic adenoma (deep lobe parotid/minor salivary)`,
    },
  },

  media: [
    {
      id: 'pharynx-sagittal',
      type: 'diagram',
      filename: 'pharynx-sagittal.svg',
      title: 'Pharynx Sagittal Section',
      description: 'Sagittal view showing nasopharynx, oropharynx, and hypopharynx',
    },
    {
      id: 'pharyngeal-constrictors',
      type: 'diagram',
      filename: 'pharyngeal-constrictors.svg',
      title: 'Pharyngeal Constrictor Muscles',
      description: 'Posterior view of pharyngeal musculature',
    },
    {
      id: 'deep-neck-spaces',
      type: 'diagram',
      filename: 'deep-neck-spaces.svg',
      title: 'Deep Neck Spaces',
      description: 'Axial view of fascial spaces in the neck',
    },
  ],

  citations: [
    {
      id: 'cummings-pharynx',
      type: 'textbook',
      title: 'Pharyngeal Anatomy and Physiology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section IV',
    },
    {
      id: 'grays-pharynx',
      type: 'textbook',
      title: 'Pharynx',
      authors: ['Standring, S.'],
      source: 'Gray\'s Anatomy: The Anatomical Basis of Clinical Practice',
      chapter: '33',
    },
  ],

  crossReferences: [
    { targetId: 'ent-voice-larynx', targetType: 'topic', relationship: 'related', label: 'Voice and Larynx' },
    { targetId: 'ent-tonsillitis-adenoids', targetType: 'condition', relationship: 'related', label: 'Tonsillitis and Adenoids' },
    { targetId: 'system-digestive', targetType: 'system', relationship: 'parent', label: 'Digestive System' },
    { targetId: 'system-respiratory', targetType: 'system', relationship: 'parent', label: 'Respiratory System' },
  ],

  tags: {
    systems: ['digestive', 'respiratory'],
    structures: ['FMA:46688'],
    topics: ['anatomy', 'head-neck', 'swallowing'],
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

export default throatAnatomy;
