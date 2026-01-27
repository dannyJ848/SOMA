/**
 * Otitis Media - Comprehensive Educational Content
 *
 * Covers acute otitis media (AOM), otitis media with effusion (OME),
 * diagnosis, treatment, and tympanostomy tube indications.
 */

import { EducationalContent } from '../../types';

export const otitisMedia: EducationalContent = {
  id: 'condition-otitis-media',
  type: 'condition',
  name: 'Otitis Media',
  alternateNames: ['Middle Ear Infection', 'AOM', 'OME', 'Ear Infection', 'Glue Ear'],
  hpoId: 'HP:0000370',

  levels: {
    1: {
      level: 1,
      summary: 'Otitis media is an infection or fluid buildup in the middle ear, the space behind the eardrum, common in children and causing ear pain and temporary hearing loss.',
      explanation: `## What is Otitis Media?

**The ear has three parts:**
1. **Outer ear** - The part you can see and the ear canal
2. **Middle ear** - The space behind the eardrum (where otitis media happens)
3. **Inner ear** - Deep inside, helps with balance and hearing

The middle ear is normally filled with air. It's connected to the back of your throat by a tiny tube called the Eustachian tube. This tube helps equalize pressure and lets fluid drain.

## Types of Otitis Media

**Acute Otitis Media (AOM):**
- Bacterial infection of the middle ear
- Happens quickly, often after a cold
- Causes ear pain, fever, and fussiness in children
- The eardrum looks red and bulging

**Otitis Media with Effusion (OME):**
- Fluid stays in the middle ear after an infection
- No active infection, just fluid remaining
- May cause mild hearing loss
- Often called "glue ear"

## Why Children Get More Ear Infections

Children get ear infections more than adults because:
- Their Eustachian tubes are shorter and more horizontal
- The tubes don't drain as well
- Their immune systems are still developing
- They're exposed to more germs at school and daycare

## Signs and Symptoms

**In babies and toddlers:**
- Pulling or rubbing the ear
- Crying more than usual
- Trouble sleeping
- Fever
- Not responding to sounds
- Fluid draining from the ear

**In older children and adults:**
- Ear pain
- Feeling of fullness or pressure
- Trouble hearing
- Fever

## Treatment

**For acute infections (AOM):**
- Rest and pain relief (acetaminophen or ibuprofen)
- Antibiotics may be prescribed for:
  - Babies under 6 months
  - Severe infections
  - Infections that don't improve after 2-3 days
- Many mild ear infections get better without antibiotics

**For fluid without infection (OME):**
- Time - fluid usually goes away on its own
- No antibiotics needed (no active infection)
- Hearing usually returns to normal

**Ear Tubes:**
- Tiny tubes placed in the eardrum by a doctor
- Help fluid drain and prevent future infections
- Used when fluid doesn't go away after 3+ months
- Usually fall out on their own after 6-18 months

## Prevention

- Breastfeed babies for at least 6 months
- Don't smoke around children
- Keep vaccines up to date (especially pneumococcal and flu)
- Avoid bottle feeding while lying flat`,
      keyTerms: [
        { term: 'otitis media', definition: 'Infection or inflammation of the middle ear, the space behind the eardrum' },
        { term: 'eardrum', definition: 'The thin tissue that separates the outer ear from the middle ear; also called the tympanic membrane' },
        { term: 'Eustachian tube', definition: 'The tube that connects the middle ear to the back of the throat, helping equalize pressure' },
        { term: 'effusion', definition: 'Fluid that collects in a body cavity; in the ear, fluid behind the eardrum' },
      ],
      analogies: [
        'The Eustachian tube is like a tiny straw that helps drain fluid from your middle ear to your throat.',
        'When you have a cold, swollen Eustachian tubes are like a kinked garden hose - fluid can\'t drain properly.',
        'Ear tubes work like a pop-up drain in a sink - they let fluid escape instead of getting trapped.',
      ],
      examples: [
        'A 2-year-old who had a cold for 3 days wakes up crying and pulling at their ear - this might be acute otitis media.',
        'After an ear infection heals, a child might still have fluid behind the eardrum for weeks, causing muffled hearing.',
      ],
      patientCounselingPoints: [
        'Most ear infections improve without antibiotics - watchful waiting is often appropriate',
        'Pain relief with acetaminophen or ibuprofen can help while the infection clears',
        'Complete all prescribed antibiotics if they are given to prevent resistance',
        'Keep follow-up appointments to ensure fluid has resolved',
        'Signs that need immediate evaluation: severe pain, high fever, swelling behind the ear, or drainage',
      ],
    },
    2: {
      level: 2,
      summary: 'Otitis media encompasses acute otitis media (AOM), a bacterial infection of the middle ear with rapid onset, and otitis media with effusion (OME), fluid accumulation without active infection, with distinct diagnostic and management approaches.',
      explanation: `## Anatomy and Pathophysiology

**The Middle Ear Space:**
- Air-filled cavity behind the tympanic membrane (eardrum)
- Contains the ossicles (malleus, incus, stapes) - the three smallest bones
- Connected to the nasopharynx via the Eustachian tube
- Normally contains air, not fluid

**Eustachian Tube Function:**
- Equalizes pressure between middle ear and atmosphere
- Drains normal secretions from the middle ear
- Protects middle ear from nasopharyngeal secretions

## Types of Otitis Media

### Acute Otitis Media (AOM)
- **Definition:** Rapid onset of middle ear inflammation with effusion and signs/symptoms of acute illness
- **Pathogens:**
  - Bacteria: *Streptococcus pneumoniae* (most common), *Haemophilus influenzae*, *Moraxella catarrhalis*
  - Viruses: RSV, rhinovirus, influenza (often precede bacterial infection)
- **Onset:** Typically following an upper respiratory infection

### Otitis Media with Effusion (OME)
- **Definition:** Fluid in the middle ear without signs or symptoms of acute infection
- **Duration:** May persist for weeks to months after AOM
- **Pathophysiology:** Eustachian tube dysfunction, residual inflammation
- **Impact:** Conductive hearing loss (typically 10-30 dB)

## Clinical Presentation

**Symptoms of AOM:**
- Otalgia (ear pain) - most common
- Irritability in infants
- Fever (present in ~50% of cases)
- Hearing loss or muffled hearing
- Decreased appetite
- Vomiting or diarrhea (especially in younger children)

**Signs of AOM on examination:**
- Bulging or fullness of the tympanic membrane
- Erythema (redness) of the eardrum
- Decreased or absent mobility of the tympanic membrane
- Opacity of the eardrum
- Occasionally: tympanic membrane perforation with purulent drainage

**OME Presentation:**
- Usually asymptomatic
- May present with hearing concerns or speech delay
- Physical exam: Fluid visible behind intact tympanic membrane
- No signs of acute infection (no fever, no pain)

## Risk Factors

**Age-related:**
- Peak incidence 6-18 months
- Rare after age 7 due to Eustachian tube maturation

**Environmental:**
- Daycare attendance
- Exposure to tobacco smoke (secondhand smoke)
- Bottle feeding while supine (lying flat)
- Seasonal (fall/winter peaks)

**Anatomic/medical:**
- Cleft palate
- Down syndrome
- Immunodeficiency
- Adenoid hypertrophy
- History of recurrent AOM

## Diagnosis

**Pneumatic Otoscopy (gold standard):**
- Evaluates tympanic membrane mobility
- Decreased mobility suggests fluid

**Otomicroscopy:**
- Magnified view of the tympanic membrane
- Better visualization than handheld otoscope

**Tympanometry:**
- Measures middle ear pressure and mobility
- Type A: Normal
- Type B: Flat (suggests fluid)
- Type C: Negative pressure (suggests Eustachian tube dysfunction)

**Acoustic Reflectometry:**
- Measures sound reflection from eardrum
- Useful when otoscopy is difficult

## Treatment

### Acute Otitis Media

**Pain Management:**
- Acetaminophen or ibuprofen
- Topical analgesic ear drops (if tympanic membrane intact)

**Antibiotic Therapy:**

| Age | Severe symptoms | Non-severe symptoms |
|-----|----------------|---------------------|
| < 6 months | Antibiotics | Antibiotics |
| 6 months - 2 years | Antibiotics | Antibiotics OR observation if diagnosis uncertain |
| > 2 years | Antibiotics | Observation option if non-severe |

**First-line antibiotics:**
- Amoxicillin 80-90 mg/kg/day divided BID
- If penicillin allergic: Cefdinir, cefuroxime, or cefpodoxime

**Antibiotic duration:**
- < 2 years or severe symptoms: 10 days
- 2-5 years, mild-moderate: 7 days
- > 6 years, mild-moderate: 5-7 days

**Treatment Failure:**
- Switch to amoxicillin-clavulanate (90 mg/kg/day of amoxicillin component)
- Consider ceftriaxone IM for 3 days if unable to tolerate oral

### Otitis Media with Effusion

**No antibiotics indicated** (no active bacterial infection)

**Management:**
- Observation for 3 months (most resolve spontaneously)
- Hearing test if persistent > 3 months
- Consider tympanostomy tubes if:
  - Bilateral effusion > 3 months with hearing loss
  - Unilateral effusion > 6 months with retraction pockets
  - At-risk children (speech delay, developmental delay)

### Tympanostomy Tubes

**Indications:**
- Recurrent AOM (3+ episodes in 6 months or 4+ in 12 months)
- Chronic OME with hearing loss > 3 months
- Complications: Mastoiditis, TM retraction, cholesteatoma

**Procedure:**
- Myringotomy (incision in tympanic membrane)
- Tube placement to ventilate middle ear
- Typically outpatient procedure with general anesthesia

**Tube types:**
- Short-term (grommet tubes): Fall out in 6-18 months
- Long-term (T-tubes): May require removal

**Precautions:**
- Avoid water submersion (earplugs for swimming)
- Prompt treatment of any otorrhea (ear drainage)

## Complications

**Acute complications:**
- Tympanic membrane perforation
- Acute mastoiditis (infection of mastoid bone)
- Meningitis (rare)
- Brain abscess (very rare)

**Chronic complications:**
- Chronic suppurative otitis media (persistent drainage > 6 weeks)
- Cholesteatoma (skin growth behind eardrum)
- Permanent hearing loss
- Speech and language delay (from prolonged hearing loss)`,
      keyTerms: [
        { term: 'acute otitis media', definition: 'Bacterial infection of the middle ear with rapid onset of symptoms and signs of inflammation', pronunciation: 'oh-TIE-tis MEE-dee-uh' },
        { term: 'otitis media with effusion', definition: 'Presence of fluid in the middle ear without signs or symptoms of acute infection; also called serous otitis media', pronunciation: 'eh-FEW-zhun' },
        { term: 'tympanic membrane', definition: 'The eardrum; a thin membrane separating the outer and middle ear that vibrates in response to sound waves' },
        { term: 'pneumatic otoscopy', definition: 'Examination of the ear using an otoscope with attached bulb to puff air and assess eardrum movement' },
        { term: 'tympanometry', definition: 'Test that measures movement of the eardrum in response to pressure changes; helps detect middle ear fluid' },
        { term: 'Eustachian tube', definition: 'Tube connecting the middle ear to the nasopharynx; equalizes pressure and drains fluid from the middle ear' },
      ],
      analogies: [
        'The middle ear is like a room with a door (Eustachian tube) that should open and close to regulate air pressure.',
        'When the Eustachian tube is blocked, it is like a door that is stuck shut - air cannot enter and fluid cannot exit.',
        'OME is like having a puddle in a room with no drain - the water stays until the door opens.',
      ],
    },
    3: {
      level: 3,
      summary: 'Otitis media is a spectrum of middle ear disease characterized by inflammation and effusion, involving Eustachian tube dysfunction, bacterial or viral pathogens, and requiring diagnostic precision to distinguish AOM from OME for appropriate management.',
      explanation: `## Pathophysiology

### Eustachian Tube Dysfunction

**Normal function:**
- Ventilation: Equilibrates middle ear pressure with atmosphere
- Drainage: Clears secretions via mucociliary clearance and ciliary action
- Protection: Prevents nasopharyngeal secretions from refluxing into middle ear

**Dysfunction mechanisms in AOM:**
1. **Obstruction:** Adenoid hypertrophy, inflammation, or anatomic obstruction
2. **Functional failure:** Impaired opening during swallowing or yawning
3. **Reflux:** Negative pressure draws nasopharyngeal secretions into middle ear

**Pediatric susceptibility:**
- Shorter, more horizontal Eustachian tubes
- Less cartilaginous support
- More frequent URIs (6-8 per year in daycare-attending children)
- Immature immune system

### Bacterial Pathogenesis

**Transcolonization:**
- Nasopharyngeal colonization with pathogenic bacteria precedes infection
- Viral URI causes Eustachian tube inflammation and dysfunction
- Negative middle ear pressure aspirates bacteria into the middle ear
- Bacteria multiply in the nutrient-rich fluid

**Common pathogens by frequency:**
| Bacteria | Frequency | Notes |
|----------|-----------|-------|
| *Streptococcus pneumoniae* | 40-50% | Most common, declining with vaccination |
| *Non-typable Haemophilus influenzae* | 30-40% | Beta-lactamase producing in ~30% |
| *Moraxella catarrhalis* | 10-15% | Beta-lactamase producing in >90% |
| *Streptococcus pyogenes* (Group A Strep) | < 5% | More common in older children |

**Viral coinfection:**
- Viruses identified in 25-50% of AOM cases
- Common: RSV, rhinovirus, influenza, adenovirus
- Viruses damage epithelium, impair clearance, promote bacterial adherence

### Otitis Media with Effusion Pathophysiology

**Post-AOM effusion:**
- Inflammatory exudate persists after infection resolves
- Mucosal metaplasia with increased goblet cells
- Impaired mucociliary clearance
- Eustachian tube dysfunction persists

**Negative middle ear pressure:**
- Gas absorption from middle ear space
- No gas replenishment due to obstructed Eustachian tube
- Results in vacuum effect transudating fluid

**Chronic inflammation:**
- Cytokine-mediated (IL-8, TNF-alpha)
- Biofilm formation (especially in recurrent OME)
- Bacterial DNA detected in ~30% of "sterile" effusions

## Diagnostic Criteria

### Acute Otitis Media (AAP 2013 Criteria)

**Required:**
1. Moderate to severe bulging of tympanic membrane OR new onset of otorrhea not due to acute otitis externa
2. PLUS recent onset of ear pain (holding, tugging, rubbing) OR distinct redness of tympanic membrane

**OR:**

Mild bulging of tympanic membrane PLUS recent onset of ear pain (holding, tugging, rubbing) OR intense erythema of tympanic membrane

**Distinguishing AOM from OME:**
| Finding | AOM | OME |
|---------|-----|-----|
| Symptoms (pain, fever) | Present | Absent |
| TM bulging | Moderate to severe | Mild or absent |
| TM erythema | Distinct, often intense | Normal or mild |
| TM mobility | Severely decreased | Decreased |
| Onset | Acute | Gradual/insidious |

**Otoscopic findings by severity:**
- **Normal:** Translucent, neutral position, mobile landmarks visible
- **OME:** Amber or gray fluid level, air-fluid bubbles, retracted TM
- **AOM mild:** Slight bulging, fullness, diminished landmarks
- **AOM severe:** Marked bulging (donut shape), obscured landmarks, intense erythema

### Tympanometry Interpretation

**Jerger classification:**
- **Type A (normal):** Peak pressure -100 to +100 daPa, high compliance
- **Type B (flat):** No peak, suggests fluid (effusion)
- **Type C (negative pressure):** Peak pressure < -100 daPa, suggests Eustachian tube dysfunction
- **Type As (shallow):** Reduced peak height, suggests stiffness/sclerosis
- **Type Ad (deep):** Tall peak, suggests hypermobile TM or scarring

**Limitations:**
- Cannot distinguish AOM from OME
- False positives with TM perforation or ventilation tubes
- Age-specific norms (infants have different compliance patterns)

## Treatment Algorithm

### AOM: Antibiotic Decision

**Immediate antibiotics:**
- Age < 6 months (regardless of severity)
- Age 6-24 months with unilateral AOM and severe symptoms OR bilateral AOM (regardless of severity)
- Age > 24 months with severe symptoms (otalgia > 48 hours, temperature ≥ 39°C)

**Observation option:**
- Age 6-24 months with unilateral, non-severe AOM and uncertain diagnosis
- Age > 24 months with non-severe AOM (bilateral or unilateral)

**Observation protocol:**
- Must ensure follow-up within 48-72 hours
- Provide analgesia
- Start antibiotics if no improvement or worsening

### Antibiotic Selection

**First-line: High-dose amoxicillin (80-90 mg/kg/day)**
- Rationale: Overcomes intermediate resistance of S. pneumoniae
- Achieves middle ear concentrations above MIC for resistant strains
- Divided BID dosing for compliance

**Amoxicillin-clavulanate (90 mg/kg/day amoxicillin + 6.4 mg/kg/day clavulanate):**
- Treatment failure after 48-72 hours of amoxicillin
- Severe illness with high fever
- Recent amoxicillin use within past 30 days
- Concurrent purulent conjunctivitis (H. influenzae more likely)

**Alternatives for penicillin allergy:**
- **Type I (anaphylaxis):** Cefdinir, cefuroxime, cefpodoxime (10% cross-reactivity) OR azithromycin OR clindamycin
- **Non-type I rash:** Cephalosporins appropriate

**Duration of therapy:**
| Age | Severity | Duration |
|-----|----------|----------|
| < 2 years | Any | 10 days |
| 2-5 years | Severe | 10 days |
| 2-5 years | Mild-moderate | 7 days |
| ≥ 6 years | Any | 5-7 days |

**Rationale:** Shorter courses for older children reduce antibiotic exposure while maintaining efficacy for mild-moderate disease.

### Treatment Failure

**Definition:**
- Worsening symptoms after 48-72 hours of antibiotics
- Failure to defervesce
- Persistent otalgia

**Management:**
- Switch to amoxicillin-clavulanate (if not already used)
- Consider ceftriaxone 50 mg/kg/day IM/IV for 3 days
- Re-evaluate diagnosis if poor response to second-line therapy

### OME Management

**Watchful waiting:**
- 90% resolve within 3 months post-AOM
- No antibiotics indicated
- Address modifiable risk factors (smoking exposure, bottle propping)

**When to intervene:**
- Bilateral effusion > 3 months with hearing deficit (≥ 20 dB)
- Unilateral effusion > 6 months with hearing deficit
- Structural changes (atelectasis, retraction pockets)
- At-risk children: Speech/language delay, autism, developmental delay, visual impairment, cleft palate

**Tympanostomy tube benefits:**
- Restore hearing to normal range
- Reduce AOM recurrence rate
- Improve quality of life measures
- Prevent speech and language delays

## Complications and Special Situations

**Mastoiditis:**
- Incidence: 1-2 per 100,000 in vaccinated populations
- Signs: Postauricular swelling, erythema, protruding auricle
- Treatment: IV antibiotics (ceftriaxone + vancomycin), possible mastoidectomy

**Tympanic membrane perforation:**
- Most heal spontaneously
- Keep ear dry, avoid ototoxic drops
- Refer to ENT if not healed within 3 months

**Recurrent AOM:**
- Definition: ≥3 episodes in 6 months or ≥4 in 12 months
- Consider prophylactic antibiotics (controversial due to resistance)
- Tympanostomy tubes most effective intervention`,
      keyTerms: [
        { term: 'pneumatic otoscopy', definition: 'Otoscopic examination using insufflation to assess tympanic membrane mobility; gold standard for diagnosing middle ear effusion' },
        { term: 'biofilm', definition: 'Community of bacteria embedded in extracellular matrix; implicated in chronic and recurrent otitis media' },
        { term: 'transcolonization', definition: 'Movement of bacteria from nasopharynx into middle ear via Eustachian tube dysfunction' },
        { term: 'myringotomy', definition: 'Surgical incision of the tympanic membrane to drain fluid or place ventilation tubes' },
        { term: 'tympanostomy tubes', definition: 'Small tubes inserted through tympanic membrane to ventilate middle ear and prevent fluid accumulation', pronunciation: 'tim-pah-NOSS-toh-mee' },
        { term: 'atelectasis', definition: 'Collapse or retraction of the tympanic membrane due to chronic negative middle ear pressure', pronunciation: 'at-eh-LEK-tah-sis' },
      ],
      clinicalNotes: 'AAP 2013 guidelines emphasize strict diagnostic criteria to avoid overdiagnosis of AOM. Bulging of the tympanic membrane is the most predictive finding. Watchful waiting is appropriate for many children, reducing antibiotic exposure by >30%. High-dose amoxicillin achieves concentrations adequate for penicillin-resistant S. pneumoniae in the middle ear.',
    },
    4: {
      level: 4,
      summary: 'Otitis media management requires accurate diagnostic differentiation between acute otitis media and otitis media with effusion, with evidence-based approaches to antibiotic therapy, observation, and surgical intervention including tympanostomy tubes and adenoidectomy.',
      explanation: `## Evidence-Based Diagnostic Strategies

### The Diagnostic Challenge

**Overdiagnosis epidemic:**
- Studies show 50-70% of AOM diagnoses in primary care do not meet strict criteria
- Consequences: Unnecessary antibiotic prescriptions, resistance, cost
- Root causes: Difficulty visualizing TM in crying children, cerumen obstruction, lack of pneumatic otoscopy

**Discriminative physical findings (likelihood ratios):**
| Finding | LR+ | LR- |
|---------|-----|-----|
| Severe TM bulging | 10.3 | 0.25 |
| TM erythema alone | 1.6 | 0.85 |
| Reduced TM mobility | 6.4 | 0.26 |
| New onset otorrhea | 7.1 | 0.37 |
| Parent report of ear tugging | 1.1 | 0.95 |

**Clinical pearl:** Bulging is the key finding. Without bulging, the diagnosis of AOM should be questioned.

### Pneumatic Otoscopy Training

**Technique:**
1. Proper speculum size (fills ear canal but not painful)
2. Seal ear canal with speculum
3. Squeeze bulb to deliver air puff
4. Observe TM movement

**Interpretation:**
- Normal: Distinct forward and backward movement
- Effusion: Diminished or absent movement
- Perforation: Air movement through TM

**Video otoscopy advantages:**
- Documentation of findings
- Education for parents and trainees
- Improved diagnostic accuracy
- Enables second-opinion review

## Treatment Evidence

### Delayed Antibiotic Strategy

**Meta-analysis (Cochrane 2023):**
- Number needed to treat (NNT) for pain resolution at 2-3 days: 16-20
- Number needed to harm (NNH) for adverse effects: 12-15
- Benefit primarily seen in children < 2 years, severe symptoms, or bilateral AOM

**Appropriate delayed antibiotic candidates:**
- Age ≥ 24 months
- Unilateral disease
- Non-severe symptoms
- Reliable follow-up available

**Safety-net antibiotic prescription:**
- Provide prescription with instructions to fill if not improved in 48-72 hours
- Reduces antibiotic use by ~60%
- No difference in parent satisfaction

### High-Dose Amoxicillin Rationale

**Pharmacodynamics:**
- Time-dependent killing above MIC
- Goal: Maintain middle ear concentrations > MIC for ≥40% of dosing interval
- Standard dose (40-45 mg/kg/day): Fails for intermediate-resistant S. pneumoniae
- High dose (80-90 mg/kg/day): Achieves adequate levels for MIC up to 2 mcg/mL

**S. pneumoniae resistance patterns:**
- Penicillin-susceptible (MIC ≤ 0.06): Standard dose adequate
- Penicillin-intermediate (MIC 0.12-1.0): Requires high dose
- Penicillin-resistant (MIC ≥ 2): May require clavulanate or alternative

**PCV13 vaccine impact:**
- Reduced vaccine-type S. pneumoniae AOM by 50-60%
- Shift toward non-vaccine serotypes and H. influenzae dominance
- Changing epidemiology may affect first-line choices in future

### Duration of Therapy Evidence

**Short-course (5 days) vs standard (10 days):**
- Non-inferiority shown in children ≥ 2 years with non-severe AOM
- Inferior outcomes in children < 2 years and severe AOM
- Lower rates of adverse events with shorter courses
- Reduced antibiotic resistance pressure

**Clinical decision framework:**
- Standard 10-day course: Age < 2 years, severe symptoms, recurrent AOM history
- 7-day course: Age 2-5 years, moderate symptoms
- 5-day course: Age ≥ 6 years, mild-moderate symptoms

## Surgical Intervention Evidence

### Tympanostomy Tubes

**Indications (AAO-HNS 2022 guidelines):**

| Indication | Evidence strength |
|-----------|-------------------|
| Bilateral OME ≥ 3 months with hearing loss | Strong recommendation |
| Unilateral OME ≥ 6 months with hearing loss | Recommendation |
| Recurrent AOM (≥3 in 6 mo or ≥4 in 12 mo) | Option |
| OME with structural TM changes | Recommendation |
| At-risk children (speech delay, syndromes) | Strong recommendation |

**Outcomes:**
- Average hearing improvement: 12-15 dB
- Mean duration of benefit: 9-14 months
- AOM recurrence reduction: 60-80%
- Quality of life improvement: Significant in validated measures

**Risks and complications:**
- Persistent perforation: 2-3%
- otorrhea: 15-30% (treated with otic drops)
- Tube blockage: 5-10%
- Early extrusion: 3-5%
- Need for replacement: 20-30%

**Tube selection:**
- **Short-term (grommet, beveled):** 6-18 months duration, lower complication rate
- **Long-term (T-tube, Armstrong):** 12-36+ months, higher perforation risk

**Post-operative care:**
- Water precautions: Controversial, individualize based on history
- otorrhea management: Ofloxacin or ciprofloxacin-dexamethasone otic drops
- Routine ENT follow-up every 6-12 months

### Adenoidectomy

**For recurrent AOM:**
- Randomized trials show benefit similar to tubes
- Consider if nasal obstruction or chronic adenoiditis
- May be combined with tube placement

**For chronic OME:**
- Benefit primarily in children ≥ 4 years
- Not routinely recommended for children < 4 years
- Recommended for revision tube surgery

**Evidence summary:**
- Adenoidectomy alone: 30-40% reduction in need for future tubes
- Adenoidectomy with tubes: Similar to tubes alone for OME, beneficial for recurrent AOM

## Special Populations

### Children with Cleft Palate

**Pathophysiology:**
- Palatal muscle dysfunction affects Eustachian tube opening
- Nearly universal OME in first years
- Higher risk of complications

**Management:**
- Early ENT involvement recommended
- Tympanostomy tubes often required
- Consider at time of palate repair surgery
- Aggressive monitoring for hearing impact

### Immunocompromised Children

**Higher risk for:**
- Severe AOM with resistant organisms
- Complications (mastoiditis, meningitis)
- Prolonged OME

**Management:**
- Lower threshold for antibiotics
- Consider broader coverage (amoxicillin-clavulanate first-line)
- Earlier consideration for surgical intervention

### Children with Cochlear Implants

**Special considerations:**
- Higher risk of acute mastoiditis and meningitis
- AOM may affect implant function

**Management:**
- Low threshold for systemic antibiotics
- Prompt ENT evaluation for AOM
- Consider otorrhea as implant infection until proven otherwise`,
      keyTerms: [
        { term: 'likelihood ratio', definition: 'Statistical measure of diagnostic test performance; LR+ increases probability of disease, LR- decreases probability' },
        { term: 'NNT', definition: 'Number needed to treat; number of patients who need treatment for one to benefit compared to control' },
        { term: 'NNH', definition: 'Number needed to harm; number of patients who need treatment for one to experience adverse effect' },
        { term: 'safety-net prescription', definition: 'Antibiotic prescription given but not to be filled immediately unless symptoms worsen or fail to improve' },
        { term: 'ofloxacin otic', definition: 'Fluoroquinolone ear drops; first-line for otorrhea in patients with tympanostomy tubes without ototoxicity' },
      ],
      clinicalNotes: 'High-dose amoxicillin (80-90 mg/kg/day) achieves middle ear concentrations adequate for penicillin-intermediate S. pneumoniae. For children with penicillin allergy type I, cefdinir (10% cross-reactivity) is preferred over macrolides due to superior eradication rates. Adenoidectomy reduces recurrent AOM rates similar to tubes, especially in children ≥ 4 years with nasal obstruction symptoms.',
    },
    5: {
      level: 5,
      summary: 'Contemporary otitis media management integrates diagnostic precision, evidence-based antibiotic stewardship, and individualized surgical decision-making, with evolving evidence on microbiology changing due to vaccination, emerging resistance patterns, and novel therapeutic approaches.',
      explanation: `## Current Guideline Synthesis

### AAP vs International Guidelines

| Aspect | AAP 2013 | NICE 2018 | Finnish 2020 |
|--------|----------|-----------|--------------|
| Observation eligible age | ≥6 months with specific criteria | ≥2 years | ≥2 years |
| First-line antibiotic | High-dose amoxicillin | Amoxicillin (standard dose) | Amoxicillin |
| Treatment duration | 5-10 days by age/severity | 5 days | 5 days (≥2y) |
| Tube threshold for OME | 3 months bilateral | 3 months with hearing loss | 3 months bilateral |
| Routine analgesia | Recommended | Recommended | Recommended |

**Key differences:**
- European guidelines more conservative with antibiotics
- Shorter treatment durations standard internationally
- Lower threshold for surgical intervention in some European systems

### Antibiotic Stewardship Principles

**1. Diagnostic certainty first:**
- Strict AAP criteria application
- Pneumatic otoscopy or tympanometry for equivocal cases
- Document bulging as key finding
- Avoid diagnosing AOM based on erythema alone

**2. Observation when appropriate:**
- Safety-net prescriptions reduce antibiotic use by 60%
- Parental education crucial
- Ensure reliable follow-up
- Clear red flags requiring reevaluation

**3. Optimal antibiotic selection:**
- High-dose amoxicillin for appropriate candidates
- Avoid broader spectrum when unnecessary
- De-escalate if culture data available
- Avoid macrolides for uncomplicated AOM (high resistance, inferior outcomes)

**4. Optimal duration:**
- Age and severity stratified
- 5-7 days for older children with mild-moderate disease
- Avoid automatic 10-day courses

## Evolving Microbiology

### Impact of PCV13 and PHiD-CV Vaccines

**Pre- vs post-vaccination era:**
- Vaccine-type S. pneumoniae AOM: Reduced 60-80%
- Overall AOM incidence: Reduced 15-25%
- H. influenzae now most common pathogen in many regions
- Increased non-vaccine serotypes (serotype replacement)

**Implications:**
- Beta-lactamase producing organisms more common
- Amoxicillin alone may be less effective in some communities
- Consider local resistance patterns when empiric therapy fails

### Emerging Resistance Patterns

**H. influenzae:**
- Beta-lactamase production: 30-40% in many regions
- Beta-lactamase negative ampicillin-resistant (BLNAR): Increasing in Asia
- Consider amoxicillin-clavulanate more frequently in high-prevalence areas

**M. catarrhalis:**
- Beta-lactamase production: >90%
- Usually copathogen, not primary cause

**S. pneumoniae:**
- PCV13 serotypes: Still cause most invasive disease but less AOM
- Non-vaccine serotypes: Increasing but generally more susceptible

### Future Directions

**Broader spectrum vaccines:**
- PCV15, PCV20: Additional serotypes including common AOM-causing strains
- Protein-based vaccines: Target conserved proteins across serotypes
- May further reduce AOM burden

**Microbiome considerations:**
- Nasopharyngeal microbiome dysbiosis precedes AOM
- Probiotic approaches under investigation
- Bacteriophage therapy for resistant strains

## Advanced Surgical Considerations

### Tympanostomy Tube Evidence

**Recurrent AOM:**
- Meta-analysis: 60-80% reduction in AOM episodes
- Number needed to treat: 2-3
- Greatest benefit in children with baseline ≥4 episodes/year
- Benefit persists 2+ years after tube extrusion

**OME with hearing loss:**
- Hearing improvement: Mean 12-15 dB
- Speech/language outcomes: Benefit primarily in at-risk children
- Quality of life: Significant improvements in validated scales

**Customizing tube selection:**
| Patient type | Recommended tube | Rationale |
|--------------|------------------|-----------|
| First-time tubes, no risk factors | Grommet/short-term | Lower complication rate |
| Recurrent OME after previous tubes | Long-term/T-tube | Longer ventilation period |
| Seasonal recurrent AOM | Short-term | Adequate for seasonal risk period |
| Craniofacial abnormalities | Long-term | Prolonged Eustachian dysfunction expected |
| Swimming athlete | Short-term or consider long-term with precautions | Individualize water protection |

**Water precautions controversy:**
- Meta-analysis: No significant difference in otorrhea rates with or without water precautions
- Surface swimming (no diving) without plugs reasonable for most patients
- Individualize based on history of otorrhea with water exposure
- Soapy water more problematic than clean water (surfactant effect)

### Adenoidectomy Evidence

**Indications with strongest evidence:**
1. **Revision tube surgery:** AAO-HNS recommendation
2. **Nasal obstruction:** From adenoid hypertrophy
3. **Chronic rhinosinusitis:** Adjunctive benefit
4. **Age ≥ 4 years with OME:** Clear benefit demonstrated

**Timing considerations:**
- Perform before or concurrent with tube placement
- Additional benefit if patient also has chronic adenoiditis
- Consider in children with chronic mouth breathing or snoring

**Concurrent tonsillectomy:**
- Only if obstructive sleep apnea also present
- No additional benefit for OME alone
- Increased morbidity without additional OME benefit

### Novel Approaches

**Laser-assisted myringotomy:**
- Creates longer-lasting perforation than simple myringotomy
- Alternative to tubes in selected cases
- Office-based procedure without general anesthesia
- Evidence limited but promising for select patients

**Balloon Eustachian tuboplasty:**
- Dilates Eustachian tube in cartilaginous portion
- Used primarily for chronic Eustachian tube dysfunction in adults
- Pediatric applications under investigation
- Limited availability, requires general anesthesia

## Controversies and Unresolved Questions

### Antibiotics for OME

**Current stance:** Not recommended

**Controversy:**
- Bacterial DNA and biofilms detected in many "sterile" effusions
- Small studies show some benefit with antibiotics
- Routine use not justified by current evidence
- May be considered in special circumstances (e.g., upcoming flights, surgery)

### Nasal Steroids for OME

**Evidence:**
- Meta-analysis: No significant benefit over placebo
- Not recommended in guidelines

**Potential future:**
- Subgroup analysis suggests possible benefit in atopic children
- Topical delivery via Eustachian tube under investigation

### Prophylactic Antibiotics for Recurrent AOM

**Historical practice:**
- Daily low-dose amoxicillin or sulfisoxazole during winter

**Current status:**
- Not recommended due to resistance concerns
- Tympanostomy tubes preferred for prevention
- May be considered in rare circumstances when surgery contraindicated

### Management of Asymptomatic OME

**Clinical dilemma:**
- Detected incidentally on well-child visits
- No reported hearing or speech concerns
- Observation reasonable regardless of duration in asymptomatic children
- Intervene if symptoms develop or hearing loss documented

## Quality Improvement Initiatives

### Diagnostic Accuracy Programs

**Components:**
1. Pneumatic otoscopy training
2. Video otoscopy documentation
3. Periodic diagnostic audits
4. Feedback to clinicians

**Results:**
- Reduced AOM diagnosis rates by 30-50%
- Reduced antibiotic prescriptions by similar magnitude
- No increase in complications
- Improved diagnostic confidence

### Patient Education Tools

**Effective strategies:**
- Visual aids showing TM appearance
- Written instructions for observation periods
- Clear explanation of when to seek care
- Safety-net prescription education

**Outcomes:**
- Improved adherence to observation
- Reduced unnecessary visits
- Higher parental satisfaction

### Antibiotic Prescribing Metrics

**Process measures:**
- Appropriate antibiotic selection (amoxicillin first-line)
- Appropriate dosing (high-dose for AOM)
- Appropriate duration by age/severity
- Observation rate when eligible

**Outcome measures:**
- AOM treatment failure rate
- AOM complications (mastoiditis)
- C. difficile rates (population level)
- Antibiotic resistance patterns (population level)`,
      keyTerms: [
        { term: 'serotype replacement', definition: 'Emergence of non-vaccine S. pneumoniae serotypes causing disease after vaccine introduction' },
        { term: 'BLNAR', definition: 'Beta-lactamase negative ampicillin-resistant H. influenzae; produces other resistance mechanisms beyond beta-lactamase' },
        { term: 'safety-net prescription', definition: 'Strategy where antibiotic prescription is provided but filled only if symptoms worsen or fail to improve' },
        { term: 'balloon Eustachian tuboplasty', definition: 'Endoscopic dilation of the Eustachian tube using balloon catheter for chronic ETD' },
        { term: 'antibiotic stewardship', definition: 'Coordinated interventions to improve and measure appropriate antibiotic use' },
      ],
      clinicalNotes: `Key clinical practice points:

1. **Diagnosis matters most:** Strictly apply AAP criteria. Bulging is the key finding. Without bulging, reconsider AOM diagnosis. Use pneumatic otoscopy or tympanometry for equivocal cases.

2. **High-dose amoxicillin works:** 80-90 mg/kg/day divided BID achieves middle ear concentrations adequate for penicillin-intermediate S. pneumoniae. This is NOT "high" in terms of toxicity - it is the effective dose based on PK/PD.

3. **Observation is safe:** For children ≥ 2 years with non-severe AOM, observation is appropriate. Provide a safety-net prescription. This reduces antibiotic use by 60% without increasing complications.

4. **Duration matters:** 5 days for ≥ 6 years with mild-moderate AOM, 7 days for 2-5 years with moderate symptoms, 10 days for < 2 years or severe AOM. Avoid automatic 10-day courses.

5. **Tubes for recurrent AOM:** ≥3 episodes in 6 months or ≥4 in 12 months meets criteria. Benefits: 60-80% reduction in episodes, NNT 2-3. Duration of benefit extends beyond tube extrusion.

6. **Tubes for OME:** Bilateral effusion ≥ 3 months with ≥ 20 dB hearing loss. Document hearing loss with audiometry, not just tympanometry.

7. **Water precautions optional:** Evidence does not show benefit for routine swimming. Surface swimming without plugs reasonable. Individualize based on history.

8. **Amoxicillin-clavulanate for failure:** Treatment failure = worsening at 48-72 hours or no improvement by day 3. Switch to high-dose amoxicillin-clavulanate.

9. **Adenoidectomy for revision:** Recommended for children undergoing second set of tubes. Also consider with first tubes if age ≥ 4 years and nasal obstruction.

10. **Avoid macrolades if possible:** High resistance rates (>50%), inferior eradication, no mortality benefit despite FDA warning. Use alternatives for penicillin allergy.`,
    },
  },

  media: [
    {
      id: 'ear-anatomy',
      type: 'diagram',
      filename: 'ear-anatomy.svg',
      title: 'Ear Anatomy',
      description: 'Cross-section of outer, middle, and inner ear showing Eustachian tube',
    },
    {
      id: 'otoscopy-findings',
      type: 'diagram',
      filename: 'otoscopy-findings.svg',
      title: 'Otoscopic Findings',
      description: 'Comparison of normal, AOM, and OME otoscopic appearances',
    },
    {
      id: 'tympanometry',
      type: 'diagram',
      filename: 'tympanometry-types.svg',
      title: 'Tympanometry Types',
      description: 'Type A, B, and C tympanogram tracings with interpretation',
    },
    {
      id: 'tympanostomy-tube',
      type: 'diagram',
      filename: 'tympanostomy-tube.svg',
      title: 'Tympanostomy Tube',
      description: 'Placement of ear tube through tympanic membrane',
    },
  ],

  citations: [
    {
      id: 'aap-aom-2013',
      type: 'article',
      title: 'The Diagnosis and Management of Acute Otitis Media',
      authors: ['Lieberthal AS', 'Carroll AE', 'Chonmaitree T', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2013-1774',
    },
    {
      id: 'aao-hns-ome-2022',
      type: 'article',
      title: 'Clinical Practice Guideline: Otitis Media with Effusion Update',
      authors: ['Schwartz SR', 'Cousins B', 'Corrigan MD', 'et al.'],
      source: 'Otolaryngology-Head and Neck Surgery',
      url: 'https://doi.org/10.1177/0194599822107783',
    },
    {
      id: 'uptodate-aom',
      type: 'article',
      title: 'Acute otitis media in children: Treatment',
      authors: ['Pelton SI', 'Klein JO'],
      source: 'UpToDate',
      accessedDate: '2025-01-26',
    },
  ],

  crossReferences: [
    { targetId: 'structure-external-ear', targetType: 'structure', relationship: 'related', label: 'External Ear' },
    { targetId: 'structure-middle-ear', targetType: 'structure', relationship: 'related', label: 'Middle Ear' },
    { targetId: 'structure-eustachian-tube', targetType: 'structure', relationship: 'related', label: 'Eustachian Tube' },
    { targetId: 'condition-sinusitis', targetType: 'condition', relationship: 'sibling', label: 'Sinusitis' },
    { targetId: 'condition-pharyngitis', targetType: 'condition', relationship: 'sibling', label: 'Pharyngitis' },
  ],

  tags: {
    systems: ['ent', 'respiratory'],
    topics: ['otolaryngology', 'pediatrics', 'infectious disease'],
    keywords: ['otitis media', 'ear infection', 'AOM', 'OME', 'tympanostomy tubes', 'Eustachian tube', 'hearing loss'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'family medicine'],
    },
  },

  createdAt: '2025-01-26T00:00:00.000Z',
  updatedAt: '2025-01-26T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default otitisMedia;
