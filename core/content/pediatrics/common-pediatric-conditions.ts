/**
 * Common Pediatric Conditions
 *
 * Educational content covering the most frequently encountered childhood
 * illnesses including otitis media, croup, bronchiolitis, febrile seizures,
 * Kawasaki disease, and intussusception with age-specific presentations.
 */

import { EducationalContent } from '../types';

export const COMMON_PEDIATRIC_CONDITIONS: EducationalContent = {
  id: 'pediatrics-common-conditions',
  type: 'topic',
  name: 'Common Pediatric Conditions',
  nameEs: 'Condiciones Pediátricas Comunes',
  alternateNames: [
    'Common childhood illnesses',
    'Pediatric diseases',
    'Childhood infections and emergencies',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'Children get sick with different illnesses than adults. Knowing common childhood illnesses helps parents understand when to call the doctor and when to treat at home.',
      explanation: `Children, especially young ones, get many infections and illnesses as their immune systems are still learning. Here are some of the most common ones:

**Ear Infections (Otitis Media)**
- Very common in babies and toddlers
- Signs: pulling at ears, fever, fussiness, trouble sleeping
- Caused by germs getting trapped behind the eardrum
- Usually treated with pain medicine; sometimes antibiotics are needed
- Most children outgrow frequent ear infections by age 3-4

**Croup (Barking Cough)**
- Makes a harsh "barking" cough, like a seal
- The voice box and windpipe get swollen
- Usually worse at night
- Cool mist or steam can help
- Most children recover in a few days
- Go to the ER if your child is struggling to breathe

**Bronchiolitis**
- A chest cold common in babies, especially in winter
- Caused by a virus called RSV (respiratory syncytial virus)
- Starts like a regular cold, then breathing becomes difficult
- Wheezing and fast breathing are common
- Most babies recover at home, but some need hospital care

**Febrile Seizures (Fever Seizures)**
- Happen when a child has a high fever
- Very scary to watch, but usually not dangerous
- Most common between ages 6 months and 5 years
- The child may shake, stiffen, or lose consciousness briefly
- Call 911 if the seizure lasts more than 5 minutes

**Kawasaki Disease**
- Causes high fever lasting 5+ days
- Red eyes, red lips, rash, swollen hands and feet
- Can affect the heart if not treated
- Treated in the hospital with special medicine (IVIG)
- Most children recover completely with treatment

**Intussusception (Telescoping Bowel)**
- Part of the intestine slides into another part
- Causes sudden, severe belly pain that comes and goes
- The child may draw up their knees and cry
- "Currant jelly" stool (blood and mucus) is a warning sign
- Needs emergency medical treatment

**When to Call the Doctor Right Away**
- Trouble breathing or fast breathing
- High fever in a baby under 3 months
- Not drinking fluids or making wet diapers
- Seizure lasting more than 5 minutes
- Severe belly pain
- Child seems very sick or not responding normally`,
      keyTerms: [
        {
          term: 'ear infection',
          definition: 'An infection behind the eardrum that causes pain and sometimes fever, very common in young children',
        },
        {
          term: 'croup',
          definition: 'An illness causing swelling of the voice box that makes a barking cough, usually worse at night',
        },
        {
          term: 'bronchiolitis',
          definition: 'A chest infection in babies caused by a virus that makes breathing difficult',
        },
        {
          term: 'febrile seizure',
          definition: 'A seizure caused by a high fever in a young child, usually not harmful',
        },
      ],
      analogies: [
        'An ear infection is like water trapped behind a dam - the fluid builds up pressure and causes pain.',
        'Croup is like trying to breathe through a straw that has gotten narrower - it makes a noise when you breathe in.',
        'Intussusception is like pushing a telescope together - one part of the intestine slides inside another.',
      ],
      patientCounselingPoints: [
        'Febrile seizures, while scary, do not cause brain damage or epilepsy in the vast majority of cases.',
        'For croup, cool night air or steam from a hot shower can help open the airway.',
        'Not every ear infection needs antibiotics - your doctor will decide the best treatment.',
        'If your child has a fever lasting more than 5 days with red eyes and rash, seek medical care immediately (possible Kawasaki disease).',
      ],
    },
    2: {
      level: 2,
      summary:
        'Common pediatric conditions have age-specific presentations and evidence-based management guidelines. Recognizing characteristic patterns aids timely diagnosis and appropriate treatment.',
      explanation: `**Acute Otitis Media (AOM)**

*Epidemiology:*
- Peak incidence: 6-24 months
- 80% of children have at least one episode by age 3
- Risk factors: daycare, bottle propping, pacifier use, secondhand smoke, lack of breastfeeding

*Diagnosis:*
- Moderate-severe bulging of tympanic membrane (TM)
- New onset otorrhea (ear drainage)
- Mild bulging + recent ear pain or erythema
- Pneumatic otoscopy: decreased TM mobility

*Treatment (AAP 2013 Guidelines):*
| Age | Unilateral, Non-Severe | Bilateral or Severe |
|-----|------------------------|---------------------|
| <6 months | Antibiotics | Antibiotics |
| 6-23 months | Observation option* | Antibiotics |
| ≥2 years | Observation option* | Observation option* |

*Observation = watchful waiting 48-72 hours with pain management
- First-line antibiotic: Amoxicillin 80-90 mg/kg/day
- If treatment failure: Amoxicillin-clavulanate
- Recurrent AOM (≥3 in 6 months or ≥4 in 12 months): consider tympanostomy tubes

---

**Croup (Laryngotracheobronchitis)**

*Epidemiology:*
- Peak age: 6 months to 3 years
- Most common cause: Parainfluenza virus (types 1 and 3)
- Seasonal: Fall and early winter

*Clinical Presentation:*
- URI prodrome (1-2 days)
- Barking cough (seal-like)
- Inspiratory stridor
- Hoarse voice
- Symptoms worse at night

*Westley Croup Score:*
| Feature | Score |
|---------|-------|
| Stridor | 0 (none) - 2 (at rest) |
| Retractions | 0 (none) - 3 (severe) |
| Air entry | 0 (normal) - 2 (severely decreased) |
| Cyanosis | 0 (none) - 5 (with agitation/at rest) |
| Consciousness | 0 (normal) - 5 (disoriented) |

*Management:*
| Severity | Treatment |
|----------|-----------|
| Mild (score ≤2) | Cool mist, dexamethasone 0.6 mg/kg PO x1 |
| Moderate (3-7) | Dexamethasone + nebulized racemic epinephrine |
| Severe (≥8) | Dexamethasone + nebulized epinephrine + observation ≥2-4 hours |

---

**Bronchiolitis**

*Epidemiology:*
- Peak age: 2-6 months
- RSV causes 50-80% of cases
- Other: rhinovirus, metapneumovirus, adenovirus
- Peak season: November-March (Northern hemisphere)

*Clinical Presentation:*
- URI prodrome → cough, wheezing, tachypnea
- Increased work of breathing (nasal flaring, retractions)
- Difficulty feeding
- Apnea (especially in young infants and ex-preterm)

*Management (AAP 2014 Guidelines):*
- Supportive care is mainstay:
  - Nasal suctioning
  - Oxygen if SpO2 <90% (per 2014 guidelines)
  - IV fluids or NG feeds if unable to feed
- NOT recommended: Albuterol, steroids, antibiotics, chest physiotherapy
- Palivizumab prophylaxis for high-risk infants (preterm <29 weeks, BPD, hemodynamically significant CHD)
- Nirsevimab (2023): single-dose monoclonal antibody for all infants entering their first RSV season

*Admission Criteria:*
- SpO2 <90-92%
- Significant respiratory distress
- Inadequate oral intake
- Apnea
- Age <12 weeks or prematurity

---

**Febrile Seizures**

*Epidemiology:*
- Affect 2-5% of children ages 6 months to 5 years
- Peak incidence: 12-18 months
- Often associated with HHV-6, influenza

*Classification:*
| Feature | Simple | Complex |
|---------|--------|---------|
| Duration | <15 minutes | ≥15 minutes |
| Type | Generalized | Focal features |
| Frequency | Once in 24 hours | >1 in 24 hours |
| Post-ictal | Brief | Prolonged or focal deficit |

*Management:*
- Simple febrile seizure: No workup needed in well-appearing child 6-60 months with no concerning features
- Complex febrile seizure: Consider EEG, imaging, and LP depending on clinical scenario
- Recurrence risk: ~33% after first simple febrile seizure
- Epilepsy risk: 1-2% (simple) vs 4-6% (complex)
- Antipyretics do NOT prevent febrile seizures

---

**Kawasaki Disease**

*Epidemiology:*
- Peak age: 6 months to 5 years
- Leading cause of acquired heart disease in children (developed countries)
- Higher incidence in Asian populations

*Diagnostic Criteria (Classic):*
Fever ≥5 days PLUS ≥4 of:
1. Bilateral nonexudative conjunctival injection
2. Oral mucous membrane changes (strawberry tongue, cracked lips)
3. Polymorphous rash
4. Extremity changes (edema, erythema → periungual desquamation)
5. Cervical lymphadenopathy (≥1.5 cm, usually unilateral)

*Incomplete Kawasaki:*
- Fever ≥5 days + 2-3 criteria
- Common in infants <12 months (highest risk for coronary complications)
- Labs and echo help confirm diagnosis

*Treatment:*
| Timing | Treatment |
|--------|-----------|
| Acute (within 10 days) | IVIG 2 g/kg + high-dose aspirin (80-100 mg/kg/day) |
| After fever resolves | Low-dose aspirin (3-5 mg/kg/day) for 6-8 weeks |
| IVIG-resistant | Second IVIG dose, infliximab, or corticosteroids |

*Cardiac Complications:*
- Coronary artery aneurysms in 25% if untreated, <5% if treated
- Echocardiography at diagnosis, 2 weeks, 6-8 weeks
- Long-term follow-up based on coronary artery involvement

---

**Intussusception**

*Epidemiology:*
- Peak age: 5-9 months (most common 6-36 months)
- Male > Female (3:2)
- Most common cause of bowel obstruction in infants
- Ileocolic type most common

*Clinical Presentation:*
- Classic triad (present in <50%):
  1. Intermittent colicky abdominal pain (drawing up legs)
  2. Vomiting
  3. "Currant jelly" stool (blood and mucus)
- Palpable "sausage-shaped" mass (right upper quadrant)
- Dance sign: empty right lower quadrant
- Lethargy between episodes

*Diagnosis:*
- Ultrasound: "target sign" or "doughnut sign" (concentric rings)
- Sensitivity 98-100%, specificity 88-100%

*Management:*
| Step | Intervention |
|------|-------------|
| Initial | IV fluids, NG decompression, surgical consult |
| Non-operative | Air or contrast enema reduction (90-95% success) |
| Failure/peritonitis | Operative reduction or resection |

*Recurrence:* ~10% after successful enema reduction
*Lead points:* Consider in children >3 years (Meckel diverticulum, lymphoma, polyp, HSP)`,
      keyTerms: [
        {
          term: 'acute otitis media',
          definition: 'Infection of the middle ear space characterized by bulging tympanic membrane, effusion, and acute symptoms',
          pronunciation: 'oh-TY-tis MEE-dee-uh',
        },
        {
          term: 'RSV',
          definition: 'Respiratory Syncytial Virus; the most common cause of bronchiolitis in infants',
        },
        {
          term: 'Westley croup score',
          definition: 'Scoring system for croup severity based on stridor, retractions, air entry, cyanosis, and consciousness',
        },
        {
          term: 'IVIG',
          definition: 'Intravenous immunoglobulin; the primary treatment for Kawasaki disease to prevent coronary artery complications',
        },
        {
          term: 'intussusception',
          definition: 'Telescoping of one segment of bowel into an adjacent segment, most commonly ileocolic in infants',
          pronunciation: 'in-tuh-suh-SEP-shun',
        },
      ],
      analogies: [
        'An air enema for intussusception is like inflating a balloon inside the intestine to push the telescoped segment back out.',
        'Kawasaki disease attacks blood vessels like a fire burning the walls of a tunnel - if not treated quickly, the damage can be permanent.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Clinical management of common pediatric conditions requires understanding underlying pathophysiology, applying evidence-based guidelines, recognizing atypical presentations, and identifying patients requiring escalation of care.',
      explanation: `**Otitis Media — Advanced Management**

*Pathophysiology:*
- Eustachian tube dysfunction → negative middle ear pressure → effusion → bacterial superinfection
- Infant ET shorter, more horizontal, more compliant
- Biofilm formation on adenoid tissue serves as bacterial reservoir
- Common pathogens: S. pneumoniae (decreasing with PCV13), Non-typeable H. influenzae, M. catarrhalis

*Complications:*
| Complication | Features | Management |
|-------------|----------|------------|
| Mastoiditis | Postauricular swelling, erythema, protrusion of pinna | IV antibiotics ± mastoidectomy |
| TM perforation | Otorrhea, pain relief | Usually self-heals; topical antibiotics |
| Cholesteatoma | Chronic drainage, hearing loss | Surgical excision |
| Intracranial extension | Meningitis, brain abscess | Emergent neurosurgical consultation |

*Otitis Media with Effusion (OME):*
- Fluid without acute infection
- 90% resolve within 3 months
- Watchful waiting 3 months → audiometry → tympanostomy tubes if persistent + hearing loss
- Antihistamines, decongestants, steroids NOT effective

---

**Croup — Differential and Complications**

*Differential Diagnosis:*
| Condition | Distinguishing Features |
|-----------|------------------------|
| Croup | Gradual onset, barking cough, low-grade fever |
| Epiglottitis | Abrupt, high fever, drooling, toxic appearance, tripod positioning |
| Bacterial tracheitis | Initially viral croup → acute deterioration, high fever, purulent secretions |
| Foreign body | Sudden onset, no prodrome, unilateral findings possible |
| Retropharyngeal abscess | Neck stiffness, drooling, refusal to eat, unilateral neck swelling |
| Peritonsillar abscess | Older child, trismus, "hot potato" voice, uvular deviation |

*Spasmodic Croup:*
- Sudden nighttime onset without URI prodrome
- No fever
- Recurrent episodes
- May have allergic/atopic component
- Management same as viral croup

*Dexamethasone Pharmacology in Croup:*
- Mechanism: Reduces subglottic edema via anti-inflammatory effects
- Onset: 2-3 hours (oral); peak benefit 6 hours
- Duration: 36-72 hours (long half-life)
- Single dose sufficient (0.6 mg/kg, max 16 mg)
- 0.15 mg/kg shown non-inferior in many studies

---

**Bronchiolitis — Pathophysiology and Evidence Updates**

*Pathophysiology:*
- Viral infection → airway epithelial necrosis → inflammatory cell infiltration → edema and mucus production → small airway obstruction → air trapping and atelectasis
- Disproportionate effect on small airways (infants)
- Inflammatory mediators: IL-6, IL-8, TNF-alpha, leukotrienes

*Evidence Against Common Interventions:*
| Intervention | Evidence |
|-------------|----------|
| Bronchodilators (albuterol) | No benefit in RCTs; may worsen tachycardia |
| Systemic corticosteroids | No benefit; multiple large RCTs negative |
| Hypertonic saline (3%) | Modest benefit in inpatients (reduces LOS by ~1 day); not for ED use |
| Chest physiotherapy | No benefit |
| Antibiotics | No benefit unless bacterial superinfection |
| Oxygen target | SpO2 ≥90% sufficient (BIDS trial); higher thresholds increase LOS |

*High-Flow Nasal Cannula (HFNC):*
- Increasingly used for moderate-severe bronchiolitis
- Provides humidified heated oxygen with mild CPAP effect
- May reduce intubation rates
- Typical flow: 2 L/kg/min
- Not clearly superior to standard oxygen in all trials

---

**Febrile Seizures — Pathophysiology and Genetics**

*Pathophysiology:*
- Immature thermoregulatory set point
- Rapid rise in temperature more important than peak temperature
- Developing brain has lower seizure threshold
- Pro-inflammatory cytokines (IL-1beta) lower seizure threshold
- Genetic susceptibility: 10-20% have family history

*Genetic Loci:*
| Locus | Gene | Inheritance |
|-------|------|-------------|
| FEB1 | 8q13-21 | Autosomal dominant |
| FEB2 | 19p | Autosomal dominant |
| FEB3 | 2q24 (SCN1A region) | Variable |
| GEFS+ | SCN1A, SCN1B, GABRG2 | Autosomal dominant |

*Febrile Status Epilepticus:*
- Febrile seizure lasting ≥30 minutes
- FEBSTAT study findings:
  - Acute MRI changes in hippocampus (especially with focal features)
  - Association with later mesial temporal sclerosis
  - HHV-6 commonly identified
  - Follow-up shows increased epilepsy risk (~15%)

*LP Indications in Febrile Seizure:*
| Scenario | LP Recommendation |
|----------|-------------------|
| 6-12 months, unimmunized for Hib/PCV | Consider |
| Already on antibiotics | Consider (partially treated meningitis) |
| Complex febrile seizure | Consider based on clinical assessment |
| Meningeal signs | Perform |
| Well-appearing, simple FS, up-to-date vaccines | Not indicated |

---

**Kawasaki Disease — Pathogenesis and Advanced Management**

*Pathogenesis:*
- Unknown trigger (? infectious) in genetically susceptible host
- Immune activation → vasculitis affecting medium-sized muscular arteries
- Inflammatory infiltrate: CD8 T cells, macrophages, IgA plasma cells
- Coronary artery inflammation → destruction of internal elastic lamina → aneurysm formation
- Genetic susceptibility: ITPKC, CASP3, BLK polymorphisms

*Laboratory Findings:*
| Phase | Expected Findings |
|-------|-------------------|
| Acute (weeks 1-2) | Elevated CRP/ESR, neutrophilia, elevated AST/ALT, sterile pyuria, thrombocytosis (late) |
| Subacute (weeks 2-4) | Thrombocytosis (peak), desquamation, coronary aneurysms may appear |
| Convalescent (weeks 4-8) | Labs normalizing, ESR may remain elevated |

*Incomplete Kawasaki Disease Algorithm:*
Fever ≥5 days + 2-3 criteria → Check:
- CRP ≥3 mg/dL or ESR ≥40 mm/hr → If yes:
  - ≥3 supplemental criteria (albumin ≤3, anemia, elevated ALT, platelets >450K after day 7, WBC ≥15K, urine WBC ≥10/hpf) → Treat as KD
  - <3 supplemental criteria → Echocardiogram; if positive → Treat

*Risk Stratification (Kobayashi Score — Japanese):*
- Predicts IVIG resistance
- Criteria: Na <133, AST >100, WBC >12K, CRP >10, age <12 months, platelets <300K, treatment before day 5

---

**Intussusception — Pathophysiology and Lead Points**

*Pathophysiology:*
- Peristalsis propels proximal bowel (intussusceptum) into distal bowel (intussuscipiens)
- Mesenteric vascular compromise → venous congestion → edema → arterial compromise → ischemia → necrosis
- "Currant jelly" stool = mucosal ischemia with blood and mucus

*Lead Points by Age:*
| Age | Most Common Lead Point |
|-----|----------------------|
| <3 years | Idiopathic (hypertrophied Peyer patches; often post-viral) |
| 3-6 years | Meckel diverticulum, polyp, HSP (Henoch-Schonlein purpura) |
| >6 years | Lymphoma, polyps, Meckel diverticulum |

*Enema Reduction Techniques:*
| Method | Advantages | Success Rate |
|--------|------------|-------------|
| Air enema | Lower perforation risk, better radiation profile | 85-95% |
| Hydrostatic (barium/saline) | Therapeutic + diagnostic | 80-90% |
| Ultrasound-guided saline | No radiation | 85-95% |

*Contraindications to Enema Reduction:*
- Peritonitis
- Perforation
- Hemodynamic instability
- Prolonged symptoms (>48 hours relative contraindication)

*Surgical Indications:*
- Failed enema reduction
- Peritonitis or perforation
- Identified pathologic lead point
- Multiple recurrences`,
      keyTerms: [
        {
          term: 'biofilm',
          definition: 'Organized bacterial community on adenoid tissue that serves as a reservoir for recurrent otitis media pathogens',
        },
        {
          term: 'bacterial tracheitis',
          definition: 'Bacterial superinfection of the trachea, often following viral croup, presenting with acute deterioration, high fever, and purulent secretions; a true airway emergency',
        },
        {
          term: 'GEFS+',
          definition: 'Genetic Epilepsy with Febrile Seizures Plus; autosomal dominant syndrome where febrile seizures persist beyond age 5 or evolve to afebrile seizures',
        },
        {
          term: 'Kobayashi score',
          definition: 'Risk stratification tool for predicting IVIG resistance in Kawasaki disease based on laboratory and clinical parameters',
        },
        {
          term: 'Peyer patches',
          definition: 'Organized lymphoid tissue in the ileal wall; hypertrophy after viral infection is the most common lead point for idiopathic intussusception in young children',
        },
        {
          term: 'intussusceptum',
          definition: 'The proximal segment of bowel that telescopes into the distal segment (intussuscipiens) in intussusception',
        },
      ],
      clinicalNotes:
        'Epiglottitis is now rare but still exists — suspect in any unvaccinated child with acute stridor, drooling, and toxic appearance. Do NOT examine the throat; secure the airway first. Bacterial tracheitis is the most common life-threatening croup mimic. Incomplete Kawasaki disease is most common in infants <12 months, who paradoxically have the highest coronary risk — maintain a low threshold for echocardiography. For intussusception, ultrasound is the preferred initial imaging; CT is rarely needed.',
    },
    4: {
      level: 4,
      summary:
        'Advanced pediatric management integrates molecular pathogenesis, pharmacogenomics, evolving treatment algorithms, long-term outcomes research, and recognition of rare but critical presentations requiring specialized care.',
      explanation: `**Otitis Media — Microbiome and Vaccine Impact**

*Post-PCV13 Microbiology Shift:*
| Pathogen | Trend | Clinical Impact |
|----------|-------|-----------------|
| S. pneumoniae | Decreased (especially serotypes covered by PCV13) | Non-vaccine serotypes emerging |
| Non-typeable H. influenzae (NTHi) | Increased (now #1 in many studies) | More amoxicillin resistance; beta-lactamase |
| M. catarrhalis | Stable | Nearly all produce beta-lactamase |
| S. pyogenes | Uncommon | Consider in acute, severe presentations |

*Middle Ear Microbiome:*
- Not sterile even in OME
- Polymicrobial communities detected by 16S rRNA sequencing
- Biofilm persistence explains chronic/recurrent disease
- Potential for microbiome-targeted therapies (probiotics, bacteriophages)

*Emerging Approaches:*
| Approach | Status |
|----------|--------|
| Pneumococcal conjugate (higher valent: PCV15, PCV20) | Approved/in trials |
| NTHi protein D vaccine | Included in some combination vaccines |
| Transtympanic drug delivery | Research phase |

---

**Croup — Rare Variants and Airway Management**

*Recurrent Croup:*
- ≥2 episodes should prompt evaluation for:
  - Subglottic stenosis (history of intubation)
  - Subglottic hemangioma (onset <6 months; cutaneous hemangiomas)
  - Laryngomalacia
  - Vascular ring
  - Consider direct laryngoscopy/bronchoscopy

*Subglottic Hemangioma:*
- Associated with cutaneous hemangiomas (50%)
- Female predominance
- Biphasic stridor (inspiratory > expiratory)
- Treatment: Propranolol (first-line); surgical excision for resistant cases
- PHACE syndrome: Posterior fossa, Hemangioma, Arterial, Cardiac, Eye anomalies

*COVID-19 and Croup:*
- SARS-CoV-2 identified as cause of croup (particularly Omicron variants)
- Tends to present with more severe croup than parainfluenza
- Management principles remain the same
- Higher rate of return visits and hospitalization

---

**Bronchiolitis — Phenotypes and Long-Term Outcomes**

*Bronchiolitis Phenotypes:*
| Phenotype | Virus | Features | Asthma Risk |
|-----------|-------|----------|-------------|
| RSV-predominant | RSV | Classic presentation, younger infant | Moderate (OR 2-3) |
| Rhinovirus-predominant | RV | Older infant, atopic features | High (OR 4-10) |
| Mixed viral | Multiple | Variable severity | Variable |

*Long-term Outcomes:*
- 30-40% of infants hospitalized with bronchiolitis develop recurrent wheezing
- RSV bronchiolitis → 2-3x increased asthma risk at age 5-7
- RV bronchiolitis → strongest predictor of childhood asthma (especially RV-C)
- Mechanisms: Airway remodeling, altered immune programming, epithelial barrier dysfunction

*Prevention Advances:*
| Agent | Mechanism | Population |
|-------|-----------|------------|
| Palivizumab | Anti-RSV mAb (monthly) | High-risk preterm, BPD, CHD |
| Nirsevimab | Long-acting anti-RSV mAb (single dose) | All infants <8 months entering RSV season |
| RSVpreF (Abrysvo) | Maternal RSV vaccine | Pregnant persons 32-36 weeks GA |
| RSV mRNA vaccines | Under development | Pediatric and maternal |

---

**Febrile Seizures — FEBSTAT and Epileptogenesis**

*FEBSTAT Study Key Findings:*
- Prospective cohort of febrile status epilepticus (FSE)
- Acute MRI: 22% hippocampal T2 signal abnormality
- Follow-up: 11% developed mesial temporal sclerosis at 1 year
- HHV-6 viremia present in 32% of FSE cases
- Epilepsy development: ~15% at 5-year follow-up
- Suggests FSE may directly injure hippocampus → temporal lobe epilepsy pathway

*Management of Prolonged Febrile Seizures:*
| Time | Intervention |
|------|-------------|
| 0-5 min | ABC, position, time the seizure |
| 5 min | Benzodiazepine (midazolam IM/IN, diazepam PR) |
| 10-15 min | Repeat benzodiazepine |
| 20 min | Second-line: fosphenytoin, levetiracetam, or valproate |
| 30+ min | Consider RSI and continuous infusion |

*Rescue Medications at Home:*
- Rectal diazepam (Diastat) for children with prolonged/recurrent FS
- Intranasal midazolam (Nayzilam) — increasingly used
- Buccal midazolam (available in Europe)

---

**Kawasaki Disease — Coronary Pathology and Long-Term Management**

*Coronary Artery Classification (Z-Score Based):*
| Classification | Z-Score | Management |
|----------------|---------|------------|
| No involvement | <2 | Aspirin 6-8 weeks, no long-term follow-up |
| Dilation only | 2 to <2.5 | Aspirin until normalization |
| Small aneurysm | 2.5 to <5 | Aspirin, follow-up echo |
| Medium aneurysm | 5 to <10 | Aspirin + anticoagulation, cardiology follow-up |
| Giant aneurysm | ≥10 | Aspirin + anticoagulation + possible antiplatelet, lifelong follow-up |

*IVIG-Resistant Kawasaki Disease:*
- 10-20% of patients have persistent/recurrent fever >36 hours after IVIG
- Risk factors: Kobayashi score, infants, early treatment
- Second-line options:
  1. Second dose IVIG (2 g/kg)
  2. Infliximab (5 mg/kg) — evidence growing
  3. Methylprednisolone pulse (30 mg/kg x 3 days)
  4. Cyclosporine A (for refractory cases)

*MIS-C (Multisystem Inflammatory Syndrome in Children):*
- Post-COVID hyperinflammatory syndrome with KD-like features
- Key differences from KD: Older age (median 8-10), more GI symptoms, myocardial dysfunction (vs coronary aneurysms), more lymphopenia
- Treatment: IVIG + methylprednisolone (often dual first-line)
- Incidence has decreased with vaccination and evolving variants

---

**Intussusception — Special Populations and Recurrence**

*Post-Rotavirus Vaccine Intussusception:*
| Vaccine | Risk |
|---------|------|
| RotaShield (withdrawn 1999) | 1:10,000 (unacceptable risk) |
| RotaTeq / Rotarix | 1:20,000-100,000 (1-7 excess cases per 100,000 doses) |
| Timing | Highest risk in 7 days after first dose |
| Risk-benefit | Benefits (preventing severe rotavirus) >> small intussusception risk |

*Henoch-Schonlein Purpura (IgA Vasculitis) + Intussusception:*
- HSP can cause intussusception (usually ileoileal, NOT ileocolic)
- Ileoileal intussusception often NOT reducible by enema
- Look for palpable purpura, arthritis, abdominal pain, nephritis
- Ultrasound with Doppler helpful

*Recurrent Intussusception Management:*
| Recurrence | Management |
|------------|------------|
| First recurrence | Repeat enema reduction (usually successful) |
| Multiple recurrences | Surgical exploration to evaluate for lead point |
| Identified lead point | Surgical resection |
| Post-operative | Low recurrence rate |`,
      keyTerms: [
        {
          term: 'MIS-C',
          definition: 'Multisystem Inflammatory Syndrome in Children; post-COVID hyperinflammatory condition with features overlapping Kawasaki disease, including fever, multiorgan involvement, and cardiac dysfunction',
        },
        {
          term: 'nirsevimab',
          definition: 'Long-acting monoclonal antibody against RSV providing passive immunity for all infants entering their first RSV season with a single intramuscular dose',
        },
        {
          term: 'FEBSTAT',
          definition: 'Prospective multicenter study of febrile status epilepticus demonstrating acute hippocampal injury on MRI and subsequent risk of mesial temporal sclerosis and epilepsy',
        },
        {
          term: 'coronary artery z-score',
          definition: 'Body surface area-adjusted measurement of coronary artery dimensions used to classify severity of Kawasaki disease coronary involvement and guide long-term management',
        },
        {
          term: 'bronchiolitis phenotype',
          definition: 'Distinct clinical-virologic subtypes of bronchiolitis (RSV vs rhinovirus predominant) with different long-term asthma risk profiles',
        },
        {
          term: 'PHACE syndrome',
          definition: 'Association of large segmental facial hemangiomas with Posterior fossa, Hemangioma, Arterial, Cardiac, and Eye anomalies; subglottic hemangioma may occur',
        },
      ],
      clinicalNotes:
        'The shift in AOM microbiology post-PCV13 means NTHi is increasingly dominant — consider amoxicillin-clavulanate if beta-lactamase production is suspected. The FEBSTAT study has changed our understanding of febrile status epilepticus — these children merit closer follow-up including MRI. Nirsevimab represents a paradigm shift in RSV prevention, extending protection beyond high-risk infants to all newborns. MIS-C and Kawasaki disease share features but differ in age distribution, cardiac pathology pattern, and treatment approach. Recurrent croup in an infant <6 months should raise concern for subglottic hemangioma — ask about cutaneous hemangiomas.',
    },
    5: {
      level: 5,
      summary:
        'Expert-level pediatric practice encompasses evolving research on disease immunology, precision medicine approaches, guideline controversies, novel therapeutics, and global health perspectives on common childhood conditions.',
      explanation: `**Otitis Media — Research Frontiers**

*Vaccine Development Pipeline:*
| Target | Approach | Status |
|--------|----------|--------|
| PCV20 (Prevnar 20) | Extended serotype coverage | Approved for adults; pediatric trials |
| NTHi Protein D | Surface protein target | In combination vaccines |
| M. catarrhalis OMP | Outer membrane protein | Preclinical |
| Multivalent OM vaccine | Combined S. pneumo + NTHi + M. cat | Research phase |

*Biofilm-Targeted Therapies:*
- DNase to disrupt extracellular DNA matrix
- Bacteriophage therapy targeting AOM pathogens
- Quorum sensing inhibitors
- N-acetylcysteine as biofilm disruptor

*Eustachian Tube Balloon Dilation:*
- Adapted from adult sinusitis technology
- Pediatric trials ongoing
- May offer alternative to tympanostomy tubes for chronic ET dysfunction

---

**Bronchiolitis — Precision Medicine and Immunology**

*Immune Response Profiling:*
| Profile | Characteristics | Outcome Prediction |
|---------|-----------------|-------------------|
| Neutrophilic | High IL-8, neutrophil influx | Severe acute disease |
| Type 2 (eosinophilic) | IL-4, IL-13, IgE | Higher asthma risk |
| Interferon-low | Impaired IFN response | Prolonged viral shedding, severe disease |
| Regulatory | IL-10 dominant | Milder disease |

*RSV Immunology:*
- RSV NS1 and NS2 proteins inhibit type I interferon
- Impaired Th1 response promotes eosinophilic airway inflammation
- Viral load correlates with disease severity but not perfectly
- Preterm infants have impaired innate immune response (reduced TLR signaling)

*Emerging Therapeutics:*
| Agent | Mechanism | Status |
|-------|-----------|--------|
| Presatovir | RSV fusion inhibitor | Phase 2 trials |
| Ziresovir (AK0529) | RSV fusion inhibitor | Phase 3 (China) |
| EDP-938 | RSV replication inhibitor (N protein) | Phase 2 |
| Ensifentrine | Dual PDE3/4 inhibitor | Research for post-bronchiolitis wheezing |

*Microbiome and Bronchiolitis:*
- Nasopharyngeal microbiome composition predicts disease severity
- Moraxella-dominant profiles → higher hospitalization risk
- Haemophilus-dominant → increased LOS
- Breastfeeding → protective microbiome composition
- Early-life antibiotic use alters respiratory microbiome → increased viral susceptibility

---

**Febrile Seizures — Translational Research**

*Epileptogenesis Mechanisms:*
- Febrile SE → excitotoxicity → hippocampal injury → aberrant circuit formation → temporal lobe epilepsy
- Key molecular targets:
  - IL-1beta/IL-1R1 pathway (inflammatory)
  - mTOR pathway activation
  - NKCC1/KCC2 chloride transporter imbalance (immature GABA signaling)
  - HCN channel upregulation → Ih current changes

*Genetic Risk Prediction:*
- Polygenic risk scores for febrile seizure susceptibility under development
- SCN1A variants overlap with Dravet syndrome spectrum
- GEFS+ families: SCN1A (>80%), SCN1B, GABRG2, GABRD, STX1B
- Clinical significance: Genetic testing in complex FS may identify early Dravet syndrome

*Dravet Syndrome vs Complex Febrile Seizures:*
| Feature | Complex FS | Dravet Syndrome |
|---------|-----------|-----------------|
| Age of onset | 6-60 months | <12 months |
| Seizure type | Generalized or focal, febrile | Prolonged hemiclonic, temperature-sensitive |
| Development | Normal | Regression after 1-2 years |
| SCN1A mutation | Rare | >80% |
| EEG | Normal interictal | Generalized/multifocal spikes |
| Prognosis | Excellent | Drug-resistant epilepsy, ID |

---

**Kawasaki Disease — Immunology and Novel Therapeutics**

*Immunopathogenesis Advances:*
| Component | Role |
|-----------|------|
| IgA response | IgA plasma cell infiltration → supports infectious trigger |
| CD8+ T cells | Predominant infiltrate in coronary arteries |
| NLRP3 inflammasome | IL-1beta/IL-18 production; therapeutic target |
| Myeloid activation | Monocyte/macrophage-driven inflammation |
| Genetic variants | ITPKC (Ca2+ signaling), CASP3 (apoptosis), BLK (B cell signaling) |

*Novel Therapeutic Approaches:*
| Agent | Target | Evidence |
|-------|--------|----------|
| Infliximab (anti-TNF) | TNF-alpha | KIDCARE trial: Non-inferior to second IVIG |
| Anakinra (anti-IL-1) | IL-1 receptor | Case series, trials enrolling |
| Cyclosporine A | Calcineurin (T cell) | KAICA trial: Reduced IVIG resistance with upfront use in high-risk |
| Atorvastatin | Endothelial function | Phase 2 for coronary remodeling |
| Anti-VEGF | Vascular remodeling | Preclinical |

*Long-term Cardiovascular Risk:*
- Even children without acute coronary changes may have:
  - Endothelial dysfunction
  - Intimal thickening
  - Abnormal vascular reactivity
  - Accelerated atherosclerosis (controversial)
- Current debate: Should all KD patients have long-term cardiovascular risk monitoring?
- Japanese cohort studies suggest increased MI risk in adulthood even without acute aneurysms

*KD vs MIS-C — Immunologic Comparison:*
| Feature | KD | MIS-C |
|---------|-----|-------|
| T cell profile | CD8+ dominant | CD8+ T cell activation + lymphopenia |
| Cytokine signature | IL-1, IL-6, TNF | IFN-gamma, IL-10, IL-6 |
| Autoantibody | Not prominent | Anti-endothelial, anti-cardiac antibodies |
| Cardiac pathology | Coronary aneurysm | Myocarditis/dysfunction |
| Response to IVIG | 80-90% | Variable; often needs steroids |

---

**Intussusception — Global Perspectives and Surveillance**

*Global Epidemiology:*
| Region | Incidence | Mortality |
|--------|-----------|-----------|
| High-income countries | 30-70/100,000 children <1 year | <1% |
| Low/middle-income countries | Variable (limited data) | 5-10% or higher |
| Sub-Saharan Africa | Likely underdiagnosed | High (limited surgical/imaging access) |

*WHO Intussusception Surveillance:*
- Brighton Collaboration case definition for standardized reporting
- Level 1 (definitive): surgical or radiologic confirmation
- Level 2 (probable): two major criteria (obstruction + target sign or reduction)
- Level 3 (possible): clinical presentation alone

*Rotavirus Vaccine and Intussusception — Risk-Benefit Analysis:*
| Factor | Data |
|--------|------|
| Excess intussusception risk | 1-7 per 100,000 first doses |
| Rotavirus deaths prevented (globally/year) | ~200,000+ |
| NNT to prevent one severe rotavirus episode | ~50 |
| NNH for one intussusception case | ~20,000-100,000 |
| Net benefit | Overwhelmingly favorable |

*Natural History Without Intervention:*
- Before enema reduction was available, mortality was 2-5%
- Spontaneous reduction can occur in ~5% of cases
- Gangrene develops within 24-48 hours of unrelieved obstruction
- Delayed presentation remains the major mortality risk factor in developing countries

**Clinical Decision-Making Integration**

*Age-Specific Emergency Presentations:*
| Age | "Must Not Miss" Diagnoses |
|-----|---------------------------|
| 0-28 days | Sepsis, congenital heart disease, inborn errors of metabolism, non-accidental trauma |
| 1-3 months | Serious bacterial infection, pyloric stenosis, incarcerated hernia |
| 3-12 months | Intussusception, meningitis, bronchiolitis (decompensation), Kawasaki (incomplete) |
| 1-5 years | Epiglottitis, retropharyngeal abscess, Kawasaki, testicular torsion |
| 5-12 years | Appendicitis, diabetic ketoacidosis, myocarditis |
| 12-18 years | Ectopic pregnancy, ovarian torsion, pulmonary embolism |`,
      keyTerms: [
        {
          term: 'NLRP3 inflammasome',
          definition: 'Innate immune complex activating IL-1beta and IL-18 production, implicated in Kawasaki disease pathogenesis and a potential therapeutic target for anti-IL-1 therapies',
        },
        {
          term: 'Dravet syndrome',
          definition: 'Severe SCN1A-associated epileptic encephalopathy presenting initially as temperature-sensitive seizures in infancy, with subsequent developmental regression and drug-resistant epilepsy',
          relatedTerms: ['SCN1A', 'GEFS+', 'sodium channel'],
        },
        {
          term: 'Brighton Collaboration',
          definition: 'International consortium establishing standardized case definitions for adverse events following immunization, including intussusception surveillance for rotavirus vaccine safety',
        },
        {
          term: 'respiratory microbiome',
          definition: 'Microbial communities of the nasopharynx and lower airways that modulate susceptibility to and severity of respiratory viral infections in infants',
        },
        {
          term: 'epileptogenesis',
          definition: 'Process by which a normal brain develops the capacity for spontaneous recurrent seizures; febrile status epilepticus may trigger this via hippocampal excitotoxicity',
        },
        {
          term: 'KAICA trial',
          definition: 'Randomized trial demonstrating cyclosporine A added upfront to standard therapy reduces IVIG resistance in high-risk Kawasaki disease patients',
        },
      ],
      clinicalNotes: `**Clinical Integration Points:**
- The bronchiolitis microbiome literature is redefining our understanding of viral-bacterial interactions in infant airways. Moraxella-dominant profiles may identify infants at highest risk for severe disease.
- Any infant with prolonged hemiclonic seizures triggered by fever should raise concern for Dravet syndrome — obtain SCN1A testing. Avoid sodium channel blockers (carbamazepine, phenytoin) in this population.
- Kawasaki disease immunology is converging on IL-1-mediated mechanisms, opening the door for targeted anti-IL-1 therapies (anakinra) as alternatives to repeated IVIG in refractory cases.
- Global intussusception surveillance confirms rotavirus vaccine benefits far outweigh the small intussusception risk — counsel hesitant families with these data.
- Nirsevimab and maternal RSV vaccination represent the most significant advances in bronchiolitis prevention in decades — both approaches are complementary.
- The spectrum from febrile seizures to GEFS+ to Dravet syndrome represents a continuum of SCN1A-related disorders; genetic testing in atypical cases can inform prognosis and treatment.`,
    },
  },

  media: [
    {
      id: 'aom-otoscopy',
      type: 'image',
      filename: 'acute-otitis-media-otoscopy.jpg',
      title: 'Acute Otitis Media - Otoscopic View',
      description: 'Bulging, erythematous tympanic membrane with middle ear effusion',
    },
    {
      id: 'croup-steeple-sign',
      type: 'image',
      filename: 'croup-steeple-sign-xray.jpg',
      title: 'Croup - Steeple Sign on AP Neck X-Ray',
      description: 'Subglottic narrowing creating the classic steeple sign on anteroposterior neck radiograph',
    },
    {
      id: 'intussusception-target-sign',
      type: 'image',
      filename: 'intussusception-target-sign-us.jpg',
      title: 'Intussusception - Target Sign on Ultrasound',
      description: 'Characteristic concentric ring pattern on transverse ultrasound of ileocolic intussusception',
    },
    {
      id: 'kawasaki-clinical-features',
      type: 'diagram',
      filename: 'kawasaki-disease-clinical-features.svg',
      title: 'Kawasaki Disease Clinical Features',
      description: 'Diagram illustrating the five principal clinical features of classic Kawasaki disease',
    },
  ],

  citations: [
    {
      id: 'aap-aom-guidelines',
      type: 'article',
      title: 'The Diagnosis and Management of Acute Otitis Media',
      authors: ['Lieberthal, A.S.', 'Carroll, A.E.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2012-3488',
    },
    {
      id: 'aap-bronchiolitis-guidelines',
      type: 'article',
      title: 'Clinical Practice Guideline: The Diagnosis, Management, and Prevention of Bronchiolitis',
      authors: ['Ralston, S.L.', 'Lieberthal, A.S.', 'et al.'],
      source: 'Pediatrics',
      url: 'https://doi.org/10.1542/peds.2014-2742',
    },
    {
      id: 'aha-kawasaki-guidelines',
      type: 'article',
      title: 'Diagnosis, Treatment, and Long-Term Management of Kawasaki Disease',
      authors: ['McCrindle, B.W.', 'Rowley, A.H.', 'et al.'],
      source: 'Circulation',
      url: 'https://doi.org/10.1161/CIR.0000000000000484',
    },
    {
      id: 'nelson-pediatrics-conditions',
      type: 'textbook',
      title: 'Nelson Textbook of Pediatrics',
      authors: ['Kliegman, R.M.', 'St. Geme, J.W.'],
      source: 'Elsevier',
      license: 'Proprietary',
    },
  ],

  crossReferences: [
    {
      targetId: 'pediatrics-growth-development',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Growth & Development',
    },
    {
      targetId: 'pediatrics-neonatology-basics',
      targetType: 'topic',
      relationship: 'sibling',
      label: 'Neonatology Basics',
    },
    {
      targetId: 'concept-growth-charts',
      targetType: 'concept',
      relationship: 'related',
      label: 'Growth Charts Explained',
    },
  ],

  tags: {
    systems: ['respiratory', 'cardiovascular', 'gastrointestinal', 'nervous', 'immune'],
    topics: [
      'pediatrics',
      'infectious disease',
      'emergency medicine',
      'rheumatology',
      'gastroenterology',
      'neurology',
    ],
    keywords: [
      'otitis media',
      'croup',
      'bronchiolitis',
      'RSV',
      'febrile seizures',
      'Kawasaki disease',
      'intussusception',
      'IVIG',
      'nirsevimab',
      'MIS-C',
      'Dravet syndrome',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['pediatrics', 'emergency medicine', 'family medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
