/**
 * Hearing Loss - Comprehensive Educational Content
 *
 * Covers the types, causes, diagnosis, and management of hearing loss,
 * including conductive, sensorineural, and mixed hearing loss.
 */

import { EducationalContent } from '../../../types';

export const hearingLoss: EducationalContent = {
  id: 'ent-hearing-loss',
  type: 'condition',
  name: 'Hearing Loss',
  alternateNames: ['Hearing Impairment', 'Deafness', 'Hypoacusis'],
  hpoId: 'HP:0000365',

  levels: {
    1: {
      level: 1,
      summary: 'Hearing loss means you cannot hear sounds as well as normal, and it can happen for different reasons in different parts of the ear.',
      explanation: `Hearing loss is when a person cannot hear sounds as well as someone with normal hearing. Some people are born with hearing loss, while others develop it later in life.

**Types of Hearing Loss:**

1. **Conductive Hearing Loss** - Something is blocking sound from getting through
   - Like when water gets stuck in your ear after swimming
   - Or when too much earwax builds up
   - Often can be fixed with medicine or minor procedures

2. **Sensorineural Hearing Loss** - The hearing nerve or inner ear is damaged
   - Like when the volume on a radio is turned down and won't go back up
   - Can happen from very loud noises, getting older, or illness
   - Usually permanent, but hearing aids can help

3. **Mixed Hearing Loss** - Both types together

**Common Causes:**

- **Ear infections** - Fluid or swelling blocks sound
- **Loud noises** - Concerts, headphones too loud, machinery
- **Getting older** - Hearing often gets worse with age
- **Earwax buildup** - Too much wax blocks the ear canal
- **Born with it** - Some babies are born with hearing loss

**Signs Someone Might Have Hearing Loss:**

- Asking people to repeat themselves often
- Turning the TV volume up very high
- Having trouble hearing in noisy places
- Feeling like people are mumbling
- Not hearing the doorbell or phone ring

**How Hearing Loss is Measured:**

Doctors use a hearing test where you wear headphones and raise your hand when you hear beeps. The softest sounds you can hear tell them how well you can hear.

- **Mild hearing loss**: Like listening through a thin wall
- **Moderate hearing loss**: Trouble hearing normal conversation
- **Severe hearing loss**: Only hear loud sounds
- **Profound hearing loss**: Cannot hear most sounds (deaf)

**Getting Help:**

- **Hearing aids**: Small devices worn in or behind the ear that make sounds louder
- **Cochlear implants**: A special device surgically placed to help people with very severe hearing loss
- **Sign language**: A way to communicate using hand gestures
- **Lip reading**: Watching people's lips to understand what they're saying`,
      keyTerms: [
        { term: 'hearing loss', definition: 'When a person cannot hear sounds as well as normal' },
        { term: 'conductive hearing loss', definition: 'Hearing loss caused by something blocking sound from reaching the inner ear' },
        { term: 'sensorineural hearing loss', definition: 'Hearing loss caused by damage to the inner ear or hearing nerve' },
        { term: 'hearing aid', definition: 'A small electronic device worn in or behind the ear that makes sounds louder' },
        { term: 'deaf', definition: 'Having very severe hearing loss or no hearing at all' },
      ],
      analogies: [
        'Conductive hearing loss is like trying to hear through a closed door - the sound is blocked.',
        'Sensorineural hearing loss is like a broken microphone - even if sound reaches it, it cannot work properly.',
        'A hearing aid is like glasses for your ears - it helps you experience sound better.',
      ],
      examples: [
        'A child with an ear infection might have temporary hearing loss until the infection clears.',
        'Someone who works with loud machinery without ear protection might develop hearing loss over time.',
        'An older family member might need to turn up the TV volume because of age-related hearing loss.',
      ],
    },
    2: {
      level: 2,
      summary: 'Hearing loss is classified by location (conductive vs. sensorineural), degree (mild to profound), and configuration, with causes ranging from infections and noise exposure to genetic factors and aging.',
      explanation: `## Classification of Hearing Loss

### By Location

**Conductive Hearing Loss:**
- Problem in outer or middle ear
- Sound cannot be efficiently transmitted to inner ear
- Often treatable medically or surgically

Common causes:
- Earwax impaction
- Ear infections (otitis media, otitis externa)
- Eardrum perforation
- Ossicular chain problems (otosclerosis, trauma)
- Eustachian tube dysfunction

**Sensorineural Hearing Loss (SNHL):**
- Problem in inner ear (cochlea) or auditory nerve
- Hair cells or nerve damaged
- Usually permanent

Common causes:
- Age-related (presbycusis)
- Noise exposure
- Genetic/hereditary
- Ototoxic medications
- Meniere's disease
- Acoustic neuroma

**Mixed Hearing Loss:**
- Combination of conductive and sensorineural components
- Example: Person with presbycusis (SNHL) who develops ear infection (conductive)

### By Degree

| Degree | Hearing Level (dB HL) | Impact |
|--------|----------------------|--------|
| Normal | -10 to 15 | No difficulty |
| Slight | 16-25 | Trouble with soft speech |
| Mild | 26-40 | Difficulty with soft speech, background noise |
| Moderate | 41-55 | Difficulty with conversational speech |
| Moderately Severe | 56-70 | Loud speech required |
| Severe | 71-90 | Only very loud sounds heard |
| Profound | >90 | May only feel vibrations |

### By Configuration

- **Bilateral vs. Unilateral**: Both ears vs. one ear
- **Symmetrical vs. Asymmetrical**: Same in both ears vs. different
- **Progressive vs. Stable**: Worsening over time vs. staying the same
- **Sudden vs. Gradual**: Rapid onset vs. slow development
- **Flat vs. Sloping**: Equal across frequencies vs. worse at certain pitches

## Common Causes in Detail

### Age-Related Hearing Loss (Presbycusis)
- Most common cause of SNHL in adults
- Typically begins after age 60
- Usually affects high frequencies first (high-pitched sounds)
- Gradual, bilateral, symmetrical
- Difficulty understanding speech, especially in noise

### Noise-Induced Hearing Loss
- Second most common cause of SNHL
- From occupational noise or recreational exposure
- Characteristic "noise notch" at 4000 Hz on audiogram
- Usually bilateral and symmetrical
- Preventable with hearing protection

### Otitis Media
- Middle ear infection
- Common in children (Eustachian tube more horizontal)
- Fluid accumulation impairs sound transmission
- Usually temporary (conductive)
- Repeated infections can cause permanent damage

### Otosclerosis
- Abnormal bone growth around stapes footplate
- Stapes becomes fixed, cannot vibrate
- Usually begins in 20s-30s
- Often runs in families
- Surgically treatable (stapedectomy)

## Diagnosis

### Hearing Tests

**Pure Tone Audiometry:**
- Tests hearing at different frequencies (pitch)
- Air conduction: Sound through ear canal
- Bone conduction: Sound vibrations through skull
- Difference helps distinguish conductive from sensorineural

**Speech Audiometry:**
- Speech Reception Threshold (SRT): Softest level to understand speech
- Word Recognition Score (WRS): Percentage of words understood at comfortable volume

**Tympanometry:**
- Tests middle ear function
- Measures eardrum movement
- Helps diagnose fluid, perforation, ossicular problems

### Audiogram Reading Basics
- X-axis: Frequency (Hz) - low pitch left, high pitch right
- Y-axis: Intensity (dB) - softer sounds at top, louder at bottom
- O = right ear air conduction
- X = left ear air conduction
- < and > = bone conduction

## Treatment Options

### Medical/Surgical
- Earwax removal
- Antibiotics for infection
- Ear tubes (tympanostomy) for chronic fluid
- Stapedectomy for otosclerosis
- Tympanoplasty for eardrum repair

### Amplification
- Hearing aids (various styles)
- Bone-anchored hearing devices
- Assistive listening devices

### Cochlear Implants
- For severe-to-profound SNHL
- Bypass damaged hair cells
- Directly stimulate auditory nerve
- Require surgical implantation and rehabilitation`,
      keyTerms: [
        { term: 'presbycusis', definition: 'Age-related hearing loss that typically affects high frequencies first', pronunciation: 'prez-bih-KYOO-sis' },
        { term: 'audiogram', definition: 'A graph showing hearing ability at different frequencies and intensities' },
        { term: 'tympanometry', definition: 'A test that measures how well the eardrum moves to assess middle ear function' },
        { term: 'otosclerosis', definition: 'A condition where abnormal bone growth in the middle ear prevents the stapes from vibrating normally', pronunciation: 'oh-toh-skleh-ROH-sis' },
        { term: 'ototoxic', definition: 'Harmful to the ear; medications that can cause hearing loss', pronunciation: 'oh-toh-TOK-sik' },
        { term: 'speech reception threshold', definition: 'The softest level at which a person can correctly repeat 50% of two-syllable words' },
      ],
      analogies: [
        'An audiogram is like a map of your hearing - it shows where your hearing is strong and where it needs help.',
        'Tympanometry is like checking if a drum is loose or tight - it tells us if your eardrum is moving normally.',
      ],
    },
    3: {
      level: 3,
      summary: 'Hearing loss evaluation requires systematic differentiation between conductive, sensorineural, and retrocochlear pathology through audiometric testing, speech audiometry, tympanometry, and acoustic reflex assessment, guiding appropriate medical, surgical, or rehabilitative intervention.',
      explanation: `## Pathophysiology of Hearing Loss

### Conductive Hearing Loss Mechanisms

**External Ear:**
- Atresia/stenosis: Congenital or acquired canal obstruction
- Cerumen impaction: Most common reversible cause
- External otitis: Edema and debris narrow canal
- Exostoses: Bony growths ("surfer's ear")

**Tympanic Membrane:**
- Perforation: Trauma, infection, cholesteatoma
- Tympanosclerosis: Calcification reduces compliance
- Retraction: Negative middle ear pressure

**Middle Ear:**
- Otitis media with effusion: Fluid dampens vibration
- Ossicular discontinuity: Trauma, chronic infection, cholesteatoma
- Ossicular fixation: Otosclerosis, tympanosclerosis
- Cholesteatoma: Erosive squamous epithelium mass

### Sensorineural Hearing Loss Mechanisms

**Cochlear (Sensory):**
- Hair cell loss: Noise, ototoxicity, aging
- Stria vascularis degeneration: Metabolic presbycusis
- Endolymphatic hydrops: Meniere's disease
- Autoimmune inner ear disease

**Neural:**
- Spiral ganglion neuron loss: Aging, genetic
- Auditory neuropathy spectrum disorder: Dyssynchrony
- Vestibular schwannoma: CN VIII compression

### Genetic Hearing Loss

**Syndromic (30%):**
- Usher syndrome: HL + retinitis pigmentosa
- Waardenburg syndrome: HL + pigmentary abnormalities
- Pendred syndrome: HL + thyroid goiter
- Branchio-oto-renal syndrome: HL + renal anomalies

**Non-syndromic (70%):**
- DFNB1 (GJB2 mutations): Most common cause of genetic HL
- Over 100 genes identified
- Autosomal recessive, dominant, X-linked, mitochondrial

## Comprehensive Audiologic Assessment

### Pure Tone Audiometry

**Air Conduction Testing:**
- Frequencies: 250, 500, 1000, 2000, 4000, 8000 Hz
- Standard: 125 Hz to 8000 Hz
- Extended: Up to 16,000-20,000 Hz

**Bone Conduction Testing:**
- Tests cochlear/neural function directly
- Frequencies: 250, 500, 1000, 2000, 4000 Hz
- Mastoid or forehead placement

**Air-Bone Gap:**
- Difference between air and bone conduction thresholds
- >10 dB gap indicates conductive component
- Bone conduction represents "true" sensorineural hearing

### Masking

**Cross-Hearing:**
- Interaural attenuation: ~40 dB (air), ~0 dB (bone)
- Unmasked testing may test better ear

**When to Mask:**
- Air conduction: When test ear threshold > non-test ear bone + 40 dB
- Bone conduction: When air-bone gap exists or asymmetry >10 dB

### Speech Audiometry

**Speech Recognition Threshold (SRT):**
- Spondee words (two syllables, equal stress)
- Should agree with pure tone average (PTA) within 10 dB
- PTA = average of 500, 1000, 2000 Hz

**Word Recognition Score (WRS):**
- Monosyllabic words at suprathreshold level
- 25-50 words presented
- Score interpretation:
  - 90-100%: Excellent
  - 76-90%: Good
  - 60-76%: Fair
  - <60%: Poor

**Rollover:**
- WRS decreases at higher intensities
- Suggests retrocochlear pathology (acoustic neuroma)

### Tympanometry

**Type A:** Normal
- Peak compliance at ~0 daPa
- Normal middle ear function

**Type As:** Shallow peak
- Ossicular fixation (otosclerosis)
- Tympanosclerosis

**Type Ad:** Deep peak (hypercompliant)
- Ossicular discontinuity
- Flaccid tympanic membrane

**Type B:** Flat (no peak)
- Middle ear effusion
- TM perforation (large volume)

**Type C:** Negative pressure peak
- Eustachian tube dysfunction
- Peak <-100 daPa

### Acoustic Reflex Testing

**Pathway:**
CN VIII → cochlear nucleus → superior olivary complex → CN VII → stapedius muscle

**Interpretation:**
- Normal: Reflex present at 70-100 dB above threshold
- Absent with conductive loss: Effusion, ossicular fixation
- Absent with normal tympanogram: Retrocochlear, severe SNHL
- Elevated threshold: Cochlear pathology
- Reflex decay: Retrocochlear (>50% decay in 10 seconds)

### Otoacoustic Emissions

**TEOAE (Transient Evoked):**
- Broadband click stimulus
- Present with hearing <30 dB HL
- Absent: Cochlear hearing loss (OHC dysfunction)

**DPOAE (Distortion Product):**
- Two-tone stimulus
- Frequency-specific assessment
- Clinical thresholds: Present with hearing <40 dB HL

**Clinical Applications:**
- Newborn hearing screening
- Monitoring ototoxicity
- Differentiating cochlear from retrocochlear

## Medical and Surgical Management

### Cerumen Management
- Irrigation (contraindicated if perforation)
- Curette removal
- Cerumenolytics

### Otitis Media
- Acute: Antibiotics (amoxicillin first-line)
- Chronic with effusion: Observation, then tubes
- Chronic suppurative: Topical antibiotics, possible surgery

### Otosclerosis
- Hearing aid amplification
- Stapedectomy/stapedotomy: 90%+ success
- Sodium fluoride (controversial)

### Cholesteatoma
- Surgical removal required
- Mastoidectomy with/without ossicular reconstruction
- Lifetime surveillance (recurrence risk)

### Sudden Sensorineural Hearing Loss
- Otologic emergency
- High-dose steroids within 2 weeks
- Consider intratympanic steroids
- MRI to rule out acoustic neuroma`,
      keyTerms: [
        { term: 'air-bone gap', definition: 'Difference between air and bone conduction thresholds; indicates conductive hearing loss component' },
        { term: 'rollover', definition: 'Decrease in word recognition at high intensities; suggests retrocochlear pathology' },
        { term: 'acoustic reflex', definition: 'Contraction of stapedius muscle in response to loud sound; tests middle ear and brainstem pathway' },
        { term: 'tympanosclerosis', definition: 'Calcification and scarring of the tympanic membrane or middle ear structures' },
        { term: 'auditory neuropathy spectrum disorder', definition: 'Condition with normal OHC function (present OAEs) but abnormal neural synchrony (absent/abnormal ABR)' },
        { term: 'interaural attenuation', definition: 'Reduction of sound intensity as it crosses from test ear to non-test ear through the skull' },
      ],
      clinicalNotes: 'Sudden SNHL (>30 dB loss over <72 hours) requires urgent evaluation and treatment. Unilateral SNHL with asymmetric speech discrimination warrants MRI to evaluate for vestibular schwannoma. Conductive hearing loss with normal tympanogram and absent acoustic reflexes suggests otosclerosis.',
    },
    4: {
      level: 4,
      summary: 'Advanced evaluation of hearing loss integrates electrophysiologic testing (ABR, ECochG, VEMP), imaging correlation, genetic diagnostics, and understanding of emerging interventions including gene therapy and hair cell regeneration strategies.',
      explanation: `## Electrophysiologic Assessment

### Auditory Brainstem Response (ABR)

**Waveform Generators:**
- Wave I: Distal auditory nerve (near cochlea)
- Wave II: Proximal auditory nerve (near brainstem)
- Wave III: Cochlear nucleus
- Wave IV: Superior olivary complex
- Wave V: Lateral lemniscus/inferior colliculus

**Diagnostic Applications:**

**Threshold Estimation:**
- Click ABR: Estimates hearing in 2-4 kHz region
- Tone burst ABR: Frequency-specific threshold estimation
- Threshold = lowest intensity with replicable wave V

**Neurodiagnostic ABR:**
- Evaluates retrocochlear pathology
- Parameters: I-V interpeak latency, interaural latency difference
- Prolonged I-V (>4.4 ms) or ILD (>0.3 ms) suggests retrocochlear lesion
- Absent wave I with cochlear pathology vs. absent all waves with neural pathology

**Auditory Neuropathy Spectrum Disorder:**
- Present OAEs or cochlear microphonic
- Absent or grossly abnormal ABR
- Poor word recognition disproportionate to pure tone loss
- Etiologies: Prematurity, hyperbilirubinemia, OTOF mutation

### Electrocochleography (ECochG)

**Components:**
- Cochlear microphonic (CM): OHC response
- Summating potential (SP): DC shift from hair cells
- Action potential (AP): Wave I equivalent

**Clinical Application:**
- Meniere's disease: Elevated SP/AP ratio (>0.4-0.5)
- Intraoperative monitoring
- Auditory neuropathy confirmation (robust CM)

### Vestibular Evoked Myogenic Potentials (VEMPs)

**Cervical VEMP (cVEMP):**
- Saccular/inferior vestibular nerve pathway
- Recorded from SCM muscle
- Absent in inferior vestibular neuritis

**Ocular VEMP (oVEMP):**
- Utricular/superior vestibular nerve pathway
- Recorded from infraorbital electrodes
- Enhanced in superior canal dehiscence (low threshold)

## Advanced Imaging

### High-Resolution CT Temporal Bone

**Indications:**
- Conductive hearing loss evaluation
- Cholesteatoma assessment
- Cochlear implant planning
- Trauma evaluation

**Key Findings:**
| Condition | CT Findings |
|-----------|-------------|
| Otosclerosis | Lucency anterior to oval window (fenestral) |
| Cholesteatoma | Soft tissue mass, ossicular erosion |
| SCD | Dehiscent bone over superior canal |
| Enlarged vestibular aqueduct | EVA >1.5 mm midpoint |
| Cochlear aplasia/hypoplasia | Absent or malformed cochlea |

### MRI Internal Auditory Canal

**Indications:**
- Asymmetric SNHL
- Unilateral tinnitus
- Vestibular schwannoma screening

**Sequences:**
- 3D CISS/FIESTA: Fluid-bright, shows nerves
- Post-contrast T1: Enhancing lesions
- T2-weighted: Cochlear fluid signal

**Vestibular Schwannoma Features:**
- "Ice cream on cone" extending from IAC
- Enhances with gadolinium
- May erode IAC (CT)

## Genetic Hearing Loss

### Diagnostic Approach

**When to Test:**
- Bilateral SNHL in children
- Family history of hearing loss
- Syndromic features
- EVA or cochlear malformation
- Auditory neuropathy

**Testing Strategies:**
- GJB2/GJB6 sequencing: First-tier (most common)
- Hearing loss gene panels: 100-200 genes
- Whole exome sequencing: Comprehensive, novel gene discovery
- Chromosomal microarray: Copy number variants, syndromic cases

### Common Genetic Etiologies

**GJB2 (Connexin 26):**
- Most common cause of genetic non-syndromic SNHL
- Autosomal recessive (DFNB1)
- Disrupts potassium recycling
- Stable, non-progressive (usually)
- Excellent cochlear implant outcomes

**SLC26A4 (Pendrin):**
- Pendred syndrome: HL + goiter + EVA
- DFNB4: HL + EVA without goiter
- Progressive, fluctuating hearing loss
- Avoid contact sports (head trauma risk)

**MYO7A:**
- Usher syndrome type 1B: Profound HL + vestibular + RP
- DFNA11/DFNB2: Non-syndromic
- Important to screen for retinitis pigmentosa

**Mitochondrial (MT-RNR1):**
- A1555G mutation: Aminoglycoside hypersensitivity
- Screen before aminoglycoside use in high-risk populations

## Implantable Hearing Devices

### Bone-Anchored Hearing Devices

**Mechanism:**
- Vibrations transmitted through skull to cochlea
- Bypasses outer/middle ear

**Indications:**
- Conductive HL not amenable to surgery
- Single-sided deafness
- Chronic ear drainage precluding conventional aids

**Types:**
- Percutaneous (osseointegrated abutment)
- Transcutaneous (magnet coupling)
- Active transcutaneous (internal transducer)

### Cochlear Implants

**Candidacy Criteria (Adults):**
- Moderate-to-profound bilateral SNHL
- Limited benefit from amplification
- Sentence recognition <50% in best-aided condition

**Candidacy Criteria (Children):**
- Age 9-12 months for profound bilateral SNHL
- Limited progress with amplification
- Access to rehabilitation services

**Electrode Array Design:**
- Perimodiolar: Close to modiolus, lower thresholds
- Lateral wall: Atraumatic, hearing preservation
- Hybrid: Short electrode for EAS

**Outcomes:**
- Open-set speech recognition in quiet: 60-80% typical
- Music perception: Limited (spectral resolution)
- Bilateral implantation: Improved localization, speech in noise

### Middle Ear Implants

**Active Middle Ear Implants:**
- Floating mass transducer on ossicular chain
- Moderate-severe SNHL or mixed HL
- Alternative when conventional aids not tolerated`,
      keyTerms: [
        { term: 'cochlear microphonic', definition: 'AC electrical response from outer hair cells that mirrors the stimulus waveform; preserved in auditory neuropathy' },
        { term: 'summating potential', definition: 'DC shift reflecting hair cell receptor potentials; elevated in endolymphatic hydrops' },
        { term: 'enlarged vestibular aqueduct', definition: 'Congenital anomaly with EVA >1.5 mm associated with SLC26A4 mutations and fluctuating hearing loss' },
        { term: 'electroacoustic stimulation', definition: 'Combined use of acoustic amplification (low frequencies) and cochlear implant (high frequencies) in same ear' },
        { term: 'connexin', definition: 'Gap junction protein; mutations in GJB2 (connexin 26) are the most common cause of genetic hearing loss' },
        { term: 'floating mass transducer', definition: 'Vibrating component of active middle ear implant that couples to the ossicular chain' },
      ],
      clinicalNotes: 'ABR threshold estimation can be affected by auditory neuropathy - normal ABR thresholds may not reflect behavioral hearing. Consider cochlear implant evaluation for patients with auditory neuropathy who do not benefit from amplification. Genetic testing guides prognosis (progressive vs. stable) and identifies candidates for emerging gene therapies.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art hearing loss management integrates precision diagnostics (audiogenomics, advanced imaging biomarkers), emerging regenerative therapies (gene therapy, stem cells), optimized cochlear implant strategies, and personalized rehabilitation approaches.',
      explanation: `## Precision Diagnostics

### Advanced Audiologic Phenotyping

**Extended High-Frequency Audiometry (EHF):**
- Tests 9-20 kHz range
- Early marker of cochlear damage
- Ototoxicity monitoring standard of care
- Predicts progression of noise-induced loss
- Sensitive to hidden hearing loss

**Acceptable Noise Level (ANL):**
- Measures tolerance for background noise
- Predicts hearing aid success
- Low ANL (<7 dB) = good HA candidate

**Speech-in-Noise Testing:**
- QuickSIN, HINT, WIN tests
- More functionally relevant than quiet WRS
- Identifies hidden hearing loss
- Guides amplification strategy

### Molecular Diagnostics

**Comprehensive Genetic Testing:**
- OtoSCOPE, OtoGenome: 150-200 gene panels
- Identifies etiology in 40-60% of cases
- Guides:
  - Prognosis (progressive vs. stable)
  - Syndromic surveillance
  - Therapy eligibility (gene therapy trials)
  - Reproductive counseling

**Pharmacogenomics:**
- MT-RNR1 A1555G screening before aminoglycosides
- May prevent iatrogenic hearing loss
- Universal screening debated

### Imaging Biomarkers

**Cochlear Nerve Deficiency:**
- MRI assessment of cochlear nerve presence/size
- CN diameter <2x labyrinthine artery diameter suggests deficiency
- Impacts CI candidacy and expected outcomes

**Cochlear Patency:**
- CT assessment for labyrinthitis ossificans
- Post-meningitic patients at high risk
- May require early implantation, drill-out, or split array

**White Matter Changes:**
- DTI of auditory radiation
- Correlates with speech perception outcomes
- Research biomarker for central processing

## Gene Therapy for Hearing Loss

### Current Clinical Programs

**OTOF (Otoferlin) Deficiency:**
- Akouos DB-OTO, Decibel OTOF-GT102
- Dual AAV vector approach (gene too large for single AAV)
- Intracochlear delivery
- Phase 1/2 results: Dramatic hearing restoration in children
- Challenges: Immune response, limited retreatment

**GJB2 (Connexin 26) Deficiency:**
- AAV delivery to supporting cells
- Preclinical success, approaching clinical trials
- Timing of intervention critical (early)

**TMC1 Mutations:**
- AAV-TMC1/TMC2 delivery to hair cells
- Preclinical hearing restoration
- Targets both dominant (gene silencing) and recessive forms

### Emerging Approaches

**CRISPR-Based Therapies:**
- In vivo editing for dominant mutations
- Beethoven mouse model (Tmc1 dominant)
- Base editing for point mutations
- Challenges: Delivery, off-target effects

**Hair Cell Regeneration:**
- ATOH1 overexpression (developmental gene)
- LGR5+ progenitor cell activation
- Notch inhibition (LY3056480 - Phase 2)
- FX-322 (combination approach - Phase 2)
- Timeline: Years away from clinical application

## Advanced Cochlear Implantation

### Hearing Preservation Strategies

**Soft Surgery Principles:**
- Minimized insertion trauma
- Slower insertion speed
- Hyaluronic acid coating
- Corticosteroids (local, systemic)
- Atraumatic electrode design

**Outcomes:**
- Hearing preservation rates: 50-80% initially
- Long-term: Gradual decline in some
- Benefits: Natural sound quality, binaural processing

### Optimized Rehabilitation

**Pre-implant Predictive Factors:**
- Duration of deafness (shorter = better)
- Pre-implant speech recognition
- Cognitive function (working memory)
- Acoustic hearing experience

**Focused Auditory Training:**
- Computerized auditory training programs
- Music training (enhanced spectral processing)
- Auditory-cognitive training for older adults

### Hybrid and Electric-Acoustic Stimulation

**Candidacy:**
- "Ski-slope" audiogram configuration
- Low-frequency hearing <60 dB HL
- High-frequency hearing >70 dB HL
- Poor speech recognition despite adequate amplification

**Benefits Over CI Alone:**
- Better music perception
- Better speech-in-noise
- More natural sound quality
- Improved localization

### Bilateral CI vs. Bimodal

**Bilateral CI Advantages:**
- Optimal sound localization
- Best speech-in-noise (bilateral summation, squelch)
- Redundancy if one device fails

**Bimodal (CI + HA) Considerations:**
- Preserves natural hearing if aidable
- Lower cost
- Acceptable outcomes if residual hearing sufficient

### Total Cochlear Coverage

**Concept:**
- Full electrode insertion to cochlear apex
- Addresses low-frequency deficits
- Improved spectral representation

**Challenges:**
- Longer arrays, more insertion trauma
- Cochlear length variability
- Perimodiolar positioning at apex difficult

## Systems-Level Considerations

### Central Auditory Processing

**Age-Related Central Decline:**
- Temporal processing degradation
- Reduced neural synchrony
- Contributes to speech-in-noise difficulty
- May limit hearing aid/CI benefit

**Cognitive Load:**
- Effortful listening with hearing loss
- Cognitive fatigue
- Links to dementia risk (Lancet commission)

### Rehabilitation Ecosystem

**Teleaudiology:**
- Remote hearing aid programming
- Real-ear measurement alternatives
- CI programming and mapping
- Expanded access, especially rural areas

**Artificial Intelligence:**
- Real-time transcription (accessibility)
- Automatic environment classification
- Self-adjusting amplification
- Outcome prediction algorithms

### Public Health Implications

**Hearing Screening:**
- Universal newborn screening (established)
- School-age screening (variable)
- Adult/geriatric screening (emerging recommendation)
- WHO World Report on Hearing (2021): 1.5 billion affected

**Prevention:**
- Occupational noise regulations
- Personal listening device guidance
- Vaccine programs (rubella, CMV, meningitis)
- Ototoxicity monitoring protocols`,
      keyTerms: [
        { term: 'hidden hearing loss', definition: 'Difficulty with speech-in-noise despite normal audiogram; attributed to synaptopathy between IHCs and auditory nerve' },
        { term: 'soft surgery', definition: 'Cochlear implant surgical techniques designed to minimize trauma and preserve residual hearing' },
        { term: 'auditory neuropathy spectrum disorder', definition: 'Dyssynchronous auditory nerve firing with preserved OHC function; variable outcomes with amplification, often benefits from CI' },
        { term: 'ATOH1', definition: 'Transcription factor essential for hair cell development; therapeutic target for hair cell regeneration' },
        { term: 'tonotopic mismatch', definition: 'Discrepancy between frequency assigned to CI electrode and actual cochlear place; affects pitch perception' },
        { term: 'Lancet commission on dementia', definition: 'Identified hearing loss as the largest modifiable risk factor for dementia, supporting treatment of hearing loss' },
      ],
      clinicalNotes: `Current clinical practice considerations:

1. **Gene therapy**: Active trials for OTOF-related hearing loss; identify candidates through genetic testing; window of opportunity in early childhood

2. **CI candidacy evolution**:
   - Single-sided deafness now FDA approved
   - Earlier pediatric implantation (<12 months)
   - Hybrid/EAS for ski-slope configurations
   - Lower traditional thresholds being challenged

3. **Hidden hearing loss**: Consider in patients with speech-in-noise complaints despite normal audiogram; extended high-frequency testing and EFR may help identify

4. **Cognitive hearing science**: Address hearing loss early to potentially reduce cognitive decline risk; consider cognitive assessment in CI candidacy

5. **Teleaudiology**: Increasingly viable for follow-up care; consider for access-limited patients

6. **Precision medicine**: Genetic testing guides prognosis and identifies therapy candidates; recommend for all children with bilateral SNHL`,
    },
  },

  media: [
    {
      id: 'hearing-loss-types',
      type: 'diagram',
      filename: 'conductive-vs-sensorineural.svg',
      title: 'Types of Hearing Loss',
      description: 'Comparison of conductive and sensorineural hearing loss locations',
    },
    {
      id: 'audiogram-interpretation',
      type: 'diagram',
      filename: 'audiogram-reading-guide.svg',
      title: 'Audiogram Interpretation',
      description: 'Guide to reading and interpreting audiograms',
    },
    {
      id: 'tympanometry-types',
      type: 'diagram',
      filename: 'tympanogram-types-a-b-c.svg',
      title: 'Tympanometry Types',
      description: 'Classification of tympanogram patterns',
    },
  ],

  citations: [
    {
      id: 'goman-lin-2016',
      type: 'article',
      title: 'Prevalence of Hearing Loss by Severity in the United States',
      authors: ['Goman, A.M.', 'Lin, F.R.'],
      source: 'American Journal of Public Health',
    },
    {
      id: 'livingston-2020',
      type: 'article',
      title: 'Dementia prevention, intervention, and care: 2020 report of the Lancet Commission',
      authors: ['Livingston, G.', 'et al.'],
      source: 'The Lancet',
    },
    {
      id: 'kochhar-2007',
      type: 'article',
      title: 'Genetics of Hearing Loss',
      authors: ['Kochhar, A.', 'Hildebrand, M.S.', 'Smith, R.J.'],
      source: 'Current Opinion in Pediatrics',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-hearing-physiology', targetType: 'topic', relationship: 'related', label: 'Hearing Physiology' },
    { targetId: 'ent-otitis-media', targetType: 'condition', relationship: 'related', label: 'Otitis Media' },
    { targetId: 'ent-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
  ],

  tags: {
    systems: ['auditory'],
    topics: ['pathology', 'diagnosis', 'treatment', 'genetics'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'pediatrics', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default hearingLoss;
