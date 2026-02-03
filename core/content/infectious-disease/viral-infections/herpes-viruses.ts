import { EducationalContent } from '../../types';

export const herpesViruses: EducationalContent = {
  id: 'infectious-disease-herpes-viruses',
  type: 'concept',
  name: 'Herpesvirus Infections',
  alternateNames: ['Herpesviridae', 'Herpes Family Viruses', 'HHV Infections'],

  levels: {
    1: {
      level: 1,
      summary: 'Herpesviruses are a family of viruses that cause lifelong infections including cold sores, chickenpox, and mononucleosis, often staying dormant in the body and reactivating later.',
      explanation: `Herpesviruses are a large family of viruses that infect humans. Once you get a herpesvirus infection, the virus stays in your body for life. It can be dormant (sleeping) for long periods and reactivate later, causing symptoms again.

**The Eight Human Herpesviruses:**

1. **HSV-1 (Herpes Simplex Virus 1)**
   - Causes cold sores on lips
   - Very common (majority of adults have it)
   - Spread by kissing, sharing utensils

2. **HSV-2 (Herpes Simplex Virus 2)**
   - Causes genital herpes
   - Sexually transmitted
   - Causes painful blisters

3. **Varicella-Zoster Virus (VZV)**
   - Causes chickenpox (first infection)
   - Can reactivate as shingles later
   - Vaccines available for both

4. **Epstein-Barr Virus (EBV)**
   - Causes mononucleosis ("mono")
   - Spread through saliva ("kissing disease")
   - Extreme fatigue, sore throat

5. **Cytomegalovirus (CMV)**
   - Usually no symptoms in healthy people
   - Dangerous for unborn babies
   - Dangerous for immunocompromised

6. **HHV-6 and HHV-7**
   - Cause roseola (high fever then rash in children)
   - Very common in early childhood

7. **HHV-8 (Kaposi Sarcoma Virus)**
   - Causes rare cancer (Kaposi sarcoma)
   - Mainly in immunocompromised

**Key Features:**
- Stay in body for life after first infection
- Can reactivate during stress or illness
- Antiviral medications can help control symptoms
- Vaccines available for chickenpox and shingles`,
      keyTerms: [
        { term: 'herpesvirus', definition: 'A family of viruses that cause lifelong infections' },
        { term: 'dormant', definition: 'Inactive or sleeping state of virus' },
        { term: 'reactivate', definition: 'When a dormant virus becomes active again' },
        { term: 'mononucleosis', definition: 'Illness with fever, sore throat, and fatigue caused by EBV' },
      ],
      analogies: [
        'Herpesviruses are like houseguests who never leave - they move in permanently and sometimes wake up and make noise when conditions are right.',
        'Think of viral dormancy like a bear hibernating - the virus is still there but quiet until something wakes it up.',
      ],
      examples: [
        'A person gets a cold sore on their lip during times of stress.',
        'An elderly person develops shingles (painful rash) decades after having chickenpox.',
        'A college student has extreme fatigue and swollen glands from mononucleosis.',
      ],
    },
    2: {
      level: 2,
      summary: 'Herpesviruses are DNA viruses establishing lifelong latency in host cells, with clinical manifestations ranging from mucocutaneous lesions to systemic disease, requiring antiviral therapy for severe or frequent recurrences.',
      explanation: `The herpesvirus family (Herpesviridae) includes eight distinct viruses that infect humans, sharing the characteristic of establishing latency after primary infection and having the capacity to reactivate throughout life.

**Herpesvirus Biology:**

*Structure:*
- Enveloped DNA viruses
- Icosahedral capsid
- Large double-stranded DNA genome
- Tegument proteins between envelope and capsid

*Life Cycle:*
1. Primary infection at epithelial site
2. Local replication and spread
3. Invasion of sensory or lymphoid nerves
4. Establishment of latency in nerve ganglia or lymphocytes
5. Reactivation under stress, immunosuppression, or UV light
6. Return to epithelial site causing recurrent disease

**Clinical Syndromes:**

*Herpes Simplex Virus (HSV-1 and HSV-2):*

*Primary Infection:*
- Gingivostomatitis (HSV-1 in children)
- Genital herpes (HSV-2 mainly)
- May be asymptomatic

*Recurrent Infection:*
- Prodrome: Tingling, burning before lesions
- Vesicular lesions on erythematous base
- Painful, self-limited
- Triggered by stress, UV, fever, immunosuppression

*Complications:*
- Herpetic whitlow (finger infection)
- Herpetic keratitis (eye infection - leading infectious cause of blindness)
- Eczema herpeticum (in patients with eczema)
- Encephalitis (temporal lobe)
- Neonatal herpes

*Varicella-Zoster Virus (VZV):*

*Primary (Varicella/Chickenpox):*
- Highly contagious
- Vesicular rash in crops
- Fever, malaise
- More severe in adults

*Latency:*
- Dorsal root ganglia
- Lifelong persistence

*Reactivation (Herpes Zoster/Shingles):*
- Dermatomal distribution
- Pain often precedes rash
- Post-herpetic neuralgia (chronic pain)
- Ophthalmic zoster (V1 distribution)
- Ramsay Hunt syndrome (facial nerve)

**Epstein-Barr Virus (EBV):**

*Infectious Mononucleosis:*
- Sore throat, fever, lymphadenopathy
- Fatigue lasting weeks to months
- Splenomegaly
- Atypical lymphocytosis

*Other Associations:*
- Burkitt lymphoma
- Nasopharyngeal carcinoma
- Post-transplant lymphoproliferative disorder
- Oral hairy leukoplakia (HIV)

**Cytomegalovirus (CMV):**

*Immunocompetent:*
- Usually asymptomatic
- Mononucleosis-like syndrome

*Immunocompromised:*
- Retinitis (HIV/AIDS)
- Colitis, esophagitis
- Pneumonitis
- Encephalitis

*Congenital:*
- Sensorineural hearing loss
- Chorioretinitis
- Microcephaly
- Most common infectious cause of birth defects in US`,
      keyTerms: [
        { term: 'latency', definition: 'State where virus is present but not actively replicating' },
        { term: 'ganglia', definition: 'Clusters of nerve cell bodies' },
        { term: 'dermatomal', definition: 'Following the distribution of a single nerve root' },
        { term: 'gingivostomatitis', definition: 'Inflammation of gums and mouth' },
        { term: 'post-herpetic neuralgia', definition: 'Chronic pain after shingles' },
      ],
      analogies: [
        'The herpesvirus life cycle is like a terrorist cell - it establishes a hidden base (latency) and launches attacks (reactivation) when defenses are down.',
      ],
      examples: [
        'A patient with HIV develops CMV retinitis threatening vision.',
        'A pregnant woman with primary CMV infection has a baby with hearing loss.',
        'A wrestler gets herpes gladiatorum (HSV-1) from skin contact.',
      ],
    },
    3: {
      level: 3,
      summary: 'Herpesvirus pathogenesis involves cell tropism, immune evasion strategies, and establishment of latency with episomal maintenance, with treatment using nucleoside analogs targeting viral DNA polymerase.',
      explanation: `Herpesviruses have evolved sophisticated mechanisms to infect host cells, evade immune responses, and establish lifelong persistence through latency-associated gene expression.

**Pathogenesis Mechanisms:**

*Cell Entry:*
- Viral envelope glycoproteins bind host receptors
- HSV: HveA, HveC, nectin-1
- EBV: CD21 (CR2), MHC class II
- CMV: Multiple receptors including EGFR, PDGFR-alpha
- Fusion with cell membrane

*Immune Evasion:*
- Downregulation of MHC class I
- Inhibition of complement
- Viral chemokine homologs
- Inhibition of apoptosis
- Interference with interferon signaling

*Latency Establishment:*

*HSV Latency:*
- Sensory neuron ganglia (trigeminal, sacral)
- LAT (Latency-Associated Transcript)
- Circular episomal DNA
- Minimal viral gene expression
- Reactivation via stress, UV, immunosuppression

*EBV Latency:*
- B lymphocytes
- Three latency programs (I, II, III)
- Different gene expression patterns
- Associated with oncogenesis

*VZV Latency:*
- Dorsal root and cranial nerve ganglia
- Limited gene expression
- Reactivation causes shingles

**Antiviral Therapy:**

*Nucleoside Analogs:*
- Acyclovir (oral, IV)
- Valacyclovir (prodrug of acyclovir, better bioavailability)
- Famciclovir (prodrug of penciclovir)
- Ganciclovir (for CMV)
- Valganciclovir (oral prodrug)

*Mechanism:*
- Require viral thymidine kinase for activation
- Triphosphate form inhibits viral DNA polymerase
- Chain termination
- High therapeutic index (selective toxicity)

*Resistance:*
- Thymidine kinase mutations
- DNA polymerase mutations
- Rare in immunocompetent
- More common in immunocompromised

*Other Agents:*
- Foscarnet (pyrophosphate analog)
- Cidofovir (nucleotide analog)
- Fomivirsen (CMV retinitis)
- Letermovir (CMV prophylaxis)

**Diagnosis:**

*HSV:*
- Viral culture (gold standard)
- PCR (most sensitive)
- Tzanck smear (rapid, less sensitive)
- Type-specific serology

*VZV:*
- PCR of lesion
- Direct fluorescent antibody
- Serology for immunity testing

*EBV:*
- Heterophile antibody (Monospot)
- EBV-specific serology (VCA, EBNA, EA)
- PCR for viral load (transplant)

*CMV:*
- PCR (blood, CSF, tissue)
- pp65 antigenemia
- Shell vial culture
- Serology less useful in immunocompromised`,
      keyTerms: [
        { term: 'tropism', definition: 'Specific cells or tissues a virus can infect' },
        { term: 'episome', definition: 'Extrachromosomal DNA molecule' },
        { term: 'thymidine kinase', definition: 'Viral enzyme that activates antiviral drugs' },
        { term: 'chain termination', definition: 'Incorporation of drug preventing DNA elongation' },
        { term: 'antigenemia', definition: 'Antigen present in blood' },
      ],
    },
    4: {
      level: 4,
      summary: 'Management of herpesvirus infections requires recognition of CNS disease, neonatal infection, immunocompromised host complications, and appropriate use of antiviral prophylaxis and suppressive therapy.',
      explanation: `Clinical management of herpesvirus infections encompasses treatment of primary and recurrent disease, prevention of complications, and special considerations for vulnerable populations including neonates and immunocompromised patients.

**HSV Encephalitis:**

*Clinical Features:*
- Fever, headache, altered mental status
- Focal neurologic deficits
- Temporal lobe predilection
- High mortality if untreated

*Diagnosis:*
- MRI: Temporal lobe enhancement
- CSF PCR: Gold standard
- EEG: Periodic lateralized epileptiform discharges
- Brain biopsy rarely needed now

*Treatment:*
- Acyclovir 10 mg/kg IV q8h x 14-21 days
- Start empirically while awaiting PCR
- Monitor renal function
- Neurologic sequelae common

**Neonatal Herpes:**

*Transmission:*
- Intrapartum (most common)
- Intrauterine (rare)
- Postnatal

*Risk:*
- Highest with primary maternal infection
- Lower with recurrent disease

*Classification:*
- Skin/eye/mouth (SEM)
- CNS disease
- Disseminated disease

*Treatment:*
- Acyclovir IV
- Higher dose for CNS/disseminated
- Duration: 14-21 days
- High mortality/morbidity

**Genital Herpes Management:**

*Episodic Treatment:*
- Start at prodrome or within 24 hours
- Shortens lesion duration
- Reduces viral shedding

*Suppressive Therapy:*
- Daily antiviral for frequent recurrences
- Reduces transmission
- Reduces outbreaks by 70-80%
- Safe for long-term use

*Pregnancy:*
- Acyclovir safe
- Suppressive therapy from 36 weeks for HSV-2
- Cesarean delivery if active lesions at labor

**CMV in Transplant:**

*Prevention:*
- Prophylaxis (valganciclovir) vs preemptive therapy
- Prophylaxis for high-risk (D+/R-)
- Preemptive for others

*Treatment:*
- Ganciclovir first-line
- Foscarnet if resistant
- Reduce immunosuppression
- CMV immunoglobulin adjunct

**VZV Management:**

*Primary Varicella:*
- Supportive care in children
- Acyclovir for adults, immunocompromised
- Aspirin contraindicated (Reye syndrome)

*Shingles:*
- Antivirals within 72 hours reduce duration
- Pain management essential
- Prevention of post-herpetic neuralgia
- Gabapentin, TCAs, lidocaine patches

*Post-Herpetic Neuralgia (PHN):*
- Vaccination prevents
- Difficult to treat
- Multimodal pain management
- Prevention better than treatment

*Vaccines:*
- Varicella vaccine (live attenuated)
- Shingrix (recombinant zoster vaccine, preferred)
- Zostavax (live attenuated, less used)

**EBV Management:**
- Supportive care for mono
- Avoid ampicillin/amoxicillin (rash)
- Activity restriction if splenomegaly
- No steroids unless complications
- Rituximab for PTLD

**Acyclovir Resistance:**
- Rare in immunocompetent
- Immunocompromised at risk
- Test if poor response
- Treat with foscarnet or cidofovir`,
      keyTerms: [
        { term: 'encephalitis', definition: 'Inflammation of the brain' },
        { term: 'temporal lobe', definition: 'Brain region affected by HSV' },
        { term: 'prophylaxis', definition: 'Prevention of disease' },
        { term: 'preemptive therapy', definition: 'Treatment based on early detection' },
        { term: 'post-herpetic neuralgia', definition: 'Neuropathic pain lasting >90 days after shingles' },
      ],
      clinicalNotes: 'HSV encephalitis is a neurologic emergency requiring immediate empiric acyclovir. Always test CSF by PCR - clinical diagnosis is unreliable. For shingles, antivirals are most effective within 72 hours of rash onset but may benefit later in severe cases. The recombinant zoster vaccine (Shingrix) is highly effective and preferred for shingles prevention.',
    },
    5: {
      level: 5,
      summary: 'Expert management of herpesvirus infections encompasses transplant-related complications, antiviral resistance mechanisms, novel therapeutics including gene therapy, and vaccine development for HSV and CMV.',
      explanation: `Advanced herpesvirus management addresses complex scenarios in transplantation, emerging drug resistance, investigational therapies, and prevention strategies through vaccination.

**Transplant-Specific Considerations:**

*CMV Disease Patterns:*
- Direct effects: Viral syndrome, tissue-invasive
- Indirect effects: Graft dysfunction, rejection, opportunistic infections, post-transplant lymphoproliferative disorder
- "CMV syndrome": Fever, malaise, myelosuppression, elevated transaminases

*Preemptive vs Prophylaxis:*
- Prophylaxis: All high-risk, reduces indirect effects
- Preemptive: Monitor PCR, treat when rises
- Hybrid approaches

*Refractory/Resistant CMV:*
- Ultradeep sequencing detects resistance mutations
- Maribavir (UL97 kinase inhibitor)
- Letermovir (terminase inhibitor)
- Brincidofovir
- Adoptive T-cell therapy

*Adoptive T-Cell Therapy:*
- CMV-specific cytotoxic T lymphocytes
- For refractory disease
- Donor-derived or third-party
- Under investigation

**Antiviral Resistance:**

*HSV Resistance Mechanisms:*
- TK-deficient (most common): Thymidine kinase null mutations
- TK-altered: Substrate specificity changed
- DNA polymerase mutations
- Higher rates in immunocompromised

*Detection and Management:*
- Phenotypic testing (slow)
- Genotypic testing (rapid)
- Foscarnet for TK-deficient HSV
- Cidofovir alternative
- Combination therapy

**Investigational Therapies:**

*Gene Editing:*
- CRISPR-Cas9 targeting HSV latency
- Preclinical studies
- Challenge: Delivery to neurons

*Therapeutic Vaccines:*
- GEN-003 (HSV-2)
- trivalent HSV-2 vaccine
- Therapeutic CMV vaccines

*Monoclonal Antibodies:*
- CMV hyperimmune globulin
- Neutralizing antibodies
- Prophylaxis and treatment adjuncts

*New Drug Targets:*
- Helicase-primase inhibitors (pritelivir, amenamevir)
- Different mechanism from nucleoside analogs
- Less resistance
- Novel for HSV suppression

**Herpesvirus-Associated Malignancies:**

*EBV-Associated Cancers:*
- Burkitt lymphoma
- Hodgkin lymphoma
- Nasopharyngeal carcinoma
- Gastric carcinoma
- PTLD
- Therapeutic: Rituximab, chemotherapy, EBV-specific CTLs

*HHV-8/KSHV:*
- Kaposi sarcoma
- Primary effusion lymphoma
- Multicentric Castleman disease
- Antiretroviral therapy for HIV-associated
- Chemotherapy, immunomodulation

**Vaccine Development:**

*HSV Vaccines:*
- Prevention vs therapeutic approaches
- Challenges: immune evasion, diverse strains
- glyD subunit vaccine (failed)
- trivalent vaccine in trials

*CMV Vaccines:*
- High priority for congenital prevention
- gB/MF59 vaccine: Partial efficacy
- mRNA-1647 in Phase 3
- Important for transplant patients

**Special Populations:**

*Pregnancy:*
- Primary CMV: Risk of congenital infection
- No approved treatments for maternal CMV
- Hyperimmune globulin investigational
- HSV: Acyclovir suppressive therapy

*HIV/AIDS:*
- HSV: More severe, resistant
- CMV: Retinitis, colitis, esophagitis
- VZV: Multidermatomal, recurrent
- EBV: Oral hairy leukoplakia, lymphoma

**Future Directions:**
- Latency-reversing agents
- CRISPR gene editing
- Better vaccines
- Host-directed therapies
- Personalized antiviral selection based on resistance profiling`,
      keyTerms: [
        { term: 'adoptive T-cell therapy', definition: 'Transfer of antigen-specific T cells' },
        { term: 'ultradeep sequencing', definition: 'Highly sensitive detection of minority variants' },
        { term: 'terminase', definition: 'Viral enzyme required for DNA packaging' },
        { term: 'helicase-primase', definition: 'Enzyme complex for DNA unwinding and primer synthesis' },
        { term: 'PTLD', definition: 'Post-transplant lymphoproliferative disorder' },
      ],
      clinicalNotes: 'CMV management in transplant has evolved from treatment of established disease to sophisticated prevention strategies. Antiviral resistance is increasing in immunocompromised populations - always consider if patient fails to respond. The pipeline for new antivirals targeting different viral enzymes offers hope for resistant infections. HSV gene editing represents a potential cure strategy by eliminating latent viral genomes.',
    },
  },

  media: [],
  citations: [],
  crossReferences: [],
  tags: {
    systems: ['infectious', 'integumentary', 'nervous'],
    topics: ['viral-infections', 'latency', 'antiviral-therapy'],
    keywords: ['herpes', 'HSV', 'shingles', 'CMV', 'EBV', 'acyclovir'],
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};

export default herpesViruses;
