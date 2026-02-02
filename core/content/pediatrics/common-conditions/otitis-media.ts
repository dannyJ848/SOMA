/**
 * Otitis Media
 *
 * Educational content on acute otitis media covering anatomy, pathophysiology,
 * AAP treatment guidelines, antibiotic selection, complications, and
 * evolving microbiology in the post-PCV13 era.
 */

import { EducationalContent } from '../../types';

export const OTITIS_MEDIA: EducationalContent = {
  id: 'pediatrics-otitis-media',
  type: 'condition',
  name: 'Otitis Media',
  nameEs: 'Otitis Media',
  alternateNames: ['Ear infection', 'AOM', 'Acute otitis media', 'Middle ear infection'],

  levels: {
    1: {
      level: 1,
      summary:
        'An ear infection happens when germs get trapped behind the eardrum, causing pain and sometimes fever. It is one of the most common reasons children visit the doctor.',
      explanation: `Ear infections are very common in babies and young children. The space behind the eardrum fills with fluid and germs, causing pressure and pain.

**Signs of an Ear Infection**
- Pulling or tugging at the ear
- Crying and fussiness, especially when lying down
- Fever
- Trouble sleeping
- Fluid draining from the ear
- Not hearing well

**Why Children Get More Ear Infections**
- The tube connecting the ear to the throat (Eustachian tube) is shorter and more flat in children
- This makes it easier for germs to travel from the throat into the ear
- Most children outgrow frequent ear infections by age 3-4 as the tube grows longer

**Treatment**
- Pain medicine (acetaminophen or ibuprofen) is always the first step
- Not all ear infections need antibiotics
- Your doctor may suggest "watchful waiting" for mild infections in older children
- If antibiotics are needed, amoxicillin is usually the first choice
- If ear infections keep coming back, your doctor may recommend ear tubes

**Prevention**
- Breastfeeding (at least 6 months)
- Keeping up with vaccines (especially the pneumococcal vaccine)
- Avoiding secondhand smoke
- Not propping bottles during feeding`,
      keyTerms: [
        { term: 'ear infection', definition: 'An infection behind the eardrum that causes pain, pressure, and sometimes fever' },
        { term: 'eardrum', definition: 'A thin piece of tissue that separates the outer ear from the middle ear; it vibrates when sound hits it' },
        { term: 'ear tubes', definition: 'Tiny tubes placed through the eardrum by a doctor to help fluid drain and prevent repeat infections' },
      ],
      analogies: [
        'An ear infection is like water trapped behind a dam. The fluid builds up, causing pressure and pain.',
        'The Eustachian tube is like a drain pipe. In children, it is short and flat, so it clogs easily.',
      ],
      patientCounselingPoints: [
        'Not every ear infection needs antibiotics. Many will get better on their own with pain management.',
        'Always finish the full course of antibiotics if prescribed.',
        'Call your doctor if symptoms worsen after 48 hours or if your child has a very high fever.',
        'Breastfeeding and avoiding secondhand smoke can help prevent ear infections.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Acute otitis media (AOM) is diagnosed by tympanic membrane findings and managed per AAP guidelines with age-stratified observation versus antibiotic criteria.',
      explanation: `**Epidemiology**
- Peak incidence: 6-24 months
- 80% of children have at least one episode by age 3
- Risk factors: daycare attendance, bottle propping, pacifier use, secondhand smoke, lack of breastfeeding, cleft palate

**Diagnosis (AAP 2013 Guidelines)**
- Moderate-severe bulging of tympanic membrane (TM)
- New onset otorrhea not from otitis externa
- Mild bulging TM + recent ear pain or erythema
- Pneumatic otoscopy: decreased TM mobility is the most reliable finding

**Treatment Guidelines**
| Age | Unilateral, Non-Severe | Bilateral or Severe |
|-----|------------------------|---------------------|
| <6 months | Antibiotics | Antibiotics |
| 6-23 months | Observation option* | Antibiotics |
| >=2 years | Observation option* | Observation option* |

*Observation = watchful waiting 48-72 hours with pain management and follow-up assured

**Antibiotic Selection**
| Scenario | First-Line | Alternative |
|----------|-----------|------------|
| Standard AOM | Amoxicillin 80-90 mg/kg/day | Amoxicillin-clavulanate |
| Amoxicillin failure (48-72h) | Amoxicillin-clavulanate 90 mg/kg/day | Ceftriaxone IM x3 days |
| Penicillin allergy (non-severe) | Cefdinir, cefuroxime, cefpodoxime | - |
| Penicillin allergy (severe/anaphylaxis) | Azithromycin or clindamycin | - |

**Recurrent AOM**
- Definition: >=3 episodes in 6 months OR >=4 in 12 months
- Consider prophylactic antibiotics (controversial, rarely recommended now)
- Tympanostomy tubes: recommended if meeting criteria with persistent effusion
- Adenoidectomy: consider if age >4 years and adenoid hypertrophy

**Otitis Media with Effusion (OME)**
- Fluid in middle ear WITHOUT signs of acute infection
- 90% resolve within 3 months
- Management: watchful waiting 3 months, then audiometry
- Tympanostomy tubes if persistent + hearing loss (>25 dB)
- Antihistamines, decongestants, and steroids are NOT effective`,
      keyTerms: [
        { term: 'acute otitis media', definition: 'Infection of the middle ear with acute symptoms, bulging TM, and effusion', pronunciation: 'oh-TY-tis MEE-dee-uh' },
        { term: 'pneumatic otoscopy', definition: 'Technique assessing TM mobility by insufflation; decreased mobility suggests middle ear effusion; most reliable diagnostic finding' },
        { term: 'tympanostomy tubes', definition: 'Small tubes surgically placed through the TM to ventilate the middle ear and prevent fluid accumulation in recurrent AOM or chronic OME' },
        { term: 'OME', definition: 'Otitis Media with Effusion; fluid behind the TM without acute infection; most cases resolve spontaneously within 3 months' },
        { term: 'watchful waiting', definition: 'Strategy of observation with pain management for 48-72 hours before prescribing antibiotics in mild, non-severe AOM' },
      ],
      analogies: [
        'Pneumatic otoscopy is like gently puffing air at a drum to see if it moves. A healthy eardrum bounces; an infected one stays still.',
        'Ear tubes are like tiny windows that let air in and fluid out, keeping the middle ear dry.',
      ],
    },
    3: {
      level: 3,
      summary:
        'AOM management requires understanding Eustachian tube pathophysiology, microbiology (S. pneumoniae, NTHi, M. catarrhalis), antibiotic pharmacokinetics, and complication recognition.',
      explanation: `**Pathophysiology**
- Eustachian tube (ET) dysfunction is the central mechanism
- Infant ET: shorter (13mm vs 36mm adult), more horizontal, more compliant cartilage
- Viral URI causes ET mucosal edema and ciliary dysfunction
- Negative middle ear pressure develops, followed by effusion
- Bacterial superinfection of effusion: biofilm formation on adenoid tissue serves as reservoir

**Microbiology (Post-PCV13)**
| Pathogen | Frequency | Resistance | Notes |
|----------|-----------|-----------|-------|
| S. pneumoniae | 25-30% | Penicillin resistance declining with PCV13 | Non-vaccine serotypes emerging |
| Non-typeable H. influenzae | 30-40% (now #1) | 30-40% produce beta-lactamase | Amoxicillin-clavulanate if suspected |
| M. catarrhalis | 10-15% | >90% beta-lactamase positive | Usually self-limited |
| S. pyogenes | 2-5% | None | Consider if acute, severe presentation |
| No pathogen isolated | 20-30% | - | Viral AOM or fastidious organisms |

**Pharmacokinetics of AOM Antibiotics**
| Drug | Middle Ear Concentration | Spectrum |
|------|------------------------|----------|
| Amoxicillin 80-90 mg/kg/day | Exceeds MIC for most S. pneumoniae | S. pneumoniae, some H. influenzae |
| Amox-clav (90/6.4 mg/kg/day) | Above | Adds beta-lactamase producers |
| Ceftriaxone 50 mg/kg IM | High; sustained levels | Broad; good for treatment failure |
| Cefdinir 14 mg/kg/day | Moderate | Oral alternative for PCN allergy |

**Complications**
| Complication | Features | Management |
|-------------|----------|-----------|
| Acute mastoiditis | Postauricular swelling, erythema, pinna protrusion | CT temporal bone, IV antibiotics, mastoidectomy if abscess |
| TM perforation | Acute otorrhea, pain relief | Usually self-heals; topical ofloxacin drops |
| Cholesteatoma | Chronic drainage, hearing loss, retraction pocket | ENT referral, surgical excision |
| Facial nerve palsy | Rare; ipsilateral facial weakness | IV antibiotics, myringotomy |
| Intracranial extension | Meningitis, epidural/brain abscess, sigmoid sinus thrombosis | Emergent neurosurgical consultation |

**Tympanostomy Tube Indications (AAP/AAO-HNS)**
- Recurrent AOM: >=3 episodes in 6 months or >=4 in 12 months with MEE at time of evaluation
- Chronic OME: Bilateral effusion >=3 months with hearing loss (>=25 dB)
- At-risk children: Craniofacial anomalies, Down syndrome, cleft palate, speech delay with OME

**Hearing Impact**
- OME causes conductive hearing loss of 20-30 dB
- Equivalent to "hearing with fingers in ears"
- Bilateral persistent OME during critical language development (12-36 months) may impair speech
- This is the primary indication for tubes in chronic OME`,
      keyTerms: [
        { term: 'Eustachian tube', definition: 'Cartilaginous tube connecting middle ear to nasopharynx; shorter and more horizontal in infants; dysfunction is the central AOM pathophysiology' },
        { term: 'biofilm', definition: 'Organized bacterial community on adenoid tissue serving as reservoir for recurrent AOM pathogens; resistant to antibiotics and host defenses' },
        { term: 'mastoiditis', definition: 'Infection of mastoid air cells posterior to the ear; most common complication of AOM; presents with postauricular swelling and pinna protrusion' },
        { term: 'cholesteatoma', definition: 'Keratinized epithelial growth in middle ear from chronic retraction/perforation; erodes bone; requires surgical excision' },
        { term: 'conductive hearing loss', definition: 'Hearing loss from mechanical obstruction of sound transmission (effusion blocking TM movement); reversible when effusion resolves' },
        { term: 'NTHi', definition: 'Non-typeable Haemophilus influenzae; now the most common AOM pathogen post-PCV13; 30-40% produce beta-lactamase' },
      ],
      clinicalNotes:
        'NTHi has surpassed S. pneumoniae as the most common AOM pathogen post-PCV13. If treatment failure on amoxicillin, switch to amoxicillin-clavulanate to cover beta-lactamase producers. Mastoiditis requires imaging (CT) and IV antibiotics; do not wait for improvement on oral therapy. Bilateral OME lasting >3 months during ages 12-36 months is a language development concern warranting audiology referral and tube consideration.',
    },
    4: {
      level: 4,
      summary:
        'Advanced AOM management integrates middle ear microbiome research, vaccine impact on microbiology, emerging therapeutics, and evidence-based surgical decision-making.',
      explanation: `**Middle Ear Microbiome**
- 16S rRNA sequencing reveals polymicrobial communities even in OME
- Biofilm persistence on adenoid tissue explains chronic/recurrent disease
- Culture-negative AOM often harbors fastidious organisms or biofilm bacteria
- Alloiococcus otitidis: frequently detected by PCR in OME; pathogenic role debated

**Post-PCV13 and PCV15/PCV20 Microbiology Shifts**
| Trend | Clinical Impact |
|-------|-----------------|
| S. pneumoniae vaccine serotypes decreased | Non-vaccine serotypes (NVT) emerging; serotype replacement |
| NTHi now dominant in many studies | More beta-lactamase resistance; amox-clav as empiric in high-failure areas |
| M. catarrhalis stable | Nearly all beta-lactamase positive; usually self-limited |
| PCV15 (Vaxneuvance) | Adds serotypes 22F, 33F to PCV13; conjugated to CRM197 |
| PCV20 (Prevnar 20) | Adds 7 serotypes to PCV13; pediatric trials ongoing |

**Emerging Therapeutic Approaches**
| Approach | Mechanism | Status |
|----------|-----------|--------|
| Transtympanic drug delivery | Direct middle ear antibiotic delivery | Research |
| NTHi protein D vaccine | Surface protein target in combination vaccines | Some international use |
| Bacteriophage therapy | Targeted bacterial killing without resistance | Preclinical |
| Biofilm disruptors (DNase, NAC) | Disrupt extracellular matrix | Preclinical/early clinical |
| Probiotic nasal sprays | Competitive exclusion of pathogens | Phase 2 |
| Balloon ET dilation | Mechanical opening of Eustachian tube | Pediatric trials ongoing |

**Surgical Evidence**

*Tympanostomy Tubes:*
- Reduce AOM episodes by 1-1.5 per year
- 70% extrude spontaneously within 12-18 months
- Complications: otorrhea (16-26%), persistent perforation (2-5%), cholesteatoma (<1%)
- Water precautions: No longer universally recommended for surface swimming; diving requires plugs

*Adenoidectomy:*
- Reduces AOM recurrence in children >2-4 years
- Mechanism: Removes biofilm reservoir + improves nasopharyngeal drainage
- Combination (tubes + adenoidectomy) more effective than tubes alone in children >4 years
- Not recommended as primary intervention for children <2 years

**Antibiotic Stewardship in AOM**
- Delayed prescribing: Give prescription with instructions to fill only if not improving in 48-72h
- Reduces antibiotic use by 60-70% without worse outcomes
- Education: Explain that most AOM resolves spontaneously
- C. difficile risk increases with each antibiotic course
- Antimicrobial resistance: Global concern driving observation strategies`,
      keyTerms: [
        { term: 'serotype replacement', definition: 'Phenomenon where non-vaccine pneumococcal serotypes fill the ecological niche vacated by vaccine serotypes; drives need for higher-valency PCVs' },
        { term: 'Alloiococcus otitidis', definition: 'Fastidious gram-positive bacterium frequently detected by PCR in OME; pathogenic role debated; not detected by standard culture' },
        { term: 'delayed prescribing', definition: 'Antibiotic stewardship strategy: providing prescription with instructions to fill only if symptoms persist after 48-72 hours; reduces antibiotic use by 60-70%' },
        { term: 'PCV20', definition: 'Twenty-valent pneumococcal conjugate vaccine adding 7 serotypes to PCV13; pediatric trials underway to further reduce AOM and invasive disease' },
        { term: 'balloon ET dilation', definition: 'Minimally invasive procedure mechanically opening the Eustachian tube; adapted from adult sinusitis technology; pediatric trials ongoing' },
      ],
      clinicalNotes:
        'The shift to PCV15/PCV20 will further alter AOM microbiology. Monitor emerging resistance patterns in your practice. Delayed prescribing is underutilized but highly effective for antibiotic stewardship. Water precautions after tympanostomy tubes are less strict than historically recommended; surface swimming without earplugs is generally acceptable.',
    },
    5: {
      level: 5,
      summary:
        'Expert-level AOM management encompasses host genetics, microbiome-targeted therapies, global disease burden, and precision approaches to recurrent and chronic disease.',
      explanation: `**Host Genetic Susceptibility**
| Gene/Pathway | Association | Mechanism |
|-------------|------------|-----------|
| HLA-A2 | Increased AOM susceptibility | Altered immune recognition |
| TLR4 polymorphisms | Increased AOM risk | Impaired innate bacterial sensing |
| MUC5B variants | Chronic OME | Altered mucin production |
| Surfactant protein A/D | Recurrent AOM | Impaired innate pulmonary/middle ear defense |
| FBXO11 | Chronic OME (mouse model) | Epithelial differentiation |

- Twin studies: 50-70% heritability for recurrent AOM
- GWAS studies identify multiple susceptibility loci
- Clinical utility: Currently limited; future targeted prevention strategies

**Microbiome-Directed Therapies**
| Strategy | Target | Evidence |
|----------|--------|---------|
| Nasal probiotics (S. salivarius) | Competitive exclusion | Phase 2; modest benefit |
| Alpha-hemolytic streptococci spray | Pharyngeal microbiome modulation | Some positive trials in Europe |
| Bacterial lysates (OM-85, Broncho-Vaxom) | Immune stimulation | Meta-analyses show reduced AOM episodes |
| Quorum sensing inhibitors | Bacterial communication disruption | Preclinical |
| Fecal/nasal microbiome transplant | Ecosystem restoration | Conceptual for chronic OME |

**Global Disease Burden**
| Region | AOM Incidence | Chronic Suppurative OM | Hearing Loss Impact |
|--------|--------------|----------------------|-------------------|
| High-income | 10% per year in <5 | Rare | Minimal (antibiotics, surgery accessible) |
| Sub-Saharan Africa | 2-4x higher | Common (1-4% prevalence) | Significant educational/economic impact |
| South/Southeast Asia | High | High | WHO priority for interventions |
| Indigenous populations | Very high (50-90% in some) | Epidemic levels | Major health disparity |

- CSOM causes preventable hearing loss in 30+ million children globally
- WHO recommends topical ciprofloxacin drops (not oral antibiotics) for CSOM in LMICs
- Community health worker-based ear care programs show promise

**Emerging Research Frontiers**
| Topic | Status |
|-------|--------|
| Middle ear organoids | Modeling AOM pathophysiology in vitro |
| Single-cell transcriptomics of middle ear | Identifying cell-type specific responses |
| Vaccine antigens against NTHi and M. catarrhalis | Multiple candidates in preclinical/Phase 1 |
| Machine learning otoscopy | Smartphone AI-assisted AOM diagnosis |
| Point-of-care tympanometry | Handheld devices for primary care screening |`,
      keyTerms: [
        { term: 'CSOM', definition: 'Chronic Suppurative Otitis Media; chronic middle ear infection with persistent drainage through a perforated TM; major cause of preventable hearing loss in LMICs' },
        { term: 'OM-85', definition: 'Bacterial lysate immunostimulant (Broncho-Vaxom); meta-analyses demonstrate modest reduction in recurrent AOM episodes in children' },
        { term: 'middle ear organoid', definition: 'Three-dimensional in vitro culture of middle ear epithelial cells; emerging tool for studying AOM pathophysiology and testing therapeutics' },
        { term: 'quorum sensing', definition: 'Bacterial cell-to-cell communication system regulating virulence and biofilm formation; inhibitors are a novel therapeutic target for biofilm-related AOM' },
      ],
      clinicalNotes: `**Expert Integration:**
- AOM heritability is 50-70%, supporting genetic susceptibility; future polygenic risk scores may guide personalized prevention.
- Machine learning otoscopy tools can assist primary care providers in AOM diagnosis; several smartphone-based systems show accuracy comparable to otolaryngologists.
- CSOM in indigenous populations represents one of the greatest global ear health disparities; community-based interventions are essential.
- Bacterial lysates (OM-85) represent an underutilized, evidence-based immunostimulatory approach for recurrent AOM prevention.
- The pipeline for NTHi and M. catarrhalis vaccines remains active; a multivalent AOM vaccine could fundamentally change disease epidemiology.`,
    },
  },

  media: [
    { id: 'aom-otoscopy', type: 'image', filename: 'acute-otitis-media-otoscopy.jpg', title: 'AOM Otoscopic View', description: 'Bulging, erythematous TM with effusion' },
    { id: 'ear-anatomy-diagram', type: 'diagram', filename: 'middle-ear-anatomy-aom.svg', title: 'Middle Ear Anatomy', description: 'Anatomy of the middle ear showing Eustachian tube and ossicles' },
  ],

  citations: [
    { id: 'aap-aom-2013', type: 'article', title: 'The Diagnosis and Management of Acute Otitis Media', authors: ['Lieberthal, A.S.', 'Carroll, A.E.'], source: 'Pediatrics', url: 'https://doi.org/10.1542/peds.2012-3488' },
    { id: 'nelson-aom', type: 'textbook', title: 'Nelson Textbook of Pediatrics', authors: ['Kliegman, R.M.'], source: 'Elsevier', chapter: 'Otitis Media', license: 'Proprietary' },
  ],

  crossReferences: [
    { targetId: 'pediatrics-croup', targetType: 'condition', relationship: 'sibling', label: 'Croup' },
    { targetId: 'pediatrics-bronchiolitis', targetType: 'condition', relationship: 'sibling', label: 'Bronchiolitis' },
  ],

  tags: {
    systems: ['immune', 'sensory'],
    topics: ['pediatrics', 'infectious disease', 'otolaryngology'],
    keywords: ['otitis media', 'ear infection', 'AOM', 'OME', 'tympanostomy tubes', 'amoxicillin', 'pneumatic otoscopy', 'PCV13'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'family medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
