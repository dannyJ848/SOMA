/**
 * Meningitis - Comprehensive Educational Content
 *
 * Covers bacterial, viral, and fungal meningitis pathophysiology and management.
 */

import { EducationalContent } from '../../types';

export const meningitis: EducationalContent = {
  id: 'condition-meningitis',
  type: 'condition',
  name: 'Meningitis',
  alternateNames: ['Brain Inflammation', 'Meningeal Infection', 'Spinal Meningitis'],
  hpoId: 'HP:0001287',

  levels: {
    1: {
      level: 1,
      summary: 'Meningitis is an infection and inflammation of the protective membranes covering the brain and spinal cord.',
      explanation: `Meningitis is a serious infection that affects the meninges, the protective layers that cover the brain and spinal cord. It can be caused by bacteria, viruses, or other germs.

**The meninges:**
- Three layers protecting the brain and spinal cord
- Called dura mater, arachnoid, and pia mater
- Contain cerebrospinal fluid (CSF)

**Types of meningitis:**

**Bacterial meningitis:**
- Most serious type
- Can be life-threatening
- Needs immediate antibiotic treatment
- Can cause brain damage, hearing loss, or death

**Viral meningitis:**
- More common but less serious
- Usually gets better on its own
- Like a bad flu

**Symptoms:**
- Severe headache
- Stiff neck
- Fever
- Sensitivity to light
- Nausea and vomiting
- Confusion
- Rash (in some types)

**Who is at risk:**
- Young children
- Teenagers and young adults
- Older adults
- People with weakened immune systems
- Those who have not been vaccinated

**Prevention:**
- Vaccines available for some types
- Good hygiene practices

**Treatment:**
- Bacterial: Antibiotics immediately
- Viral: Rest and fluids, usually self-limiting`,
      keyTerms: [
        { term: 'meninges', definition: 'The three protective membranes covering the brain and spinal cord' },
        { term: 'cerebrospinal fluid', definition: 'Clear fluid surrounding the brain and spinal cord' },
        { term: 'CSF', definition: 'Cerebrospinal fluid; tested to diagnose meningitis' },
        { term: 'lumbar puncture', definition: 'Procedure to collect fluid from around the spinal cord for testing' },
      ],
      analogies: [
        'The meninges are like the protective padding around a valuable package - the brain inside.',
        'Meningitis is like an infection in the padding around your brain instead of the brain itself.',
      ],
      examples: [
        'A college student in a dormitory with sudden fever, severe headache, and stiff neck may have meningitis.',
        'An infant with fever, poor feeding, and a bulging soft spot may have meningitis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Meningitis is inflammation of the leptomeninges (arachnoid and pia mater) usually caused by infection, presenting with classic triad of fever, headache, and nuchal rigidity, with bacterial forms being medical emergencies.',
      explanation: `## Anatomy and Physiology

**Meningeal layers:**
- **Dura mater** - tough outer layer
- **Arachnoid** - middle web-like layer
- **Pia mater** - thin inner layer adhering to brain
- **Subarachnoid space** - contains CSF and blood vessels

**CSF circulation:**
- Produced by choroid plexus (500 mL/day)
- Fills ventricles and subarachnoid space
- Absorbed by arachnoid granulations
- Protective and nutritive function

## Classification by Cause

**Bacterial (acute pyogenic):**
- Most serious, high mortality
- Peak incidence: <2 years and adolescence
- Common pathogens vary by age

**Viral (aseptic):**
- Most common overall
- Usually self-limited
- Enteroviruses most common

**Fungal:**
- Cryptococcus (HIV/AIDS)
- Coccidioides, Histoplasma
- Chronic course

**Tuberculous:**
- Subacute to chronic
- High morbidity
- Basal predominance

**Other:**
- Parasitic, syphilitic, Lyme
- Non-infectious (autoimmune, drug-induced, carcinomatous)

## Clinical Presentation

**Classic triad (present in <50%):**
- Fever
- Headache
- Nuchal rigidity (stiff neck)

**Other symptoms:**
- Altered mental status
- Photophobia
- Nausea/vomiting
- Seizures
- Focal neurological deficits

**Kernig sign:**
- Knee extension painful/resisted with hip flexed

**Brudzinski sign:**
- Passive neck flexion causes hip/knee flexion

**Specific features:**
- Petechial/purpuric rash (meningococcemia)
- Otitis media, sinusitis (source)
- Immunocompromise (fungal, TB)

## Bacterial Pathogens by Age

**Neonates (<1 month):**
- Group B Streptococcus (GBS)
- E. coli
- Listeria monocytogenes

**Children (1 month - 10 years):**
- Streptococcus pneumoniae
- Neisseria meningitidis
- Haemophilus influenzae (vaccine decreased)

**Adolescents/Young Adults:**
- Neisseria meningitidis
- Streptococcus pneumoniae

**Elderly/Immunocompromised:**
- Streptococcus pneumoniae
- Listeria monocytogenes
- Gram-negative bacilli`,
      keyTerms: [
        { term: 'leptomeninges', definition: 'Arachnoid and pia mater together' },
        { term: 'nuchal rigidity', definition: 'Stiffness of the neck due to meningeal irritation' },
        { term: 'meningococcemia', definition: 'Meningococcal bacteria in the bloodstream' },
        { term: 'aseptic meningitis', definition: 'Meningitis not caused by bacteria; usually viral' },
      ],
      analogies: [
        'The subarachnoid space is like a moat around a castle - when infected, the whole castle is threatened.',
        'Bacterial meningitis is like a wildfire spreading quickly; viral meningitis is more like a smoldering campfire.',
      ],
    },
    3: {
      level: 3,
      summary: 'Bacterial meningitis involves bacterial invasion of CSF causing intense inflammation, increased intracranial pressure, and potential complications, requiring rapid empiric antibiotics based on age and risk factors, with adjunctive dexamethasone improving outcomes in certain cases.',
      explanation: `## Pathophysiology

### Bacterial Invasion
**Routes of entry:**
- Hematogenous spread (most common)
- Direct extension (sinusitis, otitis, skull fracture)
- Neural pathways ( peripheral nerves)
- Shunt/ hardware contamination

**Bacterial factors:**
- Capsule (anti-phagocytic)
- Pili (adhesion)
- Cell wall components (lipopolysaccharide, teichoic acid)

### Inflammatory Cascade
1. Bacterial multiplication in CSF
2. Release of bacterial cell wall components
3. Activation of macrophages, microglia
4. Cytokine release (IL-1, IL-6, TNF-alpha)
5. Neutrophil recruitment
6. Blood-brain barrier disruption
7. Vasogenic and cytotoxic edema

### Complications
- **Increased intracranial pressure**
- **Cerebral edema**
- **Hydrocephalus** (impaired CSF flow/absorption)
- **Cerebrovascular complications** (vasculitis, thrombosis, infarction)
- **Seizures**
- **Hearing loss** (especially pneumococcal)
- **Neurological deficits**

## Diagnosis

### Lumbar Puncture (Gold Standard)
**Contraindications:**
- Signs of increased ICP (papilledema, focal deficits)
- Severe coagulopathy
- Cardiorespiratory compromise
- Skin infection at site

**CSF findings:**

| Parameter | Bacterial | Viral | Fungal/TB |
|-----------|-----------|-------|-----------|
| Opening pressure | Elevated | Normal/elevated | Elevated |
| Appearance | Cloudy/purulent | Clear | Clear/slightly cloudy |
| WBC count | >1000, neutrophils | <500, lymphocytes | <500, lymphocytes |
| Glucose | Low (<40 mg/dL or CSF:serum <0.4) | Normal | Low |
| Protein | Elevated | Mildly elevated | Elevated |
| Gram stain | Positive 60-90% | Negative | Negative |

### Blood Tests
- Blood cultures (positive in 50-75% before antibiotics)
- CBC, CMP
- Procalcitonin (elevated in bacterial)
- CRP

### Imaging
- CT head before LP if indicated (focal deficits, papilledema, immunocompromise, seizures, altered consciousness)
- MRI for complications

## Treatment of Bacterial Meningitis

### Empiric Antibiotics (Immediate)
**<1 month:**
- Ampicillin + cefotaxime (or gentamicin)
- Add acyclovir if HSV suspected

**1-23 months:**
- Vancomycin + ceftriaxone (or cefotaxime)

**2-50 years:**
- Vancomycin + ceftriaxone
- Add ampicillin if Listeria risk (pregnant, elderly, immunocompromised)

**>50 years or immunocompromised:**
- Vancomycin + ampicillin + ceftriaxone + dexamethasone

### Dexamethasone
- 0.15 mg/kg q6h x 4 days
- Give before or with first antibiotic dose
- Reduces hearing loss and neurological sequelae (pneumococcal)
- Continue only if CSF confirms bacterial meningitis

### Duration of Therapy
- N. meningitidis: 7 days
- H. influenzae: 7 days
- S. pneumoniae: 10-14 days
- Listeria: >=21 days
- GBS: 14-21 days
- Gram-negative: 21 days

### Supportive Care
- ICU monitoring for severe cases
- ICP management
- Seizure prophylaxis/treatment
- DVT prophylaxis`,
      keyTerms: [
        { term: 'vasculitis', definition: 'Inflammation of blood vessels; complication of meningitis' },
        { term: 'procalcitonin', definition: 'Biomarker elevated in bacterial infections' },
        { term: 'opening pressure', definition: 'Pressure measured when needle enters subarachnoid space' },
        { term: 'dexamethasone', definition: 'Corticosteroid given with antibiotics to reduce inflammation' },
      ],
      clinicalNotes: 'Do not delay antibiotics for CT/LP if patient unstable - give antibiotics immediately. Dexamethasone must be given before or with first antibiotic dose. Vancomycin needed for penicillin-resistant pneumococcus. Repeat LP at 48 hours if not improving or if pneumococcal with dexamethasone.',
    },
    4: {
      level: 4,
      summary: 'Advanced meningitis management includes understanding of specific bacterial virulence factors, recognition and management of raised intracranial pressure, treatment of healthcare-associated and recurrent meningitis, and comprehensive management of viral, fungal, and tuberculous forms.',
      explanation: `## Specific Pathogens

### Streptococcus pneumoniae
- Most common in adults
- Capsular polysaccharides (90+ serotypes)
- Vaccine preventable (PCV13, PPSV23)
- High mortality (20-30%)
- Hearing loss common complication

### Neisseria meningitidis
- Adolescents/young adults
- Capsular groups A, B, C, W, Y
- Vaccines available (MenACWY, MenB)
- Petechial rash, adrenal hemorrhage (Waterhouse-Friderichsen)
- Close contacts need prophylaxis (ciprofloxacin, rifampin, ceftriaxone)

### Listeria monocytogenes
- Foodborne (deli meats, soft cheeses)
- Intracellular pathogen
- Affects neonates, elderly, pregnant, immunocompromised
- Ampicillin/penicillin G (add aminoglycoside)
- Not covered by standard empiric cephalosporins

### Haemophilus influenzae
- Type b was leading cause before vaccine
- Now rare in developed countries
- Still important in unvaccinated populations

## Raised Intracranial Pressure

**Signs:**
- Decreased consciousness
- Pupillary abnormalities
- Abnormal respirations
- Papilledema (late)
- Cushing triad (hypertension, bradycardia, irregular respirations)

**Management:**
- Head of bed 30 degrees
- Hyperventilation (short-term only)
- Mannitol 0.25-1 g/kg IV
- Hypertonic saline (3%)
- Decompressive craniectomy (last resort)
- Avoid hypotonic fluids

## Healthcare-Associated Meningitis

**Risk factors:**
- Neurosurgery, head trauma
- CSF shunts, drains
- Meningitis after dural procedure

**Pathogens:**
- Staphylococcus aureus
- Coagulase-negative staphylococci
- Gram-negative bacilli (Pseudomonas)
- Propionibacterium acnes

**Treatment:**
- Vancomycin + anti-pseudomonal beta-lactam (cefepime, ceftazidime, meropenem)
- Remove/replace hardware if possible
- Intrathecal antibiotics sometimes needed
- Longer duration (often 10-14 days after sterilization)

## Recurrent Meningitis

**Causes:**
- CSF leak (skull base defect, trauma, surgery)
- Complement deficiency (C5-C9 for meningococcal)
- Anatomical defects (Mondini dysplasia)
- HIV (recurrent cryptococcal)

**Workup:**
- Beta-2 transferrin (CSF leak detection)
- Complement levels
- High-resolution CT/MRI
- Immunoglobulin levels

## Viral Meningitis

**Common pathogens:**
- Enteroviruses (coxsackie, echo) - most common
- HSV-2 (genital herpes-related)
- VZV
- Arboviruses (West Nile, etc.)
- HIV (acute seroconversion)

**Treatment:**
- Supportive care
- Acyclovir if HSV/VZV suspected until confirmed
- Usually self-limited (7-10 days)

## Fungal Meningitis

### Cryptococcal Meningitis
- Cryptococcus neoformans (HIV/AIDS)
- C. gattii (immunocompetent)
- High opening pressure (common complication)
- India ink stain, cryptococcal antigen (serum/CSF)

**Treatment:**
- Induction: Amphotericin B + flucytosine (2 weeks)
- Consolidation: Fluconazole (8 weeks)
- Maintenance: Fluconazole (at least 1 year)
- Serial LPs for pressure management

### Coccidioidal/Histoplasma Meningitis
- Endemic regions
- Chronic basilar meningitis
- Fluconazole or itraconazole (long-term)
- Amphotericin B for severe/failure

## Tuberculous Meningitis

**Features:**
- Subacute onset (weeks)
- Basilar enhancement on imaging
- Cranial nerve palsies common
- High mortality/morbidity even with treatment

**Diagnosis:**
- AFB smear (low sensitivity)
- MTB PCR (GeneXpert)
- Culture (takes weeks)
- Adenosine deaminase (CSF)

**Treatment:**
- RIPE regimen (rifampin, isoniazid, pyrazinamide, ethambutol)
- Duration: 9-12 months
- Add dexamethasone (2-4 weeks then taper)
- Monitor for drug interactions (rifampin) and hepatotoxicity`,
      keyTerms: [
        { term: 'Cushing triad', definition: 'Hypertension, bradycardia, irregular breathing; sign of severe increased ICP' },
        { term: 'Waterhouse-Friderichsen', definition: 'Adrenal hemorrhage from meningococcemia' },
        { term: 'GeneXpert', definition: 'Rapid PCR test for Mycobacterium tuberculosis' },
        { term: 'basilar meningitis', definition: 'Meningitis predominantly affecting base of brain; typical of TB' },
      ],
      clinicalNotes: 'Healthcare-associated meningitis requires broad coverage including MRSA and Pseudomonas. Recurrent meningitis needs investigation for CSF leak or immune deficiency. Cryptococcal meningitis with high opening pressure needs repeated therapeutic LPs. TB meningitis requires prolonged therapy and steroids.',
    },
    5: {
      level: 5,
      summary: 'Contemporary meningitis management incorporates molecular diagnostics like FilmArray and metagenomic sequencing, adjuvant immunotherapy investigations, neuroprotective strategies, vaccine development for emerging serogroups, and global health initiatives addressing epidemic meningitis in Africa.',
      explanation: `## Advanced Diagnostics

### Multiplex PCR Panels
**FilmArray Meningitis/Encephalitis panel:**
- 14 targets (bacteria, viruses, yeast)
- Rapid results (1 hour)
- High sensitivity
- CSF sample only
- Changes empiric management

### Metagenomic Next-Generation Sequencing (mNGS)
- Unbiased pathogen detection
- CSF or tissue samples
- Identifies novel/unexpected pathogens
- Clinical utility growing
- Cost and bioinformatics challenges

### Biomarkers
**Procalcitonin:**
- Distinguishes bacterial from viral
- Guides antibiotic discontinuation

**CSF lactate:**
- >4 mmol/L suggests bacterial
- More accurate than glucose ratio in some studies

**Host RNA signatures:**
- Distinguish infection types
- Future diagnostic/prognostic tool

## Adjuvant Therapies

### Immunomodulation
**Anti-cytokine approaches:**
- Anti-TNF agents (investigational)
- IL-1 antagonists
- Target excessive inflammation

**Intravenous immunoglobulin (IVIG):**
- Adjunctive in severe cases
- Neutralizes bacterial toxins
- Limited evidence

### Neuroprotection
**Investigational agents:**
- NMDA receptor antagonists
- Free radical scavengers
- Anti-apoptotic agents

**Therapeutic hypothermia:**
- Studied in trials
- Mixed results
- Not standard of care

## Vaccine Developments

### Current Vaccines
- PCV13, PPSV23 (pneumococcal)
- MenACWY (meningococcal A, C, W, Y)
- MenB (meningococcal B)
- Hib (Haemophilus influenzae b)

### MenAfriVac Success
- Eliminated serogroup A meningitis in Africa
- Mass vaccination campaigns
- Public health triumph

### Future Directions
- Universal meningococcal vaccines
- Improved serogroup B coverage
- Vaccines for GBS (maternal immunization)
- Listeria vaccines (investigational)

## Global Health: Meningitis Belt

**The African Meningitis Belt:**
- 26 countries, 400 million people
- Seasonal epidemics (dry season)
- Historically serogroup A
- Now serogroups C, W, X emerging

**Control strategies:**
- Reactive vaccination campaigns
- Enhanced surveillance
- Antibiotic chemoprophylaxis
- Improved healthcare infrastructure

**Defeating Meningitis by 2030 (WHO):**
- Global roadmap
- Vaccine goals
- Surveillance improvements
- Treatment access
- Survivor support

## Special Populations

### Pregnancy
- Listeria risk
- Ampicillin coverage essential
- Fluoroquinolones contraindicated
- Rifampin for prophylaxis if needed

### Neonates
- GBS prophylaxis during labor
- Maternal vaccination (GBS in trials)
- CSF interpretation different
- Broad empiric coverage

### Immunocompromised
- Cryptococcal, TB, Listeria
- Toxoplasma, CMV, HSV
- Broader differential
- Prolonged therapy often needed

### Elderly
- Atypical presentations
- Listeria risk
- Drug interactions
- Higher mortality

## Post-Meningitis Care

### Sequelae Assessment
- Hearing testing (all bacterial meningitis survivors)
- Neuropsychological testing
- Neurological examination
- Educational support

### Rehabilitation
- Physical, occupational, speech therapy
- Hearing aids, cochlear implants
- Educational accommodations
- Psychological support

### Prevention Counseling
- Vaccination completion
- Prophylaxis for contacts (meningococcal)
- Lifestyle modifications (Listeria prevention)

## Research Frontiers

### Pathophysiology
- Single-cell transcriptomics
- Blood-brain barrier mechanisms
- Inflammatory mediator networks
- Genetic susceptibility

### Treatment
- Bacteriophage therapy
- Monoclonal antibodies against toxins
- Novel antibiotic delivery (nanoparticles)
- Personalized medicine approaches

### Prevention
- Maternal vaccines
- Nasal/oral vaccines
- Universal vaccines
- Improved adjuvants`,
      keyTerms: [
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing; unbiased pathogen detection' },
        { term: 'MenAfriVac', definition: 'Meningococcal A conjugate vaccine; eliminated serogroup A in Africa' },
        { term: 'FilmArray', definition: 'Rapid multiplex PCR system for meningitis/encephalitis pathogens' },
        { term: 'meningitis belt', definition: 'Region of sub-Saharan Africa with high meningitis incidence' },
      ],
      clinicalNotes: 'Multiplex PCR panels are changing empiric management by providing rapid pathogen identification. mNGS useful for culture-negative or unusual cases. WHO goal to defeat meningitis by 2030 through vaccination and improved care. Hearing testing mandatory after bacterial meningitis.',
    },
  },

  media: [
    {
      id: 'meningitis-pathophysiology',
      type: 'diagram',
      filename: 'meningitis-inflammation.svg',
      title: 'Meningeal Inflammation',
      description: 'Pathophysiology of bacterial meningitis',
    },
  ],

  citations: [
    {
      id: 'idsa-meningitis-2004',
      type: 'article',
      title: 'Practice Guidelines for the Management of Bacterial Meningitis',
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'condition-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
  ],

  tags: {
    systems: ['nervous', 'immune'],
    topics: ['infectious disease', 'neurology', 'critical care'],
    keywords: ['meningitis', 'CSF', 'lumbar puncture', 'bacterial', 'viral'],
    clinicalRelevance: 'critical',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default meningitis;
