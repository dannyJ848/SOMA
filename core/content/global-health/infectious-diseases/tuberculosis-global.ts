/**
 * Tuberculosis - Global Health Perspective
 *
 * Comprehensive content on tuberculosis as a global health challenge,
 * including epidemiology, risk factors, prevention, and global elimination efforts.
 */

import { EducationalContent } from '../../types';

export const TUBERCULOSIS_GLOBAL: EducationalContent = {
  id: 'tuberculosis-global',
  type: 'concept',
  name: 'Tuberculosis: A Global Health Challenge',
  alternateNames: ['TB Worldwide', 'Global TB Epidemic', 'Tuberculosis International'],

  levels: {
    1: {
      level: 1,
      summary: 'Tuberculosis (TB) is a disease caused by germs that usually attack the lungs. It spreads through the air when sick people cough, and it is one of the world\'s most deadly infectious diseases.',
      explanation: `Tuberculosis, or TB, is a very old disease that still makes millions of people sick every year.

**What is TB?**
TB is caused by tiny germs (bacteria) that mostly attack the lungs. When someone with TB coughs or sneezes, the germs can float in the air and other people might breathe them in.

**Important Facts:**
- TB is one of the top 10 causes of death in the world
- About 10 million people get sick with TB each year
- TB can be cured with medicine, but you have to take it for many months
- Not everyone who has the TB germ gets sick - some people carry it without knowing

**Who is at Risk?**
- People who live in crowded places
- People with weak immune systems (like those with HIV)
- People who don't have enough food to eat
- People in some parts of Africa, Asia, and other regions

**Good News:**
- TB can be prevented with vaccines (BCG vaccine for babies)
- TB can be cured if people take all their medicine
- Fewer people are dying from TB than before because of better treatment

**Why It Matters for Travelers:**
If you travel to places where TB is common, you might be at higher risk. Doctors can test if you've been exposed to TB.`,
      keyTerms: [
        { term: 'tuberculosis', definition: 'A disease caused by bacteria that usually affects the lungs', pronunciation: 'too-ber-kyoo-LOH-sis' },
        { term: 'TB', definition: 'Short name for tuberculosis' },
        { term: 'BCG vaccine', definition: 'A vaccine given to babies in many countries to help protect against TB' },
      ],
      analogies: [
        'TB germs spread through the air like tiny invisible seeds floating when someone coughs.',
        'The TB germ can "sleep" inside you for years without making you sick, like a bear hibernating.',
      ],
      examples: [
        'In many countries, all babies receive the BCG vaccine at birth to help protect them from TB.',
        'Someone with TB might cough for weeks and lose weight before finding out they are sick.',
      ],
    },
    2: {
      level: 2,
      summary: 'Tuberculosis remains one of the deadliest infectious diseases globally, causing approximately 1.3 million deaths annually. It disproportionately affects low and middle-income countries and is closely linked to poverty, HIV co-infection, and healthcare access.',
      explanation: `Tuberculosis (TB) is caused by Mycobacterium tuberculosis bacteria and primarily affects the lungs, though it can spread to other parts of the body. Despite being preventable and curable, TB remains a major global health threat.

**Global Burden:**
- ~10 million people develop TB disease each year
- ~1.3 million deaths annually (including among HIV-positive people)
- 30 countries account for 86% of new TB cases
- India, Indonesia, China, Philippines, and Pakistan have the highest burden

**How TB Spreads and Develops:**
1. Airborne transmission when someone with active TB coughs, sneezes, or talks
2. Most infected people develop "latent TB" - the bacteria are present but inactive
3. About 5-10% of those with latent TB will develop active disease in their lifetime
4. Risk of progression is much higher in people with weakened immune systems

**Risk Factors:**
- HIV infection (leading risk factor - 20x higher risk)
- Malnutrition and food insecurity
- Diabetes
- Smoking and alcohol use
- Living or working in crowded conditions
- Poverty and limited healthcare access

**TB and HIV:**
- HIV-TB co-infection is particularly deadly
- TB is the leading cause of death among people with HIV
- In some African countries, more than 50% of TB patients are HIV-positive

**Drug-Resistant TB:**
- Multidrug-resistant TB (MDR-TB): Resistant to two main drugs
- Extensively drug-resistant TB (XDR-TB): Resistant to additional drugs
- Treatment is longer, more expensive, and less successful

**Prevention and Treatment:**
- BCG vaccine provides some protection, especially for severe forms in children
- Active TB is treated with a combination of antibiotics for 6+ months
- Directly Observed Therapy (DOT) improves treatment completion
- Preventive treatment can be given to those with latent TB at high risk`,
      keyTerms: [
        { term: 'latent TB', definition: 'When TB bacteria are in the body but the person is not sick and cannot spread TB to others' },
        { term: 'active TB', definition: 'When TB bacteria are multiplying and causing symptoms; the person can spread TB' },
        { term: 'MDR-TB', definition: 'Multidrug-resistant TB - TB that does not respond to at least the two most powerful anti-TB drugs' },
        { term: 'DOT', definition: 'Directly Observed Therapy - a strategy where healthcare workers watch patients take their TB medicine' },
      ],
      analogies: [
        'Latent TB is like a campfire that has been put out but still has hot coals - it can reignite under the right conditions.',
      ],
    },
    3: {
      level: 3,
      summary: 'Tuberculosis epidemiology reflects the intersection of biological, social, and health system factors. The global TB response involves case detection, treatment with standardized regimens, addressing drug resistance, and tackling the social determinants that fuel transmission.',
      explanation: `**Epidemiology and Pathogenesis:**

Mycobacterium tuberculosis is a slow-growing, aerobic bacillus with unique cell wall characteristics that contribute to its survival and virulence.

**Transmission Dynamics:**
- Aerosol transmission via respiratory droplets (1-5 microns)
- Infectiousness correlates with bacterial load, cough frequency, and ventilation
- Household contacts have 30-40% infection risk; 1-5% progress to disease within 2 years
- Community transmission occurs in congregate settings

**Natural History:**
| Stage | Description | Proportion |
|-------|-------------|------------|
| Exposure | Inhale infected droplets | Variable |
| Infection | Bacteria establish in lungs | 30-50% of exposed |
| Latent TB | Immune containment, no symptoms | 90-95% of infected |
| Active TB | Disease develops, symptomatic | 5-10% lifetime risk |

**High-Risk Populations:**
- HIV-positive individuals (20-30x increased risk)
- Recent contacts of TB cases
- Healthcare workers in high-burden settings
- Prisoners and people in correctional facilities
- Homeless populations
- Migrants from high-burden countries
- People with immunosuppressive conditions or treatments

**Drug-Resistant TB Epidemiology:**
- ~500,000 new cases of rifampicin-resistant TB annually
- MDR-TB: Resistant to isoniazid and rifampicin
- Pre-XDR-TB: MDR-TB plus fluoroquinolone resistance
- XDR-TB: Pre-XDR plus resistance to bedaquiline and/or linezolid
- Highest burden: Russia, India, China, South Africa

**Global Response Framework:**

*WHO End TB Strategy Targets (by 2035):*
- 95% reduction in TB deaths (compared to 2015)
- 90% reduction in TB incidence
- Zero catastrophic costs for TB-affected families

*Key Interventions:*
1. **Case finding**: Symptom screening, chest X-ray, GeneXpert molecular testing
2. **Treatment**: Standardized regimens, shorter regimens for drug-susceptible TB
3. **Prevention**: TPT (TB preventive treatment) for high-risk groups
4. **TB-HIV activities**: Integrated services, ART for all HIV-positive TB patients
5. **MDR-TB management**: New drugs (bedaquiline, delamanid), all-oral regimens

**Diagnostics:**
- Sputum smear microscopy (low sensitivity)
- GeneXpert MTB/RIF (molecular, rapid, detects rifampicin resistance)
- Culture (gold standard, slow)
- Drug susceptibility testing (phenotypic or molecular)
- Tuberculin skin test / IGRA for latent TB

**Treatment Regimens:**
| Type | Standard Regimen | Duration |
|------|-----------------|----------|
| Drug-susceptible | 2HRZE/4HR (isoniazid, rifampicin, pyrazinamide, ethambutol) | 6 months |
| MDR-TB | BPaL-based or longer regimens | 6-18 months |
| Latent TB | 3HP, 4R, 6H options | 3-6 months |`,
      keyTerms: [
        { term: 'GeneXpert', definition: 'A molecular diagnostic test that can detect TB bacteria and rifampicin resistance in about 2 hours' },
        { term: 'IGRA', definition: 'Interferon-Gamma Release Assay - a blood test used to diagnose latent TB infection' },
        { term: 'TPT', definition: 'TB Preventive Treatment - medication given to people with latent TB to prevent progression to active disease' },
        { term: 'BPaL', definition: 'A newer all-oral regimen for drug-resistant TB containing bedaquiline, pretomanid, and linezolid' },
      ],
      clinicalNotes: 'When evaluating patients with possible TB: (1) Assess epidemiologic risk factors including country of origin and HIV status, (2) Recognize that extrapulmonary TB may present atypically, (3) Consider TB in differential for chronic cough, especially with weight loss and night sweats, (4) Report confirmed cases to public health for contact investigation.',
    },
    4: {
      level: 4,
      summary: 'The global TB epidemic reflects complex interactions between pathogen biology, host immunity, social determinants, and health system capacity. Contemporary approaches emphasize shortened regimens, novel diagnostics, preventive therapy expansion, and addressing structural drivers.',
      explanation: `**Pathogen Biology and Host-Pathogen Interactions:**

*Mycobacterium tuberculosis Characteristics:*
- Waxy, mycolic acid-rich cell wall provides resistance to desiccation, antimicrobials
- Slow replication time (~24 hours) compared to minutes for other bacteria
- Survival within macrophages through modulation of phagosome maturation
- Ability to enter dormant, phenotypically drug-tolerant states

*Immunopathogenesis:*
- Granuloma formation: Central role of Th1 response, IFN-gamma, TNF-alpha
- Caseous necrosis: Tissue destruction enabling transmission
- Immune evasion mechanisms: ESX-1 secretion system, lipid manipulation
- Latency: Balance between containment and bacterial persistence

*Genetic Determinants of Drug Resistance:*
| Drug | Gene Mutations | Frequency |
|------|---------------|-----------|
| Rifampicin | rpoB | >95% |
| Isoniazid | katG, inhA | 85-90% |
| Fluoroquinolones | gyrA, gyrB | >90% |
| Pyrazinamide | pncA | 70-80% |

**Advanced Diagnostics:**

*Molecular Platforms:*
- Xpert MTB/RIF Ultra: Improved sensitivity for paucibacillary disease
- Line probe assays: First and second-line DST
- Whole genome sequencing: Comprehensive resistance profiling, transmission mapping
- Targeted next-generation sequencing: Emerging approach

*Biomarkers and Novel Approaches:*
- Host immune signatures for incipient TB
- Mycobacterial antigen detection (LAM, especially in HIV)
- Computer-aided detection for chest X-ray
- Breath analysis (volatile organic compounds) - experimental

**Contemporary Treatment Advances:**

*Drug-Susceptible TB:*
- 4-month rifapentine-moxifloxacin regimen (Study 31/A5349)
- High-dose rifampicin studies
- Treatment monitoring without sputum culture

*Drug-Resistant TB Regimens:*
| Regimen | Components | Duration | Success Rate |
|---------|------------|----------|--------------|
| BPaL | Bedaquiline, pretomanid, linezolid | 6 months | ~90% |
| BPaLM | BPaL + moxifloxacin | 6 months | Under study |
| All-oral longer | Individualized based on DST | 9-18 months | 70-80% |

*Novel Agents:*
- Bedaquiline: ATP synthase inhibitor
- Pretomanid: Nitroimidazole with activity against dormant bacilli
- Delamanid: Nitroimidazole, inhibits mycolic acid synthesis
- Pipeline: Delpazolid, macozinone, BTZ-043, SQ109

**TB Prevention Strategies:**

*TPT (TB Preventive Treatment):*
- 3HP: 3-month weekly rifapentine + isoniazid (preferred)
- 1HP: 1-month daily (recent trials show non-inferiority)
- 4R: 4-month daily rifampicin
- Indicated for: PLHIV, household contacts, immunosuppressed, TST/IGRA converters

*Vaccine Development:*
- BCG: Variable efficacy (0-80%), protects against severe childhood forms
- M72/AS01E: Phase IIb trial showed 50% efficacy against progression
- Pipeline: VPM1002, DAR-901, MTBVAC (live attenuated), H4:IC31

**Social Determinants and Structural Interventions:**

*Syndemic Approach:*
- Poverty, undernutrition, HIV, diabetes as interacting epidemics
- Tobacco and alcohol increase susceptibility and worse outcomes
- Housing conditions affect transmission dynamics
- Migration and displacement disrupt care continuity

*Multi-sectoral Interventions:*
- Cash transfers to reduce catastrophic costs
- Nutritional supplementation
- Integration with social protection programs
- Addressing stigma and discrimination`,
      keyTerms: [
        { term: 'granuloma', definition: 'A mass of immune cells that forms around TB bacteria, attempting to wall off the infection' },
        { term: 'phenotypic drug tolerance', definition: 'Bacterial survival of drug exposure due to metabolic state rather than genetic resistance' },
        { term: 'syndemic', definition: 'Two or more epidemics interacting synergistically to produce an enhanced disease burden' },
        { term: 'catastrophic costs', definition: 'TB-related costs exceeding 20% of annual household income' },
      ],
      clinicalNotes: 'Advanced considerations: (1) Pharmacogenomics may affect drug metabolism (NAT2 for isoniazid), (2) Drug-drug interactions critical with rifamycins and antiretrovirals, (3) Therapeutic drug monitoring emerging for complex cases, (4) Paradoxical reactions common with TB-IRIS in HIV co-infection.',
    },
    5: {
      level: 5,
      summary: 'Tuberculosis elimination requires systems-level transformation addressing pathogen evolution, health system architecture, structural determinants, and global health governance, with contemporary science advancing toward precision medicine approaches and novel intervention paradigms.',
      explanation: `**Evolutionary Biology and Genomic Epidemiology:**

*M. tuberculosis Population Structure:*
- Seven major lineages with distinct geographic distributions
- Lineage-specific differences in virulence, transmissibility, drug resistance
- Ancient (L1, L5, L6, M. africanum) vs. modern (L2, L3, L4) lineages
- Beijing lineage (L2) associated with drug resistance, global spread

*Genomic Epidemiology Applications:*
- Transmission chain reconstruction using SNP-based clustering
- Distinguishing relapse from reinfection
- Detection of emerging resistance mutations
- Identification of super-spreaders and transmission hotspots

*Drug Resistance Evolution:*
- Compensatory mutations restoring fitness
- Epistatic interactions between resistance mutations
- Within-host evolution during treatment
- Transmission of resistance vs. de novo acquisition

**Systems Immunology and Host-Directed Therapies:**

*Immune Correlates Research:*
- Transcriptomic signatures predicting progression (Zak et al., Berry et al.)
- No validated correlate of protection for vaccines
- Mucosal immunity importance in protection
- Trained immunity and BCG's non-specific effects

*Host-Directed Therapeutic Approaches:*
- Autophagy inducers (metformin, statins under investigation)
- Eicosanoid pathway modulation
- Matrix metalloproteinase inhibitors
- Cytokine modulation (anti-TNF caution, IL-2)

**Health Systems Research and Implementation Science:**

*Cascade of Care Analysis:*
- Only ~70% of estimated TB cases are detected and notified
- Private sector engagement gap in high-burden countries
- Treatment success rate ~86% for drug-susceptible TB globally
- Major gaps in TPT and MDR-TB treatment coverage

*Implementation Challenges:*
- Quality of TB services in private sector
- Laboratory network capacity for molecular diagnostics
- Decentralization of MDR-TB care
- Integration with primary health care

*Innovative Delivery Models:*
- Digital adherence technologies (VDOT, smart pill boxes)
- Differentiated service delivery
- Community-based active case finding
- Private provider engagement (social franchising, subsidized diagnostics)

**Political Economy and Governance:**

*Financing Landscape:*
- $13 billion needed annually for TB response; ~$6 billion available
- Domestic funding increasing but insufficient in many high-burden countries
- Global Fund as major multilateral mechanism
- USAID remains largest bilateral funder

*Global Health Governance:*
- UN High-Level Meeting on TB (2018, 2023) - political commitments
- WHO End TB Strategy and targets
- Stop TB Partnership and civil society role
- Regional variation in political commitment

**Research Frontiers:**

*Precision Medicine Approaches:*
- Pharmacokinetics-pharmacodynamics optimization
- Drug-resistant TB treatment individualization
- Host biomarker-guided treatment duration
- Genotype-phenotype resistance correlation

*Novel Paradigms:*
- Ultra-short treatment regimens (goal: <2 months)
- Pan-TB regimens effective against drug-susceptible and resistant
- Therapeutic vaccines for adjunctive treatment
- Microbiome modulation

*Prevention Science:*
- Household contact management optimization
- Population-level preventive therapy
- Infection prevention in healthcare and congregate settings
- Structural interventions (housing, nutrition, poverty alleviation)

**Elimination Science:**

*Toward TB Elimination (<1 case per million):*
- Currently achieved in few high-income countries
- Requires 17-20% annual decline (current: ~2%)
- Model-based projections indicate need for new tools + implementation
- Importance of addressing latent TB reservoir

*Key Research Questions:*
1. Can we identify individuals with latent TB most likely to progress?
2. What is the role of subclinical/incipient TB in transmission?
3. Can post-exposure vaccines prevent infection or disease?
4. What social/structural interventions have greatest impact on transmission?`,
      keyTerms: [
        { term: 'genomic epidemiology', definition: 'Use of pathogen genome sequencing to study disease transmission patterns and evolution' },
        { term: 'host-directed therapy', definition: 'Treatments that modulate host immune response rather than directly targeting the pathogen' },
        { term: 'cascade of care', definition: 'Framework analyzing patient flow through stages of diagnosis, treatment, and outcomes' },
        { term: 'incipient TB', definition: 'Early stage of disease progression from latent to active TB, potentially detectable by biomarkers before symptoms' },
      ],
      clinicalNotes: 'For physicians engaged in TB research and policy: (1) Whole genome sequencing increasingly informs treatment and epidemiology, (2) Novel regimens require understanding of pharmacokinetic variability, (3) Implementation research methods needed to translate innovations, (4) Social medicine perspectives essential for addressing upstream determinants.',
    },
  },

  media: [
    {
      id: 'tb-global-burden-map',
      type: 'diagram',
      filename: 'tb-global-incidence-map.svg',
      title: 'Global TB Incidence by Country',
      description: 'World map showing TB incidence rates per 100,000 population',
    },
    {
      id: 'tb-pathogenesis',
      type: 'diagram',
      filename: 'tb-infection-progression.svg',
      title: 'TB Infection to Disease Progression',
      description: 'Diagram showing natural history from exposure to active disease',
    },
  ],

  citations: [
    {
      id: 'who-global-tb-report',
      type: 'website',
      title: 'Global Tuberculosis Report',
      source: 'World Health Organization',
      url: 'https://www.who.int/teams/global-tuberculosis-programme/tb-reports',
      license: 'CC BY-NC-SA 3.0 IGO',
    },
    {
      id: 'cdc-tb-resources',
      type: 'website',
      title: 'Tuberculosis (TB)',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/tb/',
      license: 'Public domain',
    },
  ],

  crossReferences: [
    { targetId: 'hiv-aids-global', targetType: 'topic', relationship: 'related', label: 'HIV/AIDS (TB co-infection)' },
    { targetId: 'global-health-challenges', targetType: 'topic', relationship: 'parent', label: 'Global Health Challenges' },
    { targetId: 'emerging-infectious-diseases', targetType: 'topic', relationship: 'sibling', label: 'Emerging Infectious Diseases' },
  ],

  tags: {
    systems: ['respiratory', 'infectious-disease'],
    topics: ['tuberculosis', 'global-health', 'infectious-diseases'],
    keywords: ['TB', 'mycobacterium', 'MDR-TB', 'latent TB', 'BCG vaccine'],
    clinicalRelevance: 'high',
  },

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
