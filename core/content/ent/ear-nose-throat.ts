/**
 * Ear, Nose, and Throat -- Comprehensive ENT Conditions
 *
 * Focused content on four major ENT domains:
 * hearing loss, sinusitis, pharyngitis, and vocal cord disorders.
 *
 * Five complexity levels from 8th-grade through MD/Professional.
 */

import { EducationalContent } from '../types';

export const earNoseThroatConditions: EducationalContent = {
  id: 'ent-ear-nose-throat-conditions',
  type: 'condition',
  name: 'Ear, Nose, and Throat Conditions',
  nameEs: 'Condiciones de Oido, Nariz y Garganta',
  alternateNames: [
    'ENT Conditions',
    'Otolaryngology Common Conditions',
    'Hearing Loss, Sinusitis, Pharyngitis, and Vocal Cord Disorders',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Your ears let you hear, your nose helps you breathe and smell, and your throat helps you swallow and talk. Problems in these areas are very common and usually treatable.',
      explanation: `Your ears, nose, and throat are all connected inside your head. Doctors who specialize in these areas are called ENT doctors (or otolaryngologists).

**How Hearing Works**

- Sound waves travel into your ear canal and hit your eardrum, making it vibrate
- Tiny bones behind the eardrum pass the vibrations deeper into your ear
- A snail-shaped organ called the cochlea turns vibrations into nerve signals
- The hearing nerve carries these signals to your brain, and you hear the sound
- Hearing loss can happen if any part of this chain is damaged

**Why You Get Stuffy Noses**

- Your nose has hollow spaces called sinuses that make mucus to trap germs and dirt
- When you get a cold or allergies, the lining of your nose and sinuses swells up
- Swelling blocks mucus from draining, so your nose feels stuffed and your face may hurt
- Most stuffy noses and sinus infections get better on their own or with simple treatment
- If sinus problems keep coming back, a doctor can help find out why

**Sore Throats**

- Your throat is a tube that connects your mouth to your stomach and lungs
- Sore throats are usually caused by viruses (like the common cold) and go away on their own
- Sometimes bacteria called strep cause a more serious sore throat that needs antibiotics
- Tonsils are bumps at the back of your throat that help fight germs but can get infected
- If tonsils keep getting infected or are too big, a doctor might remove them

**Your Voice**

- Inside your throat are two small bands called vocal cords that vibrate when air passes through
- The vibrations create sound, and your mouth and tongue shape the sound into words
- Talking too much, yelling, or clearing your throat a lot can hurt your vocal cords
- Bumps called nodules can form on the vocal cords from overuse, making your voice hoarse
- Resting your voice and working with a speech therapist usually helps`,
      keyTerms: [
        {
          term: 'cochlea',
          definition:
            'The snail-shaped part of the inner ear that turns sound vibrations into nerve signals',
          pronunciation: 'KOK-lee-ah',
        },
        {
          term: 'sinuses',
          definition:
            'Hollow spaces in the bones of your face that are connected to your nose',
        },
        {
          term: 'tonsils',
          definition:
            'Two lumps of tissue at the back of your throat that help fight germs',
        },
        {
          term: 'vocal cords',
          definition:
            'Two small bands inside your throat that vibrate to create your voice',
        },
        {
          term: 'eardrum',
          definition:
            'A thin membrane inside your ear that vibrates when sound hits it',
        },
      ],
      analogies: [
        'Your ear works like a chain of dominoes -- sound hits the eardrum, which pushes the tiny bones, which push fluid in the cochlea, which sends a signal to your brain.',
        'Sinuses are like little rooms in your face with doors that can swell shut when you are sick, trapping mucus inside.',
        'Vocal cords are like guitar strings -- they vibrate to make sound, and overuse can wear them out.',
        'Tonsils are like security guards at the back of your throat, catching germs before they get deeper into your body.',
      ],
      examples: [
        'A child who turns the TV volume way up or does not respond when called from another room may have hearing loss.',
        'A person with a cold who gets facial pain and thick yellow-green mucus lasting more than 10 days probably has a sinus infection.',
        'A teacher who talks all day and develops a raspy voice may have vocal cord nodules from overuse.',
      ],
      patientCounselingPoints: [
        'Protect your hearing by wearing earplugs around loud noises like concerts or power tools.',
        'Most sore throats are caused by viruses and do not need antibiotics.',
        'If your voice stays hoarse for more than two weeks, see a doctor.',
      ],
    },

    2: {
      level: 2,
      summary:
        'Hearing loss is classified as conductive or sensorineural; sinusitis is distinguished as acute versus chronic; pharyngitis requires differentiation of viral from bacterial (strep) causes; vocal cord nodules and other lesions cause dysphonia from vocal overuse or irritation.',
      explanation: `## Hearing Loss

Hearing loss affects nearly 15% of adults and is classified by where the problem occurs.

**Conductive Hearing Loss:**
- Sound is blocked or reduced in the outer or middle ear
- Causes: Earwax buildup, fluid behind the eardrum (otitis media), eardrum perforation, otosclerosis (stiffening of a middle ear bone)
- Often treatable or reversible with medication, earwax removal, or surgery
- Tuning fork test (Rinne): Bone conduction louder than air conduction on the affected side

**Sensorineural Hearing Loss (SNHL):**
- Damage to the inner ear (cochlea) or hearing nerve
- Causes: Aging (presbycusis), noise exposure, genetics, infections (mumps, meningitis), medications (aminoglycosides, cisplatin)
- Usually permanent and progressive
- Treatment: Hearing aids for mild-moderate; cochlear implants for severe-profound

**Mixed Hearing Loss:** Combination of both types

**Sudden sensorineural hearing loss (SSNHL):** 30+ dB loss over 3 frequencies within 72 hours -- a medical emergency requiring urgent steroid treatment

## Sinusitis

**Acute Sinusitis (< 4 weeks):**
- Usually follows a viral upper respiratory infection
- Symptoms: Nasal congestion, purulent discharge, facial pain/pressure, reduced smell
- Viral (most common): Symptoms peak around days 3-5 and improve by day 10
- Bacterial: Suspect if symptoms persist >10 days, worsen after initial improvement, or are severe (high fever + purulent discharge for 3+ days)
- Treatment: Saline irrigation, decongestants, intranasal corticosteroids; antibiotics (amoxicillin-clavulanate) only for bacterial sinusitis

**Chronic Rhinosinusitis (CRS) (>= 12 weeks):**
- Persistent inflammation of the sinuses despite treatment
- Two subtypes:
  - **CRS without nasal polyps (CRSsNP):** Often neutrophilic inflammation
  - **CRS with nasal polyps (CRSwNP):** Often eosinophilic/type 2 inflammation
- Symptoms: Nasal obstruction, thick drainage, facial pressure, reduced smell (especially with polyps)
- Treatment: Saline irrigation, topical steroids, possible surgery (functional endoscopic sinus surgery)

## Pharyngitis

**Viral Pharyngitis (most common):**
- Causes: Rhinovirus, adenovirus, EBV (mononucleosis), influenza
- Symptoms: Sore throat, cough, rhinorrhea, low-grade fever
- Treatment: Supportive care (rest, fluids, analgesics)

**Streptococcal Pharyngitis (Strep Throat):**
- Caused by Group A Streptococcus (Streptococcus pyogenes)
- Symptoms: Sudden severe sore throat, fever >38.3 C, tonsillar exudate, tender anterior cervical lymph nodes, absence of cough
- Centor criteria help assess likelihood (1 point each): Fever, tonsillar exudate, tender anterior cervical nodes, absence of cough
- Modified Centor (McIsaac): Adds age adjustment (+1 for age 3-14; 0 for 15-44; -1 for >=45)
- Diagnosis: Rapid antigen detection test (RADT) and/or throat culture
- Treatment: Penicillin V or amoxicillin for 10 days (prevents rheumatic fever)

**Tonsillitis:**
- Recurrent infection of the tonsils
- Paradise criteria for tonsillectomy: 7 episodes in 1 year, 5/year for 2 years, or 3/year for 3 years
- Peritonsillar abscess: Complication requiring drainage -- presents with trismus, uvular deviation, muffled "hot potato" voice

## Vocal Cord Disorders

**Vocal cord nodules:**
- Bilateral callus-like growths at the junction of the anterior 1/3 and posterior 2/3 of the vocal folds
- Caused by chronic vocal abuse (singers, teachers, coaches)
- Treatment: Voice therapy (speech-language pathologist) is first-line; surgery rarely needed

**Vocal cord polyps:**
- Usually unilateral; associated with acute vocal trauma (screaming), smoking, reflux
- May require surgical excision if voice therapy fails

**Vocal cord paralysis:**
- Unilateral most common; causes breathy, weak voice
- Causes: Thyroid surgery, lung cancer (recurrent laryngeal nerve), viral (idiopathic)
- Treatment: Voice therapy, injection laryngoplasty (temporary filler), thyroplasty (permanent)

**Laryngopharyngeal reflux (LPR):**
- Stomach acid reaches the larynx and irritates vocal cords
- Symptoms: Chronic throat clearing, hoarseness, globus sensation, chronic cough
- Often no typical heartburn (unlike GERD)
- Treatment: Diet modification, proton pump inhibitors, behavioral changes`,
      keyTerms: [
        {
          term: 'conductive hearing loss',
          definition:
            'Hearing loss caused by blockage or damage in the outer or middle ear preventing sound from reaching the inner ear',
        },
        {
          term: 'sensorineural hearing loss',
          definition:
            'Hearing loss caused by damage to the inner ear (cochlea) or auditory nerve; usually permanent',
          pronunciation: 'SEN-sor-ee-NOOR-al',
        },
        {
          term: 'Centor criteria',
          definition:
            'A clinical scoring system using four criteria (fever, exudate, cervical nodes, no cough) to assess the probability of streptococcal pharyngitis',
        },
        {
          term: 'chronic rhinosinusitis (CRS)',
          definition:
            'Sinus inflammation lasting 12 weeks or longer despite treatment; subtypes include with and without nasal polyps',
        },
        {
          term: 'vocal cord nodules',
          definition:
            'Bilateral callus-like growths on the vocal folds caused by chronic vocal overuse; treated with voice therapy',
        },
        {
          term: 'laryngopharyngeal reflux (LPR)',
          definition:
            'Backflow of stomach acid to the throat and voice box causing hoarseness, throat clearing, and chronic cough without typical heartburn',
        },
        {
          term: 'tonsillectomy',
          definition:
            'Surgical removal of the tonsils, indicated for recurrent tonsillitis meeting Paradise criteria or obstructive sleep apnea',
        },
      ],
      analogies: [
        'Conductive hearing loss is like wearing earplugs -- sound is blocked before it reaches the inner ear. Sensorineural hearing loss is like a broken microphone -- the sound reaches it but the signal is damaged.',
        'Acute sinusitis is like a traffic jam in your sinuses -- everything is backed up temporarily. Chronic sinusitis is like a road permanently under construction.',
        'Vocal cord nodules are like calluses on a runner\'s foot -- they form from repeated friction and overuse.',
        'Centor criteria work like a checklist at the airport -- the more items you check off, the more likely you need further screening (in this case, for strep).',
      ],
    },

    3: {
      level: 3,
      summary:
        'Hearing loss evaluation integrates cochlear mechanics and the traveling wave theory, sinusitis pathology requires understanding olfactory physiology and mucociliary clearance, pharyngitis management relies on Centor criteria and rheumatic fever prevention, and vocal cord disorders require laryngeal anatomy knowledge and understanding of phonation biomechanics.',
      explanation: `## Hearing Loss -- Cochlear Mechanics and the Traveling Wave

**Cochlear anatomy:**
- Bony spiral of 2.5 turns; contains three fluid-filled compartments:
  - Scala vestibuli (perilymph, high Na+)
  - Scala media / cochlear duct (endolymph, high K+)
  - Scala tympani (perilymph, high Na+)
- Organ of Corti sits on the basilar membrane within the scala media
- Contains one row of inner hair cells (IHCs, ~3500) and three rows of outer hair cells (OHCs, ~12000)

**Traveling wave theory (von Bekesy):**
- Stapes vibration creates a traveling wave along the basilar membrane
- Basilar membrane properties vary along its length:
  - Base: Narrow, stiff -> resonates at high frequencies (20 kHz)
  - Apex: Wide, flexible -> resonates at low frequencies (20 Hz)
- Each frequency creates maximum displacement at a specific tonotopic location
- This is the basis of tonotopic organization throughout the auditory pathway

**Active cochlear amplifier (OHC electromotility):**
- OHCs contain prestin (motor protein) in their lateral walls
- Prestin contracts and elongates OHCs in response to voltage changes
- Amplifies basilar membrane vibration by 40-60 dB at characteristic frequency
- Loss of OHC function (noise damage, ototoxicity) eliminates this amplification
- Result: Hearing threshold elevation, reduced frequency selectivity, loudness recruitment

**IHC signal transduction:**
- Basilar membrane deflection bends IHC stereocilia
- Tip links open mechanotransduction channels (TMC1/TMC2)
- K+ influx from endolymph depolarizes IHC
- Voltage-gated Ca2+ channels open at basolateral membrane
- Synaptic ribbon releases glutamate onto spiral ganglion neuron dendrites
- Action potentials travel via auditory nerve (CN VIII) to brainstem

**Audiometric patterns by etiology:**
| Pattern | Example Etiology |
|---------|-----------------|
| High-frequency sloping | Presbycusis, noise-induced |
| Low-frequency | Meniere disease, endolymphatic hydrops |
| Flat | Otosclerosis (conductive), ototoxicity |
| Cookie-bite (mid-frequency) | Hereditary (autosomal dominant) |
| 4 kHz notch | Noise-induced (basal cochlear turn vulnerability) |
| Asymmetric SNHL | Vestibular schwannoma (requires MRI) |

## Sinusitis -- Olfactory Physiology and Mucociliary Function

**Olfactory physiology:**
- Olfactory epithelium located in the superior nasal cavity and cribriform plate region
- ~10 million olfactory receptor neurons (ORNs), each expressing one of ~400 receptor genes
- Odorant molecules bind olfactory receptors (GPCRs) -> Golf protein -> adenylyl cyclase III -> cAMP -> CNG channel opening -> depolarization
- ORN axons pass through cribriform plate to olfactory bulb (CN I)
- Olfactory loss (anosmia/hyposmia) in CRS results from both obstruction (conductive) and inflammatory damage to olfactory epithelium (sensorineural)
- Post-viral olfactory loss: Increasingly recognized post-COVID-19; olfactory training may help recovery

**Paranasal sinus anatomy and mucociliary clearance:**
- Four paired sinuses: Maxillary, ethmoid (anterior + posterior), frontal, sphenoid
- Ostiomeatal complex (OMC): Key drainage pathway for maxillary, anterior ethmoid, and frontal sinuses
- Mucociliary transport: Ciliated pseudostratified columnar epithelium; cilia beat at 10-15 Hz moving mucus toward natural ostia
- Acute sinusitis pathogenesis: Viral URI -> mucosal edema -> OMC obstruction -> mucus stasis -> secondary bacterial infection

**Microbiology:**
- Acute bacterial: S. pneumoniae, H. influenzae, M. catarrhalis
- Chronic: Polymicrobial; anaerobes; S. aureus (including MRSA); fungi (allergic fungal rhinosinusitis)

**CRS endotyping:**
- CRS with nasal polyps (CRSwNP): Predominantly type 2 (Th2/eosinophilic) inflammation; elevated IL-4, IL-5, IL-13; tissue eosinophilia
- CRS without nasal polyps (CRSsNP): More heterogeneous; often Th1/neutrophilic; less olfactory loss
- Type 2 inflammatory markers: Tissue eosinophils, total IgE, periostin, IL-5

**Functional Endoscopic Sinus Surgery (FESS):**
- Principle: Restore ventilation and drainage of the OMC
- Technique: Endoscopic uncinectomy, maxillary antrostomy, ethmoidectomy, +/- frontal sinusotomy (Draf classification)
- Indications: CRS failing maximal medical therapy (topical steroids, saline irrigation, +/- antibiotics for 3+ months)
- Outcomes: 80-90% symptom improvement; revision rate 10-20%

## Pharyngitis -- Centor Criteria, Rheumatic Fever, and Complications

**Modified Centor (McIsaac) score:**
| Criterion | Points |
|-----------|--------|
| Temperature >38.3 C | +1 |
| Absence of cough | +1 |
| Tender anterior cervical lymphadenopathy | +1 |
| Tonsillar swelling or exudate | +1 |
| Age 3-14 years | +1 |
| Age 15-44 years | 0 |
| Age >=45 years | -1 |

**Management by score:**
- Score 0-1: No testing needed; viral etiology likely
- Score 2-3: Perform RADT; treat if positive; backup culture if negative in children
- Score 4-5: Empiric treatment or RADT; high probability of GAS

**Rheumatic fever prevention:**
- GAS pharyngitis is the only common infection that triggers acute rheumatic fever (ARF)
- ARF manifests 2-4 weeks post-infection: Carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules (Jones criteria)
- Penicillin treatment within 9 days of symptom onset prevents ARF
- Rheumatic heart disease (mitral stenosis) is the major long-term sequela

**Peritonsillar abscess (PTA):**
- Most common deep neck space infection
- Clinical: Severe unilateral throat pain, trismus, uvular deviation, muffled voice, drooling
- Diagnosis: Clinical +/- CT with contrast or intraoral ultrasound
- Treatment: Needle aspiration or incision and drainage + antibiotics (amoxicillin-clavulanate or clindamycin)

## Vocal Cord Disorders -- Laryngeal Anatomy and Phonation

**Laryngeal anatomy:**
- Framework: Thyroid, cricoid, arytenoid, epiglottic cartilages
- True vocal folds: Stratified squamous epithelium over lamina propria (superficial, intermediate, deep layers) and vocalis muscle
- Reinke space: Superficial lamina propria; key vibrating layer; edema here causes Reinke edema (smokers)
- Recurrent laryngeal nerve (branch of CN X / vagus): Innervates all intrinsic laryngeal muscles except cricothyroid
- Superior laryngeal nerve (external branch): Innervates cricothyroid (vocal fold tensor)

**Phonation biomechanics (myoelastic-aerodynamic theory):**
1. Vocal folds adducted by intrinsic muscles (lateral cricoarytenoid, interarytenoid)
2. Subglottic air pressure builds below closed folds
3. When pressure exceeds fold resistance, folds blown apart
4. Bernoulli effect and tissue elasticity snap folds back together
5. Cycle repeats at fundamental frequency (100-250 Hz typical speech)
6. Mucosal wave: Superficial lamina propria undulates over deeper layers; visible on stroboscopy

**Vocal fold lesion classification:**
| Lesion | Laterality | Key Feature | Treatment |
|--------|-----------|-------------|-----------|
| Nodules | Bilateral | Anterior 1/3 junction; vocal abuse | Voice therapy |
| Polyp | Usually unilateral | Hemorrhagic or gelatinous; acute trauma | Voice therapy +/- microlaryngoscopy |
| Cyst | Unilateral | Subepithelial; disrupts mucosal wave | Surgical excision |
| Reinke edema | Bilateral | Diffuse SLP edema; smoking | Smoking cessation; microflap |
| Granuloma | Posterior | Vocal process of arytenoid; LPR/intubation | Anti-reflux therapy; observation |
| Leukoplakia | Variable | White patch; premalignant | Biopsy to rule out dysplasia/SCC |

**Laryngoscopy modalities:**
- Flexible nasopharyngolaryngoscopy: Office-based; dynamic view of vocal fold motion
- Videostroboscopy: Assesses mucosal wave; gold standard for vocal fold lesion evaluation
- Direct microlaryngoscopy: Operating room; allows biopsy and microsurgical treatment`,
      keyTerms: [
        {
          term: 'traveling wave',
          definition:
            'The wave of displacement propagating along the basilar membrane in response to sound; its peak location encodes sound frequency due to tonotopic variation in membrane stiffness',
        },
        {
          term: 'prestin',
          definition:
            'Motor protein in outer hair cell lateral walls responsible for electromotility and cochlear amplification; its dysfunction causes sensorineural hearing loss',
        },
        {
          term: 'ostiomeatal complex (OMC)',
          definition:
            'The common drainage pathway for the maxillary, anterior ethmoid, and frontal sinuses; its obstruction is the key event in sinusitis pathogenesis',
        },
        {
          term: 'type 2 inflammation',
          definition:
            'Th2-driven immune response characterized by eosinophilia and elevated IL-4, IL-5, and IL-13; predominant in CRS with nasal polyps',
        },
        {
          term: 'modified Centor (McIsaac) score',
          definition:
            'Clinical prediction rule incorporating fever, exudate, cervical nodes, absence of cough, and age to estimate the probability of Group A Streptococcal pharyngitis',
        },
        {
          term: 'Reinke space',
          definition:
            'The superficial lamina propria of the vocal fold; the key vibrating layer whose integrity is essential for normal voice production',
        },
        {
          term: 'myoelastic-aerodynamic theory',
          definition:
            'The model of phonation in which vocal fold vibration results from the interaction of muscle tension (myoelastic) and airflow dynamics (aerodynamic) including the Bernoulli effect',
        },
        {
          term: 'mucosal wave',
          definition:
            'The undulating motion of the vocal fold epithelium and superficial lamina propria visible on stroboscopy; its disruption indicates underlying vocal fold pathology',
        },
      ],
      clinicalNotes:
        'The 4 kHz audiometric notch is pathognomonic for noise-induced hearing loss and reflects the vulnerability of the basal cochlear turn. In pharyngitis, the Centor/McIsaac criteria should guide testing and treatment decisions -- empiric antibiotics without testing waste resources and promote resistance. In CRS, olfactory loss disproportionate to obstruction suggests olfactory epithelium damage (sensorineural component) and is characteristic of CRSwNP/type 2 inflammation.',
    },

    4: {
      level: 4,
      summary:
        'Graduate-level ENT integrates otosclerosis and cholesteatoma pathophysiology, CRS endotyping with type 2 inflammatory biomarkers, HPV-related oropharyngeal cancer staging, and laryngopharyngeal reflux mechanisms with vocal fold imaging correlates.',
      explanation: `## Hearing Loss -- Otosclerosis and Cholesteatoma

**Otosclerosis:**
- Localized bone dyscrasia affecting the otic capsule, most commonly at the fissula ante fenestram
- Pathology: Normal enchondral bone replaced by irregularly organized, vascular, spongy bone (otospongiosis) that later matures to dense sclerotic bone
- Stapes footplate fixation -> progressive conductive hearing loss
- Carhart notch: Characteristic 2 kHz dip on bone conduction audiometry (artifact, not true SNHL)
- Cochlear otosclerosis: Enzyme release from active foci damages cochlear structures -> SNHL component
- Genetics: Autosomal dominant with incomplete penetrance; associations with COL1A1, TGFB1; possible measles virus trigger
- Treatment:
  - Hearing aid: Non-surgical option
  - Stapedotomy: Laser fenestration of footplate + piston prosthesis; 90-95% closure of air-bone gap
  - Sodium fluoride: Historically used to arrest active disease; limited modern evidence
  - SNHL component not correctable surgically

**Cholesteatoma pathophysiology:**
- Keratinized stratified squamous epithelium in the middle ear cleft
- Perimatrix produces TNF-alpha, IL-1-beta, IL-6 -> osteoclast activation via RANKL/OPG pathway
- MMP-2 and MMP-9 degrade bone extracellular matrix
- Keratinocyte hyperproliferation (EGF, KGF-driven; elevated Ki-67)
- Bacterial biofilms (Pseudomonas, Proteus) sustain chronic inflammation
- Complications: Ossicular erosion (incus most common), facial nerve dehiscence (50% of cases), labyrinthine fistula, tegmen erosion (epidural abscess, meningitis), sigmoid sinus thrombosis
- Surgical management: Canal wall-up (CWU) preserves anatomy but 15-30% recidivism; canal wall-down (CWD) ~5% recidivism; non-EPI DWI MRI (sensitivity >90%) reduces need for second-look surgery

## Sinusitis -- CRS Endotyping and Type 2 Inflammation

**CRS with nasal polyps (CRSwNP) molecular pathology:**
- Type 2 inflammation is the dominant endotype in Western populations
- Key cytokines: IL-4 (IgE class switching, goblet cell metaplasia), IL-5 (eosinophil maturation and survival), IL-13 (mucus hypersecretion, tissue remodeling)
- ILC2 cells and Th2 cells are the primary IL-5 and IL-13 sources
- Elevated tissue eosinophils (>10/HPF), total IgE, and periostin are biomarkers
- Staphylococcal superantigens: S. aureus enterotoxins drive polyclonal IgE production and amplify type 2 response
- Result: Eosinophilic mucosal infiltration, edematous polyp formation, mucus hypersecretion, and anosmia

**CRS without nasal polyps (CRSsNP):**
- More heterogeneous: Th1/Th17-driven neutrophilic inflammation predominates in many patients
- Lower eosinophil counts, less IgE elevation
- Neutrophilic CRS common in Asian populations, cystic fibrosis-associated CRS, and biofilm-mediated disease
- May respond differently to biologics vs eosinophilic CRS

**Aspirin-exacerbated respiratory disease (AERD/Samter triad):**
- CRSwNP + asthma + NSAID sensitivity
- Pathophysiology: Dysregulated arachidonic acid metabolism -- overproduction of cysteinyl leukotrienes (LTC4, LTD4, LTE4) and underproduction of prostaglandin E2
- COX-1 inhibition by aspirin/NSAIDs removes the protective PGE2 brake, triggering bronchoconstriction and nasal symptoms
- Management: Aspirin desensitization, leukotriene receptor antagonists, FESS, biologics

**Allergic fungal rhinosinusitis (AFRS):**
- Bent-Kuhn criteria: Type 1 hypersensitivity, nasal polyposis, characteristic CT findings (heterogeneous signal, bone erosion), eosinophilic mucin with fungal hyphae, positive fungal stain/culture
- Most common fungi: Aspergillus, Alternaria, Curvularia
- Not invasive; immune-mediated reaction to fungal antigens
- Treatment: Surgical debridement + systemic steroids + antifungal irrigation (debated)

## Pharyngitis -- HPV-Related Oropharyngeal Cancer

**HPV-positive oropharyngeal squamous cell carcinoma (OPSCC):**
- HPV-16 accounts for >70% of oropharyngeal cancers in developed countries
- Epidemiologic shift: Rising incidence in young, non-smoking males; overtaking HPV-negative tobacco/alcohol-related cancers
- Pathogenesis: HPV E6 degrades p53; E7 inactivates Rb -> unopposed cell proliferation
- P16 immunohistochemistry: Surrogate marker for HPV; >70% nuclear/cytoplasmic staining in >=75% of tumor cells is positive
- Staging (AJCC 8th edition): Separate staging for HPV+ and HPV- oropharyngeal cancers; HPV+ has more favorable prognosis
- Treatment: Concurrent chemoradiation (cisplatin + RT) is standard for locally advanced disease
- De-escalation trials: ECOG-3311, ADEPT, E1308 exploring reduced radiation dose or single-agent treatment for favorable-risk HPV+ disease

**Complications and clinical significance:**
- HPV vaccination (9-valent) expected to reduce OPSCC incidence within decades
- Unknown primary with cervical lymph node metastasis: HPV testing guides evaluation toward oropharyngeal primary
- Better prognosis: HPV+ OPSCC has ~80% 5-year overall survival vs ~50% for HPV-negative

## Vocal Cord Disorders -- Laryngopharyngeal Reflux and Advanced Diagnostics

**Laryngopharyngeal reflux (LPR) pathophysiology:**
- Gastric acid, pepsin, and bile acids reach the larynx
- Pepsin is deposited in laryngeal epithelium and can be reactivated by any drop in pH
- Laryngeal epithelium lacks the protective mechanisms (bicarbonate, mucus, peristalsis) of esophageal epithelium
- Even small amounts of refluxate cause significant laryngeal injury
- Carbonic anhydrase III (CA III) is depleted in LPR-affected laryngeal tissue

**Reflux Finding Score (RFS) and Reflux Symptom Index (RSI):**
- RFS: 8-item endoscopic scoring system (0-26); >7 suggests LPR
  - Subglottic edema, ventricular obliteration, erythema, vocal fold edema, diffuse laryngeal edema, posterior commissure hypertrophy, granuloma, thick endolaryngeal mucus
- RSI: 9-item patient questionnaire (0-45); >13 suggests LPR

**Dual-probe 24-hour pH monitoring / pH-impedance testing:**
- Gold standard for LPR diagnosis when clinical suspicion is high but response to empiric treatment is poor
- Proximal probe placed at upper esophageal sphincter
- Johnson-DeMeester criteria for pathologic pharyngeal reflux

**Recurrent laryngeal nerve (RLN) injury:**
- Left RLN has longer course (loops under aortic arch) -> more susceptible to injury
- Most common surgical cause: Thyroidectomy (0.5-5% risk)
- Other causes: Lung apex (Pancoast) tumor, mediastinal lymphadenopathy, aortic aneurysm, skull base lesions (vagus nerve)
- Unilateral paralysis: Breathy, weak voice; aspiration risk
- Bilateral paralysis: Airway compromise (both folds in paramedian position); may require tracheostomy
- Laryngeal EMG: Differentiates neuropraxia (good prognosis for recovery) from axonal injury (poor prognosis)`,
      keyTerms: [
        {
          term: 'otosclerosis',
          definition:
            'Localized bone dyscrasia of the otic capsule causing progressive stapes footplate fixation and conductive hearing loss; treated with stapedotomy achieving 90-95% air-bone gap closure',
          pronunciation: 'oh-toh-skler-OH-sis',
        },
        {
          term: 'cholesteatoma',
          definition:
            'Keratinized squamous epithelium in the middle ear that erodes bone through inflammatory cytokines (TNF-alpha, RANKL) and matrix metalloproteinases; requires surgical excision',
          pronunciation: 'koh-leh-stee-ah-TOH-mah',
        },
        {
          term: 'type 2 inflammation in CRSwNP',
          definition:
            'Th2/eosinophilic inflammatory pathway driven by IL-4, IL-5, and IL-13, with ILC2 cells and staphylococcal superantigens amplifying the response; targetable by biologic therapies',
        },
        {
          term: 'HPV-positive OPSCC',
          definition:
            'Oropharyngeal squamous cell carcinoma driven by HPV-16 oncoproteins E6 (p53 degradation) and E7 (Rb inactivation); identified by P16 immunohistochemistry; carries favorable prognosis',
        },
        {
          term: 'Carhart notch',
          definition:
            'Characteristic 2 kHz depression on bone conduction audiometry seen in otosclerosis; represents a mechanical artifact of stapes fixation rather than true sensorineural loss',
        },
        {
          term: 'aspirin-exacerbated respiratory disease (AERD)',
          definition:
            'Clinical triad of CRSwNP, asthma, and NSAID sensitivity caused by dysregulated arachidonic acid metabolism with cysteinyl leukotriene overproduction',
        },
        {
          term: 'Reflux Finding Score (RFS)',
          definition:
            'Validated 8-item endoscopic scoring system (0-26) quantifying laryngeal signs of reflux; score >7 is suggestive of laryngopharyngeal reflux',
        },
        {
          term: 'laryngeal EMG',
          definition:
            'Electromyography of intrinsic laryngeal muscles used to differentiate neuropraxia from axonal injury in vocal fold paralysis and predict recovery potential',
        },
      ],
      clinicalNotes:
        'HPV-positive OPSCC has fundamentally changed head and neck oncology. P16-positive tumors are down-staged in AJCC 8th edition due to superior prognosis. De-escalation trials aim to reduce treatment toxicity. Every young patient with a persistent neck mass should have HPV-related malignancy in the differential. In CRS, the distinction between type 2 (eosinophilic) and non-type 2 (neutrophilic) inflammation is critical for biologic therapy candidacy. Otosclerosis should be suspected in any young adult with progressive conductive hearing loss and a normal-appearing tympanic membrane.',
    },

    5: {
      level: 5,
      summary:
        'Expert-level ENT encompasses cochlear implant candidacy and outcomes, sinus biologics (dupilumab for CRSwNP), transoral robotic surgery (TORS) for oropharyngeal cancer, and office-based laryngeal procedures including injection laryngoplasty and in-office laser ablation.',
      explanation: `## Hearing Loss -- Cochlear Implant Candidacy and Emerging Therapies

**Cochlear implant (CI) candidacy (current FDA criteria and evolving guidelines):**
- Adults: Severe-profound bilateral SNHL; sentence recognition <=50% in best-aided ear (CNC word score or AzBio sentences)
- Children: Profound bilateral SNHL (>=90 dB HL) age 9-24 months; severe-profound (>=70 dB) age 2-17 years
- Expanding criteria: Single-sided deafness (SSD), asymmetric hearing loss, moderate sloping-to-profound loss in elderly
- Hybrid/electroacoustic stimulation (EAS): Short electrode preserving residual low-frequency hearing + acoustic amplification for lows + electrical stimulation for highs

**CI outcomes:**
- Adults: Median open-set sentence recognition ~80% in quiet within 6-12 months
- Children implanted <12 months: 70-80% achieve mainstream education and age-appropriate language
- Bilateral CI: Superior sound localization and speech-in-noise performance vs unilateral
- Predictors of success: Duration of deafness (shorter = better), pre-lingual vs post-lingual, cochlear nerve integrity, cognitive status

**Gene therapy for hearing loss:**
- OTOF (otoferlin) gene therapy: AAV-mediated delivery for DFNB9 (autosomal recessive otoferlin deficiency)
  - Dual-vector approach (gene too large for single AAV): Two overlapping AAV vectors recombine intracellularly
  - Chinese clinical trials (Fudan University): Dramatic hearing restoration in congenitally deaf children; published 2024
  - DB-OTO (Decibel Therapeutics): Phase I/II in the West
- GJB2 (Connexin 26): Preclinical AAV-mediated gene replacement showing promise
- Hair cell regeneration:
  - Notch pathway inhibition: Gamma-secretase inhibitors promote supporting cell-to-hair cell transdifferentiation
  - Atoh1 overexpression: Key transcription factor for hair cell fate determination
  - FX-322 (Frequency Therapeutics): Small molecule combination (CHIR99021 + VPA) stimulating progenitor cell expansion; Phase 2a results disappointing but concept continues

**Otoprotection:**
- Cisplatin ototoxicity prevention: Sodium thiosulfate (SIOPEL-6 and COG ACCL0431 trials showed hearing preservation in pediatric cancer)
- Aminoglycoside otoprotection: ORC-13661 (otoferlin pathway modulator); N-acetylcysteine (mixed evidence)
- Noise-induced hearing loss prevention: D-methionine, magnesium, NAC -- preclinical evidence; no FDA-approved otoprotectant

## Sinusitis -- Biologics for CRSwNP and Advanced Surgical Approaches

**Biologic therapy for CRSwNP (type 2-targeted):**
| Agent | Target | Key Trial | Outcomes |
|-------|--------|-----------|----------|
| Dupilumab (Dupixent) | IL-4R-alpha (blocks IL-4 and IL-13) | SINUS-24/52 | Reduced polyp score, improved SNOT-22, restored smell; FDA-approved for CRSwNP |
| Omalizumab (Xolair) | IgE | POLYP 1/2 | Reduced polyp score; FDA-approved for CRSwNP |
| Mepolizumab (Nucala) | IL-5 | SYNAPSE | Reduced polyp score and need for surgery; FDA-approved for CRSwNP |
| Benralizumab (Fasenra) | IL-5R-alpha | OSTRO | Reduced polyp score; FDA-approved for CRSwNP |

**Dupilumab mechanism and clinical significance:**
- Monoclonal antibody binding IL-4 receptor alpha subunit
- Blocks both IL-4 signaling (via type 1 receptor) and IL-13 signaling (via type 2 receptor)
- Suppresses IgE production, eosinophil recruitment, goblet cell metaplasia, and tissue remodeling
- SINUS-24/52 data: Significant polyp score reduction, improved nasal congestion, restored olfaction, improved CT Lund-Mackay score, reduced need for systemic steroids and surgery
- Candidacy: CRSwNP inadequately controlled after surgery and/or systemic corticosteroids; type 2 biomarker elevation (eosinophils >150/microL, IgE >100 IU/mL)
- Practical: Q2 week subcutaneous injection; also FDA-approved for atopic dermatitis, asthma, eosinophilic esophagitis (shared type 2 pathway)

**Extended sinus surgery concepts:**
- Draf III (modified Lothrop/endoscopic modified Lothrop procedure): Creates a single large neo-frontal ostium by removing the frontal sinus floor, intersinus septum, and superior nasal septum; for recalcitrant frontal sinusitis
- Balloon sinuplasty: Catheter-based dilation of sinus ostia; office-based option for selected patients; evidence strongest for isolated frontal or sphenoid disease
- Image-guided surgery: Electromagnetic navigation (0.5-2 mm accuracy); standard for revision cases, skull base proximity, and distorted anatomy
- Endoscopic skull base surgery: Extended approaches for CSF leak repair, encephalocele, and benign/malignant skull base tumors (pituitary adenoma, esthesioneuroblastoma)

## Pharyngitis -- Transoral Robotic Surgery (TORS)

**TORS for HPV-positive OPSCC:**
- Da Vinci surgical system provides 3D magnified visualization, wristed instruments with 7 degrees of freedom, and tremor filtration
- Transoral approach avoids mandibulotomy and external incisions
- FDA cleared for T1-T2 tonsil and tongue base tumors
- Advantages: Shorter hospital stay, lower gastrostomy tube rates, better swallowing outcomes compared to open surgery
- Functional outcomes: 90% of patients on regular diet at 12 months; <5% long-term gastrostomy dependence

**TORS in de-escalation paradigm:**
- Primary TORS allows pathologic staging -> informs adjuvant treatment decisions
- Low-risk (negative margins, no extranodal extension): Observation or reduced-dose RT (50 Gy)
- Intermediate-risk: Standard-dose RT (60 Gy) without chemotherapy
- High-risk (positive margins, extranodal extension): Full-dose chemoRT (66-70 Gy + cisplatin)
- ECOG-3311 trial: Randomized de-escalation of adjuvant RT after TORS for intermediate-risk HPV+ OPSCC; 50 Gy non-inferior to 60 Gy
- Goal: Reduce long-term toxicity (dysphagia, xerostomia, fibrosis) while maintaining excellent oncologic outcomes

**Other pharyngeal surgery advances:**
- Transoral laser microsurgery (TLM): CO2 laser for glottic and supraglottic cancers
- Drug-eluting stents for pharyngeal/esophageal stenosis following treatment
- Sentinel lymph node biopsy: Emerging in early oral cavity SCC to reduce extent of neck dissection

## Vocal Cord Disorders -- Office-Based Laryngeal Procedures

**Injection laryngoplasty (office-based):**
- Performed under topical/local anesthesia with flexible laryngoscope guidance
- Temporary fillers: Hyaluronic acid (Restylane), carboxymethylcellulose (Radiesse Voice Gel), collagen -- last 2-6 months
- Permanent fillers: Calcium hydroxylapatite (Radiesse) -- lasts 12-18 months; autologous fat -- variable resorption
- Indications: Unilateral vocal fold paralysis, vocal fold atrophy, glottic insufficiency
- Technique: Transcricothyroid, transthyrohyoid, or transoral approach; inject lateral to vocal fold to medialize it
- Immediate voice improvement; can be performed same-day in clinic
- Serves as bridge procedure while awaiting nerve recovery or as definitive treatment in poor surgical candidates

**Office-based laryngeal laser procedures:**
- KTP (potassium-titanyl-phosphate, 532 nm) laser and pulsed-dye laser (585 nm): Target hemoglobin; ideal for vascular lesions
- Indications: Recurrent respiratory papillomatosis (RRP), vocal fold dysplasia/leukoplakia, small polyps, granulomas, Reinke edema
- Performed under topical anesthesia with distal-chip flexible laryngoscope through a working channel
- Advantages: Avoids general anesthesia and OR scheduling; serial treatments possible; lower cost
- Limitations: Limited to accessible lesions; patient cooperation required; less precise than microlaryngoscopy

**Thyroplasty (medialization laryngoplasty):**
- Type I thyroplasty: Implant (Silastic, Gore-Tex, or titanium) placed through thyroid cartilage window to medialize paralyzed vocal fold
- Performed under local anesthesia with conscious sedation
- Real-time voice assessment during procedure optimizes implant positioning
- Arytenoid adduction: Added for large posterior glottic gap; rotates arytenoid to close posterior gap

**Recurrent respiratory papillomatosis (RRP):**
- Caused by HPV-6 and HPV-11; juvenile-onset (more aggressive) and adult-onset forms
- Repeated surgical debulking (microdebrider, laser) required
- Adjuvant therapies for aggressive disease: Cidofovir (intralesional antiviral), bevacizumab (systemic or intralesional anti-VEGF), indole-3-carbinol
- Pembrolizumab (anti-PD-1): Emerging evidence for recalcitrant RRP (case series showing regression)
- HPV vaccination (quadrivalent/9-valent) expected to reduce RRP incidence

**Emerging technologies:**
- Office-based ultrasound of the larynx: Dynamic vocal fold assessment without radiation
- Virtual surgical planning for laryngeal framework surgery
- Laryngeal transplantation: Performed rarely (<10 cases worldwide); requires lifelong immunosuppression; proof-of-concept established
- Tissue-engineered vocal fold mucosa: In vitro construction of lamina propria using fibroblasts and collagen scaffolds; preclinical stage`,
      keyTerms: [
        {
          term: 'cochlear implant candidacy',
          definition:
            'Current criteria include severe-profound bilateral SNHL with sentence recognition <=50% in best-aided condition; expanding to include single-sided deafness and asymmetric loss',
        },
        {
          term: 'dupilumab for CRSwNP',
          definition:
            'IL-4R-alpha monoclonal antibody blocking both IL-4 and IL-13 signaling; FDA-approved for CRSwNP based on SINUS-24/52 trials showing reduced polyp score, restored olfaction, and reduced need for surgery',
          pronunciation: 'doo-PIL-oo-mab',
        },
        {
          term: 'transoral robotic surgery (TORS)',
          definition:
            'Minimally invasive surgical approach using the da Vinci robot for oropharyngeal tumor resection; enables primary surgical treatment with pathology-guided adjuvant de-escalation',
        },
        {
          term: 'injection laryngoplasty',
          definition:
            'Office-based procedure injecting filler material lateral to a paralyzed or atrophic vocal fold to medialize it, improving voice and reducing aspiration',
        },
        {
          term: 'otoferlin gene therapy',
          definition:
            'AAV-mediated dual-vector delivery of the OTOF gene for congenital deafness due to otoferlin deficiency; clinical trials have demonstrated dramatic hearing restoration in children',
        },
        {
          term: 'Draf III procedure',
          definition:
            'Endoscopic modified Lothrop procedure creating a common frontal sinus neo-ostium for recalcitrant frontal sinusitis; the most aggressive endoscopic frontal approach',
        },
        {
          term: 'ECOG-3311',
          definition:
            'Landmark trial demonstrating non-inferiority of reduced-dose adjuvant radiation (50 Gy) after TORS for intermediate-risk HPV-positive oropharyngeal cancer',
        },
        {
          term: 'recurrent respiratory papillomatosis (RRP)',
          definition:
            'HPV-6/11-driven benign laryngeal tumors requiring repeated surgical debulking; emerging treatments include pembrolizumab and bevacizumab for aggressive cases',
        },
      ],
      clinicalNotes: `Expert Clinical Pearls:
1. Cochlear implant candidacy criteria continue to expand; patients with single-sided deafness now benefit from CI, and hybrid devices preserve residual low-frequency hearing
2. OTOF gene therapy represents a breakthrough in congenital hearing loss; dual-vector AAV approach overcomes packaging size limitations; dramatic results in early trials
3. Dupilumab has transformed CRSwNP management; type 2 biomarkers (blood eosinophils, IgE) guide patient selection; many patients avoid revision surgery
4. HPV vaccination will eventually reduce both OPSCC and RRP incidence; current clinical impact is mostly in OPSCC de-escalation strategies
5. TORS enables pathology-guided adjuvant treatment, potentially sparing patients from unnecessary chemoradiation toxicity
6. Office-based injection laryngoplasty provides immediate voice improvement and avoids OR scheduling; ideal as early intervention for vocal fold paralysis
7. Sodium thiosulfate for cisplatin otoprotection in pediatric cancers is the closest to standard practice; adult applications are being studied
8. Biologic selection for CRSwNP should consider comorbid conditions: dupilumab if concurrent atopic dermatitis; omalizumab if prominent allergic component; mepolizumab/benralizumab if predominantly eosinophilic`,
    },
  },

  media: [
    {
      id: 'cochlear-anatomy-diagram',
      type: 'diagram',
      filename: 'cochlear-anatomy.svg',
      title: 'Cochlear Cross-Section and Tonotopic Organization',
      description:
        'Cross-section of the cochlea showing scala vestibuli, scala media, scala tympani, organ of Corti, and basilar membrane tonotopic gradient',
    },
    {
      id: 'sinus-anatomy-omc',
      type: 'diagram',
      filename: 'sinus-anatomy-omc.svg',
      title: 'Paranasal Sinuses and Ostiomeatal Complex',
      description:
        'Coronal view of paranasal sinuses highlighting the ostiomeatal complex drainage pathway',
    },
    {
      id: 'vocal-fold-lesions',
      type: 'diagram',
      filename: 'vocal-fold-lesions.svg',
      title: 'Vocal Fold Lesions Comparison',
      description:
        'Diagrams comparing nodules, polyps, cysts, Reinke edema, and granulomas on the vocal folds',
    },
    {
      id: 'laryngeal-anatomy',
      type: 'diagram',
      filename: 'laryngeal-anatomy.svg',
      title: 'Laryngeal Cartilage and Nerve Anatomy',
      description:
        'Laryngeal framework with recurrent laryngeal nerve and superior laryngeal nerve paths',
    },
    {
      id: 'diabetic-retinopathy-stages-ent',
      type: 'image',
      filename: 'nasal-polyps-endoscopic.svg',
      title: 'Endoscopic View of Nasal Polyps in CRSwNP',
      description:
        'Endoscopic photograph showing bilateral nasal polyposis obstructing the middle meatus',
    },
  ],

  citations: [
    {
      id: 'aao-hns-sinusitis-2015',
      type: 'article',
      title: 'Clinical Practice Guideline (Update): Adult Sinusitis',
      authors: ['American Academy of Otolaryngology-Head and Neck Surgery'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599815572097',
    },
    {
      id: 'sinus-24-52-dupilumab',
      type: 'article',
      title:
        'Dupilumab for the Treatment of Chronic Rhinosinusitis with Nasal Polyposis (SINUS-24 and SINUS-52)',
      source: 'The Lancet',
      url: 'https://doi.org/10.1016/S0140-6736(19)31922-4',
    },
    {
      id: 'ecog-3311-tors',
      type: 'article',
      title:
        'Transoral Robotic Surgery Followed by Randomization to De-escalation or Standard Adjuvant Therapy for HPV-Positive Oropharyngeal Cancer (ECOG-3311)',
      source: 'Journal of Clinical Oncology',
      url: 'https://doi.org/10.1200/JCO.2021.40.3',
    },
    {
      id: 'aao-hns-ssnhl-2019',
      type: 'article',
      title: 'Clinical Practice Guideline: Sudden Hearing Loss (Update)',
      authors: ['American Academy of Otolaryngology-Head and Neck Surgery'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599819859885',
    },
    {
      id: 'otof-gene-therapy-2024',
      type: 'article',
      title:
        'AAV-OTOF Gene Therapy Restores Hearing in Children with DFNB9 Deafness',
      source: 'Nature Medicine',
      url: 'https://doi.org/10.1038/s41591-024-02894-y',
    },
    {
      id: 'cummings-otolaryngology',
      type: 'textbook',
      title: 'Cummings Otolaryngology: Head and Neck Surgery, 7th Edition',
      source: 'Elsevier',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    {
      targetId: 'ear-hearing-loss',
      targetType: 'condition',
      relationship: 'related',
      label: 'Hearing Loss (detailed)',
    },
    {
      targetId: 'ear-otitis-media',
      targetType: 'condition',
      relationship: 'related',
      label: 'Otitis Media',
    },
    {
      targetId: 'ear-cholesteatoma',
      targetType: 'condition',
      relationship: 'related',
      label: 'Cholesteatoma',
    },
    {
      targetId: 'ent-allergy-rhinitis',
      targetType: 'condition',
      relationship: 'related',
      label: 'Allergic Rhinitis',
    },
    {
      targetId: 'ent-head-neck-cancer',
      targetType: 'condition',
      relationship: 'related',
      label: 'Head and Neck Cancer',
    },
    {
      targetId: 'immunology-type2-inflammation',
      targetType: 'concept',
      relationship: 'related',
      label: 'Type 2 Inflammation',
    },
  ],

  tags: {
    systems: ['auditory', 'respiratory', 'digestive'],
    topics: [
      'otology',
      'rhinology',
      'laryngology',
      'head-neck-oncology',
      'pharmacology',
      'surgery',
      'genetics',
    ],
    keywords: [
      'hearing loss',
      'cochlear implant',
      'sinusitis',
      'nasal polyps',
      'dupilumab',
      'pharyngitis',
      'strep throat',
      'HPV',
      'TORS',
      'vocal cord nodules',
      'vocal cord paralysis',
      'laryngopharyngeal reflux',
      'gene therapy',
      'biologics',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: [
        'surgery',
        'medicine',
        'family-medicine',
        'pediatrics',
        'neurology',
      ],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default earNoseThroatConditions;
