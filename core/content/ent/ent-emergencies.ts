import { EducationalContent } from '../types';

export const entEmergenciesContent: EducationalContent = {
  id: 'ent-emergencies',
  type: 'topic',
  name: 'ENT Emergencies',
  alternateNames: ['Otolaryngologic Emergencies', 'Airway Emergencies', 'ENT Urgencies'],

  levels: {
    1: {
      level: 1,
      summary: 'Some ear, nose, and throat problems need immediate medical attention. These include severe nosebleeds, trouble breathing, things stuck in the throat, and severe infections.',
      explanation: `Most ENT problems are not emergencies, but a few can be dangerous or even life-threatening. Knowing when to seek immediate help can save lives.

**Life-Threatening ENT Emergencies:**

1. **Trouble Breathing (Airway Obstruction)**
   - Can't breathe at all or very difficult breathing
   - May be from choking, infection, or swelling
   - CALL 911 immediately

2. **Severe Allergic Reaction**
   - Sudden swelling of face, lips, tongue, or throat
   - Trouble breathing or swallowing
   - May have hives or feel faint
   - CALL 911 immediately

3. **Severe Nosebleed**
   - Heavy bleeding that won't stop after 10-15 minutes
   - Feeling dizzy or weak from blood loss
   - Go to emergency room

**Urgent ENT Problems:**

1. **Something Stuck (Foreign Body)**
   - In the ear, nose, or throat
   - Button batteries are especially dangerous
   - Seek medical help immediately

2. **Severe Sore Throat with Drooling**
   - Can't swallow your own saliva
   - Sitting forward to breathe
   - May be epiglottitis - medical emergency

3. **Sudden Hearing Loss**
   - Sudden deafness in one ear
   - Needs treatment within days to help recovery
   - Seek care immediately

4. **Facial Weakness**
   - Sudden weakness on one side of face
   - May be stroke - CALL 911 immediately

5. **Severe Ear Pain with Fever**
   - Especially in young children
   - Could need urgent treatment

**When to Call 911:**
- Any trouble breathing
- Choking and can't breathe
- Sudden facial weakness or stroke symptoms
- Severe allergic reaction with swelling
- Loss of consciousness

**When to Go to Emergency Room:**
- Severe nosebleed that won't stop
- Something stuck in ear, nose, or throat (except food you swallowed)
- Severe pain with fever
- Sudden complete hearing loss
- Deep neck infection with swelling

**When to Call Your Doctor:**
- Ear pain that lasts more than a day
- Hoarseness lasting more than 2-3 weeks
- Sore throat with white patches and fever
- Lump in the neck`,
      keyTerms: [
        { term: 'airway obstruction', definition: 'Blockage of breathing passages that prevents air from reaching lungs' },
        { term: 'foreign body', definition: 'Something that shouldn\'t be there, like a toy in the nose' },
        { term: 'epiglottitis', definition: 'Dangerous infection of the airway that can block breathing' },
        { term: 'nosebleed', definition: 'Bleeding from the nose, also called epistaxis' },
        { term: 'stroke', definition: 'Brain damage from interrupted blood supply - causes sudden weakness' },
      ],
      analogies: [
        'Your airway is like a highway for air - when it\'s blocked, nothing gets through.',
        'A button battery is like acid in your throat or nose - it burns through tissue quickly.',
      ],
      examples: [
        'A child who suddenly starts drooling and sitting forward to breathe may have epiglottitis.',
        'Someone who swallows a battery needs emergency care - it can burn through tissue in hours.',
      ],
      patientCounselingPoints: [
        'If someone is choking but can still cough or talk, don\'t interfere - let them try to cough it up.',
        'Never try to remove a foreign body from a child\'s nose or ear at home - you might push it further.',
        'For a nosebleed, pinch the soft part of the nose for 10 full minutes and lean forward slightly.',
        'Know the signs of stroke: Face drooping, Arm weakness, Speech difficulty - Time to call 911.',
      ],
    },

    2: {
      level: 2,
      summary: 'ENT emergencies encompass acute airway obstruction, epistaxis, foreign bodies, severe infections, and sudden sensorineural hearing loss. Rapid recognition and appropriate management are essential to prevent morbidity and mortality.',
      explanation: `ENT emergencies range from immediately life-threatening airway issues to urgent conditions requiring prompt intervention. Understanding these conditions and their initial management is critical for all healthcare providers.

## Airway Emergencies

**Acute Airway Obstruction:**
- Causes: Foreign body aspiration, angioedema, infection, trauma, tumor
- Signs: Stridor, respiratory distress, use of accessory muscles, cyanosis
- Immediate action: Assess severity, prepare for airway intervention
- Choking management: Heimlich maneuver if conscious, CPR if unconscious

**Epiglottitis:**
- Bacterial infection of epiglottis (historically H. influenzae, now diverse)
- Medical emergency: Can rapidly obstruct airway
- Symptoms: Severe sore throat, drooling, muffled voice, tripod position
- Treatment: Airway security, antibiotics, ICU admission
- Note: Rare in children due to Hib vaccine, but occurs in adults

**Bacterial Tracheitis:**
- Bacterial infection of trachea
- Similar to croup but more severe
- Thick secretions: Can obstruct airway
- Symptoms: Stridor, high fever, toxic appearance
- Treatment: Airway management, antibiotics, possible intubation

**Retropharyngeal Abscess:**
- Infection in space behind pharynx
- More common in children under 5
- Symptoms: Neck stiffness, drooling, muffled voice, respiratory distress
- Treatment: Surgical drainage, antibiotics
- Complications: Airway obstruction, mediastinal spread

**Angioedema:**
- Rapid swelling of deep tissues: Face, lips, tongue, larynx
- Causes: Allergic (medications, food), hereditary, idiopathic
- Airway concern: Tongue or laryngeal involvement
- Treatment: Airway protection, antihistamines, steroids, epinephrine, icatibant

## Severe Nosebleeds

**Posterior Epistaxis:**
- Bleeding from posterior nasal cavity
- More common in: Elderly, hypertension, anticoagulated patients
- Difficult to control: May require posterior packing
- Complications: Hypovolemia, aspiration, bradycardia (nasopulmonary reflex)
- Treatment: Posterior packing, arterial ligation, embolization

**Epistaxis Management:**
- Direct pressure: Soft part of nose, 10-15 minutes, lean forward
- Topical vasoconstrictors: Oxymetazoline, phenylephrine
- Cautery: Silver nitrate for visible vessels
- Anterior packing: Various materials (sponges, tampons, balloons)
- Posterior packing: Foley catheter, specialized packs
- Refractory: Arterial ligation or embolization

## Foreign Body Emergencies

**Airway Foreign Bodies:**
- Choking: Complete vs partial obstruction
- Location: Larynx, trachea, bronchi
- Symptoms: Sudden onset, coughing, wheezing, respiratory distress
- Management: Heimlich, back blows, chest thrusts, bronchoscopy
- Button batteries: Medical emergency - tissue necrosis within hours

**Esophageal Foreign Bodies:**
- Most common: Coins in children
- Danger: Button batteries, sharp objects, large food bolus
- Symptoms: Drooling, dysphagia, respiratory symptoms
- Treatment: Rigid esophagoscopy for removal
- Complications: Perforation, mediastinitis, aorto-esophageal fistula

**Nasal Foreign Bodies:**
- Common in children: Beads, toys, food, paper
- Symptoms: Unilateral foul discharge, bleeding, obstruction
- Risk: Posterior displacement into airway
- Treatment: Removal by ENT specialist
- Button batteries: Urgent removal needed

**Aural Foreign Bodies:**
- Objects: Beads, insects, food
- Symptoms: Pain, drainage, decreased hearing
- Risk: Tympanic membrane perforation
- Treatment: Removal under microscope
- Insects: Kill first (lidocaine, alcohol) then remove

## Severe Infections

**Peritonsillar Abscess (Quinsy):**
- Collection of pus behind tonsil
- Symptoms: Severe sore throat, trismus, hot potato voice, uvular deviation
- Treatment: Needle aspiration, incision and drainage, tonsillectomy
- Airway concern: May need intubation if severe

**Ludwig's Angina:**
- Bilateral infection of submandibular, sublingual, submental spaces
- Airway compromise: Tongue displacement
- Symptoms: Neck swelling, trismus, dysphagia, respiratory distress
- Treatment: Airway security, antibiotics, surgical drainage
- Medical emergency: Mortality up to 50% without treatment

**Deep Neck Space Infections:**
- Various spaces: Lateral pharyngeal, retropharyngeal, prevertebral
- Routes: Dental infection, tonsillitis, trauma, lymphadenitis
- Symptoms: Neck swelling, pain, fever, dysphagia
- Complications: Airway obstruction, mediastinitis, jugular vein thrombosis
- Treatment: Airway, antibiotics, surgical drainage, CT imaging

**Mastoiditis:**
- Complication of otitis media
- Symptoms: Ear pain, swelling behind ear, fever, protruding auricle
- Treatment: IV antibiotics, possible mastoidectomy
- Complications: Intracranial spread, facial paralysis

## ENT Trauma

**Facial Fractures:**
- Nasal fracture: Most common facial fracture
- Orbital fracture: Eye injury, entrapment
- Mandible fracture: Malocclusion, pain, trismus
- Frontal sinus: CSF leak, intracranial injury
- Treatment: Airway first, then reduction/fixation

**Ear Trauma:**
- Basilar skull fracture: CSF otorrhea, hemotympanum, Battle sign
- Temporal bone fracture: Facial paralysis, hearing loss, vertigo
- Tympanic membrane perforation: From trauma, explosions, pressure
- Barotrauma: Scuba diving, flying

**Laryngeal Trauma:**
- Blunt neck trauma: Stridor, subcutaneous emphysema
- Vocal cord injury: Hoarseness, airway obstruction
- Fractures: Thyroid, cricoid cartilage
- Treatment: Airway management, voice rest, surgical repair

## Sudden Sensorineural Hearing Loss

**Definition:**
- Sudden hearing loss: 30 dB or more in 3 frequencies
- Occurs: Within 72 hours (often immediate)
- Usually unilateral: One ear affected

**Causes:**
- Idiopathic: Most common (90%)
- Viral: Reactivation or new infection
- Vascular: Ischemia, hemorrhage
- Autoimmune: Inner ear antibodies
- Perilymph fistula: Round/oval window rupture

**Emergency:**
- Treatment window: Best within 2-4 weeks
- Treatment: Oral or intratympanic steroids
- Prognosis: Variable, ~50% spontaneous recovery
- Workup: Audiogram, MRI to exclude acoustic neuroma

## Other ENT Urgencies

**Acute Mastoiditis:**
- Complication of otitis media
- Signs: Pinna protrusion, postauricular swelling, erythema
- Treatment: IV antibiotics, possible mastoidectomy

**Nasal Septal Hematoma:**
- Blood collection between septal cartilage and perichondrium
- Trauma: Nasal fracture
- Emergency: Drains within 24 hours to prevent cartilage necrosis
- Treatment: Incision and drainage, packing

**Facial Nerve Paralysis (Bell's Palsy vs Stroke):**
- Rapid onset: Facial weakness
- Stroke: Usually forehead sparing, other neurologic findings
- Bell's palsy: Entire side of face affected
- Urgent: Time-dependent steroids for Bell's palsy

**Cervical Spine Injury with Trauma:**
- Suspected with: Head and neck trauma
- Precaution: C-spine immobilization
- Evaluation: CT scan for bony injury`,
      keyTerms: [
        { term: 'airway obstruction', definition: 'Blockage of breathing passages preventing adequate ventilation' },
        { term: 'epiglottitis', definition: 'Acute infection of epiglottis causing airway emergency' },
        { term: 'retropharyngeal abscess', definition: 'Pus collection behind pharynx, common in children under 5' },
        { term: 'angioedema', definition: 'Rapid swelling of deep tissues, potentially affecting airway' },
        { term: 'peritonsillar abscess', definition: 'Collection of pus behind tonsil causing severe sore throat' },
        { term: 'Ludwig\'s angina', definition: 'Bilateral submandibular space infection with airway compromise' },
        { term: 'SSNHL', definition: 'Sudden sensorineural hearing loss, otologic emergency' },
        { term: 'septal hematoma', definition: 'Blood collection between septal cartilage and perichondrium' },
      ],
      analogies: [
        'Ludwig\'s angina is like a rising tide in the neck - swelling pushes the tongue back and blocks the airway.',
        'A septal hematoma is like a blood blister in your nose - if you don\'t drain it, the cartilage dies.',
      ],
      patientCounselingPoints: [
        'If you have sudden complete hearing loss in one ear, seek emergency care - treatment is most effective within days.',
        'Severe neck swelling with difficulty swallowing or breathing needs emergency evaluation.',
        'For suspected epiglottitis, do NOT examine the throat in the office - this can trigger airway spasm.',
        'Button batteries are medical emergencies - if a child swallows one, go to the ER immediately.',
      ],
    },

    3: {
      level: 3,
      summary: 'ENT emergencies demand rapid assessment, airway prioritization, and targeted intervention. Conditions range from immediately life-threatening airway obstruction to time-sensitive conditions like sudden hearing loss. Understanding pathophysiology, clinical presentation, and evidence-based management optimizes outcomes.',
      explanation: `## Airway Assessment and Management

**The Airway Algorithm:**
- A: Assess patency (look, listen, feel)
- B: Breathing effectiveness (work of breathing, oxygenation)
- C: Circulation compromise (hypoxia, bradycardia)

**Stridor Assessment:**
- Inspiratory: Upper airway (supraglottis, glottis)
- Biphasic: Fixed obstruction (subglottis, trachea)
- Expiratory: Lower airway (asthma, bronchiolitis)
- Positional: Better when upright suggests epiglottitis

**Airway Examination Pearls:**
- DO NOT agitate: Suspected epiglottitis
- Look: Drooling, tripod position, toxic appearance
- Listen: Stridor quality, voice quality, cough
- Feel: Subcutaneous emphysema, tracheal deviation
- Imaging: Lateral neck X-ray (thumb sign), neck CT (stable patients)

**Airway Intervention Decision Tree:**
- Patent airway: Observation, monitoring
- Compromised but stable: Prepare for definitive airway
- Critical: Immediate intervention
  - RSI contraindicated: Epiglottitis, deep neck infection
  - Awake fiberoptic: Preferred for difficult airway
  - Tracheostomy under local: When oral access impossible
  - Cricothyrotomy: Surgical airway of last resort

## Epiglottitis: Contemporary Management

**Epidemiology Shift:**
- Pre-vaccine: H. influenzae type B in children
- Post-vaccine: Adults, diverse pathogens
- Adult cases: Increasing, often misdiagnosed initially

**Pathogens:**
- Non-typeable H. influenzae
- Streptococcus: Groups A, B, C, G
- Staphylococcus aureus (including MRSA)
- Pseudomonas aeruginosa (immunocompromised)
- Viral co-infection: Possible

**Clinical Presentation:**
- Severe odynophagia: Out of proportion to exam
- Muffled voice: "Hot potato" voice
- Drooling: Inability to swallow secretions
- Tripod position: Sitting forward, arms supporting
- Distress: Quiet but toxic appearance (stridor may be absent)

**Diagnosis:**
- Lateral neck X-ray: Thumb sign (enlarged epiglottis)
- CT scan: Only in stable patients, airway secured
- Direct laryngoscopy: Only with airway control
- Blood cultures: Before antibiotics
- Soft tissue neck X-ray: Alternative to CT

**Management:**
- Airway: Highest priority, may deteriorate rapidly
- Antibiotics: Ceftriaxone + vancomycin (or cefuroxime)
- Steroids: Controversial, may reduce edema
- ICU: For close monitoring
- Intubation: In OR, prepared for surgical airway

## Deep Neck Infections

**Anatomic Spaces:**
*Peritonsillar Space:*
- Between tonsil and superior constrictor
- Peritonsillar abscess most common
- Uvular deviation: AWAY from affected side

*Retropharyngeal Space:*
- Posterior to pharynx, anterior to prevertebral fascia
- Lymph nodes: Regress by age 5
- Potential space: Can expand significantly
- Danger: Mediastinal extension

*Lateral Pharyngeal Space:*
- Contains: Carotid sheath, cranial nerves IX-XII
- Infection: Can compress vessels and nerves
- Stages: Cellulitis → abscess

*Submandibular Space:*
- Ludwig's angina: Bilateral involvement
- Floor of mouth: Tongue elevation
- Airway: Major concern

**Diagnostic Approach:**
- CT with contrast: Gold standard
- MRI: When iodinated contrast contraindicated
- Ultrasound: Limited utility in deep neck
- Clinical: Examination often sufficient for peritonsillar abscess

**Treatment Principles:**
- Airway: First priority
- IV antibiotics: Cover oral anaerobes and aerobes
  - Ampicillin-sulbactam
  - Clindamycin + ceftriaxone
  - Piperacillin-tazobactam (severe)
- Surgical drainage: For abscess formation
- ICU monitoring: For airway compromise

**Complications:**
- Airway obstruction: Most common cause of mortality
- Mediastinitis: Extension down carotid sheath
- Jugular vein thrombosis: Lemierre syndrome ( Fusobacterium)
- Internal carotid erosion: Rupture, stroke
- Cavernous sinus thrombosis: Anterior spread
- Abscess rupture: Aspiration pneumonia

## Facial and Neck Trauma

**Cervical Spine Evaluation:**
- High-risk: Head trauma, neck pain, altered mental status
- Precaution: C-collar until cleared
- Imaging: CT angiography for vascular injury
- Clearance: Clinical vs radiographic based on mechanism

**Penetrating Trauma:**
- Zone I (clavicles to cricoid): Great vessels, esophagus, trachea
- Zone II (cricoid to angle of mandible): Most accessible
- Zone III (angle of mandible to skull base): Distal vessels, skull base
- Mandatory exploration: Hard signs of vascular injury
- Angiography: Preoperative for zones I and III

**Nasal Trauma:**
- Septal hematoma: Emergency - drain within 24 hours
- Nasal fracture: Most common facial fracture
- CSF leak: Clear drainage, needs neurosurgical consultation
- Epistaxis control: Packing, balloon catheters

**Temporal Bone Fracture:**
- Longitudinal: Most common (80%), otic capsule sparing
  - Symptoms: Hemotympanum, facial paralysis (20% temporary)
  - Hearing: Conductive loss (TM perforation, hemotympanum)
- Transverse: Otic capsule violating
  - Symptoms: Sensorineural loss, vertigo, facial paralysis (50% permanent)
  - Nystagmus: Perpendicular to lesion side
- Treatment: Airway, observation, antibiotics for CSF leak, facial nerve decompression (controversial)

**Laryngeal Trauma:**
- Mechanism: Clothesline injury, strangulation, blunt neck trauma
- Signs: Stridor, subcutaneous emphysema, hoarseness, palpable defect
- CT scan: With fine cuts through larynx
- Classification: Schaefer system (I-V) guides treatment
- Airway: Early intubation or tracheostomy before obstruction

## Sudden Sensorineural Hearing Loss

**Definition and Classification:**
- Sudden SNHL: 30 dB in 3 contiguous frequencies within 72 hours
- Often unilateral: Bilateral in 1-2%
- Idiopathic: 90% of cases

**Pathophysiology:**
- Viral: Reactivation (HSV, VZV) or new infection
- Vascular: Ischemia, thrombosis, hemorrhage
- Autoimmune: Inner ear antibodies
- Intracochlear membrane rupture: Perilymph fistula
- Multiple mechanisms: May coexist

**Prognostic Factors:**
- Age: Better in younger patients
- Treatment delay: Better if treated within 2 weeks
- Initial hearing: Worse initial hearing predicts poorer outcome
- Vertigo: Associated with poorer prognosis
- Audiogram pattern: Upsloping better than downsloping

**Diagnosis:**
- Audiogram: Establishes baseline, SNHL pattern
- MRI brain with contrast: Exclude acoustic neuroma
- Blood tests: RPR, FTA-ABS, CBC, ESR, metabolic panel
- Vestibular testing: If vertigo present

**Treatment:**
- Oral steroids: Prednisone 60mg daily x 14 days with taper
- Intratympanic steroids: For salvage or contraindications to oral steroids
- Combination: Oral + intratympanic (better outcomes in some studies)
- Hyperbaric oxygen: Controversial, may have benefit
- Antivirals: Generally not recommended (studies show no benefit)

**Follow-up:**
- Repeat audiogram: At 1-2 weeks, then 1-2 months
- Hearing improvement: ≥10 dB considered significant
- Vestibular rehabilitation: If persistent balance issues

## ENT-Related Stroke

**Carotid Artery Dissection:**
- Trauma: Blunt or penetrating neck injury
- Symptoms: Horner syndrome, neck pain, TIAs, stroke
- Diagnosis: CTA, MRA, or conventional angiography
- Treatment: Anticoagulation or antiplatelet therapy
- Surgical: Stenting for refractory cases

**Vertebrobasilar Insufficiency:**
- Anatomy: Vertebral arteries in cervical spine foramina
- Mechanism: Compression by rotation or osteophytes
- Symptoms: Vertigo, visual disturbance, ataxia, drop attacks
- Bow hunter syndrome: Symptomatic with head turning
- Treatment: Conservative, cervical collar, surgical decompression

**Carotid Body Tumor:**
- Paraganglioma at carotid bifurcation
- Symptoms: Neck mass, cranial nerve involvement
- Vascular: Splaying of carotids (lyre sign)
- Treatment: Surgical excision with preoperative embolization

## Otic and Sinus Complications

**Acute Mastoiditis:**
- Progression: Otitis media → mastoid air cell opacification → coalescence
- Symptoms: Pinna protrusion, postauricular swelling, erythema, fever
- Signs: Pinna displaced inferiorly and anteriorly
- Treatment: IV antibiotics, mastoidectomy for abscess or failure
- Complications: Intracranial spread, facial paralysis, sigmoid sinus thrombosis

**Intracranial Complications of ENT Infections:**
- Meningitis: Most common
- Epidural abscess: Between dura and skull
- Subdural empyema: Between dura and arachnoid
- Brain abscess: Within brain parenchyma
- Cavernous sinus thrombosis: From facial/sinus infection
- Lateral sinus thrombosis: From mastoiditis
- Signs: Fever, headache, neurologic deficits
- Treatment: High-dose IV antibiotics, neurosurgical drainage

**Orbital Complications of Sinusitis:**
- Chandler classification:
  - I: Preseptal cellulitis (eyelid inflammation)
  - II: Orbital cellulitis
  - III: Subperiosteal abscess
  - IV: Orbital abscess
  - V: Cavernous sinus thrombosis
- Symptoms: Eye pain, proptosis, ophthalmoplegia, vision loss
- Treatment: IV antibiotics, surgical drainage

## Foreign Body Management

**Button Battery Emergency:**
- Tissue necrosis: Within 2-4 hours
- Electrolysis: Hydroxide generation
- Perforation: Esophageal, tracheoesophageal fistula
- Aortoesophageal fistula: Catastrophic, fatal hemorrhage
- Management: Immediate endoscopic removal
- Post-removal: Endoscopic evaluation for injury

**Sharp Objects:**
- Risk: Perforation, migration
- Management: Careful endoscopic removal
- Follow-up: Imaging if concern for retained fragments

**Food Impaction:**
- Observation: For 12-24 hours (may pass)
- Intervention: For complete obstruction, symptoms >24h
- Techniques: Endoscopic removal, push technique (controversial)

**Single-Sided Nasal Foreign Body:**
- Unilateral discharge: Pathognomonic
- Unilateral foul odor: Suggests organic material
- Removal risk: Posterior displacement into airway
- Technique: Various (hook, balloon, suction, specialist only)`,
      keyTerms: [
        { term: 'stridor', definition: 'High-pitched breathing sound indicating upper airway obstruction' },
        { term: 'biphasic stridor', definition: 'Stridor in both inspiration and expiration indicating fixed obstruction' },
        { term: 'thumb sign', definition: 'Enlarged epiglottis on lateral neck X-ray resembling a thumb' },
        { term: 'tripod position', definition: 'Sitting upright leaning forward, classic for epiglottitis' },
        { term: 'Chandler classification', definition: 'Stages I-V of orbital complications from sinusitis' },
        { term: 'clothesline injury', definition: 'Blunt trauma across neck striking larynx' },
        { term: 'Lemierre syndrome', definition: 'Septic thrombophlebitis of internal jugular vein from oropharyngeal infection' },
        { term: 'lyre sign', definition: 'Splaying of carotid bifurcation on angiography in carotid body tumor' },
      ],
      clinicalNotes: `Epiglottitis is a true airway emergency - do NOT attempt to visualize the pharynx in suspected cases, as this may trigger laryngospasm and complete airway obstruction. The "quiet" child with severe sore throat, drooling, and tripod position is classic - the lack of stridor does not mean the airway is secure.

Deep neck infections can rapidly progress to airway compromise. The most reliable sign of impending airway obstruction is not stridor but rather the patient's position (sitting forward, drooling) and appearance (toxic, anxious). Any patient with suspected deep neck infection should have the airway secured in a controlled setting (operating room) before attempting diagnostic procedures.

Peritonsillar abscess can usually be diagnosed clinically - unilateral sore throat, trismus, hot potato voice, and uvular deviation AWAY from the affected side. Needle aspiration not only confirms the diagnosis but also treats the condition.`,
      patientCounselingPoints: [
        'For sudden hearing loss, treatment is most effective when started within days - don\'t wait to see if it improves.',
        'If you have severe neck pain with fever and difficulty swallowing, this is an emergency requiring immediate evaluation.',
        'A nosebleed that doesn\'t stop after 20 minutes of direct pressure needs medical attention.',
        'If you or someone else shows signs of stroke (face drooping, arm weakness, speech difficulty), call 911 immediately.',
      ],
    },

    4: {
      level: 4,
      summary: 'ENT emergencies require rapid clinical assessment, airway prioritization, and targeted intervention. Understanding complex pathophysiology, anatomical considerations, and evidence-based management protocols is essential for optimal outcomes in these potentially life-threatening conditions.',
      explanation: `## Advanced Airway Management

**Difficult Airway Prediction:**
- LEMON mnemonic: Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility
- ENT-specific: Neck mass, radiation, prior surgery, infection, trauma
- Pediatric differences: Larger tongue, larynx higher, epiglottis omega-shaped

**Airway Rescue Techniques:**
- RSI contraindications: Epiglottitis, supraglottitis, deep neck infection, trauma
- Awake fiberoptic intubation: Gold standard for difficult airway
- Video laryngoscopy: Improved visualization for many
- Supraglottic airways: LMA as bridge to definitive airway
- Surgical airway: Cricothyrotomy (needle or surgical), tracheostomy

**Cricothyrotomy vs Tracheostomy:**
- Cricothyrotomy: Faster, emergent, temporary
- Tracheostomy: More controlled, definitive, difficult in emergencies
- Indications by age: Cricothyrotomy >12 years, tracheostomy <10 years
- Technique: Surgical vs Seldinger (needle) for cricothyrotomy

**Extubation Considerations:**
- Airway edema: Cuff leak test
- Stridor: Post-extubation management
- Racemic epinephrine: For post-extubation croup
- Reintubation: Have difficult airway equipment ready

## Complex Epistaxis Management

**Vascular Anatomy:**
- Sphenopalatine artery: Posterior lateral nasal wall (most common posterior bleed)
- Anterior ethmoidal artery: Roof of anterior ethmoid, anterior epistaxis
- Posterior ethmoidal artery: Posterior superior
- Superior labial artery: Kiesselbach's plexus contribution
- Greater palatine artery: Posterior nasal floor

**Posterior Epistaxis Management:**
- Posterior packing: Foley balloon, specialized packs
- Arterial ligation:
  - Transnasal endoscopic: Sphenopalatine artery
  - Internal maxillary: Transantral (Caldwell-Luc) approach
  - External: Internal maxillary, ethmoidal arteries
- Embolization:
  - Indications: Failed conservative/surgical management
  - Vessels: Maxillary, facial, internal maxillary branches
  - Risks: Stroke, blindness, facial nerve damage

**Epistaxis in Anticoagulated Patients:**
- Reversal: If life-threatening (warfarin, DOACs)
- Local measures: Aggressive cautery, packing
- Hemodynamic: Monitor for anemia
- Specialist: ENT consultation early

**Hereditary Hemorrhagic Telangiectasia (HHT):**
- Osler-Weber-Rendu syndrome
- Vascular malformations: Mucocutaneous, visceral
- Epistaxis: Most common manifestation
- Management: Laser cautery, septal dermoplasty, arterial ligation, embolization
- Gender: Estrogen therapy (historical, limited use)

## Deep Neck Infections: Advanced

**Lemierre Syndrome:**
- Pathogenesis: Fusobacterium necrophorum tonsillar infection
- Thrombophlebitis: Internal jugular vein
- Septic emboli: Lungs most commonly
- Diagnosis: Contrast CT showing thrombus, blood cultures
- Treatment: Prolonged antibiotics (4-6 weeks), anticoagulation (controversial)
- Mortality: Historically high, now <5% with treatment

**Descending Necrotizing Mediastinitis:**
- Source: Deep neck infection spreading caudally
- Pathways: Retropharyngeal, carotid sheath, prevertebral
- Classification:
  - Type I: Descending from retropharyngeal space
  - Type II: Descending from lateral pharyngeal/space
- Treatment: Combined cervical and mediastinal drainage
- Mortality: Up to 40% without adequate drainage

**Parapharyngeal Abscess:**
- Anatomy: Lateral to pharynx, medial to pterygoids
- Contents: Fat, lymph nodes, internal carotid, cranial nerves IX-XII
- Danger: Vascular compression, cranial neuropathy
- Approach: Transoral (with aspiration) vs external

**Prevertebral Abscess:**
- Location: Anterior to vertebral bodies, posterior to pharynx
- Cause: Vertebral osteomyelitis (Pott disease), foreign body penetration
- Diagnosis: CT with contrast, MRI for osteomyelitis
- Treatment: Surgical drainage, antibiotics, spinal stabilization if needed

## Facial Trauma: Advanced

**Panfacial Fractures:**
- Definition: Fractures involving upper, middle, and lower face
- Sequencing: Bottom-up, outside-in (mandible first)
- Approach: Coronal, sublabial, intraoral, periorbital
- Reconstruction: Primary bone grafting when possible
- Occlusion: Key to mandibular fracture reduction

**Orbital Complications:**
- Entrapment: Inferior rectus in floor fracture
- Enophthalmos: Increased orbital volume
- Diplopia: Extraocular muscle involvement
- Globe injury: Rupture, optic nerve injury
- Emergent: Orbital compartment syndrome (can't wait for CT)

**NOE Fractures (Naso-Orbital-Ethmoidal):**
- Classification: Type I-III based on central segment involvement
- Telecanthus: Widened intercanthal distance
- CSF leak: Common with cribriform plate involvement
- Treatment: Open reduction, internal fixation, canthal reset
- Complications: CSF leak, telecanthus, epiphora, anosmia

**Frontal Sinus Fractures:**
- Anterior table: Cosmetic deformity
- Posterior table: CSF leak, intracranial injury
- Frontal sinus outflow: Fracture involvement
- Nasofrontal duct: Disrupted requiring obliteration or cranialization
- Treatment: Observation, open reduction, obliteration, cranialization

## Temporal Bone Trauma: Advanced

**Transverse Fracture Details:**
- Force: Occipital impact
- Course: Perpendicular to petrous axis
- Otic capsule: Usually violated
- Findings: Sensorineural hearing loss, vertigo, nystagmus
- Facial nerve: Injury in labyrinthine segment (50% permanent)
- CT: Best imaging modality

**Longitudinal Fracture Details:**
- Force: Temporal or parietal impact
- Course: Parallel to petrous axis
- Otic capsule: Usually spared
- Findings: Hemotympanum, tympanic membrane perforation
- Facial nerve: Injury in temporal segment (often transient)
- Ossicular chain: Disruption possible

**Management Principles:**
- Initial: ABCs, cervical spine evaluation
- Antibiotics: For CSF leak or open fracture
- Tetanus: Update if indicated
- Facial nerve: Immediate exploration if complete paralysis
- Hearing rehabilitation: Delayed until patient stable

**Complications:**
- CSF otorhinorrhea: Tympanic membrane or tegmen
- Meningitis: Risk increased with CSF leak
- Cholesteatoma: Late complication from trapped squamous epithelium
- Delayed facial palsy: May develop days to weeks post-injury

## Angioedema: Advanced Management

**Hereditary Angioedema (HAE):**
- Deficiency: C1 esterase inhibitor deficiency (Type I or II)
- Triggers: Trauma, stress, ACE inhibitors, estrogen
- Presentation: Recurrent swelling, often abdominal, laryngeal involvement dangerous
- Diagnosis: Low C4, low/absent C1 inhibitor, normal C1q
- Treatment:
  - Acute: Icatibant (bradykinin B2 antagonist), C1 inhibitor concentrate, ecallantide
  - Prophylaxis: Danazol, stanazol, C1 inhibitor
  - Androgen: Side effects limit use

**ACE Inhibitor-Induced Angioedema:**
- Mechanism: Bradykinin accumulation (not IgE-mediated)
- Onset: Can occur months to years after starting
- Risk: Higher in African Americans
- Treatment: Discontinue ACE inhibitor, support airway
- Refractory: Icatibant, C1 inhibitor (off-label but effective)

**Allergic Angioedema:**
- Mechanism: Histamine-mediated (IgE or non-IgE)
- Onset: Minutes to hours after exposure
- Treatment: Antihistamines, steroids, epinephrine
- Airway: May need intervention for laryngeal edema

## Sudden Hearing Loss: Advanced Concepts

**Steroid Delivery:**
- Oral: Systemic effects, contraindications in some patients
- Intratympanic: Direct delivery, avoids systemic effects
- Injection techniques: Needle through tympanic membrane or round window niche
- Number of injections: 3-4 at weekly intervals
- Combination: Oral plus intratympanic best salvage

**Hyperbaric Oxygen:**
- Mechanism: Increases oxygen delivery to inner ear
- Evidence: Mixed but may have benefit as adjunct
- Protocol: 2-2.5 ATA, 90 minutes, daily for 10-20 treatments
- Cost: Significant, access limited
- Complications: Barotrauma, oxygen toxicity

**Vasodilators and Rheologics:**
- Pentoxifylline: Improves microcirculation
- Prostaglandins: Limited evidence
- Calcium channel blockers: Limited evidence
- Not routinely recommended: Due to lack of strong evidence

**Recovery Patterns:**
- Complete recovery: ~30-40%
- Partial recovery: ~20-30%
- No recovery: ~40% (worse outcomes than untreated due to severity)

## Pediatric ENT Emergencies: Special Considerations

**Acute Bacterial Tracheitis:**
- Overlap with croup but more severe
- Thick secretions: Characteristic finding
- Toxic appearance: High fever, leukocytosis
- Intubation: Often required
- Culture: S. aureus, S. pyogenes, H. influenzae
- Treatment: Airway, antibiotics, humidification

**Bacterial Conjunctivitis in Newborn:**
- Gonococcal: Perforation risk, systemic illness
- Chlamydial: Pneumonitis risk
- Treatment: Systemic antibiotics (ceftriaxone, erythromycin)
- Prevention: Erythromycin eye prophylaxis

**Post-Tonsillectomy Bleeding:**
- Primary: <24 hours (surgical technique issue)
- Secondary: 5-10 days (fibrinolysis of clot)
- Management: Observation, fluid resuscitation, cautery, packing, OR
- Prevention: Avoid NSAIDs perioperatively (controversial)`,
      keyTerms: [
        { term: 'LEMON mnemonic', definition: 'Look, Evaluate 3-3-2, Mallampati, Obstruction, Neck mobility airway assessment' },
        { term: 'cuff leak test', definition: 'Assessment for airway edema before extubation' },
        { term: 'HHT', definition: 'Hereditary hemorrhagic telangiectasia (Osler-Weber-Rendu syndrome)' },
        { term: 'septal dermoplasty', definition: 'Replacement of nasal septal mucosa with skin graft for recurrent epistaxis' },
        { term: 'NOE fracture', definition: 'Naso-orbital-ethmoidal complex fracture' },
        { term: 'cranialization', definition: 'Surgical removal of posterior frontal sinus wall into cranial cavity' },
        { term: 'bradykinin', definition: 'Vasodilator peptide responsible for swelling in HAE and ACEI angioedema' },
        { term: 'icatibant', definition: 'Bradykinin B2 receptor antagonist for HAE treatment' },
      ],
      clinicalNotes: `In suspected epiglottitis, the "quiet" child is classic - lack of stridor does NOT mean a secure airway. The tripod position (sitting, leaning forward, mouth open) and drooling are pathognomonic. Letting these children lie supine for imaging can precipitate complete airway obstruction. The lateral neck X-ray should be obtained in the upright position, with the airway team at the bedside.

Lemierre syndrome requires a high index of suspicion in adolescents/young adults with worsening pharyngitis despite antibiotics, neck pain, and pulmonary symptoms. The internal jugular vein thrombosis can be difficult to diagnose on CT - contrast-enhanced imaging with careful attention to the jugular veins is essential. Treatment with appropriate antibiotics (penicillin or metronidazole) for 4-6 weeks is recommended, with anticoagulation controversial but often used.

Button batteries in the esophagus require emergent endoscopic removal - tissue necrosis begins within 2-4 hours, and aortoesophageal fistula can be fatal. If a button battery is identified in the nose or ear, it also requires urgent removal, though not as emergent as esophageal ingestion.`,
    },

    5: {
      level: 5,
      summary: 'Contemporary management of ENT emergencies integrates airway expertise, advanced imaging, minimally invasive interventions, and multidisciplinary care. Evidence-based protocols prioritize rapid assessment, appropriate escalation, and targeted treatment to optimize outcomes in these high-stakes clinical scenarios.',
      explanation: `## Evidence-Based Emergency Protocols

**Difficult Airway Society 2022 Algorithm:*
- Plan A: Initial approach (face mask, SGA, tracheal intubation)
- Plan B: Secondary intubation techniques
- Plan C: Rescue techniques (SGA)
- Plan D: Surgical airway (FONA)
- ENT-specific modifications: Awake techniques, surgical options earlier

**Epistaxis Care Pathway:**
- Assessment: ABCDE, hemodynamic stability
- Local measures: Topical anesthesia/vasoconstriction, pressure, cautery
- Escalation: Anterior packing → Posterior packing → Embolization/Ligation
- Admission: Posterior packing, coagulopathy, significant blood loss
- Follow-up: ENT review within 1 week

**Sudden Hearing Loss Pathway:**
- Urgent audiogram: Within 24 hours
- MRI: Exclude vestibular schwannoma
- Treatment: Steroids within 2 weeks optimal
- Intratympanic: If contraindications to oral steroids or salvage
- Follow-up: Repeat audiogram at 2-4 weeks

## Advanced Airway Techniques

**Awake Tracheal Intubation:**
- Indications: Predicted difficult airway with cervical spine injury
- Technique: Topical anesthesia, sedation (if appropriate), fiberoptic
- Benefits: Patient maintains spontaneous respiration
- Alternatives: Video laryngoscope, bougie, optical stylet

**Cricothyrotomy Techniques:**
- Surgical: Scalpel, bougie, tube (SBT) technique
- Seldinger: Needle, guidewire, dilators (Melker set)
- Rapid four-step technique: Scalpel, bougie, tube, secure
- Education: Regular simulation training recommended

**Video Laryngoscopy in Emergencies:**
- Advantages: Improved glottic view over direct laryngoscopy
- Learning curve: Less than fiberoptic
- Limitations: Blood or secretions obscure view
- Indications: Difficult airway, cervical spine immobilization

## Complex Trauma Management

**Le Fort Fractures:**
- Type I: Horizontal maxillary fracture above teeth
- Type II: Pyramidal fracture through nasal bone and maxilla
- Type III: Complete craniofacial dysjunction
- Treatment: Open reduction, rigid fixation, occlusion restoration
- Airway: Often compromised, early intubation/tracheostomy

**Mandibular Fractures:**
- Condyle: Most common site in children
- Angle: Most common in adults
- Body: Tooth-bearing area concerns
- Symphysis: Often bilateral
- Treatment: Closed reduction (immature dentition) vs open reduction with fixation

**Ocular Emergencies in Facial Trauma:**
- Retrobulbar hematoma: Orbital compartment syndrome
- Signs: Proptosis, tense orbit, visual loss, afferent pupillary defect
- Treatment: Lateral canthotomy and cantholysis (can't wait for CT)
- Orbital decompression: Canthotomy, inferior and medial orbital wall removal

## Vascular Emergencies

**Carotid Artery Injury:**
- Penetrating: Zone II (mandatory exploration)
- Blunt: Angiography for screening
- Signs: Active bleeding, expanding hematoma, bruit, neurologic deficit
- Treatment: Repair vs ligation based on neurologic status
- Shunting: For prolonged occlusion time

**Vertebral Artery Injury:**
- Mechanism: Cervical spine fractures (foramen transversarium involvement)
- Diagnosis: CTA or conventional angiography
- Treatment: Endovascular coil or stent, ligation
- Complications: Posterior circulation stroke

**Temporal Bone Hemorrhage:**
- Intracranial extension: Epidural, subdural
- Middle cranial fossa: Temporal lobe compression
- Posterior fossa: Brainstem compression
- Treatment: Neurosurgical drainage, mastoidectomy

## Antibiotic Stewardship in Emergencies

**Deep Neck Infections:**
- Empiric: Ampicillin-sulbactam or clindamycin + ceftriaxone
- MRSA coverage: Add vancomycin if risk factors
- Duration: 2-4 weeks based on clinical response
- De-escalation: Based on culture results
- Surgical: Drainage essential for abscess

**Mastoiditis:**
- Empiric: Ceftriaxone + vancomycin
- Culture: Mastoid bone if surgery performed
- Duration: 2 weeks IV, then oral based on organism
- Surgery: Simple mastoidectomy for coalescent disease

**Epiglottitis:**
- Empiric: Ceftriaxone + vancomycin
- Coverage: S. pneumoniae, S. pyogenes, S. aureus (including MRSA)
- Duration: 7-10 days
- ICU: Monitoring until airway secure

## Quality Improvement in ENT Emergencies

**Time-Critical Interventions:**
- Airway: Immediate for obstruction
- Button battery: <2 hours for removal
- SSNHL: <2 weeks for steroids
- Epistaxis: <30 minutes control target
- Abscess drainage: <6 hours for uncomplicated

**Performance Metrics:**
- Time to airway: In obstruction scenarios
- Return to OR: For bleeding
- Length of stay: Benchmarking
- Readmission: Unplanned
- Complications: Bleeding, infection, airway issues

## Multidisciplinary Management

**Trauma Team:**
- Trauma surgery: Team lead for polytrauma
- Neurosurgery: Intracranial injury
- ENT: Airway, facial trauma, skull base
- Ophthalmology: Eye injuries
- Radiology: Rapid imaging interpretation

**Stroke Team:**
- Recognition: FAST (Face, Arm, Speech, Time)
- Imaging: CT angiography for large vessel occlusion
- Intervention: tPA (3-4.5 hours), thrombectomy (6-24 hours)
- Rehabilitation: Early mobilization

## Future Directions

**Ultrasound in Emergency ENT:**
- Airway: Identify cricothyroid membrane
- Peritonsillar abscess: Guide aspiration
- Neck masses: Differentiate cystic vs solid
- Vascular: Confirm vessel patency

**Telemedicine in ENT Emergencies:**
- Remote assessment: Rural or underserved areas
- Triage: Determine need for transfer
- Specialist consultation: Before transfer
- Follow-up: Post-emergency care

**Simulation Training:**
- Airway emergencies: Regular practice
- Cricothyrotomy: Skill maintenance
- Team training: CRM principles
- Assessment: Debriefing and feedback`,
      keyTerms: [
        { term: 'DAS algorithm', definition: 'Difficult Airway Society systematic approach to failed intubation' },
        { term: 'FONA', definition: 'Front of neck access - surgical airway of last resort' },
        { term: 'SBT technique', definition: 'Scalpel, bougie, tube rapid cricothyrotomy technique' },
        { term: 'lateral canthotomy', definition: 'Emergency orbital decompression for retrobulbar hematoma' },
        { term: 'Le Fort fractures', definition: 'Classification of midface fracture patterns' },
        { term: 'CRM', definition: 'Crisis resource management - team training principles' },
      ],
      clinicalNotes: `The Difficult Airway Society guidelines emphasize having clear backup plans before attempting any intubation. For ENT emergencies, this often means proceeding directly to Plan C (supraglottic airway) or Plan D (surgical airway) in conditions like epiglottitis or deep neck infections where RSI is contraindicated.

Retrobulbar hematoma is a true ophthalmic emergency - the signs of proptosis, tense orbit, and visual loss require immediate lateral canthotomy and inferior cantholysis at the bedside. Waiting for imaging or ophthalmology consultation in these cases can result in permanent vision loss.

Button battery emergency: The 2-hour window for removal is critical because tissue necrosis begins within this timeframe. Aortoesophageal fistula is a catastrophic complication that can be fatal even weeks after battery removal if the injury wasn't recognized during initial extraction.`,
    },
  },

  media: [
    {
      id: 'ent-emergencies-algorithm',
      type: 'diagram',
      filename: 'ent-airway-emergency-algorithm.svg',
      title: 'ENT Airway Emergency Algorithm',
      description: 'Decision tree for managing acute airway obstruction',
    },
    {
      id: 'epistaxis-management-flowchart',
      type: 'diagram',
      filename: 'epistaxis-management-algorithm.svg',
      title: 'Epistaxis Management Algorithm',
      description: 'Stepwise approach to controlling nosebleeds',
    },
    {
      id: 'choke-first-aid',
      type: 'diagram',
      filename: 'choking-heimlich-maneuver-illustration.svg',
      title: 'Choking Emergency Response',
      description: 'Heimlich maneuver technique and choking first aid',
    },
  ],

  citations: [
    {
      id: 'aao-hns-epistaxis-guideline-2020',
      type: 'article',
      title: 'Clinical Practice Guideline: Nosebleed (Epistaxis) (2020)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['McGarry, G.W.', 'Ojuri, L.', 'Ramakrishnan, J.', 'et al.'],
    },
    {
      id: 'aha-acute-stroke-2019',
      type: 'article',
      title: '2019 Update to the 2018 Guidelines for the Early Management of Acute Ischemic Stroke',
      source: 'Stroke',
      authors: ['Powers, W.J.', 'Rabinstein, A.A.', 'Ackerson, T.', 'et al.'],
    },
    {
      id: 'cummings-emergencies',
      type: 'textbook',
      title: 'Emergencies in Otolaryngology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section X',
    },
  ],

  crossReferences: [
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'related', label: 'Throat Disorders' },
    { targetId: 'ent-procedures', targetType: 'topic', relationship: 'related', label: 'ENT Procedures' },
    { targetId: 'emergency-acute-care', targetType: 'topic', relationship: 'related', label: 'Emergency Medicine' },
    { targetId: 'respiratory-upper', targetType: 'system', relationship: 'related', label: 'Upper Respiratory System' },
  ],

  tags: {
    systems: ['respiratory', 'upper-airway', 'cardiovascular'],
    structures: ['FMA:54816', 'FMA:60691', 'FMA:55303'],
    topics: ['ent-emergencies', 'airway-obstruction', 'epistaxis', 'foreign-body', 'angioedema', 'epiglottitis', 'ssnhl'],
    keywords: ['airway obstruction', 'epistaxis', 'angioedema', 'epiglottitis', 'foreign body', 'sudden hearing loss', 'Ludwig\'s angina', 'peritonsillar abscess'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['emergency', 'surgery', 'ent'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default entEmergenciesContent;
