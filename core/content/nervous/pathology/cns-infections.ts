/**
 * CNS Infections - Pathology Educational Content
 *
 * Infectious diseases affecting the central nervous system including
 * meningitis, encephalitis, and brain abscesses.
 */

import { EducationalContent } from '../../types';

export const cnsInfections: EducationalContent = {
  id: 'pathology-cns-infections',
  type: 'condition',
  name: 'CNS Infections',
  alternateNames: ['Central Nervous System Infections', 'Neuroinfectious Diseases', 'Neuroinfections'],

  levels: {
    1: {
      level: 1,
      summary: 'CNS infections are when germs like bacteria, viruses, or fungi infect the brain, spinal cord, or surrounding tissues.',
      explanation: `CNS infections happen when germs invade the brain or spinal cord. These infections can be very serious because the brain is so important and is normally protected from infection.

**Main Types of CNS Infections:**

1. **Meningitis** (Infection of the coverings)
   - Germs infect the protective layers around the brain
   - Causes fever, severe headache, and stiff neck
   - Can be bacterial, viral, or fungal

2. **Encephalitis** (Infection of the brain itself)
   - Germs infect the brain tissue
   - Causes confusion, seizures, and personality changes
   - Usually caused by viruses

3. **Brain Abscess** (Pocket of infection)
   - Collection of pus inside the brain
   - Like a boil or pimple inside the head
   - Usually caused by bacteria

**How Infections Reach the Brain:**

- Through the bloodstream from another body part
- From nearby infections (ear, sinus)
- Through nerves (like rabies traveling up nerves)
- Through skull fractures or surgery

**Common Germs:**

- **Bacteria**: Can cause severe, life-threatening infections
- **Viruses**: Usually milder but can be serious
- **Fungi**: Usually affect people with weak immune systems
- **Parasites**: Rare but can cause serious problems

**Warning Signs:**

- High fever with severe headache
- Stiff neck
- Confusion or altered behavior
- Sensitivity to light
- Seizures
- Nausea and vomiting

**Treatment:**

- Antibiotics for bacterial infections (urgent!)
- Antiviral medicines for some viral infections
- Antifungal medicines for fungal infections
- Sometimes surgery to drain abscesses

These infections are medical emergencies and need immediate treatment.`,
      keyTerms: [
        { term: 'meningitis', definition: 'Infection and inflammation of the membranes covering the brain and spinal cord' },
        { term: 'encephalitis', definition: 'Infection and inflammation of the brain tissue itself' },
        { term: 'abscess', definition: 'A collection of pus surrounded by inflamed tissue' },
        { term: 'pathogen', definition: 'A germ that causes disease' },
        { term: 'meninges', definition: 'The three protective layers covering the brain and spinal cord' },
      ],
      analogies: [
        'Meningitis is like an infection of the cushion wrapping around a delicate package.',
        'Encephalitis is like a computer virus that attacks the main processor directly.',
        'A brain abscess is like a pimple filled with pus that forms inside the brain.',
      ],
      examples: [
        'Bacterial meningitis is a medical emergency requiring antibiotics within hours.',
        'Herpes simplex virus is a common cause of severe encephalitis.',
        'Brain abscesses can develop from sinus infections or dental infections spreading.',
      ],
    },
    2: {
      level: 2,
      summary: 'CNS infections include meningitis, encephalitis, and focal suppurative infections (abscess), caused by bacteria, viruses, fungi, or parasites, with distinct clinical presentations and diagnostic approaches.',
      explanation: `**Meningitis:**

**Bacterial Meningitis:**
- Etiology varies by age:
  - Neonates: Group B strep, E. coli, Listeria
  - Children/Adults: Streptococcus pneumoniae, Neisseria meningitidis
  - Elderly/Immunocompromised: Listeria, gram-negatives
- Clinical: Fever, headache, nuchal rigidity, photophobia
- Kernig and Brudzinski signs
- CSF: Elevated neutrophils, low glucose, elevated protein
- Complications: Hearing loss, cognitive deficits, death

**Viral Meningitis (Aseptic):**
- Most common cause: Enteroviruses
- Others: HSV-2, VZV, arboviruses
- Clinical: Similar but less severe than bacterial
- CSF: Lymphocytic pleocytosis, normal glucose
- Self-limited course

**Fungal Meningitis:**
- Cryptococcus (HIV/AIDS patients)
- Coccidioides, Histoplasma (endemic areas)
- Candida (immunocompromised)
- Chronic/subacute course
- CSF: Lymphocytic, low glucose, elevated protein

**Tuberculous Meningitis:**
- Subacute onset over weeks
- Base of brain involvement
- Cranial nerve palsies common
- High morbidity and mortality

**Encephalitis:**

**Herpes Simplex Encephalitis:**
- Most common sporadic encephalitis
- HSV-1 typically
- Temporal lobe involvement
- Fever, altered mental status, seizures
- Hemorrhagic necrosis
- Urgent IV acyclovir indicated

**Arboviral Encephalitides:**
- Mosquito-borne: West Nile, Eastern/Western equine, St. Louis
- Tick-borne: Powassan
- Seasonal occurrence
- Supportive care

**Autoimmune Encephalitis:**
- NMDA receptor encephalitis
- LGI1, CASPR2 encephalitis
- Associated with tumors (paraneoplastic)
- Immunotherapy responsive

**Brain Abscess:**

**Pathophysiology:**
- Direct spread from contiguous focus (sinus, ear, dental)
- Hematogenous spread (endocarditis, lung abscess)
- Post-traumatic or post-surgical
- Four stages: Early cerebritis, late cerebritis, early capsule, late capsule

**Clinical:**
- Headache (most common)
- Fever (may be absent)
- Focal neurological deficits
- Seizures
- Signs of increased intracranial pressure

**Microbiology:**
- Streptococci (most common)
- Anaerobes: Bacteroides, Prevotella
- Staphylococcus aureus (post-traumatic, hematogenous)
- Gram-negatives (especially after sinusitis)

**Prion Diseases:**

**Creutzfeldt-Jakob Disease (CJD):**
- Sporadic (85%), genetic (15%), acquired (<1%)
- Rapidly progressive dementia
- Myoclonus, visual/cerebellar signs
- Periodic sharp wave complexes on EEG
- Elevated 14-3-3 and tau in CSF
- RT-QuIC highly sensitive and specific

**Variant CJD:**
- Bovine spongiform encephalopathy (BSE) related
- Younger patients
- Psychiatric onset
- "Pulvinar sign" on MRI

**Diagnosis:**

**CSF Analysis:**
- Cell count, glucose, protein
- Gram stain, culture
- PCR for HSV, VZV, enterovirus
- Cryptococcal antigen
- Lactate (bacterial vs viral)

**Imaging:**
- MRI with contrast
- CT before LP if mass effect suspected
- FLAIR, DWI sequences helpful

**Other:**
- Blood cultures
- Serologies
- Brain biopsy (selected cases)`,
      keyTerms: [
        { term: 'nuchal rigidity', definition: 'Stiffness of the neck due to meningeal irritation' },
        { term: 'pleocytosis', definition: 'Increased cell count in CSF' },
        { term: 'cerebritis', definition: 'Inflammatory stage before abscess capsule forms' },
        { term: 'prion', definition: 'Infectious protein causing transmissible spongiform encephalopathy' },
        { term: 'aseptic meningitis', definition: 'Meningitis with negative bacterial cultures; usually viral' },
      ],
      analogies: [
        'Bacterial meningitis acts like a wildfire spreading quickly and needs immediate extinguishing with antibiotics.',
        'Viral encephalitis is like targeted sabotage of specific brain regions.',
        'A brain abscess is like a fortress of infection surrounded by the body\'s defensive walls.',
      ],
    },
    3: {
      level: 3,
      summary: 'CNS infections involve complex pathophysiology including blood-brain barrier penetration, host immune responses, and specific microbial virulence factors, with management guided by epidemiology and diagnostic testing.',
      explanation: `**Pathophysiology:**

**Blood-Brain Barrier Penetration:**
- Transcellular transport
- Trojan horse mechanisms (infected monocytes)
- Direct neural spread (rabies, HSV)
- Retrograde axonal transport

**Host Immune Response:**
- Microglial activation
- Cytokine storm in severe infection
- Neutrophilic infiltration in bacterial meningitis
- Lymphocytic response in viral/fungal infections
- Bystander neuronal injury

**Routes of Infection:**

**Hematogenous Spread:**
- Most common for meningitis
- Choroid plexus seeding
- Cerebral microabscesses
- Endocarditis, septic emboli

**Direct Extension:**
- Sinuses: Frontal lobe abscess
- Mastoid/ear: Temporal lobe or cerebellar abscess
- Dental infections: Frontal lobe
- Osteomyelitis

**Post-Traumatic/Post-Surgical:**
- CSF leak
- Contaminated wounds
- Foreign bodies
- Ventriculoperitoneal shunts

**Specific Pathogens:**

**Bacterial Virulence Factors:**
- S. pneumoniae: Polysaccharide capsule
- N. meningitidis: Capsule, pili, LOS
- H. influenzae: Capsule (type b)
- Listeria: Internalins, hemolysin

**Viral Tropism:**
- HSV: Neuroinvasive, latency in ganglia
- Rabies: Axonal transport to CNS
- Enteroviruses: Bloodstream to CNS
- Arboviruses: Hematogenous, blood-brain barrier disruption

**HIV and the CNS:**
- HIV encephalitis/AIDS dementia complex
- Opportunistic infections
- Primary CNS lymphoma
- HAART effects (IRIS)

**Fungal Infections:**

**Cryptococcus neoformans:**
- Polysaccharide capsule
- Immunocompromised hosts
- Basal meningitis
- Elevated intracranial pressure
- India ink or cryptococcal antigen

**Coccidioides immitis:**
- Endemic Southwest US
- Basilar meningitis
- Chronic course
- High relapse rate

**Histoplasma capsulatum:**
- Ohio/Mississippi River valleys
- Disseminated disease
- Meningitis, mass lesions

**Parasitic Infections:**

**Neurocysticercosis:**
- Taenia solium (pork tapeworm)
- Most common cause of acquired epilepsy worldwide
- Vesicular, colloidal, granular, calcified stages
- Seizures, hydrocephalus, mass effect
- Albendazole + steroids

**Toxoplasmosis:**
- Toxoplasma gondii
- Ring-enhancing lesions in HIV/AIDS
- Reactivation of latent infection
- Pyrimethamine + sulfadiazine + leucovorin

**Cerebral Malaria:**
- Plasmodium falciparum
- Sequestration in cerebral vessels
- Coma, seizures
- Mortality up to 20%

**Treatment Principles:**

**Bacterial Meningitis:**
- Empiric antibiotics based on age/risk factors
- Dexamethasone before or with first antibiotic dose
- Vancomycin + ceftriaxone (adults)
- Add ampicillin if Listeria risk
- Duration: 10-14 days typically

**Herpes Encephalitis:**
- IV acyclovir 10 mg/kg q8h for 14-21 days
- Start empirically if suspected
- Delay increases mortality

**Brain Abscess:**
- Surgical drainage vs antibiotics alone
- Empiric: Vancomycin + ceftriaxone + metronidazole
- 6-8 week antibiotic course
- Serial imaging to monitor response

**Prognostic Factors:**
- Time to appropriate treatment
- Host immune status
- Pathogen virulence
- Complications: Stroke, hydrocephalus, herniation`,
      keyTerms: [
        { term: 'neurotropism', definition: 'Affinity of a pathogen for neural tissue' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome; paradoxical worsening' },
        { term: 'ring-enhancing lesion', definition: 'Contrast enhancement pattern seen in abscess, tumor, toxoplasmosis' },
        { term: 'cerebritis', definition: 'Inflammatory brain tissue before abscess formation' },
        { term: 'Trojan horse', definition: 'Pathogen transport inside host cells across blood-brain barrier' },
      ],
      clinicalNotes: 'Dexamethasone for bacterial meningitis reduces hearing loss and neurological complications. Give 10-20 minutes before or with the first antibiotic dose. Continue for 2-4 days. Do not delay antibiotics for CT/LP in unstable patients.',
    },
    4: {
      level: 4,
      summary: 'Advanced CNS infection management includes interpretation of complex imaging patterns, management of raised intracranial pressure, treatment of opportunistic infections in immunocompromised hosts, and emerging infectious threats.',
      explanation: `**Neuroimaging Patterns:**

**Meningitis:**
- MRI more sensitive than CT
- Leptomeningeal enhancement
- FLAIR hyperintensity in sulci
- Complications: Hydrocephalus, infarcts, venous thrombosis

**Encephalitis:**
- HSV: Temporal lobe hyperintensity (T2/FLAIR)
- Restricted diffusion early
- Hemorrhagic conversion
- Post-encephalitic atrophy

**Brain Abscess:**
- Ring-enhancing lesion
- Capsule formation visible
- DWI: Restricted diffusion in center (pus)
- Differentiate from tumor (no restricted diffusion)
- MRS: Amino acid peak (0.9 ppm)

**Tuberculosis:**
- Basal meningeal enhancement
- Tuberculomas (ring-enhancing)
- Hydrocephalus common
- Vasculitis and infarcts

**Toxoplasmosis vs Lymphoma:**
- Toxo: Multiple lesions, "eccentric target" sign
- Lymphoma: Solitary or periventricular, restricted diffusion
- Thallium-201 SPECT: Lymphoma avid, toxo cold
- CSF PCR for EBV (lymphoma)

**Progressive Multifocal Leukoencephalopathy (PML):**
- JC virus reactivation
- Immunosuppression (HIV, natalizumab)
- Non-enhancing white matter lesions
- No mass effect
- Poor prognosis

**Raised Intracranial Pressure Management:**

**Cryptococcal Meningitis:**
- Opening pressure often elevated (>250 mm H2O)
- Serial LPs or ventriculostomy
- Acetazolamide (limited role)
- Shunting if chronic

**Cerebral Malaria:**
- Coma, seizures, brain swelling
- Exchange transfusion in severe cases
- Mannitol (controversial)
- Mechanical ventilation

**Immunocompromised Hosts:**

**HIV/AIDS:**
- CD4 count guides differential
- <200: Toxoplasmosis, PCP, cryptococcosis
- <100: PML, CMV, MAC
- <50: CNS lymphoma
- IRIS management

**Transplant Recipients:**
- Timing post-transplant guides etiology
- <1 month: nosocomial, donor-derived
- 1-6 months: opportunistic (CMV, fungi, Listeria)
- >6 months: community-acquired, PTLD

**Biologics and Immunomodulators:**
- Natalizumab: PML risk (JC virus)
- TNF inhibitors: TB, fungal reactivation
- Rituximab: PML, viral infections
- Steroids: Broad susceptibility

**Emerging and Re-emerging Infections:**

**Zika Virus:**
- Congenital microcephaly
- Guillain-Barre syndrome
- Vector control essential

**West Nile Virus:**
- Flaccid paralysis syndrome
- Movement disorders (tremor, myoclonus, parkinsonism)
- Persistent fatigue

**Chikungunya:**
- Encephalitis, myelopathy
- Post-infectious syndromes
- Chronic arthritis

**COVID-19 Neurological Manifestations:**
- Encephalopathy (most common)
- Encephalitis (rare)
- Stroke (hypercoagulability)
- Guillain-Barre syndrome
- Long COVID symptoms

**Antimicrobial Resistance:**
- Drug-resistant S. pneumoniae
- ESBL-producing Enterobacterales
- Carbapenem-resistant organisms
- Multidrug-resistant TB
- Empiric therapy modifications

**Neurosurgical Considerations:**

**Shunt Infections:**
- Staphylococcus epidermidis (most common)
- Externalization vs removal
- Intrathecal antibiotics
- Reimplantation timing

**Post-Neurosurgical Meningitis:**
- Gram-negatives, Staph aureus
- CSF leak management
- Prophylaxis controversies

**Prophylaxis:**
- Pre-surgical antibiotics
- Indication-based regimens
- Duration optimization
- Resistance patterns`,
      keyTerms: [
        { term: 'MRS', definition: 'Magnetic resonance spectroscopy; identifies metabolites' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder; EBV-related' },
        { term: 'IRIS', definition: 'Immune reconstitution inflammatory syndrome' },
        { term: 'eccentric target sign', definition: 'Toxoplasmosis lesion with enhancing nodule eccentrically placed' },
        { term: 'PML', definition: 'Progressive multifocal leukoencephalopathy; JC virus demyelination' },
      ],
      clinicalNotes: 'The "eccentric target sign" (small enhancing nodule along the wall of the ring-enhancing lesion) suggests toxoplasmosis over lymphoma. However, empirical anti-toxoplasma treatment with brain biopsy if no response at 2 weeks is the standard approach in HIV patients with ring-enhancing lesions.',
    },
    5: {
      level: 5,
      summary: 'Expert-level CNS infection management encompasses complex diagnostic algorithms in immunocompromised patients, emerging pathogen preparedness, antimicrobial stewardship, and research on host-pathogen interactions.',
      explanation: `**Complex Diagnostic Scenarios:**

**Chronic Meningitis:**
- Definition: Symptoms >4 weeks
- Differential: TB, fungal, carcinomatous, sarcoid, vasculitis
- Repeated CSF examinations
- Meningeal biopsy (selected cases)
- Metagenomic sequencing

**Encephalopathy of Unknown Origin:**
- Autoimmune encephalitis panel
- Paraneoplastic panel
- CSF cytokine profiling
- Brain biopsy considerations
- Treatment trials (IVIG, steroids, PLEX)

**Metagenomic Sequencing:**
- Unbiased pathogen detection
- mNGS (metagenomic next-generation sequencing)
- CSF and tissue applications
- Cost and sensitivity considerations
- Complement to conventional testing

**Host-Pathogen Interaction Research:**

**Genetic Susceptibility:**
- Complement factor H in meningococcal disease
- TLR polymorphisms
- MCP-1 variants in HIV-associated dementia
- Pharmacogenomics of CNS penetration

**Microbiome and CNS:**
- Gut-brain axis in CNS infections
- Probiotic therapeutic potential
- Dysbiosis and susceptibility
- Bidirectional signaling

**Immunotherapy in CNS Infections:**

**Adjunctive Corticosteroids:**
- Bacterial meningitis (established benefit)
- TB meningitis (benefit)
- Viral encephalitis (controversial, except HSV if cerebral edema)
- Timing and dosing optimization

**Intravenous Immunoglobulin:**
- Autoimmune encephalitis
- Severe infections with immunomodulation
- Guillain-Barre syndrome variants

**Plasma Exchange:**
- Acute disseminated encephalomyelitis (ADEM)
- Neuromyelitis optica spectrum disorder
- Severe autoimmune encephalitis

**Antimicrobial Stewardship:**

**De-escalation Strategies:**
- Culture and PCR-directed therapy
- Narrowing spectrum when possible
- Duration optimization
- Oral switch protocols

**Therapeutic Drug Monitoring:**
- CSF penetration considerations
- Protein binding effects
- Organ function adjustments
- PK/PD optimization

**Resistance Surveillance:**
- Local antibiograms
- Molecular resistance testing
- Infection control measures
- Global health implications

**Emerging Infectious Disease Preparedness:**

**Surveillance Systems:**
- ArboNET for arboviruses
- Emerging Infections Network
- Global health security
- One Health approach

**Research Preparedness:**
- Platform trial designs
- Master protocols
- Rapid diagnostic development
- Vaccine platform technologies

**Outbreak Response:**
- Nipah virus
- Hendra virus
- Enterovirus D68 (AFM)
- Novel coronaviruses

**Special Populations:**

**Neonatal CNS Infections:**
- Group B streptococcal prevention
- Intrapartum antibiotic prophylaxis
- CSF interpretation challenges
- Neurodevelopmental outcomes

**Elderly Patients:**
- Atypical presentations
- Functional decline as only sign
- Polypharmacy interactions
- Vaccination importance

**Refugee and Migrant Health:**
- TB screening and treatment
- Parasitic infections
- Vaccination gaps
- Health system navigation

**Research Frontiers:**

**Host-Directed Therapies:**
- Immunomodulation
- Blood-brain barrier modulation
- Neuroprotection strategies
- Repurposed drugs

**Vaccine Development:**
- Universal vaccines (influenza, flaviviruses)
- mRNA technology applications
- CNS-specific delivery challenges
- T cell-based approaches

**Advanced Diagnostics:**
- CRISPR-based detection
- Biosensor technologies
- Point-of-care platforms
- Artificial intelligence interpretation`,
      keyTerms: [
        { term: 'metagenomic sequencing', definition: 'Sequencing all genetic material in a sample to identify pathogens' },
        { term: 'mNGS', definition: 'Metagenomic next-generation sequencing' },
        { term: 'PK/PD', definition: 'Pharmacokinetic/pharmacodynamic; optimizing drug exposure' },
        { term: 'arbovirus', definition: 'Arthropod-borne virus transmitted by mosquitoes or ticks' },
        { term: 'One Health', definition: 'Integrated approach recognizing health connections between humans, animals, environment' },
      ],
      clinicalNotes: 'Expert diagnostic approach: In chronic meningitis with negative conventional tests, consider meningeal biopsy for histopathology and metagenomic sequencing. The yield is higher when targeting enhancing areas seen on MRI. Autoimmune and neoplastic causes must be thoroughly excluded.',
    },
  },

  media: [
    {
      id: 'meningitis-mri',
      type: 'image',
      filename: 'meningitis-mri-enhancement.jpg',
      title: 'Meningitis MRI',
      description: 'Contrast-enhanced MRI showing leptomeningeal enhancement',
    },
  ],

  citations: [
    {
      id: 'brouwer-meningitis',
      type: 'article',
      title: 'Corticosteroids for Acute Bacterial Meningitis',
      authors: ['Brouwer, M.C.'],
      source: 'Cochrane Database of Systematic Reviews',
    },
    {
      id: 'tunkel-guidelines',
      type: 'article',
      title: 'The Management of Encephalitis: Clinical Practice Guidelines',
      authors: ['Tunkel, A.R.'],
      source: 'Clinical Infectious Diseases',
    },
  ],

  crossReferences: [
    { targetId: 'pathology-neurodegeneration', targetType: 'condition', relationship: 'related', label: 'Neurodegeneration' },
    { targetId: 'pathology-brain-tumors', targetType: 'condition', relationship: 'related', label: 'Brain Tumors' },
    { targetId: 'clinical-lumbar-puncture', targetType: 'concept', relationship: 'see-also', label: 'Lumbar Puncture' },
  ],

  tags: {
    systems: ['nervous'],
    topics: ['pathology', 'infectious-disease', 'neurology'],
    keywords: ['meningitis', 'encephalitis', 'brain abscess', 'infection', 'CNS', 'HSV', 'cryptococcus'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['neurology', 'medicine'],
    },
  },

  createdAt: '2026-01-28T12:00:00.000Z',
  updatedAt: '2026-01-28T12:00:00.000Z',
  version: 1,
  status: 'published',
};

export default cnsInfections;
