import { EducationalContent } from '../../types';

/**
 * STI Prevention Overview
 *
 * Comprehensive educational content covering common STIs, transmission routes,
 * prevention methods, screening recommendations, and treatment overview.
 * All 5 complexity levels from age-appropriate basics to clinical detail.
 */
export const stiPreventionOverview: EducationalContent = {
  id: 'sti-prevention-overview',
  type: 'topic',
  name: 'STI Prevention Overview',
  alternateNames: [
    'Sexually Transmitted Infection Prevention',
    'STD Prevention',
    'Sexual Health Protection',
  ],

  levels: {
    // =========================================================================
    // Level 1 — 8th Grade (age-appropriate, no explicit detail)
    // =========================================================================
    1: {
      level: 1,
      summary:
        'Infections can be passed between people through close physical contact, and there are ways to prevent them.',
      explanation:
        'Some germs can spread from one person to another through very close physical contact. ' +
        'These are called sexually transmitted infections (STIs). Just like you can catch a cold from ' +
        'someone, certain infections spread through intimate contact between people. The good news is ' +
        'there are many ways to stay healthy and prevent these infections.\n\n' +
        '**How people stay safe:**\n' +
        '- Vaccines can protect against some of these infections, similar to a flu shot.\n' +
        '- Barrier protection (like condoms) helps block germs from spreading.\n' +
        '- Regular doctor check-ups can catch infections early, even when someone feels fine.\n' +
        '- Honest communication with trusted adults and healthcare providers is important.\n\n' +
        '**Key facts:**\n' +
        '- Many of these infections have no visible signs, so check-ups matter.\n' +
        '- Most infections are treatable, and some are completely curable.\n' +
        '- Getting tested is a normal, responsible part of taking care of your health.\n' +
        '- No one should feel embarrassed about asking a doctor questions about their body.',
      keyTerms: [
        { term: 'STI', definition: 'An infection that can spread through close physical contact between people' },
        { term: 'vaccine', definition: 'A shot that teaches your body to fight off a specific germ' },
        { term: 'barrier protection', definition: 'Something that blocks germs from passing between people' },
        { term: 'screening', definition: 'A medical test to check for an infection even if you feel healthy' },
      ],
      analogies: [
        'Getting screened for an STI is like getting your eyes checked — you do it regularly even if you think your vision is fine.',
        'A vaccine is like a practice drill for your immune system so it knows what to do if it meets the real germ.',
      ],
      patientCounselingPoints: [
        'It is completely normal to talk to a doctor or trusted adult about these topics.',
        'Vaccines like the HPV vaccine are recommended for preteens and teens to protect future health.',
        'Feeling healthy does not always mean you are infection-free — check-ups matter.',
        'There is no shame in learning how to protect your body.',
      ],
    },

    // =========================================================================
    // Level 2 — High School
    // =========================================================================
    2: {
      level: 2,
      summary:
        'STIs are infections spread through sexual contact; prevention includes condoms, vaccines, testing, and communication with partners.',
      explanation:
        'Sexually transmitted infections (STIs) are caused by bacteria, viruses, or parasites ' +
        'that pass from person to person during sexual activity, including vaginal, anal, and oral sex. ' +
        'Some can also spread through skin-to-skin contact in the genital area.\n\n' +
        '**Common STIs include:**\n' +
        '- **Chlamydia and Gonorrhea** — bacterial infections that are very common in teens and young adults. ' +
        'Often have no symptoms but are curable with antibiotics.\n' +
        '- **Syphilis** — a bacterial infection that progresses through stages if untreated. Curable with antibiotics.\n' +
        '- **HIV** — a virus that attacks the immune system. Not curable, but highly manageable with medication.\n' +
        '- **HPV (Human Papillomavirus)** — the most common STI. Most infections clear on their own, ' +
        'but some strains cause genital warts or cancer. Preventable with vaccination.\n' +
        '- **Herpes (HSV)** — a virus causing sores on or around the genitals or mouth. ' +
        'Not curable, but outbreaks can be managed with medication.\n\n' +
        '**Prevention methods:**\n' +
        '- **Condoms** — reduce risk of most STIs when used correctly every time.\n' +
        '- **HPV vaccine** — recommended for everyone ages 9-26.\n' +
        '- **PrEP** — a daily pill that prevents HIV infection in people at higher risk.\n' +
        '- **Regular screening** — recommended at least annually for sexually active people under 25.\n' +
        '- **Open communication** — talking with partners about testing and sexual health.\n\n' +
        '**Screening recommendations:**\n' +
        '- Chlamydia and gonorrhea: annually for sexually active women under 25 and others at risk.\n' +
        '- HIV: at least once for everyone ages 13-64; more often for those at higher risk.\n' +
        '- Syphilis, hepatitis B/C: based on risk factors.',
      keyTerms: [
        { term: 'STI', definition: 'Sexually transmitted infection — an infection passed through sexual contact' },
        { term: 'condom', definition: 'Barrier worn during sex that reduces STI and pregnancy risk' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis — daily pill to prevent HIV' },
        { term: 'HPV vaccine', definition: 'Vaccine protecting against human papillomavirus strains that cause cancer and warts' },
        { term: 'asymptomatic', definition: 'Having an infection without showing any symptoms' },
        { term: 'screening', definition: 'Routine testing for infections in people who may not have symptoms' },
      ],
      analogies: [
        'Using a condom is like wearing a seatbelt — it does not guarantee you will never get hurt, but it dramatically reduces the risk.',
        'PrEP works like sunscreen for HIV — you apply it before exposure to prevent damage.',
      ],
      examples: [
        'A 19-year-old college student gets a routine chlamydia test at a campus health center even though they feel fine — the test comes back positive, and they are treated with a simple course of antibiotics.',
        'A 16-year-old completes the HPV vaccine series, protecting them from the strains most likely to cause cancer later in life.',
      ],
      patientCounselingPoints: [
        'Most STIs are very common and nothing to be ashamed of.',
        'Many STIs have no symptoms, so the only way to know your status is to get tested.',
        'Condoms significantly reduce but do not eliminate all STI risk — some infections spread through skin contact.',
        'The HPV vaccine is most effective when given before sexual activity begins.',
        'PrEP is highly effective at preventing HIV when taken as prescribed.',
      ],
    },

    // =========================================================================
    // Level 3 — College
    // =========================================================================
    3: {
      level: 3,
      summary:
        'STI prevention encompasses barrier methods, chemoprophylaxis, vaccination, and risk-stratified screening guided by CDC recommendations.',
      explanation:
        '**Transmission routes:**\n' +
        'STIs transmit through mucosal contact (vaginal, anal, oral sex), blood exposure, ' +
        'vertical transmission (mother to child), and skin-to-skin contact. Transmission efficiency ' +
        'varies by pathogen — HIV transmits more readily via anal intercourse than vaginal, ' +
        'while HSV and HPV spread through direct skin contact with infected areas.\n\n' +
        '**Common STIs by pathogen type:**\n\n' +
        '*Bacterial:*\n' +
        '- **Chlamydia** (C. trachomatis) — most reported bacterial STI in the US (~1.8M cases/year). ' +
        'Up to 70% asymptomatic in women. Causes cervicitis, urethritis, PID. Cured with doxycycline.\n' +
        '- **Gonorrhea** (N. gonorrhoeae) — rising antibiotic resistance is a major concern. ' +
        'Treated with ceftriaxone 500 mg IM. Co-infection with chlamydia is common.\n' +
        '- **Syphilis** (T. pallidum) — stages: primary (chancre), secondary (rash, condylomata lata), ' +
        'latent, tertiary (gummas, cardiovascular, neurosyphilis). Penicillin G remains first-line.\n\n' +
        '*Viral:*\n' +
        '- **HIV** — retrovirus attacking CD4+ T cells. Acute retroviral syndrome followed by clinical latency. ' +
        'Without ART, progresses to AIDS. Modern ART achieves viral suppression and near-normal life expectancy. ' +
        'Undetectable = Untransmittable (U=U).\n' +
        '- **HPV** — over 200 types. High-risk types (16, 18) cause cervical, anal, oropharyngeal cancers. ' +
        'Low-risk types (6, 11) cause genital warts. 9-valent vaccine covers 9 types.\n' +
        '- **HSV** — HSV-1 (predominantly oral) and HSV-2 (predominantly genital), though either can affect ' +
        'both sites. Lifelong latency in sensory ganglia with periodic reactivation. Managed with valacyclovir.\n\n' +
        '**Prevention strategies:**\n' +
        '- **Barrier methods:** Male and female condoms, dental dams. Male condoms reduce HIV risk ~80-85% ' +
        'with consistent use; also effective against gonorrhea, chlamydia, and trichomoniasis. ' +
        'Less protective against HPV and HSV (skin-to-skin transmission).\n' +
        '- **PrEP:** Emtricitabine/tenofovir (Truvada or Descovy) reduces HIV acquisition risk by >99% ' +
        'when taken daily. Injectable cabotegravir (Apretude) given every 2 months is an alternative.\n' +
        '- **Doxy-PEP:** Doxycycline 200 mg within 72 hours of condomless sex reduces bacterial STI ' +
        'incidence by ~60-90% in MSM and transgender women.\n' +
        '- **Vaccination:** HPV vaccine (Gardasil 9) recommended ages 9-26, catch-up through age 45. ' +
        'Hepatitis A and B vaccines for at-risk populations.\n\n' +
        '**Screening guidelines (CDC/USPSTF):**\n' +
        '- Chlamydia/gonorrhea: annually for sexually active women <25 and at-risk populations.\n' +
        '- HIV: at least once for all 13-64 year olds; annually or more for high-risk groups.\n' +
        '- Syphilis: MSM at least annually; pregnant women at first prenatal visit.\n' +
        '- Hepatitis C: once for all adults 18-79; more frequently for PWID.',
      keyTerms: [
        { term: 'NAAT', definition: 'Nucleic acid amplification test — gold standard for chlamydia/gonorrhea diagnosis', pronunciation: 'N-A-A-T' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis — antiretroviral medication taken before HIV exposure to prevent acquisition' },
        { term: 'Doxy-PEP', definition: 'Post-exposure prophylaxis using doxycycline to prevent bacterial STIs after condomless sex' },
        { term: 'ART', definition: 'Antiretroviral therapy — combination medication regimen for HIV treatment' },
        { term: 'U=U', definition: 'Undetectable = Untransmittable — people with suppressed HIV viral load cannot transmit sexually' },
        { term: 'PID', definition: 'Pelvic inflammatory disease — ascending infection of the upper genital tract, often from chlamydia or gonorrhea' },
        { term: 'seroconversion', definition: 'Development of detectable antibodies in blood following infection or vaccination' },
        { term: 'window period', definition: 'Time between infection and when a test can reliably detect it' },
      ],
      examples: [
        'A 22-year-old MSM on daily PrEP presents for quarterly follow-up including HIV test, renal function, and STI screening at three sites (pharyngeal, rectal, urogenital).',
        'A 24-year-old woman with new vaginal discharge is tested with NAAT for chlamydia and gonorrhea — results show co-infection. She is treated with ceftriaxone IM plus doxycycline.',
      ],
      clinicalNotes:
        'Antibiotic resistance in N. gonorrhoeae is an escalating public health threat — ceftriaxone remains effective but resistance surveillance is critical. ' +
        'Doxy-PEP is recommended for MSM and transgender women but evidence in cisgender women is limited. ' +
        'Expedited partner therapy (EPT) is legal in most US states and improves partner treatment rates.',
    },

    // =========================================================================
    // Level 4 — Graduate
    // =========================================================================
    4: {
      level: 4,
      summary:
        'Advanced STI prevention integrates molecular epidemiology, pharmacokinetics of chemoprophylaxis, vaccine immunology, and public health strategy.',
      explanation:
        '**Pathogen biology and transmission dynamics:**\n\n' +
        'Transmission probability per sex act varies markedly: receptive anal intercourse carries the highest ' +
        'per-act HIV risk (~1.4%), followed by insertive anal (~0.11%) and receptive vaginal (~0.08%). ' +
        'Concurrent STIs, especially those causing genital ulceration (syphilis, HSV, chancroid), increase ' +
        'HIV transmission risk 2-5 fold by disrupting mucosal barriers and recruiting CD4+ target cells.\n\n' +
        '*Chlamydia trachomatis:* Obligate intracellular organism with biphasic developmental cycle — ' +
        'elementary bodies (EB, infectious) attach to epithelial cells via MOMP and are endocytosed. ' +
        'Within inclusions, EBs differentiate into reticulate bodies (RB, replicative). ' +
        'Persistent infection can result from interferon-gamma-induced tryptophan depletion, leading to ' +
        'aberrant bodies that reactivate when conditions normalize.\n\n' +
        '*Neisseria gonorrhoeae:* Pili-mediated attachment and Opa protein interactions with CEACAM receptors ' +
        'facilitate mucosal invasion. Phase and antigenic variation of surface proteins enable immune evasion. ' +
        'Antibiotic resistance mechanisms include penA mosaic alleles (cephalosporin resistance), ' +
        'mtrCDE efflux pump overexpression, and plasmid-mediated beta-lactamases.\n\n' +
        '*Treponema pallidum:* Lacks LPS and has sparse outer membrane proteins, limiting immune recognition. ' +
        'Disseminates hematogenously within hours of mucosal entry. Serodiagnosis uses non-treponemal (RPR, VDRL) ' +
        'and treponemal (FTA-ABS, TP-PA) tests; reverse screening algorithm now widely used.\n\n' +
        '*HIV virology:* HIV-1 group M is responsible for the global pandemic. Viral tropism (CCR5 vs CXCR4) ' +
        'influences disease progression and therapeutic options. The latent reservoir in resting CD4+ T cells is ' +
        'established within 72 hours of infection, making early ART critical but cure elusive.\n\n' +
        '**Chemoprophylaxis pharmacology:**\n' +
        '- **Oral PrEP (TDF/FTC):** Tenofovir concentrates in rectal tissue faster than vaginal tissue — ' +
        'steady-state protection achieved in ~7 days rectally vs ~20 days vaginally. Renal monitoring (CrCl) ' +
        'recommended quarterly. TAF/FTC (Descovy) has less bone and renal toxicity but is not studied for ' +
        'receptive vaginal sex.\n' +
        '- **Injectable PrEP (cabotegravir LA):** Intramuscular injection every 2 months. Superior efficacy ' +
        'to oral PrEP in clinical trials (HPTN 083, 084) partly due to adherence advantages. ' +
        'Pharmacokinetic tail after discontinuation requires transition to oral PrEP.\n' +
        '- **Doxy-PEP:** Doxycycline 200 mg within 72h post-exposure. DoxyPEP trial showed 66% reduction ' +
        'in any bacterial STI among MSM/TGW. Concerns include antimicrobial resistance selection pressure, ' +
        'particularly in N. gonorrhoeae and commensal organisms.\n\n' +
        '**Vaccine immunology:**\n' +
        '- **HPV vaccine (Gardasil 9):** VLP-based vaccine targeting L1 capsid protein of 9 HPV types ' +
        '(6, 11, 16, 18, 31, 33, 45, 52, 58). Generates robust neutralizing antibody responses exceeding ' +
        'natural infection by 10-100 fold. Two-dose schedule for ages 9-14; three-dose for 15+. ' +
        'Real-world data show >85% reduction in vaccine-type HPV infections and pre-cancers.\n' +
        '- **Meningococcal B vaccine (MenB):** Cross-reactive outer membrane vesicle components show ~30% ' +
        'efficacy against N. gonorrhoeae in observational studies — first potential gonorrhea vaccine lead.\n\n' +
        '**Screening nuances:**\n' +
        '- Three-site testing (pharyngeal, rectal, urogenital) in MSM detects 10-15% more infections than ' +
        'urogenital-only testing.\n' +
        '- Fourth-generation HIV Ag/Ab combo assays detect infection as early as 18 days (window period); ' +
        'HIV RNA PCR detects at ~10 days. Point-of-care rapid tests have longer window periods (~25-30 days).\n' +
        '- RPR/VDRL titers correlate with disease activity and treatment response. Four-fold titer decline ' +
        'by 6-12 months indicates adequate treatment response.',
      keyTerms: [
        { term: 'elementary body', definition: 'Infectious extracellular form of C. trachomatis' },
        { term: 'reticulate body', definition: 'Replicative intracellular form of C. trachomatis' },
        { term: 'VLP', definition: 'Virus-like particle — non-infectious viral capsid used in vaccines', pronunciation: 'V-L-P' },
        { term: 'latent reservoir', definition: 'Long-lived HIV-infected resting CD4+ cells harboring integrated proviral DNA' },
        { term: 'penA mosaic', definition: 'Genetic recombination pattern in N. gonorrhoeae conferring cephalosporin resistance' },
        { term: 'reverse screening algorithm', definition: 'Syphilis testing starting with treponemal test followed by non-treponemal confirmation' },
        { term: 'pharmacokinetic tail', definition: 'Subtherapeutic drug levels persisting after discontinuation of long-acting formulation' },
        { term: 'CEACAM', definition: 'Carcinoembryonic antigen-related cell adhesion molecule — receptor exploited by N. gonorrhoeae' },
      ],
      examples: [
        'A patient transitioning from injectable cabotegravir PrEP to no PrEP requires oral TDF/FTC bridging for several weeks to cover the pharmacokinetic tail and prevent HIV acquisition during subtherapeutic cabotegravir levels.',
        'A reverse-algorithm syphilis screen returns treponemal-positive but RPR-nonreactive — this discordant result may represent treated past syphilis, very early infection, or late latent syphilis, requiring clinical correlation and possibly repeat testing.',
      ],
      clinicalNotes:
        'The rising incidence of congenital syphilis underscores failures in prenatal screening implementation. ' +
        'Cephalosporin-resistant N. gonorrhoeae (detected in Asia-Pacific) represents a potential public health crisis. ' +
        'Broadly neutralizing antibodies and therapeutic vaccines remain active areas of HIV cure research. ' +
        'Microbiome disruption from doxy-PEP and its impact on antimicrobial resistance ecology require ongoing surveillance.',
    },

    // =========================================================================
    // Level 5 — MD/Professional
    // =========================================================================
    5: {
      level: 5,
      summary:
        'Expert-level STI prevention encompasses molecular resistance mechanisms, implementation science, health equity considerations, and translational research frontiers.',
      explanation:
        '**Antimicrobial resistance and stewardship:**\n\n' +
        'N. gonorrhoeae antimicrobial resistance is driven by horizontal gene transfer and sequential acquisition ' +
        'of chromosomal mutations. Key mechanisms include: (1) penA mosaic alleles (MICs to ceftriaxone >0.25 mg/L), ' +
        '(2) 23S rRNA mutations A2059G (azithromycin high-level resistance), (3) mtrR promoter deletions increasing ' +
        'MtrCDE efflux. The 2018 UK "super-gonorrhea" case (ceftriaxone MIC 0.5 mg/L + azithromycin-resistant) ' +
        'highlighted urgency. Novel agents in pipeline: zoliflodacin (spiropyrimidinetrione, novel MOA targeting GyrB), ' +
        'gepotidacin (triazaacenaphthylene targeting GyrA), and solithromycin (fluoroketolide).\n\n' +
        'Doxy-PEP antimicrobial stewardship concerns extend beyond STI pathogens. Tetracycline resistance determinants ' +
        '(tetM, tetO) are carried on conjugative transposons shared across Gram-positive organisms. Population-level ' +
        'macrolide resistance in respiratory pathogens post-azithromycin mass drug administration (MDA) in trachoma ' +
        'programs provides a cautionary model.\n\n' +
        '**PrEP implementation science:**\n\n' +
        'Despite >99% biological efficacy, PrEP effectiveness is limited by the care cascade: awareness -> willingness -> ' +
        'access -> uptake -> adherence -> retention. In the US, only ~25% of the 1.2 million individuals with PrEP ' +
        'indications are prescribed it. Racial disparities are stark: Black Americans account for ~42% of new HIV diagnoses ' +
        'but only ~14% of PrEP users. Implementation strategies include: status-neutral HIV care frameworks, ' +
        'pharmacy-based PrEP prescribing, telehealth models, same-day PrEP starts, and integration with STI clinics.\n\n' +
        'Long-acting cabotegravir (CAB-LA) addresses adherence barriers but introduces new implementation challenges: ' +
        'cold-chain storage, injection-site reactions (up to 80% at initial injections), and the pharmacokinetic tail ' +
        'concern — subtherapeutic CAB concentrations persist for up to 12 months post-discontinuation, creating a window ' +
        'of INSTI-resistant HIV acquisition risk. The lenacapavir PrEP trial (PURPOSE 1) demonstrated twice-yearly ' +
        'subcutaneous injection efficacy, potentially revolutionizing prevention.\n\n' +
        '**HPV vaccine impact and remaining gaps:**\n\n' +
        'Population-level data from Australia, Scotland, and Scandinavian countries demonstrate near-elimination of ' +
        'vaccine-type HPV infections and cervical high-grade lesions in vaccinated cohorts. Gender-neutral vaccination ' +
        'programs show herd immunity effects. However, vaccine-type replacement, non-vaccine type oncogenic HPV persistence, ' +
        'and global vaccination coverage gaps (particularly LMICs) remain concerns. Therapeutic HPV vaccines targeting ' +
        'E6/E7 oncoproteins are in clinical trials for established HPV-related cancers.\n\n' +
        '**HIV cure research implications for prevention:**\n\n' +
        'Broadly neutralizing antibodies (bnAbs) targeting the CD4-binding site (VRC01), V1V2 apex (PGT121), ' +
        'and MPER (10E8) of HIV-1 Env are in clinical trials as passive immunoprophylaxis. ' +
        'The AMP (Antibody Mediated Prevention) trials showed VRC01 prevented acquisition of sensitive strains, ' +
        'supporting combination bnAb approaches. mRNA HIV vaccine platforms (building on COVID-19 technology) ' +
        'aim to elicit bnAbs through sequential immunogen strategies targeting germline-reverted B cell precursors.\n\n' +
        '**Emerging diagnostic approaches:**\n' +
        '- Point-of-care NAAT platforms (Cepheid GeneXpert, Binx io) enable same-visit diagnosis and treatment.\n' +
        '- Multiplexed syndromic panels detect 7+ pathogens simultaneously but raise antibiotic stewardship concerns.\n' +
        '- Metagenomic sequencing of genital microbiome identifies bacterial vaginosis-associated organisms ' +
        'that increase STI/HIV susceptibility.\n' +
        '- Resistance-guided therapy using molecular detection of penA alleles and azithromycin resistance markers ' +
        'may guide gonococcal treatment.',
      keyTerms: [
        { term: 'zoliflodacin', definition: 'Novel spiropyrimidinetrione antibiotic targeting DNA gyrase subunit B for resistant gonorrhea' },
        { term: 'bnAbs', definition: 'Broadly neutralizing antibodies — antibodies targeting conserved HIV-1 epitopes across diverse strains', pronunciation: 'bee-nabs' },
        { term: 'lenacapavir', definition: 'First-in-class capsid inhibitor administered as twice-yearly subcutaneous injection for HIV prevention/treatment' },
        { term: 'pharmacokinetic tail', definition: 'Period of subtherapeutic drug exposure after long-acting formulation discontinuation, risking drug-resistant pathogen selection' },
        { term: 'status-neutral framework', definition: 'HIV care model treating all patients the same regardless of HIV status — linking HIV-positive to ART and HIV-negative to PrEP' },
        { term: 'tetM', definition: 'Ribosomal protection protein conferring tetracycline resistance, carried on conjugative transposons across species' },
        { term: 'VRC01', definition: 'Broadly neutralizing antibody targeting HIV-1 CD4 binding site, studied in AMP prevention trials' },
        { term: 'sequential immunogen strategy', definition: 'Vaccination approach using series of engineered antigens to guide B cell maturation toward bnAb production' },
      ],
      examples: [
        'A sexual health clinic implements same-day PrEP start protocol with point-of-care HIV/creatinine testing, reducing time from first visit to PrEP initiation from 21 days to 0 days, with 40% improvement in 3-month retention.',
        'Genomic surveillance of N. gonorrhoeae isolates from a metropolitan area reveals emergence of a penA-60 mosaic allele cluster with ceftriaxone MICs at 0.25 mg/L, prompting enhanced clinical follow-up and test-of-cure protocols.',
      ],
      clinicalNotes:
        'Congenital syphilis rates have increased >700% since 2012, reflecting failures in social determinants and prenatal care access. ' +
        'Mpox (2022 outbreak) highlighted gaps in STI clinic surge capacity and vaccination equity. ' +
        'Doxy-PEP implementation requires balancing individual benefit against population-level AMR selection — ' +
        'a shared decision-making framework is recommended. ' +
        'The intersection of housing instability, substance use, and criminalization of sex work ' +
        'represents structural barriers to STI prevention requiring policy-level intervention. ' +
        'Integration of STI and HIV services with reproductive health, harm reduction, and mental health ' +
        'care is the emerging standard for comprehensive sexual health delivery.',
    },
  },

  // ===========================================================================
  // Shared Resources
  // ===========================================================================
  media: [
    {
      id: 'sti-transmission-routes-diagram',
      type: 'diagram',
      filename: 'sti-transmission-routes.svg',
      title: 'STI Transmission Routes',
      description: 'Diagram showing common transmission routes for bacterial, viral, and parasitic STIs',
    },
    {
      id: 'sti-prevention-methods-infographic',
      type: 'diagram',
      filename: 'sti-prevention-methods.svg',
      title: 'STI Prevention Methods Overview',
      description: 'Infographic comparing barrier methods, chemoprophylaxis, and vaccination for STI prevention',
    },
    {
      id: 'screening-recommendations-table',
      type: 'diagram',
      filename: 'sti-screening-guidelines.svg',
      title: 'STI Screening Recommendations by Population',
      description: 'Table summarizing CDC/USPSTF screening recommendations by age, sex, and risk factors',
    },
  ],

  citations: [
    {
      id: 'cdc-sti-guidelines-2021',
      type: 'article',
      title: 'Sexually Transmitted Infections Treatment Guidelines, 2021',
      authors: ['Workowski KA', 'Bachmann LH', 'Chan PA', 'et al.'],
      source: 'MMWR Recomm Rep 2021;70(4):1-187',
      url: 'https://www.cdc.gov/std/treatment-guidelines/default.htm',
      license: 'Public Domain',
    },
    {
      id: 'uspstf-chlamydia-gonorrhea-2021',
      type: 'article',
      title: 'Screening for Chlamydia and Gonorrhea: US Preventive Services Task Force Recommendation Statement',
      authors: ['US Preventive Services Task Force'],
      source: 'JAMA. 2021;326(10):949-956',
      url: 'https://jamanetwork.com/journals/jama/fullarticle/2784249',
    },
    {
      id: 'cdc-prep-guidelines-2021',
      type: 'website',
      title: 'Preexposure Prophylaxis for the Prevention of HIV Infection in the United States — 2021 Update',
      authors: ['CDC'],
      source: 'CDC Clinical Practice Guideline',
      url: 'https://www.cdc.gov/hiv/clinicians/prevention/prep.html',
      license: 'Public Domain',
    },
    {
      id: 'hptn083-cabotegravir',
      type: 'article',
      title: 'Cabotegravir for HIV Prevention in Cisgender Men and Transgender Women',
      authors: ['Landovitz RJ', 'Donnell D', 'Clement ME', 'et al.'],
      source: 'N Engl J Med. 2021;385(7):595-608',
    },
    {
      id: 'doxypep-trial',
      type: 'article',
      title: 'Doxycycline as Post-Exposure Prophylaxis for STIs',
      authors: ['Luetkemeyer AF', 'Donnell D', 'Dombrowski JC', 'et al.'],
      source: 'N Engl J Med. 2023;388(14):1296-1306',
    },
  ],

  crossReferences: [
    { targetId: 'chlamydia', targetType: 'condition', relationship: 'related', label: 'Chlamydia' },
    { targetId: 'gonorrhea', targetType: 'condition', relationship: 'related', label: 'Gonorrhea' },
    { targetId: 'syphilis', targetType: 'condition', relationship: 'related', label: 'Syphilis' },
    { targetId: 'hiv', targetType: 'condition', relationship: 'related', label: 'HIV/AIDS' },
    { targetId: 'hpv', targetType: 'condition', relationship: 'related', label: 'Human Papillomavirus' },
    { targetId: 'herpes', targetType: 'condition', relationship: 'related', label: 'Herpes Simplex Virus' },
    { targetId: 'condom-use', targetType: 'topic', relationship: 'child', label: 'Condom Use' },
    { targetId: 'prep-hiv-prevention', targetType: 'topic', relationship: 'child', label: 'PrEP for HIV Prevention' },
    { targetId: 'safe-sex-practices', targetType: 'topic', relationship: 'child', label: 'Safe Sex Practices' },
    { targetId: 'vaccination', targetType: 'topic', relationship: 'child', label: 'STI Vaccination' },
  ],

  tags: {
    systems: ['reproductive', 'immune'],
    topics: ['sexual-health', 'prevention', 'screening', 'infectious-disease', 'public-health'],
    keywords: [
      'STI', 'STD', 'prevention', 'condom', 'PrEP', 'HPV vaccine', 'screening',
      'chlamydia', 'gonorrhea', 'syphilis', 'HIV', 'herpes', 'doxy-PEP',
      'sexual health', 'barrier methods', 'antibiotic resistance',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'ob-gyn', 'family-medicine', 'pediatrics'],
    },
  },

  createdAt: '2025-01-30',
  updatedAt: '2025-01-30',
  version: 1,
  status: 'published',
  contributors: ['biological-self-team'],
};
