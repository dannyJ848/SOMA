/**
 * STD Screening - Laboratory Interpretation Content
 *
 * Educational content for sexually transmitted disease/infection screening:
 * - STI panel components and test types
 * - Who should be tested and how often
 * - NAAT, serology, culture, and rapid tests
 * - Window periods and confirmatory testing
 * - Public health reporting and partner notification
 *
 * Spanish translation (nameEs) included per SOMA convention.
 */

import { EducationalContent } from '../types';

export const stdScreeningContent: EducationalContent = {
  id: 'topic-std-screening',
  type: 'topic',
  name: 'STD Screening',
  nameEs: 'Pruebas de Deteccion de ETS',
  alternateNames: [
    'STI Testing',
    'STI Panel',
    'Sexually Transmitted Infection Screening',
    'Venereal Disease Testing',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'STD screening uses blood and urine tests to check for infections you can get from sexual contact. Many STDs have no symptoms, so testing is the only way to know for sure.',
      explanation: `# STD Screening Tests

## Why Get Tested?

Many sexually transmitted diseases (STDs) -- also called sexually transmitted infections (STIs) -- have **no symptoms at all**. You can have an infection and feel perfectly fine. Without testing, you might unknowingly pass it to a partner, and untreated infections can cause serious health problems.

**Think of STD testing like checking the oil in your car.** You cannot tell by looking whether the oil is low -- you have to check. Similarly, you cannot tell if you have an STD just by how you feel.

## Common STDs and Their Tests

| STD | How It Is Tested | What the Test Checks |
|-----|-----------------|---------------------|
| Chlamydia | Urine or swab | Bacteria |
| Gonorrhea | Urine or swab | Bacteria |
| HIV | Blood test | Virus |
| Syphilis | Blood test | Bacteria |
| Herpes | Blood test or swab of sore | Virus |
| Hepatitis B | Blood test | Virus |
| Hepatitis C | Blood test | Virus |
| Trichomoniasis | Urine or swab | Parasite |

## Who Should Get Tested?

- **Everyone** ages 13-64 should get an HIV test at least once
- **Sexually active women** under 25: chlamydia and gonorrhea every year
- **Pregnant women**: HIV, syphilis, hepatitis B (and others based on risk)
- **Anyone** with a new partner or multiple partners
- **Men who have sex with men**: broader and more frequent testing

## What Happens After a Positive Test?

- Your doctor will explain your treatment options (many STDs are curable)
- You may need to tell your sexual partners so they can get tested
- Follow-up testing is often needed to make sure the infection is gone
- Your information is kept confidential`,
      keyTerms: [
        { term: 'STD/STI', definition: 'An infection passed from person to person through sexual contact' },
        { term: 'screening', definition: 'Testing for a disease in people who have no symptoms' },
        { term: 'window period', definition: 'The time between getting infected and when a test can detect it' },
        { term: 'asymptomatic', definition: 'Having an infection but showing no signs or symptoms' },
        { term: 'treatable vs curable', definition: 'Some STDs can be cured with antibiotics; others can be managed but not cured' },
      ],
      analogies: [
        'STD testing is like checking the oil in your car -- you cannot tell by looking, you have to check.',
        'The window period is like developing a photograph -- the infection is there, but it takes time before the test can see it.',
      ],
      patientCounselingPoints: [
        'Many STDs have no symptoms. The only way to know is to get tested.',
        'Getting tested is normal, responsible, and confidential.',
        'Most STDs are easily treatable. Some are curable with antibiotics.',
        'If you test positive, your sexual partners need to be told so they can get tested too.',
        'Using condoms consistently reduces your risk, but does not eliminate it completely.',
        'PrEP is available to help prevent HIV in people at higher risk.',
      ],
    },
    2: {
      level: 2,
      summary:
        'STI screening utilizes NAATs for chlamydia/gonorrhea, serology for HIV/syphilis/hepatitis, and point-of-care rapid tests. CDC guidelines specify screening frequency based on age, sex, pregnancy status, and risk factors.',
      explanation: `## STI Screening: Tests and Guidelines

### Test Types Used in STI Screening

| Test Type | How It Works | Used For |
|-----------|-------------|---------|
| NAAT (Nucleic Acid Amplification) | Detects pathogen DNA/RNA | Chlamydia, gonorrhea, trichomoniasis |
| Serology (antibody testing) | Detects immune response | HIV, syphilis, hepatitis B/C, herpes |
| Antigen testing | Detects pathogen proteins | HIV (p24), hepatitis B (HBsAg) |
| Culture | Grows organism | Gonorrhea (for resistance), herpes |
| Rapid/POC tests | Quick results | HIV, syphilis, hepatitis C |

### CDC Screening Recommendations (2021)

**All Sexually Active Individuals:**
| Population | Test | Frequency |
|-----------|------|-----------|
| All adults 13-64 | HIV | At least once |
| Women <25, sexually active | Chlamydia, Gonorrhea | Annually |
| Women >=25 with risk factors | Chlamydia, Gonorrhea | Annually |
| Pregnant women | HIV, Syphilis, Hep B, Chlamydia | First prenatal visit |
| MSM (sexually active) | HIV, Syphilis, GC/CT (urine + rectal/pharyngeal) | Every 3-12 months |
| MSM on PrEP | HIV, Syphilis, GC/CT, renal function | Every 3 months |
| Persons with HIV | Syphilis, GC/CT, Hep C | At least annually |

### Window Periods

| Infection | Window Period | Test Type |
|-----------|-------------|-----------|
| HIV (4th gen Ab/Ag) | 2-4 weeks | Blood |
| HIV (rapid antibody only) | 3-12 weeks | Blood/oral fluid |
| Chlamydia (NAAT) | 1-2 weeks | Urine/swab |
| Gonorrhea (NAAT) | 1-2 weeks | Urine/swab |
| Syphilis (RPR/VDRL) | 3-6 weeks | Blood |
| Hepatitis B (HBsAg) | 3-6 weeks | Blood |
| Hepatitis C (antibody) | 8-11 weeks | Blood |
| Herpes (IgG) | 2-12 weeks | Blood |
| Trichomoniasis (NAAT) | 1-4 weeks | Urine/swab |

### Understanding Results

**HIV Testing Algorithm:**
1. 4th generation (Ab/Ag combo) screen
2. If reactive: HIV-1/2 antibody differentiation
3. If indeterminate: HIV-1 RNA (NAT)

**Syphilis Testing:**
- Traditional: nontreponemal (RPR/VDRL) then confirm with treponemal (FTA-ABS, TP-PA)
- Reverse algorithm: treponemal screen first, then RPR for activity
- Nontreponemal titers track disease activity

**Chlamydia/Gonorrhea NAAT:**
- Urine sample or self-collected swab
- Pharyngeal and rectal testing important for MSM
- Test of cure: 4 weeks for chlamydia (if NAAT), 7-14 days for gonorrhea
- Retest 3 months after treatment (high reinfection rate)`,
      keyTerms: [
        { term: 'NAAT', definition: 'Nucleic Acid Amplification Test; highly sensitive DNA/RNA detection for chlamydia, gonorrhea, and others' },
        { term: 'window period', definition: 'Time from infection to when the test becomes reliably positive' },
        { term: 'RPR/VDRL', definition: 'Nontreponemal tests for syphilis that track disease activity' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; daily medication to prevent HIV in high-risk individuals' },
        { term: 'MSM', definition: 'Men who have sex with men; a population with specific screening recommendations' },
      ],
      patientCounselingPoints: [
        'If you were recently exposed, testing right away may be too early. Ask about window periods.',
        'A negative test does not mean you are immune -- you can get re-infected with future exposures.',
        'For chlamydia and gonorrhea, get retested 3 months after treatment to check for reinfection.',
        'Extragenital (throat, rectal) testing is important if you have oral or anal sexual contact.',
      ],
    },
    3: {
      level: 3,
      summary:
        'Advanced STI screening encompasses NAAT technology platforms, antimicrobial resistance surveillance, multi-site testing strategies, and integration of screening into primary care workflows with population-based risk stratification.',
      explanation: `## STI Screening: Laboratory and Clinical Science

### NAAT Technology Platforms

| Platform | Manufacturer | Targets | Features |
|----------|-------------|---------|---------|
| Aptima Combo 2 | Hologic | CT/GC (rRNA) | Gold standard, TMA technology |
| cobas CT/NG | Roche | CT/GC (DNA) | Real-time PCR |
| Xpert CT/NG | Cepheid | CT/GC (DNA) | Near-POC, 90-min TAT |
| BD MAX CT/GC/TV | BD | CT/GC/TV | Automated sample prep |
| Aptima Multitest | Hologic | CT/GC/TV/MG | 4-in-1 panel |

**NAAT Advantages:** Sensitivity 95-99%, specificity 99%+, non-invasive specimens
**NAAT Limitations:** Cannot determine antimicrobial susceptibility, may detect non-viable organisms

### Multi-Site Testing Strategy

Standard genital-only testing misses significant infections in MSM:
- **Pharyngeal GC:** 5-10% prevalence, mostly asymptomatic, rarely detected without specific testing
- **Rectal CT/GC:** 5-15% prevalence, majority asymptomatic
- Self-collected swabs have comparable sensitivity to clinician-collected

### Antimicrobial Resistance in Gonorrhea

**Current CDC Treatment (2020):**
- Ceftriaxone 500 mg IM (1g if >=150 kg) as monotherapy
- Test of cure: only if pharyngeal (culture), 7-14 days post-treatment

**Resistance Patterns (WHO Concern):**
| Antibiotic | Global Resistance | Status |
|-----------|-------------------|--------|
| Penicillin | High | Not recommended |
| Tetracycline | High | Not recommended |
| Ciprofloxacin | 30-80% regionally | Not first-line |
| Azithromycin | Rising (10-40%) | Removed from dual therapy |
| Ceftriaxone | Rare but reported | Current first-line |

**GISP (Gonococcal Isolate Surveillance Project):** CDC monitoring program tracking resistance

### Syphilis: Advanced Serologic Interpretation

**Stage-Specific Testing:**
| Stage | Duration | Nontreponemal | Treponemal | Darkfield |
|-------|----------|--------------|-----------|----------|
| Primary (chancre) | 3-6 wk | May be negative | May be negative | Positive |
| Secondary | 6 wk-6 mo | Positive (high titer) | Positive | Positive (if lesions) |
| Early latent | <1 year | Positive | Positive | Negative |
| Late latent | >1 year | Positive (lower titer) | Positive | Negative |
| Tertiary | Years | Variable | Positive | Negative |

**Prozone Phenomenon:** Very high antibody titer in secondary syphilis may cause false-negative RPR; request dilutions

**Serofast State:** Persistent low nontreponemal titer after adequate treatment (not treatment failure)

### HIV Diagnostic Algorithm (CDC/APHL 2014, Updated)

1. **Initial screen:** 4th gen Ag/Ab immunoassay (detects p24 + IgM/IgG)
2. **Supplemental:** HIV-1/HIV-2 antibody differentiation immunoassay
3. **If discordant:** HIV-1 NAT (RNA)

**Acute HIV (4th gen advantage):** Detects p24 antigen before antibodies, narrowing window to ~2 weeks

### Mycoplasma genitalium

- Increasingly recognized as STI pathogen
- Causes urethritis and cervicitis
- Resistance-guided therapy recommended (macrolide resistance ~50%)
- Test: NAAT (Aptima MG, Hologic; resistance testing by ResistancePlus)
- Treatment: if macrolide-sensitive, azithromycin extended regimen; if resistant, moxifloxacin

### Reporting Requirements

- Chlamydia, gonorrhea, syphilis, HIV: **nationally notifiable**
- Hepatitis B and C: nationally notifiable
- Herpes, trichomoniasis, HPV: not nationally notifiable (varies by state)
- Partner notification: Department of Health assists; EPT (expedited partner therapy) legal in most states`,
      keyTerms: [
        { term: 'TMA', definition: 'Transcription-Mediated Amplification; RNA-based NAAT technology used in Aptima assays' },
        { term: 'prozone phenomenon', definition: 'False-negative nontreponemal test from antibody excess in secondary syphilis' },
        { term: 'serofast state', definition: 'Persistent low RPR/VDRL titer after adequate syphilis treatment; not treatment failure' },
        { term: 'GISP', definition: 'Gonococcal Isolate Surveillance Project; CDC program monitoring gonorrhea resistance' },
        { term: 'expedited partner therapy', definition: 'Providing prescription for a patient to give to their sexual partner without examining the partner' },
        { term: 'Mycoplasma genitalium', definition: 'Emerging STI pathogen with high macrolide resistance requiring resistance-guided therapy' },
      ],
    },
    4: {
      level: 4,
      summary:
        'Graduate-level STI screening integrates molecular resistance testing, point-of-care multiplexed diagnostics, PrEP monitoring protocols, and implementation science strategies for reaching underscreened populations.',
      explanation: `## Graduate-Level STI Screening

### Molecular Resistance Testing

**Gonorrhea:**
- Molecular resistance markers: penA mosaic (cephalosporin), 23S rRNA (azithromycin), gyrA/parC (fluoroquinolone)
- ResistancePlus GC (SpeeDx): detects ciprofloxacin resistance by gyrA SNPs
- Allows fluoroquinolone use when susceptible, preserving ceftriaxone

**Mycoplasma genitalium:**
- ResistancePlus MG: simultaneous detection + macrolide resistance (23S rRNA mutations)
- Resistance-guided therapy reduces treatment failure from ~50% to ~5%

### Multiplexed STI Panels

**Commercial Panels:**
| Panel | Targets | Specimen | TAT |
|-------|---------|---------|-----|
| BioFire FilmArray STI | 7 targets (CT, GC, TV, MG, TP, HSV-1, HSV-2) | Genital swab | ~1 hour |
| Binx io CT/GC | CT, GC | Vaginal swab/urine | 30 minutes |
| Visby Medical | CT, GC, TV | Vaginal swab | 30 minutes |

**POC Impact:**
- Same-day diagnosis and treatment
- Reduced loss to follow-up
- Cost-effectiveness in high-prevalence settings

### PrEP Monitoring Protocol

| Test | Baseline | 1 Month | Every 3 Months | Every 6 Months | Every 12 Months |
|------|----------|---------|----------------|----------------|-----------------|
| HIV Ag/Ab | X | X | X | | |
| Creatinine/eGFR | X | X | | X | |
| Hepatitis B | X | | | | |
| Hepatitis C | X | | | | X (if risk) |
| Syphilis | X | | X (MSM) | | X |
| CT/GC (3-site if MSM) | X | | X | | |
| Pregnancy test | X | | X (if applicable) | | |

**Long-Acting Injectable PrEP (CAB-LA):**
- Cabotegravir IM every 2 months
- Non-inferior to daily oral TDF/FTC
- Monitoring still required (HIV testing before each injection)
- Resistance concern if HIV acquired while on CAB-LA

### Neurosyphilis Evaluation

**When to Perform LP:**
- Neurologic/ophthalmic/otic symptoms
- Treatment failure (4-fold titer rise or failure to decline)
- Late latent syphilis or syphilis of unknown duration
- HIV coinfection with late latent (some guidelines)

**CSF Interpretation:**
| CSF Finding | Neurosyphilis | Normal |
|------------|--------------|--------|
| WBC | >=5 cells/uL | <5 |
| Protein | Elevated | 15-45 mg/dL |
| VDRL | Reactive (highly specific) | Non-reactive |
| FTA-ABS | Reactive (highly sensitive) | Non-reactive |

### Implementation Science in STI Screening

**Barriers to Screening:**
- Stigma, access, cost, provider discomfort
- Racial/ethnic disparities in STI rates reflect structural inequity, not biological difference

**Innovative Approaches:**
- Self-collection kits mailed to home (I Want The Kit, TakeMeHome)
- Opt-out HIV screening in ED and primary care
- Integration of STI screening into routine blood work
- Community-based rapid testing events
- Telehealth STI consultation and treatment
- AI-based risk prediction for targeted outreach`,
      keyTerms: [
        { term: 'resistance-guided therapy', definition: 'Using molecular resistance testing to select antibiotics, reducing treatment failure' },
        { term: 'multiplexed STI panel', definition: 'Single-test platform detecting multiple STI pathogens simultaneously' },
        { term: 'cabotegravir long-acting', definition: 'Injectable PrEP given every 2 months; non-inferior to daily oral PrEP' },
        { term: 'neurosyphilis', definition: 'CNS invasion by Treponema pallidum; diagnosed by CSF analysis including CSF-VDRL' },
        { term: 'opt-out screening', definition: 'Testing performed unless patient specifically declines; increases screening uptake' },
        { term: 'expedited partner therapy', definition: 'Providing treatment for partners without requiring examination; reduces reinfection' },
      ],
      clinicalNotes: 'In practice, extragenital NAAT testing is essential for MSM populations and should be standard of care. The rise of antimicrobial-resistant gonorrhea and Mycoplasma genitalium demands familiarity with molecular resistance testing to guide therapy. Multiplexed POC panels are rapidly changing the landscape of STI diagnosis.',
    },
    5: {
      level: 5,
      summary:
        'Expert STI screening encompasses mpox and emerging pathogen surveillance, doxycycline post-exposure prophylaxis, metagenomics-based STI detection, vaccine development pipelines, and global AMR stewardship frameworks for gonorrhea.',
      explanation: `## Expert-Level STI Screening

### DoxyPEP (Doxycycline Post-Exposure Prophylaxis)

**DoxyPEP Trial (2022):**
- Doxycycline 200 mg within 72h of condomless sex
- MSM and transgender women on PrEP or with HIV
- Reduced: chlamydia by 88%, syphilis by 87%, gonorrhea by 55%
- CDC interim guidelines (2023): recommend for MSM/transgender women

**Controversies:**
- Impact on tetracycline resistance in gonorrhea and other organisms
- Microbiome disruption with chronic antibiotic exposure
- Not studied in cisgender women (different anatomy, different flora)
- AMR surveillance essential during implementation

### Mpox and Emerging STI Pathogens

**Mpox (Monkeypox) -- Clade IIb:**
- Primarily MSM transmission in 2022 outbreak
- Testing: lesion swab PCR (orthopoxvirus)
- Incorporated into STI clinic workflows
- Vaccination: JYNNEOS (MVA-BN) pre- and post-exposure

**Other Emerging Concerns:**
- Shigella (sexually transmitted in MSM, MDR strains)
- Lymphogranuloma venereum (LGV serovars L1-L3 of chlamydia)
- Hepatitis A (MSM outbreaks)
- Entamoeba histolytica (oral-anal contact)

### Metagenomics and STI Detection

**Shotgun Metagenomics:**
- Unbiased detection of all pathogens in a specimen
- Can identify novel or unexpected STI pathogens
- Simultaneously detects resistance genes
- Currently research-use; moving toward clinical application

**Targeted Metagenomics Panels:**
- Custom amplicon panels covering 20+ STI targets
- Resistance gene profiling integrated
- Vaginal microbiome assessment (Lactobacillus dominance vs BV-associated bacteria)

### Global AMR in Gonorrhea

**WHO Global GASP (Gonococcal Antimicrobial Surveillance Programme):**
- XDR gonorrhea: resistance to ceftriaxone + azithromycin reported (UK, Asia-Pacific)
- Zoliflodacin: novel spiropyrimidinetrione (phase III complete; targets DNA gyrase subunit B)
- Gepotidacin: novel triazaacenaphthylene (FDA approved 2023 for uncomplicated GU GC/CT)

**Treatment Pipeline:**
| Agent | Class | Target | Status |
|-------|-------|--------|--------|
| Zoliflodacin | Spiropyrimidinetrione | GyrB | NDA filed |
| Gepotidacin | Triazaacenaphthylene | GyrA/ParC (novel binding) | FDA approved |
| Solithromycin | Fluoroketolide | Ribosome | Abandoned (hepatotoxicity) |
| SMT-571 | Novel | Outer membrane | Preclinical |

### STI Vaccine Pipeline

| Pathogen | Vaccine | Status | Notes |
|----------|---------|--------|-------|
| HIV | Multiple approaches | Phase III (mosaico failed; bnAb trials ongoing) | mRNA platforms under investigation |
| HSV-2 | Multiple candidates | Phase I-II | Therapeutic and prophylactic approaches |
| Chlamydia | CTH522 (Statens) | Phase I | Adjuvanted recombinant MOMP |
| Gonorrhea | MeNZB (observational) | Epidemiologic data | 31% cross-protection from meningococcal B vaccine |
| Syphilis | None advanced | Preclinical | Tp0751 and other antigens |
| HPV | Gardasil 9 (available) | Approved | 9-valent; highly effective |

### Rapid Molecular Diagnostics in Resource-Limited Settings

**WHO Recommendations:**
- Dual HIV/syphilis rapid tests at antenatal care
- GeneXpert CT/GC for targeted use
- Syndromic management still standard where diagnostics unavailable
- ASSURED criteria: Affordable, Sensitive, Specific, User-friendly, Rapid, Equipment-free, Deliverable

### AI and Digital Health in STI Prevention

- Risk prediction algorithms for targeted screening
- Chatbot-based partner notification (e.g., TellYourPartner.org)
- Geospatial analysis of STI clusters for public health response
- Digital contact tracing (privacy-preserving approaches)
- Machine learning for antimicrobial resistance prediction from WGS data`,
      keyTerms: [
        { term: 'DoxyPEP', definition: 'Doxycycline post-exposure prophylaxis reducing bacterial STI incidence by 55-88% in MSM' },
        { term: 'zoliflodacin', definition: 'Novel antibiotic targeting DNA gyrase B subunit for resistant gonorrhea; NDA filed' },
        { term: 'gepotidacin', definition: 'First-in-class topoisomerase II inhibitor approved for uncomplicated urogenital gonorrhea/chlamydia' },
        { term: 'metagenomics', definition: 'Unbiased sequencing detecting all pathogens and resistance genes in a clinical specimen' },
        { term: 'XDR gonorrhea', definition: 'Extensively drug-resistant Neisseria gonorrhoeae resistant to ceftriaxone and azithromycin' },
        { term: 'ASSURED criteria', definition: 'WHO framework for diagnostics in resource-limited settings: Affordable, Sensitive, Specific, User-friendly, Rapid, Equipment-free, Deliverable' },
      ],
      clinicalNotes: 'The STI landscape is rapidly evolving with DoxyPEP implementation, emerging antimicrobial resistance in gonorrhea requiring novel agents, and the convergence of mpox with traditional STI screening workflows. Expert practice demands integration of molecular diagnostics, resistance surveillance, implementation science, and awareness of the vaccine development pipeline.',
    },
  },

  media: [],
  citations: [
    {
      id: 'medlineplus-std',
      type: 'website',
      title: 'Sexually Transmitted Diseases',
      source: 'MedlinePlus, U.S. National Library of Medicine',
      url: 'https://medlineplus.gov/sexuallytransmitteddiseases.html',
      accessedDate: '2025-01-15',
    },
    {
      id: 'aacc-std-testing',
      type: 'website',
      title: 'STD Testing - Lab Tests Online',
      source: 'American Association for Clinical Chemistry (AACC)',
      url: 'https://labtestsonline.org/conditions/sexually-transmitted-diseases',
      accessedDate: '2025-01-15',
    },
    {
      id: 'cdc-std-guidelines-2021',
      type: 'guideline',
      title: 'Sexually Transmitted Infections Treatment Guidelines, 2021',
      source: 'Centers for Disease Control and Prevention',
      authors: ['Workowski KA', 'Bachmann LH', 'Chan PA'],
    },
  ],
  crossReferences: [
    { targetId: 'topic-pregnancy-tests', targetType: 'topic', relationship: 'related', label: 'Pregnancy Tests' },
    { targetId: 'topic-pap-smear', targetType: 'topic', relationship: 'related', label: 'Pap Smear / Cervical Screening' },
  ],
  tags: {
    systems: ['reproductive', 'immune'],
    topics: ['STI', 'screening', 'lab-interpretation', 'infectious-disease', 'public-health'],
    clinicalRelevance: 'critical',
    examRelevance: { usmle: true, nbme: true, shelf: ['medicine', 'obstetrics'] },
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  version: 1,
  status: 'published',
};
