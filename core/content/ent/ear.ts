import { EducationalContent } from '../types';

/**
 * Ear Disorders Educational Content
 *
 * Covers: Otitis Media, Otitis Externa, Tinnitus, Hearing Loss,
 * Meniere's Disease, and Cholesteatoma.
 *
 * Each condition uses 5 complexity levels per the EducationalContent interface.
 * nameEs provides Spanish translations. ICD-11 codes included where applicable.
 */

// Helper to build a condition with shared metadata defaults
function earCondition(partial: Omit<EducationalContent, 'createdAt' | 'updatedAt' | 'version' | 'status'>): EducationalContent {
  return {
    ...partial,
    createdAt: '2026-01-30T00:00:00.000Z',
    updatedAt: '2026-01-30T00:00:00.000Z',
    version: 1,
    status: 'published',
  };
}

export const earDisordersContent: Record<string, EducationalContent> = {
  'otitis-media': earCondition({
    id: 'ear-otitis-media',
    type: 'condition',
    name: 'Otitis Media',
    alternateNames: ['Middle Ear Infection', 'nameEs:Otitis Media'],
    hpoId: 'HP:0000388',
    levels: {
      1: {
        level: 1,
        summary: 'A middle ear infection that causes ear pain and trouble hearing, very common in young children.',
        explanation: `An ear infection happens when germs get behind your eardrum. Fluid builds up and pushes on the eardrum, causing pain and making sounds harder to hear.\n\n**Signs:** Ear pain, fever, fussiness in babies, trouble hearing, fluid draining from the ear.\n\n**What helps:** Most ear infections get better on their own. A doctor may prescribe medicine if it does not improve.`,
        keyTerms: [
          { term: 'eardrum', definition: 'A thin membrane inside your ear that vibrates when sound hits it' },
          { term: 'middle ear', definition: 'The space behind your eardrum where infections happen' },
        ],
        analogies: ['An ear infection is like a balloon filling with water behind your eardrum -- the pressure causes pain.'],
        patientCounselingPoints: ['See a doctor if ear pain lasts more than 2 days or fever is high.', 'Do not put anything in the ear canal.'],
      },
      2: {
        level: 2,
        summary: 'Otitis media is inflammation and infection of the middle ear, most common in children due to shorter Eustachian tubes.',
        explanation: `The middle ear is connected to the throat by the Eustachian tube. In children, this tube is shorter and more horizontal, making it easier for bacteria from the throat to reach the middle ear.\n\n**Types:**\n- **Acute otitis media (AOM):** Sudden infection with pain, fever, and a bulging eardrum\n- **Otitis media with effusion (OME):** Fluid without active infection\n- **Chronic otitis media:** Persistent infection or drainage >3 months\n\n**Common pathogens:** Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis\n\n**Treatment:** Observation for mild cases; amoxicillin first-line antibiotic; tympanostomy tubes for recurrent episodes.`,
        keyTerms: [
          { term: 'Eustachian tube', definition: 'Tube connecting the middle ear to the back of the throat that equalizes pressure', pronunciation: 'yoo-STAY-shun' },
          { term: 'tympanostomy tubes', definition: 'Small tubes placed in the eardrum to ventilate the middle ear and prevent fluid buildup' },
          { term: 'AOM', definition: 'Acute otitis media -- sudden onset middle ear infection' },
        ],
        patientCounselingPoints: ['Most ear infections resolve without antibiotics.', 'Follow up to confirm fluid has cleared, especially in young children.'],
      },
      3: {
        level: 3,
        summary: 'Otitis media encompasses AOM, OME, and chronic suppurative forms, driven by Eustachian tube dysfunction and microbial colonization. ICD-11: AB30 (suppurative), AA83 (non-suppurative).',
        explanation: `**Pathogenesis:** Eustachian tube obstruction (viral URI, adenoid hypertrophy, allergies) creates negative middle ear pressure, allowing nasopharyngeal flora to ascend. Biofilm formation contributes to recurrence.\n\n**Diagnosis:** Pneumatic otoscopy shows decreased TM mobility; tympanometry confirms effusion. AOM: bulging, erythematous TM. OME: retracted or neutral TM with fluid level.\n\n**Management:**\n- AOM: Watchful waiting (>2 yrs, unilateral, non-severe); amoxicillin 80-90 mg/kg/day; amoxicillin-clavulanate for treatment failure\n- OME: Observe 3 months; tympanostomy tubes if persistent bilateral effusion with hearing loss\n- Chronic: Ototopical antibiotics; possible tympanoplasty or mastoidectomy\n\n**Complications:** Mastoiditis, cholesteatoma, facial nerve paralysis, intracranial infection.`,
        keyTerms: [
          { term: 'pneumatic otoscopy', definition: 'Otoscopic exam with air insufflation to assess TM mobility' },
          { term: 'tympanometry', definition: 'Objective test measuring middle ear compliance and pressure' },
          { term: 'biofilm', definition: 'Bacterial community in extracellular matrix resistant to antibiotics' },
        ],
        clinicalNotes: 'AAO-HNS guidelines recommend against routine antibiotics for uncomplicated AOM in children >2 years. PCV13 has reduced S. pneumoniae AOM incidence.',
      },
      4: {
        level: 4,
        summary: 'AOM pathophysiology involves mucosal inflammation, biofilm formation, and immune dysregulation. Recurrent AOM reflects host susceptibility including Eustachian tube anatomy, immune maturation, and genetic predisposition.',
        explanation: `**Molecular pathogenesis:** Viral URI upregulates nasopharyngeal bacterial adhesion via platelet-activating factor receptor. IL-1beta and TNF-alpha drive middle ear inflammation. Biofilms on middle ear mucosa and tympanostomy tubes resist planktonic-targeted antibiotics.\n\n**Otitis-prone phenotype:** First AOM <6 months, deficient IgG2 subclass, polymorphisms in TLR4 and mannose-binding lectin, atopy, craniofacial anomalies (cleft palate, Down syndrome).\n\n**Surgical considerations:**\n- Tympanostomy tubes: Short-term (Shepard) vs long-term (T-tube); adenoidectomy as adjunct reduces recurrence\n- Tympanoplasty types I-V for chronic perforation/ossicular chain pathology\n- Mastoidectomy: Canal wall-up vs canal wall-down for cholesteatoma/chronic disease\n\n**Antibiotic resistance:** Beta-lactamase producing H. influenzae and M. catarrhalis; penicillin-resistant S. pneumoniae via altered PBPs.`,
        keyTerms: [
          { term: 'platelet-activating factor receptor', definition: 'Receptor upregulated during viral URI that enhances bacterial adhesion to nasopharyngeal epithelium' },
          { term: 'IgG2 subclass deficiency', definition: 'Immune deficiency impairing response to polysaccharide antigens, predisposing to recurrent AOM' },
        ],
        clinicalNotes: 'Biofilm-mediated AOM explains culture-negative middle ear effusions with PCR-positive bacterial DNA.',
      },
      5: {
        level: 5,
        summary: 'Evidence-based OM management integrates AAO-HNS guidelines, antimicrobial stewardship, surgical decision algorithms, and emerging vaccine and immunomodulatory strategies.',
        explanation: `**AAO-HNS 2016 OME Guidelines:** Pneumatic otoscopy or tympanometry for diagnosis; 3-month observation; tubes for bilateral OME with hearing loss >=25 dB; no systemic steroids/decongestants/antihistamines.\n\n**Antimicrobial stewardship:** High-dose amoxicillin overcomes intermediate pneumococcal resistance. Watchful waiting with safety-net prescription reduces unnecessary antibiotic use by 60%.\n\n**Emerging therapies:** Protein-based pneumococcal vaccines targeting conserved surface proteins; transtympanic drug delivery systems; middle ear mucosal immunization strategies.\n\n**Outcomes:** Tympanostomy tubes reduce AOM episodes by 1.5/year; 15-30% develop otorrhea; 2-4% persistent perforation; tympanosclerosis common but clinically insignificant.`,
        keyTerms: [
          { term: 'safety-net prescription', definition: 'Delayed antibiotic prescription filled only if symptoms do not improve in 48-72 hours' },
          { term: 'transtympanic delivery', definition: 'Drug delivery across the tympanic membrane to achieve therapeutic middle ear concentrations' },
        ],
        clinicalNotes: 'Red flags: mastoid tenderness, facial nerve palsy, high fever with toxic appearance, meningeal signs -- require urgent imaging and IV antibiotics.',
      },
    },
    media: [],
    citations: [
      { id: 'aao-ome-2016', type: 'article', title: 'Clinical Practice Guideline: Otitis Media with Effusion (2016)', source: 'Otolaryngology-Head and Neck Surgery' },
    ],
    crossReferences: [
      { targetId: 'ear-cholesteatoma', targetType: 'condition', relationship: 'related', label: 'Cholesteatoma' },
    ],
    tags: { systems: ['auditory'], topics: ['otology', 'infection', 'pediatrics'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'family-medicine'] } },
  }),

  'otitis-externa': earCondition({
    id: 'ear-otitis-externa',
    type: 'condition',
    name: 'Otitis Externa',
    alternateNames: ['Swimmer\'s Ear', 'nameEs:Otitis Externa'],
    hpoId: 'HP:0000389',
    levels: {
      1: {
        level: 1,
        summary: 'An infection of the ear canal that causes pain, itching, and swelling, often from water getting trapped in the ear.',
        explanation: `Swimmer's ear happens when water stays in your ear canal after swimming or bathing. The moisture lets germs grow, causing the ear canal to become red, swollen, and painful.\n\n**Signs:** Pain when you touch or pull on your ear, itching, swelling, discharge.\n\n**Prevention:** Dry ears after swimming; do not use cotton swabs.`,
        keyTerms: [
          { term: 'ear canal', definition: 'The tube from the outside of your ear to your eardrum' },
        ],
        analogies: ['Swimmer\'s ear is like getting a rash from wearing wet socks too long -- moisture lets germs grow.'],
        patientCounselingPoints: ['Tilt your head to drain water after swimming.', 'Do not put cotton swabs in your ears.'],
      },
      2: {
        level: 2,
        summary: 'Otitis externa is inflammation of the external auditory canal, commonly caused by Pseudomonas aeruginosa, presenting with otalgia and canal edema.',
        explanation: `**Causes:** Bacterial (Pseudomonas, Staph aureus) or fungal (Aspergillus, Candida) infection of the ear canal.\n\n**Risk factors:** Swimming, hearing aid use, eczema, trauma from cotton swabs, humid climates.\n\n**Diagnosis:** Pain with tragal pressure or pinna manipulation; canal edema and erythema; otorrhea.\n\n**Treatment:** Topical antibiotic-steroid drops (ciprofloxacin-dexamethasone); wick placement if canal swollen shut; keep ear dry.`,
        keyTerms: [
          { term: 'tragal pressure', definition: 'Pressing on the small cartilage flap in front of the ear canal -- pain suggests otitis externa' },
          { term: 'ototopical', definition: 'Medication applied directly into the ear canal as drops' },
        ],
        patientCounselingPoints: ['Complete the full course of ear drops.', 'Keep the ear dry during treatment.'],
      },
      3: {
        level: 3,
        summary: 'Otitis externa ranges from acute diffuse infection to necrotizing (malignant) forms. ICD-11: AB30.1. Diagnosis is clinical; treatment is primarily topical.',
        explanation: `**Classification:**\n- Acute diffuse: Most common; bacterial or fungal\n- Chronic: >3 months or >=4 episodes/year; suspect dermatitis or fungal etiology\n- Necrotizing (malignant): Skull base osteomyelitis; Pseudomonas in diabetics/immunocompromised; cranial nerve involvement (VII, IX-XII)\n\n**Otomycosis:** Aspergillus niger (black spores), Candida albicans; intense pruritus; clotrimazole/acetic acid drops.\n\n**AAO-HNS 2014 Guidelines:** Topical antibiotics +/- steroid first-line; systemic antibiotics only if extension beyond canal or host immunocompromise; aural toilet for debris.`,
        keyTerms: [
          { term: 'necrotizing otitis externa', definition: 'Life-threatening infection extending to temporal bone causing osteomyelitis, primarily in elderly diabetics' },
          { term: 'otomycosis', definition: 'Fungal infection of the ear canal, often Aspergillus or Candida species' },
        ],
        clinicalNotes: 'Granulation tissue at the bony-cartilaginous junction is the hallmark of necrotizing OE. CT and gallium/technetium scans aid diagnosis and monitoring.',
      },
      4: {
        level: 4,
        summary: 'Necrotizing otitis externa involves Pseudomonas-mediated skull base osteomyelitis with cranial neuropathies. Pathogenesis reflects cerumen pH changes and epithelial barrier disruption.',
        explanation: `**Pathogenesis:** Cerumen maintains acidic pH (6.1) inhibiting bacterial growth. Moisture alkalinizes the canal, maceration disrupts the epithelial barrier, and Pseudomonas produces exotoxin A, elastase, and phospholipase C causing tissue invasion.\n\n**Necrotizing OE workup:** ESR/CRP (monitoring markers), CT temporal bone (cortical erosion), Tc-99m bone scan (early detection), Ga-67 scan (treatment response), MRI (soft tissue and intracranial extension).\n\n**Cranial nerve involvement:** VII most common (poor prognosis indicator); IX-XII via jugular foramen; contralateral spread via clivus.\n\n**Treatment:** IV antipseudomonal antibiotics (ciprofloxacin, piperacillin-tazobactam) for 6-8 weeks; surgical debridement for sequestra; mortality 10-20% with cranial nerve involvement.`,
        keyTerms: [
          { term: 'exotoxin A', definition: 'Pseudomonas virulence factor that inhibits protein synthesis via ADP-ribosylation of EF-2' },
          { term: 'bony-cartilaginous junction', definition: 'Fissures of Santorini at the junction where infection can spread to skull base' },
        ],
        clinicalNotes: 'Ga-67 scan normalizes with successful treatment; Tc-99m remains positive for months regardless of response.',
      },
      5: {
        level: 5,
        summary: 'Management of otitis externa follows AAO-HNS evidence-based guidelines emphasizing topical therapy, recognition of necrotizing variants, and antimicrobial stewardship.',
        explanation: `**AAO-HNS 2014 Key Recommendations:**\n- Topical therapy preferred over systemic (superior canal concentrations, fewer side effects)\n- Fluoroquinolone drops for perforated TM or tubes (non-ototoxic)\n- Pain management integral; NSAIDs or acetaminophen; consider opioids for severe cases\n- Wick placement for edematous canal narrowing\n\n**Resistant organisms:** MRSA increasing in acute OE; consider culture if treatment failure. Fungal recurrence after antibacterial drops (steroids promote fungal overgrowth).\n\n**Prevention evidence:** Acetic acid drops post-swimming reduce incidence. Custom swim molds for recurrent swimmers' ear. Hearing aid hygiene counseling.`,
        keyTerms: [
          { term: 'fluoroquinolone ototopicals', definition: 'Non-ototoxic topical antibiotics safe for use with perforated TM (ciprofloxacin, ofloxacin)' },
        ],
        clinicalNotes: 'Aminoglycoside-containing drops (neomycin/polymyxin) are contraindicated with TM perforation due to ototoxicity risk. Always verify TM integrity before prescribing.',
      },
    },
    media: [],
    citations: [
      { id: 'aao-oe-2014', type: 'article', title: 'Clinical Practice Guideline: Acute Otitis Externa (2014)', source: 'Otolaryngology-Head and Neck Surgery' },
    ],
    crossReferences: [],
    tags: { systems: ['auditory'], topics: ['otology', 'infection'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['family-medicine'] } },
  }),

  'tinnitus': earCondition({
    id: 'ear-tinnitus',
    type: 'condition',
    name: 'Tinnitus',
    alternateNames: ['Ringing in the Ears', 'nameEs:Acufeno', 'nameEs:Tinnitus'],
    hpoId: 'HP:0000360',
    levels: {
      1: {
        level: 1,
        summary: 'Tinnitus is hearing sounds like ringing or buzzing when there is no actual sound around you.',
        explanation: `Sometimes people hear ringing, buzzing, or hissing in their ears even when it is quiet. This is called tinnitus. It is not a disease itself but a sign that something else may be going on.\n\n**Common causes:** Loud noise exposure, earwax buildup, ear infections, aging.\n\n**What helps:** Avoiding loud noises, background sound machines, reducing stress.`,
        keyTerms: [
          { term: 'tinnitus', definition: 'Hearing sounds in your ears when no real sound is present', pronunciation: 'TIN-ih-tus' },
        ],
        patientCounselingPoints: ['Tinnitus is very common and usually not dangerous.', 'Protect your ears from loud noises to prevent it from getting worse.'],
      },
      2: {
        level: 2,
        summary: 'Tinnitus is the perception of sound without an external source, affecting ~15% of adults. It is classified as subjective or objective.',
        explanation: `**Types:**\n- **Subjective:** Only the patient hears it (vast majority)\n- **Objective:** Examiner can hear it (vascular or muscular causes)\n\n**Common causes:** Noise-induced hearing loss, presbycusis, earwax, medications (aspirin, NSAIDs), Meniere disease.\n\n**Evaluation:** Audiogram, otoscopic exam, assessment for asymmetric hearing loss.\n\n**Management:** Sound therapy, hearing aids (if hearing loss present), cognitive behavioral therapy, avoiding triggers.`,
        keyTerms: [
          { term: 'subjective tinnitus', definition: 'Tinnitus perceived only by the patient, most commonly associated with hearing loss' },
          { term: 'objective tinnitus', definition: 'Tinnitus audible to the examiner, caused by vascular or muscular sources' },
        ],
        patientCounselingPoints: ['A hearing test helps determine the cause.', 'Background noise or white noise machines can help at night.'],
      },
      3: {
        level: 3,
        summary: 'Tinnitus involves peripheral cochlear damage and maladaptive central auditory gain. ICD-11: AB51. Evaluation must exclude retrocochlear pathology.',
        explanation: `**Pathophysiology:** Cochlear hair cell damage reduces auditory input; central auditory system increases gain (neural hyperactivity), generating phantom perception. Dorsal cochlear nucleus and auditory cortex reorganization contribute.\n\n**Red flags requiring imaging (MRI IAC):** Unilateral tinnitus, pulsatile tinnitus, asymmetric hearing loss -- to exclude vestibular schwannoma.\n\n**Pulsatile tinnitus workup:** CTA/MRA to evaluate for dural AV fistula, carotid stenosis, glomus tumor, benign intracranial hypertension.\n\n**Evidence-based treatment:** CBT has strongest evidence for reducing tinnitus distress. Sound therapy and hearing aids provide partial masking. No FDA-approved pharmacotherapy.`,
        keyTerms: [
          { term: 'central auditory gain', definition: 'Compensatory increase in neural activity in auditory pathways following reduced peripheral input' },
          { term: 'pulsatile tinnitus', definition: 'Rhythmic tinnitus synchronous with heartbeat, suggesting vascular etiology' },
        ],
        clinicalNotes: 'Unilateral tinnitus with asymmetric SNHL warrants MRI to rule out vestibular schwannoma (acoustic neuroma).',
      },
      4: {
        level: 4,
        summary: 'Tinnitus neuroscience reveals maladaptive plasticity involving auditory cortex tonotopic reorganization, limbic-auditory coupling, and aberrant gamma oscillations.',
        explanation: `**Neural mechanisms:**\n- Reduced cochlear output triggers homeostatic upregulation of spontaneous activity in dorsal cochlear nucleus\n- Tonotopic map reorganization: Edge frequencies of hearing loss become overrepresented\n- Thalamocortical dysrhythmia: Theta-gamma coupling in auditory cortex\n- Limbic involvement (amygdala, hippocampus) underlies emotional distress component\n\n**Neuroimaging:** fMRI shows increased auditory cortex activity; altered functional connectivity between auditory, attention, and emotional networks.\n\n**Neuromodulation approaches:** rTMS of auditory cortex (modest effect); tDCS; vagus nerve stimulation paired with tones (reset tonotopic map); bimodal stimulation (auditory + somatosensory).`,
        keyTerms: [
          { term: 'thalamocortical dysrhythmia', definition: 'Disruption of normal thalamic oscillatory patterns leading to abnormal cortical activity in tinnitus' },
          { term: 'bimodal neuromodulation', definition: 'Simultaneous auditory and somatosensory stimulation to reverse maladaptive plasticity' },
        ],
        clinicalNotes: 'The neurophysiological model (Jastreboff) forms the basis of tinnitus retraining therapy (TRT), combining counseling with sound therapy.',
      },
      5: {
        level: 5,
        summary: 'Tinnitus management integrates evidence-based guidelines (AAO-HNS 2014), multidisciplinary care, and emerging neuromodulatory and pharmacological trials.',
        explanation: `**AAO-HNS 2014 Tinnitus Guideline:**\n- Distinguish primary (idiopathic) from secondary tinnitus\n- Audiologic evaluation recommended\n- No routine imaging for bilateral non-pulsatile tinnitus\n- CBT recommended; sound therapy offered\n- Against: antidepressants, anticonvulsants, Ginkgo, melatonin, zinc as tinnitus-specific treatments\n\n**Clinical trials landscape:** NMDA receptor antagonists, potassium channel modulators (Kv7), OTO-313 (intratympanic gacyclidine). Vagus nerve stimulation paired with tones showed durable benefit in RESET trial.\n\n**Outcome measures:** Tinnitus Functional Index (TFI), Tinnitus Handicap Inventory (THI), minimum masking level (MML).`,
        keyTerms: [
          { term: 'Tinnitus Functional Index', definition: 'Validated 25-item questionnaire measuring tinnitus severity and treatment responsiveness' },
        ],
        clinicalNotes: 'Pulsatile tinnitus is always objective or has a vascular etiology until proven otherwise. CTA/MRA is essential workup.',
      },
    },
    media: [],
    citations: [
      { id: 'aao-tinnitus-2014', type: 'article', title: 'Clinical Practice Guideline: Tinnitus', source: 'Otolaryngology-Head and Neck Surgery' },
    ],
    crossReferences: [
      { targetId: 'ear-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
      { targetId: 'ear-meniere-disease', targetType: 'condition', relationship: 'related', label: 'Meniere Disease' },
    ],
    tags: { systems: ['auditory'], topics: ['otology', 'neuroscience'], clinicalRelevance: 'medium', examRelevance: { usmle: true, nbme: true, shelf: ['family-medicine', 'neurology'] } },
  }),

  'hearing-loss': earCondition({
    id: 'ear-hearing-loss',
    type: 'condition',
    name: 'Hearing Loss',
    alternateNames: ['Deafness', 'Hypoacusis', 'nameEs:Perdida Auditiva', 'nameEs:Hipoacusia'],
    hpoId: 'HP:0000365',
    levels: {
      1: {
        level: 1,
        summary: 'Hearing loss means you cannot hear sounds as well as other people. It can happen at any age and has many causes.',
        explanation: `Some people have trouble hearing from birth, while others lose hearing over time from loud noises, infections, or aging.\n\n**Types:** Sounds may be muffled (like wearing earplugs) or unclear (you hear sounds but cannot understand words).\n\n**Getting help:** Hearing aids make sounds louder. Cochlear implants can help people with severe hearing loss.`,
        keyTerms: [
          { term: 'hearing aid', definition: 'A small device worn in or behind the ear that makes sounds louder' },
          { term: 'cochlear implant', definition: 'A device surgically placed in the ear that helps very deaf people hear' },
        ],
        patientCounselingPoints: ['If you often ask people to repeat themselves, get a hearing test.', 'Hearing loss from loud noise is preventable -- wear ear protection.'],
      },
      2: {
        level: 2,
        summary: 'Hearing loss is classified as conductive (sound blockage), sensorineural (nerve damage), or mixed. Severity ranges from mild to profound.',
        explanation: `**Conductive hearing loss:** Problem in outer or middle ear blocks sound. Causes: earwax, fluid, eardrum perforation, otosclerosis. Often treatable.\n\n**Sensorineural hearing loss (SNHL):** Inner ear or nerve damage. Causes: aging (presbycusis), noise exposure, genetics, infections. Usually permanent.\n\n**Mixed:** Both types together.\n\n**Severity (dB HL):** Mild 26-40, Moderate 41-55, Severe 71-90, Profound >90.\n\n**Sudden SNHL:** Hearing loss within 72 hours -- medical emergency requiring urgent steroid treatment.`,
        keyTerms: [
          { term: 'conductive hearing loss', definition: 'Hearing loss from blockage of sound in the outer or middle ear' },
          { term: 'sensorineural hearing loss', definition: 'Hearing loss from damage to the inner ear or auditory nerve' },
          { term: 'presbycusis', definition: 'Gradual hearing loss from aging, usually affecting high-pitched sounds first', pronunciation: 'prez-bih-KYOO-sis' },
        ],
        patientCounselingPoints: ['Sudden hearing loss in one ear needs same-day medical attention.', 'Over-the-counter hearing aids are now available for mild-moderate loss.'],
      },
      3: {
        level: 3,
        summary: 'Hearing loss evaluation uses audiometry, tuning forks (Weber/Rinne), and imaging. ICD-11: AB50-AB59. Management depends on type, severity, and etiology.',
        explanation: `**Diagnostic approach:**\n- Weber test: Lateralizes to affected ear (conductive) or unaffected ear (SNHL)\n- Rinne test: Bone > air conduction = conductive loss; air > bone with decreased thresholds = SNHL\n- Audiometry: Pure tone thresholds, speech discrimination, tympanometry\n- ABR: Auditory brainstem response for retrocochlear evaluation\n\n**Key etiologies:**\n- Otosclerosis: Stapes fixation; conductive loss; stapedectomy curative\n- Noise-induced: Characteristic 4kHz notch on audiogram\n- Presbycusis: High-frequency sloping loss, poor speech discrimination\n- Ototoxicity: Aminoglycosides, cisplatin, loop diuretics\n\n**SSNHL:** 30dB loss over 3 frequencies within 72 hours; oral or intratympanic steroids; MRI to exclude schwannoma.`,
        keyTerms: [
          { term: 'otosclerosis', definition: 'Abnormal bone remodeling fixing the stapes footplate, causing progressive conductive hearing loss' },
          { term: 'speech discrimination score', definition: 'Percentage of words correctly identified at suprathreshold levels; poor scores suggest retrocochlear pathology' },
        ],
        clinicalNotes: 'The 4kHz audiometric notch is pathognomonic for noise-induced hearing loss due to vulnerability of the basal cochlear turn.',
      },
      4: {
        level: 4,
        summary: 'Hearing loss mechanisms span outer hair cell dysfunction, stria vascularis degeneration, synaptic ribbon loss (hidden hearing loss), and central auditory processing disorders.',
        explanation: `**Cochlear mechanisms:**\n- Sensory presbycusis: Outer hair cell loss (basal turn first); steep high-frequency loss\n- Metabolic presbycusis: Stria vascularis atrophy; reduced endocochlear potential; flat loss\n- Neural presbycusis: Spiral ganglion loss; poor discrimination despite adequate thresholds\n- Hidden hearing loss (cochlear synaptopathy): Loss of IHC-SGN synaptic ribbons; normal audiogram but difficulty in noise\n\n**Genetic hearing loss:**\n- GJB2 (Connexin 26): Most common cause of autosomal recessive non-syndromic SNHL\n- Pendred syndrome (SLC26A4): SNHL + enlarged vestibular aqueduct + thyroid goiter\n- Waardenburg, Usher, Alport syndromes\n\n**Cochlear implant candidacy:** Severe-profound bilateral SNHL; sentence recognition <50% in best-aided condition; functional auditory nerve required.`,
        keyTerms: [
          { term: 'cochlear synaptopathy', definition: 'Loss of inner hair cell synaptic ribbons causing difficulty hearing in noise despite normal audiogram ("hidden hearing loss")' },
          { term: 'GJB2 mutation', definition: 'Connexin 26 gene mutation, most common cause of genetic non-syndromic sensorineural hearing loss' },
        ],
        clinicalNotes: 'Enlarged vestibular aqueduct on CT is the most common inner ear malformation associated with SNHL in children.',
      },
      5: {
        level: 5,
        summary: 'Hearing loss management encompasses AAO-HNS SSNHL guidelines, cochlear implant advances, OTC hearing aid legislation, gene therapy trials, and otoprotective strategies.',
        explanation: `**SSNHL Guidelines (AAO-HNS 2019):**\n- Oral prednisone 60mg x 10-14 days or intratympanic dexamethasone\n- Intratympanic salvage therapy for incomplete recovery\n- MRI recommended; no evidence for antivirals or HBO\n\n**Emerging therapies:**\n- Gene therapy: AAV-mediated OTOF gene delivery for otoferlin deficiency (SNHL); clinical trials ongoing\n- Hair cell regeneration: Notch inhibition and Atoh1 overexpression to transdifferentiate supporting cells\n- Otoprotection: NAC, D-methionine for cisplatin-induced ototoxicity\n\n**OTC Hearing Aids (FDA 2022):** Direct-to-consumer for mild-moderate loss; expanding access; audiologic follow-up still recommended.\n\n**Outcomes:** Bilateral CI in children: 70-80% mainstream education; adult CI: median sentence recognition 80% in quiet.`,
        keyTerms: [
          { term: 'intratympanic steroid', definition: 'Injection of dexamethasone through TM into middle ear for SSNHL, achieving high perilymph concentrations' },
          { term: 'Atoh1', definition: 'Transcription factor critical for hair cell differentiation; target for regenerative therapy' },
        ],
        clinicalNotes: 'SSNHL treated within 2 weeks has best prognosis. Delay beyond 4 weeks dramatically reduces recovery rates.',
      },
    },
    media: [],
    citations: [
      { id: 'aao-ssnhl-2019', type: 'article', title: 'Clinical Practice Guideline: Sudden Hearing Loss (2019)', source: 'Otolaryngology-Head and Neck Surgery' },
    ],
    crossReferences: [
      { targetId: 'ear-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
    ],
    tags: { systems: ['auditory'], topics: ['otology', 'audiology', 'genetics'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['family-medicine', 'pediatrics', 'neurology'] } },
  }),

  'meniere-disease': earCondition({
    id: 'ear-meniere-disease',
    type: 'condition',
    name: 'Meniere Disease',
    alternateNames: ['Endolymphatic Hydrops', 'Morbus Meniere', 'nameEs:Enfermedad de Meniere'],
    hpoId: 'HP:0011390',
    levels: {
      1: {
        level: 1,
        summary: 'Meniere disease causes episodes of spinning dizziness, hearing loss, ringing in the ear, and ear fullness.',
        explanation: `Meniere disease affects the inner ear. People with this condition have attacks where the room seems to spin (vertigo), their hearing gets worse, they hear ringing, and the ear feels full or blocked. Attacks last minutes to hours.\n\n**What helps:** A low-salt diet, medication for dizziness, and avoiding caffeine and stress.`,
        keyTerms: [
          { term: 'vertigo', definition: 'A feeling that you or the room is spinning' },
        ],
        patientCounselingPoints: ['Attacks can be scary but are not life-threatening.', 'A low-salt diet may reduce how often attacks happen.'],
      },
      2: {
        level: 2,
        summary: 'Meniere disease is an inner ear disorder causing episodic vertigo, fluctuating sensorineural hearing loss, tinnitus, and aural fullness.',
        explanation: `**Classic triad + fullness:**\n1. Episodic vertigo (20 min to 12 hours)\n2. Low-frequency sensorineural hearing loss (fluctuating early, progressive later)\n3. Tinnitus (roaring quality)\n4. Aural fullness\n\n**Cause:** Excess fluid (endolymph) in the inner ear, though the exact reason is unknown.\n\n**Diagnosis:** Clinical history + audiogram showing low-frequency SNHL.\n\n**Treatment:** Low-sodium diet (<2g/day), diuretics, betahistine, vestibular rehabilitation. Intratympanic gentamicin or steroids for refractory cases.`,
        keyTerms: [
          { term: 'endolymph', definition: 'Fluid inside the inner ear that helps with hearing and balance' },
          { term: 'aural fullness', definition: 'Sensation of pressure or blockage in the ear' },
        ],
        patientCounselingPoints: ['Most patients achieve adequate control with dietary changes and medication.', 'Do not drive during vertigo episodes.'],
      },
      3: {
        level: 3,
        summary: 'Meniere disease reflects endolymphatic hydrops. ICD-11: AB31.0. Diagnosis per AAO-HNS criteria requires episodic vertigo, documented SNHL, and aural symptoms.',
        explanation: `**Diagnostic criteria (AAO-HNS 2015):**\n- Definite: >=2 vertigo episodes (20 min - 12 hrs) + audiometrically documented low-to-mid frequency SNHL + fluctuating aural symptoms\n- Probable: Episodic vertigo + fluctuating aural symptoms without documented hearing loss\n\n**Pathology:** Distension of endolymphatic compartment (Reissner's membrane bulges into scala vestibuli); rupture theory explains acute attacks (potassium-rich endolymph bathes neural structures).\n\n**Staged management:**\n1. Lifestyle: Sodium restriction, caffeine/alcohol avoidance\n2. Medical: Diuretics (HCTZ/triamterene), betahistine, acute rescue (meclizine, ondansetron)\n3. Intratympanic: Dexamethasone (hearing-sparing) or gentamicin (vestibulotoxic, 80-90% vertigo control)\n4. Surgical: Endolymphatic sac decompression, vestibular neurectomy, labyrinthectomy (last resort)`,
        keyTerms: [
          { term: 'endolymphatic hydrops', definition: 'Distension of the endolymphatic space, the underlying pathology of Meniere disease' },
          { term: 'intratympanic gentamicin', definition: 'Vestibulotoxic aminoglycoside injected through TM to ablate vestibular function in refractory Meniere disease' },
        ],
        clinicalNotes: 'Bilateral involvement occurs in 25-40% of patients over time. MRI with 3D-FLAIR can visualize endolymphatic hydrops.',
      },
      4: {
        level: 4,
        summary: 'Meniere disease pathophysiology involves endolymphatic sac dysfunction, autoimmune mechanisms, aquaporin dysregulation, and potential viral triggers, with variable natural history.',
        explanation: `**Pathophysiological theories:**\n- Endolymphatic sac malabsorption: Reduced endolymph resorption\n- Autoimmune: Elevated anti-HSP70 antibodies; steroid-responsiveness supports immune component\n- Aquaporin dysregulation: AQP2 and AQP4 expression changes in inner ear\n- Viral: HSV latency in vestibular ganglion\n\n**Natural history:** Burns out over 5-10 years; vertigo frequency decreases but hearing loss progresses; bilateral 25-40%.\n\n**Advanced diagnostics:** Electrocochleography (SP/AP ratio >0.4 suggestive); gadolinium-enhanced 3T MRI 3D-FLAIR shows endolymphatic hydrops.\n\n**Gentamicin titration:** Low-dose monthly injections (vestibular ablation while monitoring hearing); targets type I hair cells preferentially.`,
        keyTerms: [
          { term: 'electrocochleography', definition: 'Recording of cochlear potentials (SP and AP) to detect endolymphatic hydrops' },
          { term: 'summating potential', definition: 'DC potential reflecting cochlear hair cell receptor potential; elevated in hydrops' },
        ],
        clinicalNotes: 'SP/AP ratio >0.4 on ECoG suggests hydrops but has limited sensitivity (60-70%). MRI hydrops imaging is increasingly used.',
      },
      5: {
        level: 5,
        summary: 'Meniere disease management is evolving with hydrops imaging, biomarker research, and precision approaches to intratympanic therapy and surgical intervention.',
        explanation: `**Current evidence:**\n- Cochrane review: No high-quality RCTs for most Meniere treatments\n- Betahistine: BEMED trial (2016) showed no benefit over placebo for vertigo frequency\n- Intratympanic dexamethasone: Moderate evidence for short-term vertigo control and hearing preservation\n- Intratympanic gentamicin: 80-90% vertigo control; significant hearing loss risk (20-30%)\n\n**Surgical outcomes:**\n- Endolymphatic sac decompression: 60-80% vertigo control; placebo effect debated\n- Vestibular neurectomy: >90% vertigo control; requires craniotomy\n- Labyrinthectomy: Definitive for unilateral disease with no serviceable hearing\n\n**Emerging:**\n- OTO-104 (sustained-release intratympanic dexamethasone)\n- Endolymphatic sac gene therapy targets\n- Vestibular implants for bilateral vestibulopathy`,
        keyTerms: [
          { term: 'vestibular neurectomy', definition: 'Selective transection of vestibular nerve via middle or posterior fossa approach, preserving hearing' },
        ],
        clinicalNotes: 'Definite bilateral Meniere disease is rare at presentation; bilateral symptoms may indicate autoimmune inner ear disease requiring systemic immunosuppression.',
      },
    },
    media: [],
    citations: [
      { id: 'aao-meniere-2020', type: 'article', title: 'Meniere Disease: Clinical Practice Guideline', source: 'Otolaryngology-Head and Neck Surgery' },
    ],
    crossReferences: [
      { targetId: 'ear-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
      { targetId: 'ear-tinnitus', targetType: 'condition', relationship: 'related', label: 'Tinnitus' },
    ],
    tags: { systems: ['auditory', 'vestibular'], topics: ['otology', 'vestibular'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['neurology', 'family-medicine'] } },
  }),

  'cholesteatoma': earCondition({
    id: 'ear-cholesteatoma',
    type: 'condition',
    name: 'Cholesteatoma',
    alternateNames: ['Keratoma', 'nameEs:Colesteatoma'],
    hpoId: 'HP:0000399',
    levels: {
      1: {
        level: 1,
        summary: 'A cholesteatoma is an abnormal skin growth behind the eardrum that can damage the ear bones and cause hearing loss.',
        explanation: `A cholesteatoma is a pocket of skin that grows in the wrong place -- behind your eardrum in the middle ear. As it grows, it can eat away at the tiny ear bones and other structures.\n\n**Signs:** Foul-smelling ear discharge, hearing loss, dizziness, ear pain.\n\n**Treatment:** Surgery is needed to remove it and prevent damage.`,
        keyTerms: [
          { term: 'cholesteatoma', definition: 'An abnormal skin growth inside the middle ear that can damage nearby structures', pronunciation: 'koh-lee-stee-ah-TOH-mah' },
        ],
        patientCounselingPoints: ['Cholesteatomas do not go away on their own and need surgery.', 'Regular follow-up after surgery is important to check for regrowth.'],
      },
      2: {
        level: 2,
        summary: 'Cholesteatoma is a destructive, expanding collection of keratinized squamous epithelium in the middle ear or mastoid, requiring surgical management.',
        explanation: `**Types:**\n- **Acquired (most common):** Forms from eardrum retraction pocket, usually in pars flaccida (attic region)\n- **Congenital:** White mass behind intact eardrum, no history of ear infection or surgery\n\n**How it forms:** Negative middle ear pressure from Eustachian tube dysfunction pulls the eardrum inward, creating a pocket that traps skin cells. The growing mass erodes bone.\n\n**Complications:** Ossicular erosion (hearing loss), facial nerve damage, labyrinthine fistula (vertigo), mastoiditis, intracranial infection.\n\n**Treatment:** Tympanomastoidectomy (canal wall-up or canal wall-down). Regular follow-up for recurrence detection.`,
        keyTerms: [
          { term: 'retraction pocket', definition: 'Inward collapse of the eardrum caused by negative middle ear pressure' },
          { term: 'tympanomastoidectomy', definition: 'Surgery to remove cholesteatoma from the middle ear and mastoid bone' },
        ],
        patientCounselingPoints: ['Surgery aims to remove the growth and preserve or restore hearing.', 'Follow-up imaging or second-look surgery may be needed.'],
      },
      3: {
        level: 3,
        summary: 'Cholesteatoma is locally destructive keratinized epithelium in the middle ear cleft. ICD-11: AB31.2. Surgical excision is definitive; recurrence rates vary by technique.',
        explanation: `**Pathogenesis theories:**\n- Retraction: Eustachian tube dysfunction -> TM retraction -> keratin accumulation\n- Migration: Epithelium migrates through marginal perforation\n- Metaplasia: Middle ear mucosa transforms to keratinizing epithelium\n- Implantation: Iatrogenic or traumatic epithelial seeding\n\n**Clinical features:** Painless otorrhea (fetid), conductive hearing loss, aural polyp. CT temporal bone shows soft tissue mass with bony erosion (scutum, tegmen, ossicles).\n\n**Surgical approaches:**\n- Canal wall-up (CWU): Preserves canal anatomy; higher recurrence (15-30%); may require second-look\n- Canal wall-down (CWD): Creates mastoid cavity; lower recurrence (~5%); requires lifelong cavity care\n- DWI-MRI: Non-EPI sequences detect residual/recurrent cholesteatoma (sensitivity >90%), reducing need for second-look surgery`,
        keyTerms: [
          { term: 'scutum erosion', definition: 'Loss of the lateral attic wall bony spur, earliest CT finding in pars flaccida cholesteatoma' },
          { term: 'canal wall-up mastoidectomy', definition: 'Cholesteatoma removal preserving posterior canal wall; better cosmesis but higher recurrence' },
        ],
        clinicalNotes: 'Non-EPI DWI MRI has largely replaced routine second-look surgery for cholesteatoma surveillance.',
      },
      4: {
        level: 4,
        summary: 'Cholesteatoma bone erosion involves osteoclast activation by inflammatory cytokines (TNF-alpha, IL-1, RANKL) and matrix metalloproteinases from the perimatrix.',
        explanation: `**Molecular pathogenesis:**\n- Perimatrix (connective tissue layer) produces IL-1beta, TNF-alpha, IL-6\n- RANKL/OPG ratio shifted toward bone resorption\n- MMP-2 and MMP-9 degrade extracellular matrix\n- Keratinocyte hyperproliferation (Ki-67 elevated) driven by EGF and KGF\n- Bacterial biofilms (Pseudomonas, Proteus) sustain chronic inflammation\n\n**Surgical decision-making:**\n- CWU preferred in: Children (avoid cavity), bilateral disease, only hearing ear, intact canal wall\n- CWD preferred in: Extensive disease, labyrinthine fistula, poor Eustachian tube function, revision surgery\n- Ossiculoplasty: Staged (6-12 months later) vs simultaneous; cartilage tympanoplasty for reinforcement\n\n**Labyrinthine fistula management:** Do not remove matrix from fistula; cover with fascia; risk of SNHL if matrix disturbed.`,
        keyTerms: [
          { term: 'perimatrix', definition: 'Subepithelial connective tissue layer of cholesteatoma responsible for inflammatory mediator production and bone erosion' },
          { term: 'RANKL', definition: 'Receptor activator of nuclear factor kappa-B ligand; promotes osteoclast differentiation and bone resorption' },
        ],
        clinicalNotes: 'Tegmen erosion risks epidural abscess or CSF leak. Facial nerve dehiscence in the tympanic segment occurs in 50% of cholesteatoma cases.',
      },
      5: {
        level: 5,
        summary: 'Cholesteatoma management continues to evolve with non-EPI DWI surveillance, endoscopic ear surgery, and molecular-targeted approaches to reduce recurrence.',
        explanation: `**Imaging advances:**\n- Non-EPI DWI MRI (HASTE, PROPELLER): Sensitivity >90%, specificity >95% for residual cholesteatoma >=3mm\n- Eliminates many second-look surgeries; recommended at 12 months post-CWU\n- Fusion imaging (CT + MRI) for surgical planning\n\n**Endoscopic ear surgery (EES):**\n- Transcanal approach avoids postauricular incision\n- Superior visualization of hidden areas (sinus tympani, facial recess)\n- Growing evidence shows comparable recurrence rates to microscopic surgery\n- Combined endoscopic-microscopic approaches for extensive disease\n\n**Outcomes data:**\n- CWU recidivism: Residual 10-20%, recurrent 5-15%\n- CWD recidivism: Residual 5-10%, recurrent <5%\n- Hearing reconstruction success: 50-70% achieving serviceable hearing\n\n**Research frontiers:** Anti-proliferative agents (5-FU, mitomycin C) applied to perimatrix; MMP inhibitors; targeted anti-inflammatory therapy to reduce bone erosion.`,
        keyTerms: [
          { term: 'non-EPI DWI', definition: 'Non-echo-planar diffusion-weighted MRI technique with reduced artifact, highly sensitive for cholesteatoma detection' },
          { term: 'endoscopic ear surgery', definition: 'Minimally invasive transcanal approach using rigid endoscopes for cholesteatoma removal' },
        ],
        clinicalNotes: 'Congenital cholesteatoma staging (Potsic): Stage I (single quadrant) to Stage IV (mastoid extension). Early stages have excellent surgical outcomes.',
      },
    },
    media: [],
    citations: [
      { id: 'cummings-cholesteatoma', type: 'textbook', title: 'Cholesteatoma Surgery', source: 'Cummings Otolaryngology, 7th Edition', chapter: 'Chapter 142' },
    ],
    crossReferences: [
      { targetId: 'ear-otitis-media', targetType: 'condition', relationship: 'related', label: 'Chronic Otitis Media' },
    ],
    tags: { systems: ['auditory'], topics: ['otology', 'surgery'], clinicalRelevance: 'high', examRelevance: { usmle: true, nbme: true, shelf: ['surgery'] } },
  }),
};

// Maintain backward-compatible export used by index.ts
export const earContent: EducationalContent = earDisordersContent['otitis-media'];

export default earDisordersContent;
