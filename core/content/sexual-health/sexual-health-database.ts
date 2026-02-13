/**
 * Sexual Health Database
 *
 * Comprehensive medical education database covering STIs, HIV,
 * screening guidelines, prevention, reproductive health,
 * LGBTQ-specific health, and sexual dysfunction.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type SexualHealthCategory =
  | 'sti-bacterial'
  | 'sti-viral'
  | 'sti-parasitic'
  | 'hiv'
  | 'screening'
  | 'prevention'
  | 'reproductive'
  | 'lgbtq-health'
  | 'sexual-dysfunction';

export interface SexualHealthEntry {
  id: string;
  name: string;
  category: SexualHealthCategory;
  description: string;
  epidemiology: string;
  pathophysiology: string;
  clinicalPresentation: string;
  diagnosticWorkup: string;
  management: string;
  prevention: string;
  keyPearls: string[];
  references: string[];
}

// ---------------------------------------------------------------------------
// Database
// ---------------------------------------------------------------------------

export const sexualHealthDatabase: SexualHealthEntry[] = [
  // =========================================================================
  // BACTERIAL STIs
  // =========================================================================
  {
    id: 'chlamydia',
    name: 'Chlamydia',
    category: 'sti-bacterial',
    description:
      'Most common reportable bacterial STI in the US caused by Chlamydia trachomatis, an obligate intracellular gram-negative bacterium.',
    epidemiology:
      'Approximately 1.8 million cases reported annually in the US; highest rates in females 15-24. Often asymptomatic (up to 70% of women, 50% of men). Risk factors: age <25, new or multiple partners, inconsistent condom use.',
    pathophysiology:
      'C. trachomatis serotypes D-K infect columnar epithelial cells of the endocervix, urethra, rectum, and pharynx. The organism alternates between elementary bodies (infectious, extracellular) and reticulate bodies (replicative, intracellular). Host immune response causes mucosal inflammation and potential scarring.',
    clinicalPresentation:
      'Women: mucopurulent cervicitis, urethritis, dysuria, abnormal vaginal discharge, intermenstrual bleeding, pelvic pain. Men: urethritis with clear-to-white discharge, dysuria, epididymitis. Both: proctitis, pharyngitis (usually asymptomatic). Complications: PID, tubal infertility, ectopic pregnancy, reactive arthritis.',
    diagnosticWorkup:
      'NAAT (nucleic acid amplification test) is gold standard — urine, endocervical swab, vaginal swab, urethral swab, or rectal/pharyngeal swabs. NAAT sensitivity >95%. Culture rarely needed except medicolegal cases.',
    management:
      'First-line: doxycycline 100 mg PO BID x 7 days. Alternative: azithromycin 1 g PO x 1 dose (less preferred due to lower efficacy for rectal chlamydia). Pregnancy: azithromycin 1 g PO x 1. Test of cure recommended in pregnancy at 4 weeks. Treat all partners from past 60 days. Retest patient at 3 months.',
    prevention:
      'Consistent condom use, routine screening for at-risk populations, expedited partner therapy (EPT) where legal, patient education on reinfection risk.',
    keyPearls: [
      'Most common reportable STI in the US.',
      'Majority of infections are asymptomatic — screening is essential.',
      'Always test for concurrent gonorrhea.',
      'Doxycycline now preferred over azithromycin per 2021 CDC guidelines.',
      'Screen all sexually active women <25 annually.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Workowski KA et al. MMWR Recomm Rep 2021;70(4):1-187',
      'USPSTF Chlamydia/Gonorrhea Screening Recommendation 2021',
    ],
  },
  {
    id: 'gonorrhea',
    name: 'Gonorrhea',
    category: 'sti-bacterial',
    description:
      'Second most common reportable bacterial STI caused by Neisseria gonorrhoeae, a gram-negative intracellular diplococcus with rising antimicrobial resistance.',
    epidemiology:
      'Over 700,000 estimated new infections/year in the US. Highest rates in ages 15-24 and MSM. Increasing antimicrobial resistance is a major public health concern. Co-infection with chlamydia is common (10-40%).',
    pathophysiology:
      'N. gonorrhoeae attaches to mucosal columnar epithelium via pili and Opa proteins. Causes intense neutrophilic inflammatory response producing purulent exudate. Lipooligosaccharide (LOS) and peptidoglycan fragments drive tissue damage. Antigenic variation of pili enables immune evasion.',
    clinicalPresentation:
      'Men: purulent urethral discharge (typically yellow-green), dysuria, epididymitis. Women: cervicitis, urethritis, vaginal discharge, dysuria — but often asymptomatic (up to 50%). Both: pharyngitis (usually asymptomatic), proctitis. Disseminated gonococcal infection (DGI): dermatitis-arthritis syndrome, tenosynovitis, septic arthritis, rarely endocarditis/meningitis.',
    diagnosticWorkup:
      'NAAT preferred for all sites (urogenital, rectal, pharyngeal). Gram stain of urethral discharge showing gram-negative intracellular diplococci is highly specific in symptomatic men. Culture with antimicrobial susceptibility testing recommended when resistance suspected or treatment failure.',
    management:
      'First-line: ceftriaxone 500 mg IM x 1 dose (1 g if ≥150 kg). If chlamydia not excluded, add doxycycline 100 mg PO BID x 7 days. Pharyngeal gonorrhea: ceftriaxone 500 mg IM is the only reliable regimen. Test of cure at 7-14 days for pharyngeal infections. Report treatment failures.',
    prevention:
      'Consistent condom use, screening at-risk populations, EPT for partners, antimicrobial stewardship to slow resistance. Doxycycline PEP (doxyPEP) 200 mg within 72 hours of condomless sex reduces bacterial STI incidence in MSM.',
    keyPearls: [
      'Antimicrobial resistance is a critical and evolving challenge.',
      'Always co-treat for chlamydia if not excluded.',
      'Gram stain is highly specific in symptomatic male urethritis.',
      'Pharyngeal gonorrhea is harder to treat — test of cure required.',
      'Think of DGI when a young sexually active patient presents with migratory polyarthralgia, tenosynovitis, and skin lesions.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Unemo M et al. Nat Rev Dis Primers 2019;5:79',
      'St Cyr S et al. MMWR Morb Mortal Wkly Rep 2020;69:1911-1916',
    ],
  },
  {
    id: 'syphilis-primary',
    name: 'Syphilis — Primary',
    category: 'sti-bacterial',
    description:
      'First stage of infection with Treponema pallidum, characterized by a painless chancre at the site of inoculation.',
    epidemiology:
      'Syphilis rates have risen dramatically, especially among MSM and in the context of substance use. In 2022, over 207,000 total syphilis cases reported in the US — the highest in decades. Congenital syphilis is also surging.',
    pathophysiology:
      'T. pallidum, a spirochete, penetrates intact mucosa or micro-abrasions. Incubation 10-90 days (average 21). Organism disseminates hematogenously early. Local replication produces a painless ulcer (chancre) with perivascular lymphoplasmacytic infiltrate and obliterative endarteritis.',
    clinicalPresentation:
      'Painless, indurated, clean-based chancre at inoculation site (genitalia, anus, mouth, other). Usually solitary but can be multiple. Nontender regional lymphadenopathy. Chancre resolves spontaneously in 3-6 weeks without treatment. Extra-genital chancres may be missed on exam.',
    diagnosticWorkup:
      'Darkfield microscopy of chancre exudate (limited availability). Serology: nontreponemal (RPR/VDRL) for screening + treponemal (FTA-ABS, TP-PA) for confirmation. Reverse sequence screening (treponemal first) increasingly used. Primary syphilis may be seronegative early — repeat in 2-4 weeks if high suspicion.',
    management:
      'Benzathine penicillin G 2.4 million units IM x 1 dose. Penicillin-allergic nonpregnant: doxycycline 100 mg PO BID x 14 days. Penicillin-allergic pregnant: desensitize and treat with penicillin. Jarisch-Herxheimer reaction may occur within 24 hours of treatment.',
    prevention:
      'Condom use (reduces but does not eliminate risk since chancres can occur outside covered areas), regular screening for at-risk populations, partner notification and treatment, PrEP patients should be screened regularly.',
    keyPearls: [
      'The chancre is classically PAINLESS — pain suggests herpes or other etiology.',
      'Primary syphilis may be seronegative; repeat serology if clinical suspicion is high.',
      'Penicillin is the ONLY proven treatment in pregnancy.',
      'All stages of syphilis require public health reporting.',
      '"The Great Imitator" — syphilis can mimic many diseases across all stages.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Hook EW. N Engl J Med 2017;376:1550-1560',
      'Ghanem KG et al. Clin Infect Dis 2020;71(Suppl 2):S30-S40',
    ],
  },
  {
    id: 'syphilis-secondary',
    name: 'Syphilis — Secondary',
    category: 'sti-bacterial',
    description:
      'Disseminated stage of syphilis occurring weeks to months after primary infection, with systemic and mucocutaneous manifestations.',
    epidemiology:
      'Occurs 4-10 weeks after primary chancre (may overlap). Most infectious stage. Develops in approximately 25% of untreated primary syphilis patients.',
    pathophysiology:
      'Widespread hematogenous and lymphatic dissemination of T. pallidum. Immune complex deposition and direct spirochetal tissue invasion cause multisystem manifestations. Vasculitis and perivascular inflammation underlie the characteristic rash and organ involvement.',
    clinicalPresentation:
      'Diffuse, symmetric, non-pruritic maculopapular rash — classically involves palms and soles. Condylomata lata (moist, flat, gray-white lesions in intertriginous areas — highly infectious). Mucous patches in oral cavity. Constitutional symptoms: fever, malaise, weight loss, generalized lymphadenopathy, arthralgias. Less common: hepatitis, nephropathy, uveitis, meningitis, alopecia (moth-eaten).',
    diagnosticWorkup:
      'Nontreponemal serology (RPR/VDRL) is almost always reactive and often with high titers. Confirm with treponemal test. Darkfield microscopy of condylomata lata or mucous patches. Consider LP if neurologic symptoms present.',
    management:
      'Benzathine penicillin G 2.4 million units IM x 1 dose. Same alternatives as primary syphilis. Monitor RPR titers at 6 and 12 months — expect 4-fold decline. Jarisch-Herxheimer reaction common.',
    prevention:
      'Same as primary syphilis. Education that secondary syphilis rash is highly contagious through direct contact with lesions.',
    keyPearls: [
      'Rash involving palms and soles = think syphilis (also RMSF, endocarditis).',
      'Condylomata LATA (syphilis) vs. condylomata ACUMINATA (HPV).',
      'Secondary syphilis is the most contagious stage.',
      'Moth-eaten alopecia is a distinctive but uncommon finding.',
      'RPR/VDRL titers correlate with disease activity.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Hook EW. N Engl J Med 2017;376:1550-1560',
    ],
  },
  {
    id: 'syphilis-latent',
    name: 'Syphilis — Latent',
    category: 'sti-bacterial',
    description:
      'Asymptomatic period with positive serology but no clinical manifestations, divided into early latent (<1 year) and late latent (>1 year or unknown duration).',
    epidemiology:
      'Without treatment, approximately two-thirds of patients with secondary syphilis will enter latency. About 25% of untreated early latent patients may relapse to secondary syphilis. Most commonly detected through screening.',
    pathophysiology:
      'T. pallidum persists in tissues despite lack of clinical findings. Immune response controls but does not eradicate infection. Relapse to secondary stage can occur in early latent phase. Late latent syphilis is not thought to be sexually transmissible but can be transmitted vertically.',
    clinicalPresentation:
      'By definition, no signs or symptoms. Diagnosed by positive serology in absence of clinical manifestations. Early latent: acquired within preceding 12 months. Late latent: acquired >12 months ago or unknown duration.',
    diagnosticWorkup:
      'Positive treponemal and nontreponemal serology. Distinguish early vs late latent based on history (documented seroconversion, prior negative test, symptoms of primary/secondary). If duration unknown, treat as late latent. CSF exam if neurologic signs, treatment failure, or HIV co-infection with late latent.',
    management:
      'Early latent: benzathine penicillin G 2.4 million units IM x 1 dose. Late latent or unknown duration: benzathine penicillin G 2.4 million units IM weekly x 3 doses. Follow RPR at 6, 12, and 24 months.',
    prevention:
      'Routine screening to identify latent cases. Screen all pregnant women. Screen MSM at least annually.',
    keyPearls: [
      'If duration of infection cannot be determined, treat as late latent (3 weekly doses).',
      'Late latent syphilis is not sexually transmissible but CAN be transmitted vertically.',
      'Inadequate decline in RPR titer may indicate treatment failure or neurosyphilis.',
      'Consider lumbar puncture if HIV co-infected with late latent syphilis.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Workowski KA et al. MMWR Recomm Rep 2021;70(4):1-187',
    ],
  },
  {
    id: 'syphilis-tertiary',
    name: 'Syphilis — Tertiary',
    category: 'sti-bacterial',
    description:
      'Late-stage syphilis occurring years to decades after initial infection, involving cardiovascular and gummatous disease.',
    epidemiology:
      'Develops in approximately 15-40% of untreated patients, typically 3-15+ years after initial infection. Rare in the antibiotic era but still encountered. Cardiovascular syphilis typically 15-30 years after infection.',
    pathophysiology:
      'Chronic granulomatous inflammation with obliterative endarteritis. Gummas are granulomatous lesions with central necrosis, surrounded by epithelioid cells, giant cells, and fibroblasts. Cardiovascular syphilis targets the vasa vasorum of the aorta, leading to aortitis and aneurysm formation.',
    clinicalPresentation:
      'Gummatous: destructive granulomas of skin, bone, liver, other organs. Cardiovascular: aortitis (ascending aorta), aortic aneurysm, aortic regurgitation, coronary ostial stenosis. NOT contagious at this stage.',
    diagnosticWorkup:
      'Treponemal serology positive. Nontreponemal titers may be low or negative. Imaging for cardiovascular involvement (CT angiography, echocardiography). Biopsy of gummas if diagnosis uncertain. LP to exclude neurosyphilis.',
    management:
      'Benzathine penicillin G 2.4 million units IM weekly x 3 doses. Cardiovascular syphilis may require surgical management of aneurysm/valvular disease. Close follow-up with RPR monitoring. Consult infectious disease.',
    prevention:
      'Prevention of tertiary syphilis relies on early detection and treatment. Universal prenatal screening. Routine screening for at-risk groups.',
    keyPearls: [
      'Tertiary syphilis is rare but not extinct.',
      'Ascending aortic aneurysm in a young patient should raise suspicion for syphilitic aortitis.',
      'Gummas can mimic malignancy — biopsy may be needed.',
      'Neurosyphilis can occur at ANY stage and is classified separately.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Hook EW. N Engl J Med 2017;376:1550-1560',
    ],
  },
  {
    id: 'neurosyphilis',
    name: 'Neurosyphilis',
    category: 'sti-bacterial',
    description:
      'CNS infection by T. pallidum that can occur at any stage of syphilis, ranging from asymptomatic CSF abnormalities to severe neurological syndromes.',
    epidemiology:
      'Can occur at any stage. Asymptomatic neurosyphilis is more common than symptomatic. Higher risk in HIV co-infection (especially CD4 <350). Early forms (meningitis, meningovascular) within first years; late forms (tabes dorsalis, general paresis) decades later.',
    pathophysiology:
      'T. pallidum invades the CNS early in infection. Early neurosyphilis: meningeal inflammation, cranial nerve involvement, cerebrovascular endarteritis. Late neurosyphilis: parenchymal damage to brain (general paresis) or spinal cord posterior columns (tabes dorsalis).',
    clinicalPresentation:
      'Early: asymptomatic, acute meningitis, cranial nerve palsies, meningovascular stroke. Late: general paresis (personality change, dementia, psychosis), tabes dorsalis (lightning pains, ataxia, Argyll Robertson pupils, Charcot joints). Ocular syphilis and otosyphilis can occur at any stage.',
    diagnosticWorkup:
      'LP: CSF VDRL (highly specific, low sensitivity), CSF pleocytosis, elevated protein. CSF FTA-ABS is sensitive but less specific. Serum RPR/VDRL and treponemal test. MRI brain/spine as indicated. LP indicated if: neurologic symptoms, ocular/otic symptoms, treatment failure, HIV co-infection with late latent syphilis.',
    management:
      'Aqueous crystalline penicillin G 3-4 million units IV q4h (18-24 million units/day) x 10-14 days. Alternative: procaine penicillin 2.4 MU IM daily + probenecid 500 mg PO QID x 10-14 days. Follow CSF every 6 months until normal.',
    prevention:
      'Early detection and treatment of syphilis at any stage. LP for patients with neurologic symptoms or HIV co-infection with syphilis.',
    keyPearls: [
      'Argyll Robertson pupils: accommodate but do NOT react to light ("prostitute pupils").',
      'CSF VDRL is specific but insensitive; a negative result does not rule out neurosyphilis.',
      'IV penicillin is required — IM benzathine penicillin does NOT achieve adequate CSF levels.',
      'Ocular and otosyphilis require neurosyphilis treatment regardless of CSF findings.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Ropper AH. N Engl J Med 2019;381:1358-1363',
    ],
  },
  {
    id: 'bacterial-vaginosis',
    name: 'Bacterial Vaginosis',
    category: 'sti-bacterial',
    description:
      'Polymicrobial syndrome resulting from replacement of normal Lactobacillus-dominant vaginal flora with anaerobic bacteria including Gardnerella vaginalis, Atopobium vaginae, and others.',
    epidemiology:
      'Most common cause of vaginal discharge in reproductive-age women. Prevalence approximately 29% in US women ages 14-49. Higher prevalence in Black women and women with female sexual partners. Associated with but not strictly an STI — sexual activity influences vaginal microbiome.',
    pathophysiology:
      'Disruption of normal Lactobacillus-dominant vaginal ecosystem. Loss of lactic acid and hydrogen peroxide production raises vaginal pH. Overgrowth of Gardnerella, Prevotella, Mobiluncus, and other anaerobes. Biofilm formation on vaginal epithelium. Associated with increased susceptibility to STIs and HIV.',
    clinicalPresentation:
      'Thin, homogeneous, white-gray vaginal discharge with fishy odor (especially after intercourse or addition of KOH). Absent vulvovaginal inflammation. Many patients asymptomatic. Not associated with dysuria or dyspareunia typically.',
    diagnosticWorkup:
      'Amsel criteria (3 of 4): thin homogeneous discharge, clue cells on wet mount, vaginal pH >4.5, positive whiff test (fishy odor with KOH). Nugent score on Gram stain (gold standard for research). NAAT-based tests (BD MAX BV, Affirm VPIII) increasingly used in clinical practice.',
    management:
      'Metronidazole 500 mg PO BID x 7 days OR metronidazole gel 0.75% intravaginally x 5 days OR clindamycin cream 2% intravaginally x 7 days. Recurrence is common (50% within 12 months). Routine treatment of male partners not recommended but female sexual partners should be treated.',
    prevention:
      'Avoid douching, limit number of sexual partners, consistent condom use may reduce risk. No proven prophylactic regimen. Probiotics under study but insufficient evidence for routine recommendation.',
    keyPearls: [
      'Not a classic STI but associated with sexual activity and increases STI/HIV risk.',
      'Clue cells are the hallmark — epithelial cells stippled with adherent bacteria.',
      'Avoid alcohol with metronidazole (disulfiram-like reaction).',
      'Screen and treat BV in pregnancy only if symptomatic.',
      'High recurrence rate — consider suppressive therapy for frequent recurrences.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Muzny CA et al. Sex Transm Dis 2020;47:137-146',
    ],
  },
  {
    id: 'trichomoniasis',
    name: 'Trichomoniasis',
    category: 'sti-parasitic',
    description:
      'Most common curable non-viral STI worldwide, caused by the flagellated protozoan Trichomonas vaginalis.',
    epidemiology:
      'Estimated 3.7 million prevalent infections in the US; approximately 2.6 million among women. Higher prevalence in Black women and older age groups compared to chlamydia/gonorrhea. Often co-occurs with BV. Increases HIV acquisition risk 1.5-2-fold.',
    pathophysiology:
      'T. vaginalis is an anaerobic flagellated protozoan that adheres to vaginal squamous epithelium via surface adhesins. Produces proteases and cytotoxins causing epithelial disruption and inflammation. Microhemorrhages increase HIV susceptibility. Can also infect male urethra and prostate.',
    clinicalPresentation:
      'Women: frothy, yellow-green, malodorous vaginal discharge, vulvovaginal irritation, dysuria, dyspareunia. "Strawberry cervix" (colpitis macularis) in 2% clinically but up to 45% on colposcopy. Men: usually asymptomatic; occasionally urethritis, epididymitis. Up to 70-85% of infected persons are asymptomatic.',
    diagnosticWorkup:
      'NAAT is most sensitive (>95%) and recommended. Wet mount shows motile trichomonads (60-70% sensitivity in symptomatic women). Rapid antigen tests available. Vaginal pH elevated (>4.5). Culture (InPouch TV) if NAAT unavailable.',
    management:
      'Metronidazole 500 mg PO BID x 7 days (preferred for women). Metronidazole 2 g PO x 1 dose (alternative for women, preferred for men). Treat sexual partners concurrently. Retest at 3 months. Metronidazole-resistant cases: tinidazole 2 g PO x 1 or higher-dose regimens; consult CDC for resistant cases.',
    prevention:
      'Consistent condom use, partner treatment, screening in high-prevalence settings. Screen HIV-positive women at least annually. Retest at 3 months after treatment.',
    keyPearls: [
      'Most common curable STI worldwide.',
      'NAAT is far superior to wet mount for diagnosis.',
      'Multi-dose metronidazole now preferred over single dose in women (lower cure failure).',
      '"Strawberry cervix" is classic but rarely seen grossly.',
      'Increases HIV acquisition and transmission risk.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Kissinger P. Sex Transm Infect 2015;91:484-489',
    ],
  },

  // =========================================================================
  // VIRAL STIs
  // =========================================================================
  {
    id: 'herpes-simplex-genital',
    name: 'Genital Herpes (HSV)',
    category: 'sti-viral',
    description:
      'Chronic, recurrent viral infection caused by HSV-1 or HSV-2 affecting the genital and perianal area, with lifelong latency in sacral ganglia.',
    epidemiology:
      'HSV-2 seroprevalence approximately 12% in US ages 14-49; HSV-1 genital infections increasing, especially in young adults (via oral-genital contact). Most transmission occurs during asymptomatic shedding. HSV-2 increases HIV acquisition risk 2-4-fold.',
    pathophysiology:
      'HSV enters through mucosal surfaces or skin abrasions. Replicates in epithelial cells causing lytic infection (vesicles/ulcers). Virus travels retrograde via sensory neurons to sacral dorsal root ganglia (S2-S5) where it establishes latency. Periodic reactivation causes recurrent lesions or asymptomatic shedding.',
    clinicalPresentation:
      'Primary infection: multiple painful vesicles/ulcers on erythematous base, bilateral, tender inguinal lymphadenopathy, systemic symptoms (fever, malaise, myalgias). Recurrences: fewer lesions, unilateral, shorter duration (5-10 days), often preceded by prodrome (tingling, burning). HSV-1 genital herpes recurs less frequently than HSV-2.',
    diagnosticWorkup:
      'HSV PCR (most sensitive) or viral culture from active lesion. Type-specific serology (IgG to HSV-1 and HSV-2 glycoproteins gG-1 and gG-2) for diagnosis outside active outbreak. Tzanck smear (multinucleated giant cells) is low sensitivity and not type-specific. Do NOT routinely screen asymptomatic patients.',
    management:
      'Primary: acyclovir 400 mg PO TID x 7-10 days OR valacyclovir 1 g PO BID x 7-10 days. Episodic recurrence: valacyclovir 500 mg PO BID x 3 days OR acyclovir 800 mg PO TID x 2 days. Suppressive (≥6 outbreaks/year or discordant partners): valacyclovir 500 mg-1 g PO daily. Severe/disseminated: IV acyclovir 5-10 mg/kg q8h.',
    prevention:
      'Condom use reduces transmission by approximately 30-50%. Daily suppressive therapy reduces transmission by approximately 48%. Disclosure and counseling. Avoid sexual contact during outbreaks. Cesarean delivery recommended if active genital lesions at onset of labor.',
    keyPearls: [
      'Most transmission occurs during asymptomatic viral shedding.',
      'HSV-1 is now the most common cause of new genital herpes in young adults.',
      'Routine serologic screening is NOT recommended for asymptomatic patients.',
      'HSV-2 seropositivity significantly increases HIV acquisition risk.',
      'Suppressive therapy reduces but does not eliminate transmission.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Corey L, Wald A. N Engl J Med 2004;351:2004-2012',
    ],
  },
  {
    id: 'hpv',
    name: 'Human Papillomavirus (HPV)',
    category: 'sti-viral',
    description:
      'Most common STI; a group of >200 DNA virus types, some causing anogenital warts (types 6, 11) and others causing cervical and other anogenital/oropharyngeal cancers (types 16, 18 and other high-risk types).',
    epidemiology:
      'Approximately 80% of sexually active individuals will acquire HPV in their lifetime. Prevalence peaks in late teens/early 20s. HPV 16 and 18 account for approximately 70% of cervical cancers. HPV-associated oropharyngeal cancers are increasing, especially in men.',
    pathophysiology:
      'HPV infects basal epithelial cells through micro-abrasions. Viral oncoproteins E6 and E7 (in high-risk types) inactivate p53 and Rb tumor suppressors respectively, promoting genomic instability and malignant transformation. Most infections are cleared by cell-mediated immunity within 1-2 years. Persistent infection with high-risk types drives carcinogenesis.',
    clinicalPresentation:
      'Most infections asymptomatic and self-limited. Low-risk types (6,11): condylomata acuminata (genital warts) — flesh-colored, exophytic, papillomatous lesions. High-risk types: cervical dysplasia (CIN), cervical cancer, vulvar/vaginal/anal/penile/oropharyngeal cancers. Rare: recurrent respiratory papillomatosis in children (vertical transmission of types 6, 11).',
    diagnosticWorkup:
      'Genital warts: clinical diagnosis. Cervical cancer screening: Pap smear with reflex HPV testing, or primary HPV testing. Colposcopy and biopsy for abnormal cervical cytology. Anal Pap smear for high-risk populations (MSM, HIV-positive). No routine HPV test for men or for oropharyngeal disease.',
    management:
      'Genital warts: patient-applied (imiquimod 5% cream, podofilox 0.5% solution/gel, sinecatechins 15% ointment) or provider-administered (cryotherapy, TCA/BCA, surgical excision). Cervical dysplasia: managed per ASCCP guidelines — observation, ablation, or excision based on grade. Cancer: oncology referral.',
    prevention:
      'HPV vaccination (Gardasil 9 — types 6, 11, 16, 18, 31, 33, 45, 52, 58): recommended ages 9-26, shared clinical decision-making ages 27-45. Two-dose schedule if started before age 15, three doses if 15-26 or immunocompromised. Cervical cancer screening per guidelines. Condoms partially protective (~70%).',
    keyPearls: [
      'HPV vaccine has dramatically reduced HPV infections and cervical dysplasia in vaccinated populations.',
      'E6 degrades p53; E7 inactivates Rb — classic cancer biology.',
      'Most HPV infections clear spontaneously within 1-2 years.',
      'HPV-related oropharyngeal cancer now exceeds cervical cancer in the US.',
      'Genital warts are NOT caused by the same types that cause cancer.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'ACIP HPV Vaccine Recommendations',
      'Schiffman M et al. Nat Rev Dis Primers 2016;2:16086',
    ],
  },
  {
    id: 'hepatitis-b-sexual',
    name: 'Hepatitis B (Sexual Transmission)',
    category: 'sti-viral',
    description:
      'Vaccine-preventable viral hepatitis caused by hepatitis B virus (HBV), an enveloped DNA hepadnavirus. Sexual contact is a major route of transmission, especially among unvaccinated adults.',
    epidemiology:
      'Approximately 296 million people with chronic HBV worldwide. In the US, roughly 1.25 million chronic carriers. Sexual transmission accounts for a significant proportion of new adult infections. MSM, persons with multiple partners, and sex workers are at higher risk.',
    pathophysiology:
      'HBV is primarily hepatotropic. Virus enters hepatocytes via NTCP receptor. Forms covalently closed circular DNA (cccDNA) in nucleus, serving as persistent transcription template. Liver damage is primarily immune-mediated (cytotoxic T lymphocytes targeting infected hepatocytes) rather than directly cytopathic. Chronic infection risk inversely related to age at acquisition.',
    clinicalPresentation:
      'Acute: often asymptomatic; when symptomatic — fatigue, nausea, jaundice, dark urine, RUQ pain. Fulminant hepatitis in <1%. Chronic HBV: most asymptomatic until complications (cirrhosis, HCC). Extrahepatic: polyarteritis nodosa, membranous nephropathy, aplastic anemia.',
    diagnosticWorkup:
      'HBsAg (current infection), Anti-HBs (immunity — vaccine or recovered), Anti-HBc IgM (acute), Anti-HBc IgG (prior exposure), HBeAg (high replication, high infectivity), HBV DNA (viral load). Screen all pregnant women. Screen high-risk populations.',
    management:
      'Acute: supportive care; antivirals reserved for severe/protracted courses. Chronic: treatment indicated if active replication (HBeAg+ or elevated HBV DNA) with elevated ALT or significant fibrosis. First-line: entecavir or tenofovir (TDF or TAF). Monitor for HCC with ultrasound every 6 months in cirrhotics and high-risk patients.',
    prevention:
      'HBV vaccine: universal childhood vaccination and catch-up for unvaccinated adults. Heplisav-B (2-dose series) or recombinant vaccines (3-dose series). Post-exposure prophylaxis with HBIG + vaccine for known exposures. Condom use. Screen and vaccinate sexual partners of HBV carriers.',
    keyPearls: [
      'HBV is 50-100x more infectious than HIV.',
      'Chronic infection risk: 90% in neonates, 5% in adults.',
      'HBsAg positive + Anti-HBc IgM positive = acute infection.',
      'Only HBsAb positive = vaccinated immunity.',
      'HBV is the ONLY STI-related pathogen with an effective vaccine preventing a cancer (HCC).',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Terrault NA et al. Hepatology 2018;67:1560-1599 (AASLD Guidelines)',
    ],
  },
  {
    id: 'molluscum-contagiosum',
    name: 'Molluscum Contagiosum',
    category: 'sti-viral',
    description:
      'Benign skin infection caused by Molluscum contagiosum virus (MCV), a poxvirus, transmitted through direct skin-to-skin contact including sexual contact.',
    epidemiology:
      'Common in children (non-sexual transmission). In adults, genital molluscum is typically sexually transmitted. More extensive and recalcitrant in immunocompromised patients (especially HIV/AIDS). Self-limited in immunocompetent patients.',
    pathophysiology:
      'MCV infects epidermal keratinocytes. Viral replication causes cells to enlarge and produce characteristic cytoplasmic inclusion bodies (Henderson-Patterson bodies/molluscum bodies). The virus suppresses local immune response through virokines. Incubation 2-6 weeks.',
    clinicalPresentation:
      'Firm, dome-shaped, flesh-colored papules with central umbilication (2-5 mm). Waxy core expressible from center. Sexually transmitted: genital, perineal, lower abdominal distribution. Giant molluscum (>1 cm) and widespread lesions suggest immunodeficiency. Self-resolves in 6-12 months in immunocompetent hosts.',
    diagnosticWorkup:
      'Clinical diagnosis based on appearance. Dermoscopy shows central white-yellow amorphous structure. Biopsy rarely needed — shows characteristic intracytoplasmic molluscum bodies (Henderson-Patterson bodies). Consider HIV testing if extensive or refractory.',
    management:
      'Many cases self-resolve. Cryotherapy, curettage, or expression of core. Topical: cantharidin (provider-applied), imiquimod, podophyllotoxin. Treat to prevent autoinoculation and sexual transmission. In immunocompromised: immune reconstitution (ART for HIV) is most important.',
    prevention:
      'Avoid direct contact with lesions. Condom use (does not cover all potential sites). Sexual partners should be examined.',
    keyPearls: [
      'Central umbilication is the clinical hallmark.',
      'Henderson-Patterson (molluscum) bodies are the histologic hallmark.',
      'Extensive/giant molluscum in an adult should prompt HIV testing.',
      'Self-limited in immunocompetent patients — treatment is optional.',
      'A poxvirus — one of the few poxviruses still commonly seen in clinical practice.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Chen X et al. Lancet Infect Dis 2013;13:877-888',
    ],
  },

  // =========================================================================
  // HIV
  // =========================================================================
  {
    id: 'hiv-acute-infection',
    name: 'HIV — Acute Infection',
    category: 'hiv',
    description:
      'The initial phase of HIV infection (2-4 weeks after exposure) characterized by high-level viremia, rapid CD4 decline, and a mononucleosis-like syndrome in 50-90% of patients.',
    epidemiology:
      'Approximately 1.2 million people living with HIV in the US; ~13% undiagnosed. Approximately 35,000 new diagnoses/year. Acute HIV accounts for a disproportionate share of new transmissions due to extremely high viral load. Highest incidence: MSM (especially young Black and Hispanic MSM), transgender women.',
    pathophysiology:
      'HIV-1 (retrovirus) binds CD4 via gp120, then co-receptor (CCR5 or CXCR4) via gp41, enabling membrane fusion and entry. Reverse transcriptase converts RNA to DNA, which integrates into host genome. Massive viremia during acute phase (millions of copies/mL). Rapid depletion of gut-associated lymphoid tissue (GALT) CD4 cells. Immune response partially controls viremia to viral set point by 3-6 months.',
    clinicalPresentation:
      'Acute retroviral syndrome (2-4 weeks post-exposure): fever, pharyngitis, lymphadenopathy, maculopapular rash (trunk/face), myalgias, headache, mucocutaneous ulcers, diarrhea. Resembles mononucleosis or influenza. Labs: leukopenia, thrombocytopenia, elevated transaminases, very high viral load, low or rapidly declining CD4.',
    diagnosticWorkup:
      'Fourth-generation HIV-1/2 Ag/Ab combination assay (detects p24 antigen during acute infection). If reactive: HIV-1/2 differentiation immunoassay. If indeterminate: HIV-1 RNA (qualitative or quantitative). Fourth-gen test can detect infection as early as 2 weeks post-exposure. Standard antibody-only tests miss the acute window.',
    management:
      'Start ART immediately upon diagnosis — do not wait for resistance testing results. Early ART limits reservoir size, preserves immune function, and reduces transmission. Initiate same-day or rapid-start ART where possible. Recommended initial regimens include BIC/TAF/FTC (Biktarvy) or DTG + TAF/FTC or TDF/FTC.',
    prevention:
      'PrEP for high-risk individuals. Condom use. Treatment as Prevention (TasP) — undetectable = untransmittable (U=U). PEP within 72 hours of exposure. Needle exchange programs. Regular screening.',
    keyPearls: [
      'Think acute HIV in any patient with "mono-like" illness + risk factors.',
      'Acute HIV is the most transmissible phase — extremely high viral load.',
      'Fourth-generation assay detects p24 antigen before antibodies appear.',
      'Start ART immediately — "test and treat" approach.',
      'The viral set point after acute infection predicts disease progression rate.',
    ],
    references: [
      'DHHS HIV Treatment Guidelines (current)',
      'Cohen MS et al. N Engl J Med 2011;365:493-505',
      'Fiebig EW et al. AIDS 2003;17:1871-1879',
    ],
  },
  {
    id: 'hiv-screening',
    name: 'HIV Screening',
    category: 'hiv',
    description:
      'Systematic testing to identify HIV infection, recommended as routine for all patients aged 13-64 and targeted testing for ongoing risk.',
    epidemiology:
      'Approximately 13% of people with HIV in the US are unaware of their status. Late diagnosis is associated with worse outcomes and ongoing transmission. Universal screening normalizes testing and reduces stigma.',
    pathophysiology:
      'N/A — screening guideline topic. Understanding of window periods is key: fourth-generation Ag/Ab tests have a window of approximately 2-4 weeks; antibody-only tests approximately 3-12 weeks; RNA testing approximately 10-14 days.',
    clinicalPresentation:
      'N/A — patients being screened are often asymptomatic. Indications for targeted testing: STI diagnosis, pregnancy, TB, occupational exposure, symptoms of acute retroviral syndrome, new sexual partner request.',
    diagnosticWorkup:
      'CDC/USPSTF recommended algorithm: (1) Fourth-generation HIV-1/2 Ag/Ab combination immunoassay. (2) If reactive → HIV-1/HIV-2 antibody differentiation immunoassay. (3) If indeterminate → HIV-1 RNA qualitative test. Rapid tests and home tests (OraQuick) available but less sensitive in acute infection.',
    management:
      'Positive: link to care immediately, initiate ART, CD4 and viral load, resistance testing, screen for co-infections (HBV, HCV, syphilis, TB), opportunistic infection prophylaxis if indicated. Negative with ongoing risk: repeat screening annually or more frequently; discuss PrEP.',
    prevention:
      'Universal opt-out screening ages 13-64 per CDC (at least once). Repeat screening for persons with ongoing risk. Prenatal screening for all pregnant women. PrEP for those at substantial risk.',
    keyPearls: [
      'Screen ALL patients aged 13-64 at least once — opt-out approach.',
      'Fourth-generation test is the recommended initial screening test.',
      'A reactive screening test requires confirmation — do not diagnose on a single test.',
      'Early diagnosis and ART initiation improves individual outcomes and prevents transmission.',
      'Normalize HIV testing to reduce stigma and missed diagnoses.',
    ],
    references: [
      'CDC HIV Testing Guidelines',
      'USPSTF HIV Screening Recommendation 2019 (Grade A)',
      'Branson BM et al. MMWR Recomm Rep 2006;55(RR-14):1-17',
    ],
  },
  {
    id: 'hiv-art-principles',
    name: 'HIV — ART Principles',
    category: 'hiv',
    description:
      'Antiretroviral therapy (ART) is the standard of care for all people living with HIV regardless of CD4 count, aimed at viral suppression, immune recovery, and prevention of transmission.',
    epidemiology:
      'ART has transformed HIV from a fatal disease to a chronic manageable condition. Life expectancy near-normal with early ART. Global ART coverage approximately 75% (2023). UNAIDS 95-95-95 targets: 95% diagnosed, 95% on ART, 95% virally suppressed.',
    pathophysiology:
      'ART targets multiple steps of the HIV lifecycle: entry inhibitors (maraviroc — CCR5; enfuvirtide — gp41 fusion), NRTIs (nucleoside/nucleotide reverse transcriptase inhibitors — tenofovir, emtricitabine, abacavir, lamivudine), NNRTIs (efavirenz, doravirine, rilpivirine), INSTIs (integrase strand transfer inhibitors — dolutegravir, bictegravir, cabotegravir), PIs (protease inhibitors — darunavir). Pharmacokinetic boosters: ritonavir, cobicistat.',
    clinicalPresentation:
      'ART monitoring: viral load (goal <200 copies/mL, ideally undetectable <20-50), CD4 count recovery (most recover above 500 with sustained suppression). Side effects vary by class: NRTIs (renal, bone, lactic acidosis); NNRTIs (rash, neuropsychiatric); PIs (GI, metabolic); INSTIs (weight gain, insomnia, rare neuropsychiatric). Immune reconstitution inflammatory syndrome (IRIS) if starting ART at very low CD4.',
    diagnosticWorkup:
      'Before starting ART: HIV genotype resistance testing, CD4 count, viral load, HLA-B*5701 (before abacavir), HBV/HCV serology, renal function, lipids, pregnancy test. Monitoring: viral load at 4 weeks, then every 3-6 months. CD4 every 3-6 months until stable >250.',
    management:
      'Recommended initial regimens (DHHS 2024): BIC/TAF/FTC (Biktarvy), DTG/TAF/FTC, or DTG + 3TC (Dovato) for eligible patients. Start ART as soon as possible, including same-day start. Regimen selection based on resistance, HBV status, pregnancy, renal function, drug interactions. Long-acting injectable cabotegravir + rilpivirine (Cabenuva) available for virally suppressed patients.',
    prevention:
      'ART is prevention: U=U (Undetectable = Untransmittable) — sustained viral suppression eliminates sexual transmission. PrEP for HIV-negative partners. Treatment of all diagnosed individuals reduces community viral load.',
    keyPearls: [
      'Treat ALL patients with HIV regardless of CD4 count.',
      'INSTIs (dolutegravir, bictegravir) are the backbone of preferred modern regimens.',
      'U=U: undetectable viral load = effectively zero risk of sexual transmission.',
      'Check HLA-B*5701 before prescribing abacavir — hypersensitivity risk.',
      'Tenofovir (TDF or TAF) covers HBV — discontinuation can cause HBV flare if co-infected.',
    ],
    references: [
      'DHHS Guidelines for the Use of Antiretroviral Agents in Adults and Adolescents with HIV (current)',
      'WHO Consolidated Guidelines on HIV 2021',
      'Cohen MS et al. N Engl J Med 2016;375:830-839 (PARTNER study)',
    ],
  },
  {
    id: 'hiv-prep',
    name: 'HIV — Pre-Exposure Prophylaxis (PrEP)',
    category: 'hiv',
    description:
      'Antiretroviral medication taken by HIV-negative individuals at substantial risk of HIV to prevent acquisition, reducing risk by up to 99% when taken as prescribed.',
    epidemiology:
      'PrEP uptake increasing but significant disparities persist. Approximately 1.2 million Americans have indications for PrEP but only ~35% are prescribed it. Significant racial/ethnic and geographic disparities in PrEP access. Highly effective: >99% risk reduction with daily oral PrEP in adherent individuals.',
    pathophysiology:
      'Tenofovir and emtricitabine (or TAF/FTC) achieve protective drug concentrations in rectal and genital tissues, preventing HIV reverse transcription and integration. For rectal tissue, protection achieved in approximately 7 days of daily dosing; for vaginal tissue approximately 21 days. Cabotegravir (injectable) inhibits integrase at the mucosal site of exposure.',
    clinicalPresentation:
      'N/A — prevention modality. Monitor for side effects: TDF-based — renal function, bone density. TAF-based — weight gain, lipids. Cabotegravir injectable — injection site reactions.',
    diagnosticWorkup:
      'Before starting: confirmed HIV-negative (4th gen test), renal function (eGFR), HBV serology, STI screening, pregnancy test. Follow-up every 3 months: HIV testing (MANDATORY — must confirm negative before each refill), STI screening, renal function (for TDF), adherence assessment.',
    management:
      'Oral: TDF/FTC (Truvada) or TAF/FTC (Descovy — approved for MSM and transgender women, not studied for receptive vaginal sex). Daily dosing. "2-1-1" or on-demand PrEP (iPrEx OLE) for MSM only: 2 pills 2-24h before sex, 1 pill 24h after, 1 pill 48h after. Injectable: cabotegravir (Apretude) IM every 2 months after initial loading doses — superior to oral TDF/FTC in clinical trials.',
    prevention:
      'PrEP IS the prevention modality. Combine with behavioral risk reduction, condoms, regular STI screening. PrEP should be offered to: MSM with inconsistent condom use or recent STI, heterosexuals with HIV-positive partner not virally suppressed, PWID sharing injection equipment, transgender individuals at risk.',
    keyPearls: [
      'PrEP reduces HIV acquisition risk by >99% with adherence.',
      'MUST confirm HIV-negative before every refill — PrEP monotherapy in undiagnosed HIV can cause resistance.',
      'Injectable cabotegravir (Apretude) is superior to oral PrEP and eliminates adherence challenges.',
      'TDF/FTC: renal safety concern. TAF/FTC: less renal/bone effect but not studied for vaginal exposure.',
      'On-demand (2-1-1) dosing is an evidence-based option for MSM.',
    ],
    references: [
      'CDC PrEP Clinical Practice Guideline 2021',
      'Grant RM et al. N Engl J Med 2010;363:2587-2599 (iPrEx)',
      'Landovitz RJ et al. N Engl J Med 2021;385:595-608 (HPTN 083)',
    ],
  },
  {
    id: 'hiv-pep',
    name: 'HIV — Post-Exposure Prophylaxis (PEP)',
    category: 'hiv',
    description:
      'Emergency antiretroviral regimen initiated within 72 hours of potential HIV exposure to prevent seroconversion, used for occupational and non-occupational exposures.',
    epidemiology:
      'Estimated to reduce HIV acquisition risk by approximately 80% when initiated promptly. Efficacy decreases with time — must start within 72 hours, ideally within 2 hours. Non-occupational PEP (nPEP) for sexual assault, condomless sex, needle sharing.',
    pathophysiology:
      'Antiretroviral agents prevent HIV integration and establishment of infection during the brief window before the virus disseminates beyond local tissue and draining lymph nodes. Animal models show post-exposure ART can prevent systemic infection if initiated early.',
    clinicalPresentation:
      'N/A — post-exposure prevention. Assess exposure risk: high risk (receptive anal intercourse, needle sharing, blood transfusion), moderate risk (receptive vaginal sex, insertive anal sex), low risk (oral sex, bite). Source factors: known HIV-positive and viral load status.',
    diagnosticWorkup:
      'Baseline: HIV test (4th gen), HBV serology, HCV antibody, renal function, pregnancy test, STI screening. Follow-up: HIV test at 4-6 weeks and 3 months post-exposure. If source known HIV-positive, check resistance profile if available.',
    management:
      'Preferred regimen: TDF/FTC + DTG (or RAL) x 28 days. Alternative: TDF/FTC + DRV/r. Start ASAP, ideally within 2 hours, no later than 72 hours. Provide full 28-day supply at initial visit (improves completion rates). Anti-emetics as needed. Transition to PrEP after completing PEP if ongoing risk.',
    prevention:
      'PEP is itself a prevention modality. Counsel on risk reduction. Offer PrEP for individuals with recurrent exposures. Sexual assault survivors: STI prophylaxis, emergency contraception, psychological support in addition to PEP.',
    keyPearls: [
      '72-hour window is absolute — earlier is better, ideally within 2 hours.',
      'Provide full 28-day course at the first visit to maximize completion.',
      '3-drug regimen for 28 days — same principle as ART.',
      'Transition to PrEP after PEP completion if ongoing risk.',
      'Do NOT delay PEP for baseline test results — start empirically.',
    ],
    references: [
      'CDC nPEP Guidelines 2016 (updated)',
      'Kuhar DT et al. Infect Control Hosp Epidemiol 2013;34:875-892',
    ],
  },
  {
    id: 'hiv-opportunistic-infections',
    name: 'HIV — Opportunistic Infections Overview',
    category: 'hiv',
    description:
      'Infections that occur with increased frequency or severity in immunocompromised HIV patients, typically when CD4 count falls below specific thresholds.',
    epidemiology:
      'OIs remain the leading cause of morbidity and mortality in HIV patients not on ART or with virologic failure. Incidence has decreased dramatically with widespread ART. PJP and MAC are the most common AIDS-defining OIs in the US.',
    pathophysiology:
      'Progressive CD4 T-cell depletion impairs cell-mediated immunity, predisposing to specific pathogens at characteristic CD4 thresholds: <200 — PJP, <100 — toxoplasmosis, cryptococcal meningitis, <50 — MAC, CMV. Mucosal immune defects predispose to candidiasis and other infections at higher CD4 counts.',
    clinicalPresentation:
      'CD4 <200: Pneumocystis jirovecii pneumonia (PJP — dry cough, dyspnea, bilateral ground-glass opacities, elevated LDH), esophageal candidiasis, Kaposi sarcoma. CD4 <100: cerebral toxoplasmosis (ring-enhancing lesions), cryptococcal meningitis (headache, elevated opening pressure). CD4 <50: MAC (fever, weight loss, diarrhea, elevated ALP), CMV retinitis (floaters, visual loss).',
    diagnosticWorkup:
      'Targeted based on CD4 count and presentation. PJP: induced sputum with DFA or PCR, BAL, elevated beta-D-glucan, LDH. Toxoplasma: MRI brain, Toxoplasma IgG. Cryptococcus: serum/CSF CrAg, India ink, CSF culture. MAC: blood cultures (AFB), tissue biopsy. CMV: dilated fundoscopic exam, PCR.',
    management:
      'Treat the specific OI + initiate/optimize ART. PJP: TMP-SMX 15-20 mg/kg/day IV/PO x 21 days + prednisone if PaO2 <70 or A-a gradient >35. Toxoplasma: pyrimethamine + sulfadiazine + leucovorin x 6 weeks. Crypto: amphotericin B + flucytosine induction, fluconazole consolidation/maintenance. MAC: clarithromycin + ethambutol +/- rifabutin. ART timing: start within 2 weeks for most OIs; delay 4-6 weeks for cryptococcal meningitis and CNS TB (IRIS risk).',
    prevention:
      'Primary prophylaxis based on CD4: <200 — TMP-SMX for PJP (also covers toxoplasmosis); <50 — azithromycin for MAC. Discontinue prophylaxis when CD4 >200 for >3 months on ART. Best prevention: ART and immune reconstitution.',
    keyPearls: [
      'CD4 thresholds: <200 = PJP, <100 = toxo/crypto, <50 = MAC/CMV.',
      'TMP-SMX is the workhorse — prophylaxis for PJP AND toxoplasmosis.',
      'Delay ART 4-6 weeks in cryptococcal meningitis to reduce IRIS mortality.',
      'Elevated LDH + bilateral GGO + CD4 <200 = PJP until proven otherwise.',
      'IRIS can unmask or worsen OIs after starting ART — monitor closely.',
    ],
    references: [
      'NIH OI Prevention and Treatment Guidelines (current)',
      'Kaplan JE et al. MMWR Recomm Rep 2009;58(RR-4):1-207',
    ],
  },

  // =========================================================================
  // SCREENING
  // =========================================================================
  {
    id: 'uspstf-sti-screening',
    name: 'USPSTF STI Screening Guidelines',
    category: 'screening',
    description:
      'Evidence-based screening recommendations from the US Preventive Services Task Force for sexually transmitted infections in asymptomatic individuals.',
    epidemiology:
      'Screening is critical given high rates of asymptomatic STIs. Early detection reduces morbidity, complications, and onward transmission. USPSTF assigns letter grades based on evidence: A (high certainty of benefit), B (moderate-high certainty), C (individual decision), D (recommend against), I (insufficient evidence).',
    pathophysiology:
      'N/A — guideline summary. Screening targets the asymptomatic phase of infection when treatment can prevent complications and transmission.',
    clinicalPresentation:
      'N/A — patients are asymptomatic by definition. Screening identifies occult infections before symptoms or complications develop.',
    diagnosticWorkup:
      'Chlamydia/Gonorrhea (Grade B): Screen all sexually active women <25 and older women with risk factors. Screen MSM at exposed sites at least annually. HIV (Grade A): Screen all adolescents and adults 15-65; younger/older if at risk. All pregnant women. Syphilis (Grade A): Screen persons at increased risk (MSM, HIV+, incarceration history, sex workers). All pregnant women at first visit. HBV (Grade B): Screen adolescents and adults at increased risk. All pregnant women. HCV (Grade B): Screen all adults 18-79 once. All pregnant women.',
    management:
      'Positive screens: treat per STI-specific guidelines. Partner notification and treatment. Retest at appropriate intervals (chlamydia/gonorrhea at 3 months). Link to care for chronic infections (HIV, HBV, HCV).',
    prevention:
      'Screening itself is prevention through early detection. Combine with behavioral counseling, vaccination (HBV, HPV), and PrEP referral as indicated.',
    keyPearls: [
      'HIV screening 15-65 is Grade A — screen everyone at least once.',
      'Chlamydia/gonorrhea screening in young women is Grade B.',
      'Screen ALL pregnant women for HIV, syphilis, and HBV.',
      'HCV universal screening 18-79 (Grade B) — one-time screen.',
      'USPSTF recommendations apply to ASYMPTOMATIC patients; symptomatic patients need diagnostic testing.',
    ],
    references: [
      'USPSTF Recommendation Statements (www.uspreventiveservicestaskforce.org)',
      'CDC STI Screening Recommendations 2021',
    ],
  },
  {
    id: 'cervical-cancer-screening',
    name: 'Cervical Cancer Screening',
    category: 'screening',
    description:
      'Evidence-based screening for cervical cancer and pre-cancerous lesions using cytology (Pap smear) and/or HPV testing, aimed at detecting and treating cervical intraepithelial neoplasia.',
    epidemiology:
      'Cervical cancer is the 4th most common cancer in women worldwide. In the US, approximately 14,000 new cases/year. Incidence has decreased >50% since Pap screening introduced. HPV causes virtually 100% of cervical cancers. Screening disparities persist among uninsured and underserved populations.',
    pathophysiology:
      'Persistent infection with high-risk HPV types (especially 16, 18) → cervical intraepithelial neoplasia (CIN 1 → CIN 2 → CIN 3) → invasive carcinoma. Transformation zone at squamocolumnar junction is most susceptible. Progression from HPV infection to cancer typically takes 10-20 years, providing a long window for screening.',
    clinicalPresentation:
      'Screening targets asymptomatic patients. Invasive cervical cancer may present with postcoital bleeding, abnormal vaginal discharge, pelvic pain, or be found on exam. CIN is asymptomatic.',
    diagnosticWorkup:
      'USPSTF/ACS guidelines: Ages 21-29: Pap (cytology) every 3 years. Ages 30-65: Pap every 3 years, hrHPV testing every 5 years, or co-testing (Pap + HPV) every 5 years. ACS 2020 preferred: primary HPV testing every 5 years starting at age 25. No screening <21 or >65 (if adequate prior negative screening and not high-risk). No screening after total hysterectomy (with cervix removal) for benign indications.',
    management:
      'Abnormal results managed per ASCCP risk-based management consensus guidelines (2019). Low-grade abnormalities: repeat testing or colposcopy. High-grade abnormalities: colposcopy + biopsy, then LEEP/excision or ablation as indicated. Immunocompromised patients may have different management thresholds.',
    prevention:
      'HPV vaccination (most effective before sexual debut). Regular screening per guidelines. Safe sex practices. Smoking cessation (smoking increases cervical cancer risk with HPV co-infection).',
    keyPearls: [
      'Do NOT screen before age 21 regardless of sexual activity.',
      'HPV testing alone (primary HPV screening) is emerging as the preferred strategy.',
      'CIN 1 often regresses spontaneously; CIN 2/3 requires treatment.',
      'HPV vaccination does not change screening recommendations — vaccinated women still need screening.',
      'Screening saves lives — cervical cancer is one of the most preventable cancers.',
    ],
    references: [
      'USPSTF Cervical Cancer Screening 2018',
      'ACS Cervical Cancer Screening Guideline 2020',
      'ASCCP Risk-Based Management Consensus Guidelines 2019',
    ],
  },

  // =========================================================================
  // PREVENTION
  // =========================================================================
  {
    id: 'condom-use',
    name: 'Condom Use and Barrier Methods',
    category: 'prevention',
    description:
      'External (male) and internal (female) condoms and dental dams as barrier methods for reducing STI and HIV transmission during sexual activity.',
    epidemiology:
      'Consistent and correct condom use reduces HIV transmission by approximately 80-95% and reduces risk of most STIs. External condom typical-use failure rate for pregnancy: approximately 13%/year; perfect use: 2%. Internal condom typical use: 21%. Condoms are more effective against STIs transmitted via fluids (HIV, gonorrhea, chlamydia) than those transmitted via skin contact (HPV, HSV, syphilis).',
    pathophysiology:
      'N/A — prevention modality. Mechanism: physical barrier prevents exchange of genital secretions and direct skin-to-skin contact with infectious lesions or fluids.',
    clinicalPresentation:
      'N/A — counseling on correct use is a clinical skill. Common errors reducing efficacy: late application, early removal, breakage, slippage, incorrect lubricant (oil-based with latex).',
    diagnosticWorkup:
      'N/A. Assess condom use as part of sexual history. Discuss barriers to use.',
    management:
      'Counsel on correct use: check expiration, open carefully, pinch tip, roll onto erect penis before any genital contact, use water- or silicone-based lubricant with latex/polyurethane, withdraw while still erect holding base. Internal condoms: polyurethane/nitrile, can be inserted up to 8 hours before sex. Dental dams for oral-genital/oral-anal contact.',
    prevention:
      'Condoms are the single most widely available STI/HIV prevention method. Provide free condoms in clinical settings. Discuss dual protection (condoms + hormonal contraception for STI + pregnancy prevention).',
    keyPearls: [
      'Condoms reduce HIV risk by 80-95% with consistent correct use.',
      'More protective against fluid-transmitted STIs than skin-contact STIs.',
      'Oil-based lubricants degrade latex — use water-based or silicone-based.',
      'Internal (female) condoms provide an option when external condom negotiation is difficult.',
      'Dual protection = condom + additional contraception for optimal outcomes.',
    ],
    references: [
      'CDC Condom Effectiveness Fact Sheet',
      'Weller S, Davis K. Cochrane Database Syst Rev 2002;(1):CD003255',
    ],
  },
  {
    id: 'hpv-vaccine-prevention',
    name: 'HPV Vaccination',
    category: 'prevention',
    description:
      'The 9-valent HPV vaccine (Gardasil 9) prevents infection with HPV types 6, 11, 16, 18, 31, 33, 45, 52, and 58, providing protection against genital warts and HPV-related cancers.',
    epidemiology:
      'HPV vaccine has been associated with >80% reduction in HPV infections, >40% reduction in CIN 2+ in vaccinated populations, and a significant decline in genital warts. Vaccination coverage (US): approximately 62% of adolescents up to date (lagging behind other childhood vaccines). Population-level herd immunity effects observed.',
    pathophysiology:
      'Recombinant L1 capsid protein virus-like particles (VLPs) that are non-infectious but highly immunogenic. Generate neutralizing antibodies that prevent HPV from infecting basal epithelial cells. Antibody titers remain elevated for at least 10+ years. Prevents initial infection but does not treat existing infections.',
    clinicalPresentation:
      'N/A — vaccine. Most common adverse effects: injection site pain/swelling (84%), syncope (administer seated with 15-min observation), headache, fatigue. No increased risk of serious adverse events, autoimmune disease, or fertility problems in extensive post-marketing surveillance.',
    diagnosticWorkup:
      'N/A. No pre-vaccination HPV testing required. Vaccination recommended even if prior HPV infection (protects against other types).',
    management:
      'Ages 9-14 (before 15th birthday): 2-dose series at 0 and 6-12 months. Ages 15-26: 3-dose series at 0, 1-2, and 6 months. Ages 27-45: shared clinical decision-making (most benefit if not previously exposed). Immunocompromised: 3-dose series regardless of age. Safe in pregnancy: no, defer until after delivery. Breastfeeding: yes.',
    prevention:
      'HPV vaccination IS prevention. Most effective when given before sexual debut. Vaccination does not replace cervical cancer screening. Catch-up vaccination for those not previously vaccinated.',
    keyPearls: [
      'Most effective when given before sexual debut — target ages 11-12.',
      '2-dose schedule sufficient if started before age 15.',
      'Vaccination does NOT treat existing HPV infections.',
      'Prevents approximately 90% of HPV-related cancers when fully vaccinated.',
      'Safe, effective, and one of the greatest cancer prevention tools available.',
    ],
    references: [
      'ACIP HPV Vaccine Recommendations (current)',
      'Lei J et al. N Engl J Med 2020;383:1340-1348',
    ],
  },
  {
    id: 'doxypep',
    name: 'Doxycycline Post-Exposure Prophylaxis (DoxyPEP)',
    category: 'prevention',
    description:
      'Doxycycline 200 mg taken within 72 hours after condomless sex to prevent bacterial STIs (chlamydia, syphilis, and potentially gonorrhea), primarily studied in MSM and transgender women.',
    epidemiology:
      'DoxyPEP reduces incidence of chlamydia by approximately 88%, syphilis by approximately 87%, and gonorrhea by approximately 55% in MSM. CDC issued guidelines in 2023 recommending DoxyPEP for MSM and transgender women with an STI in the past 12 months. Data in cisgender women (DoxyVAC trial) showed no benefit.',
    pathophysiology:
      'Doxycycline achieves bactericidal concentrations in genital tissues sufficient to prevent establishment of bacterial STI infection when taken within 72 hours of exposure. Tetracyclines inhibit the 30S ribosomal subunit, blocking bacterial protein synthesis.',
    clinicalPresentation:
      'N/A — prevention modality. Monitor for doxycycline side effects: GI upset, photosensitivity, esophageal irritation, vaginal candidiasis.',
    diagnosticWorkup:
      'STI screening every 3 months for patients on doxyPEP. Monitor for antimicrobial resistance patterns at the population level. No specific pre-prescription testing required beyond standard STI assessment.',
    management:
      'Doxycycline 200 mg PO within 72 hours of condomless sex (ideally within 24 hours). Maximum one dose per 24-hour period. Taken as needed (event-driven). Combine with regular STI screening. Not a substitute for condoms or PrEP.',
    prevention:
      'DoxyPEP is itself a prevention strategy. Part of a comprehensive sexual health toolkit alongside condoms, PrEP, and regular screening. Concerns about antimicrobial resistance (especially tetracycline-resistant gonorrhea) require ongoing surveillance.',
    keyPearls: [
      'Strong evidence of efficacy in MSM and transgender women — NOT in cisgender women.',
      'Does NOT reliably prevent gonorrhea (tetracycline resistance is already common).',
      'Antimicrobial stewardship concern — population-level resistance monitoring is essential.',
      'Event-driven dosing (take after exposure, not daily).',
      'Complements but does not replace PrEP, condoms, or STI screening.',
    ],
    references: [
      'Luetkemeyer AF et al. N Engl J Med 2023;388:1296-1306 (DoxyPEP trial)',
      'CDC DoxyPEP Clinical Guidelines 2023',
    ],
  },

  // =========================================================================
  // REPRODUCTIVE HEALTH
  // =========================================================================
  {
    id: 'female-infertility-workup',
    name: 'Female Infertility — Basic Workup',
    category: 'reproductive',
    description:
      'Evaluation of female factors contributing to infertility (inability to conceive after 12 months of unprotected intercourse, or 6 months if age ≥35).',
    epidemiology:
      'Affects approximately 10-15% of couples. Female factors account for approximately 35-40% of cases. Leading causes: ovulatory dysfunction (25%), tubal/peritoneal factors (25%), diminished ovarian reserve, endometriosis, uterine factors. Unexplained in 10-20%.',
    pathophysiology:
      'Ovulatory dysfunction: disrupted HPO axis (PCOS, hypothalamic amenorrhea, hyperprolactinemia, thyroid disease). Tubal factor: PID-related scarring (chlamydia/gonorrhea), endometriosis, prior surgery. Diminished ovarian reserve: age-related decline in oocyte quantity/quality. Uterine: fibroids, polyps, Asherman syndrome.',
    clinicalPresentation:
      'Inability to conceive with regular unprotected intercourse. History: menstrual regularity, cycle length, dysmenorrhea, dyspareunia, prior pregnancies, STI history, pelvic surgery, endocrine symptoms. Age is the single most important prognostic factor.',
    diagnosticWorkup:
      'Ovulatory assessment: menstrual history, day 21 progesterone, LH/FSH. Ovarian reserve: day 3 FSH/estradiol, AMH (anti-Mullerian hormone), antral follicle count (AFC) by transvaginal ultrasound. Tubal patency: hysterosalpingogram (HSG) or saline infusion sonogram. Uterine cavity: HSG, saline infusion sonogram, or hysteroscopy. Additional: TSH, prolactin, DHEA-S, testosterone (if PCOS suspected).',
    management:
      'Treat underlying cause: ovulation induction (letrozole or clomiphene) for anovulation, tubal surgery or IVF for tubal factor, surgical correction of uterine abnormalities. Intrauterine insemination (IUI) for mild male factor or unexplained. IVF for severe male factor, bilateral tubal disease, advanced age, failed other treatments. Refer to reproductive endocrinology if age ≥35 after 6 months, age <35 after 12 months, or known risk factors.',
    prevention:
      'Early treatment of STIs (prevent tubal damage). Age awareness counseling. Lifestyle optimization: healthy BMI, smoking cessation, limit alcohol, folate supplementation.',
    keyPearls: [
      'Age is the most important factor in female fertility — steep decline after 35.',
      'AMH and antral follicle count are the best markers of ovarian reserve.',
      'Chlamydia is the leading infectious cause of tubal infertility.',
      'Letrozole is now first-line over clomiphene for ovulation induction in PCOS.',
      'Both partners should be evaluated simultaneously — male factor is common.',
    ],
    references: [
      'ASRM Practice Committee Opinions (current)',
      'NICE Fertility Guidelines 2017 (updated)',
      'Practice Committee of ASRM. Fertil Steril 2020',
    ],
  },
  {
    id: 'male-infertility-workup',
    name: 'Male Infertility — Basic Workup',
    category: 'reproductive',
    description:
      'Evaluation of male factors contributing to infertility. Male factor is identified in approximately 50% of infertile couples (sole male factor 20-30%, combined male+female factor 20-30%).',
    epidemiology:
      'Semen quality has declined globally over recent decades. Most common identifiable cause is varicocele (35-40% of infertile men). Other causes: idiopathic (25%), obstruction, genetic, endocrine, sexual dysfunction, gonadotoxin exposure.',
    pathophysiology:
      'Pre-testicular: hypothalamic-pituitary dysfunction (hypogonadotropic hypogonadism, hyperprolactinemia, exogenous testosterone use). Testicular: varicocele, cryptorchidism, genetic (Klinefelter 47,XXY, Y-chromosome microdeletions), gonadotoxins (chemotherapy, radiation), infection (orchitis). Post-testicular: obstruction (vasectomy, CBAVD associated with CFTR mutations), ejaculatory dysfunction.',
    clinicalPresentation:
      'Inability to conceive. History: prior paternity, testicular trauma/surgery/infection, undescended testes, medications (testosterone, finasteride, SSRIs), occupational exposures, substance use. Exam: testicular size/consistency, varicocele (bag of worms on Valsalva), secondary sexual characteristics.',
    diagnosticWorkup:
      'Semen analysis x2 (2-7 days abstinence, 2-4 weeks apart): volume (≥1.5 mL), concentration (≥15 million/mL), motility (≥40%), morphology (≥4% normal by strict criteria). Abnormal SA: repeat + hormonal evaluation (FSH, testosterone, LH, prolactin). Low volume + azoospermia: post-ejaculate urinalysis (retrograde ejaculation), TRUS (ejaculatory duct obstruction). Genetic: karyotype and Y-microdeletion for severe oligospermia/azoospermia. CFTR testing if CBAVD.',
    management:
      'Varicocele repair if clinically palpable + abnormal SA. Endocrine: clomiphene or hCG/FSH for hypogonadotropic hypogonadism (NOT exogenous testosterone — it suppresses spermatogenesis). Obstructive azoospermia: surgical correction or sperm retrieval + IVF/ICSI. Non-obstructive azoospermia: micro-TESE + ICSI. Lifestyle: optimize BMI, stop smoking/drugs, reduce heat exposure.',
    prevention:
      'Avoid gonadotoxins. Counsel against anabolic steroid/testosterone use for fertility. Testicular self-exam. Cryopreservation before gonadotoxic treatment.',
    keyPearls: [
      'Exogenous testosterone SUPPRESSES spermatogenesis — it is male contraception, not fertility treatment.',
      'Varicocele is the most common correctable cause of male infertility.',
      'Semen analysis requires 2 samples due to significant intra-individual variability.',
      'Klinefelter (47,XXY) is the most common genetic cause — small firm testes + azoospermia.',
      'CBAVD (congenital bilateral absence of vas deferens) is associated with CFTR mutations.',
    ],
    references: [
      'AUA/ASRM Male Infertility Guidelines 2020',
      'WHO Laboratory Manual for Semen Analysis 6th Edition 2021',
    ],
  },

  // =========================================================================
  // LGBTQ HEALTH
  // =========================================================================
  {
    id: 'msm-sexual-health',
    name: 'Sexual Health for Men Who Have Sex with Men (MSM)',
    category: 'lgbtq-health',
    description:
      'Targeted sexual health considerations for MSM, who bear a disproportionate burden of STIs and HIV, requiring tailored screening, prevention, and care approaches.',
    epidemiology:
      'MSM account for approximately 69% of new HIV diagnoses in the US. Syphilis rates are 100+ times higher in MSM than heterosexual men. Gonorrhea, chlamydia, and HPV are also highly prevalent. Disparities are greatest among young Black and Hispanic MSM. Co-infections are common.',
    pathophysiology:
      'Rectal mucosa is more susceptible to HIV and STI transmission than vaginal mucosa due to single-layer columnar epithelium, high density of CD4+ target cells, and susceptibility to microtrauma. Oro-pharyngeal and rectal STIs are often asymptomatic and serve as reservoirs for ongoing transmission.',
    clinicalPresentation:
      'Proctitis (rectal chlamydia, gonorrhea, syphilis, HSV, LGV): rectal pain, discharge, tenesmus, bleeding. Pharyngeal infections: usually asymptomatic. Perianal/anal HPV-related dysplasia: often occult. Mpox: painful lesions in anogenital area, proctitis, systemic symptoms. Hepatitis A: fecal-oral transmission during sexual contact.',
    diagnosticWorkup:
      'Screen at all exposed anatomic sites (urogenital, rectal, pharyngeal). NAAT for chlamydia (including LGV if rectal) and gonorrhea at all 3 sites. Syphilis serology at least annually (more frequently if higher risk). HIV testing at least annually (every 3-6 months if higher risk). HCV testing at least annually for HIV-positive MSM. Anal cytology/high-resolution anoscopy for anal cancer screening in high-risk groups (under investigation).',
    management:
      'Site-specific treatment based on culture and NAAT results. Rectal chlamydia: doxycycline 100 mg BID x 7 days (test for LGV if symptoms — extend to 21 days). Pharyngeal gonorrhea: ceftriaxone 500 mg IM (most challenging site to eradicate). HCV treatment: DAA therapy. Comprehensive care: PrEP, doxyPEP, vaccination (HPV, HAV, HBV, mpox).',
    prevention:
      'PrEP for HIV prevention. DoxyPEP for bacterial STI prevention. Condom use. Complete vaccination series (HPV, HAV, HBV, meningococcal if on PrEP or HIV+, mpox). Regular comprehensive STI screening. Substance use counseling (chemsex, methamphetamine use).',
    keyPearls: [
      'Screen at ALL exposed sites: urethra, rectum, pharynx.',
      'Rectal and pharyngeal STIs are often asymptomatic — routine screening is essential.',
      'LGV should be considered in MSM with proctitis (extend doxycycline to 21 days).',
      'PrEP + doxyPEP + vaccination = comprehensive biomedical prevention.',
      'Inclusive, nonjudgmental sexual history-taking is the foundation of good care.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021 — MSM-specific sections',
      'Workowski KA et al. MMWR 2021',
      'Beymer MR et al. Clin Infect Dis 2017;64:1564-1570',
    ],
  },
  {
    id: 'transgender-sexual-health',
    name: 'Transgender and Gender-Diverse Sexual Health',
    category: 'lgbtq-health',
    description:
      'Sexual health care for transgender and gender-diverse (TGD) individuals, addressing unique anatomic, hormonal, and psychosocial factors affecting STI risk, screening, and management.',
    epidemiology:
      'Transgender women (especially trans women of color) have extremely high HIV prevalence (estimated 14-42% in some studies). Transgender men who have sex with cisgender men also face elevated STI/HIV risk. Healthcare access disparities, discrimination, and stigma contribute to poor outcomes. Limited research data in TGD populations.',
    pathophysiology:
      'Gender-affirming hormone therapy and surgery alter anatomy relevant to STI acquisition and screening. Estrogen use in trans women may thin penile/urethral epithelium. Testosterone use in trans men causes vaginal atrophy, potentially increasing susceptibility to micro-abrasions. Neovaginal tissue (in trans women) or neophallus (in trans men) requires adapted screening approaches.',
    clinicalPresentation:
      'Screen based on anatomy present, not gender identity. Trans women with neovagina: STIs of neovaginal tissue are possible. Trans men retaining cervix: cervical cancer screening still needed. Symptoms may present differently based on hormone use and surgical status.',
    diagnosticWorkup:
      'Screening guided by sexual practices and anatomy. Trans women: urethral/neovaginal and rectal NAAT, pharyngeal swabs as indicated, HIV and syphilis serology. Trans men with cervix: Pap smear per guidelines (testosterone may cause atrophic changes that can be misinterpreted). Rectal and pharyngeal screening based on exposure. Ensure inclusive lab order language.',
    management:
      'Treat based on infection identified — same antimicrobials as general population. Consider drug interactions with hormone therapy (minimal for most STI treatments). Culturally affirming care: use chosen name/pronouns, avoid assumptions about sexual partners or practices, anatomically specific rather than gendered language.',
    prevention:
      'PrEP is effective and should be offered. TAF/FTC has interactions with estrogen (lower drug levels — clinical significance uncertain). Injectable cabotegravir may be preferred. HPV vaccination. Condom counseling adapted to anatomy (external condoms on neophallus or natal penis, internal condoms for neovagina or frontal/vaginal intercourse).',
    keyPearls: [
      'Screen based on ANATOMY PRESENT, not gender identity.',
      'Trans men retaining a cervix still need cervical cancer screening.',
      'Trans women on estrogen may have altered STI presentations.',
      'Cultural competence and affirming care are prerequisites for effective sexual health services.',
      'PrEP is effective in trans populations — injectable options may improve uptake.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021 — Transgender persons section',
      'WPATH Standards of Care v8 (2022)',
      'Deutsch MB (ed). Guidelines for the Primary and Gender-Affirming Care of Transgender and Gender Nonbinary People, UCSF (2016, updated)',
    ],
  },
  {
    id: 'wsw-sexual-health',
    name: 'Sexual Health for Women Who Have Sex with Women (WSW)',
    category: 'lgbtq-health',
    description:
      'Sexual health considerations for women who have sex with women, addressing the misconception of negligible STI risk and unique screening needs.',
    epidemiology:
      'BV is more prevalent in WSW than in heterosexual women (25-50% vs. 12-22%). HSV-1 and HPV are transmissible between women. HIV transmission between women is possible but rare. Trichomonas and chlamydia transmission documented between female partners. Many WSW also have male partners — sexual orientation does not determine risk.',
    pathophysiology:
      'Transmission occurs through digital-vaginal contact, shared sex toys, oral-genital contact, and tribadism. Vaginal flora can be transmitted between women (concordance of BV-associated organisms in female sexual partners). HPV can be transmitted through genital skin-to-skin contact.',
    clinicalPresentation:
      'Same as general female population. BV symptoms are common. HPV-related cervical dysplasia can occur in women who have NEVER had male partners. HSV-1 genital herpes from oral-genital contact.',
    diagnosticWorkup:
      'Cervical cancer screening per standard guidelines — do NOT skip based on sexual orientation. STI screening based on risk assessment. BV evaluation if symptomatic. HPV screening per age-appropriate guidelines.',
    management:
      'Same as general population for specific infections. Treat female sexual partners for BV (2021 CDC guidelines now recommend partner treatment). Consider shared treatment approaches for recurring BV.',
    prevention:
      'Barrier methods: dental dams for oral sex, gloves for digital contact, condoms on shared sex toys (or do not share/clean between uses). HPV vaccination. Do not assume WSW are low-risk — take an inclusive sexual history.',
    keyPearls: [
      'WSW are NOT immune to STIs — HPV, BV, and HSV are readily transmissible.',
      'Cervical cancer screening should NOT be skipped based on sexual orientation.',
      'Many WSW also have male partners — ask about all partners.',
      'BV concordance between female partners supports partner treatment.',
      'Dental dams and gloves are available barrier methods for WSW.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Marrazzo JM et al. J Infect Dis 2002;185:1307-1313',
    ],
  },

  // =========================================================================
  // SEXUAL DYSFUNCTION
  // =========================================================================
  {
    id: 'erectile-dysfunction',
    name: 'Erectile Dysfunction',
    category: 'sexual-dysfunction',
    description:
      'Persistent inability to achieve or maintain an erection sufficient for satisfactory sexual performance, affecting quality of life and serving as a potential marker for cardiovascular disease.',
    epidemiology:
      'Affects approximately 30 million men in the US. Prevalence increases with age: 40% at age 40, 70% at age 70 (Massachusetts Male Aging Study). Strongly associated with cardiovascular risk factors: diabetes (3x risk), hypertension, hyperlipidemia, smoking, obesity. ED may precede coronary events by 3-5 years ("penile artery as sentinel artery").',
    pathophysiology:
      'Erection requires coordinated vascular, neural, hormonal, and psychogenic input. Parasympathetic stimulation → NO release from endothelium and nerves → activates guanylyl cyclase → cGMP → smooth muscle relaxation → cavernosal arterial dilation and sinusoidal filling → veno-occlusive mechanism (compression of subtunical venules) → erection. PDE5 degrades cGMP. ED results from disruption at any level: vasculogenic (most common), neurogenic, hormonal, psychogenic, medication-related.',
    clinicalPresentation:
      'Inability to achieve or maintain erection. Characterize: onset (gradual = organic, sudden = psychogenic), situational vs. generalized, presence of nocturnal/morning erections (preserved = psychogenic), associated symptoms (decreased libido, ejaculatory dysfunction). Screen for depression and relationship issues.',
    diagnosticWorkup:
      'History and sexual history (IIEF-5 questionnaire). Cardiovascular risk assessment (BP, lipids, glucose/HbA1c, BMI). Fasting testosterone (morning draw) — if low, repeat with LH, FSH, prolactin. PSA if considering testosterone replacement. Specialized: nocturnal penile tumescence (NPT), penile Doppler ultrasound, rarely cavernosography.',
    management:
      'Lifestyle modification: weight loss, exercise, smoking cessation, alcohol moderation. First-line: PDE5 inhibitors (sildenafil, tadalafil, vardenafil, avanafil) — contraindicated with nitrates. Second-line: intracavernosal injection (alprostadil/trimix), vacuum erection device, intraurethral alprostadil (MUSE). Third-line: penile prosthesis implantation. Testosterone replacement ONLY if documented hypogonadism. Psychosexual therapy for psychogenic ED or as adjunct.',
    prevention:
      'Cardiovascular risk factor modification. Regular exercise. Maintain healthy weight. Medication review (beta-blockers, SSRIs, antiandrogens, alcohol, opioids can contribute). Pelvic floor physical therapy may help.',
    keyPearls: [
      'ED may be the first manifestation of cardiovascular disease — screen for risk factors.',
      'Check morning testosterone if low libido accompanies ED.',
      'PDE5 inhibitors are ABSOLUTELY CONTRAINDICATED with nitrates (severe hypotension).',
      'Preserved nocturnal erections suggest psychogenic etiology.',
      'ED has profound impact on quality of life and relationships — address sensitively.',
    ],
    references: [
      'AUA Erectile Dysfunction Guideline 2018 (amended 2023)',
      'EAU Guidelines on Sexual and Reproductive Health 2023',
      'Feldman HA et al. J Urol 1994;151:54-61 (MMAS)',
    ],
  },
  {
    id: 'premature-ejaculation',
    name: 'Premature Ejaculation',
    category: 'sexual-dysfunction',
    description:
      'The most common male sexual dysfunction, characterized by ejaculation occurring sooner than desired, either before or shortly after penetration, causing distress.',
    epidemiology:
      'Prevalence approximately 20-30% of men (self-reported). Two types: lifelong (primary) — since first sexual experiences, and acquired (secondary) — develops after prior normal function. Acquired PE may be associated with ED, prostatitis, thyroid disease, relationship issues.',
    pathophysiology:
      'Lifelong PE: likely neurobiological — serotonin receptor sensitivity (5-HT2C hyposensitivity, 5-HT1A hypersensitivity) in ejaculatory pathways, genetic predisposition. Acquired PE: often secondary to ED (rushing to ejaculate before losing erection), prostatitis, hyperthyroidism, psychological factors (anxiety, relationship issues). Ejaculatory reflex involves sympathetic (T10-L2), somatic (pudendal nerve S2-4), and central pathways.',
    clinicalPresentation:
      'Ejaculation within approximately 1 minute of penetration (lifelong) or significant reduction from prior duration (acquired). Distress or interpersonal difficulty. Assess: intravaginal ejaculatory latency time (IELT), perceived control, distress level, relationship impact. Screen for comorbid ED, depression, anxiety, prostatitis symptoms.',
    diagnosticWorkup:
      'Primarily clinical diagnosis based on history. Validated tools: Premature Ejaculation Diagnostic Tool (PEDT), IELT measurement (stopwatch). Evaluate for contributing factors: ED assessment, thyroid function (TSH), prostate exam if symptoms, psychological assessment.',
    management:
      'Behavioral: start-stop technique, squeeze technique, sensate focus therapy, couples counseling. Pharmacologic: SSRIs (off-label — dapoxetine approved in some countries but not US): paroxetine 10-40 mg daily (most effective SSRI for PE), sertraline 25-200 mg daily. On-demand: clomipramine 25-50 mg 4-24h before sex. Topical: lidocaine-prilocaine cream/spray applied 20-30 min before sex. PDE5 inhibitors if concurrent ED. Combination therapy often most effective.',
    prevention:
      'Address performance anxiety early. Treat underlying conditions (ED, hyperthyroidism). Behavioral techniques can be practiced preventively. Open communication with partner.',
    keyPearls: [
      'Most common male sexual dysfunction — affects 1 in 4-5 men.',
      'Lifelong PE is neurobiological; acquired PE — look for contributing medical/psychological factors.',
      'SSRIs (especially paroxetine) are the most effective pharmacotherapy — off-label use.',
      'Topical anesthetics are effective and have minimal systemic side effects.',
      'Always screen for concurrent ED — they frequently coexist.',
    ],
    references: [
      'ISSM Guidelines on Premature Ejaculation 2014',
      'AUA/SMSNA Premature Ejaculation Guidelines 2020',
      'McMahon CG et al. J Sex Med 2008;5:1590-1606',
    ],
  },
  {
    id: 'female-sexual-dysfunction',
    name: 'Female Sexual Dysfunction',
    category: 'sexual-dysfunction',
    description:
      'Persistent disturbances in sexual desire, arousal, orgasm, or pain that cause personal distress, encompassing several distinct but often overlapping disorders.',
    epidemiology:
      'Affects approximately 40% of women at some point in life. Most common complaint: hypoactive sexual desire disorder (HSDD) — up to 10% prevalence. Female orgasmic disorder: 5-10%. Dyspareunia/vaginismus (now genito-pelvic pain/penetration disorder): 3-18%. Under-recognized and under-treated due to stigma and lack of provider training.',
    pathophysiology:
      'Female sexual response is a complex biopsychosocial process. Desire disorders: multifactorial — hormonal (estrogen, testosterone, DHEA), neurotransmitter imbalance (serotonin inhibitory, dopamine/norepinephrine excitatory), psychological (stress, depression, relationship factors), medication effects (SSRIs, OCP). Arousal disorders: vascular insufficiency, neurogenic, hormonal (estrogen deficiency → vaginal atrophy). Pain: vulvodynia, vestibulodynia, vaginismus (pelvic floor hypertonicity), endometriosis, atrophic vaginitis.',
    clinicalPresentation:
      'HSDD: decreased or absent desire causing distress. Female sexual arousal disorder: inability to achieve/maintain lubrication-swelling. Female orgasmic disorder: absent, delayed, or reduced orgasm. Genito-pelvic pain/penetration disorder: pain with intercourse, fear/anxiety about penetration, pelvic floor tension. Evaluate: onset, context (generalized vs situational), associated factors, relationship satisfaction, medication list.',
    diagnosticWorkup:
      'Comprehensive sexual, medical, surgical, and psychosocial history. Pelvic exam: assess for atrophy, vestibulodynia (Q-tip test), pelvic floor tone, structural abnormalities. Labs: consider TSH, prolactin, testosterone (free and total), DHEA-S, estradiol — especially in postmenopausal or post-oophorectomy women. Validated tools: Female Sexual Function Index (FSFI), Female Sexual Distress Scale.',
    management:
      'HSDD: flibanserin (Addyi — 5-HT1A agonist/5-HT2A antagonist, daily), bremelanotide (Vyleesi — melanocortin receptor agonist, on-demand). Testosterone (off-label) in postmenopausal women with evidence of benefit. CBT/sex therapy. Arousal/lubrication: vaginal estrogen for atrophy, lubricants, ospemifene for dyspareunia. Orgasmic disorder: directed masturbation, CBT, vibrator use. Pain disorders: pelvic floor physical therapy (first-line for vaginismus), vestibulectomy for refractory vestibulodynia, topical lidocaine, vaginal dilators, CBT/mindfulness.',
    prevention:
      'Address risk factors: depression treatment (avoid SSRIs if possible — consider bupropion), relationship counseling, menopausal hormone therapy when indicated, pelvic floor awareness. Provider education to normalize discussing sexual function.',
    keyPearls: [
      'Always ask about sexual function — patients rarely volunteer concerns.',
      'Distress is required for diagnosis — decreased desire without distress is not a disorder.',
      'Flibanserin and bremelanotide are FDA-approved for premenopausal HSDD.',
      'Pelvic floor physical therapy is first-line for genito-pelvic pain/penetration disorder.',
      'Biopsychosocial approach is essential — rarely a single-cause problem.',
    ],
    references: [
      'ISSWSH Consensus on FSD 2016',
      'ACOG Practice Bulletin: Female Sexual Dysfunction 2019',
      'Shifren JL et al. Obstet Gynecol 2008;112:970-978',
    ],
  },

  // =========================================================================
  // ADDITIONAL ENTRIES
  // =========================================================================
  {
    id: 'lymphogranuloma-venereum',
    name: 'Lymphogranuloma Venereum (LGV)',
    category: 'sti-bacterial',
    description:
      'Invasive STI caused by Chlamydia trachomatis serotypes L1, L2, or L3, characterized by genital ulceration followed by inguinal lymphadenopathy, increasingly recognized as a cause of proctitis in MSM.',
    epidemiology:
      'Endemic in parts of Africa, Southeast Asia, India, Caribbean, South America. Outbreaks in MSM in Western countries since 2003, predominantly LGV proctitis. Often co-occurs with HIV. Most cases in high-income countries are rectal LGV in MSM.',
    pathophysiology:
      'L serotypes are more invasive than D-K, penetrating beyond mucosal epithelium to infect macrophages in lymph nodes and submucosa. Produces granulomatous inflammation and necrosis in lymph nodes. Chronic inflammation can cause fibrosis, strictures, and fistulas.',
    clinicalPresentation:
      'Classic inguinal syndrome (heterosexual men): painless genital papule/ulcer → unilateral painful inguinal/femoral lymphadenopathy (buboes) — "groove sign" when nodes above and below inguinal ligament enlarge. Rectal LGV (MSM): bloody mucopurulent rectal discharge, tenesmus, rectal pain — mimics IBD. Tertiary: genital elephantiasis, rectal strictures.',
    diagnosticWorkup:
      'Rectal swab NAAT for C. trachomatis with LGV-specific genotyping (L1-L3). Aspiration of fluctuant buboes (incision and drainage avoided — may cause sinus tracts). Serology: C. trachomatis complement fixation titer >1:64 supports diagnosis.',
    management:
      'Doxycycline 100 mg PO BID x 21 days (extended course compared to non-LGV chlamydia). Alternative: erythromycin 500 mg QID x 21 days. Aspirate fluctuant buboes as needed. Test and treat sexual partners from prior 60 days.',
    prevention:
      'Condom use, partner treatment, screening MSM with proctitis symptoms for LGV-specific C. trachomatis.',
    keyPearls: [
      '21 days of doxycycline (NOT 7 days as for non-LGV chlamydia).',
      'LGV proctitis in MSM can mimic Crohn disease — always test.',
      '"Groove sign" is pathognomonic but uncommon.',
      'Caused by L1, L2, L3 serotypes — same organism as chlamydia but different clinical entity.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'de Vries HJC et al. Sex Transm Infect 2015;91:57-62',
    ],
  },
  {
    id: 'congenital-syphilis',
    name: 'Congenital Syphilis',
    category: 'sti-bacterial',
    description:
      'Vertical transmission of Treponema pallidum from an infected mother to the fetus, causing multisystem disease that is entirely preventable with prenatal screening and treatment.',
    epidemiology:
      'Cases in the US have surged >10-fold since 2012 (nearly 3,800 cases in 2022). Driven by rising syphilis in women of reproductive age, inadequate prenatal care, and substance use. Highest rates in Southern and Western US. Strongly associated with lack of prenatal care.',
    pathophysiology:
      'Transplacental transmission can occur at any gestational age but risk increases with gestational age and maternal spirochetemia. Early maternal syphilis poses highest risk (60-100% transmission). Fetal infection causes placentitis, hepatitis, osteochondritis, and multiorgan inflammation.',
    clinicalPresentation:
      'Early congenital (<2 years): hepatosplenomegaly, jaundice, rhinitis ("snuffles"), maculopapular/vesiculobullous rash, osteochondritis/periostitis, anemia, thrombocytopenia, nephrotic syndrome. Late congenital (>2 years): Hutchinson teeth, interstitial keratitis, 8th nerve deafness (Hutchinson triad), saddle nose, saber shins, Clutton joints. Stillbirth, hydrops fetalis, neonatal death in severe cases.',
    diagnosticWorkup:
      'Maternal: RPR/VDRL at first prenatal visit (mandate), repeat at 28 weeks and delivery in high-risk areas. Neonatal: compare infant RPR to maternal titer (4-fold higher suggests active infection), IgM treponemal antibody, darkfield of lesions, CBC, LFTs, long bone radiographs, CSF analysis (VDRL, cell count, protein), ophthalmologic exam, auditory brainstem response.',
    management:
      'Prevention: treat maternal syphilis with benzathine penicillin G per stage. Maternal treatment ≥30 days before delivery significantly reduces congenital syphilis. Proven/highly probable congenital syphilis: aqueous crystalline penicillin G 50,000 units/kg IV q12h (age <7 days) or q8h (age ≥7 days) x 10 days. Close serologic follow-up.',
    prevention:
      'Universal prenatal syphilis screening. Repeat screening in third trimester and at delivery in high-prevalence areas. Ensure adequate treatment and serologic response before delivery.',
    keyPearls: [
      'Congenital syphilis is 100% preventable with prenatal screening and treatment.',
      'Hutchinson triad: Hutchinson teeth, interstitial keratitis, 8th nerve deafness.',
      'Treatment must be completed ≥30 days before delivery for adequate fetal treatment.',
      'Rising US cases represent a public health crisis driven by inadequate prenatal care.',
      'Penicillin is the ONLY acceptable treatment in pregnancy — desensitize if allergic.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Kimball A et al. MMWR Morb Mortal Wkly Rep 2020;69:661-665',
    ],
  },
  {
    id: 'mycoplasma-genitalium',
    name: 'Mycoplasma genitalium',
    category: 'sti-bacterial',
    description:
      'Emerging STI caused by a cell-wall-deficient bacterium, increasingly recognized as a cause of urethritis, cervicitis, and PID with high rates of antimicrobial resistance.',
    epidemiology:
      'Prevalence 1-4% in general population, 10-35% in STI clinic populations with urethritis/cervicitis. Second most common cause of non-gonococcal urethritis (after chlamydia). Macrolide resistance: 40-80% in some populations. Fluoroquinolone resistance also emerging.',
    pathophysiology:
      'Smallest known self-replicating bacterium. Lacks cell wall (beta-lactams ineffective). Adheres to genital epithelium causing chronic inflammation. Cell-wall absence contributes to immune evasion and chronic infection.',
    clinicalPresentation:
      'Men: non-gonococcal urethritis (often persistent/recurrent after standard treatment), clear urethral discharge, dysuria. Women: cervicitis, urethritis, PID (may contribute to infertility). Often asymptomatic. Can cause proctitis.',
    diagnosticWorkup:
      'NAAT is the only reliable diagnostic method — culture is extremely difficult. FDA-cleared tests: Aptima Mycoplasma genitalium (Hologic) with reflex macrolide resistance testing. Test for M. genitalium in persistent/recurrent urethritis or cervicitis after treatment for chlamydia/gonorrhea.',
    management:
      'Resistance-guided therapy is essential. Macrolide-susceptible: doxycycline 100 mg BID x 7 days (to reduce bacterial load), then azithromycin 1 g day 1, 500 mg days 2-4. Macrolide-resistant: doxycycline 100 mg BID x 7 days, then moxifloxacin 400 mg daily x 7 days. If moxifloxacin also resistant: consult specialist (minocycline, pristinamycin).',
    prevention:
      'Condom use, resistance-guided treatment to reduce treatment failure and resistance selection. Do NOT use azithromycin 1 g single dose (selects resistance).',
    keyPearls: [
      'Test for M. genitalium in recurrent/persistent NGU or cervicitis.',
      'Resistance testing (macrolide resistance markers) should guide therapy.',
      'No cell wall = beta-lactams are useless.',
      'Single-dose azithromycin selects for macrolide resistance — do not use.',
      'Doxycycline pre-treatment reduces bacterial load before targeted therapy.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Jensen JS et al. Clin Microbiol Rev 2017;30:747-768',
    ],
  },
  {
    id: 'pelvic-inflammatory-disease',
    name: 'Pelvic Inflammatory Disease (PID)',
    category: 'sti-bacterial',
    description:
      'Ascending infection of the upper female genital tract (uterus, fallopian tubes, ovaries, peritoneum), most commonly caused by N. gonorrhoeae and C. trachomatis, but often polymicrobial.',
    epidemiology:
      'Approximately 1 million cases/year in the US. Peak incidence in ages 15-25. Major cause of preventable infertility, ectopic pregnancy, and chronic pelvic pain. 10-15% of women with untreated chlamydia develop PID. Each PID episode approximately doubles infertility risk.',
    pathophysiology:
      'Ascending infection from cervix to endometrium (endometritis) and fallopian tubes (salpingitis). Gonorrhea and chlamydia implicated in 50% of cases; remainder involve vaginal anaerobes, M. genitalium, and other organisms. Inflammation causes tubal edema, scarring, and adhesion formation leading to tubal factor infertility and ectopic pregnancy risk.',
    clinicalPresentation:
      'Lower abdominal/pelvic pain (bilateral), abnormal vaginal discharge, abnormal uterine bleeding, dyspareunia, fever. Exam: cervical motion tenderness (chandelier sign), uterine tenderness, adnexal tenderness. Fitz-Hugh-Curtis syndrome: RUQ pain from perihepatitis (violin-string adhesions).',
    diagnosticWorkup:
      'Clinical diagnosis — low threshold for treatment. Minimum criteria: pelvic/lower abdominal pain + one of: cervical motion tenderness, uterine tenderness, adnexal tenderness. Supporting: fever >38.3C, mucopurulent cervical discharge, WBCs on saline wet mount, elevated ESR/CRP, positive NAAT for GC/CT. Imaging: pelvic ultrasound for TOA if suspected. Laparoscopy is gold standard but rarely used for diagnosis.',
    management:
      'Outpatient (mild-moderate): ceftriaxone 500 mg IM x 1 + doxycycline 100 mg PO BID x 14 days + metronidazole 500 mg PO BID x 14 days. Inpatient (severe, TOA, failed outpatient, surgical emergency, pregnancy): cefotetan 2 g IV q12h or cefoxitin 2 g IV q6h + doxycycline 100 mg PO/IV q12h. Transition to PO when clinically improved to complete 14 days. Drain TOA if >7 cm or not responding.',
    prevention:
      'Chlamydia and gonorrhea screening and treatment. Prompt treatment of cervicitis. Partner treatment. Condom use. IUD insertion does not significantly increase PID risk beyond first 3 weeks.',
    keyPearls: [
      'Maintain a low threshold for treatment — missed PID has serious reproductive consequences.',
      'Chandelier sign = cervical motion tenderness (exquisitely painful).',
      'Fitz-Hugh-Curtis: RUQ pain from perihepatitis — can mimic cholecystitis.',
      'Each PID episode doubles the risk of tubal factor infertility.',
      'Doxycycline should always be given ORALLY (even in inpatient regimens) — poor IV bioavailability with pain.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Curry A et al. Am Fam Physician 2019;100:357-364',
    ],
  },
  {
    id: 'epididymitis',
    name: 'Epididymitis',
    category: 'sti-bacterial',
    description:
      'Inflammation of the epididymis, most commonly caused by STIs (chlamydia, gonorrhea) in men <35 or enteric organisms (E. coli) in men >35 or those practicing insertive anal intercourse.',
    epidemiology:
      'Most common cause of acute scrotal pain in adults. In sexually active men <35: C. trachomatis and N. gonorrhoeae most common. In men >35 or MSM practicing insertive anal sex: enteric gram-negative organisms. Can occur at any age.',
    pathophysiology:
      'Retrograde ascent of urethral pathogens through the vas deferens to the epididymis. STI-related: chlamydial/gonococcal urethritis → ascending infection. Enteric organisms: bladder outlet obstruction, urinary tract instrumentation, or insertive anal intercourse. Inflammation causes epididymal swelling, pain, and potential abscess formation.',
    clinicalPresentation:
      'Gradual onset unilateral scrotal pain and swelling. Tender, swollen epididymis (posterior testis). Reactive hydrocele may be present. Prehn sign positive (pain relief with testicular elevation — helps distinguish from torsion, though unreliable). Urethral discharge may be present. Systemic symptoms: fever, dysuria. Must rule out testicular torsion (acute onset, absent cremasteric reflex, nausea/vomiting).',
    diagnosticWorkup:
      'Urethral NAAT for chlamydia/gonorrhea. Urinalysis and urine culture. Color Doppler ultrasound: increased blood flow to epididymis (vs. decreased in torsion). CBC if systemic symptoms. Gram stain of urethral discharge.',
    management:
      'STI-related (<35 or risk factors): ceftriaxone 500 mg IM x 1 + doxycycline 100 mg PO BID x 10 days. Enteric organisms (>35, insertive anal sex, urinary instrumentation): levofloxacin 500 mg PO daily x 10 days. Supportive: NSAIDs, scrotal elevation/support, ice. Treat sexual partners if STI-related.',
    prevention:
      'STI prevention (condoms, screening, partner treatment). Treat urethritis promptly.',
    keyPearls: [
      'Age and sexual history guide empiric treatment: STI pathogens (<35) vs. enteric organisms (>35).',
      'Must rule out testicular torsion — a surgical emergency.',
      'Doppler ultrasound: increased flow (epididymitis) vs. decreased flow (torsion).',
      'Always test for STIs in sexually active men with epididymitis.',
      'MSM who practice insertive anal sex should receive coverage for enteric organisms.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Tracy CR et al. J Urol 2008;179:1802-1807',
    ],
  },
  {
    id: 'hepatitis-a-sexual',
    name: 'Hepatitis A (Sexual Transmission)',
    category: 'sti-viral',
    description:
      'Acute viral hepatitis caused by hepatitis A virus (HAV), transmitted fecal-orally including through oral-anal sexual contact, fully preventable by vaccination.',
    epidemiology:
      'Outbreaks among MSM are well-documented globally. Person-to-person (including sexual) transmission has become the predominant route in recent US outbreaks. Incidence declining overall due to childhood vaccination but outbreaks continue in unvaccinated populations.',
    pathophysiology:
      'HAV is a non-enveloped RNA picornavirus. Fecal-oral transmission — highly infectious. Replicates in hepatocytes, causing immune-mediated liver injury. Does NOT cause chronic infection. Viral shedding in stool peaks 2 weeks before symptom onset.',
    clinicalPresentation:
      'Incubation 15-50 days. Abrupt onset: fever, malaise, nausea, anorexia, abdominal pain, followed by jaundice, dark urine, pale stool. Self-limited (weeks to months). Fulminant hepatitis rare (<1%) but more common in those with underlying liver disease. Children often asymptomatic.',
    diagnosticWorkup:
      'Anti-HAV IgM (acute infection). Anti-HAV IgG (past infection or vaccination — immunity). ALT/AST markedly elevated (often >1000). Bilirubin elevated in jaundiced patients.',
    management:
      'Supportive care. Avoid hepatotoxins (alcohol, acetaminophen in high doses). Hospitalize for severe disease, coagulopathy, or inability to maintain hydration. Fulminant hepatic failure: liver transplant evaluation.',
    prevention:
      'HAV vaccine (2-dose series): recommended for all children, MSM, PWID, persons with chronic liver disease, travelers to endemic areas, and all persons wishing vaccination. Post-exposure prophylaxis: vaccine (healthy age 12 months-40 years) or immune globulin (>40, immunocompromised, chronic liver disease) within 2 weeks of exposure.',
    keyPearls: [
      'Transmitted fecal-orally — sexual transmission via oral-anal contact.',
      'Does NOT cause chronic infection (unlike HBV and HCV).',
      'Vaccination is the best prevention — offer to all MSM and at-risk populations.',
      'Peak infectivity is BEFORE symptom onset — isolation measures important.',
      'Fulminant hepatitis risk increases with underlying liver disease.',
    ],
    references: [
      'CDC HAV Vaccination Recommendations',
      'ACIP Hepatitis A Vaccine Recommendations 2020',
    ],
  },
  {
    id: 'pubic-lice',
    name: 'Pubic Lice (Pediculosis Pubis)',
    category: 'sti-parasitic',
    description:
      'Infestation by Pthirus pubis (crab louse), primarily affecting pubic hair and transmitted through close body contact including sexual activity.',
    epidemiology:
      'Incidence has declined, possibly related to pubic hair grooming trends. Transmitted through close body contact — usually sexual. Can affect eyelashes, axillary hair, and other coarse body hair. Co-infection with other STIs is common — screen for concurrent infections.',
    pathophysiology:
      'Pthirus pubis (distinct from head/body lice) has adapted claw structure for grasping coarse hair. Feeds on blood, causing pruritic bite reactions. Female lays eggs (nits) cemented to hair shafts. Life cycle: egg → nymph → adult over approximately 2-3 weeks.',
    clinicalPresentation:
      'Intense pruritus in pubic area, worse at night. Visible lice (1-2 mm, grayish-brown) and nits (oval, cemented to hair base). Blue-gray macules (maculae ceruleae) at bite sites. Secondary excoriations and bacterial superinfection possible. Eyelash involvement: blepharitis, particularly in children (raises concern for sexual abuse if not from shared towels/bedding).',
    diagnosticWorkup:
      'Visual identification of lice or nits with naked eye or magnification. Dermoscopy can assist. Screen for concurrent STIs (chlamydia, gonorrhea, syphilis, HIV, HBV).',
    management:
      'Permethrin 1% cream rinse: apply to affected area, wash off after 10 minutes, repeat in 7-10 days. Alternative: pyrethrins with piperonyl butoxide. Ivermectin 250 mcg/kg PO repeated in 2 weeks for resistant cases. Eyelash involvement: ophthalmic-grade petrolatum BID x 10 days or ivermectin. Decontaminate clothing/bedding (machine wash hot cycle or seal in bag 72 hours). Treat sexual partners from past month.',
    prevention:
      'Limit close physical contact with infested individuals. Treat all sexual partners. Launder bedding and clothing. Screen for concurrent STIs.',
    keyPearls: [
      'Declining incidence possibly linked to pubic hair removal trends.',
      'Maculae ceruleae (blue-gray macules) are pathognomonic.',
      'Eyelash involvement in a child may suggest sexual abuse.',
      'Always screen for concurrent STIs.',
      'Permethrin is first-line; ivermectin for resistant cases.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Chosidow O. N Engl J Med 2000;342:1492-1497',
    ],
  },
  {
    id: 'scabies-sexual',
    name: 'Scabies (Sexually Transmitted)',
    category: 'sti-parasitic',
    description:
      'Skin infestation by the mite Sarcoptes scabiei var. hominis, transmissible through prolonged skin-to-skin contact including sexual contact.',
    epidemiology:
      'Worldwide prevalence approximately 200 million. Transmitted by prolonged skin contact (15-20 minutes) — sexual and non-sexual. Crusted (Norwegian) scabies in immunocompromised patients is highly contagious. Institutional outbreaks common (nursing homes, shelters).',
    pathophysiology:
      'Female mite burrows into stratum corneum, depositing eggs and fecal pellets (scybala). Type IV hypersensitivity reaction to mite antigens causes intense pruritus (develops 3-6 weeks after initial infestation, sooner with reinfestation). Mite burden: typical scabies 10-15 mites; crusted scabies thousands to millions.',
    clinicalPresentation:
      'Intense pruritus, worse at night. Burrows (pathognomonic — thin, thread-like, serpiginous lines) in web spaces, wrists, elbows, axillae, periumbilical, genitalia, buttocks. Papules, vesicles, excoriations, and eczematous changes. Genital papules/nodules in men. Crusted scabies: hyperkeratotic plaques, less pruritic, immunocompromised.',
    diagnosticWorkup:
      'Clinical diagnosis in classic presentation. Skin scraping with mineral oil and microscopy (mites, eggs, or scybala). Dermoscopy: "delta-wing jet" sign (triangular mite structure at end of burrow). Biopsy rarely needed.',
    management:
      'Permethrin 5% cream: apply from neck down (include head/face in infants and immunocompromised), wash off after 8-14 hours, repeat in 7 days. Ivermectin 200 mcg/kg PO x 1, repeat in 7-14 days (especially useful for crusted scabies or if unable to apply topical). Crusted scabies: combined topical permethrin + oral ivermectin, multiple doses. Treat ALL household members and sexual contacts simultaneously. Launder bedding/clothing in hot water.',
    prevention:
      'Treat all contacts simultaneously to prevent reinfection. Environmental decontamination (mites survive off host up to 72 hours). Screen for concurrent STIs if sexually transmitted.',
    keyPearls: [
      'Burrow is pathognomonic — look in web spaces and wrists.',
      'Itching persists 2-4 weeks AFTER successful treatment (ongoing immune reaction) — does not indicate treatment failure.',
      'Treat ALL contacts simultaneously or reinfestation will occur.',
      'Crusted scabies is a medical emergency in institutional settings (thousands of mites).',
      'Ivermectin is an important alternative, especially for crusted scabies.',
    ],
    references: [
      'CDC STI Treatment Guidelines 2021',
      'Engelman D et al. Lancet 2020;396:53-63',
    ],
  },
];

// ---------------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------------

/** Search entries by query string across name, description, clinical presentation, and key pearls. */
export const searchSexualHealthEntries = (query: string): SexualHealthEntry[] => {
  const q = query.toLowerCase();
  return sexualHealthDatabase.filter(
    (e) =>
      e.name.toLowerCase().includes(q) ||
      e.description.toLowerCase().includes(q) ||
      e.clinicalPresentation.toLowerCase().includes(q) ||
      e.keyPearls.some((p) => p.toLowerCase().includes(q)),
  );
};

/** Filter entries by one or more categories. */
export const filterByCategory = (categories: SexualHealthCategory[]): SexualHealthEntry[] =>
  sexualHealthDatabase.filter((e) => categories.includes(e.category));

/** Retrieve a single entry by its id, or undefined if not found. */
export const getEntryById = (id: string): SexualHealthEntry | undefined =>
  sexualHealthDatabase.find((e) => e.id === id);
