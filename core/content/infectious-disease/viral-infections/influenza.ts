import { EducationalContent } from '../../types';

export const INFLUENZA: EducationalContent = {
  id: 'infectious-disease-influenza',
  type: 'condition',
  name: 'Influenza',
  alternateNames: ['Flu', 'Seasonal Flu', 'Grippe'],
  levels: {
    1: {
      level: 1,
      summary: 'The flu is a contagious illness caused by influenza viruses that infect your nose, throat, and lungs.',
      explanation: `The flu is different from a regular cold. While colds usually come on slowly with a runny nose and sneezing, the flu hits you hard and fast. One day you feel fine, and the next day you feel terrible.

**Common Flu Symptoms:**
- High fever (often 101-104°F)
- Body aches and muscle pain
- Extreme tiredness
- Headache
- Dry cough
- Sore throat
- Stuffy nose

**How the Flu Spreads:**
The flu spreads mainly through tiny droplets when someone with the flu coughs, sneezes, or talks. You can catch it by:
- Being near someone who coughs or sneezes
- Touching a surface with flu virus and then touching your face
- Sharing cups or utensils with someone who is sick

**Why the Flu Can Be Serious:**
Most healthy people recover from the flu in about a week. But the flu can lead to serious problems like pneumonia, especially in:
- Young children
- Elderly people
- Pregnant women
- People with chronic health conditions

**Prevention:**
- Get the flu vaccine every year (the virus changes, so you need a new shot each year)
- Wash your hands often
- Stay away from sick people when possible
- If you're sick, stay home to avoid spreading it

**Treatment:**
Most people just need rest, fluids, and time. Doctors sometimes prescribe antiviral medicines that can help you get better faster if started early.`,
      keyTerms: [
        { term: 'Influenza', definition: 'A virus that causes the flu, infecting the respiratory system' },
        { term: 'Contagious', definition: 'Easily spread from one person to another' },
        { term: 'Vaccine', definition: 'A shot that helps your body fight off a specific disease' },
        { term: 'Antiviral', definition: 'Medicine that fights viruses' },
      ],
    },
    2: {
      level: 2,
      summary: 'Influenza is an acute respiratory illness caused by influenza A or B viruses, characterized by sudden onset of systemic and respiratory symptoms, with annual epidemics and potential for pandemic spread.',
      explanation: `Influenza viruses are RNA viruses that mutate frequently, requiring annual vaccine updates. Understanding influenza biology helps explain its seasonal patterns and outbreak potential.

**Influenza Virus Types:**
- **Influenza A**: Causes most epidemics and all pandemics. Subtyped by hemagglutinin (H) and neuraminidase (N) proteins (e.g., H1N1, H3N2)
- **Influenza B**: Causes epidemics but generally milder illness. Two lineages: Victoria and Yamagata
- **Influenza C**: Causes mild illness, not typically tested for
- **Influenza D**: Primarily affects cattle

**How the Virus Changes:**
- **Antigenic drift**: Small mutations each year. Reason for annual vaccines
- **Antigenic shift**: Major change when viruses mix (reassortment). Can cause pandemics

**Clinical Presentation:**

| Feature | Influenza | Common Cold |
|---------|-----------|-------------|
| Onset | Sudden | Gradual |
| Fever | High (101-104°F), common | Rare |
| Body aches | Severe | Mild |
| Fatigue | Extreme | Mild |
| Headache | Common | Rare |
| Cough | Dry, can be severe | Mild to moderate |

**Complications:**
- Pneumonia (viral or secondary bacterial)
- Myocarditis (heart inflammation)
- Encephalitis (brain inflammation)
- Exacerbation of chronic conditions (asthma, COPD, heart disease)

**Diagnosis:**
- Rapid influenza diagnostic tests (RIDTs): Results in 15-30 minutes, moderate sensitivity
- Molecular tests (PCR): More accurate, results in 1-8 hours
- Viral culture: Gold standard but slow (days)

**Treatment:**

*Antiviral Medications:*
- Oseltamivir (Tamiflu): Oral, 5 days
- Zanamivir (Relenza): Inhaled, 5 days
- Baloxavir (Xofluza): Single oral dose
- Peramivir (Rapivab): IV, single dose

Most effective when started within 48 hours of symptoms.

**Seasonal Flu Vaccine:**
- Trivalent: Protects against 3 strains
- Quadrivalent: Protects against 4 strains (two A, two B)
- Takes about 2 weeks to develop immunity
- Recommended for everyone 6 months and older`,
      keyTerms: [
        { term: 'Hemagglutinin', definition: 'A surface protein on influenza that helps the virus attach to cells' },
        { term: 'Neuraminidase', definition: 'A surface protein on influenza that helps new viruses escape from infected cells' },
        { term: 'Antigenic drift', definition: 'Small genetic mutations that cause gradual changes in the virus over time' },
        { term: 'Antigenic shift', definition: 'Major genetic change creating a new virus subtype, potentially causing a pandemic' },
        { term: 'Pandemic', definition: 'A disease outbreak that spreads across multiple countries or continents' },
      ],
    },
    3: {
      level: 3,
      summary: 'Influenza virus infection involves hemagglutinin-mediated cell entry, replication in respiratory epithelium, and induction of inflammatory responses, with disease severity influenced by viral virulence factors, host immunity, and superinfection risk.',
      explanation: `Understanding influenza requires knowledge of viral structure, replication cycle, immune evasion, and the host response that causes disease manifestations.

**Viral Structure and Replication:**

*Key Proteins:*
- Hemagglutinin (HA): Binds sialic acid receptors, mediates membrane fusion
- Neuraminidase (NA): Cleaves sialic acid, enables virion release
- M2 ion channel: Uncoating (target of amantadine, no longer used due to resistance)
- PB1, PB2, PA: RNA-dependent RNA polymerase complex
- NS1: Interferon antagonist, virulence factor

*Replication Cycle:*
1. Attachment: HA binds sialic acid on respiratory epithelium
2. Endocytosis: Virus internalized in endosome
3. Fusion: Low pH triggers HA conformational change, membrane fusion
4. Nuclear import: Viral RNA enters nucleus
5. Transcription/replication: Uses host machinery
6. Assembly: New virions form at cell membrane
7. Release: NA cleaves sialic acid, enabling spread

**Pathogenesis:**

*Tissue Tropism:*
- Human seasonal influenza: Preferentially binds alpha-2,6 sialic acid (upper respiratory tract)
- Avian influenza: Preferentially binds alpha-2,3 sialic acid (lower respiratory tract in humans)
- This explains why avian influenza causes more severe pneumonia

*Immune Response:*
- Type I interferons limit viral spread
- Cytotoxic T cells clear infected cells
- Antibodies (especially to HA) provide neutralization
- Inflammatory cytokines cause systemic symptoms

*Cytokine Storm:*
Severe cases (especially pandemic strains like H5N1) can trigger:
- Excessive IL-6, TNF-alpha, IL-1 production
- Diffuse alveolar damage
- ARDS
- Multi-organ failure

**Epidemiology:**

*Seasonal Patterns:*
- Temperate regions: Winter peaks (low humidity, indoor crowding)
- Tropical regions: Year-round with rain season peaks
- Global surveillance networks track circulating strains

*Attack Rates:*
- Seasonal influenza: 5-20% of population annually
- R0 approximately 1.3 for seasonal, higher for pandemic strains
- Incubation period: 1-4 days

**Complications:**

*Primary Viral Pneumonia:*
- Direct viral infection of alveoli
- Diffuse bilateral infiltrates
- High mortality, especially in 2009 H1N1 pandemic

*Secondary Bacterial Pneumonia:*
- Follows initial improvement ("biphasic" illness)
- Common pathogens: *S. pneumoniae*, *S. aureus* (including MRSA), *H. influenzae*
- Viral damage to epithelium impairs mucociliary clearance
- Major cause of death in historical pandemics

**Antiviral Pharmacology:**

*Neuraminidase Inhibitors:*
- Oseltamivir: Prodrug, hepatic conversion to active carboxylate
- Zanamivir: Poor oral bioavailability, inhaled
- Peramivir: IV, single dose for severe illness

*Cap-Dependent Endonuclease Inhibitor:*
- Baloxavir: Inhibits viral transcription
- Single dose, convenient but resistance can emerge
- Not recommended for immunocompromised (resistance risk)

*Resistance:*
- H275Y mutation in NA: Oseltamivir resistance
- Surveillance ongoing for emerging resistance patterns`,
      keyTerms: [
        { term: 'Sialic acid', definition: 'A sugar molecule on cell surfaces that influenza hemagglutinin binds to for cell entry' },
        { term: 'Reassortment', definition: 'Exchange of gene segments between different influenza viruses co-infecting the same cell' },
        { term: 'Cytokine storm', definition: 'An excessive inflammatory response characterized by high cytokine levels causing tissue damage' },
        { term: 'R0', definition: 'Basic reproduction number - the average number of people one infected person will infect' },
        { term: 'Mucociliary clearance', definition: 'The mechanism by which the respiratory tract moves mucus and particles out of the airways' },
      ],
    },
    4: {
      level: 4,
      summary: 'Influenza pathobiology involves complex virus-host interactions including receptor binding specificity, polymerase fidelity and adaptation, interferon antagonism, and T cell immunopathology, with implications for pandemic emergence, vaccine strain selection, and therapeutic development.',
      explanation: `Advanced understanding of influenza integrates molecular virology, immunology, epidemiology, and pharmacology to address clinical and public health challenges.

**Molecular Determinants of Virulence:**

*Hemagglutinin:*
- Receptor binding specificity: Amino acids 226, 228 determine alpha-2,3 vs alpha-2,6 preference
- Cleavage site: Polybasic cleavage site allows systemic spread (hallmark of HPAI H5N1)
- HA stability: Affects environmental persistence and transmission

*Polymerase Complex:*
- PB2 627K mutation: Adaptation for efficient replication at mammalian temperatures
- PB1-F2: Pro-apoptotic, enhances bacterial superinfection
- PA-X: Host shutoff protein, immunomodulatory

*NS1 Protein:*
- Binds dsRNA, inhibits RIG-I and PKR activation
- Sequesters CPSF30, inhibiting host mRNA processing
- Variability in NS1 affects virulence across strains

**Immune Evasion and Immunopathology:**

*Antigenic Drift:*
- Error-prone polymerase generates mutations
- Positive selection at antigenic sites on HA head
- Antigenic cartography maps drift patterns
- Challenge for annual vaccine strain selection

*Original Antigenic Sin:*
- First influenza exposure shapes subsequent responses
- Pre-existing memory may limit responses to novel epitopes
- Implications for vaccine design (childhood imprinting effects)

*T Cell Responses:*
- CD8+ responses target conserved internal proteins (NP, M1, PB1)
- Heterosubtypic immunity provides cross-protection
- Balance between protection and immunopathology
- Regulatory T cells modulate inflammatory damage

**Pandemic Preparedness:**

*Pandemic Potential Assessment:*
- Novel subtype (no pre-existing immunity)
- Efficient human-to-human transmission
- Virulence in humans
- Current concerns: H5N1, H7N9, H5N8

*Surveillance Networks:*
- WHO Global Influenza Surveillance and Response System (GISRS)
- CDC FluNet and FluView
- Genetic sequencing for variant detection
- Wastewater surveillance emerging

*Countermeasures:*
- Pre-pandemic vaccine stockpiles
- Rapid vaccine platform development (mRNA, recombinant)
- Antiviral stockpiles
- Non-pharmaceutical interventions

**Vaccine Immunology:**

*Current Vaccines:*
- Inactivated (IIV): Split virion or subunit, intramuscular
- Live attenuated (LAIV): Cold-adapted, intranasal
- Recombinant (RIV): Hemagglutinin produced in insect cells
- Adjuvanted: Enhanced for elderly (MF59, AS03)
- High-dose: Increased antigen for elderly

*Correlates of Protection:*
- HAI titer ≥1:40 associated with 50% protection
- Neuraminidase antibodies contribute to protection
- T cell responses provide heterosubtypic protection

*Universal Vaccine Approaches:*
- HA stalk-directed antibodies (broadly neutralizing)
- Chimeric HA constructs
- M2e-based vaccines
- Neuraminidase-focused strategies
- T cell-inducing vaccines (NP, M1)

**Antiviral Development:**

*Approved Agents:*
- Neuraminidase inhibitors: Well-established, some resistance
- Baloxavir: Novel target, rapid resistance emergence
- IV formulations for severe illness

*Investigational:*
- DAS181 (inhaled sialidase): Removes virus receptors
- Favipiravir: Broad-spectrum polymerase inhibitor
- Pimodivir: PB2 inhibitor (development discontinued)
- Host-directed therapies (immunomodulators)

*Combination Therapy:*
- Rationale: Reduce resistance, improve efficacy
- Oseltamivir + baloxavir studied
- May be most relevant for severe/resistant cases`,
      keyTerms: [
        { term: 'Polybasic cleavage site', definition: 'Multiple basic amino acids at HA cleavage site enabling systemic spread beyond respiratory tract' },
        { term: 'Antigenic cartography', definition: 'Mathematical mapping of antigenic relationships between virus strains using serological data' },
        { term: 'Heterosubtypic immunity', definition: 'Cross-protection against different influenza subtypes, primarily mediated by T cells' },
        { term: 'HAI titer', definition: 'Hemagglutination inhibition titer - a serological measure of antibody response correlating with protection' },
        { term: 'Universal influenza vaccine', definition: 'A vaccine designed to provide broad protection against multiple subtypes and drift variants' },
      ],
      clinicalNotes: 'Clinical decision-making around antiviral treatment balances efficacy (greatest within 48 hours) against the reality that patients often present later. In high-risk patients, consider treatment beyond 48 hours as there may still be benefit. During pandemics, empiric treatment while awaiting testing is appropriate.',
    },
    5: {
      level: 5,
      summary: 'Expert-level influenza management integrates molecular surveillance informing vaccine composition, precision approaches to antiviral therapy including PK/PD optimization and combination strategies, critical care of severe disease including ECMO, and public health preparedness frameworks for pandemic response.',
      explanation: `Mastery of influenza encompasses molecular epidemiology, advanced therapeutics, critical care, and public health leadership during seasonal and pandemic outbreaks.

**Molecular Surveillance and Forecasting:**

*Genomic Epidemiology:*
- Next-generation sequencing enables real-time phylogenetic tracking
- Detection of emerging variants with altered antigenicity or resistance
- Nextstrain and GISAID platforms for global data sharing
- Integration with clinical outcomes data

*Vaccine Strain Selection:*
- WHO consultations (February and September)
- Candidate vaccine viruses generated through reverse genetics
- Lead time of 6+ months creates uncertainty
- Egg-adaptive mutations can reduce vaccine match

*Forecasting Models:*
- Machine learning approaches to predict antigenic drift
- Environmental and mobility data integration
- Real-time R estimation during outbreaks
- Informing public health response intensity

**Severe Influenza Management:**

*Critical Care Considerations:*
- ARDS develops in subset of severe cases
- Lung-protective ventilation essential
- Prone positioning for refractory hypoxemia
- ECMO for refractory cases (survival ~60% in specialized centers)
- Neuromuscular blockade consideration

*Antiviral Optimization:*
- Double-dose oseltamivir (150 mg BID) studied, benefit uncertain
- IV peramivir for patients unable to take oral/inhaled
- Combination therapy (oseltamivir + baloxavir) under study
- Duration may need extension beyond 5 days in severe disease

*Secondary Bacterial Pneumonia:*
- High index of suspicion for bacterial superinfection
- *S. aureus* (including MRSA) particularly concerning
- Empiric antibiotics should cover community respiratory pathogens
- Procalcitonin may help guide antibiotic decisions

**Special Populations:**

*Pregnancy:*
- Increased risk of severe disease, especially third trimester
- Inactivated vaccines safe and recommended in any trimester
- Oseltamivir preferred antiviral (most safety data)
- Treat empirically, don't delay for testing

*Immunocompromised:*
- Prolonged viral shedding (weeks to months)
- Higher risk of resistance emergence
- Extended treatment courses may be needed
- Consider combination therapy
- Avoid baloxavir monotherapy (resistance risk)

*Obesity:*
- Independent risk factor for severe disease (recognized since 2009 pandemic)
- Possible immune dysregulation, altered drug pharmacokinetics
- Vaccination still effective

**Pandemic Response Framework:**

*WHO Phases:*
- Interpandemic, alert, pandemic, transition, post-pandemic
- Informs escalating response measures

*Healthcare System Preparedness:*
- Surge capacity planning
- Ventilator and ECMO allocation frameworks
- Staff protection and absenteeism planning
- Crisis standards of care

*Non-Pharmaceutical Interventions:*
- Masking, distancing, ventilation
- School closures, workplace policies
- Travel restrictions (limited efficacy)
- Evidence base expanded by COVID-19 experience

*Vaccine Deployment:*
- Prioritization frameworks (healthcare workers, high-risk groups)
- Mass vaccination logistics
- Novel platform acceleration (mRNA vaccines demonstrated in COVID-19)
- Post-marketing safety surveillance

**Emerging Research:**

*Broadly Protective Vaccines:*
- Phase II trials of chimeric HA constructs
- mRNA vaccines targeting conserved epitopes
- Nanoparticle display of antigens
- Mucosal vaccine approaches for sterilizing immunity

*Host-Directed Therapies:*
- Immunomodulators to dampen cytokine storm
- Corticosteroids (controversial, generally not recommended)
- JAK inhibitors under investigation

*Novel Antivirals:*
- Direct-acting antivirals targeting polymerase, nucleoprotein
- Host factor targeting (broad-spectrum)
- Monoclonal antibodies (passive immunization)

**One Health Perspective:**
- Zoonotic origins of pandemic strains
- Surveillance at human-animal interface
- Poultry industry practices and H5N1/H7N9 emergence
- Climate change affecting bird migration and transmission dynamics`,
      keyTerms: [
        { term: 'Reverse genetics', definition: 'Laboratory technique to generate influenza viruses from cloned cDNA, enabling vaccine seed virus production' },
        { term: 'Egg-adaptive mutations', definition: 'Genetic changes in vaccine viruses during egg-based production that may reduce vaccine effectiveness' },
        { term: 'GISAID', definition: 'Global Initiative on Sharing All Influenza Data - a platform for sharing viral genomic sequences' },
        { term: 'Crisis standards of care', definition: 'Substantial change in healthcare operations during disasters or pandemics when resources are insufficient for usual standards' },
        { term: 'One Health', definition: 'An approach recognizing the interconnection between human, animal, and environmental health' },
      ],
      clinicalNotes: 'During severe influenza seasons or pandemics, clinical protocols should emphasize early antiviral treatment for high-risk patients regardless of symptom duration, consideration of combination therapy for severe or immunocompromised cases, and vigilance for bacterial superinfection. Communication with public health authorities about severe or unusual cases supports surveillance. Preparedness planning should be ongoing, not reactive.',
    },
  },
  media: [],
  citations: [
    {
      id: 'cdc-flu-2024',
      type: 'website',
      title: 'Seasonal Influenza (Flu)',
      authors: ['Centers for Disease Control and Prevention'],
      source: 'CDC',
      license: 'Copyrighted',
    },
    {
      id: 'uyeki-idsa-2019',
      type: 'article',
      title: 'Clinical Practice Guidelines by the Infectious Diseases Society of America: 2018 Update on Diagnosis, Treatment, Chemoprophylaxis, and Institutional Outbreak Management of Seasonal Influenza',
      authors: ['Uyeki TM', 'Bernstein HH', 'Bradley JS'],
      source: 'Clinical Infectious Diseases',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-vaccination-overview', targetType: 'concept', relationship: 'related', label: 'Vaccination' },
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
    { targetId: 'infectious-disease-covid-19', targetType: 'condition', relationship: 'sibling', label: 'COVID-19' },
  ],
  tags: {
    systems: ['infectious-disease', 'respiratory'],
    topics: ['viral-infections', 'respiratory-infections', 'vaccines'],
    keywords: ['flu', 'influenza', 'H1N1', 'pandemic', 'oseltamivir', 'seasonal'],
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
