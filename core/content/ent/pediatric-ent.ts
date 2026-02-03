import { EducationalContent } from '../types';

export const pediatricEntContent: EducationalContent = {
  id: 'ent-pediatric',
  type: 'topic',
  name: 'Pediatric ENT',
  alternateNames: ['Pediatric Otolaryngology', 'Childhood ENT Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Children have unique ear, nose, and throat problems because their bodies are still growing. Common issues include ear infections, tonsillitis, adenoid problems, and things getting stuck in their ears or nose.',
      explanation: `Children are not just small adults - their ears, noses, and throats work differently and have different problems. Understanding these differences helps parents know when to worry and when not to.

**Common Childhood ENT Problems:**

1. **Ear Infections** - Very common in babies and young children
   - Fluid builds up behind the eardrum
   - Causes ear pain, fever, and fussiness
   - Sometimes treated with ear tubes

2. **Tonsillitis** - Swollen, infected tonsils
   - Sore throat, trouble swallowing
   - May need tonsil removal if infections keep coming back

3. **Large Adenoids** - Tissue behind the nose that can get too big
   - Causes stuffy nose, snoring, mouth breathing
   - Can affect speech and how the face grows

4. **Foreign Bodies** - Things kids put where they don't belong
   - Beans, beads, toys in ears or nose
   - Food or coins stuck in throat
   - Needs safe removal by a doctor

5. **Snoring and Sleep Problems** - Loud breathing at night
   - May be from large tonsils or adenoids
   - Can affect sleep quality and behavior

**Why Kids Are Different:**
- Their Eustachian tubes are shorter and more horizontal
- Their immune systems are still learning
- Their tonsils and adenoids are bigger compared to their throat size
- They explore the world by putting things in their mouth, nose, and ears

**When to Call the Doctor:**
- Ear pain that lasts more than a day
- Trouble breathing or swallowing
- Something stuck in ear, nose, or throat
- High fever with sore throat
- Child pulling at ear and crying

**How to Help Prevent Problems:**
- Keep kids away from cigarette smoke
- Breastfeed babies if possible (helps prevent ear infections)
- Keep up with vaccinations
- Don't let young children eat small, hard foods
- Childproof your home to keep small objects out of reach`,
      keyTerms: [
        { term: 'ear infection', definition: 'When germs get into the middle ear and cause fluid and pain' },
        { term: 'ear tubes', definition: 'Tiny tubes placed in the eardrum to help fluid drain' },
        { term: 'tonsils', definition: 'Soft tissue pads at the back of the throat that help fight germs' },
        { term: 'adenoids', definition: 'Tissue behind the nose that traps germs; part of immune system' },
        { term: 'foreign body', definition: 'Something that shouldn\'t be there, like a toy in the ear' },
        { term: 'snoring', definition: 'Noisy breathing during sleep' },
      ],
      analogies: [
        'A child\'s Eustachian tube is like a short, flat hallway compared to an adult\'s longer, angled hallway - germs travel through it much more easily.',
        'Adenoids are like sponges that can get soaked and swollen, blocking the nose.',
      ],
      examples: [
        'A baby with an ear infection might pull at their ear, cry more than usual, or have trouble sleeping.',
        'A child who puts a small bead in their nose may have bad-smelling discharge from that nostril.',
      ],
      patientCounselingPoints: [
        'Never try to remove a foreign body from a child\'s ear or nose at home - you might push it further in.',
        'Ear infections often clear up without antibiotics, but your child should still be seen by a doctor.',
        'If your child snores loudly or stops breathing while sleeping, tell your doctor - this could be sleep apnea.',
        'Keep small objects away from young children - they love to explore by putting things in small openings.',
      ],
    },

    2: {
      level: 2,
      summary: 'Pediatric ENT disorders encompass otitis media, adenotonsillar hypertrophy causing obstructive symptoms, aerodigestive foreign bodies, and congenital anomalies. Children have unique anatomical and physiological considerations that influence both disease presentation and management approaches.',
      explanation: `Children experience ear, nose, and throat problems differently than adults due to anatomical differences, developing immune systems, and age-specific exposures. Understanding these differences is essential for appropriate care.

## Otitis Media

**Why Children Are Prone:**
- Eustachian tubes: Shorter, more horizontal, less efficient
- Immature immune system: Reduced antibody responses
- Adenoid hypertrophy: Obstructs Eustachian tube orifice
- Viral URI susceptibility: More frequent colds
- Daycare exposure: Increased pathogen exposure

**Types:**
- **Acute otitis media (AOM):** Sudden onset infection, ear pain, fever, bulging eardrum
- **Otitis media with effusion (OME):** Fluid without infection, often follows AOM or colds
- **Chronic otitis media:** Persistent inflammation or recurrent episodes >3 months

**Diagnosis:**
- Symptoms: Ear pain, fussiness (infants), fever, hearing difficulty
- Otoscopy: Bulging, erythema, limited mobility
- Pneumatic otoscopy: Gold standard for diagnosis
- Tympanometry: Objective measure of eardrum movement

**Treatment:**
- AOM: Observation vs antibiotics based on age and severity
- OME: Observation for up to 3 months; hearing test if persistent
- Recurrent AOM: Tympanostomy tubes considered
- Prophylactic antibiotics: Generally not recommended

**Tympanostomy Tubes:**
- Indications: 3+ infections in 6 months, chronic effusion >3 months, speech delay
- Procedure: Brief, outpatient, under general anesthesia
- Types: Short-term (6-12 months) vs long-term (2+ years)
- Water precautions: Vary by tube type and surgeon preference
- Extrusion: Most tubes fall out on their own

## Adenotonsillar Hypertrophy

**Anatomy and Function:**
- Waldeyer's ring: Lymphoid tissue in pharynx
- Adenoid: Pharyngeal tonsil in nasopharynx
- Palatine tonsils: In oropharynx
- Peak size: Ages 3-7, then gradual involution

**Tonsillitis:**
- Bacterial: Group A Strep most common bacterial cause
- Viral: More common than bacterial
- Symptoms: Sore throat, difficulty swallowing, fever, tender nodes
- Diagnosis: Throat culture or rapid strep test
- Treatment: Antibiotics for GAS, symptomatic care for viral

**Sleep-Disordered Breathing:**
- Enlarged tonsils/adenoids: Most common pediatric cause
- Symptoms: Snoring, mouth breathing, pauses in breathing, restless sleep
- Daytime effects: Hyperactivity, behavioral problems, poor school performance
- Diagnosis: Polysomnography (sleep study) in some cases
- Treatment: Tonsillectomy with adenoidectomy (T&A) first-line

**Tonsillectomy Indications:**
- Sleep-disordered breathing: Primary indication today
- Recurrent infections: 7+ in year, 5+/year ×2 years, 3+/year ×3 years
- Peritonsillar abscess: History of recurrence
- Suspicion of malignancy: Unilateral enlargement

## Adenoid Hypertrophy

**Symptoms:**
- Nasal obstruction: Stuffy nose, mouth breathing
- Hyponasal speech: Talking like nose is pinched
- Snoring: Upper airway obstruction
- Chronic rhinorrhea: Postnasal drip
- Recurrent sinusitis or OME: Eustachian tube obstruction
- Adenoid facies: Long face, dental arch changes if chronic

**Diagnosis:**
- Lateral neck X-ray: Historical gold standard
- Nasal endoscopy: Office-based visualization
- Nasopharyngoscopy: Direct visualization
- Sleep study: If sleep apnea suspected

**Treatment:**
- Adenoidectomy: Surgical removal
- Often combined with: Tonsillectomy, ear tube placement
- Technique: Curette, suction cautery, coblation
- Recovery: Usually 1-2 days

## Pediatric Foreign Bodies

**Common Objects:**
- Ears: Beads, toys, insects, food
- Nose: Beads, toys, food, paper wads
- Throat: Coins, food, toy parts, batteries
- Esophagus: Coins most common, food bolus

**Symptoms:**
- Ear: Pain, discharge, decreased hearing
- Nose: Unilateral discharge, foul odor, bleeding
- Throat: Drooling, dysphagia, respiratory distress
- Esophagus: Drooling, dysphagia, sometimes asymptomatic

**Diagnosis:**
- History: From parent or child (may be unreliable)
- Physical exam: May see object or signs of presence
- X-ray: Radiopaque objects (coins, batteries)
- Endoscopy: For diagnosis and removal

**Management:**
- Ear/Nose: Removal by ENT specialist
- Throat/Esophagus: Urgent removal
- Button batteries: Emergency - tissue damage within hours
- Food impaction: May need endoscopic removal

**Button Battery Warning:**
- Emergency: Immediate removal needed
- Complications: Esophageal burn, fistula, death
- Prevention: Keep batteries secured away from children

## Congenital Anomalies

**Neck Masses:**
- Branchial cleft anomalies: Cysts, sinuses, fistulas
- Thyroglossal duct cyst: Midline neck, moves with tongue protrusion
- Hemangioma: Vascular tumor, grows then involutes
- Lymphangioma: Lymphatic malformation

**Laryngeal Anomalies:**
- Laryngomalacia: Most common, floopy epiglottis, improves with age
- Vocal cord paralysis: May be congenital or birth-related
- Subglottic stenosis: Narrowing below vocal cords
- Vascular ring: Compression by abnormal blood vessels

**Airway Problems:**
- Stridor: Noisy breathing, often laryngomalacia in infants
- Biphasic stridor: More concerning, indicates fixed obstruction
- Failure to thrive: From increased work of breathing

## Other Pediatric ENT Issues

**Nosebleeds (Epistaxis):**
- Common: Kiesselbach's plexus in children
- Causes: Dry air, picking, allergies
- Treatment: Pressure, Vaseline, humidification
- Cautery: For recurrent bleeds

**Hearing Loss:**
- Congenital: Universal newborn screening
- Acquired: OME, infections, noise exposure
- Assessment: Newborn hearing test, follow-up audiometry
- Intervention: Hearing aids, cochlear implants for severe loss

**Speech and Language:**
- Hearing: Critical for normal development
- Chronic OME: Can delay speech and language
- Velopharyngeal insufficiency: Nasal speech, palate issues
- Tongue-tie (ankyloglossia): May affect breastfeeding or speech

**Allergic Rhinitis:**
- Increasing prevalence in children
- Impact: Sleep, school performance, quality of life
- Treatment: Avoidance, antihistamines, nasal steroids
- Immunotherapy: Consideration for persistent symptoms`,
      keyTerms: [
        { term: 'acute otitis media', definition: 'Sudden infection of the middle ear common in children' },
        { term: 'otitis media with effusion', definition: 'Fluid in middle ear without active infection' },
        { term: 'tympanostomy tubes', definition: 'Small tubes placed through eardrum to ventilate middle ear' },
        { term: 'adenoids', definition: 'Pharyngeal tonsil in back of throat, can enlarge and block breathing' },
        { term: 'adenoidectomy', definition: 'Surgical removal of adenoids' },
        { term: 'sleep-disordered breathing', definition: 'Abnormal breathing patterns during sleep' },
        { term: 'laryngomalacia', definition: 'Most common cause of infant stridor, floppy airway structures' },
        { term: 'button battery', definition: 'Small disc battery that causes severe tissue damage if swallowed' },
      ],
      analogies: [
        'Adenoids grow like weeds in a garden - they can get too big and crowd out everything else.',
        'The Eustachian tube in children is like a kinked straw - drainage is difficult.',
      ],
      patientCounselingPoints: [
        'Most ear infections are viral and resolve without antibiotics - watchful waiting is often appropriate.',
        'Tonsillectomy is most commonly done for sleep apnea today, not just for infections.',
        'Button batteries are extremely dangerous - if you suspect your child swallowed one, seek emergency care immediately.',
        'If your child snores loudly and has behavioral problems, ask about sleep apnea screening.',
      ],
    },

    3: {
      level: 3,
      summary: 'Pediatric otolaryngology encompasses age-specific conditions including recurrent otitis media, adenotonsillar hypertrophy with obstructive sleep apnea, aerodigestive foreign bodies, and congenital anomalies. Management strategies consider developmental stage, anatomical differences, and long-term impacts on speech, hearing, and facial growth.',
      explanation: `## Pediatric Anatomic Considerations

**Eustachian Tube:**
- Orientation: More horizontal (adults 45 degrees, children 10 degrees)
- Length: Shorter (children 18mm vs adults 36mm)
- Cartilage: Less supportive, more collapsible
- Diameter: Narrower lumen
- Lymphoid tissue: Adenoid proximity obstructs orifice
- Functional differences: Less efficient clearance

**Airway Differences:**
- Larynx position: Higher (C3-C4 vs C4-C5 in adults)
- Epiglottis: More omega-shaped, less rigid
- Subglottis: Narrowest portion (cricoid ring)
- Tonsil size: Relative to airway - larger in children
- Occiput: Larger, causes neck flexion affecting airway

## Otitis Media - Advanced Concepts

**Pathogenesis:**
- Viral URI precedes bacterial superinfection in most cases
- Eustachian tube dysfunction: Negative middle ear pressure
- Nasopharyngeal colonization: Pathogens ascend to middle ear
- Biofilm formation: Chronic and recurrent disease
- Adenoid biofilms: Reservoir for recurrent infections

**Bacteriology:**
- Streptococcus pneumoniae: Most common, vaccine impact
- Non-typeable Haemophilus influenzae: Increasing proportion
- Moraxella catarrhalis: Common in young children
- Group A Streptococcus: Less common
- Staphylococcus aureus: Rare, usually in neonates

**Vaccine Impact:**
- PCV7/13: Reduced pneumococcal OM, shifted serotypes
- H. influenzae type B: Near eliminated
- Changing epidemiology: Non-vaccine serotypes emerging
- Herd immunity: Daycare vaccination reduces OM rates

**Diagnosis Nuances:**
- Pneumatic otoscopy: Gold standard, assesses mobility
- Otoscopy pitfalls: Crying child red eardrum, pneumatic bulb essential
- Tympanometry: Type A (normal), Type B (flat = effusion), Type C (negative pressure)
- Acoustic reflectometry: Alternative to tympanometry
- Distinguishing AOM from OME: Critical for antibiotic decision

**Treatment Guidelines:**

*Age-based approach:*
- <6 months: Antibiotics for definite or suspected AOM
- 6mo-2yr: Antibiotics for definite AOM; observation for uncomplicated
- >2yr: Observation acceptable for mild cases

*Antibiotic selection:*
- First-line: Amoxicillin (80-90 mg/kg/day divided BID)
- Penicillin allergy: Cefdinir, cefuroxime, or cefpodoxime
- Treatment failure: Amoxicillin-clavulanate (90 mg/kg/day of amoxicillin component)
- Duration: 5-10 days depending on age and severity

**Tympanostomy Tube Considerations:**
- Reduces AOM recurrence: ~75% reduction
- OME resolution: More rapid hearing improvement
- Otorrhea: Common complication (15-30%)
- Long-term hearing: No permanent benefit vs observation
- Tympanic membrane changes: Perforation, tympanosclerosis, atrophy
- Selection: Medical management failure preferred first

## Adenotonsillar Disease

**Tonsillitis Grading:**
- Grade 0: Removed
- Grade 1+: Within pillars
- Grade 2+: To pillars
- Grade 3+: Past pillars
- Grade 4+: Kissing

**Peritonsillar Abscess:**
- Rare in young children, more common in adolescents
- Treatment: Needle aspiration vs incision and drainage vs tonsillectomy
- Quinsy tonsillectomy: Controversial, higher complication rate

**PFAPA Syndrome:**
- Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis
- Clockwork fevers every 3-6 weeks
- Steroid-responsive: Dramatic fever resolution
- Diagnosis of exclusion: Regular growth, asymptomatic between episodes
- Treatment: Tonsillectomy curative in many cases

**Obstructive Sleep Apnea:**
- AHI criteria differ from adults
- Polysomnography: Not required for typical cases
- Neurocognitive effects: Attention, behavior, school performance
- Cardiovascular: Pulmonary hypertension, cor pulmonale if severe
- Growth: Failure to thrive from increased work of breathing

**Tonsillectomy Techniques:**
- Cold steel (dissection): Traditional, low cost
- Electrocautery: Common, less bleeding, more pain
- Coblation: Lower temperature, potentially less pain
- Microdebrider: Intracapsular, faster recovery
- Partial vs complete: Intracapsular for OSA, total for recurrent infections

**Post-tonsillectomy Bleeding:**
- Primary: <24 hours (intraoperative technique)
- Secondary: 5-10 days (slough of fibrin clot)
- Risk factors: Age, technique, coagulation disorders
- Presentation: Spitting blood, swallowing blood
- Management: Observation, fluid resuscitation, cautery, packing, or return to OR

## Pediatric Airway Foreign Bodies

**Patterns by Age:**
- Infants: Feeding-related, food, small household objects
- Toddlers: Exploration behavior, coins, toys, food
- Older children: Food (especially nuts, hard candy), school objects

**Esophageal Foreign Bodies:**
- Most common site: Upper esophageal sphincter
- Symptoms: Drooling, dysphagia, respiratory symptoms
- Coins: Most common, orientation on X-ray (sagittal = esophagus)
- Button batteries: Medical emergency, tissue necrosis within hours
- Food impaction: Esophagitis, possible stricture
- Management: Rigid esophagoscopy for removal

**Airway Foreign Bodies:**
- Larynx/trachea: Respiratory distress, stridor, aphonia
- Bronchus: Right more common (straighter, wider), unilateral wheeze
- Chronic foreign body: May be misdiagnosed as asthma/pneumonia
- Diagnosis: Rigid bronchoscopy for diagnosis and removal
- Complications: Obstruction, pneumonia, bronchiectasis if chronic

**Nasal Foreign Bodies:**
- unilateral foul discharge: Pathognomonic
- Most common site: Floor of nose, just anterior to inferior turbinate
- Removal: Various techniques (hook, suction, balloon catheter)
- Complications: Epistaxis, septal perforation, displacement posteriorly
- Button batteries in nose: Urgent removal needed

**Button Battery Emergency:**
- Liquefactive necrosis: Within hours
- Electrolysis: Hydroxide generation at negative pole
- Local destruction: Perforation, fistula (aortoesophageal fatal)
- Management: Immediate removal, endoscopic evaluation for injury
- Prevention: Education, secure battery storage

## Congenital Anomalies

**Branchial Anomalies:**
- First branchial cleft: Rare, periauricular or cervical
- Second branchial cleft: Most common (95%), anterior SCM border
- Third branchial cleft: Lower neck, posterior to carotid
- Fourth branchial cleft: Very rare, low neck/thyroid
- Treatment: Surgical excision, avoid incision complications

**Thyroglossal Duct Cyst:**
- Embryology: Thyroid descent from foramen cecum
- Location: Midline, near hyoid (75%), moves with tongue protrusion
- Most common: Midline neck mass in children
- Treatment: Sistrunk procedure (cyst, tract, central hyoid)
- Ectopic thyroid: Must rule out before excision

**Hemangiomas:**
- Infantile hemangioma: Not present at birth, proliferates then involutes
- Vascular malformations: Present at birth, grows proportionally
- Proliferation phase: First year of life
- Involuition phase: 1-10 years, 50% resolve by age 5, 70% by age 7
- Treatment: Observation first, propranolol for problematic lesions
- PHACE syndrome: Posterior fossa, hemangioma, arterial, cardiac, eye

**Laryngomalacia:**
- Most common laryngeal anomaly
- Floppy supraglottic structures: Omega-shaped epiglottis, short aryepiglottic folds
- Stridor: Inspiratory, worsens with agitation, improves with prone position
- Onset: First weeks of life
- Natural history: Improves with age, resolves by 12-18 months typically
- Treatment: Observation, feeding support, rarely surgery (supraglottoplasty)

**Vocal Cord Paralysis:**
- Congenital: Central nervous system anomalies, birth trauma
- Acquired: Cardiac surgery (PDA ligation), mediastinal masses
- Bilateral: Airway obstruction, stridor, may require tracheostomy
- Unilateral: Weak cry, aspiration risk, typically managed conservatively

**Subglottic Stenosis:**
- Narrowest infant airway: 3-4mm at cricoid ring
- Acquired: Prolonged intubation (most common)
- Congenital: Narrow cricoid
- Grading: Cotton-Meyer scale (I-IV based on % obstruction)
- Treatment: Endoscopic dilation vs open reconstruction (cricotracheal resection)

**Vascular Rings/Slings:**
- Double aortic arch: Complete ring
- Right aortic arch: With aberrant left subclavian
- Pulmonary sling: Left pulmonary artery compressing trachea
- Symptoms: Stridor, wheeze, recurrent infections, dysphagia
- Diagnosis: CT angiography, barium swallow, bronchoscopy
- Treatment: Surgical division of compressing vessel

## Other Pediatric ENT Conditions

**Nasal Trauma:**
- Septal hematoma: Emergency - requires drainage to prevent saddle deformity
- Nasal fracture: Most common facial fracture in children
- Growth disturbance: Pediatric fractures can affect growth centers

**Craniofacial Anomalies:**
- Cleft lip/palate: Airway, feeding, speech issues
- Pierre Robin sequence: Micrognathia, glossoptosis, cleft palate
- Treacher Collins: Mandibulofacial dysostosis
- Multidisciplinary care: Essential

**Hearing Loss in Children:**
- Universal newborn hearing screening: Early identification
- Conductive loss: OME, congenital cholesteatoma
- Sensorineural loss: Genetic, congenital infections, NICU stay
- Amplification: Hearing aids as early as 6 weeks
- Cochlear implantation: <12 months for best outcomes

**Speech and Language Development:**
- Critical period: Birth to 3 years
- Hearing: Essential for normal development
- Chronic OME: Fluctuating hearing loss affecting development
- Velopharyngeal insufficiency: VPI, hypernasal speech
- Tongue-tie (ankyloglossia): Controversial impact on breastfeeding and speech`,
      keyTerms: [
        { term: 'Eustachian tube dysfunction', definition: 'Functional obstruction of tube connecting middle ear to throat' },
        { term: 'biofilm', definition: 'Structured bacterial community resistant to antibiotics and host defenses' },
        { term: 'PFAPA syndrome', definition: 'Periodic Fever, Aphthous stomatitis, Pharyngitis, Adenitis; periodic fever syndrome' },
        { term: 'intracapsular tonsillectomy', definition: 'Partial tonsil removal leaving capsule, faster recovery' },
        { term: 'Sistrunk procedure', definition: 'Surgical removal of thyroglossal duct cyst including central hyoid bone' },
        { term: 'PHACE syndrome', definition: 'Posterior fossa, Hemangioma, Arterial, Cardiac, Eye anomalies' },
        { term: 'cotton-meyer scale', definition: 'Grading system for subglottic stenosis based on % obstruction' },
        { term: 'ankyloglossia', definition: 'Tongue-tie; short lingual frenulum limiting tongue movement' },
      ],
      clinicalNotes: `The introduction of pneumococcal conjugate vaccine (PCV13) has dramatically changed the epidemiology of acute otitis media, with significant reductions in OM incidence and changes in causative organisms. However, non-vaccine serotypes and non-typeable H. influenzae have filled the niche, demonstrating the adaptability of nasopharyngeal pathogens.

Adenoidectomy in children younger than 3 years carries a higher risk of velopharyngeal insufficiency (VPI) due to the critical role of adenoids in palatal closure during speech. This risk must be balanced against the benefits, particularly in children with obstructive sleep apnea who may have significant developmental consequences if untreated.

Button batteries in the esophagus represent a true emergency - liquefactive necrosis can occur within 2-4 hours, and aortoesophageal fistula formation is a fatal complication if not removed promptly. Immediate endoscopic removal is mandatory.`,
      patientCounselingPoints: [
        'Universal newborn hearing screening identifies hearing loss early - prompt intervention is critical for speech development.',
        'Tonsillectomy recovery takes about 10-14 days - children need to stay home from school and avoid rough play.',
        'Most children outgrow ear infections by age 3-4 as their Eustachian tubes mature and adenoids shrink.',
        'If your child has unilateral nasal discharge or foul odor, suspect a foreign body until proven otherwise.',
      ],
    },

    4: {
      level: 4,
      summary: 'Pediatric otolaryngology requires understanding of developmental anatomy, age-specific disease manifestations, and long-term functional outcomes. Advanced management incorporates evidence-based guidelines, surgical techniques minimizing morbidity, and multidisciplinary care for complex conditions affecting hearing, speech, breathing, and facial development.',
      explanation: `## Developmental Anatomy

**Craniofacial Growth:**
- Mandible: Neural crest derived, growth at condyles
- Maxillary complex: Sutural growth, nasal septal contribution
- Midface hypoplasia: Can result from chronic mouth breathing
- Dental arch changes: High arched palate from mouth breathing
- Adenoid facies: Elongated face, open mouth posture, dental malocclusion

**Eustachian Tube Development:**
- Cartilage maturity: Increases stiffness over time
- Angle change: Gradual rotation to adult position
- Tensor veli palatini: Improves tube opening efficiency
- Lymphoid regression: Adenoids shrink after childhood
- Functional maturation: Not complete until adolescence

**Airway Maturation:**
- Laryngeal descent: From C2-C3 at birth to C4-C5 adult
- Epiglottis: Becomes more rigid, less omega-shaped
- Subglottic diameter: Increases from 3-4mm to adult size
- Fat distribution: Increases in supraglottis with age

## Advanced Otitis Media Concepts

**Biofilm Theory:**
- Chronic OM: Biofilm in middle ear and adenoids
- Antibiotic resistance: Protected bacterial communities
- Eradication challenge: Requires mechanical removal or high-dose therapy
- Adenoidectomy: Removes biofilm reservoir
- Research: Quorum sensing inhibitors, biofilm disruptors

**Otitis-Prone Child:**
- Definition: ≥3 AOM episodes in 6 months or ≥4 in 12 months
- Risk factors:
  - Daycare attendance: 2-3x increased risk
  - Sibling history: Genetic predisposition
  - Male gender: Slightly higher risk
  - Lack of breastfeeding: Loss of passive immunity
  - Tobacco smoke: Inflammatory and ciliary effects
  - Early first AOM: <6 months high risk
  - Craniofacial abnormalities: Cleft palate, Down syndrome
- Immune response: Reduced IgG2, impaired pneumococcal opsonization
- Management: Prophylactic antibiotics generally not recommended, tubes preferred

**OME and Language Development:**
- Critical period: Birth to 3 years for speech acquisition
- Conductive loss: Averages 25 dB with OME
- Fluctuating loss: Variable impact on speech development
- Binaural effects: Binaural summation impaired
- Research evidence: Mixed on long-term impact with normal hearing by school age
- Consensus: Documented hearing loss warrants intervention

**Persistent OME Management:**
- Duration criteria: 3 months in children 2-12 years
- Hearing threshold: >20 dB warrants intervention
- Speech delay: Earlier intervention considered
- Options: Tubes vs hearing aids vs observation
- Quality of life: Consider child and family impact

**Complications of OM:**
- Mastoiditis: Decreased with antibiotic use but still occurs
- Petrositis: Gradenigo's syndrome (CN VI palsy, facial pain, otorrhea)
- Labyrinthitis: Sensorineural hearing loss, vertigo
- Facial paralysis: Acute OM with dehiscence of facial nerve canal
- Intracranial: Meningitis, epidural abscess, brain abscess (rare)

## Pediatric Sleep Disordered Breathing

**Neurocognitive Impact:**
- Attention deficits: Mimicking ADHD
- Executive function: Impaired planning, organization
- Memory: Difficulties with working memory
- Behavioral: Hyperactivity, aggression, oppositional behavior
- Academic performance: Lower standardized test scores
- Reversibility: Significant improvement after T&A

**Cardiovascular Sequelae:**
- Pulmonary hypertension: From chronic hypoxemia
- Cor pulmonale: Right heart failure if severe, untreated
- Systemic hypertension: Endothelial dysfunction
- Metabolic: Insulin resistance, dyslipidemia
- Inflammatory: Elevated CRP, cytokines

**Diagnosis:**
- Clinical diagnosis: Typical history + exam sufficient in most cases
- Polysomnography indications: Age <2, complex medical conditions, obesity, uncertain diagnosis, planned surgery
- Pediatric AHI criteria: >1 abnormal, >5-10 severe (adults >5, >15)
- Oximetry screening: Limited utility, may miss events
- Home sleep tests: Not validated for pediatric use

**Adenotonsillectomy Outcomes:**
- Cure rate: 70-80% for OSA
- Partial response: 15-20%, may need additional treatment
- Non-responders: 5-10%, usually obesity-related OSA
- Weight gain: Post-T&A, potential concern for obese children
- Quality of life: Dramatic improvement in sleep and behavior
- Neurocognitive: Improved attention and school performance

**Persistent OSA After T&A:**
- Risk factors: Obesity, craniofacial abnormalities, neuromuscular disease
- Evaluation: Repeat sleep study
- Treatment options: CPAP, weight loss, orthodontic expansion, hypoglossal nerve stimulation (experimental in children)

## Congenital Airway Anomalies

**Laryngomalacia Severity Spectrum:**
- Mild: Stridor with agitation only
- Moderate: Stridor at rest, feeding difficulties
- Severe: Airway obstruction, failure to thrive, cor pulmonale
- Supraglottoplasty: Indicated for moderate-severe
- Procedures: CO2 laser, cold steel, epiglottopexy
- Outcomes: 70-90% success with surgical intervention

**Vascular Anomalies Classification (ISSVA):**
- Tumors: Infantile hemangioma, congenital hemangioma, pyogenic granuloma
- Vascular malformations: Capillary, venous, lymphatic, arteriovenous
- Mixed: Combined types
- Flow: Low-flow vs high-flow characteristics

**Infantile Hemangioma Management:**
- Observation: Most lesions, proliferate then involute
- Propranolol: First-line for problematic lesions since 2008
- Steroids: Historical treatment, now second-line
- Laser: For superficial components
- Surgical excision: After involution or for complications
- PHACE workup: Large facial hemangiomas require brain/heart imaging

**Airway Foreign Body Management:**
- Rigid bronchoscopy: Gold standard for diagnosis and removal
- Flexible bronchoscopy: Limited therapeutic capability
- Complications: Laryngeal edema, pneumothorax, bronchial injury
- Post-bronchoscopy: Observation for airway edema
- Chest physiotherapy: For post-obstructive pneumonia

## Pediatric Thyroid and Neck Masses

**Thyroid Nodules in Children:**
- Higher malignancy rate: 22-26% vs 5-10% in adults
- Workup: Ultrasound, FNA if >1cm or suspicious features
- Surgery: Total thyroidectomy for malignant nodules
- Radiation exposure risk: Sensitivity increased in children

**Dermoid Cysts:**
- Midline neck lesions
- Floor of mouth: Can affect feeding and airway
- Treatment: Surgical excision
- Midline orientation: Different from branchial anomalies

**Ranula:**
- Mucous retention cyst of sublingual gland
- Floor of mouth swelling: Can extend into neck (plunging ranula)
- Treatment: Marsupialization or sublingual gland excision
- Recurrence: Common with simple drainage

## Pediatric Rhinology

**Choanal Atresia:**
- Congenital: Bilateral (respiratory distress at birth) or unilateral
- Diagnosis: Failure to pass catheter, CT scan
- Treatment: Surgical repair (transnasal endoscopic)
- Timing: Urgent for bilateral, elective for unilateral
- Stenting: Postoperative patency

**Nasal Obstruction:**
- Adenoid hypertrophy: Most common surgical cause
- Septal deviation: From birth trauma or development
- Inferior turbinate hypertrophy: Allergic rhinitis
- Pyriform aperture stenosis: Congenital bony narrowing
- Nasal trauma: Septal hematoma emergency

**Sinusitis in Children:**
- Diagnosis: Clinical (symptoms + purulent discharge)
- Imaging: Not indicated for uncomplicated cases
- CT findings: Mucosal thickening common in children
- Treatment: Amoxicillin-clavulanate first-line
- Duration: 10-14 days for acute sinusitis
- Adenoidectomy: Consider for chronic sinusitis

## Pediatric Otologic Surgery

**Cochlear Implantation:**
- Indications: Severe-to-profound SNHL with limited benefit from hearing aids
- Timing: <12 months for best outcomes
- Bilateral: Standard of care for bilateral loss
- Speech perception: Age-dependent outcomes
- Educational: Special education needs often reduced

**Bone-Anchored Hearing Aid (BAHA):**
- Indications: Conductive or mixed loss, single-sided deafness
- Pediatric adaptation: Softband until age 5 for implantation
- Outcomes: Improved speech understanding in noise

**Ossiculoplasty in Children:**
- Cholesteatoma: Common indication
- Cartilage tympanoplasty: Preferred technique
- Staged procedures: Second look for residual disease
- Hearing outcomes: Similar to adults with proper technique

**Pediatric Tympanoplasty:**
- Age consideration: <7 years lower success rate
- Adenoidectomy: May improve tympanoplasty success
- Cartilage use: Higher graft take rate
- Outcomes: 80-90% success in older children

## Pediatric Laryngology

**Recurrent Respiratory Papillomatosis:**
- HPV 6, 11: Juvenile onset
- Vertical transmission: From mother with genital HPV
- Course: Variable, may remit at puberty
- Treatment: Surgical debridement, adjuvant therapies (cidofovir, bevacizumab)
- Vaccination: HPV vaccine prevents acquisition

**Vocal Fold Paralysis:**
- Pediatric considerations: Voice development, aspiration risk
- Etiology: Iatrogenic (cardiac surgery), congenital, idiopathic
- Recovery: Spontaneous in up to 50%
- Intervention: Injection medialization (temporary), thyroplasty (deferred until skeletal maturity)
- Voice therapy: Critical for compensatory strategies

**Subglottic Stenosis:**
- Cotton-Meyer grading: Grade I (<50%), II (50-70%), III (70-99%), IV (100%)
- Acquired: Prolonged intubation, endotracheal tube size
- Treatment: Endoscopic dilation (mild), cricotracheal resection (severe)
- Single-stage vs two-stage: Based on severity and surgeon experience`,
      keyTerms: [
        { term: 'adenoid facies', definition: 'Long face syndrome from chronic mouth breathing in childhood' },
        { term: 'otitis-prone child', definition: 'Child with recurrent AOM defined as 3+ in 6 months or 4+ in 12 months' },
        { term: 'supraglottoplasty', definition: 'Surgical procedure for laryngomalacia involving trimming supraglottic structures' },
        { term: 'propranolol', definition: 'Beta blocker used as first-line treatment for problematic infantile hemangiomas' },
        { term: 'ISSVA classification', definition: 'International Society for the Study of Vascular Anomalies classification system' },
        { term: 'choanal atresia', definition: 'Congenital bony or membranous closure of posterior nasal choanae' },
        { term: 'pyriform aperture stenosis', definition: 'Congenital bony narrowing of nasal entrance' },
        { term: 'cotton-meyer grading', definition: 'Classification system for subglottic stenosis based on percent obstruction' },
      ],
      clinicalNotes: `The landmark randomized trial by Paradise et al. established that for recurrent AOM without middle ear effusion, prompt tonsillectomy reduced the rate of subsequent AOM but only modestly. The benefits must be weighed against surgical risks and costs. For children with OME, watchful waiting for 3 months is appropriate given high spontaneous resolution rates.

For pediatric OSA, the Childhood Adenotonsillectomy Trial (CHAT) demonstrated significant improvements in behavior, quality of life, and polysomnography parameters compared to watchful waiting, though 40% had residual OSA postoperatively, particularly obese children who had only partial resolution.

Propranolol has revolutionized the treatment of infantile hemangiomas since 2008, replacing systemic steroids as first-line therapy for problematic lesions. The mechanism is vasoconstriction and inhibition of angiogenesis, with rapid visible effects within days to weeks of initiating therapy.`,
    },

    5: {
      level: 5,
      summary: 'Advanced pediatric otolaryngology practice integrates evidence-based guidelines, developmental considerations, surgical innovation, and multidisciplinary care. Management decisions balance immediate symptom relief with long-term impacts on speech, hearing, facial growth, and neurocognitive development.',
      explanation: `## Clinical Practice Guidelines

**AAO-HNS Tonsillectomy in Children (2019):**

*Indications:*
- Throat infections: 7+ in 1 year, 5+/year for 2 years, 3+/year for 3 years
- Sleep-disordered breathing: Documented with PSG or strong clinical suspicion
- Modifications: PFAPA, multiple antibiotic allergies, complications

*Perioperative Care:*
- Pain management: Ibuprofen + acetaminophen (NOT codeine <12 years)
- Antibiotics: Single intraoperative dose, not continued postoperatively
- Steroids: Single intraoperative dexamethasone to reduce nausea/emesis
- Dietary: Regular diet as tolerated, not restricted

**AAP Otitis Media Guidelines (2013):**

*Diagnosis:*
- Bulging TM: Required for definite AOM diagnosis
- Pneumatic otoscopy: Preferred diagnostic method
- Cerumen removal: When visualization impaired
- Distinguishing AOM from OME: Critical for antibiotic decision

*Treatment:*
- Observation option: Select children based on age and severity
- Analgesia: Always recommended
- Antibiotics: High-dose amoxicillin first-line
- Reevaluation: If not improved at 48-72 hours

**Clinical Consensus: Pediatric OSA (2022):**

*Diagnosis:*
- PSG: Indicated for children <2 years, complex medical conditions, obesity
- Clinical diagnosis: Acceptable for uncomplicated cases
- Home sleep tests: NOT validated for pediatric use

*Treatment:*
- Adenotonsillectomy: First-line for adenotonsillar hypertrophy
- Weight loss: Essential component for obese children
- CPAP: For persistent OSA after surgery or contraindication to surgery
- Orthodontic: Rapid maxillary expansion for selected cases
- Positive airway pressure: Nasal masks preferred

## Surgical Innovation

**Coblation Tonsillectomy:**
- Radiofrequency ablation at 60-80°C
- Comparative trials: Similar efficacy to electrocautery
- Potential benefits: Less pain, faster return to diet
- Cost considerations: Higher equipment expense
- Technique: Suitable for both total and intracapsular approaches

**Intracapsular Tonsillectomy:**
- Microdebrider or radiofrequency
- Capsule preservation: Reduces exposure to pharyngeal muscles
- Indications: Sleep-disordered breathing
- Contraindications: Recurrent infections (need complete removal)
- Recurrence risk: Small but present
- Pain reduction: Significant compared to total tonsillectomy

**Transoral Endoscopic Surgery:**
- Adenoidectomy: Powered instruments, improved visualization
- Sphenoidotomy: For choanal atresia repair
- Supraglottoplasty: For laryngomalacia
- Foreign body removal: Flexible scope applications

**Image-Guided Surgery:**
- Pediatric sinus surgery: Limited indications
- Choanal atresia repair: CT navigation
- Complex masses: Vascular anomalies, neoplasms

## Evidence-Based Outcomes

**Tympanostomy Tube Outcomes:**
- AOM recurrence: 73% relative risk reduction
- OME resolution: Faster hearing improvement
- Language development: No demonstrable benefit in most studies
- Otorrhea: 15-30% complication rate
- Tympanic membrane: Perforation 2-4%, atrophy common
- Selection: Most appropriate for documented hearing loss or recurrent AOM with risk factors

**Adenotonsillectomy Outcomes:**
- OSA cure: 70-80% PSG-confirmed resolution
- Neurocognitive: Improved attention, behavior, academic performance
- Quality of life: Dramatic improvements in sleep and daytime functioning
- Weight: Postoperative weight gain (consider in obese)
- Growth: Catch-up growth in failure to thrive
- Complications: Bleeding 1-5%, respiratory 10-15%, dehydration common

**Long-Term Considerations:**
- Speech development: T&A does not cause velopharyngeal insufficiency in normal anatomy
- Immune function: No significant adverse effects from tonsillectomy
- Cancer risk: No association with tonsillectomy
- Subsequent infections: Reduced throat infections after tonsillectomy persists long-term

## Special Populations

**Down Syndrome:**
- Anatomic: Midface hypoplasia, macroglossia, small airway
- Adenotonsillar hypertrophy: More severe OSA
- Hypotonia: Contributes to airway obstruction
- Risks: Higher complication rates after T&A, postoperative respiratory issues
- Management: Extended monitoring, perioperative CPAP consideration

**Cleft Palate:**
- Otitis media: Nearly universal due to Eustachian tube dysfunction
- Tube management: Often required until palate repair complete
- Speech: Velopharyngeal insufficiency assessment
- Multidisciplinary: Cleft team management essential

**Craniofacial Syndromes:**
- Treacher Collins: Mandibular hypoplasia, airway management
- Pierre Robin: Micrognathia, glossoptosis, airway obstruction
- Goldenhar: Hemifacial microsomia, asymmetric airway
- Crouzon/Pfeiffer: Midface hypoplasia, choanal stenosis

**Prematurity:**
- Airway: Smaller, more reactive
- Subglottic stenosis: Higher risk from intubation
- RSV prophylaxis: Palivizumab for chronic lung disease
- Otitis media: Higher incidence due to immature immunity
- Feeding: Coordination difficulties

**Obesity:**
- OSA severity: Worse for given tonsil size
- Treatment response: Lower cure rates after T&A
- Multi-level obstruction: Common
- Weight management: Essential component
- CPAP: Often required postoperatively

**Bleeding Disorders:**
- von Willebrand disease: Most common inherited bleeding disorder
- Hemophilia A/B: Factor VIII/IX deficiency
- Platelet disorders: Qualitative and quantitative
- Preoperative screening: Indications based on history
- Perioperative management: Desmopressin, factor replacement, antifibrinolytics

## Controversies and Evolving Practice

**Prophylactic Antibiotics for OME:**
- Not recommended: Lack of clear benefit, resistance concerns
- Historical practice: Now abandoned

**Adjuvant Myringotomy with Adenoidectomy:**
- OME improvement: Modest benefit
- Practice pattern: Common but not universally recommended
- Evidence: Conflicting data on outcomes

**Tonsillectomy for PFAPA:**
- Curative: Many children experience complete resolution
- Timing: Earlier than for recurrent infections (fewer episodes needed)
- Alternative: Steroids effective but less definitive

**Speech Delay and OME:**
- Evidence: Mixed on long-term impact
- Consensus: Tubes for documented hearing loss with speech delay
- Duration: 3 months of effusion before tubes in most cases

**Age and Tonsillectomy:**
- <3 years: Higher risk of respiratory complications
- Decannulation trach: T&A often facilitates decannulation
- Bleeding risk: Not age-dependent
- Immune function: No clinically significant impact at any age

## Quality Improvement

**Appropriate Use Criteria:**
- Tympanostomy tubes: Clear indications, avoid overuse
- Adenoidectomy: For nasal obstruction, not isolated OME
- Tonsillectomy: Strict Paradise criteria or OSA documentation
- CT imaging: Limited indications in pediatric sinus disease

**Preoperative Optimization:**
- Anemia screening: Especially for tonsillectomy
- Bleeding history: Determines need for coagulation studies
- BMI assessment: Counseling for weight management
- Sleep study: When diagnosis uncertain

**Standardized Protocols:**
- Pain management: Multimodal, minimize opioid use
- Antiemetics: Dexamethasone standard
- Dietary advancement: As tolerated
- Discharge criteria: Safe oral intake, pain controlled
- Emergency information: Clear bleeding instructions

## Future Directions

**Telemedicine Applications:**
- Postoperative visits: Bleeding assessment
- Sleep evaluation: Questionnaires, home videos
- Rural access: Specialist consultation
- Parent education: Preoperative counseling

**Biomarker Development:**
- OME: Markers to predict which children need tubes
- OSA: Biomarkers for severity and treatment response
- Adenotonsillar hypertrophy: Predictors of OSA vs infection presentation

**Genetic Influences:**
- TLR polymorphisms: AOM susceptibility
- Immune response genes: Severity and recurrence
- Pharmacogenomics: Pain medication response

**Outcome Measurement:**
- Patient-reported outcomes: Age-appropriate measures
- Quality of life: Pediatric-specific instruments
- Long-term follow-up: School performance, behavior, development`,
      keyTerms: [
        { term: 'CHAT trial', definition: 'Childhood Adenotonsillectomy Trial; landmark study on T&A for pediatric OSA' },
        { term: 'Paradise criteria', definition: 'Specific frequency thresholds for tonsillectomy in recurrent throat infections' },
        { term: 'multimodal pain management', definition: 'Using multiple non-opioid medications together for pain control' },
        { term: 'velopharyngeal insufficiency', definition: 'Incomplete closure of velum during speech causing hypernasality' },
        { term: 'macroglossia', definition: 'Enlarged tongue relative to oral cavity size' },
        { term: 'midface hypoplasia', definition: 'Underdevelopment of midfacial structures, common in craniofacial syndromes' },
        { term: 'desmopressin', definition: 'DDAVP; treatment for von Willebrand disease and mild hemophilia A' },
      ],
      clinicalNotes: `AAO-HNS 2019 Tonsillectomy Guidelines emphasize that the most common indication today is sleep-disordered breathing, not recurrent infection. The guidelines strongly recommend against codeine use in children under 12 due to the risk of respiratory depression in ultra-rapid metabolizers. Ibuprofen plus acetaminophen is preferred for pain management.

The CHAT trial demonstrated that adenotonsillectomy for sleep-disordered breathing produced significant improvements in behavior, quality of life, and polysomnographic findings compared to watchful waiting. However, 40% of children had residual OSA postoperatively, highlighting the need for careful postoperative assessment, especially in obese children where the cure rate was lower.

Universal newborn hearing screening has been one of the most successful public health interventions, enabling identification of hearing loss within the first months of life. Early intervention (hearing aids by 6 weeks, cochlear implants by 12 months) dramatically improves language outcomes compared to delayed identification and treatment.`,
    },
  },

  media: [
    {
      id: 'pediatric-ear-anatomy',
      type: 'diagram',
      filename: 'pediatric-vs-adult-ear-anatomy.svg',
      title: 'Pediatric vs Adult Ear Anatomy',
      description: 'Comparison of Eustachian tube and middle ear anatomy',
    },
    {
      id: 'tonsil-grading-pediatric',
      type: 'diagram',
      filename: 'tonsil-hypertrophy-grading-scale.svg',
      title: 'Tonsil Hypertrophy Grading',
      description: 'Visual grading scale (0-4) for tonsillar size',
    },
    {
      id: 'pediatric-airway-foreign-bodies',
      type: 'diagram',
      filename: 'common-pediatric-foreign-bodies.svg',
      title: 'Common Pediatric Foreign Bodies',
      description: 'Types and locations of common aerodigestive foreign bodies',
    },
  ],

  citations: [
    {
      id: 'aao-hns-tonsillectomy-2019',
      type: 'article',
      title: 'Clinical Practice Guideline: Tonsillectomy in Children (Update 2019)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Mitchell, R.B.', 'Pereira, K.D.', 'Friedman, N.R.', 'et al.'],
    },
    {
      id: 'aap-otitis-media-2013',
      type: 'article',
      title: 'The Diagnosis and Management of Acute Otitis Media',
      source: 'Pediatrics',
      authors: ['Lieberthal, A.S.', 'Carroll, A.E.', 'Chonmaitree, T.', 'et al.'],
    },
    {
      id: 'chat-trial-2013',
      type: 'article',
      title: 'Adenotonsillectomy for Childhood Sleep Apnea (CHAT)',
      source: 'New England Journal of Medicine',
      authors: ['Marcus, C.L.', 'Moore, R.H.', 'Rosen, C.L.', 'et al.'],
    },
    {
      id: 'cummings-pediatric-ent',
      type: 'textbook',
      title: 'Pediatric Otolaryngology',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section VII',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear', targetType: 'topic', relationship: 'related', label: 'Ear Disorders' },
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'related', label: 'Throat Disorders' },
    { targetId: 'ent-nose', targetType: 'topic', relationship: 'related', label: 'Nose and Sinus Disorders' },
    { targetId: 'pediatrics-child-adolescent', targetType: 'topic', relationship: 'related', label: 'Pediatric Medicine' },
  ],

  tags: {
    systems: ['respiratory', 'upper-airway', 'auditory'],
    structures: ['FMA:46690', 'FMA:60691', 'FMA:52780'],
    topics: ['pediatric-ent', 'otitis-media', 'adenotonsillar-hypertrophy', 'pediatric-osa', 'foreign-bodies'],
    keywords: ['otitis media', 'ear tubes', 'tonsillectomy', 'adenoidectomy', 'pediatric OSA', 'laryngomalacia', 'foreign body'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family-medicine', 'ent'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default pediatricEntContent;
