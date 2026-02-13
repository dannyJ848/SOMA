/**
 * COVID/Flu/RSV Testing - Laboratory Interpretation Content
 *
 * Educational content covering:
 * - Multiplex respiratory pathogen testing
 * - Rapid antigen vs PCR (NAAT) testing for SARS-CoV-2, Influenza A/B, RSV
 * - Test timing, sensitivity, specificity by platform
 * - Clinical decision-making with multiplex results
 * - Treatment implications for each pathogen
 */

import { EducationalContent } from '../types';

export const covidFluRsvContent: EducationalContent = {
  id: 'topic-covid-flu-rsv',
  type: 'topic',
  name: 'COVID/Flu/RSV Testing',
  nameEs: 'Pruebas COVID/Gripe/VRS',
  alternateNames: [
    'Respiratory Pathogen Panel',
    'Multiplex Respiratory Test',
    'COVID-19 Test',
    'Influenza Test',
    'RSV Test',
    'Flu Test',
    'SARS-CoV-2 Test',
    'Respiratory Virus Panel',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'COVID, flu, and RSV are three common viruses that cause similar cold and flu-like symptoms. A single test can now check for all three at once using a nose swab.',
      explanation: `# COVID, Flu, and RSV Testing

## What Are COVID, Flu, and RSV?

These are three different viruses that can make you sick with similar symptoms:

- **COVID-19** (Coronavirus): The virus that caused the pandemic. It spreads through the air and can cause mild to severe illness.
- **Flu (Influenza)**: A common winter virus that causes fever, body aches, cough, and fatigue.
- **RSV (Respiratory Syncytial Virus)**: A virus that is especially dangerous for babies, young children, and older adults.

Think of these three viruses as **three different villains wearing similar disguises** - they cause many of the same symptoms, so doctors need a test to tell them apart.

## Why Test for All Three?

The symptoms of COVID, flu, and RSV overlap a lot:

| Symptom | COVID | Flu | RSV |
|---------|-------|-----|-----|
| Fever | Common | Very common | Common |
| Cough | Common | Common | Common |
| Runny nose | Sometimes | Sometimes | Very common |
| Body aches | Sometimes | Very common | Less common |
| Sore throat | Common | Sometimes | Less common |
| Shortness of breath | Sometimes | Rare | Sometimes (especially in babies) |
| Loss of taste/smell | Sometimes (COVID-specific) | Rare | Rare |

Because the symptoms are so similar, you **cannot tell which virus you have** just by how you feel. Testing is the only way to know for sure.

## How Is the Test Done?

**The most common method:**
1. A healthcare worker inserts a soft swab into your nose (called a **nasopharyngeal swab** or shorter nasal swab)
2. The swab is rotated gently to collect a sample
3. The sample is tested for all three viruses at once

**Types of tests:**

| Test Type | Speed | How It Works |
|-----------|-------|-------------|
| **Rapid antigen test** | 15-30 minutes | Detects virus proteins; can be done at home or in clinic |
| **PCR test (molecular)** | Hours to 1 day | Detects virus genetic material; very accurate; done in a lab |
| **Multiplex test** | Varies | Checks for COVID, flu, AND RSV all from one swab |

## Why Does Knowing Which Virus Matters?

Each virus has different treatment options:

- **Flu**: Antiviral medicine (like Tamiflu/oseltamivir) works best if started within 48 hours
- **COVID**: Antiviral medicine (like Paxlovid) is available for people at higher risk
- **RSV**: Treatment is mainly supportive (rest, fluids); new prevention options exist for babies and older adults

Knowing which virus you have helps your doctor give you the **right treatment** at the **right time**.

## When Should You Get Tested?

Get tested if you have:
- Fever with cough or sore throat
- Symptoms during flu season (October through March)
- Contact with someone who tested positive for COVID or flu
- Symptoms that are getting worse instead of better
- You are at high risk (elderly, pregnant, have chronic health conditions)

## Important Tips

- **Stay home** when you are sick to avoid spreading germs to others
- Rapid home tests are convenient but may miss early infections
- If a home test is negative but you still feel sick, consider getting a lab-based (PCR) test
- **Wash your hands** frequently and cover coughs and sneezes
- Vaccines are available for all three viruses (COVID, flu, and now RSV for eligible groups)`,
      keyTerms: [
        {
          term: 'COVID-19',
          definition: 'A respiratory illness caused by the SARS-CoV-2 coronavirus that spreads through the air',
        },
        {
          term: 'influenza (flu)',
          definition: 'A common viral infection that causes fever, body aches, cough, and fatigue, mostly in winter months',
        },
        {
          term: 'RSV',
          definition: 'Respiratory Syncytial Virus, a common virus that is especially dangerous for babies and older adults',
        },
        {
          term: 'rapid antigen test',
          definition: 'A quick test that detects virus proteins and gives results in about 15 to 30 minutes',
        },
        {
          term: 'PCR test',
          definition: 'A very accurate lab test that detects the genetic material of viruses; results take hours to a day',
        },
        {
          term: 'multiplex test',
          definition: 'A single test that checks for multiple viruses at the same time from one sample',
        },
      ],
      analogies: [
        'COVID, flu, and RSV are like three different criminals wearing similar masks - the symptoms look alike, so you need a test (like a fingerprint check) to identify which one is causing trouble.',
        'A multiplex test is like a three-in-one security scanner - instead of going through three separate checks, one scan looks for all three viruses at once.',
        'A PCR test is like a powerful microscope for germs - it can find even tiny amounts of virus that a rapid test might miss.',
      ],
      examples: [
        'A parent brings their 2-year-old to the doctor with fever and wheezing in January. The multiplex test shows RSV, not flu. The doctor focuses on supportive care and monitoring breathing.',
        'An office worker develops fever and cough. A rapid home COVID test is negative, but they get a PCR test the next day that comes back positive for influenza. They start Tamiflu within 48 hours.',
      ],
      patientCounselingPoints: [
        'COVID, flu, and RSV cause very similar symptoms - testing is the only way to know which one you have.',
        'A single nose swab can test for all three viruses at once.',
        'Knowing which virus you have matters because flu and COVID each have specific antiviral medications.',
        'Rapid home tests are convenient but not as sensitive as lab-based PCR tests.',
        'If a rapid test is negative but you still feel sick, consider getting a more accurate PCR test.',
        'Vaccines exist for all three viruses and are the best way to prevent serious illness.',
      ],
    },
    2: {
      level: 2,
      summary:
        'Multiplex respiratory panels use molecular (RT-PCR/NAAT) or antigen-based methods to simultaneously detect SARS-CoV-2, Influenza A/B, and RSV. Test selection depends on clinical setting, turnaround time needs, and available treatment windows.',
      explanation: `## Respiratory Pathogen Testing Overview

### Three Key Pathogens

| Pathogen | Virus Family | Seasonality | Key Risk Groups |
|----------|-------------|-------------|----------------|
| SARS-CoV-2 | Coronavirus | Year-round, winter peaks | Elderly, immunocompromised, unvaccinated |
| Influenza A/B | Orthomyxovirus | October-March (N. hemisphere) | Elderly, young children, pregnant, chronic disease |
| RSV | Paramyxovirus | October-March | Infants <6 months, elderly >65, immunocompromised |

### Testing Methods Compared

**Rapid Antigen Tests:**
- Detect viral surface proteins
- Results in 15-30 minutes
- Lower sensitivity (50-80%) especially early in illness
- High specificity (>98%)
- Available as home tests (OTC) for COVID; clinical setting for flu/RSV
- Best used when viral load is highest (days 2-5 of symptoms)

**Molecular Tests (PCR/NAAT):**
- Detect viral RNA through nucleic acid amplification
- Sensitivity 95-99%
- Specificity >99%
- Results in 30 minutes (rapid molecular) to 24 hours (standard lab)
- Gold standard for diagnosis
- Can detect virus even with low viral loads

**Multiplex Panels:**
- Test for 2-4+ respiratory pathogens from a single specimen
- Most use molecular (RT-PCR) technology
- Available as point-of-care or lab-based tests
- Streamline diagnosis and treatment decisions

### Treatment Implications by Pathogen

**Influenza (if positive):**
- **Oseltamivir (Tamiflu)**: Most effective within 48 hours of symptom onset
- Reduces symptom duration by ~1 day, reduces complications
- Recommended for high-risk patients and hospitalized patients
- Also: baloxavir (single-dose oral option)

**COVID-19 (if positive):**
- **Paxlovid (nirmatrelvir/ritonavir)**: For high-risk patients within 5 days of symptoms
- Reduces hospitalization and death by ~90% in high-risk groups
- Drug interactions (especially with certain heart and cholesterol medications)
- **Remdesivir**: IV option for hospitalized patients

**RSV (if positive):**
- Primarily supportive care (fluids, oxygen, suctioning for infants)
- **Nirsevimab**: Preventive monoclonal antibody for infants
- **Palivizumab**: Monthly prophylaxis for high-risk infants
- **RSV vaccines**: Approved for adults 60+ and maternal vaccination

### When to Test

| Scenario | Recommended Test |
|----------|-----------------|
| Outpatient with mild symptoms | Rapid antigen (home test) |
| Outpatient needing treatment decision | Rapid molecular multiplex |
| Emergency department | Rapid molecular multiplex |
| Hospitalized patient | Full respiratory pathogen panel |
| Asymptomatic exposure (COVID) | Antigen test 5 days post-exposure |
| Pre-procedure screening | Lab-based molecular test |

### Understanding Test Timing

- **Too early** (day 0-1): May not have enough virus to detect, especially with antigen tests
- **Optimal** (day 2-5): Highest viral load, best detection rates
- **Late illness** (day 7+): Antigen tests may turn negative; PCR can remain positive for weeks
- PCR positivity does NOT necessarily mean you are still contagious`,
      keyTerms: [
        {
          term: 'RT-PCR',
          definition: 'Reverse transcription polymerase chain reaction; molecular test that amplifies viral RNA for detection; gold standard for respiratory virus diagnosis',
          pronunciation: 'R-T-P-C-R',
        },
        {
          term: 'NAAT',
          definition: 'Nucleic acid amplification test; broad term for molecular tests that amplify genetic material for detection',
        },
        {
          term: 'viral load',
          definition: 'The amount of virus present in a sample; higher viral loads are easier to detect and generally indicate greater contagiousness',
        },
        {
          term: 'oseltamivir (Tamiflu)',
          definition: 'Antiviral medication for influenza; most effective when started within 48 hours of symptom onset',
          pronunciation: 'oh-sel-TAM-ih-vir',
        },
        {
          term: 'Paxlovid',
          definition: 'Antiviral medication for COVID-19 in high-risk patients; combination of nirmatrelvir and ritonavir',
          pronunciation: 'PAX-loh-vid',
        },
        {
          term: 'nirsevimab',
          definition: 'Long-acting monoclonal antibody for RSV prevention in infants and young children',
          pronunciation: 'nir-SEV-ih-mab',
        },
      ],
      patientCounselingPoints: [
        'A multiplex test can identify which virus you have from a single nose swab, guiding treatment decisions.',
        'If you test positive for flu, antiviral medication works best if started within 48 hours of symptom onset.',
        'A negative rapid test early in illness does not rule out infection - consider retesting in 1-2 days or getting a PCR test.',
        'PCR tests can remain positive for weeks after COVID recovery; this does not mean you are still contagious.',
        'Annual flu vaccination and staying current on COVID and RSV vaccines (if eligible) are the best prevention.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Multiplex RT-PCR panels for SARS-CoV-2/Influenza/RSV integrate isothermal amplification or real-time PCR technology with distinct sensitivity/specificity profiles. Clinical application requires understanding of viral shedding kinetics, Ct value interpretation, and pathogen-specific treatment algorithms.',
      explanation: `## Multiplex Respiratory Pathogen Diagnostics

### Molecular Platform Technologies

**Real-Time RT-PCR:**
- Targets conserved gene regions for each pathogen
- SARS-CoV-2: N gene, S gene, ORF1ab targets
- Influenza: M gene (type), HA gene (subtype)
- RSV: N gene, F gene (RSV-A and RSV-B differentiation)
- Ct (cycle threshold) values inversely correlate with viral load
- Lab-based platforms: Cepheid GeneXpert, Roche cobas, BioFire FilmArray

**Isothermal Amplification:**
- Constant temperature amplification (no thermal cycling)
- Faster time-to-result (8-15 minutes)
- Abbott ID NOW platform: LAMP/NEAR technology
- Slightly lower sensitivity than RT-PCR for some targets
- CLIA-waived for point-of-care use

**Antigen Detection (Lateral Flow Immunoassay):**
- Targets viral nucleocapsid proteins
- SARS-CoV-2: N protein detection
- Influenza: Nucleoprotein (NP) for type A and B
- RSV: Fusion (F) protein
- Sensitivity varies significantly with viral load and disease stage

### Analytical Performance Comparison

| Platform | SARS-CoV-2 Sensitivity | Influenza Sensitivity | RSV Sensitivity | Time |
|----------|----------------------|---------------------|----------------|------|
| Lab RT-PCR | 98-99% | 95-99% | 95-98% | 1-4 hours |
| Rapid molecular (POC) | 93-98% | 90-97% | 90-95% | 15-45 min |
| Rapid antigen (COVID) | 50-80% (symptomatic) | N/A | N/A | 15 min |
| Rapid antigen (flu) | N/A | 50-70% | N/A | 15 min |

### Viral Shedding Kinetics and Test Timing

**SARS-CoV-2:**
- Incubation: 2-14 days (median 5 days, shorter for Omicron variants ~3 days)
- Peak viral shedding: Day 0-3 of symptom onset
- PCR positivity: Up to 12 weeks (non-infectious viral RNA shedding)
- Antigen test positivity: Typically days 1-10 of symptoms
- Antigen test roughly correlates with infectiousness

**Influenza:**
- Incubation: 1-4 days (median 2 days)
- Peak viral shedding: Day 0-3 of symptom onset
- Shedding duration: 5-7 days in adults, up to 14+ days in children
- Treatment window: Oseltamivir most effective within 48 hours

**RSV:**
- Incubation: 2-8 days (median 4-6 days)
- Peak shedding: Days 3-8 of illness
- Shedding duration: 1-3 weeks (longer in infants and immunocompromised)
- Prolonged shedding common in hospitalized infants

### Ct Value Interpretation

**Cycle Threshold (Ct) values in RT-PCR:**
- Lower Ct = higher viral load = more virus present
- Ct <25: High viral load; likely highly infectious
- Ct 25-30: Moderate viral load
- Ct 30-35: Low viral load; less likely to be infectious
- Ct >35-40: Very low; may represent residual RNA, not viable virus

**Clinical caveats:**
- Ct values vary between platforms and targets (not standardized)
- Should NOT be used as sole criterion for clinical decisions
- Useful for epidemiologic studies and population-level trends
- Correlation with culture positivity strongest at Ct <30

### Co-Infection Considerations

- **Influenza + SARS-CoV-2 co-infection** ("flurona"): Reported in 0.5-5% of tested patients
- Co-infection associated with increased hospitalization risk
- RSV + another respiratory virus common in pediatric populations
- Multiplex testing identifies co-infections that single-pathogen testing misses
- Treatment should address each identified pathogen independently

### Subtyping and Surveillance

**Influenza subtyping:**
- Type A: H1N1 (pdm09) and H3N2 predominant circulating subtypes
- Type B: Victoria and Yamagata lineages (Yamagata may be extinct post-pandemic)
- Subtyping affects vaccine strain selection
- Some multiplex panels include subtype identification

**SARS-CoV-2 variant tracking:**
- S gene target failure (SGTF) initially used for Omicron BA.1 identification
- Whole genome sequencing for definitive variant identification
- Surveillance programs monitor for new variants of concern
- Current vaccines target updated variant antigens

### Infection Prevention Implications

| Pathogen | Isolation Type | Duration |
|----------|---------------|----------|
| SARS-CoV-2 | Airborne + contact (hospital); isolation at home | Until symptoms improving + afebrile 24h |
| Influenza | Droplet + contact | 5 days from symptom onset (longer if immunocompromised) |
| RSV | Contact + droplet | Duration of symptoms (shedding may persist) |`,
      keyTerms: [
        {
          term: 'Ct (cycle threshold) value',
          definition: 'Number of PCR amplification cycles needed to detect viral RNA; inversely proportional to viral load (lower Ct = more virus)',
        },
        {
          term: 'BioFire FilmArray',
          definition: 'Widely used multiplex PCR platform capable of detecting 15-45 respiratory pathogens from a single nasopharyngeal swab',
        },
        {
          term: 'LAMP (loop-mediated isothermal amplification)',
          definition: 'Molecular amplification technique at constant temperature; enables rapid point-of-care molecular testing without thermal cycling',
        },
        {
          term: 'co-infection',
          definition: 'Simultaneous infection with two or more pathogens; identified by multiplex testing; may increase disease severity',
        },
        {
          term: 'S gene target failure (SGTF)',
          definition: 'Absence of S gene detection in RT-PCR due to variant-specific deletions; used as a proxy marker for certain SARS-CoV-2 variants',
        },
      ],
      clinicalNotes: 'Multiplex testing is increasingly recommended over single-pathogen testing during respiratory virus season, as treatment algorithms differ by pathogen. Oseltamivir for influenza and Paxlovid for COVID both have narrow treatment windows, making rapid pathogen identification clinically actionable.',
    },
    4: {
      level: 4,
      summary:
        'Advanced respiratory diagnostics integrate syndromic multiplex panels, semi-quantitative viral load assessment via Ct values, variant surveillance methodologies, and pathogen-specific pharmacotherapy timing. Clinical decisions must account for test performance variability across platforms, viral shedding kinetics, and co-infection dynamics.',
      explanation: `## Advanced Respiratory Pathogen Diagnostics

### Syndromic Panel Testing: Expanded Respiratory Panels

**BioFire Respiratory Panel 2.1 (RP2.1):**
- 22 targets from a single NP swab
- Viruses: SARS-CoV-2, Influenza A (H1, H1-2009, H3), Influenza B, RSV A/B, Parainfluenza 1-4, Adenovirus, hMPV, Rhinovirus/Enterovirus, Coronavirus (229E, HKU1, NL63, OC43)
- Bacteria: Bordetella pertussis, B. parapertussis, Chlamydophila pneumoniae, Mycoplasma pneumoniae
- TAT: ~45 minutes
- Sensitivity >95% for most targets

**Clinical Utility of Expanded Panels:**
- Identify unexpected pathogens (e.g., pertussis presenting as prolonged cough)
- Detect co-infections affecting management
- Reduce unnecessary antibiotic use when viral etiology confirmed
- Guide infection control (isolation type varies by pathogen)
- Cost-effective in emergency department and inpatient settings

**Limitations:**
- Detect nucleic acid, not viable virus (may detect prolonged shedding)
- Do not differentiate colonization from infection for some bacterial targets
- High sensitivity may detect clinically insignificant pathogens
- Cannot determine antibiotic susceptibility

### Pharmacotherapy Decision Algorithms

**Influenza Treatment Algorithm:**
1. Positive influenza test (rapid antigen or molecular)
2. Assess timing: <48 hours from symptom onset?
3. If yes AND high-risk or hospitalized: Start oseltamivir 75mg BID x 5 days
4. If yes AND low-risk outpatient: Consider oseltamivir (shared decision-making)
5. If >48 hours: Consider treatment if hospitalized or severely ill (may still reduce complications)
6. Alternative: Baloxavir marboxil 40-80 mg single dose (weight-based)

**COVID-19 Treatment Algorithm (High-Risk Outpatient):**
1. Positive SARS-CoV-2 test
2. Within 5 days of symptom onset?
3. High-risk for severe disease? (age >50, immunocompromised, unvaccinated, comorbidities)
4. If yes: Paxlovid (nirmatrelvir 300mg + ritonavir 100mg BID x 5 days)
5. Check drug interactions (ritonavir is strong CYP3A4 inhibitor)
6. Renal dose adjustment required for CrCl 30-60 mL/min
7. Contraindicated with many medications (consult interaction checker)
8. Alternative if Paxlovid contraindicated: Remdesivir 200mg IV day 1, then 100mg IV days 2-3

**RSV Management Algorithm:**
- Infants: Assess respiratory status, O2 saturation, feeding ability
- Adults (elderly, immunocompromised): Supportive care; monitor for pneumonia
- Prevention:
  - Nirsevimab (single IM dose) for infants entering first RSV season
  - Abrysvo or Arexvy vaccines for adults >=60 years
  - Maternal RSV vaccination during pregnancy (weeks 32-36)

### Variant Impact on Diagnostic Performance

**SARS-CoV-2 Diagnostic Evasion:**
- Mutations in target genes can affect PCR primer/probe binding
- S gene deletions/mutations: Historically used for variant detection (e.g., del69-70 in Alpha, Omicron BA.1)
- N gene mutations: Rare impact on antigen tests, but reduced sensitivity reported for some variants
- FDA monitors authorized tests for potential variant impact
- Multi-target assays (detecting 2+ genes) provide redundancy

**Influenza Antigenic Drift/Shift:**
- Gradual antigenic drift may affect rapid antigen test antibody binding
- Molecular targets (M gene, NP gene) are more conserved
- Reassortment (antigenic shift) could produce novel subtypes requiring updated assays
- CDC performs annual surveillance for diagnostic test performance

### Quantitative Considerations

**Semi-Quantitative Viral Load Assessment:**
- Ct values as proxy for viral RNA quantity
- Clinical applications:
  - Prognostic marker (lower Ct in SARS-CoV-2 associated with severe disease in some studies)
  - De-isolation decision support (Ct >30-33 correlates with non-culturable virus)
  - Transplant patient monitoring
  - Research and epidemiologic surveillance

**Limitations of Ct-based decisions:**
- Ct varies with specimen quality, collection technique, transport conditions
- No universal Ct threshold for infectiousness
- Platform-dependent values (cannot compare across different assays)
- Not recommended as sole criterion for clinical management per WHO/CDC

### Emerging Diagnostic Approaches

**Wastewater Surveillance:**
- Population-level monitoring of SARS-CoV-2, influenza, RSV
- Provides early warning of community outbreaks (1-2 weeks before clinical detection)
- Supports public health response planning
- Does not replace individual diagnostics

**Breath-Based Diagnostics:**
- InspectIR COVID-19 Breathalyzer (FDA EUA)
- Detects volatile organic compound patterns
- Rapid screening tool (3 minutes)
- Moderate sensitivity (~90%), requires confirmatory testing
- Technology expanding to other respiratory pathogens

**CRISPR-Based Diagnostics:**
- Sherlock Biosciences (SHERLOCK), Mammoth Biosciences (DETECTR)
- Isothermal amplification + CRISPR-Cas detection
- Potential for highly sensitive, specific, rapid point-of-care testing
- Multiple targets from single sample possible
- Field-deployable without complex laboratory infrastructure`,
      keyTerms: [
        {
          term: 'syndromic panel',
          definition: 'Multiplex diagnostic platform that tests for a comprehensive panel of pathogens causing a particular clinical syndrome (e.g., respiratory illness)',
        },
        {
          term: 'baloxavir marboxil',
          definition: 'Single-dose oral influenza antiviral (cap-dependent endonuclease inhibitor); alternative to oseltamivir',
          pronunciation: 'bah-LOX-ah-vir mar-BOX-il',
        },
        {
          term: 'antigenic drift',
          definition: 'Gradual accumulation of mutations in viral surface proteins leading to immune evasion; occurs continuously in influenza',
        },
        {
          term: 'CRISPR-based diagnostics',
          definition: 'Emerging diagnostic approach using CRISPR-Cas enzymes to detect specific nucleic acid sequences with high specificity and sensitivity',
        },
      ],
      clinicalNotes: 'When managing respiratory illness during peak season, the decision to use a triplex (COVID/flu/RSV) vs expanded respiratory panel should be guided by clinical presentation, local epidemiology, and treatment implications. In the ED, rapid molecular multiplex testing provides the best balance of speed and accuracy for guiding isolation and treatment decisions.',
    },
    5: {
      level: 5,
      summary:
        'Expert-level respiratory diagnostics encompasses next-generation sequencing for variant characterization, host-response transcriptomic diagnostics, pandemic preparedness assay design, and integration of genomic surveillance with clinical decision support systems.',
      explanation: `## Expert-Level Respiratory Pathogen Diagnostics

### Genomic Surveillance Integration

**Whole Genome Sequencing (WGS) for SARS-CoV-2:**
- Illumina (short-read) and Oxford Nanopore (long-read) platforms
- ARTIC Network amplicon-based protocol for SARS-CoV-2
- Pango lineage assignment (e.g., BA.2.86, JN.1, KP.3)
- Phylogenetic analysis for outbreak investigation
- Mutation tracking for immune evasion, transmissibility, virulence
- Key mutations monitored: Spike RBD (ACE2 binding, antibody escape), furin cleavage site, NTD

**Influenza Genomic Surveillance:**
- Global Influenza Surveillance and Response System (GISRS)
- HA/NA gene sequencing for vaccine strain selection
- Antiviral resistance monitoring (H275Y in oseltamivir resistance)
- Reassortment detection for pandemic preparedness
- Next-generation candidate vaccine virus development

**RSV Genomic Epidemiology:**
- RSV-A (ON1 genotype predominant) and RSV-B (BA genotype)
- F protein and G protein characterization
- Monitoring for nirsevimab/palivizumab escape mutations
- Duplication in G protein second hypervariable region (genotype-defining)

### Host-Response Diagnostics

**Transcriptomic Signatures:**
- Gene expression profiling to distinguish viral vs bacterial infection
- IMX-1 (Inflammatix): Host mRNA-based test
  - Classifies bacterial, viral, or non-infectious cause
  - 30-minute turnaround
  - Sensitivity/specificity ~85-90% for bacterial vs viral differentiation
  - Addresses antibiotic stewardship gap when pathogen testing equivocal

**Interferon Signature:**
- Type I/III interferon-stimulated gene (ISG) expression
- Elevated in viral infections
- Suppressed in severe COVID-19 (associated with worse outcomes)
- Potential prognostic and therapeutic biomarker

**Cytokine Storm Biomarkers:**
- IL-6, ferritin, D-dimer, CRP integration
- Risk stratification in severe respiratory viral infections
- Guide immunomodulatory therapy (tocilizumab, baricitinib in COVID)
- Not pathogen-specific; reflects host inflammatory response

### Pandemic Preparedness: Assay Design Principles

**Rapid Assay Development Framework:**
1. **Pathogen identification**: Metagenomic sequencing of clinical specimens
2. **Target selection**: Conserved gene regions for broad reactivity
3. **Primer/probe design**: In silico analysis against known sequences
4. **Analytical validation**: Limit of detection, cross-reactivity, inclusivity
5. **Clinical validation**: Sensitivity/specificity against clinical reference standard
6. **Regulatory pathway**: EUA (Emergency Use Authorization) for rapid deployment
7. **Manufacturing scale-up**: Global distribution capacity

**Lessons from COVID-19 Pandemic:**
- Initial reliance on single CDC assay created testing bottleneck
- Decentralized testing (home tests, POC molecular) essential for scale
- Antigen tests valuable for population screening despite lower sensitivity
- Genomic surveillance crucial for tracking variants and diagnostic escape
- Supply chain resilience for reagents and consumables

### Advanced Co-Infection Analysis

**Viral-Bacterial Co-Infection:**
- Secondary bacterial pneumonia complicates 5-15% of influenza hospitalizations
- Most common: S. pneumoniae, S. aureus (including MRSA), H. influenzae
- COVID-19: Lower rates of bacterial co-infection (~3-8%) but higher in ICU patients
- Procalcitonin may help differentiate viral-only from bacterial co-infection
- Syndromic panels identifying bacterial targets guide antibiotic decisions

**Viral-Viral Interactions:**
- "Viral interference": Prior infection with one virus may inhibit replication of another
- Rhinovirus-induced interferon response may have delayed SARS-CoV-2 spread
- Sequential infection patterns observed epidemiologically
- RSV and influenza epidemics rarely coincide (interference hypothesis)

### Immunologic Diagnostics Integration

**Serologic Testing:**
- Anti-spike IgG: Assesses vaccine-induced immunity (SARS-CoV-2)
- Anti-nucleocapsid IgG: Indicates prior natural infection
- HAI (hemagglutination inhibition) titer: Measures influenza antibody response
- Correlates of protection: Anti-spike >775 BAU/mL (initial estimates), HAI titer >=1:40

**T-Cell Response Assessment:**
- ELISpot and intracellular cytokine staining
- Detects cellular immunity even when antibodies wane
- Research tool; not routine clinical diagnostic
- May better predict protection against severe disease

### Clinical Decision Support and AI Integration

**Machine Learning for Respiratory Diagnostics:**
- Predictive models integrating symptoms, vitals, labs, imaging
- Triage tools for testing priority during surges
- Ct value trending for prognostication
- Automated variant detection from sequencing data

**Integrated Surveillance Dashboards:**
- Real-time pathogen detection data from clinical labs
- Wastewater surveillance integration
- Hospital capacity modeling
- Variant frequency tracking
- Early warning systems for emerging respiratory threats

### Clinical Pearls for Complex Scenarios

1. **Transplant patients**: Prolonged viral shedding (weeks to months); serial quantitative PCR monitoring guides infection control; lower treatment thresholds
2. **Immunocompromised with persistent COVID**: Consider extended antiviral courses; resistance testing (remdesivir, Paxlovid resistance mutations emerging)
3. **Neonatal RSV**: Apnea may be presenting symptom before respiratory distress; low threshold for hospitalization
4. **Healthcare worker exposure**: Timing of post-exposure testing critical; PCR preferred over antigen for early detection
5. **Post-infectious syndromes**: Long COVID, post-influenza fatigue; recognition that negative current testing does not exclude prior viral trigger`,
      keyTerms: [
        {
          term: 'whole genome sequencing (WGS)',
          definition: 'Complete sequencing of a pathogen genome enabling lineage assignment, mutation identification, and phylogenetic analysis for surveillance and outbreak investigation',
        },
        {
          term: 'host-response diagnostics',
          definition: 'Tests measuring the patient immune response gene expression pattern rather than the pathogen itself to classify infection type',
        },
        {
          term: 'Emergency Use Authorization (EUA)',
          definition: 'FDA regulatory pathway enabling rapid deployment of unapproved diagnostics/therapeutics during declared public health emergencies',
        },
        {
          term: 'viral interference',
          definition: 'Phenomenon where infection with one virus inhibits replication or spread of another, mediated through innate immune activation (especially interferon)',
        },
        {
          term: 'correlates of protection',
          definition: 'Measurable immune markers (e.g., antibody titers) statistically associated with protection against infection or disease',
        },
      ],
      clinicalNotes: 'The convergence of syndromic multiplex panels, genomic surveillance, and host-response diagnostics is transforming respiratory pathogen management from empiric to precision medicine. Clinicians should be aware that molecular tests detecting nucleic acid do not necessarily indicate viable, transmissible virus, particularly in immunocompromised patients with prolonged shedding.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-flu-test',
      type: 'website',
      title: 'Flu (Influenza) Tests',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/lab-tests/flu-influenza-test/',
      accessedDate: '2025-01-15',
    },
    {
      id: 'labtestsonline-covid-test',
      type: 'website',
      title: 'COVID-19 Tests',
      source: 'Lab Tests Online, American Association for Clinical Chemistry',
      url: 'https://labtestsonline.org/tests/covid-19-tests',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-respiratory-viruses',
      type: 'website',
      title: 'Respiratory Virus Guidance',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/respiratory-viruses/',
      accessedDate: '2025-01-15',
    },
  ],
  crossReferences: [
    {
      targetId: 'topic-rapid-strep',
      targetType: 'topic',
      relationship: 'related',
      label: 'Rapid Strep Test',
    },
    {
      targetId: 'topic-understanding-your-results',
      targetType: 'topic',
      relationship: 'related',
      label: 'Understanding Your Results',
    },
  ],
  tags: {
    systems: ['laboratory-medicine'],
    topics: ['lab-tests', 'diagnostics', 'infectious-disease', 'point-of-care-testing', 'respiratory'],
    keywords: [
      'COVID-19',
      'SARS-CoV-2',
      'influenza',
      'flu test',
      'RSV',
      'respiratory syncytial virus',
      'multiplex PCR',
      'rapid antigen test',
      'respiratory panel',
      'Paxlovid',
      'oseltamivir',
      'Tamiflu',
    ],
    clinicalRelevance: 'high',
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
