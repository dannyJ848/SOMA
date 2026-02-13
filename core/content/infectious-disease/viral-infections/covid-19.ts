import { EducationalContent } from '../../types';

export const COVID_19: EducationalContent = {
  id: 'infectious-disease-covid-19',
  type: 'condition',
  name: 'COVID-19',
  alternateNames: ['Coronavirus Disease 2019', 'SARS-CoV-2 Infection', 'Coronavirus'],
  levels: {
    1: {
      level: 1,
      summary: 'COVID-19 is a respiratory illness caused by a virus called SARS-CoV-2 that spreads mainly through the air.',
      explanation: `COVID-19 is caused by a type of virus called a coronavirus. The virus spreads mainly when an infected person breathes out tiny droplets and particles containing the virus, and other people breathe these in.

**Common Symptoms:**
- Fever or chills
- Cough
- Shortness of breath
- Fatigue (feeling very tired)
- Muscle or body aches
- Loss of taste or smell
- Sore throat
- Runny nose or congestion

**How It Spreads:**
The virus spreads easiest when people are close together, especially indoors. This is why distancing and good ventilation help prevent spread. You can also get it by touching a surface with the virus and then touching your face, though this is less common.

**Who Can Get Very Sick:**
Most people who get COVID-19 have mild symptoms and get better at home. But some people can get very sick and need to go to the hospital. People at higher risk include:
- Older adults
- People with certain health conditions (diabetes, heart disease, obesity)
- People with weakened immune systems

**Prevention:**
- Vaccines greatly reduce the chance of getting very sick
- Washing hands frequently
- Staying home when sick
- Good ventilation and air filtration
- Wearing masks in crowded indoor spaces

**Treatment:**
Most people recover on their own with rest and fluids. For people at higher risk, there are antiviral medications that can help prevent severe illness if taken early.`,
      keyTerms: [
        { term: 'COVID-19', definition: 'A respiratory disease caused by the SARS-CoV-2 virus' },
        { term: 'Coronavirus', definition: 'A family of viruses named for the crown-like spikes on their surface' },
        { term: 'SARS-CoV-2', definition: 'The specific virus that causes COVID-19' },
        { term: 'Ventilation', definition: 'The movement of air in and out of a space, helping reduce spread of airborne viruses' },
      ],
    },
    2: {
      level: 2,
      summary: 'COVID-19 is caused by SARS-CoV-2, an airborne respiratory virus that can cause illness ranging from asymptomatic infection to severe pneumonia and death, with vaccines and antivirals available for prevention and treatment.',
      explanation: `SARS-CoV-2 is a betacoronavirus that emerged in late 2019 and caused a global pandemic. Understanding the virus's biology and the disease it causes has enabled development of effective vaccines and treatments.

**The Virus:**
SARS-CoV-2 has a spike protein that binds to ACE2 receptors on human cells, particularly in the respiratory tract. The virus enters cells and uses their machinery to make copies of itself, which then spread to infect more cells.

**Clinical Spectrum:**

| Severity | Description | Percentage |
|----------|-------------|------------|
| Asymptomatic | No symptoms | ~30-40% |
| Mild | Cold-like symptoms, managed at home | ~40-50% |
| Moderate | Pneumonia, may need hospitalization | ~10-15% |
| Severe | Respiratory failure, ICU care | ~5% |
| Critical | Multi-organ failure | ~1-2% |

**Variants:**
The virus mutates over time, creating variants with different characteristics:
- **Alpha, Beta, Delta**: Early variants with increased transmissibility
- **Omicron and subvariants**: Currently dominant, highly transmissible, somewhat less severe
- New variants continue to emerge as the virus evolves

**Complications:**
- Acute respiratory distress syndrome (ARDS)
- Blood clots (pulmonary embolism, stroke)
- Cardiac injury
- Kidney damage
- Long COVID (persistent symptoms after infection)

**Diagnosis:**
- **PCR tests**: Detect viral genetic material, very accurate
- **Rapid antigen tests**: Detect viral proteins, faster but less sensitive
- Tests most likely positive in first week of symptoms

**Vaccines:**
Multiple vaccine types are available:
- **mRNA vaccines** (Pfizer, Moderna): Teach cells to make spike protein
- **Viral vector vaccines** (J&J, AstraZeneca): Use harmless virus to deliver spike gene
- Vaccines reduce severe illness, hospitalization, and death
- Updated vaccines target current variants

**Treatments:**
- **Antivirals**: Paxlovid (nirmatrelvir/ritonavir), molnupiravir
- Most effective when started within 5 days of symptoms
- Recommended for high-risk individuals
- Monoclonal antibodies (effectiveness varies with variants)`,
      keyTerms: [
        { term: 'ACE2', definition: 'The receptor on human cells that SARS-CoV-2 uses to enter cells' },
        { term: 'Spike protein', definition: 'The protein on the virus surface that attaches to human cells' },
        { term: 'Variant', definition: 'A version of the virus with mutations that make it different from the original' },
        { term: 'Long COVID', definition: 'Symptoms that persist for weeks or months after the initial infection' },
        { term: 'mRNA vaccine', definition: 'A vaccine that uses genetic instructions to teach cells to make a viral protein' },
      ],
    },
    3: {
      level: 3,
      summary: 'SARS-CoV-2 infection pathogenesis involves ACE2-mediated cell entry, viral replication in respiratory epithelium, and dysregulated immune responses, with disease severity influenced by viral factors, host genetics, and comorbidities.',
      explanation: `COVID-19 pathophysiology involves complex interactions between the virus and host immune system, with severity determined by the balance between viral control and inflammatory damage.

**Viral Biology:**

*Structure:*
- Enveloped, positive-sense single-stranded RNA virus
- Four structural proteins: Spike (S), Envelope (E), Membrane (M), Nucleocapsid (N)
- ~30kb genome, largest of RNA viruses
- Proofreading capability (ExoN) reduces mutation rate compared to other RNA viruses

*Cell Entry:*
1. Spike protein binds ACE2 receptor
2. TMPRSS2 protease cleaves spike, enabling fusion
3. Alternatively, endosomal pathway with cathepsin cleavage
4. RNA released into cytoplasm for replication

**Pathogenesis:**

*Phase 1 - Viral Replication:*
- Initial infection of nasopharyngeal epithelium
- Spread to lower respiratory tract
- Peak viral load around symptom onset
- Viral shedding begins 2-3 days before symptoms

*Phase 2 - Pulmonary Phase:*
- Diffuse alveolar damage
- Type II pneumocyte infection
- Inflammatory cell infiltration
- Edema and fibrin deposition

*Phase 3 - Hyperinflammatory Phase:*
- Cytokine release (IL-6, IL-1beta, TNF-alpha)
- ARDS development
- Coagulopathy and thrombosis
- Multi-organ involvement

**Host Factors Affecting Severity:**

*Demographics:*
- Age: Risk increases exponentially over 50
- Male sex: Higher mortality
- Obesity: Independent risk factor

*Genetic Factors:*
- HLA variants affecting T cell responses
- ACE2 expression levels
- Interferon pathway genes (TLR7, IFNAR2)
- Blood type (Type A slightly higher risk)

*Comorbidities:*
- Cardiovascular disease
- Diabetes mellitus
- Chronic kidney disease
- Immunosuppression

**Immune Response:**

*Innate Immunity:*
- Type I interferon response critical for viral control
- SARS-CoV-2 encodes multiple interferon antagonists
- Natural killer cell responses

*Adaptive Immunity:*
- Neutralizing antibodies target spike protein RBD
- T cell responses target multiple viral proteins
- Memory B and T cells provide durable protection
- Hybrid immunity (infection + vaccination) appears most protective

**Variants of Concern:**

*Evolution:*
- Selective pressure from immunity drives spike mutations
- Key mutations: D614G (early), N501Y (Alpha), L452R/E484K (Delta), many in Omicron
- Omicron lineage has >30 spike mutations

*Immune Evasion:*
- Reduced neutralization by antibodies
- Maintained T cell recognition (targets conserved epitopes)
- Explains why vaccines still prevent severe disease despite reduced neutralization

**Thromboinflammation:**
Unique feature of COVID-19:
- Endothelial dysfunction and activation
- Complement activation
- Neutrophil extracellular traps (NETs)
- Microthrombi in pulmonary vasculature
- Risk of DVT, PE, stroke, MI`,
      keyTerms: [
        { term: 'TMPRSS2', definition: 'A human protease that cleaves the SARS-CoV-2 spike protein, facilitating cell entry' },
        { term: 'Receptor-binding domain (RBD)', definition: 'The part of the spike protein that directly contacts ACE2' },
        { term: 'Interferon', definition: 'Signaling proteins released by infected cells that have antiviral effects' },
        { term: 'Neutralizing antibody', definition: 'An antibody that binds to a pathogen and prevents it from infecting cells' },
        { term: 'Hybrid immunity', definition: 'Immunity from both natural infection and vaccination' },
      ],
    },
    4: {
      level: 4,
      summary: 'COVID-19 pathobiology encompasses viral-host interactions at molecular level, immune dysregulation including interferon signaling defects and T cell exhaustion, coagulopathy mechanisms, and the basis for targeted therapeutics including antivirals and immunomodulators.',
      explanation: `Advanced understanding of COVID-19 requires integration of molecular virology, immunology, and therapeutic mechanisms.

**Molecular Virology:**

*Replication Cycle:*
- ORF1a/ORF1b encode nonstructural proteins (nsps) for replication
- RNA-dependent RNA polymerase (RdRp, nsp12) with nsp7/nsp8 cofactors
- Proofreading by nsp14 ExoN limits diversity
- Subgenomic mRNAs encode structural and accessory proteins

*Immune Evasion Proteins:*
- ORF6: Blocks nuclear import of STAT1 (interferon signaling)
- ORF8: Downregulates MHC-I presentation
- NSP1: Inhibits host protein translation
- NSP3 (PLpro): Cleaves ISG15, inhibits innate sensing

*Spike Protein Biology:*
- S1 subunit: RBD, N-terminal domain
- S2 subunit: Fusion machinery
- Furin cleavage site (S1/S2): Important for pathogenicity
- ACE2 binding affinity varies across variants

**Immunopathology:**

*Interferon Response:*
- Delayed/deficient type I IFN associated with severe disease
- Autoantibodies against type I IFN in ~10% of severe cases
- Inborn errors in TLR3 and TLR7 pathways increase risk
- May explain sex difference (TLR7 on X chromosome)

*T Cell Responses:*
- CD4+ T cells: Coordinate antibody response, help CD8+ cells
- CD8+ T cells: Kill infected cells, recognize multiple epitopes
- T cell lymphopenia in severe disease
- Exhaustion phenotype (PD-1+, Tim-3+) in prolonged illness

*Inflammatory Cascade:*
- Monocyte/macrophage activation
- NLRP3 inflammasome activation
- IL-6 trans-signaling amplification
- Pyroptosis of infected cells releases IL-1alpha, HMGB1

**Coagulopathy Mechanisms:**

*Endothelial Dysfunction:*
- Direct viral infection of endothelium (debated)
- ACE2 downregulation and loss of regulatory function
- Complement activation (C5a, MAC) on endothelium
- von Willebrand factor release

*Thrombosis Pathways:*
- Tissue factor expression by activated monocytes
- Platelet hyperactivation
- Impaired fibrinolysis (elevated PAI-1)
- NETs provide scaffold for thrombi

**Therapeutic Targets:**

*Antivirals:*
- **Nirmatrelvir (Paxlovid component)**: 3CLpro inhibitor blocking viral protease
  - Ritonavir boosts levels via CYP3A4 inhibition
  - Drug interactions significant
  - Viral rebound phenomenon reported
- **Molnupiravir**: Nucleoside analog causing lethal mutagenesis
  - Lower efficacy than nirmatrelvir
  - Theoretical concerns about host mutagenesis
- **Remdesivir**: RdRp inhibitor, IV administration
  - Benefit primarily in early hospitalized patients
  - May be used as 3-day outpatient course

*Immunomodulators:*
- **Dexamethasone**: Reduces mortality in hypoxic patients
  - 6 mg daily x 10 days
  - Mechanism: Broad anti-inflammatory effects
  - Harmful in early non-hypoxic disease
- **IL-6 inhibitors (tocilizumab, sarilumab)**: Block IL-6 signaling
  - Benefit in patients with systemic inflammation
  - Use with steroids
- **JAK inhibitors (baricitinib)**: Block cytokine signaling
  - Added benefit to steroids in hospitalized patients

*Monoclonal Antibodies:*
- Target spike protein RBD
- Efficacy highly variant-dependent
- Most current variants escape earlier mAbs
- Remaining role for immunocompromised patients

**Long COVID:**

*Pathophysiology Hypotheses:*
- Viral persistence in tissue reservoirs
- Autoimmunity triggered by infection
- Microbiome disruption
- Endothelial dysfunction/microvascular injury
- Reactivation of latent viruses (EBV)

*Clinical Features:*
- Fatigue, cognitive dysfunction ("brain fog")
- Dyspnea, exercise intolerance
- Autonomic dysfunction (POTS)
- Persists >12 weeks in 10-30% of cases`,
      keyTerms: [
        { term: '3CLpro', definition: 'Main protease of SARS-CoV-2 essential for viral replication, target of nirmatrelvir' },
        { term: 'Interferon autoantibodies', definition: 'Autoantibodies against type I interferons found in some patients with severe COVID-19' },
        { term: 'Viral rebound', definition: 'Recurrence of symptoms and positive testing after completing antiviral treatment' },
        { term: 'POTS', definition: 'Postural orthostatic tachycardia syndrome - autonomic dysfunction with rapid heart rate upon standing' },
        { term: 'NETs', definition: 'Neutrophil extracellular traps - web-like structures of DNA and proteins released by neutrophils' },
      ],
      clinicalNotes: 'Treatment decisions in COVID-19 depend on disease stage. Early disease benefits from antivirals; hypoxic disease requires steroids. IL-6 inhibitors and JAK inhibitors add benefit in systemically inflamed hospitalized patients. Paxlovid drug interactions must be carefully evaluated. The shifting variant landscape affects monoclonal antibody utility.',
    },
    5: {
      level: 5,
      summary: 'Expert COVID-19 management integrates evolving variant surveillance, precision therapeutics based on disease phase and host factors, management of immunocompromised hosts, and understanding of post-acute sequelae, within an ongoing pandemic framework requiring adaptation.',
      explanation: `Mastery of COVID-19 requires synthesis of rapidly evolving evidence, complex patient management, and systems-level pandemic response.

**Variant Surveillance and Implications:**

*Genomic Surveillance:*
- Global sequencing through GISAID
- CDC Nowcast for variant proportions in US
- Wastewater surveillance for community prevalence
- Rapid phenotypic characterization of emerging variants

*Variant Assessment Framework:*
- Transmissibility (R0, generation time)
- Immune evasion (neutralization titers, vaccine effectiveness)
- Disease severity (hospitalization rates)
- Treatment susceptibility (mAb, antiviral activity)

*XBB, BA.2.86, JN.1, and Beyond:*
- Continued antigenic drift in Omicron lineage
- Spike mutations accumulating in RBD and NTD
- Updated vaccine strains selected based on circulating variants
- Cross-reactive immunity from prior exposure still protective against severe disease

**Precision Therapeutics:**

*Risk Stratification:*
- Age, comorbidities, immunocompromised status
- Vaccination status and timing
- Time since last infection
- Biomarkers: CRP, D-dimer, lymphocyte count, IL-6

*Outpatient Management:*
| Risk Level | Recommended Approach |
|------------|---------------------|
| Low risk, mild symptoms | Supportive care |
| High risk, early disease | Nirmatrelvir/ritonavir if no contraindications |
| High risk, Paxlovid contraindicated | Remdesivir (3-day) or molnupiravir |

*Inpatient Management by Phase:*
| Phase | Characteristics | Treatment |
|-------|-----------------|-----------|
| Early | Minimal hypoxia, low inflammatory markers | Consider antivirals, no steroids |
| Hypoxic | Supplemental O2 required | Dexamethasone, consider tocilizumab/baricitinib |
| Severe ARDS | High O2/ventilator | Full immunomodulation, ECMO consideration |

**Immunocompromised Host:**

*Challenges:*
- Prolonged viral shedding (weeks to months)
- Reduced vaccine immunogenicity
- Higher risk of severe disease
- Potential for intra-host viral evolution

*Management Approaches:*
- Additional vaccine doses
- Pre-exposure prophylaxis (Evusheld) - no longer active against current variants
- Extended antiviral courses
- Monitoring viral load to guide therapy
- Convalescent plasma in some cases

*Intra-Host Evolution:*
- Prolonged replication enables accumulation of mutations
- Case reports of immunocompromised patients harboring highly divergent viruses
- Possible origin of some variants of concern

**Critical Care:**

*ARDS Management:*
- ARDS Net ventilation (6 mL/kg IBW)
- Prone positioning (16+ hours/day)
- Conservative fluid management
- ECMO for refractory hypoxemia

*Thromboprophylaxis:*
- Prophylactic anticoagulation for all hospitalized patients
- Therapeutic anticoagulation for non-critically ill patients (ATTACC/ACTIV-4a/REMAP-CAP)
- No benefit of therapeutic anticoagulation in ICU patients

*Coinfections:*
- Bacterial pneumonia (less common than with influenza)
- Aspergillosis (COVID-associated pulmonary aspergillosis, CAPA)
- Mucormycosis (particularly in India, associated with steroids/diabetes)

**Post-Acute Sequelae (Long COVID):**

*Definition and Epidemiology:*
- Symptoms persisting >12 weeks after acute infection
- Estimates: 10-30% of infected individuals
- Disproportionately affects women, those with severe acute disease
- Vaccination appears to reduce risk

*Clinical Manifestations:*
- Neurological: Cognitive dysfunction, headache, neuropathy
- Cardiovascular: Palpitations, chest pain, POTS
- Respiratory: Dyspnea, cough
- Constitutional: Fatigue, post-exertional malaise
- Psychiatric: Anxiety, depression

*Research Directions:*
- NIH RECOVER initiative
- Biomarker discovery for diagnosis
- Clinical trials of potential treatments
- Understanding relationship to other post-viral syndromes (ME/CFS)

**Pandemic Preparedness Lessons:**

*What Worked:*
- mRNA vaccine platform enabled rapid development
- International collaboration (RECOVERY, REMAP-CAP trials)
- Genomic surveillance infrastructure
- Telemedicine expansion

*Areas for Improvement:*
- Equity in vaccine distribution
- Clinical trial coordination
- Ventilator and PPE supply chains
- Healthcare workforce resilience

*Future Considerations:*
- Pan-coronavirus vaccine development
- Mucosal vaccines for transmission blocking
- Point-of-care diagnostics integration
- Surveillance for other coronaviruses with pandemic potential`,
      keyTerms: [
        { term: 'Nowcast', definition: 'Real-time estimation of variant proportions based on genomic surveillance data' },
        { term: 'CAPA', definition: 'COVID-associated pulmonary aspergillosis - invasive fungal infection complicating severe COVID-19' },
        { term: 'Post-exertional malaise', definition: 'Worsening of symptoms following physical or mental exertion, characteristic of long COVID' },
        { term: 'RECOVER', definition: 'NIH Researching COVID to Enhance Recovery initiative studying long COVID' },
        { term: 'Mucosal vaccine', definition: 'A vaccine administered to mucosal surfaces to induce local immunity and potentially prevent transmission' },
      ],
      clinicalNotes: 'COVID-19 management continues to evolve as new variants emerge and evidence accumulates. Key principles include early antiviral treatment for high-risk outpatients, stage-appropriate immunomodulation for hospitalized patients, and recognition of long COVID as a significant post-infectious complication. Immunocompromised patients require individualized management with attention to prolonged viral shedding and reduced vaccine responses. Staying current with variant surveillance and treatment guideline updates is essential.',
    },
  },
  media: [],
  citations: [
    {
      id: 'nih-covid-guidelines-2024',
      type: 'website',
      title: 'COVID-19 Treatment Guidelines',
      authors: ['National Institutes of Health'],
      source: 'NIH',
      license: 'Copyrighted',
    },
    {
      id: 'zhu-nejm-2020',
      type: 'article',
      title: 'A Novel Coronavirus from Patients with Pneumonia in China, 2019',
      authors: ['Zhu N', 'Zhang D', 'Wang W'],
      source: 'New England Journal of Medicine',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-vaccination-overview', targetType: 'concept', relationship: 'related', label: 'Vaccination' },
    { targetId: 'infectious-disease-influenza', targetType: 'condition', relationship: 'sibling', label: 'Influenza' },
    { targetId: 'infectious-disease-pneumonia', targetType: 'condition', relationship: 'related', label: 'Pneumonia' },
  ],
  tags: {
    systems: ['infectious-disease', 'respiratory'],
    topics: ['viral-infections', 'pandemic', 'respiratory-infections'],
    keywords: ['coronavirus', 'SARS-CoV-2', 'COVID-19', 'pandemic', 'vaccines', 'long COVID'],
    clinicalRelevance: 'critical',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
