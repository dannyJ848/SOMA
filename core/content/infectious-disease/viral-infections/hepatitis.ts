import { EducationalContent } from '../../types';

export const HEPATITIS: EducationalContent = {
  id: 'infectious-disease-hepatitis',
  type: 'condition',
  name: 'Hepatitis',
  alternateNames: ['Viral Hepatitis', 'Liver Infection', 'Hep'],
  levels: {
    1: {
      level: 1,
      summary: 'Hepatitis is inflammation of the liver, most often caused by viruses that can spread in different ways.',
      explanation: `Your liver is one of the most important organs in your body. It cleans your blood, helps digest food, stores energy, and fights infections. Hepatitis means the liver is inflamed (swollen and irritated), which keeps it from working properly.

**Types of Viral Hepatitis:**

**Hepatitis A:**
- Spreads through contaminated food or water
- Usually goes away on its own
- There's a vaccine to prevent it

**Hepatitis B:**
- Spreads through blood, sex, or from mother to baby
- Can become a long-lasting (chronic) infection
- There's a vaccine to prevent it

**Hepatitis C:**
- Spreads mainly through blood (sharing needles, before blood screening)
- Often becomes chronic but can now be cured with medicine
- No vaccine yet, but treatments are very effective

**Symptoms:**
Some people have no symptoms at all. When symptoms occur, they can include:
- Feeling very tired
- Stomach pain
- Nausea and vomiting
- Dark urine
- Yellowing of skin and eyes (jaundice)
- Loss of appetite

**Why Hepatitis Matters:**
If hepatitis becomes chronic (long-lasting), it can seriously damage the liver over many years, leading to:
- Scarring of the liver (cirrhosis)
- Liver failure
- Liver cancer

**Prevention:**
- Get vaccinated for Hepatitis A and B
- Don't share needles or personal items like razors
- Practice safe sex
- Be careful about food and water safety when traveling`,
      keyTerms: [
        { term: 'Hepatitis', definition: 'Inflammation of the liver, often caused by viruses' },
        { term: 'Liver', definition: 'A large organ that filters blood and helps with digestion' },
        { term: 'Jaundice', definition: 'Yellowing of the skin and eyes caused by liver problems' },
        { term: 'Chronic', definition: 'A condition that lasts a long time or keeps coming back' },
      ],
    },
    2: {
      level: 2,
      summary: 'Viral hepatitis encompasses hepatitis A, B, C, D, and E viruses, each with distinct transmission routes, clinical courses, and implications for chronic liver disease.',
      explanation: `Viral hepatitis is caused by several distinct viruses that share liver tropism but differ in transmission, natural history, and treatment options.

**Hepatitis A (HAV):**
- **Transmission**: Fecal-oral route (contaminated food/water, person-to-person)
- **Course**: Self-limited acute illness, never becomes chronic
- **Incubation**: 15-50 days
- **Prevention**: Effective vaccine (2-dose series)
- **Treatment**: Supportive care only

**Hepatitis B (HBV):**
- **Transmission**: Blood, sexual contact, perinatal
- **Course**:
  - Adults: 90-95% clear infection; 5-10% become chronic
  - Infants: 90% become chronic (immature immune system)
- **Incubation**: 45-180 days
- **Prevention**: Vaccine (3-dose series, given at birth)
- **Treatment**: Antivirals for chronic infection (rarely curative)

**Hepatitis C (HCV):**
- **Transmission**: Blood (injection drug use, transfusions before 1992)
- **Course**: 70-85% become chronic
- **Incubation**: 14-180 days
- **Prevention**: No vaccine; harm reduction strategies
- **Treatment**: Direct-acting antivirals (DAAs) cure >95%

**Hepatitis D (HDV):**
- **Requires HBV**: Only infects people with hepatitis B
- **Transmission**: Same as HBV
- **Course**: Accelerates liver disease progression
- **Prevention**: HBV vaccination prevents HDV

**Hepatitis E (HEV):**
- **Transmission**: Fecal-oral (contaminated water, undercooked meat)
- **Course**: Usually self-limited; can be severe in pregnancy
- **Incubation**: 15-60 days
- **Treatment**: Supportive; ribavirin for chronic cases in immunocompromised

**Laboratory Diagnosis:**

| Test | Meaning |
|------|---------|
| Anti-HAV IgM | Acute Hepatitis A |
| HBsAg | Hepatitis B infection (acute or chronic) |
| Anti-HBs | Immunity to Hepatitis B (vaccine or past infection) |
| Anti-HCV | Hepatitis C exposure |
| HCV RNA | Active Hepatitis C infection |

**Progression of Chronic Hepatitis:**
Chronic HBV or HCV can lead over decades to:
1. Chronic hepatitis (inflammation)
2. Fibrosis (scarring)
3. Cirrhosis (severe scarring, impaired function)
4. Hepatocellular carcinoma (liver cancer)

Regular monitoring is essential for those with chronic viral hepatitis.`,
      keyTerms: [
        { term: 'Fecal-oral transmission', definition: 'Spread of infection when germs from feces contaminate food, water, or hands' },
        { term: 'Perinatal transmission', definition: 'Spread of infection from mother to baby during pregnancy or birth' },
        { term: 'Cirrhosis', definition: 'Severe scarring of the liver from long-term damage' },
        { term: 'Direct-acting antivirals', definition: 'Medications that directly target the hepatitis C virus lifecycle' },
        { term: 'HBsAg', definition: 'Hepatitis B surface antigen - a marker indicating current HBV infection' },
      ],
    },
    3: {
      level: 3,
      summary: 'Hepatitis viruses cause liver disease through distinct pathogenic mechanisms, with clinical outcomes ranging from acute self-limited illness to chronic infection, cirrhosis, and hepatocellular carcinoma, necessitating virus-specific diagnostic and therapeutic approaches.',
      explanation: `Understanding hepatitis requires knowledge of viral biology, immunopathogenesis, diagnostic serology, and evidence-based treatment strategies.

**Viral Biology:**

*Hepatitis B Virus (HBV):*
- Family: Hepadnaviridae
- Genome: Partially double-stranded DNA, replicates via reverse transcription
- cccDNA: Covalently closed circular DNA persists in nucleus (therapeutic target)
- Genotypes: A-J, affect disease course and treatment response

*Hepatitis C Virus (HCV):*
- Family: Flaviviridae
- Genome: Single-stranded positive-sense RNA
- High mutation rate, quasispecies evolution
- Genotypes: 1-6, guide treatment duration

*Hepatitis A and E:*
- Both RNA viruses
- HAV: Picornaviridae
- HEV: Hepeviridae
- No chronic state (except HEV in immunocompromised)

**Immunopathogenesis:**

*HBV:*
- Virus itself is not cytopathic
- Liver damage caused by immune response (CD8+ T cells)
- Chronic infection: Immune exhaustion, tolerance
- Phases: Immune tolerant → Immune active → Inactive carrier → Reactivation

*HCV:*
- Also primarily immune-mediated injury
- Viral proteins interfere with interferon signaling
- Chronic inflammation leads to fibrosis
- Steatosis (fatty liver) common with genotype 3

**Diagnostic Algorithms:**

*HBV Interpretation:*
| HBsAg | Anti-HBs | Anti-HBc IgM | Anti-HBc total | Interpretation |
|-------|----------|--------------|----------------|----------------|
| + | - | + | + | Acute HBV |
| + | - | - | + | Chronic HBV |
| - | + | - | + | Resolved HBV |
| - | + | - | - | Vaccinated |
| - | - | - | + | Isolated core Ab (occult HBV or remote infection) |

*HCV Algorithm:*
1. Screen with anti-HCV antibody
2. If positive, confirm with HCV RNA
3. If RNA positive, genotype to guide treatment duration

**Treatment:**

*Chronic HBV:*
Treatment goals: Suppress viral replication, prevent complications
- **Entecavir**: Nucleoside analog, high barrier to resistance
- **Tenofovir**: Nucleotide analog, no resistance reported
- **Pegylated interferon**: Limited use, finite therapy attempts immune clearance
- Functional cure (HBsAg loss) rare with current agents

*Chronic HCV:*
Direct-acting antivirals (DAAs) achieve sustained virologic response (SVR) >95%:
- **NS5A inhibitors**: ledipasvir, velpatasvir, pibrentasvir
- **NS5B polymerase inhibitors**: sofosbuvir
- **NS3/4A protease inhibitors**: glecaprevir
- Pan-genotypic regimens simplify treatment
- Treatment duration: 8-12 weeks for most patients

**Monitoring and Complications:**

*Cirrhosis Assessment:*
- FIB-4 score: Age, platelets, AST, ALT
- FibroScan (transient elastography): Non-invasive liver stiffness
- Liver biopsy: Gold standard but invasive

*HCC Surveillance:*
- Ultrasound ± AFP every 6 months
- For chronic HBV (high risk) and any cirrhosis
- HCV SVR reduces but does not eliminate HCC risk`,
      keyTerms: [
        { term: 'cccDNA', definition: 'Covalently closed circular DNA - the stable viral reservoir in hepatocyte nuclei that makes HBV difficult to cure' },
        { term: 'Sustained virologic response', definition: 'Undetectable HCV RNA 12+ weeks after treatment completion, considered cure' },
        { term: 'Fibrosis', definition: 'Accumulation of scar tissue in the liver from chronic inflammation' },
        { term: 'Pan-genotypic', definition: 'Effective against all genotypes of a virus' },
        { term: 'FibroScan', definition: 'A non-invasive test using ultrasound-based transient elastography to measure liver stiffness' },
      ],
    },
    4: {
      level: 4,
      summary: 'Hepatitis virus pathogenesis involves complex host-pathogen interactions, immune-mediated liver injury, and distinct viral life cycles, with therapeutic strategies targeting viral replication, immune modulation, and emerging approaches toward HBV functional cure.',
      explanation: `Advanced understanding of viral hepatitis integrates molecular virology, immunology, and therapeutic principles for optimal patient management.

**Hepatitis B Molecular Biology:**

*Genome Organization:*
- 3.2 kb partially double-stranded DNA
- Four overlapping ORFs: S (surface), C (core), P (polymerase), X
- Precore region produces HBeAg (secreted, immune modulator)

*Replication Cycle:*
1. Attachment via NTCP receptor (sodium taurocholate cotransporting polypeptide)
2. Nuclear import of relaxed circular DNA (rcDNA)
3. Conversion to cccDNA by host enzymes
4. Transcription of pregenomic RNA and mRNAs
5. Reverse transcription in cytoplasmic capsids
6. Envelopment and secretion

*cccDNA Persistence:*
- Long half-life (months to years)
- Not targeted by current antivirals
- Basis for HBV persistence and reactivation risk
- Novel therapies targeting cccDNA under development

**Hepatitis C Virology:**

*Genome and Proteins:*
- 9.6 kb positive-sense RNA
- Encodes single polyprotein cleaved into 10 proteins
- Structural: Core, E1, E2
- Nonstructural: NS2, NS3, NS4A, NS4B, NS5A, NS5B

*DAA Targets:*
- NS3/4A protease: Processes polyprotein
- NS5A: Multiple functions (replication, assembly)
- NS5B: RNA-dependent RNA polymerase

*Resistance-Associated Substitutions (RASs):*
- Pre-existing or treatment-emergent mutations
- NS5A RASs: Most clinically significant
- Baseline testing may guide therapy in certain scenarios

**Immunopathogenesis Deep Dive:**

*HBV Immune Tolerance:*
- Perinatal infection: HBeAg crosses placenta, tolerizes fetal immune system
- High viral load, minimal inflammation, normal ALT
- Immune active phase: Breakdown of tolerance, ALT elevation, liver injury

*HBV Immune Exhaustion:*
- PD-1 and other checkpoint molecules upregulated on HBV-specific T cells
- Functional impairment: Poor cytokine production, proliferation
- Rationale for checkpoint inhibitor investigation in HBV cure strategies

*HCV Immune Evasion:*
- NS3/4A cleaves MAVS, disrupting RIG-I signaling
- NS5A inhibits PKR
- E2 hypervariable region generates escape mutants
- 25-30% spontaneously clear; HLA class II alleles influence outcome

**Special Populations:**

*HBV Reactivation:*
Risk with immunosuppression:
- B cell depleting therapy (rituximab): High risk, requires prophylaxis
- TNF inhibitors, chemotherapy: Moderate risk
- Screening with HBsAg and anti-HBc before immunosuppression
- Prophylaxis with entecavir or tenofovir

*HIV-HBV Coinfection:*
- Higher risk of chronic HBV
- Tenofovir-based ART treats both viruses
- Avoid lamivudine monotherapy for HIV (HBV resistance)

*HIV-HCV Coinfection:*
- DAAs effective regardless of HIV status
- Drug interactions with antiretrovirals require attention
- Treatment as for monoinfection

**Emerging Therapies:**

*HBV Cure Research:*
- Functional cure goal: Sustained HBsAg loss, anti-HBs seroconversion
- Strategies:
  - Capsid assembly modulators: Prevent nucleocapsid formation
  - siRNA/antisense oligonucleotides: Silence HBV transcription
  - HBsAg release inhibitors: Reduce circulating antigen, restore immunity
  - Checkpoint inhibitors: Reverse T cell exhaustion
  - Therapeutic vaccines: Boost HBV-specific T cell responses

*HCV Challenges:*
- Reinfection risk in ongoing exposure
- Access and cost barriers in some regions
- Micro-elimination strategies in specific populations`,
      keyTerms: [
        { term: 'NTCP', definition: 'Sodium taurocholate cotransporting polypeptide - the cellular receptor for HBV entry' },
        { term: 'Resistance-associated substitutions', definition: 'Viral mutations that reduce susceptibility to direct-acting antivirals' },
        { term: 'Functional cure', definition: 'In HBV, sustained loss of HBsAg and possibly development of anti-HBs, with undetectable HBV DNA' },
        { term: 'MAVS', definition: 'Mitochondrial antiviral signaling protein - cleaved by HCV NS3/4A to evade innate immunity' },
        { term: 'Capsid assembly modulator', definition: 'Novel HBV drug class that disrupts nucleocapsid formation' },
      ],
      clinicalNotes: 'HBV management requires determining disease phase and treatment indications. Not all patients with chronic HBV need treatment. HCV is now curable in >95% with DAAs, making screening and linkage to care the primary challenge. HBV reactivation during immunosuppression can be fatal; routine screening before rituximab and other high-risk therapies is mandatory.',
    },
    5: {
      level: 5,
      summary: 'Expert hepatitis management integrates advanced diagnostics including quantitative viral markers and liver staging, personalized treatment strategies, management of special populations and complications, and participation in the HBV cure research agenda.',
      explanation: `Mastery of viral hepatitis encompasses nuanced clinical decision-making, management of complex scenarios, and engagement with emerging science.

**Advanced Diagnostics:**

*HBV Quantitative Markers:*
- HBV DNA (IU/mL): Guides treatment initiation and monitors response
- HBsAg quantification: Predicts natural history, treatment response
- HBcrAg (core-related antigen): Surrogate for cccDNA activity
- HBV RNA: Reflects cccDNA transcription, useful for novel therapies

*HBV Genotypes and Clinical Implications:*
| Genotype | Geography | Clinical Features |
|----------|-----------|-------------------|
| A | Northern Europe, Africa | Better IFN response, slower progression |
| B | Asia | Milder disease, less HCC (except B2) |
| C | Asia, Pacific | More severe, earlier HCC |
| D | Mediterranean, Middle East | Variable, associated with precore mutants |
| E | Africa | Limited data |

*HCV Diagnostics:*
- Reflex testing: Automated HCV RNA when anti-HCV positive
- Genotype: Still useful for some regimens, insurance requirements
- RAS testing: Limited utility with pan-genotypic regimens

**Complex Treatment Scenarios:**

*HBV Treatment Endpoints:*
| Endpoint | Definition | Frequency |
|----------|------------|-----------|
| Virologic response | Undetectable HBV DNA | >95% on NA therapy |
| Biochemical response | ALT normalization | Variable |
| HBeAg seroconversion | Loss of HBeAg, gain anti-HBe | 20-40% over years |
| Functional cure | HBsAg loss ± anti-HBs | 1-3% annually |

*NA Therapy Duration:*
- Indefinite for cirrhosis or HBeAg-negative CHB
- Consider stopping in HBeAg-positive after 12 months of HBeAg seroconversion with undetectable DNA
- Close monitoring after cessation (flares common but may lead to HBsAg loss)

*HCV Treatment Failures:*
- Rare with current DAAs (<5%)
- Resistance testing guides retreatment
- Sofosbuvir/velpatasvir/voxilaprevir for DAA-experienced patients
- Extended durations with ribavirin for difficult cases

**Hepatocellular Carcinoma:**

*Risk Stratification:*
- HBV: PAGE-B, REACH-B scores
- HCV post-SVR: Risk continues if cirrhosis present
- All cirrhotics from any etiology need surveillance

*Surveillance Programs:*
- Ultrasound ± AFP every 6 months
- CT/MRI if abnormal ultrasound or AFP
- LI-RADS system for lesion characterization
- Multidisciplinary tumor board for treatment planning

*HCC and Antiviral Therapy:*
- Antivirals reduce HCC recurrence after treatment
- Continue NA therapy through HCC treatment
- HCV SVR reduces HCC risk but surveillance continues in cirrhosis

**Special Populations:**

*Transplant Hepatology:*
- HBV recurrence prevention: HBIG + NA (historically); NA alone sufficient
- HCV recurrence: Treat post-transplant with DAAs, excellent outcomes
- HCV-positive organs: Can be used with DAA treatment

*Acute Liver Failure:*
- HAV: Rare, good transplant-free survival if not transplanted
- HBV: Consider NA therapy, though natural history often progresses
- Transplant evaluation for those meeting criteria

*Pregnancy:*
- HBV: High viral load mothers receive tenofovir in third trimester to prevent MTCT
- Birth dose HBV vaccine + HBIG for all infants of HBsAg+ mothers
- HCV: No approved therapy in pregnancy; vertical transmission ~5%

**HBV Cure Research Participation:**

*Current Trials:*
- Combination approaches: siRNA + capsid inhibitors + immunomodulators
- Checkpoint inhibition (anti-PD-1)
- Therapeutic vaccines
- TLR agonists

*Clinical Trial Endpoints:*
- HBsAg decline as surrogate
- Sustained HBsAg loss 6-12 months off therapy = functional cure
- Complete cure (cccDNA elimination) not yet achievable

**Public Health Integration:**

*Elimination Goals:*
- WHO targets: 90% diagnosed, 80% treated by 2030
- Birth dose vaccination scale-up globally
- HCV micro-elimination in high-prevalence populations (PWID, incarcerated)

*Linkage to Care:*
- One-stop testing and treatment models
- Primary care treatment of uncomplicated cases
- Addressing stigma and access barriers`,
      keyTerms: [
        { term: 'HBcrAg', definition: 'Hepatitis B core-related antigen - a serum marker reflecting intrahepatic cccDNA transcriptional activity' },
        { term: 'LI-RADS', definition: 'Liver Imaging Reporting and Data System - standardized system for characterizing liver lesions in patients at risk for HCC' },
        { term: 'MTCT', definition: 'Mother-to-child transmission - vertical transmission of infection during pregnancy or birth' },
        { term: 'Micro-elimination', definition: 'Strategy to eliminate hepatitis in specific high-prevalence populations rather than the general population' },
        { term: 'NA therapy', definition: 'Nucleos(t)ide analog therapy - oral antivirals for chronic HBV suppression' },
      ],
      clinicalNotes: 'The landscape of viral hepatitis has transformed with curative HCV therapy and improved HBV management, though HBV cure remains elusive. Clinical priorities include identifying patients in care, optimizing treatment, HCC surveillance, and addressing reactivation risk. Engagement with HBV cure research through clinical trials advances the field. Public health efforts toward elimination require integration of testing, linkage to care, and vaccination programs.',
    },
  },
  media: [],
  citations: [
    {
      id: 'aasld-hbv-2018',
      type: 'article',
      title: 'Update on Prevention, Diagnosis, and Treatment of Chronic Hepatitis B: AASLD 2018 Hepatitis B Guidance',
      authors: ['Terrault NA', 'Lok ASF', 'McMahon BJ'],
      source: 'Hepatology',
      license: 'Copyrighted',
    },
    {
      id: 'aasld-hcv-2023',
      type: 'website',
      title: 'HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C',
      authors: ['AASLD-IDSA'],
      source: 'AASLD/IDSA',
      license: 'Copyrighted',
    },
  ],
  crossReferences: [
    { targetId: 'infectious-disease-hiv-aids', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'infectious-disease-vaccination-overview', targetType: 'concept', relationship: 'related', label: 'Vaccination' },
  ],
  tags: {
    systems: ['infectious-disease', 'gastroenterology'],
    topics: ['viral-infections', 'liver-disease', 'chronic-infections'],
    keywords: ['hepatitis', 'HBV', 'HCV', 'cirrhosis', 'liver cancer', 'DAAs'],
    clinicalRelevance: 'high',
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
