/**
 * Otitis Media - Comprehensive Educational Content
 *
 * Covers middle ear infections including acute otitis media,
 * otitis media with effusion, and chronic suppurative otitis media.
 */

import { EducationalContent } from '../../../types';

export const otitisMedia: EducationalContent = {
  id: 'ent-otitis-media',
  type: 'condition',
  name: 'Otitis Media',
  alternateNames: ['Middle Ear Infection', 'Ear Infection', 'OM'],
  hpoId: 'HP:0000388',

  levels: {
    1: {
      level: 1,
      summary: 'An ear infection happens when germs get into the middle part of your ear, causing pain and sometimes making it hard to hear.',
      explanation: `Have you ever had an earache that really hurt? That might have been an ear infection! Ear infections are very common, especially in young children.

**What Is an Ear Infection?**

Behind your eardrum is a small space called the middle ear. When germs (bacteria or viruses) get trapped there, they can cause an infection. The space fills up with fluid or pus, pushing on your eardrum and causing pain.

**Why Do Kids Get More Ear Infections?**

There's a tiny tube connecting your middle ear to the back of your throat called the Eustachian tube. In kids, this tube is:
- Shorter and more level (so germs can get in easily)
- Narrower (so it gets blocked more easily)

As you grow up, the tube becomes longer and more angled, so ear infections happen less often.

**Signs of an Ear Infection:**

- Ear pain (tugging at the ear in babies)
- Trouble hearing or feeling like the ear is "full"
- Fever
- Fussiness or crying (in babies)
- Trouble sleeping
- Fluid draining from the ear (if the eardrum bursts)

**What Causes Ear Infections?**

Ear infections often start after:
- A cold or stuffy nose
- Allergies
- Sinus infections

When your nose is stuffy, the Eustachian tube can get blocked, trapping fluid in your middle ear where germs can grow.

**How Are Ear Infections Treated?**

- **Pain relief**: Medicine like acetaminophen or ibuprofen helps with the pain
- **Watchful waiting**: Sometimes the body fights off the infection on its own
- **Antibiotics**: Medicine that kills bacteria (not all ear infections need this!)
- **Ear tubes**: If someone keeps getting ear infections, a doctor might put tiny tubes in the eardrum to help drain fluid

**Preventing Ear Infections:**

- Wash hands often (to avoid catching colds)
- Don't smoke around children
- Breastfeeding helps protect babies
- Keep vaccinations up to date
- Don't lie flat while drinking a bottle`,
      keyTerms: [
        { term: 'ear infection', definition: 'When germs get into the middle ear and cause swelling, fluid, and pain' },
        { term: 'eardrum', definition: 'The thin skin that separates your outer ear from your middle ear' },
        { term: 'Eustachian tube', definition: 'A tiny tube that connects your middle ear to the back of your throat' },
        { term: 'antibiotics', definition: 'Medicine that kills bacteria to help fight infections' },
        { term: 'ear tubes', definition: 'Tiny tubes put through the eardrum to help drain fluid from the middle ear' },
      ],
      analogies: [
        'Your Eustachian tube is like a drain. When it gets clogged, fluid builds up like water in a stopped-up sink.',
        'An infected middle ear is like a balloon filled with fluid, pressing against the eardrum and causing pain.',
        'Ear tubes are like putting a tiny straw through the eardrum to let trapped fluid escape.',
      ],
      examples: [
        'A toddler who has had a runny nose for several days might develop an ear infection when germs travel up to the middle ear.',
        'A child pulling at their ear and being fussier than usual at bedtime might have an ear infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Otitis media is inflammation of the middle ear, commonly caused by viral or bacterial infection following upper respiratory infection, presenting with ear pain, hearing loss, and possible fever.',
      explanation: `## Types of Otitis Media

### Acute Otitis Media (AOM)
- Rapid onset of symptoms
- Signs of middle ear inflammation
- Presence of middle ear fluid (effusion)
- Most common in ages 6-24 months

### Otitis Media with Effusion (OME)
- Also called "glue ear" or serous otitis media
- Fluid in middle ear WITHOUT signs of acute infection
- Often follows AOM or upper respiratory infection
- May cause hearing loss without pain

### Chronic Suppurative Otitis Media (CSOM)
- Persistent drainage through perforated eardrum
- Lasts >6 weeks
- Requires specialized treatment

## Causes and Risk Factors

### Common Pathogens
**Bacterial (50-60% of AOM):**
- Streptococcus pneumoniae (most common)
- Haemophilus influenzae
- Moraxella catarrhalis

**Viral (often coexists with bacteria):**
- Respiratory syncytial virus (RSV)
- Rhinovirus
- Influenza

### Risk Factors
- Age 6-24 months (peak incidence)
- Daycare attendance
- Bottle feeding while lying down
- Secondhand smoke exposure
- Family history
- Craniofacial abnormalities (cleft palate)
- Immune deficiency
- Fall/winter season

## Pathophysiology

1. **Upper respiratory infection** causes nasal/throat congestion
2. **Eustachian tube dysfunction** - swelling blocks the tube
3. **Negative middle ear pressure** develops
4. **Fluid accumulation** in middle ear (effusion)
5. **Bacterial invasion** and multiplication
6. **Inflammatory response** - pus formation, bulging eardrum

## Clinical Presentation

### Acute Otitis Media Symptoms
- Ear pain (otalgia) - often sudden onset
- Hearing loss
- Fever (often >38C/100.4F)
- Irritability, poor sleep
- Ear pulling (infants/toddlers)
- Otorrhea (ear drainage) if eardrum perforates

### Otoscopic Findings
| Finding | Interpretation |
|---------|---------------|
| Bulging tympanic membrane | Middle ear fluid under pressure |
| Erythema (redness) | Inflammation |
| Opacification | Fluid behind eardrum |
| Decreased mobility | Effusion present |
| Air-fluid level | Clear fluid |
| Perforation with drainage | Rupture due to pressure |

## Diagnosis

### Clinical Criteria for AOM
Must have all three:
1. Acute onset of symptoms (within 48 hours)
2. Middle ear effusion (bulging TM, decreased mobility, air-fluid level)
3. Signs of inflammation (erythema, otalgia, fever)

### Pneumatic Otoscopy
- Gold standard for diagnosis
- Tests eardrum mobility
- Decreased or absent mobility indicates effusion

### Tympanometry
- Objective test of middle ear function
- Type B (flat) indicates effusion
- Useful in children who won't cooperate with pneumatic otoscopy

## Treatment

### Pain Management (First Priority)
- Acetaminophen or ibuprofen
- Warm compress to ear
- Pain usually improves within 24-48 hours

### Observation vs. Antibiotics

**Observation ("watchful waiting") appropriate when:**
- Age ≥2 years with mild symptoms
- Unilateral AOM
- Temperature <39C (102.2F)
- Mild otalgia
- Parent can follow up

**Immediate antibiotics indicated when:**
- Age <6 months
- Severe symptoms (temp ≥39C, severe pain, >48 hours)
- Bilateral AOM in children <2 years
- Otorrhea with AOM
- Immunocompromised

### Antibiotic Selection
- **First-line**: Amoxicillin (80-90 mg/kg/day)
- **Penicillin allergy**: Cephalosporin or macrolide
- **Treatment failure**: Amoxicillin-clavulanate, ceftriaxone

### Surgical Treatment (Tympanostomy Tubes)
**Indications:**
- Recurrent AOM (≥3 episodes in 6 months, or ≥4 in 12 months)
- OME lasting ≥3 months with hearing loss
- Chronic ETD with recurrent symptoms

**Procedure:**
- Small incision in eardrum (myringotomy)
- Tiny tube inserted
- Allows fluid drainage, equalizes pressure
- Usually falls out on its own in 6-18 months

## Complications

### Intratemporal
- Hearing loss (conductive)
- Tympanic membrane perforation
- Chronic suppurative OM
- Cholesteatoma
- Mastoiditis

### Intracranial (Rare but Serious)
- Meningitis
- Brain abscess
- Lateral sinus thrombosis`,
      keyTerms: [
        { term: 'acute otitis media', definition: 'Rapid-onset middle ear infection with inflammation and effusion', pronunciation: 'oh-TIE-tis MEE-dee-uh' },
        { term: 'otitis media with effusion', definition: 'Fluid in the middle ear without acute infection, often called "glue ear"' },
        { term: 'pneumatic otoscopy', definition: 'Examination using air pressure to test eardrum mobility' },
        { term: 'tympanostomy tubes', definition: 'Small tubes surgically placed through the eardrum to ventilate the middle ear', pronunciation: 'tim-pan-OSS-toh-mee' },
        { term: 'myringotomy', definition: 'Surgical incision of the eardrum', pronunciation: 'meer-in-GOT-oh-mee' },
        { term: 'otorrhea', definition: 'Discharge or drainage from the ear', pronunciation: 'oh-toh-REE-uh' },
      ],
      analogies: [
        'The middle ear is like a room with one window (eardrum) and one door (Eustachian tube). When the door is blocked, pressure and fluid build up.',
        'Tympanostomy tubes are like adding a second door to the room - they give fluid another way out.',
      ],
    },
    3: {
      level: 3,
      summary: 'Otitis media encompasses a spectrum from acute bacterial/viral infection to chronic effusive disease, requiring systematic evaluation of tympanic membrane findings, appropriate antibiotic stewardship, and timely surgical intervention when indicated.',
      explanation: `## Pathophysiology in Detail

### Eustachian Tube Dysfunction (ETD)

**Anatomical Factors:**
- Infant ET: 10mm long, 10° from horizontal
- Adult ET: 36mm long, 45° from horizontal
- Cartilaginous support increases with age

**Functional Obstruction:**
- Mucosal edema from viral URI
- Adenoid hypertrophy
- Allergic inflammation
- Ciliary dysfunction

**Physiologic Obstruction:**
- Tensor veli palatini dysfunction
- Cleft palate (absent muscular action)

### Biofilm Formation
- Bacteria form biofilms on middle ear mucosa
- Protected from antibiotics and immune system
- Contributes to recurrent/chronic infections
- Detected in 80%+ of chronic OME surgical specimens

### Immunologic Factors
- Middle ear mucosa has secretory IgA
- Local immune response develops with repeated exposure
- Immunodeficiency (IgA, IgG subclass) increases risk
- Breast milk provides protective antibodies

## Microbiology

### Acute Otitis Media Pathogens

| Organism | Frequency | Resistance Concerns |
|----------|-----------|---------------------|
| S. pneumoniae | 25-50% | Penicillin intermediate/resistant |
| H. influenzae | 15-30% | Beta-lactamase positive (30-50%) |
| M. catarrhalis | 10-20% | Beta-lactamase positive (>90%) |
| S. pyogenes | 2-5% | Susceptible to penicillin |
| S. aureus | 1-2% | Consider if otorrhea |

**Viral Pathogens:**
- RSV, rhinovirus, influenza, adenovirus
- Often coinfection with bacteria
- Pure viral OM may resolve spontaneously

### Chronic/Recurrent OM
- Similar pathogens but more resistant strains
- P. aeruginosa in chronic suppurative OM
- Biofilm-forming strains
- Polymicrobial in CSOM

## Clinical Assessment

### Otoscopic Examination Technique
1. Choose appropriate speculum size
2. Straighten ear canal (pull pinna posterosuperiorly in adults, posteroinferiorly in children)
3. Identify landmarks: malleus handle, umbo, light reflex, pars flaccida
4. Assess TM color, position, translucency, mobility

### Differentiating AOM from OME

| Feature | AOM | OME |
|---------|-----|-----|
| Onset | Acute | Insidious |
| Pain | Present | Absent/minimal |
| Fever | Often present | Absent |
| TM position | Bulging | Retracted or neutral |
| TM color | Erythematous, opaque | Amber, air-fluid level |
| Systemic symptoms | Present | Absent |

### Severity Classification (AOM)

**Severe AOM:**
- Temperature ≥39°C (102.2°F)
- Moderate to severe otalgia
- Duration >48 hours
- Toxic appearance

**Non-severe AOM:**
- Temperature <39°C
- Mild otalgia
- Duration <48 hours

## Antibiotic Management

### First-Line Therapy

**Standard-dose Amoxicillin (40-45 mg/kg/day):**
- Covers susceptible S. pneumoniae
- Adequate for most H. influenzae
- Historically first-line

**High-dose Amoxicillin (80-90 mg/kg/day):**
- Current AAP recommendation
- Covers intermediate-resistant S. pneumoniae
- Preferred in areas with high resistance rates

### Treatment Failure (No improvement at 48-72 hours)

**Options:**
1. Amoxicillin-clavulanate (90 mg/kg/day of amoxicillin component)
2. Ceftriaxone IM (50 mg/kg x 1-3 doses)
3. Tympanocentesis for culture

### Penicillin Allergy

**Non-severe allergy (non-IgE mediated):**
- Cefdinir, cefuroxime, cefpodoxime

**Severe allergy (IgE-mediated/anaphylaxis):**
- Azithromycin (limited pneumococcal coverage)
- Clarithromycin

### Duration of Therapy
- Age <2 years or severe: 10 days
- Age ≥2 years with mild-moderate: 5-7 days

## Surgical Management

### Myringotomy Alone
- Diagnostic tympanocentesis
- Culture-directed therapy
- Immediate pain relief
- Rarely needed with available antibiotics

### Tympanostomy Tubes

**Indications (AAO-HNS Guidelines):**

*Recurrent AOM:*
- ≥3 episodes in 6 months, OR
- ≥4 episodes in 12 months with ≥1 in past 6 months

*OME:*
- Duration ≥3 months AND
- Hearing loss present (≥25 dB)
- Bilateral OME typically requires shorter observation

**Types of Tubes:**
- Short-term (grommet): Extrudes in 6-18 months
- T-tubes (long-term): Removed surgically, for refractory cases

**Outcomes:**
- Reduces AOM episodes by ~1/year
- Improves hearing during tube function
- Otorrhea occurs in 15-25% (usually treatable)

### Adenoidectomy
- Consider with tube placement if adenoid hypertrophy
- Reduces OM recurrence in children >4 years
- Independent benefit in recurrent OM (even with small adenoids)

## Complications

### Mastoiditis
- Most common suppurative complication
- Infection spreads to mastoid air cells
- Signs: Postauricular swelling, tenderness, protrusion of auricle
- Treatment: IV antibiotics, possible mastoidectomy
- Imaging: CT temporal bone

### Cholesteatoma
- Keratinizing squamous epithelium in middle ear
- Can be congenital or acquired (retraction pocket)
- Erodes bone, causes hearing loss
- Requires surgical removal

### Intracranial Complications
- Meningitis (most common intracranial)
- Epidural abscess
- Brain abscess (temporal lobe, cerebellum)
- Lateral sinus thrombosis`,
      keyTerms: [
        { term: 'biofilm', definition: 'Bacterial community encased in protective matrix, resistant to antibiotics and immune clearance' },
        { term: 'beta-lactamase', definition: 'Bacterial enzyme that inactivates penicillins and some cephalosporins' },
        { term: 'tympanocentesis', definition: 'Needle aspiration of middle ear fluid for culture and relief of pressure' },
        { term: 'mastoiditis', definition: 'Infection of the mastoid air cells, a complication of otitis media requiring urgent treatment' },
        { term: 'cholesteatoma', definition: 'Destructive keratinized epithelial growth in the middle ear or mastoid' },
        { term: 'tensor veli palatini', definition: 'Muscle that opens the Eustachian tube during swallowing and yawning' },
      ],
      clinicalNotes: 'Always examine both ears in suspected AOM - bilateral disease is common and affects treatment decisions. Watch for mastoiditis if symptoms worsen despite antibiotics (postauricular swelling, protruding ear). Consider tympanocentesis in treatment failures or immunocompromised patients for culture-directed therapy.',
    },
    4: {
      level: 4,
      summary: 'Advanced management of otitis media requires understanding of evolving antimicrobial resistance patterns, indications for advanced imaging, surgical decision-making for tube placement and complications, and emerging prevention strategies including vaccination.',
      explanation: `## Advanced Pathophysiology

### Middle Ear Immune Environment

**Mucosal Immunity:**
- Middle ear mucosa transitions from simple cuboidal to respiratory epithelium with infection
- Goblet cell metaplasia increases mucin production
- Local B-cell response produces secretory IgA
- Toll-like receptors (TLR4, TLR2) recognize pathogens

**Cytokine Response:**
- IL-1β, IL-6, TNF-α drive inflammation
- IL-8 recruits neutrophils
- Excessive response contributes to tissue damage
- Genetic polymorphisms affect susceptibility (TNF-α, IL-6, TLR4)

### Biofilm Pathogenesis

**Biofilm Characteristics:**
- Polysaccharide matrix (alginate in P. aeruginosa)
- Quorum sensing coordinates bacterial behavior
- 10-1000x increased antibiotic resistance
- Persist despite apparently adequate therapy

**Clinical Implications:**
- Standard cultures may be negative
- Explains treatment failures
- May require physical disruption (surgery)
- Emerging anti-biofilm strategies

### Viral-Bacterial Interactions

**Synergistic Mechanisms:**
- Viral neuraminidase exposes bacterial adhesion sites
- Viral-induced epithelial damage enhances colonization
- Impaired mucociliary clearance
- Altered cytokine environment favors bacteria

**Clinical Relevance:**
- Antiviral therapy (influenza) may reduce AOM
- Vaccination prevents viral triggers

## Antimicrobial Stewardship

### Resistance Patterns

**S. pneumoniae:**
- Penicillin non-susceptible: 30-40% (varies by region)
- High-dose amoxicillin overcomes intermediate resistance
- Macrolide resistance: 25-40% (limits azithromycin utility)
- PCV13 reduced resistant serotypes

**H. influenzae:**
- Beta-lactamase positive: 30-50%
- Beta-lactamase negative ampicillin resistant (BLNAR): emerging
- Amoxicillin-clavulanate covers beta-lactamase producers

### Treatment Algorithms

**Initial AOM Treatment:**

Age <6 months → Antibiotics (any severity)
Age 6-23 months →
  - Bilateral → Antibiotics
  - Unilateral severe → Antibiotics
  - Unilateral non-severe → Observe or antibiotics
Age >=2 years →
  - Severe → Antibiotics
  - Non-severe → Observe or antibiotics

**Treatment Failure Protocol:**
1. Verify diagnosis (re-examine)
2. If on amoxicillin → amoxicillin-clavulanate or ceftriaxone IM
3. If on amoxicillin-clavulanate → ceftriaxone IM × 3 days
4. If still failing → tympanocentesis with culture, consider clindamycin

### Prophylactic Antibiotics

**Historical Use:**
- Amoxicillin 20 mg/kg once daily
- Reduces recurrence by ~50%

**Current Recommendations:**
- Generally NOT recommended (AAP, AAO-HNS)
- Promotes resistance
- Tympanostomy tubes preferred for recurrent AOM

## Surgical Decision-Making

### Tube Selection

**Short-term (Grommet) Tubes:**
- Collar-button shape (Shepard, Armstrong)
- Inner diameter 1.0-1.5 mm
- Extrusion: 6-18 months
- First-line for most cases

**Long-term (T-tube) Tubes:**
- Flanged design maintains position
- Duration: 2-4 years (requires removal)
- Indications: Atelectasis, persistent ETD, craniofacial anomalies

### Adenoidectomy Considerations

**Evidence for Addition to Tubes:**
- Meta-analyses show modest reduction in OM recurrence
- Greater benefit in children >4 years
- Benefit independent of adenoid size
- Consider if adenoid hypertrophy causing obstruction

### Surgical Outcomes

**Tube Complications:**
- Otorrhea: 15-25% (most respond to topical therapy)
- Persistent perforation: 1-3% (short-term), 10-15% (long-term tubes)
- Tympanosclerosis: 40-50% (usually no clinical significance)
- Cholesteatoma: <1%

**Hearing Outcomes:**
- Immediate improvement in conductive loss
- Long-term: No difference in language outcomes for OME (randomized trials)
- Unclear impact on school performance

## Advanced Imaging

### CT Temporal Bone

**Indications:**
- Suspected mastoiditis
- Intracranial complication concern
- Pre-operative planning (cholesteatoma)
- Post-traumatic evaluation

**Findings in Mastoiditis:**
- Clouding of mastoid air cells
- Coalescence (destruction of bony septae)
- Periosteal abscess
- Bezold abscess (SCM involvement)

### MRI

**Indications:**
- Suspected intracranial extension
- Cholesteatoma (DWI for recurrence)
- Facial nerve involvement

**Diffusion-Weighted Imaging:**
- Cholesteatoma restricts diffusion (bright)
- Differentiates from granulation tissue
- Post-operative surveillance

## Prevention Strategies

### Vaccination Impact

**Pneumococcal Conjugate Vaccines:**
- PCV7 (2000): ~6-7% reduction in AOM
- PCV13 (2010): Additional coverage
- Serotype replacement ongoing
- Net benefit: Reduced severe/invasive disease

**Influenza Vaccination:**
- Reduces AOM by ~30% during flu season
- Indirect benefit by preventing viral trigger
- AAP recommends annual vaccination ≥6 months

### Risk Factor Modification

**Evidence-Based:**
- Breastfeeding (≥3 months protective)
- Eliminate secondhand smoke exposure
- Reduce pacifier use after 6 months
- Avoid supine bottle feeding

**Limited Evidence:**
- Xylitol (may reduce in high-risk)
- Probiotics (insufficient evidence)

## Special Populations

### Cleft Palate
- Nearly 100% have OME
- Tensor veli palatini dysfunction
- Early tube placement standard
- Often need repeated tubes

### Down Syndrome
- Small Eustachian tube
- Immunologic differences
- High rate of chronic OME
- Hearing critical for development

### Native American/Alaska Native
- Highest OM rates worldwide
- Anatomic and socioeconomic factors
- High rates of chronic perforation
- Public health priority`,
      keyTerms: [
        { term: 'quorum sensing', definition: 'Bacterial cell-to-cell communication that coordinates biofilm behavior' },
        { term: 'BLNAR', definition: 'Beta-lactamase negative ampicillin resistant H. influenzae; emerging resistance mechanism' },
        { term: 'coalescent mastoiditis', definition: 'Destruction of bony septae between mastoid air cells, indicating surgical mastoiditis' },
        { term: 'Bezold abscess', definition: 'Abscess tracking into sternocleidomastoid muscle from mastoid tip' },
        { term: 'serotype replacement', definition: 'Emergence of non-vaccine serotypes following conjugate vaccine introduction' },
        { term: 'atelectasis', definition: 'Collapse or retraction of the tympanic membrane into the middle ear space' },
      ],
      clinicalNotes: 'CT temporal bone should be obtained emergently if mastoiditis is suspected clinically (postauricular swelling, tenderness, protruding pinna). MRI with DWI is the modality of choice for cholesteatoma surveillance. Consider genetic/immunologic workup in children with unusually recurrent or severe OM.',
    },
    5: {
      level: 5,
      summary: 'Expert management of otitis media integrates precision diagnostics, personalized antibiotic selection based on local resistance patterns, advanced surgical techniques for complications, and emerging therapies targeting biofilms and immune modulation.',
      explanation: `## Molecular Diagnostics and Personalized Medicine

### Microbiome Analysis

**Middle Ear Microbiome:**
- Traditionally considered sterile; now known to have microbiome
- Dysbiosis associated with recurrent OM
- Protective species (alpha-streptococci) may prevent colonization
- Therapeutic manipulation under investigation

**Nasopharyngeal Microbiome:**
- Reservoir for otopathogens
- Corynebacterium and Dolosigranulum inversely associated with AOM
- Breastfeeding shapes protective microbiome

### Genetic Susceptibility

**Host Genetic Factors:**
- Heritability of OM estimated at 40-70%
- Candidate genes: TLR4, TNF-α, IL-6, FBXO11
- GWAS identifying novel loci
- Future: Polygenic risk scores for prediction

**Pharmacogenomics:**
- CYP2C19 polymorphisms affect antibiotic metabolism
- Limited clinical application currently
- Potential for personalized dosing

### Point-of-Care Diagnostics

**Emerging Technologies:**
- Tympanic membrane imaging AI
- Optical coherence tomography
- Smartphone otoscopy with machine learning
- Middle ear gas analysis

## Advanced Antimicrobial Therapy

### Anti-Biofilm Strategies

**Current Research:**
- Dispersin B: Degrades biofilm matrix
- DNase: Disrupts eDNA scaffolding
- Quorum sensing inhibitors
- Bacteriophage therapy

**Clinical Application:**
- Not yet standard of care
- Potential for topical application post-myringotomy

### Novel Antibiotics

**Otopathogens:**
- Lefamulin: Pleuromutilin with pneumococcal activity
- Omadacycline: Covers resistant strains
- Limited pediatric data currently

**Topical Therapy for CSOM:**
- Ciprofloxacin/fluocinolone (Otovel)
- Ciprofloxacin/dexamethasone
- Non-ototoxic, effective first-line

### Duration Studies

**Short-Course Therapy:**
- 5 days noninferior to 10 days in children ≥2 years
- Reduces resistance pressure
- Trend toward shorter courses

## Advanced Surgical Techniques

### Balloon Eustachian Tuboplasty

**Procedure:**
- Transnasal dilation of ET cartilaginous portion
- Balloon inflation for 2 minutes
- FDA approved for adults (2016), children (2021)

**Outcomes:**
- Improves ETD symptoms
- May reduce tube reinsertion rates
- Long-term data accumulating

### Endoscopic Ear Surgery

**Applications in OM Complications:**
- Cholesteatoma excision
- Mastoidectomy
- Ossicular reconstruction

**Advantages:**
- Better visualization around corners
- Potentially less invasive
- Learning curve considerations

### Complex Reconstruction

**Ossiculoplasty:**
- PORP (partial ossicular replacement prosthesis)
- TORP (total ossicular replacement prosthesis)
- Titanium, ceramic, or autograft

**Tympanoplasty:**
- Type I: Myringoplasty alone
- Types II-IV: Ossicular reconstruction
- Type V: Fenestration (rarely done)

## Management of Complications

### Coalescent Mastoiditis

**Classification:**
- Acute mastoiditis with periosteitis
- Acute mastoid osteitis (coalescent)
- Subperiosteal abscess
- Chronic mastoiditis

**Surgical Management:**
- Cortical mastoidectomy for coalescent/abscess
- Wide meatoplasty
- +/- Tube placement
- IV antibiotics (coverage for S. aureus, Pseudomonas)

### Intracranial Complications

**Epidural Abscess:**
- CT: Lenticular collection displacing dura
- Urgent mastoidectomy with drainage
- Neurosurgical involvement for large collections

**Brain Abscess:**
- Most common location: Temporal lobe, cerebellum
- MRI with contrast: Ring-enhancing lesion
- Management: Aspiration/excision + IV antibiotics + mastoidectomy
- Mortality: 5-10% with modern treatment

**Lateral Sinus Thrombosis:**
- Classic "Picket fence" fever (spiking)
- CT venography or MR venography diagnostic
- Anticoagulation controversial
- Mastoidectomy with sinus exploration

### Facial Nerve Paralysis

**Acute OM with Facial Paralysis:**
- Usually from dehiscent fallopian canal
- Treatment: IV antibiotics + steroids
- Myringotomy/tubes to drain infection
- Mastoidectomy if not improving
- Prognosis generally good

## Emerging Prevention

### Vaccine Development

**Protein-Based Pneumococcal Vaccines:**
- Serotype-independent protection
- PhtD, PcpA candidates
- May overcome serotype replacement

**H. influenzae Vaccines:**
- Non-typeable H. influenzae (NTHi) vaccine
- Protein D conjugate showed efficacy
- Combination vaccines in development

**M. catarrhalis Vaccines:**
- Outer membrane protein targets
- Preclinical stage

### Immunomodulation

**Bacterial Lysates:**
- OM-85 (Broncho-Vaxom): Oral immunostimulant
- Meta-analyses show modest reduction in respiratory infections
- Variable effect on OM specifically

**Probiotics:**
- Streptococcus salivarius K12
- Nasopharyngeal colonization
- Limited evidence, needs further study

## Quality Metrics and Outcomes Research

### Appropriateness Criteria

**Antibiotic Prescribing:**
- HEDIS measure: Appropriate treatment of URI
- Target: Avoid antibiotics for viral illness
- AOM: Document severity, bilateral status

**Tube Placement:**
- HEDIS measure: Documentation of hearing assessment
- Appropriate documentation of recurrence/duration

### Long-Term Outcomes

**Speech and Language:**
- Early OME with hearing loss: Theoretical concern
- RCTs of tubes: No difference in language outcomes at school age
- May matter more in high-risk populations

**Academic Performance:**
- Association studies conflicting
- Confounded by socioeconomic factors
- Treatment may matter more in disadvantaged populations

**Quality of Life:**
- Validated instruments (OM-6, OMQ-14)
- Tubes improve QoL in chronic OME
- Parent satisfaction high with tubes`,
      keyTerms: [
        { term: 'balloon Eustachian tuboplasty', definition: 'Minimally invasive dilation of the Eustachian tube to treat chronic dysfunction' },
        { term: 'PORP', definition: 'Partial ossicular replacement prosthesis; reconstructs ossicular chain maintaining stapes' },
        { term: 'Gradenigo syndrome', definition: 'Petrous apicitis presenting with otorrhea, retro-orbital pain, and abducens palsy' },
        { term: 'dispersin B', definition: 'Enzyme that disrupts biofilm matrix; potential anti-biofilm therapeutic' },
        { term: 'NTHi', definition: 'Non-typeable Haemophilus influenzae; common otopathogen, vaccine target' },
        { term: 'OM-6', definition: 'Validated quality of life instrument specific to otitis media' },
      ],
      clinicalNotes: `Clinical decision points:

1. **Mastoiditis**: CT temporal bone emergently if postauricular swelling/tenderness present. Coalescent findings or abscess require surgical drainage.

2. **Facial paralysis with AOM**: Urgent myringotomy and IV antibiotics. Consider mastoidectomy if no improvement in 48-72 hours.

3. **Intracranial complications**: MRI/CT venography for suspected lateral sinus thrombosis. Neurosurgical involvement for brain abscess. Mortality risk requires aggressive management.

4. **Recalcitrant OME**: Consider balloon ET dilation in appropriate candidates after tube failure. Endoscopic approaches expanding.

5. **Chronic perforation**: Tympanoplasty when ear is dry, child old enough to avoid water exposure and cooperate with post-op care.

6. **Quality improvement**: Document severity and bilateral status to justify antibiotic use. Document hearing assessment before tubes.`,
    },
  },

  media: [
    {
      id: 'tympanic-membrane-aom',
      type: 'image',
      filename: 'bulging-erythematous-tm.jpg',
      title: 'Acute Otitis Media',
      description: 'Otoscopic view showing bulging, erythematous tympanic membrane',
    },
    {
      id: 'tympanogram-types',
      type: 'diagram',
      filename: 'tympanometry-patterns.svg',
      title: 'Tympanogram Patterns',
      description: 'Types A, B, C tympanograms with interpretations',
    },
    {
      id: 'tube-placement',
      type: 'diagram',
      filename: 'tympanostomy-tube-position.svg',
      title: 'Tympanostomy Tube',
      description: 'Cross-section showing tube in tympanic membrane',
    },
  ],

  citations: [
    {
      id: 'lieberthal-2013',
      type: 'article',
      title: 'The Diagnosis and Management of Acute Otitis Media',
      authors: ['Lieberthal, A.S.', 'et al.'],
      source: 'Pediatrics',
      page: 'e964-e999',
    },
    {
      id: 'rosenfeld-2016',
      type: 'article',
      title: 'Clinical Practice Guideline: Otitis Media with Effusion',
      authors: ['Rosenfeld, R.M.', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
    },
    {
      id: 'bluestone-2007',
      type: 'textbook',
      title: 'Pediatric Otolaryngology',
      authors: ['Bluestone, C.D.', 'Stool, S.E.'],
      source: 'BC Decker',
    },
  ],

  crossReferences: [
    { targetId: 'ent-ear-anatomy', targetType: 'structure', relationship: 'related', label: 'Ear Anatomy' },
    { targetId: 'ent-hearing-loss', targetType: 'condition', relationship: 'related', label: 'Hearing Loss' },
    { targetId: 'ent-otitis-externa', targetType: 'condition', relationship: 'sibling', label: 'Otitis Externa' },
    { targetId: 'peds-fever', targetType: 'condition', relationship: 'related', label: 'Pediatric Fever' },
  ],

  tags: {
    systems: ['auditory', 'immune'],
    topics: ['infection', 'pediatrics', 'surgery'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'surgery', 'family-medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default otitisMedia;
