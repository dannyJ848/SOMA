/**
 * Croup (Laryngotracheobronchitis)
 *
 * Educational content on croup covering epidemiology, parainfluenza virus,
 * Westley croup score, dexamethasone and racemic epinephrine management,
 * differential diagnosis, and rare variants.
 */

import { EducationalContent } from '../../types';

export const CROUP: EducationalContent = {
  id: 'pediatrics-croup',
  type: 'condition',
  name: 'Croup',
  nameEs: 'Crup',
  alternateNames: ['Laryngotracheobronchitis', 'Barking cough', 'Viral croup', 'Spasmodic croup'],

  levels: {
    1: {
      level: 1,
      summary:
        'Croup causes a harsh barking cough and noisy breathing when a virus makes the voice box and windpipe swell. It is most common in young children and usually worse at night.',
      explanation: `Croup is a common childhood illness that makes a very distinctive "barking" cough, like a seal. It happens when the voice box (larynx) and windpipe (trachea) become swollen from a virus.

**Signs of Croup**
- Barking cough (sounds like a seal)
- Hoarse voice
- Noisy breathing when inhaling (stridor)
- Usually starts with cold symptoms for 1-2 days
- Worse at night
- Most common in children 6 months to 3 years

**What to Do at Home**
- Keep your child calm (crying worsens symptoms)
- Cool night air can help (bundle up and step outside for 10-15 minutes)
- Use a cool-mist humidifier
- Give acetaminophen or ibuprofen for fever
- Offer fluids to stay hydrated

**When to Go to the Emergency Room**
- Noisy breathing at rest (not just when coughing)
- Difficulty breathing (ribs showing, belly moving in and out)
- Drooling or difficulty swallowing
- Blue or gray color around lips
- Your child seems very sick or is not acting normally
- Symptoms do not improve or are getting worse

**Treatment at the Hospital**
- A steroid medicine (dexamethasone) by mouth reduces swelling
- A breathing treatment (epinephrine) can provide quick relief
- Most children go home the same day
- Croup usually lasts 3-5 days`,
      keyTerms: [
        { term: 'croup', definition: 'An illness that causes swelling of the voice box and windpipe, making a barking cough and noisy breathing' },
        { term: 'stridor', definition: 'A high-pitched, noisy sound when breathing in, caused by a narrowed airway' },
        { term: 'barking cough', definition: 'A harsh, loud cough that sounds like a seal barking; the hallmark of croup' },
      ],
      analogies: [
        'Croup is like trying to breathe through a straw that has gotten narrower. The swelling makes the airway smaller, which creates noise.',
        'The barking cough happens because air is being forced through a tight space, like blowing across the top of a bottle.',
      ],
      patientCounselingPoints: [
        'Cool night air often helps. Take your child outside for a few minutes if symptoms worsen.',
        'Keep your child calm. Agitation and crying make breathing harder.',
        'Most croup gets better in 3-5 days without any treatment beyond comfort measures.',
        'Go to the ER if your child has noisy breathing at rest or is struggling to breathe.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Croup is caused primarily by parainfluenza virus, presents with a barking cough and inspiratory stridor, and is managed with corticosteroids and nebulized epinephrine based on severity.',
      explanation: `**Epidemiology**
- Peak age: 6 months to 3 years (rare >6 years)
- Most common cause: Parainfluenza virus (types 1 and 3)
- Other causes: RSV, influenza, adenovirus, SARS-CoV-2
- Season: Fall and early winter
- Male > Female (1.4:1)

**Clinical Presentation**
- URI prodrome (1-2 days): coryza, low-grade fever
- Barking "seal-like" cough
- Inspiratory stridor (hallmark)
- Hoarse voice
- Symptoms characteristically worse at night
- Peak severity: night 2-3 of illness

**Westley Croup Score**
| Feature | 0 | 1 | 2 | 3 | 4 | 5 |
|---------|---|---|---|---|---|---|
| Stridor | None | With agitation | At rest | | | |
| Retractions | None | Mild | Moderate | Severe | | |
| Air entry | Normal | Decreased | Severely decreased | | | |
| Cyanosis | None | | | | With agitation | At rest |
| Consciousness | Normal | | | | | Disoriented |
Total: Mild <=2, Moderate 3-7, Severe >=8

**Management**
| Severity | Treatment |
|----------|-----------|
| Mild (score <=2) | Single dose dexamethasone 0.6 mg/kg PO/IM (max 16 mg); discharge home |
| Moderate (3-7) | Dexamethasone + nebulized racemic epinephrine; observe 2-4 hours |
| Severe (>=8) | Dexamethasone + nebulized epinephrine + observe >=4 hours; consider admission |
| Impending failure | ICU; prepare for intubation (use 0.5-1 size smaller ETT) |

**Key Medications**
| Drug | Dose | Onset | Duration |
|------|------|-------|----------|
| Dexamethasone (PO/IM) | 0.6 mg/kg (max 16 mg) x1 | 2-3 hours | 36-72 hours |
| Racemic epinephrine (neb) | 0.5 mL of 2.25% in 3 mL NS | 10-30 minutes | 1-2 hours |
| L-epinephrine (neb) | 0.5 mL/kg of 1:1000 (max 5 mL) | 10-30 minutes | 1-2 hours |

**Important Notes**
- ALL children with croup benefit from dexamethasone (even mild)
- After nebulized epinephrine, observe >=2-4 hours for rebound
- Chest X-ray: "steeple sign" (subglottic narrowing on AP view) -- often NOT needed
- Antibiotics are NOT indicated (viral illness)
- Humidified air: No evidence of benefit in trials, but may comfort`,
      keyTerms: [
        { term: 'parainfluenza', definition: 'RNA virus (types 1 and 3) that is the most common cause of croup; peak in fall and early winter' },
        { term: 'Westley croup score', definition: 'Severity scoring system based on stridor, retractions, air entry, cyanosis, and consciousness; guides treatment decisions' },
        { term: 'racemic epinephrine', definition: 'Nebulized medication providing rapid but temporary relief of airway edema in moderate-severe croup; requires 2-4 hour observation afterward' },
        { term: 'dexamethasone', definition: 'Corticosteroid given as single oral or IM dose for croup; reduces subglottic edema with onset in 2-3 hours and duration of 36-72 hours' },
        { term: 'steeple sign', definition: 'Subglottic narrowing on AP neck X-ray creating a church-steeple appearance; classic but not sensitive for croup diagnosis' },
      ],
      analogies: [
        'Dexamethasone is like a long-lasting anti-swelling medicine. One dose keeps working for 2-3 days, covering the worst of the illness.',
        'Epinephrine is like a quick-acting plumber. It opens the airway fast, but the effect wears off in 1-2 hours.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Croup management requires distinguishing it from airway emergencies (epiglottitis, bacterial tracheitis, foreign body), understanding pharmacology of dexamethasone, and recognizing recurrent croup variants.',
      explanation: `**Differential Diagnosis of Acute Stridor**
| Condition | Age | Onset | Fever | Drooling | Cough | Key Feature |
|-----------|-----|-------|-------|----------|-------|-------------|
| Viral croup | 6mo-3yr | Gradual (URI prodrome) | Low-grade | No | Barking | Worse at night |
| Epiglottitis | 2-7yr (unvaxed) | Abrupt (hours) | High | Yes | Absent/muffled | Tripod position, toxic |
| Bacterial tracheitis | 6mo-8yr | Croup then acute worsening | High | No | Productive | Purulent secretions, toxic |
| Foreign body | 6mo-4yr | Sudden | None | Variable | Choking/none | Unilateral findings, no prodrome |
| Retropharyngeal abscess | 2-4yr | Days | High | Yes | None | Neck stiffness, bulging posterior pharynx |
| Peritonsillar abscess | >10yr | Days | High | Yes | None | Trismus, "hot potato" voice |
| Anaphylaxis | Any | Minutes | None | None | None | Urticaria, hypotension |

*Critical Rule:* If you suspect epiglottitis, do NOT examine the throat. Maintain the child's position of comfort and prepare for airway management.

**Dexamethasone Pharmacology**
- Mechanism: Reduces subglottic edema via anti-inflammatory and vasoconstrictive effects
- Onset: 2-3 hours (oral); peak benefit 6 hours
- Duration: 36-72 hours (long biological half-life: 36-54 hours)
- Single dose of 0.6 mg/kg sufficient (no benefit to repeat dosing)
- Lower dose (0.15 mg/kg) shown non-inferior in several studies for mild-moderate croup
- Oral prednisolone (1-2 mg/kg) is an alternative but requires multiple days

**Spasmodic Croup**
- Sudden nighttime onset WITHOUT URI prodrome
- No fever
- Recurrent episodes (often same child)
- May have allergic/atopic component
- Often resolves with cool air exposure
- Managed same as viral croup (dexamethasone effective)
- Consider GERD as contributing factor

**Recurrent Croup (>=2 episodes)**
Evaluate for structural or congenital airway abnormality:
| Condition | Clues | Diagnosis |
|-----------|-------|-----------|
| Subglottic stenosis | History of intubation | Direct laryngoscopy/bronchoscopy |
| Subglottic hemangioma | Onset <6 months, cutaneous hemangiomas | DLB; associated with PHACE syndrome |
| Laryngomalacia | Stridor from birth, feeding difficulties | Flexible laryngoscopy |
| Vascular ring | Biphasic stridor, dysphagia | CT angiography, bronchoscopy |
| Laryngeal web/cyst | Weak cry from birth | DLB |

**Bacterial Tracheitis**
- True airway emergency; most common life-threatening croup mimic
- Usually follows viral croup with acute deterioration (day 3-5)
- High fever, purulent secretions, toxic appearance
- Common pathogens: S. aureus (including MRSA), S. pyogenes, M. catarrhalis
- Management: Airway management (often requires intubation), IV antibiotics
- CT or endoscopy for diagnosis; may see subglottic membrane`,
      keyTerms: [
        { term: 'epiglottitis', definition: 'Life-threatening infection of the epiglottis (now rare with Hib vaccine); presents with abrupt high fever, drooling, tripod position; do NOT examine the throat' },
        { term: 'bacterial tracheitis', definition: 'Bacterial superinfection of trachea after viral croup; acute deterioration with high fever and purulent secretions; requires intubation and IV antibiotics' },
        { term: 'subglottic hemangioma', definition: 'Vascular tumor in the subglottic airway; presents as recurrent croup in infants <6 months; associated with cutaneous hemangiomas; treat with propranolol' },
        { term: 'PHACE syndrome', definition: 'Association of large facial hemangiomas with Posterior fossa, Hemangioma, Arterial, Cardiac, and Eye anomalies; subglottic hemangioma may occur' },
        { term: 'spasmodic croup', definition: 'Recurrent sudden-onset croup without URI prodrome or fever; possible allergic component; managed same as viral croup' },
        { term: 'direct laryngoscopy/bronchoscopy', definition: 'Endoscopic visualization of the airway under anesthesia; indicated for recurrent croup to evaluate for structural abnormalities' },
      ],
      clinicalNotes:
        'Epiglottitis is now rare but still occurs in unvaccinated children. Suspect in any child with acute stridor, drooling, and toxic appearance. Bacterial tracheitis is the most common life-threatening croup mimic. Recurrent croup in an infant <6 months should raise concern for subglottic hemangioma; ask about cutaneous hemangiomas. The lower dexamethasone dose (0.15 mg/kg) is non-inferior in many studies and may reduce side effects.',
    },
    4: {
      level: 4,
      summary:
        'Advanced croup management integrates viral pathogenesis, airway physiology principles, evidence for dexamethasone dosing, and management of treatment-resistant and atypical presentations.',
      explanation: `**Airway Physiology in Croup**

*Poiseuille Law:* Resistance is inversely proportional to radius to the 4th power (R = 1/r^4)
- 1mm of subglottic edema in a 4mm infant airway reduces cross-sectional area by 75%
- Same 1mm edema in a 10mm adult airway reduces area by only 36%
- This explains why croup causes significant distress in infants but not adults

*Subglottic Anatomy:*
- Narrowest part of the pediatric airway (cricoid cartilage is the only complete ring)
- Lined by loose, vascular mucosa highly susceptible to edema
- Cricoid ring cannot expand, so edema narrows the airway inward

**Viral Pathogenesis**
- Parainfluenza virus (HN protein) attaches to sialic acid residues on respiratory epithelium
- Virus replicates in ciliated epithelial cells of larynx and trachea
- Inflammatory infiltrate (lymphocytes, histiocytes, neutrophils, plasma cells)
- Mucosal edema and fibrinous exudate in subglottic region
- Epithelial necrosis and ciliary dysfunction
- Peak inflammation days 2-3, resolving by days 5-7

**Dexamethasone Dosing Evidence**
| Study | Comparison | Finding |
|-------|-----------|---------|
| Bjornson et al. (2004) | Dex 0.6 vs placebo | NNT = 5 to prevent one return visit |
| Geelhoed (2005) | 0.15 vs 0.6 mg/kg | Non-inferior for mild-moderate |
| Parker & Cooper (2019, Cochrane) | Systematic review | Single dose dex reduces return visits, hospital admission |
| Prednisolone alternative | 1 mg/kg x2 days | Similar efficacy to dexamethasone 0.6 |

*Current Debate:*
- 0.15 mg/kg vs 0.6 mg/kg: Non-inferior in mild-moderate; use 0.6 for severe
- Oral vs IM: Oral preferred if tolerated; IM if vomiting
- Budesonide nebulization: Alternative if unable to take oral/IM steroids; less studied

**SARS-CoV-2 and Croup**
- Omicron variants particularly associated with croup presentation
- Tends to present with more severe croup than parainfluenza
- Higher rate of return visits and hospitalization
- Higher rate of nebulized epinephrine use
- Management principles remain unchanged

**Airway Management in Severe Croup**
| Step | Intervention |
|------|-------------|
| Initial | Minimize agitation; keep child with parent |
| Moderate-severe | Dexamethasone + nebulized epinephrine |
| Repeat epinephrine | Can repeat every 15-20 minutes if needed |
| Impending failure | ICU; heliox (helium-oxygen mixture) may reduce work of breathing |
| Intubation required | Use ETT 0.5-1 size smaller than predicted; cuffed preferred |
| Post-intubation | Air leak test before extubation; dexamethasone 0.5 mg/kg q6h x4 doses |

**Heliox**
- 80:20 or 70:30 helium:oxygen mixture
- Lower density than air, reducing turbulent flow through narrowed airway
- Temporary bridge while corticosteroids take effect
- Limitations: Requires >70% helium to be effective (limits supplemental O2) |`,
      keyTerms: [
        { term: 'Poiseuille law', definition: 'Physics principle that airway resistance is inversely proportional to radius to the 4th power; explains why small amounts of subglottic edema cause dramatic obstruction in infants' },
        { term: 'heliox', definition: 'Helium-oxygen mixture (80:20 or 70:30) with lower density than air; reduces turbulent flow through narrowed airways; temporary bridge in severe croup' },
        { term: 'subglottic region', definition: 'Area immediately below the vocal cords bounded by the cricoid cartilage; the narrowest part of the pediatric airway and the site of maximal edema in croup' },
        { term: 'air leak test', definition: 'Assessment performed before extubation by deflating the cuff and listening for air leak around the ETT; absence of leak suggests persistent subglottic swelling' },
      ],
      clinicalNotes:
        'Poiseuille law (R = 1/r^4) is the key concept explaining why croup is a pediatric disease. COVID-associated croup (particularly Omicron) tends to be more severe. Heliox is a useful temporizing measure but requires >70% helium to be effective. If intubation is needed, use a smaller ETT and have multiple sizes available. Always administer dexamethasone before intubation attempts.',
    },
    5: {
      level: 5,
      summary:
        'Expert-level croup management integrates viral immunopathogenesis, recombinant parainfluenza vaccine development, novel therapies, and airway management decision frameworks.',
      explanation: `**Parainfluenza Immunology**
| Feature | Detail |
|---------|--------|
| Virus types | HPIV-1 (most common croup); HPIV-3 (bronchiolitis, pneumonia); HPIV-2,4 (less common) |
| Attachment | HN (hemagglutinin-neuraminidase) to sialic acid |
| Fusion | F protein mediates cell entry and syncytia formation |
| Immune evasion | V and C accessory proteins inhibit IFN signaling |
| Reinfection | Common; immunity is partial and short-lived |
| Vaccine candidates | Chimeric HPIV/RSV, intranasal live-attenuated | Research phase |

**Parainfluenza Vaccine Development**
| Candidate | Approach | Status |
|-----------|----------|--------|
| rB/HPIV3 | Bovine PIV3 backbone with human antigens | Phase 1 |
| MEDI-534 | Live-attenuated chimeric RSV/HPIV3 | Phase 1 (combined RSV + PIV3 protection) |
| Intranasal attenuated HPIV-1 | Cold-passage attenuation | Preclinical |
| HPIV3 F-protein subunit | Prefusion F immunogen | Preclinical |

**Emerging Therapies**
| Agent | Mechanism | Status |
|-------|-----------|--------|
| DAS181 (Fludase) | Sialidase; removes viral receptor from epithelium | Compassionate use in immunocompromised |
| Anti-HPIV monoclonal antibodies | Passive immunization | Preclinical |
| Intranasal corticosteroids | Targeted local delivery | Under study |
| Nebulized hypertonic saline | Mucus clearance, potential osmotic edema reduction | Limited evidence in croup |

**Decision Framework: When to Intubate**
| Indicator | Assessment |
|-----------|-----------|
| Progressive stridor at rest despite treatment | Concerning |
| Decreasing air entry with increasing effort | Concerning |
| Altered consciousness | Urgent |
| Cyanosis on supplemental oxygen | Urgent |
| Silent chest (paradoxical improvement) | Critical (impending arrest) |
| Fatigue | Critical |

*Key Principle:* A child with severe croup who suddenly becomes quiet and stops retracting is NOT improving; they are fatiguing and approaching respiratory failure.

**Outcome Data**
| Metric | Value |
|--------|-------|
| Intubation rate | <1% of all croup presentations |
| Mortality | Extremely rare with appropriate management |
| Admission rate | 5-10% of ED presentations |
| Return visits | 5-15% (higher with COVID-associated croup) |
| Long-term sequelae | None for uncomplicated viral croup |

**Quality Improvement in Croup Care**
- Clinical pathways reduce dexamethasone omission rates from 30% to <5%
- Weight-based dexamethasone dosing errors are common; pre-printed order sets help
- ED observation protocols reduce unnecessary admissions
- Telemedicine assessment of stridor is feasible and increasingly studied`,
      keyTerms: [
        { term: 'DAS181', definition: 'Recombinant sialidase (Fludase) that removes sialic acid receptors from respiratory epithelium, preventing parainfluenza and influenza attachment; used compassionately in immunocompromised' },
        { term: 'prefusion F protein', definition: 'Conformation of the parainfluenza fusion protein before cell entry; primary target for neutralizing antibodies and vaccine design' },
        { term: 'chimeric vaccine', definition: 'Vaccine using one virus as a backbone to express antigens from another; HPIV/RSV chimeras could protect against both viruses simultaneously' },
      ],
      clinicalNotes: `**Expert Integration:**
- A child with croup who becomes suddenly quiet is NOT improving; suspect fatigue and impending respiratory failure.
- Parainfluenza vaccines are in early development; a combined RSV/PIV3 vaccine would address two major causes of pediatric respiratory disease.
- Quality improvement pathways for croup reduce dexamethasone omission; implement protocol-driven care in your ED.
- Telemedicine croup assessment is feasible and particularly valuable for rural/remote populations.
- COVID-associated croup tends to be more severe; maintain a higher vigilance with SARS-CoV-2-associated cases.`,
    },
  },

  media: [
    { id: 'croup-steeple-sign', type: 'image', filename: 'croup-steeple-sign-xray.jpg', title: 'Steeple Sign', description: 'AP neck X-ray showing subglottic narrowing' },
    { id: 'croup-vs-epiglottitis', type: 'diagram', filename: 'croup-vs-epiglottitis-comparison.svg', title: 'Croup vs. Epiglottitis', description: 'Clinical and radiographic comparison' },
  ],

  citations: [
    { id: 'cochrane-croup-steroids', type: 'article', title: 'Glucocorticoids for croup in children', authors: ['Gates, A.', 'Gates, M.', 'Vandermeer, B.'], source: 'Cochrane Database of Systematic Reviews', url: 'https://doi.org/10.1002/14651858.CD001955.pub5' },
    { id: 'nelson-croup', type: 'textbook', title: 'Nelson Textbook of Pediatrics', authors: ['Kliegman, R.M.'], source: 'Elsevier', chapter: 'Croup', license: 'Proprietary' },
  ],

  crossReferences: [
    { targetId: 'pediatrics-otitis-media', targetType: 'condition', relationship: 'sibling', label: 'Otitis Media' },
    { targetId: 'pediatrics-bronchiolitis', targetType: 'condition', relationship: 'sibling', label: 'Bronchiolitis' },
  ],

  tags: {
    systems: ['respiratory'],
    topics: ['pediatrics', 'emergency medicine', 'infectious disease', 'otolaryngology'],
    keywords: ['croup', 'barking cough', 'stridor', 'parainfluenza', 'dexamethasone', 'racemic epinephrine', 'Westley score', 'epiglottitis', 'bacterial tracheitis'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, nbme: true, shelf: ['pediatrics', 'emergency medicine'] },
  },

  createdAt: '2025-01-30T00:00:00.000Z',
  updatedAt: '2025-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
