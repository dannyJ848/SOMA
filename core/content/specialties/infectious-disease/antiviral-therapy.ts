import { EducationalContent } from '../../types';

export const antiviralTherapy: EducationalContent = {
  id: 'infectious-disease-antiviral-therapy',
  type: 'concept',
  name: 'Antiviral Therapy',
  alternateNames: ['Antiviral Medications', 'Antiviral Drugs', 'Antiviral Treatment'],

  levels: {
    1: {
      level: 1,
      summary: 'Antiviral medications are drugs that fight viral infections by stopping viruses from multiplying inside your cells.',
      explanation: `Unlike antibiotics (which fight bacteria), antiviral medications are designed specifically to fight viruses. Because viruses live inside your cells, it is harder to kill them without harming your own cells.

**How Antivirals Work:**
Antiviral drugs work by:
- Stopping the virus from getting into cells
- Preventing the virus from copying itself
- Blocking the virus from leaving cells and spreading

**Common Antiviral Medications:**

*For Herpes and Chickenpox/Shingles:*
- Acyclovir (Zovirax)
- Valacyclovir (Valtrex)
- Famciclovir (Famvir)
These work best if started early when symptoms first appear.

*For the Flu (Influenza):*
- Oseltamivir (Tamiflu) - pills
- Zanamivir (Relenza) - inhaler
- Baloxavir (Xofluza) - single dose pill
These work best if started within 48 hours of getting sick.

*For HIV:*
- Many different medications combined together
- Must be taken every day for life
- Can reduce the virus to undetectable levels

*For COVID-19:*
- Paxlovid (nirmatrelvir/ritonavir)
- Remdesivir (IV)
- Work best when started early in high-risk patients

*For Hepatitis:*
- New medications can cure hepatitis C in 8-12 weeks
- Hepatitis B medications control the virus but usually do not cure it

**Important Facts:**
- Most antiviral drugs work against specific viruses, not all viruses
- Starting treatment early usually works better
- Some viruses can become resistant to medications
- For many common viral infections (like colds), there are no specific antivirals`,
      keyTerms: [
        { term: 'antiviral', definition: 'A medication that fights viral infections' },
        { term: 'resistance', definition: 'When a virus changes and the medication no longer works against it' },
        { term: 'HIV', definition: 'Human Immunodeficiency Virus; the virus that causes AIDS' },
        { term: 'hepatitis', definition: 'Inflammation of the liver, often caused by viruses' },
      ],
      analogies: [
        'Antivirals are like throwing a wrench into a factory - they stop the virus\'s machinery from making copies.',
        'Taking Tamiflu early for the flu is like catching a small fire before it spreads - it is much easier to control.',
      ],
      examples: [
        'If you get cold sores, taking valacyclovir early can shorten how long they last and make them less painful.',
        'People with HIV take a combination of antivirals every day, which can make the virus undetectable in their blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'Antiviral agents target specific steps in viral replication cycles, including entry, genome replication, protein processing, and release, with efficacy dependent on timing and drug susceptibility.',
      explanation: `Antiviral medications work by interfering with specific stages of the viral life cycle. Understanding these mechanisms helps explain why certain drugs work for certain viruses.

**Antiviral Drug Classes by Mechanism:**

**1. Entry Inhibitors:**
- Block virus attachment or fusion with cells
- Maraviroc (HIV): Blocks CCR5 co-receptor
- Enfuvirtide (HIV): Prevents membrane fusion
- Amantadine/rimantadine (influenza A): Block M2 ion channel (no longer recommended due to resistance)

**2. Nucleoside/Nucleotide Analogues:**
- Mimic building blocks of DNA/RNA
- Get incorporated into growing viral genome
- Cause chain termination or errors

*Examples:*
- Acyclovir: Activated by viral thymidine kinase, targets HSV/VZV
- Ganciclovir: For CMV (activated by UL97 kinase)
- Tenofovir: HIV and hepatitis B
- Sofosbuvir: Hepatitis C polymerase inhibitor

**3. Polymerase Inhibitors:**
- Block the enzyme that copies viral genome
- Non-nucleoside reverse transcriptase inhibitors (NNRTIs): Efavirenz, rilpivirine
- HCV NS5B inhibitors: Sofosbuvir, dasabuvir

**4. Protease Inhibitors:**
- Block enzymes that cut viral proteins into functional pieces
- HIV protease inhibitors: Ritonavir, darunavir
- HCV NS3/4A inhibitors: Glecaprevir, voxilaprevir

**5. Integrase Inhibitors:**
- Prevent viral DNA from integrating into host genome
- HIV: Dolutegravir, bictegravir, raltegravir
- First-line components of HIV therapy

**6. Neuraminidase Inhibitors:**
- Block influenza from releasing from cells
- Oseltamivir (oral), zanamivir (inhaled), peramivir (IV)

**7. Other Mechanisms:**
- Baloxavir: Cap-dependent endonuclease inhibitor (influenza)
- Nirmatrelvir: Main protease inhibitor (SARS-CoV-2)
- Interferons: Boost host immune response

**Important Treatment Principles:**

*Timing Matters:*
- Flu antivirals: Most effective within 48 hours
- Herpes antivirals: Best started at first symptoms
- HIV/HCV: Can start anytime but earlier is better

*Combination Therapy:*
- HIV: Always multiple drugs (prevents resistance)
- HCV: Usually 2-3 agents for 8-12 weeks
- Prevents single mutations from causing resistance

*Drug Resistance:*
- Viruses can mutate to escape drug effects
- More likely with incomplete treatment
- Test for resistance before starting HIV therapy`,
      keyTerms: [
        { term: 'nucleoside analogue', definition: 'Drug that mimics a DNA/RNA building block and disrupts viral genome synthesis' },
        { term: 'protease inhibitor', definition: 'Drug that blocks the enzyme cutting viral proteins into functional forms' },
        { term: 'integrase inhibitor', definition: 'Drug that prevents HIV from inserting its DNA into host chromosomes' },
        { term: 'neuraminidase', definition: 'Influenza enzyme that releases new viruses from cells; target of oseltamivir' },
        { term: 'chain termination', definition: 'When a nucleoside analogue stops further DNA/RNA synthesis' },
      ],
      analogies: [
        'Protease inhibitors are like putting glue on scissors - the viral proteins cannot be cut into working parts.',
        'Nucleoside analogues are like fake LEGO pieces that fit into the structure but prevent it from being completed.',
      ],
    },
    3: {
      level: 3,
      summary: 'Antiviral pharmacology encompasses mechanism-based drug selection, pharmacokinetic optimization, resistance mechanisms, and treatment protocols tailored to specific viral infections and patient populations.',
      explanation: `Clinical antiviral therapeutics requires understanding of drug mechanisms, resistance patterns, and evidence-based treatment protocols.

**Anti-Herpesvirus Agents:**

*Acyclovir/Valacyclovir:*
- Mechanism: Guanosine analogue, triphosphorylated by viral TK
- Selective toxicity: Requires viral TK for activation
- Spectrum: HSV-1, HSV-2, VZV
- Valacyclovir: Prodrug, 3-5x better oral bioavailability
- Dosing varies by indication:
  * Genital herpes primary: 1g BID x 7-10 days
  * Genital herpes recurrence: 500mg BID x 3 days
  * Shingles: 1g TID x 7 days

*Ganciclovir/Valganciclovir:*
- Mechanism: Similar to acyclovir but also active against CMV
- Activation: CMV UL97 kinase
- Toxicity: Myelosuppression, teratogenic
- Uses: CMV retinitis, prophylaxis/treatment in transplant

*Foscarnet:*
- Mechanism: Direct polymerase inhibitor (no activation needed)
- Uses: Acyclovir-resistant HSV, ganciclovir-resistant CMV
- Toxicity: Nephrotoxic, electrolyte abnormalities

*Cidofovir:*
- Mechanism: Nucleotide analogue (already has one phosphate)
- Uses: CMV retinitis, resistant herpes viruses
- Toxicity: Nephrotoxic (requires probenecid)

**Anti-Influenza Agents:**

*Neuraminidase Inhibitors:*
- Oseltamivir: 75mg BID x 5 days (treatment)
- Resistance: H275Y mutation (rare currently)
- Benefit: Reduces duration ~1 day if started within 48h
- Greatest benefit: Severe illness, high-risk patients

*Baloxavir:*
- Mechanism: Cap-dependent endonuclease inhibitor
- Dosing: Single dose
- Resistance: PA I38X mutations can emerge during treatment

**Hepatitis C Direct-Acting Antivirals (DAAs):**

*Classes:*
- NS3/4A protease inhibitors: -previr (glecaprevir, voxilaprevir)
- NS5A inhibitors: -asvir (ledipasvir, velpatasvir)
- NS5B polymerase inhibitors: -buvir (sofosbuvir)

*Treatment Regimens (pangenotypic):*
- Glecaprevir/pibrentasvir: 8 weeks (treatment-naive, non-cirrhotic)
- Sofosbuvir/velpatasvir: 12 weeks

*Cure Rates:*
- SVR (sustained virologic response) >95% overall
- Check for reinfection in high-risk patients

**HIV Antiretroviral Therapy (ART):**

*Core Classes:*
- NRTIs: Tenofovir, abacavir, lamivudine, emtricitabine
- NNRTIs: Efavirenz, rilpivirine, doravirine
- Protease inhibitors: Darunavir (boosted with ritonavir or cobicistat)
- Integrase inhibitors: Dolutegravir, bictegravir (preferred)

*Recommended Initial Regimens (2024):*
- Bictegravir/tenofovir alafenamide/emtricitabine (Biktarvy)
- Dolutegravir + tenofovir/emtricitabine (or abacavir/lamivudine)

*Principles:*
- Combination therapy mandatory (usually 3 drugs)
- Test for resistance before starting
- Monitor viral load and CD4 count
- Goal: Undetectable viral load

**SARS-CoV-2 Antivirals:**

*Nirmatrelvir/Ritonavir (Paxlovid):*
- Mechanism: Main protease inhibitor
- Indication: Mild-moderate COVID, high-risk, within 5 days
- Drug interactions: Ritonavir is strong CYP3A4 inhibitor

*Remdesivir:*
- Mechanism: Adenosine nucleotide analogue
- Route: IV only
- Use: Hospitalized patients, 3-5 days typically`,
      keyTerms: [
        { term: 'sustained virologic response (SVR)', definition: 'Undetectable HCV RNA 12 weeks after treatment completion; considered virologic cure' },
        { term: 'prodrug', definition: 'Inactive drug form that is converted to active drug in the body; valacyclovir → acyclovir' },
        { term: 'pharmacokinetic booster', definition: 'Drug (ritonavir, cobicistat) that inhibits metabolism of another drug to increase levels' },
        { term: 'viral thymidine kinase', definition: 'Herpesvirus enzyme that activates acyclovir; mutations cause resistance' },
        { term: 'pangenotypic', definition: 'Effective against all genotypes (HCV genotypes 1-6)' },
      ],
      clinicalNotes: 'For shingles, valacyclovir is preferred over acyclovir due to less frequent dosing. Baloxavir should be avoided in pregnancy (insufficient data) and may be less effective in immunocompromised. HCV screening now recommended for all adults. Start ART immediately for new HIV diagnosis in most cases.',
    },
    4: {
      level: 4,
      summary: 'Optimized antiviral therapy requires integration of pharmacokinetic/pharmacodynamic principles, resistance testing, drug interaction management, and special population considerations for complex infections.',
      explanation: `Advanced antiviral therapeutics involves PK/PD optimization, management of resistance, and treatment of complex patient populations.

**Pharmacokinetic Considerations:**

*HIV ART Pharmacology:*
- Integrase inhibitors: Dolutegravir, bictegravir - once daily, minimal drug interactions
- Boosted PIs: Ritonavir/cobicistat inhibit CYP3A4, increase exposure
- Tenofovir alafenamide (TAF) vs. disoproxil fumarate (TDF): TAF less nephrotoxic, less bone effects
- NNRTI differences: Efavirenz (CNS effects), doravirine (fewer interactions)

*Drug Interactions:*

| Antiviral | CYP3A4 Effect | Key Interactions |
|-----------|---------------|------------------|
| Ritonavir | Strong inhibitor | Most medications |
| Paxlovid | Strong inhibitor | Statins, immunosuppressants |
| Efavirenz | Inducer | Reduces many drug levels |
| Rifampin | Inducer | Contraindicated with many ARVs |

*Special Populations:*
- Renal impairment: Adjust acyclovir, ganciclovir, cidofovir
- Hepatic impairment: Caution with most PIs
- Pregnancy: Avoid efavirenz first trimester, dolutegravir preferred

**Resistance Mechanisms and Testing:**

*HIV Resistance:*
- Genotype testing: Recommended before initiation and at failure
- M184V: Lamivudine/emtricitabine resistance
- K65R: Tenofovir reduced susceptibility
- NNRTI mutations: Single mutation often confers high-level resistance

*CMV Resistance:*
- UL97 mutations: Ganciclovir resistance (most common)
- UL54 mutations: Broad resistance including foscarnet
- Testing: Genotypic sequencing of UL97/UL54

*HSV Resistance:*
- Thymidine kinase mutations: Most common
- DNA polymerase mutations: Less common
- Occurs mainly in immunocompromised
- Treatment: Foscarnet, cidofovir

**Complex Treatment Scenarios:**

*HIV Treatment Failure:*
- Confirm adherence first
- Genotype testing while on failing regimen
- Build new regimen with at least 2 (preferably 3) active agents
- Salvage options: Ibalizumab, fostemsavir, lenacapavir

*CMV in Transplant:*
- Prophylaxis: Valganciclovir for 3-6 months (highest risk)
- Preemptive: Weekly PCR monitoring, treat if positive
- Treatment: Valganciclovir 900mg BID (or IV ganciclovir)
- Resistant CMV: Foscarnet, cidofovir, maribavir

*HSV/VZV in Immunocompromised:*
- Higher doses, longer courses
- Disseminated disease: IV acyclovir
- Resistance: Foscarnet first-line

*HCV Retreatment:*
- After DAA failure: Resistance testing (NS3, NS5A)
- Sofosbuvir/velpatasvir/voxilaprevir for 12 weeks
- Decompensated cirrhosis: Avoid protease inhibitors

**Monitoring and Adverse Effects:**

*Ganciclovir/Valganciclovir:*
- Neutropenia: CBC weekly initially
- Dose reduce or hold for ANC <500
- Consider G-CSF support

*Foscarnet:*
- Nephrotoxicity: Creatinine, electrolytes (Ca, Mg, K, PO4)
- Pre-hydration essential
- Genital ulceration

*Tenofovir:*
- TDF: Monitor creatinine, phosphorus
- Fanconi syndrome, osteomalacia
- TAF: Improved renal/bone safety

*Protease Inhibitors:*
- Metabolic: Dyslipidemia, insulin resistance
- GI intolerance
- Drug interactions (boosters)

**Emerging Strategies:**

*Long-Acting Antivirals:*
- Cabotegravir/rilpivirine: Monthly or bimonthly IM injection for HIV
- Lenacapavir: Every 6 months (salvage therapy)
- Islatravir: Investigational long-acting NRTTI

*Host-Targeted Therapies:*
- CCR5 antagonists (HIV)
- Cyclophilin inhibitors (HCV - investigational)
- Interferon-free regimens standard for HCV

*Cure Research:*
- HIV: Gene therapy, broadly neutralizing antibodies, latency reversal
- HBV: Functional cure strategies under development`,
      keyTerms: [
        { term: 'genotypic resistance testing', definition: 'Sequencing viral genes to identify mutations associated with drug resistance' },
        { term: 'M184V', definition: 'HIV reverse transcriptase mutation conferring high-level lamivudine/emtricitabine resistance' },
        { term: 'pharmacokinetic boosting', definition: 'Use of CYP3A4 inhibitor to increase drug exposure and enable once-daily dosing' },
        { term: 'preemptive therapy', definition: 'Strategy of monitoring for viral reactivation and treating upon detection before disease' },
        { term: 'tenofovir alafenamide (TAF)', definition: 'Prodrug of tenofovir with improved renal and bone safety compared to TDF' },
      ],
      clinicalNotes: `**Clinical Pearls:**
- Paxlovid interactions: Check all medications; hold/adjust statins, tacrolimus, etc.
- Cabotegravir/rilpivirine: Only for virologically suppressed, adherent patients
- CMV viral load rising on treatment: Send UL97/UL54 genotype
- HSV resistance rare in immunocompetent; consider in non-healing lesions in immunocompromised
- HBV flares can occur if lamivudine, entecavir, or tenofovir stopped (even in HIV coinfection)`,
    },
    5: {
      level: 5,
      summary: 'Contemporary antiviral therapeutics encompasses precision medicine approaches with viral genomics, novel drug targets and delivery systems, antiviral immunotherapy, and strategies addressing emerging viral threats and resistance patterns.',
      explanation: `Expert-level antiviral therapeutics requires integration of molecular virology, advanced pharmacology, immunology, and emerging treatment paradigms.

**Precision Antiviral Medicine:**

*Viral Genomics in Clinical Practice:*
- Deep sequencing: Detection of minority variants
- Tropism testing (HIV): CCR5 vs. CXCR4 usage
- HCV genotyping and resistance-associated substitutions (RAS)
- CMV genotype-phenotype correlations

*Therapeutic Drug Monitoring:*
- Efavirenz: Consider in slow metabolizers (CYP2B6)
- Voriconazole: Widely used; antiviral TDM less established
- Novel applications: Beta-lactam TDM being applied to some antivirals

*Pharmacogenomics:*
- HLA-B*5701: Abacavir hypersensitivity (mandatory testing)
- CYP2B6 polymorphisms: Efavirenz plasma levels
- UGT1A1: Atazanavir metabolism, hyperbilirubinemia

**Novel and Emerging Antivirals:**

*New Mechanisms:*
- Capsid inhibitors (HIV): Lenacapavir - disrupts multiple stages
- Maturation inhibitors: Block Gag cleavage
- Attachment inhibitors: Fostemsavir for multidrug-resistant HIV
- NNRTI translocation inhibitors: Novel mechanism

*Nucleoside Analogue Advances:*
- 4'-modified nucleosides: Enhanced potency
- ProTide technology: Improved intracellular delivery
- Locked nucleic acids: Enhanced specificity

*Broad-Spectrum Antivirals:*
- Remdesivir-like compounds: Other adenosine analogues
- Host-targeted agents: DHODH inhibitors, kinase inhibitors
- Interferon lambda: Improved tolerability vs. alfa

**Antiviral Immunotherapy:**

*Monoclonal Antibodies:*
- HIV: Broadly neutralizing antibodies (bNAbs)
  * VRC01, 3BNC117: Target CD4 binding site
  * ibalizumab: Post-attachment inhibitor (approved)
- SARS-CoV-2: Variant-dependent efficacy challenges
- RSV: Palivizumab, nirsevimab

*Immune Checkpoint Modulation:*
- PD-1 inhibitors in chronic viral infections
- Restoration of exhausted T cells
- Hepatitis B functional cure research

*Therapeutic Vaccines:*
- HIV: Attempts to boost immune control
- HPV therapeutic vaccines: For established infections
- HBV: Combined with antivirals for cure strategies

**HIV Cure Research:**

*Current Strategies:*
- Shock and kill: Latency reversal agents + immune clearance
- Block and lock: Permanent silencing of provirus
- Gene therapy: CCR5 editing, stem cell approaches
- Broadly neutralizing antibodies: Extended virus control

*Successes and Challenges:*
- Berlin/London/Dusseldorf patients: CCR5-delta32 transplants
- Scalability limitations
- Viral rebound post-ATI in most studies

**HBV Cure Strategies:**

*Functional Cure Goal:*
- HBsAg loss with anti-HBs development
- Control without ongoing therapy
- Reduce HCC risk

*Novel Targets:*
- Entry inhibitors (bulevirtide)
- Core/capsid inhibitors
- siRNA (ARC-520, VIR-2218)
- ASO (bepirovirsen)
- Therapeutic vaccines

**Emerging and Pandemic Threats:**

*Platform Technologies:*
- mRNA antivirals: Rapid development potential
- Broad-spectrum approaches for unknown pathogens
- Pan-coronavirus antivirals

*Resistance Anticipation:*
- Surveillance programs
- Combination strategies to prevent emergence
- Novel targets with higher barrier to resistance

**Special Situations:**

*Solid Organ Transplant:*
- HCV treatment pre/post-transplant
- CMV prevention strategies evolving
- HBV prophylaxis protocols

*Oncology Patients:*
- Checkpoint inhibitor-associated viral reactivation
- CAR-T and CMV/HHV-6
- Hepatitis screening before immunosuppression

*Pregnancy:*
- HIV: ART throughout, TAF-based preferred
- HCV: Treatment deferred until postpartum
- HBV: Continue tenofovir; HBIG + vaccine for newborn

**Future Directions:**

*Drug Development:*
- AI/ML for antiviral discovery
- Structure-based drug design
- Antivirals for currently untreatable infections

*Delivery Innovations:*
- Long-acting injectables (monthly to yearly)
- Implants for sustained release
- Targeted delivery to reservoirs

*Global Access:*
- Generic antivirals for HCV, HIV
- Patent pools and voluntary licenses
- Point-of-care diagnostics and treatment`,
      keyTerms: [
        { term: 'broadly neutralizing antibody (bNAb)', definition: 'Antibody capable of neutralizing diverse HIV strains by targeting conserved epitopes' },
        { term: 'resistance-associated substitutions (RAS)', definition: 'HCV mutations conferring reduced susceptibility to direct-acting antivirals' },
        { term: 'latency reversal agents', definition: 'Compounds that reactivate latent HIV to enable immune clearance (shock and kill strategy)' },
        { term: 'functional cure', definition: 'Durable viral control without ongoing therapy (HBV); vs. sterilizing cure (complete eradication)' },
        { term: 'ProTide technology', definition: 'Prodrug approach delivering nucleoside monophosphates intracellularly, bypassing first phosphorylation' },
      ],
      clinicalNotes: `**Board-Relevant Points:**
- HLA-B*5701 testing: Mandatory before abacavir; if positive, never use abacavir
- Lenacapavir: Every 6 months for highly treatment-experienced HIV; capsid inhibitor
- CMV letermovir: Prophylaxis in stem cell transplant; does not treat active disease
- HCV DAAs: Safe in decompensated cirrhosis except NS3 protease inhibitors
- HIV bNAbs: VRC01, 3BNC117 in trials; ibalizumab is FDA-approved mAb
- Long-acting ART: Cabotegravir/rilpivirine requires viral suppression, no resistance, no HBV coinfection`,
    },
  },

  media: [
    {
      id: 'antiviral-mechanisms',
      type: 'diagram',
      filename: 'antiviral-mechanisms.svg',
      title: 'Antiviral Drug Mechanisms',
      description: 'Overview of where different antiviral classes act in viral life cycle',
    },
    {
      id: 'hiv-drug-classes',
      type: 'diagram',
      filename: 'hiv-drug-classes.svg',
      title: 'HIV Antiretroviral Drug Classes',
      description: 'Targets of different ART classes in HIV replication',
    },
  ],
  citations: [
    {
      id: 'dhhs-hiv-guidelines',
      type: 'website',
      title: 'Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV',
      source: 'Department of Health and Human Services (DHHS)',
      url: 'https://clinicalinfo.hiv.gov/en/guidelines',
    },
    {
      id: 'sanford-guide',
      type: 'textbook',
      title: 'The Sanford Guide to Antimicrobial Therapy',
      source: 'Antimicrobial Therapy, Inc.',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-viral-overview', targetType: 'topic', relationship: 'parent', label: 'Viral Infections Overview' },
    { targetId: 'infectious-disease-hiv', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'infectious-disease-antibiotic-stewardship', targetType: 'topic', relationship: 'related', label: 'Antibiotic Stewardship' },
  ],
  tags: {
    systems: ['immune'],
    topics: ['infectious-disease', 'pharmacology', 'virology'],
    keywords: ['antiviral', 'HIV', 'ART', 'hepatitis', 'herpes', 'influenza', 'COVID-19', 'resistance'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine'] },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default antiviralTherapy;
