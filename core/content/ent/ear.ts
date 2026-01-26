import { EducationalContent } from '../types';

export const earContent: EducationalContent = {
  id: 'ent-ear',
  type: 'topic',
  name: 'Ear Disorders and Hearing',
  alternateNames: ['Otology', 'Aural Disorders', 'Hearing Disorders'],

  levels: {
    1: {
      level: 1,
      summary: 'Your ears help you hear sounds and keep your balance. Sometimes ears get sick or infected, which can make hearing difficult.',
      explanation: `Your ears are amazing organs that do two important jobs: helping you hear sounds and keeping you balanced. When something goes wrong with your ears, it can affect how you hear or make you feel dizzy.

**Common Ear Problems:**

1. **Ear Infections** - These happen when germs get inside your ear, especially behind the eardrum. They can cause pain, fever, and trouble hearing. Kids get ear infections more often than adults.

2. **Swimmer's Ear** - This is an infection of the ear canal, the tunnel that leads to your eardrum. It often happens after swimming when water stays in the ear.

3. **Hearing Loss** - Some people cannot hear as well as others. This can happen from birth, from loud noises, infections, or just getting older.

**Signs of Ear Problems:**
- Ear pain or pressure
- Trouble hearing
- Ringing in the ears
- Feeling dizzy or off balance
- Fluid coming out of the ear

**Keeping Ears Healthy:**
- Don't put anything smaller than your elbow in your ear (no cotton swabs!)
- Wear ear protection around loud noises
- Get ear infections treated quickly`,
      keyTerms: [
        { term: 'eardrum', definition: 'A thin piece of skin inside your ear that vibrates when sound hits it' },
        { term: 'ear infection', definition: 'When germs get inside your ear and cause pain and swelling' },
        { term: 'ear canal', definition: 'The tunnel from the outside of your ear to your eardrum' },
        { term: 'hearing loss', definition: 'When you cannot hear sounds as well as other people' },
        { term: 'swimmer\'s ear', definition: 'An infection in the ear canal that can happen after swimming' },
      ],
      analogies: [
        'Your eardrum works like a drum head - when sound hits it, it vibrates and sends the sound deeper into your ear.',
        'An ear infection is like having a cold in your ear - the germs cause fluid and pressure that hurts.',
      ],
      examples: [
        'If you have trouble hearing the TV at a volume that others think is too loud, you might have hearing loss.',
        'After swimming, if your ear feels itchy or hurts when you touch it, you might have swimmer\'s ear.',
      ],
      patientCounselingPoints: [
        'Never put cotton swabs or other objects in your ear - they can push wax deeper and damage the eardrum.',
        'If ear pain lasts more than a day or is very severe, see a doctor.',
        'Protect your ears from loud noises by wearing earplugs or earmuffs at concerts or when using loud tools.',
      ],
    },

    2: {
      level: 2,
      summary: 'Ear disorders include infections (otitis media and externa), hearing loss from various causes, and balance problems. These conditions are common in both children and adults.',
      explanation: `The ear is divided into three sections: outer ear, middle ear, and inner ear. Problems can occur in any of these areas and affect hearing, balance, or both.

## Outer and Middle Ear Disorders

**Otitis Media (Middle Ear Infection):**
- Very common in children due to shorter, more horizontal Eustachian tubes
- Caused by bacteria or viruses that travel from the throat
- Fluid builds up behind the eardrum, causing pressure and pain
- Can cause temporary hearing loss if fluid blocks sound transmission

**Otitis Externa (Swimmer's Ear):**
- Infection of the ear canal between the outer ear and eardrum
- Caused by bacteria or fungi growing in moist environment
- More common in swimmers and people with eczema
- The ear canal becomes swollen, itchy, and painful

## Hearing Loss

**Types of Hearing Loss:**
1. **Conductive hearing loss** - Problem in outer or middle ear that blocks sound (earwax, fluid, eardrum perforation)
2. **Sensorineural hearing loss** - Problem in inner ear or hearing nerve (aging, noise exposure, infections)
3. **Mixed hearing loss** - Combination of both types

**Common Causes:**
- Earwax blockage
- Ear infections
- Perforated eardrum (hole in eardrum)
- Loud noise exposure
- Aging (presbycusis)
- Certain medications

**Tinnitus (Ringing in Ears):**
- Perception of sound when no external sound is present
- Often described as ringing, buzzing, or hissing
- Can be caused by many conditions including noise exposure, ear infections, or medications

## Balance Problems

The inner ear contains the vestibular system, which helps maintain balance. Problems here can cause:
- Dizziness
- Vertigo (spinning sensation)
- Unsteadiness when walking`,
      keyTerms: [
        { term: 'otitis media', definition: 'Infection of the middle ear, behind the eardrum, common in children', pronunciation: 'oh-TYE-tis MEE-dee-uh' },
        { term: 'otitis externa', definition: 'Infection of the ear canal, also called swimmer\'s ear', pronunciation: 'oh-TYE-tis ex-TER-nuh' },
        { term: 'conductive hearing loss', definition: 'Hearing loss caused by problems in the outer or middle ear that block sound transmission' },
        { term: 'sensorineural hearing loss', definition: 'Permanent hearing loss from inner ear or hearing nerve damage' },
        { term: 'tinnitus', definition: 'Ringing, buzzing, or other sounds in the ears when no external sound is present', pronunciation: 'tih-NYE-tus' },
        { term: 'Eustachian tube', definition: 'Tube connecting middle ear to throat that equalizes pressure', pronunciation: 'yoo-STAY-shun' },
        { term: 'eardrum perforation', definition: 'A hole or tear in the eardrum' },
      ],
      analogies: [
        'Conductive hearing loss is like wearing earplugs - the sound is blocked from getting through.',
        'Sensorineural hearing loss is like a broken microphone - the sound gets in but cannot be processed properly.',
        'The Eustachian tube is like a pressure valve that opens and closes to keep air pressure equal on both sides of the eardrum.',
      ],
      patientCounselingPoints: [
        'Ear infections often clear up on their own, but antibiotics may be needed for bacterial infections.',
        'Hearing aids can help many people with permanent hearing loss communicate better.',
        'Protect your hearing by limiting exposure to loud noises and wearing hearing protection.',
        'See a doctor if you experience sudden hearing loss, as prompt treatment may help.',
      ],
    },

    3: {
      level: 3,
      summary: 'Otolaryngology disorders of the ear encompass otitis media, otitis externa, the full spectrum of hearing loss (conductive, sensorineural, and mixed), tinnitus, and vestibular dysfunction. These conditions require systematic evaluation and targeted management strategies.',
      explanation: `## Otitis Media

**Acute Otitis Media (AOM):**
- Bacterial or viral infection of the middle ear
- Pathogenesis: Eustachian tube dysfunction leads to negative pressure, allowing nasopharyngeal flora to ascend
- Common pathogens: Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis
- Clinical presentation: Otalgia, fever, irritability, hearing loss, bulging or erythematous tympanic membrane

**Otitis Media with Effusion (OME):**
- Fluid in middle ear without signs of acute infection
- Often follows AOM or upper respiratory infection
- May cause conductive hearing loss affecting speech development in children
- Spontaneous resolution within 3 months in most cases

**Chronic Otitis Media:**
- Persistent inflammation or recurrent episodes lasting more than 3 months
- May lead to tympanic membrane perforation, cholesteatoma, or mastoiditis
**Complications:**
- Mastoiditis: Infection spreading to mastoid air cells
- Cholesteatoma: Skin growth in middle ear causing bone erosion
- Permanent hearing loss
- Intracranial complications (rare but serious)

## Otitis Externa

**Acute Otitis Externa:**
- Inflammation of external auditory canal
- Pathogens: Pseudomonas aeruginosa (most common), Staphylococcus aureus
- Predisposing factors: Trauma, moisture (aquatic exposure), eczema, hearing aid use
- Clinical findings: Canal edema, erythema, tenderness with tragal pressure or auricular manipulation

**Malignant (Necrotizing) Otitis Externa:**
- Severe infection spreading to skull base (osteomyelitis)
- Primarily affects elderly diabetics or immunocompromised
- Caused by Pseudomonas aeruginosa
- Requires aggressive treatment and possible surgical debridement

## Hearing Loss Classification

**By Pathophysiology:**

1. **Conductive Hearing Loss:**
   - Site: External ear canal, tympanic membrane, or ossicular chain
   - Causes: Cerumen impaction, otitis media, tympanic membrane perforation, otosclerosis, ossicular chain discontinuity
   - Characteristic: Bone conduction better than air conduction
   - Treatment: Medical management, hearing aids, or surgery depending on etiology

2. **Sensorineural Hearing Loss (SNHL):**
   - Site: Cochlea, auditory nerve, or central pathways
   - Causes: Presbycusis, noise exposure, ototoxicity, genetic factors, infections, Meniere disease
   - Characteristic: Permanent loss affecting air and bone conduction equally
   - Management: Hearing aids, cochlear implants for severe cases, communication strategies

3. **Mixed Hearing Loss:**
   - Combination of conductive and sensorineural components

**By Timing:**
- Congenital: Present at birth (genetic, intrauterine infections, perinatal factors)
- Prelingual: Before speech development
- Postlingual: After speech acquisition
- Sudden: Rapid onset within 72 hours (medical emergency)

**By Severity (pure tone average):**
- Normal: ≤25 dB HL
- Mild: 26-40 dB HL
- Moderate: 41-55 dB HL
- Moderately severe: 56-70 dB HL
- Severe: 71-90 dB HL
- Profound: ≥91 dB HL

## Tinnitus

**Classification:**
- Subjective: Perceived only by patient (most common)
- Objective: Sound audible to examiner (rare - vascular or muscular)

**Etiologies:**
- Sensorineural hearing loss (most common)
- Otologic: Meniere disease, otosclerosis, cerumen impaction
- Neurologic: Vestibular schwannoma, multiple sclerosis
- Medications: Aspirin, NSAIDs, aminoglycosides, loop diuretics

## Vestibular Disorders

**Peripheral Vestibular Disorders:**
- Benign paroxysmal positional vertigo (BPPV): Canalithiasis in semicircular canals
- Meniere disease: Endolymphatic hydrops causing episodic vertigo, tinnitus, and hearing loss
- Vestibular neuritis: Inflammation of vestibular nerve
- Labrynthitis: Vestibular nerve plus cochlear involvement

**Central Vestibular Disorders:**
- Vertebrobasilar insufficiency
- Migraine-associated vertigo
- Multiple sclerosis
- Cerebellar lesions`,
      keyTerms: [
        { term: 'acute otitis media', definition: 'Sudden onset middle ear infection with signs of inflammation and effusion' },
        { term: 'otitis media with effusion', definition: 'Middle ear fluid without acute infection signs; often follows AOM' },
        { term: 'cholesteatoma', definition: 'Abnormal skin growth in middle ear causing bone erosion and potential complications', pronunciation: 'koh-lee-stee-uh-TOH-muh' },
        { term: 'otosclerosis', definition: 'Abnormal bone growth in middle ear causing fixation of stapes and conductive hearing loss' },
        { term: 'presbycusis', definition: 'Age-related sensorineural hearing loss, typically affecting high frequencies first', pronunciation: 'prez-bih-KYOO-sis' },
        { term: 'benign paroxysmal positional vertigo', definition: 'Brief episodes of vertigo triggered by position changes due to canaliths in semicircular canals', pronunciation: 'benign PAR-ox-iz-mul' },
        { term: 'Meniere disease', definition: 'Disorder of inner ear causing episodic vertigo, tinnitus, aural fullness, and fluctuating hearing loss', pronunciation: 'may-NYAYRS' },
      ],
      clinicalNotes: `Sudden sensorineural hearing loss (SSNHL) is a medical emergency requiring prompt evaluation and potential steroid treatment within 2-4 weeks for best outcomes. Otitis media is the most common reason for pediatric antibiotic prescriptions and tympanostomy tube placement. Pneumococcal conjugate vaccine has significantly reduced AOM incidence by targeting S. pneumoniae.`,
      patientCounselingPoints: [
        'Most ear infections resolve without antibiotics, but follow-up is important to ensure hearing returns to normal.',
        'Noise-induced hearing loss is permanent but preventable - always use hearing protection in loud environments.',
        'Cochlear implants can provide meaningful hearing to those with severe-to-profound sensorineural hearing loss.',
        'Balance retraining exercises (vestibular rehabilitation) can help many vestibular disorders.',
      ],
    },

    4: {
      level: 4,
      summary: 'Otologic disorders encompass a complex spectrum of pathologies affecting sound transmission, mechanoelectrical transduction, and vestibular function. Understanding the pathophysiological mechanisms, from molecular pathways to biomechanical alterations, guides evidence-based diagnosis and management of these conditions.',
      explanation: `## Otitis Media: Pathophysiology and Host Factors

**Eustachian Tube Dysfunction:**
- Anatomical factors: Shorter, more horizontal, and more cartilaginous in children
- Functional obstruction: Adenoid hypertrophy, chronic rhinosinusitis, ciliary dyskinesia
- Pressure dysregulation: Failure to ventilate middle ear leads to negative pressure and transudation of fluid

**Biofilm Formation:**
- Chronic and recurrent otitis media may involve biofilm-protected bacteria
- Biofilms resist antibiotic penetration and host immune responses
- Explains treatment failure and recurrence despite sterile middle ear cultures

**Immunological Factors:**
- Immature immune system in children (especially <2 years)
- Reduced IgG2 subclass response to polysaccharide antigens
- Daycare attendance increases exposure to pathogens

**Otitis-Prone Child Characteristics:**
- Early first AOM (<6 months)
- Sibling history of recurrent AOM
- Atopy and allergic rhinitis
- Pacifier use
- Tobacco smoke exposure
- Lack of breastfeeding

## Otitis Externa: Pathogenesis and Variants

**Pathogenic Mechanisms:**
- Moisture creates alkaline environment favoring bacterial growth
- Trauma (cotton swab use) disrupts protective cerumen and epithelial barrier
- Inflammation leads to edema, pain, and further moisture trapping

**Chronic Otitis Externa:**
- Persistent inflammation >4 weeks or ≥4 episodes/year
- Underlying causes: Allergic contact dermatitis, psoriasis, eczema, fungal infection
- Requires addressing predisposing factors and topical steroid therapy

**Fungal Otitis Externa (Otomycosis):**
- Aspergillus and Candida species
- Characterized by fuzzy appearing debris and intense pruritus
- Antifungal drops required; steroids may worsen

## Sensorineural Hearing Loss Mechanisms

**Metabolic Presbycusis:**
- Stria vascularis degeneration
- Reduced endocochlear potential
- Affects all frequencies relatively equally

**Sensory Presbycusis:**
- Hair cell loss (basal turn high-frequency region first)
- Most common pattern of age-related hearing loss
- Steeply sloping high-frequency loss

**Neural Presbycusis:**
- Spiral ganglion neuron loss
- Poor speech discrimination despite pure tone thresholds

**Mechanical Presbycusis:**
- Basilar membrane stiffening
- Changes in cochlear mechanics

**Noise-Induced Hearing Loss:**
- Acoustic trauma: Immediate damage from very loud sound (>140 dB)
- Temporary threshold shift: Reversible damage after moderate exposure
- Permanent threshold shift: Irreversible hair cell damage
- Base of cochlea most susceptible (4-6 kHz notch characteristic)

**Ototoxicity Mechanisms:**
- Aminoglycosides: Generate reactive oxygen species, damage mitochondria
- Cisplatin: Causes DNA cross-linking in hair cells
- Loop diuretics: Alter endolymph composition, cause temporary or permanent threshold shift
- Aspirin: Reversible effects on outer hair cell motility

## Tinnitus Pathophysiology

**Peripheral Mechanisms:**
- Damaged cochlear hair cells produce spontaneous activity
- Reduced auditory input leads to increased central gain (homeostatic plasticity)
- Discordant damage between inner and outer hair cells

**Central Mechanisms:**
- Increased spontaneous firing in auditory nerve
- Hyperactivity in dorsal cochlear nucleus
- Reorganization of tonotopic maps in auditory cortex
- Involvement of non-auditory structures (limbic system) in chronic tinnitus distress

**Neuroimaging Correlates:**
- Increased activity in auditory cortex
- Functional connectivity changes between auditory and non-auditory regions
- Abnormal gamma-band oscillations

## Vestibular Pathophysiology

**BPPV Mechanism:**
- Canalolithiasis: Free-floating otoconia in semicircular canal
- Cupulolithiasis: Otoconia adherent to cupula
- Posterior canal most common (85-95%)
- Diagnosis confirmed by Hallpike-Dix maneuver

**Meniere Disease:**
- Endolymphatic hydrops: Excess endolymph causing distension
- Possible etiologies: Endolymphatic sac obstruction, autoimmune, viral, genetic
- Histopathology: Reissner's membrane bulging into scala vestibuli
- Disease progression: Hearing fluctuations → permanent loss → involvement of other ear

**Vestibular Neuritis:**
- Viral reactivation (HSV-1) in vestibular ganglion
- Selective damage to superior vestibular nerve (accounts for sparing of horizontal canal function)
- Recovery via central compensation over weeks to months

**Vestibular Compensation:**
- Acute stage: Severe vertigo, nausea, nystagmus
- Subacute stage: Symptomatic improvement with static deficits
- Chronic stage: Dynamic recovery with vestibular rehabilitation

## Surgical Considerations

**Myringotomy with Tube Placement:**
- Indications: Recurrent AOM, chronic OME with hearing loss, atelectasis
- Tube types: Short-term (6-12 months) vs long-term (2+ years)
- Complications: Otorrhea, tympanosclerosis, persistent perforation

**Tympanoplasty:**
- Closure of tympanic membrane perforation
- Types I-V depending on ossicular involvement
- Success rates: 80-90% for Type I

**Ossiculoplasty:**
- Reconstruction of ossicular chain
- Materials: Autologous (cartilage, bone) vs prosthetic (PORP, TORP)
- Outcomes depend on middle ear ventilation and mastoid status

**Stapedectomy for Otosclerosis:**
- Removal of fixed stapes footplate
- Placement of prosthesis from incus to oval window
- 90% closure of air-bone gap to within 10 dB

**Cochlear Implantation:**
- Indications: Severe-to-profound SNHL with minimal benefit from hearing aids
- Bilateral implantation increasingly standard
- Outcomes: Variable; speech perception in quiet ~80%, noise ~50%`,
      keyTerms: [
        { term: 'biofilm', definition: 'Aggregate of microorganisms encased in extracellular matrix, resistant to antibiotics and host defenses' },
        { term: 'endolymphatic hydrops', definition: 'Distension of endolymphatic spaces due to excess fluid, underlying pathology of Meniere disease' },
        { term: 'canalolithiasis', definition: 'Free-floating otoconia within semicircular canal causing BPPV' },
        { term: 'vestibular compensation', definition: 'Central nervous system process of adapting to peripheral vestibular loss through neuroplasticity' },
        { term: 'air-bone gap', definition: 'Difference between air conduction and bone conduction thresholds, indicates conductive hearing loss' },
        { term: 'tonotopic reorganization', definition: 'Plastic changes in auditory cortex map following hearing loss or input deprivation' },
        { term: 'homeostatic plasticity', definition: 'Central gain increase in response to reduced auditory input, contributing to tinnitus' },
      ],
      clinicalNotes: `The 4kHz notch in audiograms is characteristic of noise-induced hearing loss because this region corresponds to the basal turn of the cochlea, which is most susceptible to metabolic and vascular compromise. The American Academy of Otolaryngology recommends against routine use of antibiotics for AOM given high spontaneous resolution rates, but recommends treatment for children <6 months, severe illness, or bilateral AOM with otorrhea.`,
    },

    5: {
      level: 5,
      summary: 'Advanced otologic practice requires comprehensive understanding of evidence-based guidelines, emerging therapeutic technologies, surgical decision-making, and multidisciplinary management of complex auditory and vestibular disorders. Contemporary practice emphasizes precision medicine approaches and outcomes-based care.',
      explanation: `## Clinical Practice Guidelines (AAO-HNS)

**Otitis Media with Effusion (2016 Update):**
- Diagnosis requires pneumatic otoscopy or tympanometry
- Observation for 3 months recommended before intervention
- Autoinsufflation devices may be recommended
- Hearing testing recommended for ≥3 months effusion
- Tympanostomy tubes recommended for: ≥4-6 months bilateral effusion with hearing loss, ≥3 months with structural changes, or at-risk children
- Intranasal steroids, antibiotics, and decongestants NOT recommended

**Acute Otitis Externa (2014):**
- Diagnosis requires rapid onset of symptoms, signs of canal inflammation, and tenderness
- Topical antibiotics with or without corticosteroids as first-line
- Systemic antibiotics NOT recommended unless extension beyond ear canal or immunocompromised
- Aural toilet (debridement) essential for severe cases
- Nonototoxic drops recommended if tympanic membrane perforated

**Sudden Sensorineural Hearing Loss (2019):**
- Urgent evaluation recommended; treatment ideally within 2-4 weeks
- Intratympanic or oral steroids recommended as initial therapy
- Imaging recommended to identify retrocochlear pathology
- No robust evidence for antivirals, hyperbaric oxygen, or vasodilators

**Benign Paroxysmal Positional Vertigo (2017):**
- Diagnosis confirmed by nystagmus with diagnostic maneuvers
- Canalith repositioning maneuvers (Epley) recommended for posterior canal BPPV
- Post-maneuver precautions not required
- Vestibular rehabilitation recommended for persistent symptoms

**Cerumen Impaction (2017):**
- Diagnosis requires symptoms attributable to impaction or inability to visualize tympanic membrane
- Cerumenolytic agents, irrigation, and manual removal are acceptable first-line
- Ear drops NOT recommended alone for symptomatic impaction
- Contraindications to irrigation: tympanic membrane perforation, ear tubes, immunocompromised

## Emerging Therapies and Technology

**Cochlear Implant Advances:**
- Hybrid implants: Preserve residual hearing in low frequencies while electrically stimulating high frequencies
- Fully implantable devices under development
- Electrode array designs minimizing insertion trauma
- Signal processing strategies improving music appreciation and tone perception
- Bilateral and bimodal fitting (CI + hearing aid) optimizing outcomes

**Hearing Aid Technology:**
- Disposable and over-the-counter options expanding access
- Artificial intelligence for environmental adaptation
- rechargeability and direct streaming to devices
- Bone conduction implants for conductive/mixed loss

**Tinnitus Therapies:**
- Cognitive behavioral therapy (CBT): Most effective for reducing tinnitus distress
- Sound therapy: Masking, partial masking, and habituation approaches
- Neuromodulation: Transcranial magnetic stimulation, transcutaneous electrical stimulation
- Combination therapies showing promise in clinical trials

**Vestibular Rehabilitation:**
- Customized exercise protocols (adaptation, habituation, substitution)
- Gaze stability exercises: Improves VOR gain and reduces oscillopsia
- Balance training: Reduces fall risk in chronic vestibular loss
- Virtual reality applications expanding treatment options

## Surgical Decision-Making

**Tympanostomy Tube Selection:**
- Short-term tubes: Lower complication rate, higher need for replacement
- Long-term tubes: Longer ventilation, higher risk of persistent perforation
- Considerations: age, recurrence risk, planned future procedures, swimming activities

**Chronic Ear Surgery:**
- Canal wall-up vs canal-down mastoidectomy: Trade-off between recurrence rate and mastoid cavity issues
- Ossiculoplasty timing vs staging with mastoidectomy
- Use of cartilage for tympanic membrane reconstruction in atelectatic ears
- Second-look procedures for cholesteatoma surveillance

**Otosclerosis Surgery:**
- Stapedectomy vs stapedotomy: Similar outcomes with slight preference for small fenestra technique
- Laser-assisted techniques for precise footplate manipulation
- Piston prosthesis selection considerations (size, material)
- Revision surgery considerations and outcomes

**Vestibular Schwannoma Management:**
- Observation with serial imaging for small tumors
- Stereotactic radiosurgery: Control rates >95% for small-medium tumors
- Microsurgical resection: Translabyrinthine (hearing sacrifice), retrosigmoid, middle fossa approaches
- Multidisciplinary decision-making incorporating tumor size, growth rate, hearing status, patient age and preferences

## Diagnostic Advances

**High-Resolution CT Temporal Bone:**
- 0.5mm or less slice thickness
- Multiplanar reconstructions for surgical planning
- Assessment for cochlear implant candidacy
- Detection of subtle temporal bone fractures

**MRI Protocols:**
- 3D FLAIR for endolymphatic hydrops
- 3D CISS/FIESTA for cranial nerve and cochlear duct assessment
- Diffusion-weighted imaging for cholesteatoma detection (non-echo-planar preferred)
- Gadolinium enhancement patterns for various pathologies

**Audiometric Assessment:**
- High-frequency audiometry (up to 12-16 kHz) for early ototoxicity detection
- Otoacoustic emissions: Objective assessment of outer hair cell function
- Auditory brainstem response: Neural assessment, especially for infants

**Vestibular Testing:**
- Video head impulse test (vHIT): Assess individual semicircular canal function
- Vestibular evoked myogenic potentials (VEMPs): Saccular (cVEMP) and utricular (oVEMP) assessment
- Rotary chair testing: Comprehensive vestibular function assessment
- Posturography: Quantify balance control contributions

## Outcomes and Quality Measures

**Hearing-Related Quality of Life:**
- Hearing Handicap Inventory for Adults (HHIA) and Elderly (HHIE)
- Speech, Spatial and Qualities of Hearing Scale (SSQ)
- Importance of patient-reported outcomes in addition to pure tone thresholds

**Otitis Media Outcomes:**
- Tube otorrhea incidence: 15-30% (higher with ventilation tubes)
- Recurrence rates after tube extrusion: 20-40%
- Long-term tympanic membrane perforation: 2-4%
- Tympanosclerosis: Common but usually clinically insignificant

**Surgical Outcomes:**
- Tympanoplasty success (Type I): 80-90%
- Ossiculoplasty success: 50-80% depending on materials and middle ear status
- Stapedectomy air-bone gap closure to ≤10 dB: ~90%
- Cholesteatoma recurrence: Canal wall-down ~5%, canal wall-up 15-30%

## Special Populations

**Pediatric Considerations:**
- Developmental critical periods for speech and language acquisition
- Aggressive management of bilateral hearing loss essential
- Universal newborn hearing screening mandates
- AOM diagnostic challenges: Pediatric ear canal size and mobility
- Adenoidectomy considerations for OME management

**Geriatric Considerations:**
- Presbycusis and communication difficulties
- Vestibular decline contributing to falls
- Comorbidities affecting treatment options
- Polypharmacy and ototoxicity risk
- Hearing aid adoption barriers

**Immunocompromised Patients:**
- Higher risk for malignant otitis externa
- Atypical pathogens and aggressive presentations
- Necrotizing otitis media: Rare but life-threatening
- Importance of early aggressive intervention

**Pregnancy:**
- Physiologic Eustachian tube dysfunction contributing to otitis media
- Medication safety considerations for treatment
- Imaging modalities avoiding radiation`,
      keyTerms: [
        { term: 'pneumatic otoscopy', definition: 'Otoscopic examination with insufflation to assess tympanic membrane mobility, essential for otitis media diagnosis' },
        { term: 'autoinsufflation', definition: 'Patient-performed Valsalva maneuver to open Eustachian tube and ventilate middle ear' },
        { term: 'bimodal fitting', definition: 'Combination of cochlear implant in one ear and hearing aid in the other for optimal hearing' },
        { term: 'canal wall-down mastoidectomy', definition: 'Removal of posterior ear canal wall to create common cavity with mastoid, lower recurrence but higher cavity care burden' },
        { term: 'posturography', definition: 'Objective assessment of balance control using force plate to quantify contributions of visual, vestibular, and proprioceptive inputs' },
        { term: 'otosclerosis', definition: 'Primary bone dysplasia of temporal bone causing otic capsule fixation, most commonly stapes footplate' },
        { term: 'neurotologic', definition: 'Subspecialty focusing on neurological aspects of otology, including skull base surgery' },
      ],
      clinicalNotes: `Key Practice Guidelines Summary:

AAO-HNS Clinical Practice Guidelines provide level A recommendations based on systematic evidence review. Key recommendations:
1. OME: Observation for 3 months before intervention; avoid systemic steroids/decongestants
2. OE: Topical antibiotics first-line; systemic antibiotics only for extension beyond ear canal
3. SSNHL: Treat within 2-4 weeks with steroids; avoid unproven therapies
4. BPPV: Canalith repositioning maneuvers are first-line; post-maneuver precautions unnecessary
5. Cerumen: Cerumenolytics, irrigation, or manual removal equally effective; avoid drops alone for symptomatic impaction

Red flags requiring urgent referral:
- Sudden hearing loss (within 72 hours)
- Asymmetric or progressive sensorineural loss
- Associated neurological symptoms
- Periauricular swelling or cellulitis
- Persistent otorrhea despite appropriate therapy
- Mastoid tenderness or posterior auricular protrusion`,
    },
  },

  media: [
    {
      id: 'ear-anatomy-overview',
      type: 'diagram',
      filename: 'ear-anatomy-overview.svg',
      title: 'Ear Anatomy Overview',
      description: 'Cross-sectional view of external, middle, and inner ear structures',
    },
    {
      id: 'otitis-media-comparison',
      type: 'diagram',
      filename: 'normal-vs-otitis-media-tympanic-membrane.svg',
      title: 'Normal vs Otitis Media Tympanic Membrane',
      description: 'Comparison of normal, bulging, and perforated tympanic membranes',
    },
    {
      id: 'audiogram-key',
      type: 'diagram',
      filename: 'audiogram-interpretation-guide.svg',
      title: 'Audiogram Interpretation Guide',
      description: 'Guide to reading and interpreting audiograms with examples',
    },
  ],

  citations: [
    {
      id: 'aao-hns-ome-guideline-2016',
      type: 'article',
      title: 'Clinical Practice Guideline: Otitis Media with Effusion Update (2016)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Lieberthal, A.S.', 'Carroll, A.E.', 'Chonmaitree, T.', 'et al.'],
      url: 'https://www.entnet.org/content/otitis-media-effusion',
    },
    {
      id: 'aao-hns-oe-guideline-2014',
      type: 'article',
      title: 'Clinical Practice Guideline: Acute Otitis Externa (2014)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Rosenfeld, R.M.', 'Schwartz, S.R.', 'Cannon, C.R.', 'et al.'],
    },
    {
      id: 'aao-hns-bppv-guideline-2017',
      type: 'article',
      title: 'Clinical Practice Guideline: Benign Paroxysmal Positional Vertigo (2017 Update)',
      source: 'Otolaryngology-Head and Neck Surgery',
      authors: ['Bhattacharyya, N.', 'Gubbels, S.P.', 'Schwartz, S.R.', 'et al.'],
    },
    {
      id: 'cummings-otology',
      type: 'textbook',
      title: 'Otology and Neurotology (7th Edition)',
      source: 'Cummings Otolaryngology: Head and Neck Surgery',
      chapter: 'Section III',
    },
    {
      id: 'bailey-otolaryngology',
      type: 'textbook',
      title: 'Head & Neck Surgery - Otolaryngology (5th Edition)',
      source: 'Lippincott Williams & Wilkins',
      authors: ['Bailey, B.J.', 'Johnson, J.T.', 'Newlands, S.D.'],
    },
  ],

  crossReferences: [
    { targetId: 'ent-nose', targetType: 'topic', relationship: 'sibling', label: 'Nose and Sinus Disorders' },
    { targetId: 'ent-throat', targetType: 'topic', relationship: 'sibling', label: 'Throat Disorders' },
    { targetId: 'ent-voice', targetType: 'topic', relationship: 'sibling', label: 'Voice and Larynx' },
    { targetId: 'ent-pediatric', targetType: 'topic', relationship: 'related', label: 'Pediatric ENT' },
    { targetId: 'system-nervous', targetType: 'system', relationship: 'related', label: 'Nervous System' },
  ],

  tags: {
    systems: ['auditory', 'vestibular'],
    structures: ['FMA:52780', 'FMA:60909', 'FMA:60908'],
    topics: ['otology', 'hearing', 'vestibular', 'infection', 'audiology'],
    keywords: ['otitis media', 'otitis externa', 'hearing loss', 'tinnitus', 'vertigo', 'cochlear implant', 'tympanostomy tubes'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-25T00:00:00.000Z',
  updatedAt: '2026-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earContent;
