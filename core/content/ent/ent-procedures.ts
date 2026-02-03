import { EducationalContent } from '../types';

export const entProceduresContent: EducationalContent = {
  id: 'ent-procedures',
  type: 'topic',
  name: 'ENT Procedures',
  alternateNames: ['Otolaryngology Procedures', 'ENT Surgery', 'Otolaryngologic Operations'],

  levels: {
    1: {
      level: 1,
      summary: 'ENT doctors perform many procedures to help with ear, nose, and throat problems. These range from simple office treatments to surgeries performed in the operating room.',
      explanation: `ENT (ear, nose, and throat) doctors perform various procedures to diagnose and treat problems in the head and neck area. These procedures can help people breathe better, hear better, speak better, and feel better.

**Common ENT Procedures:**

1. **Ear Tubes (Tympanostomy)**
   - Tiny tubes placed through the eardrum
   - Helps fluid drain and prevents infections
   - Usually done for children with frequent ear infections

2. **Tonsillectomy**
   - Surgical removal of the tonsils
   - Done for frequent infections or breathing problems at night
   - One of the most common surgeries for children

3. **Adenoidectomy**
   - Removal of adenoids (tissue behind the nose)
   - Helps with chronic stuffy nose and ear problems
   - Often done at the same time as tonsillectomy

4. **Sinus Surgery**
   - Opens blocked sinuses
   - Helps people with chronic sinus infections
   - Usually done through the nose (no external cuts)

5. **Nasal Polyp Removal**
   - Removes growths in the nose
   - Helps breathing and sense of smell
   - Done through the nose using special tools

6. **Direct Laryngoscopy**
   - Looking at the voice box with a scope
   - Helps find problems with hoarseness
   - Can be done in the office or operating room

**Office-Based Procedures:**
- Ear wax removal
- Nasal endoscopy (looking in the nose with a small camera)
- Biopsy (taking a small tissue sample)
- Voice therapy with a speech therapist

**How These Procedures Help:**
- Improve breathing through the nose
- Reduce infections and antibiotics use
- Improve hearing
- Improve sleep quality
- Fix voice problems
- Remove tumors or growths`,
      keyTerms: [
        { term: 'ear tubes', definition: 'Small tubes placed in the eardrum to help fluid drain' },
        { term: 'tonsillectomy', definition: 'Surgery to remove the tonsils' },
        { term: 'adenoidectomy', definition: 'Surgery to remove the adenoids' },
        { term: 'sinus surgery', definition: 'Operation to open blocked sinuses' },
        { term: 'biopsy', definition: 'Taking a small sample of tissue for testing' },
        { term: 'scope', definition: 'A medical instrument used to look inside the body' },
      ],
      analogies: [
        'Ear tubes are like windows in a house - they let air in and help things drain.',
        'Sinus surgery is like clearing a clogged drain so things can flow again.',
      ],
      examples: [
        'A child who gets ear infections every month might benefit from ear tubes.',
        'Someone who can\'t breathe through their nose might need sinus surgery or septoplasty.',
      ],
      patientCounselingPoints: [
        'Most ENT procedures are done on an outpatient basis, meaning you go home the same day.',
        'Recovery time varies - ear tube patients recover in a day, while tonsillectomy takes about 2 weeks.',
        'Your doctor will explain the risks and benefits of any procedure before it\'s done.',
        'Follow all pre and post-operative instructions carefully for the best recovery.',
      ],
    },

    2: {
      level: 2,
      summary: 'Otolaryngologic procedures encompass endoscopic examinations, minimally invasive surgeries, and open operations. Common procedures include tympanostomy tube placement, endoscopic sinus surgery, tonsillectomy, laryngoscopy, and neck dissection for malignancy.',
      explanation: `ENT procedures range from simple office-based examinations to complex surgeries. Modern techniques emphasize minimally invasive approaches that preserve function while effectively treating disease.

## Diagnostic Procedures

**Nasal Endoscopy:**
- Flexible or rigid scope through the nose
- Visualizes: Nasal cavity, sinuses openings, nasopharynx, larynx
- Office-based: With topical anesthesia
- Diagnoses: Polyps, sinus obstruction, tumors, structural problems
- Takes 5-10 minutes: Minimal discomfort

**Laryngoscopy:**
- Flexible laryngoscopy: Through nose, views larynx
- Rigid laryngoscopy: Through mouth, better visualization
- Indications: Hoarseness, throat pain, swallowing difficulty, suspected tumor
- Stroboscopy: Specialized light to assess vocal cord vibration

**Otomicroscopy:**
- Microscope examination of ear
- Detailed view: Eardrum, ear canal, middle ear through perforation
- Used for: Ear wax removal, foreign body removal, eardrum assessment

## Therapeutic Office Procedures

**Ear Wax Removal:**
- Manual removal: Using specialized tools
- Irrigation: Flushing with water
- Suction: Using vacuum device
- Microscopic guidance: For safety and precision

**Nasal Cautery:**
- For nosebleeds: Using silver nitrate or electrical cautery
- Targets: Blood vessels in Kiesselbach's plexus
- Office-based: With local anesthesia
- May require: Multiple treatments

**Myringotomy with Tube Placement:**
- Incision in eardrum: To remove fluid or place tube
- Tube types: Short-term (6-12 months) vs long-term (2+ years)
- Indications: Recurrent ear infections, persistent fluid, hearing loss
- Procedure: Takes 5-10 minutes under general anesthesia (children) or local (adults)

## Surgical Procedures

**Tympanostomy with Tube Placement:**
- Common indications: Recurrent AOM, chronic OME with hearing loss
- Anesthesia: General for children, local for cooperative adults
- Technique: Incision in tympanic membrane, aspirate fluid, insert tube
- Water precautions: Vary by tube type
- Extrusion: Most tubes fall out spontaneously in 6-18 months

**Tonsillectomy:**
- Indications: Sleep-disordered breathing, recurrent infections
- Techniques:
  - Cold steel dissection: Traditional method
  - Electrocautery: Common, less bleeding
  - Coblation: Lower temperature technique
- Recovery: 10-14 days, pain management critical
- Risks: Bleeding (1-5%), dehydration, velopharyngeal insufficiency (rare)

**Adenoidectomy:**
- Indications: Nasal obstruction, chronic sinusitis, OME, sleep apnea
- Techniques: Curette, suction cautery, coblation
- Often combined: With tonsillectomy and/or ear tubes
- Recovery: 2-3 days, less pain than tonsillectomy
- Risks: Bleeding, velopharyngeal insufficiency (especially <3 years)

**Functional Endoscopic Sinus Surgery (FESS):**
- Indications: Chronic sinusitis refractory to medical treatment
- Approach: Through nostrils, no external incisions
- Goals: Open sinuses, remove disease, restore drainage
- CT guidance: Often used for complex cases
- Recovery: 1-2 weeks off work, nasal irrigations important

**Septoplasty:**
- Indications: Nasal obstruction from deviated septum
- Approach: Through nostrils, no external incisions
- Technique: Reshape or remove deviated portion
- Recovery: 1 week, nasal splints sometimes placed
- Often combined: With turbinate reduction or sinus surgery

**Turbinate Reduction:**
- Indications: Nasal obstruction from enlarged turbinates
- Techniques:
  - Radiofrequency ablation: Office-based
  - Submucosal resection: Surgical
  - Turbinate outfracture: Moving bone laterally
- Goal: Improve breathing while preserving mucosal function
- Recovery: Minimal, can be done in office

**Microlaryngeal Surgery:**
- Indications: Vocal cord lesions, tumors, granuloma
- Approach: Through mouth with laryngoscope
- Microscope: For magnification and precision
- Techniques: Cold excision, laser removal, microflap
- Voice rest: Critical postoperative recovery

**Neck Dissection:**
- Indications: Head and neck cancer, known or suspected nodal metastasis
- Types:
  - Selective: Remove at-risk node groups only
  - Modified radical: Remove nodes but preserve structures
  - Radical: Remove nodes plus non-essential structures
- Recovery: 1-2 weeks, drain tubes usually placed
- Risks: Nerve damage, shoulder dysfunction, chyle leak

**Salivary Gland Surgery:**
- Parotidectomy: For parotid gland tumors
- Submandibular gland excision: For tumors or stones
- Risks: Facial nerve (parotid), marginal mandibular nerve (submandibular)
- Recovery: 1-2 weeks with soft diet

**Thyroid Surgery:**
- Thyroidectomy: Partial or total
- Indications: Cancer, large goiter, hyperthyroidism
- Risks: Recurrent laryngeal nerve injury, hypocalcemia
- Recovery: 1-2 weeks, hormone replacement if total thyroidectomy

## Minimally Invasive Techniques

**Balloon Sinuplasty:**
- Dilates sinus openings using balloon
- Less tissue removal than traditional FESS
- Office-based: Under local anesthesia possible
- Indications: Chronic sinusitis, limited disease

**Transoral Robotic Surgery (TORS):**
- Robotic arms: For precise surgical manipulation
- Indications: Oropharyngeal tumors, base of tongue, sleep apnea
- Benefits: Better visualization, no external incisions
- Limitations: Cost, learning curve, not all centers

**Image-Guided Surgery:**
- CT navigation: Real-time localization during surgery
- Indications: Revision sinus surgery, skull base tumors, extensive disease
- Benefits: Safety, precision, reduced complications
- Cost: Additional expense

## Postoperative Care

**Pain Management:**
- Multimodal approach: Combinations of medications
- Minimize opioids: When possible
- NSAIDs: Often first-line
- Ice packs: For swelling and pain

**Wound Care:**
- Keep area clean: As directed
- No picking: At incisions or scabs
- Dressing changes: As instructed
- Watch for infection: Increasing pain, redness, drainage, fever

**Diet:**
- Progress as tolerated: Start with liquids, advance to solids
- Throat surgeries: Soft diet initially, avoid acidic/crunchy foods
- Neck surgeries: May have restrictions

**Activity Restrictions:**
- No strenuous activity: Typically 1-2 weeks
- No nose blowing: After sinus surgery
- Voice rest: After laryngeal surgery
- Travel restrictions: Especially after ear surgery (flying)`,
      keyTerms: [
        { term: 'endoscopy', definition: 'Using a scope to look inside the body' },
        { term: 'tympanostomy tube', definition: 'Tube placed through eardrum to ventilate middle ear' },
        { term: 'FESS', definition: 'Functional endoscopic sinus surgery; minimally invasive sinus surgery' },
        { term: 'septoplasty', definition: 'Surgery to correct deviated nasal septum' },
        { term: 'neck dissection', definition: 'Surgical removal of lymph nodes from neck' },
        { term: 'TORS', definition: 'Transoral robotic surgery using robotic instruments through the mouth' },
        { term: 'microlaryngeal surgery', definition: 'Microscope-guided surgery on the larynx' },
        { term: 'balloon sinuplasty', definition: 'Using balloon to dilate sinus openings' },
      ],
      analogies: [
        'FESS is like Roto-Rooter for your sinuses - clearing out the blockages so things can drain.',
        'Image-guided surgery is like GPS for the surgeon - helps them know exactly where they are.',
      ],
      patientCounselingPoints: [
        'Don\'t blow your nose for at least a week after sinus surgery - this can disrupt healing.',
        'After tonsillectomy, staying hydrated is critical even though swallowing hurts.',
        'Voice rest means not talking at all for the specified time - whispering can strain your voice more than soft speech.',
        'Attend all follow-up appointments to ensure proper healing.',
      ],
    },

    3: {
      level: 3,
      summary: 'Otolaryngologic procedures encompass a broad spectrum from office-based interventions to complex surgeries. Surgical techniques continue to evolve toward minimally invasive approaches that preserve function while effectively treating pathology. Understanding indications, techniques, and potential complications is essential for optimal patient outcomes.',
      explanation: `## Office-Based Procedures

**Nasal Endoscopy:**
- Flexible fiberoptic: Tolerated well by most patients
- Rigid telescopes: Superior optics for detailed examination
- Topical anesthesia: Lidocaine/phenylephrine spray
- Diagnostic yield: High for nasal/sinus, nasopharyngeal, laryngeal pathology
- Limitations: Patient tolerance, anatomic access
- Documentation: Photography/video possible

**Laryngoscopy and Stroboscopy:**
- Flexible: Dynamic assessment, natural phonation
- Rigid: Superior magnification, requires patient tolerance
- Stroboscopy: Essential for vocal fold vibration assessment
- Diagnostic capabilities: Mucosal wave, amplitude, symmetry, periodicity
- Indications: Hoarseness >3 weeks, vocal profession, preoperative assessment

**Office-Based Surgery:**
- Nasal polypectomy: Limited disease
- Turbinate reduction: Radiofrequency, coblation
- Balloon sinuplasty: Selected sinus disease
- Vocal cord injection: Medialization for paralysis, bulk injection
- Botox injection: Spasmodic dysphonia
- Laser procedures: Selected lesions with fiber delivery systems

**Ear Procedures:**
- Myringotomy with tubes: Adults can tolerate awake
- Cerumen removal: Microscopic guidance, suction, irrigation
- Foreign body removal: Various techniques depending on object
- Paper patch: Small perforations
- Intratympanic steroids: Sudden hearing loss, Meniere's

## Operating Room Procedures

**Tympanoplasty:**
- Indications: Persistent perforation, cholesteatoma, ossicular chain reconstruction
- Graft materials: Temporalis fascia (most common), cartilage, perichondrium
- Approaches: Transcanal, endaural, postauricular
- Classification:
  - Type I: Myringoplasty (tympanic membrane only)
  - Type II: Graft to malleus
  - Type III: Graft to incus or stapes head
  - Type IV: Stapes footplate mobile
  - Type V: Stapes footplate fixed
- Outcomes: 80-90% success for type I
- Complications: Graft failure, sensorineural hearing loss, taste disturbance

**Ossiculoplasty:**
- Indications: Ossicular chain discontinuity, fixation
- Materials:
  - Autologous: Incus, cartilage, bone
  - Alloplastic: PORP (partial ossicular replacement prosthesis), TORP (total)
- Prostheses: Titanium, hydroxyapatite, Plastipore
- Outcomes: Better with intact stapes
- Complications: Extrusion, displacement, sensorineural loss

**Stapedectomy:**
- Indications: Otosclerosis with significant conductive hearing loss
- Procedure: Remove stapes superstructure, create fenestra, place prosthesis
- Techniques: Small fenestra (stapedotomy) vs total stapedectomy
- Prosthesis: Piston connecting incus to oval window
- Outcomes: 90% closure of air-bone gap to within 10 dB
- Complications: Sensorineural hearing loss (2%), vertigo, taste disturbance, facial nerve injury (rare)

**Tonsillectomy Techniques:**
- Cold steel dissection: Snare, scissors, tonsil snare
- Electrocautery: Monopolar, bipolar (hot, less bleeding)
- Coblation: Bipolar radiofrequency ablation (lower temperature)
- Microdebrider: Intracapsular removal, faster recovery
- Laser: Less common, office-based for selected cases
- Harmonic scalpel: Ultrasonic cutting and coagulation
- Selection: Based on surgeon experience, cost, patient factors

**Adenoidectomy:**
- Curettage: Traditional curette removal
- Suction cautery: Most common currently
- Coblation: Emerging alternative
- Microdebrider: Powered removal
- Mirroring aid: For visualization
- Complications: Bleeding, velopharyngeal insufficiency, hypernasality, atlantoaxial subluxation (Down syndrome)

**Endoscopic Sinus Surgery (FESS):**
- Principles: Remove disease at osteomeatal complex, restore drainage
- Indications: Chronic rhinosinusitis refractory to medical treatment, polyps, tumors
- Contraindications: Bleeding disorders, medical control achievable
- Staging: Often bilateral, systematic approach
- Image guidance: For complex or revision cases
- Complications: Orbital injury, hemorrhage, CSF leak, intracranial injury

**Extended Endoscopic Approaches:**
- Draf procedures: Frontal sinus drill-out (IIa, IIb, III)
- Sphenoethmoidectomy: Access to sphenoid and posterior ethmoids
- Transpterygoid: Access to pterygopalatine fossa
- Endoscopic skull base: Cribriform, planum, clivus
- Orbital decompression: For thyroid eye disease

**Septoplasty:**
- Indications: Nasal obstruction from septal deviation
- Approaches: Hemitransfixion, endoscopic-assisted
- Techniques: Resection, scoring, morselization, reconstruction
- Grafting: Cartilage if needed for structural support
- Complications: Septal perforation, synechiae, saddle nose (over-resection)

**Rhinoplasty:**
- Functional: Improve breathing
- Cosmetic: Change appearance
- Combined: Functional with cosmetic improvement
- Approaches: Endonasal, external (columellar incision)
- Grafts: Cartilage, bone, synthetic materials
- Complications: Dissatisfaction, need for revision

**Microlaryngeal Surgery:**
- Indications: Vocal cord lesions, early malignancy, papilloma
- Laryngoscope exposure: Suspension system
- Microscope: Binocular vision, magnification
- Instruments: Microlaryngeal instruments, laser, microflap
- Laser: CO2 most common (precise, hemostatic)
- Voice rest: Critical postoperative period
- Complications: Dental injury, laryngeal injury, airway edema

**Neck Dissection Types:**
- Selective: Levels I-III (supraomohyoid), I-IV (lateral), I-V (lateral)
- Modified radical: Preserve spinal accessory, SAN, IJV
- Radical: Historical, includes sacrificial removal
- Extended: Beyond standard levels
- Complications: Shoulder dysfunction, accessory nerve palsy, chyle leak, carotid injury

**Salivary Gland Surgery:**
- Superficial parotidectomy: Most common, identify facial nerve branches
- Total parotidectomy: For deep lobe or malignancy
- Submandibular gland excision: Marginal mandibular nerve risk
- Ranula excision: With sublingual gland removal for plunging type
- Complications: Facial paralysis, Frey syndrome, salivary fistula, numbness

**Thyroid Surgery:**
- Lobectomy: For unilateral disease
- Total thyroidectomy: For malignancy, large goiter, bilateral disease
- Nerve monitoring: Recurrent laryngeal nerve identification
- Parathyroid preservation: Auto-transplantation if devascularized
- Complications: RLN injury (1-2%), hypoparathyroidism (temporary 10-20%, permanent 1-3%), hematoma

## Surgical Anatomy and Landmarks

**Facial Nerve in Parotid:**
- Course: Through parotid gland, divides into temporofacial, cervicofacial branches
- Landmark: Tympanomastoid suture (stylomastoid foramen), tragal pointer
- Identification: Proximal to branching safest
- Monitoring: Intraoperative nerve monitoring useful

**Recurrent Laryngeal Nerve:**
- Course: In tracheoesophageal groove on left, loops around subclavian on right
- Identification: Near inferior thyroid artery, ligament of Berry
- Variability: Non-branching (50%), branching (50%)
- Monitoring: Standard of care for thyroid surgery

**Skull Base Relationships:**
- Anterior skull base: Cribriform plate, planum sphenoidale
- Lateral skull base: Temporal bone, petrous apex
- Posterior skull base: Clivus, foramen magnum
- Critical structures: Carotid, cavernous sinus, cranial nerves

## Postoperative Care Principles

**Pain Management:**
- Multimodal approach: NSAIDs, acetaminophen, consider opioids
- Regional techniques: Field blocks for head and neck surgery
- Non-pharmacologic: Ice, elevation, relaxation techniques
- Opioid minimization: When appropriate

**Antibiotic Prophylaxis:**
- Clean-contaminated cases: Single dose
- Duration: Generally 24 hours or less
- Selection: Cover skin flora (cefazolin) or aerodigestive flora (amoxicillin-clavulanate)

**Wound Care:**
- Dressings: As needed based on procedure
- Drains: For neck dissection, parotidectomy, thyroid
- Suture care: Keep clean and dry
- Scar management: Massage, silicone, sun protection

**Diet Advancement:**
- Pharyngeal surgeries: Start with liquids, advance as tolerated
- Dysphagia risk: Assessment before oral intake
- NPO duration: Based on procedure, anesthesia considerations`,
      keyTerms: [
        { term: 'stroboscopy', definition: 'Slow-motion visualization of vocal fold vibration using strobe light' },
        { term: 'tympanoplasty', definition: 'Surgical repair of tympanic membrane perforation' },
        { term: 'ossiculoplasty', definition: 'Reconstruction of ossicular chain for conductive hearing loss' },
        { term: 'PORP', definition: 'Partial ossicular replacement prosthesis' },
        { term: 'TORP', definition: 'Total ossicular replacement prosthesis' },
        { term: 'otosclerosis', definition: 'Abnormal bone growth fixing stapes footplate, causing conductive hearing loss' },
        { term: 'Draf procedure', definition: 'Frontal sinusotomy classification (I-III) for frontal sinus drainage' },
        { term: 'Frey syndrome', definition: 'Gustatory sweating after parotid surgery from aberrant nerve regeneration' },
      ],
      clinicalNotes: `The transcanal approach for tympanoplasty avoids external incisions and is preferred for small anterior perforations. Endaural approach provides better exposure for larger perforations. Postauricular approach offers best exposure for ossiculoplasty and revision cases.

Image-guided surgery has become standard for revision sinus surgery and skull base cases. The accuracy of 1-2 mm significantly improves safety near critical structures like the orbit, optic nerve, and carotid artery.

Intraoperative nerve monitoring is now considered standard of care for thyroid surgery and parotidectomy. It helps identify nerves early, warns of impending injury, and may reduce complication rates, though it does not replace careful anatomical dissection.`,
      patientCounselingPoints: [
        'After sinus surgery, nasal saline irrigations are critical for successful healing and preventing scarring.',
        'Voice rest is not silence - whispering can strain the voice more than soft speech.',
        'After neck surgery, shoulder exercises help prevent stiffness and maintain function.',
        'Complete the full course of prescribed antibiotics even if you feel fine.',
      ],
    },

    4: {
      level: 4,
      summary: 'Contemporary otolaryngologic procedures integrate endoscopic, microscopic, and robotic technologies with advanced surgical techniques. Understanding complex anatomy, surgical landmarks, potential complications, and evidence-based approaches enables optimal outcomes while minimizing morbidity.',
      explanation: `## Advanced Surgical Techniques

**Endoscopic Ear Surgery:**
- Transcanal endoscopic: Enhanced visualization without external incision
- Angled endoscopes: Seeing around corners, anterior tympanic membrane
- Indications: Tympanoplasty, cholesteatoma, ossiculoplasty
- Advantages: Wide field, magnification, minimized bone removal
- Limitations: One-handed surgery, learning curve
- Cholesteatoma: Residual disease rates comparable to mastoidectomy

**Robotic Surgery (TORS):**
- Da Vinci system: 3D visualization, wristed instruments
- Indications: Oropharyngeal tumors, base of tongue, parapharyngeal, skull base
- Advantages: Superior visualization, precise dissection, no external incision
- Exposure challenges: Mouth gag limitations, line of sight
- Learning curve: Significant for console operation
- Cost: High, may limit adoption

**Coblation Technology:**
- Bipolar radiofrequency ablation: 60-80°C
- Molecular dissociation: Rather than heat-based destruction
- Applications: Tonsillectomy, adenoidectomy, turbinate reduction, UPPP
- Advantages: Less thermal spread, potentially less pain
- Evidence: Mixed compared to electrocautery

**Laser Applications:**
- CO2 laser: Precision, hemostasis, fiber delivery available
- KTP laser: Vascular lesions, office-based applications
- Thulium laser: Similar to KTP, emerging applications
- Applications: Papilloma, vascular lesions, laryngeal surgery, stapedotomy
- Safety: Eye protection, fire precautions (oxygen)

## Otologic Surgery Mastery

**Canal Wall Down Mastoidectomy:**
- Indications: Cholesteatoma with extensive disease, failed CWD, poor Eustachian tube
- Technique: Remove posterior ear canal wall, create common cavity
- Advantages: Direct visualization, lower recurrence, easier second look
- Disadvantages: Cavity problems, hearing aid fitting, water precautions
- Obliteration: Eliminate cavity with fat, muscle, bone pâté

**Canal Wall Up Mastoidectomy:**
- Indications: Good Eustachian tube function, limited disease
- Technique: Preserve posterior canal wall, posterior tympanotomy
- Advantages: Normal canal anatomy, hearing aid use, water precautions not needed
- Disadvantages: Higher residual disease, more difficult revision
- Bridge: Posterior canal wall buttress reconstruction

**Ossiculoplasty Pearls:**
- PORP vs TORP: Malleus presence determines PORP feasibility
- Cartilage grafting: Prevents extrusion, may affect vibration transmission
- Titanium prostheses: Biocompatible, MRI compatible, good outcomes
- Stapes footplate: Perforation for otosclerosis surgery
- Malleus relocation: May improve PORP coupling

**Cochlear Implantation:**
- Candidates: Severe-to-profound SNHL, limited benefit from hearing aids
- Electrode arrays: Lateral wall vs perimodiolar
- Surgical approaches: Cochleostomy vs round window insertion
- Hearing preservation: Soft surgery techniques, shorter electrodes
- Complications: Device failure, migration, facial nerve stimulation, CSF gusher
- Outcomes: Open-set speech perception possible even with prelingual deafness

**Bone Anchored Hearing Aid (BAHA):**
- Indications: Conductive/mixed loss, SSD (single-sided deafness)
- Surgery: 2-stage (traditional) or 1-stage (minimal incision)
- Implants: Titanium osseointegration, 3-month healing
- Alternatives: Active bone conduction implants (Bonebridge), Sophono
- Complications: Soft tissue overgrowth, implant loss, skin infection

## Rhinology and Sinus Surgery

**Revision Sinus Surgery:**
- Challenges: Scar tissue, distorted anatomy, bleeding
- Image guidance: Essential for safe dissection
- Lateralize: Middle turbinate to prevent synechiae
- Draf procedures: For frontal sinus disease
- Extent: Based on disease distribution, not just previous surgery

**Skull Base Surgery:**
- Endoscopic endonasal: Increasingly used for tumors
- Approaches: Transsellar, transplanum, transcribriform, transclival
- Flaps: Nasoseptal flap for vascularized reconstruction
- CSF leak repair: Multilayer closure success >90%
- Complications: CSF leak, meningitis, vascular injury, hormonal dysfunction

**Orbital Decompression:**
- Indications: Thyroid eye disease, orbital tumors, trauma
- Technique: Remove medial and inferior orbital walls
- Approaches: Transnasal endoscopic, external, combined
- Amount: 2-3 mm decompression per wall
- Complications: Diplopia, new strabismus, hypesthesia, hemorrhage

**Epistaxis Management:**
- Cautery: Silver nitrate for anterior bleeding
- Packing: Various materials (sponges, balloons, tampons)
- Surgical: Endoscopic sphenopalatine/ethmoidal artery ligation
- Embolization: Angiographic occlusion of maxillary/facial arteries
- Internal maxillary: Ligation of terminal branches

**Septoplasty Perfection:**
- Scoring: For cartilage deviation without displacement
- Swinging door: Cartilage mobilization technique
- Extracorporeal: Resection, reshape, reinsert
- Spreader grafts: Correct internal valve, middle vault collapse
- Extrusions: Rare but devastating if occurs

## Laryngology Procedures

**Phonosurgery Principles:**
- Mucosal wave preservation: Essential for good voice outcome
- Microflap: Elevate, excise, replace
- Submucosal infusion: Hydrodissection for plane creation
- Cold steel: Preferred over laser for precision in many cases
- Postoperative: Voice therapy critical for optimal recovery

**Medialization Procedures:**
- Type I thyroplasty: Window in thyroid cartilage, insert implant
- Arytenoid adduction: Rotate arytenoid for posterior glottis closure
- Combined: Thyroplasty + arytenoid adduction for optimal closure
- Injection: Gelfoam, fat, silicone, calcium hydroxylapatite
- Fat harvesting: Abdomen liposuction, processing, injection

**Reinnervation Surgery:**
- Ansa cervicalis transfer: To RLN for unilateral paralysis
- Timing: Within 2 years for best results
- Nerve-muscle pedicle: Alternative technique
- Outcomes: Improved tone, bulk, position over time
- Combined: With medialization for immediate results

**Cricotracheal Resection:**
- Indications: Subglottic stenosis (grades III-IV)
- Resection: Remove stenotic segment
- Anastomosis: Trachea to cricoid or thyroid cartilage
- Release maneuvers: Necessary to reduce tension
- Complications: Recurrent stenosis, anastomotic separation, nerve injury
- Outcomes: 70-90% decannulation with proper technique

**Tracheostomy:**
- Indications: Upper airway obstruction, prolonged ventilation
- Techniques: Open surgical, percutaneous dilatational
- Levels: Through second tracheal ring generally
- Maturation: 5-7 days before changing tube
- Decannulation: Progressive downsizing, cap, plug
- Complications: Bleeding, tube displacement, stenosis, fistula

## Head and Neck Oncologic Surgery

**Neck Dissection Nodal Levels:**
- Level I: Submandibular, submental nodes
- Level II: Upper jugular (including spinal accessory)
- Level III: Mid jugular
- Level IV: Low jugular
- Level V: Posterior triangle (spinal accessory chain)
- Level VI: Pretracheal, paratracheal, Delphian
- Level VII: Superior mediastinal

**Selective Neck Dissection Patterns:**
- Supraomohyoid: I-III (oral cavity)
- Lateral: II-IV (oropharynx, hypopharynx, larynx)
- Posterolateral: II-V (nasopharynx, skin)
- Anterior: VI (thyroid)
- Extended: Beyond standard boundaries

**Parotidectomy:**
- Superficial: Lateral to facial nerve
- Total: Deep and superficial lobes
- Radical: Include facial nerve (historic, rarely done)
- Nerve identification: Tragal pointer, stylomastoid foramen, tympanomastoid suture
- Reconstruction: Great auricular nerve graft, fascia lata
- Frey syndrome: Occurs in up to 50% (symptomatic fewer)

**Free Flap Reconstruction:**
- Radial forearm: Thin, pliable, reliable bone
- Fibula: Long bone segment, skin paddle available
- Anterolateral thigh: Large skin paddle, muscle bulk
- Scapula: Bone and soft tissue, donor site morbidity low
- Anastomosis: Microsurgical to facial vessels or transverse cervical

## Surgical Complications Management

**Hemorrhage:**
- Post-tonsillectomy: Primary (<24h) vs secondary (5-10 days)
- Neck: Expanding hematoma, airway compromise
- Management: Observation, fluid resuscitation, return to OR
- Prevention: Meticulous hemostasis, drains when indicated

**Infection:**
- Surgical site infection: Prophylactic antibiotics for contaminated cases
- Deep neck infection: Airway compromise, abscess drainage
- Discitis: Rare, devastating if occurs
- IV antibiotics: Culture-directed, long course for deep infections

**Nerve Injuries:**
- Facial nerve: Parotidectomy, mastoidectomy, temporal bone fracture
- RLN: Thyroid, anterior neck, mediastinal procedures
- Spinal accessory: Neck dissection
- Marginal mandibular: Submandibular surgery, neck dissection
- Hypoglossal: Neck dissection, submandibular surgery
- Management: Observation, reconstruction, reinnervation, TBA`,
      keyTerms: [
        { term: 'transcanal endoscopic ear surgery', definition: 'Minimally invasive ear surgery using endoscope through ear canal' },
        { term: 'lateralize', definition: 'Moving middle turbinate laterally to prevent scarring to septum' },
        { term: 'nasoseptal flap', definition: 'Vascularized flap based on septal artery for skull base reconstruction' },
        { term: 'type I thyroplasty', definition: 'Medialization surgery placing implant through thyroid cartilage window' },
        { term: 'ansa cervicalis transfer', definition: 'Reinnervation procedure connecting ansa cervicalis to RLN' },
        { term: 'cricotracheal resection', definition: 'Surgical resection of subglottic stenosis with end-to-end anstomosis' },
        { term: 'percutaneous dilatational tracheostomy', definition: 'Bedside tracheostomy using Seldinger technique' },
      ],
      clinicalNotes: `Endoscopic ear surgery represents a paradigm shift in otology, offering visualization of anatomy that was previously invisible or required extensive bone removal. Anterior tympanic membrane perforations and cholesteatoma in hidden areas are particularly well-suited to this approach.

The nasoseptal flap has revolutionized endoscopic skull base surgery, providing vascularized tissue for reliable reconstruction of large defects. The flap is based on the posterior septal artery, a branch of the sphenopalatine artery, and can be rotated to cover defects from the cribriform plate to the clivus.

Recurrent laryngeal nerve monitoring during thyroid surgery has become standard of care. The nerve can be identified and monitored throughout dissection, with the monitor warning of impending injury before it occurs. However, monitoring does not replace thorough anatomical knowledge and careful dissection technique.`,
    },

    5: {
      level: 5,
      summary: 'Advanced otolaryngologic surgery integrates sophisticated technology, evidence-based techniques, and multidisciplinary care. Contemporary practice emphasizes minimally invasive approaches, functional preservation, quality outcomes, and comprehensive rehabilitation to optimize patient-centered results.',
      explanation: `## Emerging Technologies

**3D Printing and Planning:**
- Preoperative models: Temporal bone, skull base, mandible
- Surgical guides: Precise osteotomy, implant placement
- Custom implants: Patient-specific reconstruction
- Education: Anatomical models for training

**Augmented Reality:**
- Surgical navigation: Overlay of imaging on surgical field
- Fluorescence guidance: Tumor, nerve identification
- Real-time tracking: Instrument localization

**Robotics Evolution:**
- Flexible robotics: Medrobotics Flex system for transoral surgery
- Single port: da Vinci SP for transoral, thyroid access
- Microsurgery: Robotic assistance for middle ear, vascular anastomosis
- Telesurgery: Remote surgery possibilities

**Energy-Based Devices:**
- Cold ablation: Coblation, hydrodebridement
- Ultrasonic: Harmonic scalpel, Sonopet
- Bipolar sealing: LigaSure, Enseal
- Applications: Hemostasis, dissection, tissue ablation

## Quality and Outcomes

**Patient-Reported Outcome Measures (PROMs):**
- SNOT-22: Sinus-specific quality of life
- VHI-10: Voice handicap
- MD Anderson Dysphagia Inventory: Swallowing
- FACT-H&N: Head and neck cancer
- UW-QOL: University of Washington questionnaire
- Importance: Capturing patient perspective, value-based care

**Quality Metrics:**
- Process measures: Antibiotic prophylaxis, DVT prevention
- Outcome measures: Complication rates, readmission, reoperations
- Patient experience: Satisfaction, communication
- Cost-effectiveness: Resource use, length of stay

**Complication Prevention:**
- Preoperative optimization: Nutrition, smoking cessation, glycemic control
- Surgical safety: Checklists, timeouts, specimen identification
- Protocols: Enhanced recovery after surgery (ERAS)
- Antibiotic stewardship: Appropriate use, duration

## Evidence-Based Practice

**Tympanostomy Tubes:**
- AAN guideline: Medium quality evidence
- Indications: 3+ episodes in 6 months, chronic effusion >3 months
- Procedure: Duration of effusion more important than number of infections
- Long-term tubes: For persistent otorrhea, Eustachian tube dysfunction
- Water precautions: Based on tube type, surgeon preference

**Tonsillectomy:**
- AAO-HNS guideline: Strong recommendation for documented criteria
- Paradise criteria: Historical standard, modified for clinical judgment
- Indications: Sleep-disordered breathing now more common than infections
- Technique: No clear superiority of one technique over another
- Pain: Multimodal management, avoid codeine in children

**Endoscopic Sinus Surgery:**
- Indications: Failed medical management, polyps, neoplasms
- EPOS guidelines: Medical therapy first-line for CRS
- Surgery: Adds to medical therapy, not replacement
- Revision: Higher complication rates, image guidance recommended
- Long-term: Medical therapy continues postoperatively

**Head and Neck Cancer:**
- NCCN guidelines: Standard of care
- Organ preservation: Radiation/chemotherapy vs surgery
- Reconstruction: Free flap success >95%
- HPV-positive: Better outcomes, deintensification trials
- Multidisciplinary: Tumor board essential

## Surgical Training and Simulation

**Virtual Reality Simulation:**
- Temporal bone: Mastering anatomy before actual surgery
- Sinus surgery: Navigation, complication management
- Learning curve: Shorter with simulation before real cases
- Assessment: Objective performance metrics

**Cadaver Dissection:**
- Temporal bone courses: Essential for otology training
- Endoscopic sinus: Cadaver workshops standard
- Facial nerve: Nerve preservation practice
- Microvascular: Anastomosis technique development

**Proctoring and Mentorship:**
- New techniques: Proctoring for adoption
- Complication management: Learning from experienced surgeons
- Outcomes monitoring: Peer review of results

## Multidisciplinary Care

**Tumor Boards:**
- Head and neck cancer: Multidisciplinary decision making
- Complex cases: Input from all specialties
- Clinical trials: Screening and enrollment
- Consensus: Treatment recommendations

**Rehabilitation Services:**
- Speech therapy: Voice, swallowing, cognitive communication
- Physical therapy: Neck, shoulder, lymphedema
- Occupational therapy: Activities of daily living
- Psychology: Coping, adjustment, body image

## Future Directions

**Gene Therapy:**
- Hearing loss: Regeneration of hair cells
- RRP: HPV-targeted approaches
- Cystic fibrosis: Sinus disease
- Cancer: Molecular-targeted therapies

**Tissue Engineering:**
- Cartilage: Nasal, ear reconstruction
- Bone: Mandible, craniofacial defects
- Mucosa: Sinus, tracheal replacement
- Nerves: Regeneration, conduits

**Immunotherapy:**
- Checkpoint inhibitors: Head and neck cancer
- CAR-T: HPV-associated cancers
- Vaccines: Prevention and treatment
- Combination: With traditional therapies

**Artificial Intelligence:**
- Diagnosis: Image analysis, endoscopic interpretation
- Surgical planning: Automated segmentation, trajectory
- Intraoperative: Guidance, complication prediction
- Outcomes: Prediction, risk stratification`,
      keyTerms: [
        { term: 'PROMs', definition: 'Patient-reported outcome measures for assessing treatment success' },
        { term: 'SNOT-22', definition: '22-item Sino-Nasal Outcome Test for sinus-specific quality of life' },
        { term: 'ERAS', definition: 'Enhanced recovery after surgery protocols' },
        { term: 'VHI-10', definition: 'Voice Handicap Index-10 for voice outcome assessment' },
        { term: 'FACT-H&N', definition: 'Functional Assessment of Cancer Therapy-Head and Neck' },
        { term: 'organ preservation', definition: 'Treating cancer while preserving organ structure and function' },
        { term: 'CAR-T', definition: 'Chimeric antigen receptor T-cell therapy' },
      ],
      clinicalNotes: `Quality measurement in otolaryngology has evolved from process measures to patient-reported outcomes. The SNOT-22 has become the standard for sinus surgery outcomes, with a minimal clinically important difference (MCID) of 9 points. For voice surgery, VHI-10 MCID is approximately 3-6 points. These measures are now routinely collected for quality improvement and payor reporting.

The introduction of transoral robotic surgery (TORS) has dramatically improved access to oropharyngeal tumors, allowing transoral resection of lesions that previously required mandibulotomy or pharyngotomy. Long-term oncologic outcomes are comparable to open approaches and chemoradiation, with improved swallowing and speech function due to organ preservation.

Enhanced Recovery After Surgery (ERAS) protocols have been adapted for head and neck surgery, focusing on preoperative counseling, optimized anesthesia, multimodal analgesia, early feeding, and early mobilization. These protocols have reduced hospital length of stay and complications while maintaining safety.`,
    },
  },

  media: [
    {
      id: 'ent-procedures-overview',
      type: 'diagram',
      filename: 'ent-procedures-overview.svg',
      title: 'ENT Procedures Overview',
      description: 'Summary of common ENT procedures by anatomic region',
    },
    {
      id: 'endoscopic-sinus-surgery-approach',
      type: 'diagram',
      filename: 'fess-surgical-approach-diagram.svg',
      title: 'FESS Surgical Approach',
      description: 'Endoscopic view of sinus surgery landmarks and approach',
    },
    {
      id: 'neck-dissection-levels',
      type: 'diagram',
      filename: 'neck-dissection-levels-anatomical.svg',
      title: 'Neck Dissection Levels',
      description: 'Anatomical diagram of lymph node levels I-VII',
    },
  ],

  citations: [
    {
      id: 'aao-hns-tympanostomy-guideline',
      type: 'article',
      title: 'Clinical Practice Guideline: Tympanostomy Tubes in Children',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Schwartz, S.R.', 'Richards, I.T.', 'Cueva, R.A.', 'et al.'],
    },
    {
      id: 'aao-hns-tonsillectomy-guideline-2019',
      type: 'article',
      title: 'Clinical Practice Guideline: Tonsillectomy in Children (Update 2019)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Mitchell, R.B.', 'Pereira, K.D.', 'Friedman, N.R.', 'et al.'],
    },
    {
      id: 'epos-2020',
      type: 'article',
      title: 'EPOS 2020: European Position Paper on Rhinosinusitis and Nasal Polyps',
      source: 'Rhinology',
      authors: ['Fokkens, W.J.', 'Lund, V.J.', 'Hopkins, C.', 'et al.'],
    },
    {
      id: 'cummings-ent-surgery',
      type: 'textbook',
      title: 'Otolaryngologic Surgery',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section VIII',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear', targetType: 'topic', relationship: 'related', label: 'Ear Disorders' },
    { targetId: 'ent-nose', targetType: 'topic', relationship: 'related', label: 'Nose and Sinus Disorders' },
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'related', label: 'Throat Disorders' },
    { targetId: 'surgery', targetType: 'topic', relationship: 'related', label: 'Surgery' },
  ],

  tags: {
    systems: ['upper-airway', 'auditory', 'digestive'],
    structures: ['FMA:46690', 'FMA:60691', 'FMA:52780'],
    topics: ['ent-procedures', 'endoscopic-surgery', 'sinus-surgery', 'tonsillectomy', 'ear-tubes', 'head-neck-surgery'],
    keywords: ['FESS', 'tympanostomy', 'tonsillectomy', 'adenoidectomy', 'septoplasty', 'microlaryngeal surgery', 'neck dissection', 'TORS'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'ent'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default entProceduresContent;
