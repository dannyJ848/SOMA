import { EducationalContent } from '../../types';

export const MENINGITIS: EducationalContent = {
  id: 'infectious-disease-meningitis',
  type: 'condition',
  name: 'Meningitis',
  alternateNames: ['Brain Infection', 'Meningeal Infection', 'Spinal Meningitis'],
  levels: {
    1: {
      level: 1,
      summary: 'Meningitis is an infection of the protective layers around your brain and spinal cord that can be very serious.',
      explanation: `Your brain and spinal cord are surrounded by thin layers called meninges (meh-NIN-jeez). These layers protect your brain, kind of like how an egg white protects the yolk. Meningitis happens when these protective layers get infected and swollen.

**What Causes Meningitis:**
- **Viruses** - The most common cause, usually not as serious
- **Bacteria** - Less common but very dangerous
- **Fungi** - Rare, usually in people with weak immune systems

**Warning Signs:**
- Severe headache (the worst headache of your life)
- Stiff neck (can't touch chin to chest)
- High fever
- Sensitivity to bright lights
- Nausea and vomiting
- Confusion or difficulty waking up
- In babies: Bulging soft spot on head, not feeding well, very fussy

**Why It's an Emergency:**
Bacterial meningitis spreads fast and can cause permanent damage to the brain, hearing loss, or even death within hours. That's why anyone with these symptoms needs to get to a hospital immediately.

**How It Spreads:**
Some types of meningitis spread through:
- Coughing and sneezing
- Kissing or sharing drinks
- Being in close contact with someone who is infected

**Prevention:**
- Vaccines can prevent some types of bacterial meningitis
- Wash hands frequently
- Don't share drinks, utensils, or lip products`,
      keyTerms: [
        { term: 'Meninges', definition: 'The protective layers that cover your brain and spinal cord' },
        { term: 'Meningitis', definition: 'Infection and swelling of the meninges' },
        { term: 'Spinal cord', definition: 'The bundle of nerves running from your brain down your back' },
        { term: 'Stiff neck', definition: 'When your neck muscles are so tight you can\'t bend your head forward' },
      ],
    },
    2: {
      level: 2,
      summary: 'Meningitis is inflammation of the meninges caused by infectious or non-infectious etiologies, with bacterial meningitis representing a medical emergency requiring immediate antibiotic treatment.',
      explanation: `The meninges consist of three layers: the dura mater (outermost), arachnoid mater (middle), and pia mater (innermost). The subarachnoid space between the arachnoid and pia contains cerebrospinal fluid (CSF). Meningitis typically affects this space.

**Types of Meningitis:**

| Type | Common Causes | Severity |
|------|---------------|----------|
| Viral (aseptic) | Enteroviruses, HSV, mumps | Usually mild, self-limiting |
| Bacterial | *S. pneumoniae*, *N. meningitidis*, *H. influenzae* | Medical emergency |
| Fungal | *Cryptococcus*, *Coccidioides* | Serious, often in immunocompromised |
| Tuberculous | *Mycobacterium tuberculosis* | Subacute, serious |

**Clinical Presentation:**
The classic triad (present in ~45% of bacterial cases):
1. Fever
2. Neck stiffness (nuchal rigidity)
3. Altered mental status

Other features:
- Severe headache (most common symptom)
- Photophobia (light sensitivity)
- Nausea and vomiting
- Petechial rash (especially with *N. meningitidis*)

**Physical Examination Signs:**
- **Kernig's sign**: Pain when extending the knee with hip flexed
- **Brudzinski's sign**: Involuntary hip flexion when neck is flexed

**Diagnosis:**
Lumbar puncture (spinal tap) to analyze CSF:
- Bacterial: Low glucose, high protein, many WBCs (neutrophils)
- Viral: Normal glucose, slightly elevated protein, WBCs (lymphocytes)
- Gram stain and culture identify specific bacteria

**Treatment:**
- Bacterial: Immediate IV antibiotics (often ceftriaxone + vancomycin)
- Dexamethasone given with or before first antibiotic dose for *S. pneumoniae*
- Viral: Usually supportive care only; antivirals for HSV

**Prevention:**
Vaccines available for:
- *Neisseria meningitidis* (MenACWY, MenB)
- *Streptococcus pneumoniae*
- *Haemophilus influenzae* type b`,
      keyTerms: [
        { term: 'Lumbar puncture', definition: 'A procedure where a needle is inserted into the lower back to collect cerebrospinal fluid' },
        { term: 'CSF', definition: 'Cerebrospinal fluid - the clear fluid surrounding the brain and spinal cord' },
        { term: 'Nuchal rigidity', definition: 'Stiffness of the neck muscles that prevents flexion' },
        { term: 'Photophobia', definition: 'Painful sensitivity to light' },
        { term: 'Petechial rash', definition: 'Small red or purple spots on the skin caused by bleeding under the skin' },
      ],
    },
    3: {
      level: 3,
      summary: 'Meningitis encompasses infectious and non-infectious etiologies causing leptomeningeal inflammation, with bacterial meningitis requiring emergent empiric antimicrobial therapy guided by epidemiology, CSF analysis, and subsequent culture data.',
      explanation: `Understanding meningitis requires knowledge of meningeal anatomy, pathogen epidemiology, CSF dynamics, and the principles of CNS antimicrobial therapy.

**Anatomy and Pathophysiology:**
The leptomeninges (arachnoid + pia mater) are most commonly affected. Infection triggers an inflammatory cascade:
1. Pathogen entry (hematogenous spread or direct extension)
2. Bacterial replication in CSF (limited immune defenses)
3. Release of bacterial components (LPS, peptidoglycan)
4. Cytokine release (TNF-α, IL-1β, IL-6)
5. Blood-brain barrier disruption
6. Cerebral edema and increased intracranial pressure
7. Decreased cerebral blood flow and neuronal injury

**Epidemiology by Age:**

| Age Group | Common Pathogens |
|-----------|-----------------|
| Neonates (<1 month) | Group B Streptococcus, *E. coli*, *Listeria* |
| Infants/Children | *S. pneumoniae*, *N. meningitidis*, *H. influenzae* |
| Adults | *S. pneumoniae*, *N. meningitidis* |
| Elderly/Immunocompromised | *S. pneumoniae*, *Listeria*, Gram-negative bacilli |
| Post-neurosurgery | Staphylococci, Gram-negative bacilli |

**CSF Analysis:**

| Parameter | Normal | Bacterial | Viral | TB/Fungal |
|-----------|--------|-----------|-------|-----------|
| Opening pressure | 10-20 cm H₂O | Elevated | Normal/Mild ↑ | Elevated |
| WBC count | <5/μL | 1,000-10,000 | 50-1,000 | 50-500 |
| Predominant cell | N/A | Neutrophils | Lymphocytes | Lymphocytes |
| Glucose | 50-75 mg/dL | Very low (<40) | Normal | Low |
| Protein | 15-45 mg/dL | Elevated (>100) | Mild ↑ | Elevated |

**Adjunctive Testing:**
- Gram stain: Positive in 60-90% of untreated bacterial meningitis
- Latex agglutination/PCR for specific pathogens
- Blood cultures (positive in 50-80%)
- Procalcitonin may help distinguish bacterial from viral

**Empiric Antibiotic Selection:**
Based on age and risk factors:
- Adults: Ceftriaxone + Vancomycin + Dexamethasone
- Add Ampicillin if *Listeria* risk (age >50, immunocompromised)
- Neonates: Ampicillin + Gentamicin (or Cefotaxime)

**Dexamethasone:**
- Reduces inflammatory injury
- Give before or with first antibiotic dose
- Strongest evidence for *S. pneumoniae* in adults
- May reduce hearing loss and neurological sequelae

**Complications:**
- Hearing loss (most common long-term sequela)
- Seizures
- Hydrocephalus
- Cerebral infarction
- Subdural empyema
- Cognitive impairment`,
      keyTerms: [
        { term: 'Leptomeninges', definition: 'The arachnoid and pia mater together, the inner two meningeal layers' },
        { term: 'Blood-brain barrier', definition: 'The selective barrier formed by brain capillary endothelial cells that restricts passage of substances from blood to brain' },
        { term: 'Empiric therapy', definition: 'Treatment initiated before the specific causative organism is identified, based on likely pathogens' },
        { term: 'Opening pressure', definition: 'The initial CSF pressure measured at the start of lumbar puncture' },
        { term: 'Subdural empyema', definition: 'Collection of pus in the subdural space, a serious complication of meningitis' },
      ],
    },
    4: {
      level: 4,
      summary: 'Bacterial meningitis pathogenesis involves pathogen-specific virulence mechanisms, blood-brain barrier disruption, and neuroinflammatory cascades, with management optimized through understanding of CNS pharmacokinetics, adjunctive dexamethasone, and post-exposure prophylaxis protocols.',
      explanation: `Advanced understanding of meningitis integrates molecular pathogenesis, CNS pharmacology, and clinical decision-making under uncertainty.

**Molecular Pathogenesis:**

*Pathogen Virulence Factors:*

*Streptococcus pneumoniae:*
- Polysaccharide capsule: Antiphagocytic, serotype determines invasiveness
- Pneumolysin: Pore-forming toxin, activates complement
- PspA: Interferes with complement deposition
- Neuraminidase: Exposes host receptors for adhesion

*Neisseria meningitidis:*
- Capsule: Serogroup-specific, antiphagocytic
- LPS (endotoxin): Triggers cytokine storm
- Type IV pili: Adhesion to nasopharyngeal and endothelial cells
- Factor H binding protein: Evades complement

*Listeria monocytogenes:*
- Intracellular pathogen, T cell-mediated immunity critical
- Internalins: Facilitate cellular invasion
- Listeriolysin O: Phagosome escape
- ActA: Actin-based motility for cell-to-cell spread

**Blood-Brain Barrier Disruption:**
- Tight junction proteins (claudins, occludin) degraded by matrix metalloproteinases
- Cytokine-induced endothelial dysfunction
- Leukocyte trafficking amplifies inflammation
- Results in vasogenic edema and increased ICP

**CNS Pharmacokinetics:**
Achieving therapeutic CSF concentrations is challenging:
- Many antibiotics poorly penetrate intact BBB
- Inflammation increases permeability (helpful acutely)
- As inflammation resolves, penetration decreases
- May need to complete IV therapy to maintain levels

*CSF Penetration:*
- Good: Fluoroquinolones, metronidazole, chloramphenicol, trimethoprim-sulfamethoxazole
- Moderate (better with inflammation): Penicillins, cephalosporins, vancomycin
- Poor: Aminoglycosides, first-gen cephalosporins

**Clinical Decision-Making:**

*Imaging Before LP:*
Not required for most patients. CT head before LP if:
- Immunocompromised
- History of CNS disease
- New-onset seizures
- Papilledema
- Altered consciousness
- Focal neurological deficits

*Negative Gram Stain Dilemma:*
- Gram stain negative in 10-40% of bacterial meningitis
- Cannot rely on negative Gram stain to exclude bacterial etiology
- CSF cell count, glucose, protein guide decision
- Multiplex PCR panels increasing diagnostic yield

**Adjunctive Dexamethasone:**
Mechanism: Reduces TNF-α and IL-1β, preserves BBB integrity

Evidence:
- European trial (de Gans): Mortality and unfavorable outcomes reduced
- Cochrane review: Benefit primarily for *S. pneumoniae*
- Less clear benefit in developing countries

Dosing: 0.15 mg/kg IV q6h x 4 days, starting before or with first antibiotic dose

**Chemoprophylaxis for *N. meningitidis*:**
Close contacts (household, daycare, anyone exposed to oral secretions):
- Rifampin 600 mg q12h x 2 days
- Ciprofloxacin 500 mg single dose (adults)
- Ceftriaxone 250 mg IM single dose (preferred in pregnancy)

Prophylaxis should be given within 24 hours of case identification.

**Post-Meningitis Care:**
- Audiology evaluation for hearing assessment
- Neurocognitive evaluation
- Seizure management
- Physical/occupational therapy for neurological deficits
- Vaccination if not previously immunized`,
      keyTerms: [
        { term: 'Neuraminidase', definition: 'An enzyme that cleaves sialic acid residues, facilitating bacterial colonization and spread' },
        { term: 'Internalins', definition: 'Surface proteins of Listeria that mediate entry into host cells by binding to host cell receptors' },
        { term: 'Factor H binding protein', definition: 'A meningococcal surface protein that recruits complement inhibitor Factor H, evading complement-mediated killing' },
        { term: 'Vasogenic edema', definition: 'Brain swelling caused by BBB disruption allowing plasma to leak into brain parenchyma' },
        { term: 'Multiplex PCR', definition: 'A molecular test that simultaneously detects multiple pathogens from a single sample' },
      ],
      clinicalNotes: 'The decision to start antibiotics should never be delayed for imaging or LP. If bacterial meningitis is suspected, draw blood cultures and start empiric antibiotics immediately. LP can be performed after CT if needed, and CSF may still be diagnostic for hours after antibiotic initiation.',
    },
    5: {
      level: 5,
      summary: 'Expert meningitis management integrates molecular diagnostics, pharmacokinetic optimization of CNS-penetrating antimicrobials, adjunctive immunomodulation, and recognition of emerging pathogens and resistance patterns within a framework of rapid empiric therapy and source control.',
      explanation: `Mastery of meningitis care requires integration of emerging diagnostics, complex antimicrobial pharmacology, and management of treatment failures and complications.

**Advanced Diagnostics:**

*Multiplex PCR Panels:*
- FilmArray Meningitis/Encephalitis Panel: 14 pathogens in ~1 hour
- Sensitivity/specificity varies by pathogen
- May detect non-viable organisms (prior antibiotics)
- False positives possible; clinical correlation essential

*Metagenomic Next-Generation Sequencing:*
- Unbiased detection of any pathogen
- Useful for culture-negative cases
- Turnaround time improving (days to ~24 hours)
- May identify unexpected pathogens (parasites, rare viruses)

*CSF Biomarkers:*
- Lactate: >35 mg/dL suggests bacterial etiology (Sn 93%, Sp 96%)
- Procalcitonin: Elevated in bacterial meningitis
- CSF cytokines under investigation

**Antimicrobial Pharmacokinetics:**

*Optimizing CSF Concentrations:*
- Target: Free drug concentration > MIC for pathogen
- Protein binding affects free drug levels
- Dosing adjustments for renal/hepatic function
- Consider higher doses for resistant organisms

*Vancomycin Dosing:*
- Standard dosing may not achieve adequate CSF levels for PRSP
- Target trough 15-20 mcg/mL
- Some advocate loading dose 25-30 mg/kg
- AUC/MIC targeting increasingly used

*Drug Resistance Considerations:*
- Penicillin-resistant *S. pneumoniae*: Ceftriaxone MIC may predict response
- Cephalosporin-resistant pneumococcus: Vancomycin + rifampin
- *Listeria*: Intrinsically resistant to cephalosporins; must add ampicillin

**Special Populations:**

*Healthcare-Associated Meningitis:*
- Post-neurosurgical, CSF shunt infections
- Organisms: Staphylococci (including MRSA), Gram-negative bacilli, *Cutibacterium acnes*
- Empiric: Vancomycin + cefepime (or meropenem)
- Often requires device removal for cure

*Recurrent Meningitis:*
Evaluate for:
- Anatomical defects (CSF leak, inner ear malformation)
- Complement deficiency (especially terminal complement for *N. meningitidis*)
- Immunoglobulin deficiency
- Parameningeal focus

*Chronic Meningitis:*
- Symptoms >4 weeks
- Etiologies: TB, fungal (cryptococcus, coccidioides), neurosyphilis, Lyme, carcinomatous
- Requires extensive workup including large-volume CSF analysis

**Complications Management:**

*Increased Intracranial Pressure:*
- Head of bed elevation, sedation, avoiding hyperthermia
- Hyperosmolar therapy (mannitol, hypertonic saline)
- Consider ICP monitoring in severe cases
- External ventricular drain for hydrocephalus

*Cerebral Venous Thrombosis:*
- Can complicate bacterial meningitis
- Anticoagulation generally indicated despite CNS infection

*Status Epilepticus:*
- Aggressive seizure control essential
- Levetiracetam, phenytoin, or others as indicated
- Continuous EEG monitoring for refractory cases

**Emerging Issues:**

*Antibiotic Resistance:*
- Penicillin-non-susceptible *S. pneumoniae*: 30-40% in some regions
- Cephalosporin resistance emerging
- Serotype replacement post-PCV13 vaccination
- Ciprofloxacin-resistant *N. meningitidis*: Rare but reported

*Vaccine Impact:*
- *H. influenzae* type b virtually eliminated in vaccinated populations
- PCV13/PCV15/PCV20 reducing pneumococcal meningitis but serotype replacement occurs
- MenB vaccines reducing serogroup B disease
- Herd immunity considerations

**Quality Metrics:**
- Time to antibiotics: Target <1 hour from presentation
- Blood cultures before antibiotics
- Dexamethasone administration with first antibiotic dose
- LP performed (unless contraindicated)
- Close contact prophylaxis for meningococcal disease`,
      keyTerms: [
        { term: 'Metagenomic sequencing', definition: 'Unbiased sequencing of all nucleic acids in a sample to identify any pathogen without prior hypothesis' },
        { term: 'Terminal complement deficiency', definition: 'Deficiency in complement components C5-C9 that predisposes to recurrent meningococcal infections' },
        { term: 'Carcinomatous meningitis', definition: 'Malignant cells infiltrating the leptomeninges, mimicking infectious meningitis' },
        { term: 'Serotype replacement', definition: 'Emergence of non-vaccine serotypes after widespread vaccination reduces vaccine-type serotypes' },
        { term: 'External ventricular drain', definition: 'A catheter placed into the ventricles to drain CSF and monitor/reduce intracranial pressure' },
      ],
      clinicalNotes: 'Culture-negative meningitis remains a diagnostic challenge. The differential is broad and includes partially-treated bacterial infection, viral etiologies, tuberculous and fungal meningitis, autoimmune conditions, and malignancy. Large-volume CSF (>10 mL), repeat LP, and advanced diagnostics including mNGS may be needed. A multidisciplinary approach involving infectious disease, neurology, and sometimes neurosurgery optimizes outcomes.',
    },
  },
  media: [],
  citations: [
    {
      id: 'tunkel-meningitis-2017',
      type: 'article',
      title: 'Practice Guidelines for Bacterial Meningitis',
      authors: ['Tunkel AR', 'Hartman BJ', 'Kaplan SL'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
    {
      id: 'van-de-beek-2016',
      type: 'article',
      title: 'Community-Acquired Bacterial Meningitis',
      authors: ['van de Beek D', 'Brouwer MC', 'Koedel U', 'Wall EC'],
      source: 'The Lancet',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-sepsis', targetType: 'condition', relationship: 'related', label: 'Sepsis' },
    { targetId: 'infectious-disease-vaccination-overview', targetType: 'concept', relationship: 'related', label: 'Vaccination' },
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
  ],
  tags: {
    systems: ['infectious-disease', 'neurology'],
    topics: ['central-nervous-system', 'emergency', 'bacterial-infections'],
    keywords: ['meningitis', 'CSF', 'lumbar puncture', 'meningococcus', 'pneumococcus'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
