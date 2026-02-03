/**
 * Syphilis and HIV - Reproductive System
 *
 * Comprehensive content on syphilis and HIV in reproductive health.
 */

import { EducationalContent } from '../../../types';

export const syphilisHiv: EducationalContent = {
  id: 'reproductive-syphilis-hiv',
  type: 'condition',
  name: 'Syphilis and HIV',
  alternateNames: ['Treponema pallidum', 'Human Immunodeficiency Virus'],

  levels: {
    1: {
      level: 1,
      summary: 'Syphilis and HIV are serious sexually transmitted infections. Syphilis can cause long-term damage if untreated. HIV weakens the immune system but can be managed with medication. Both are preventable and treatable.',
      explanation: `## Syphilis and HIV

### Syphilis

Syphilis is a bacterial infection that can cause serious health problems if not treated.

**How It Spreads:**
- Through sexual contact
- From mother to baby during pregnancy
- Through broken skin

**Stages:**
- Primary: Sore (chancre) at infection site
- Secondary: Rash, fever, swollen glands
- Latent: No symptoms but still infected
- Tertiary: Severe organ damage

**Treatment:**
- Antibiotics cure syphilis
- Penicillin is preferred
- Early treatment prevents complications

### HIV

HIV (Human Immunodeficiency Virus) attacks the immune system.

**How It Spreads:**
- Unprotected sex
- Sharing needles
- Mother to child during pregnancy, birth, or breastfeeding

**Not Spread By:**
- Hugging, shaking hands
- Sharing food
- Toilet seats
- Mosquito bites

**Treatment:**
- Antiretroviral therapy (ART)
- Cannot cure but controls virus
- With treatment, people live long, healthy lives
- Prevents transmission to others

**Prevention:**
- Condoms
- PrEP (pre-exposure prophylaxis)
- Never sharing needles
- Treatment as prevention

### Why Testing Matters

- Many people do not know they are infected
- Early treatment prevents complications
- Reduces spread to others
- Free and confidential testing available

### Pregnancy

- Both can pass to baby
- Testing is routine in pregnancy
- Treatment protects baby
- HIV medication prevents transmission to baby`,
      keyTerms: [
        { term: 'syphilis', definition: 'Bacterial STI caused by Treponema pallidum' },
        { term: 'HIV', definition: 'Human immunodeficiency virus; attacks immune system' },
        { term: 'chancre', definition: 'Painless sore of primary syphilis' },
        { term: 'ART', definition: 'Antiretroviral therapy; treatment for HIV' },
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; medication to prevent HIV' },
      ],
      analogies: [
        'HIV is like a thief that steals the keys to the body\'s security system, making it vulnerable to infections.',
      ],
      examples: [
        'Syphilis cases have increased significantly in the US over the past decade',
        'With proper treatment, HIV-positive mothers have less than 1% chance of transmitting HIV to their babies',
        'People with HIV who take ART and maintain undetectable viral load cannot sexually transmit HIV',
      ],
      patientCounselingPoints: [
        'Everyone should get tested for HIV at least once',
        'Syphilis is curable with antibiotics',
        'People with HIV on treatment can live long, healthy lives',
        'PrEP is over 99% effective at preventing HIV when taken correctly',
      ],
    },
    2: {
      level: 2,
      summary: 'Syphilis progresses through distinct stages with characteristic findings. HIV diagnosis requires antibody and/or antigen testing. Modern antiretroviral therapy transforms HIV into a manageable chronic condition. Co-infection requires careful management.',
      explanation: `## Detailed Overview

### Syphilis

**Epidemiology:**
- Increasing incidence globally
- Disproportionately affects MSM
- Congenital syphilis increasing
- HIV co-infection common

**Microbiology:**
- Treponema pallidum
- Spirochete bacterium
- Cannot be cultured
- Microscopy (darkfield)

**Stages and Clinical Features:**

Primary:
- Chancre at inoculation site
- Painless, indurated
- Regional lymphadenopathy
- Heals spontaneously in 3-6 weeks

Secondary:
- Rash (palms/soles characteristic)
- Condyloma lata (moist, flat lesions)
- Mucous patches
- Generalized lymphadenopathy
- Fever, malaise

Latent:
- Early: <1 year
- Late: >1 year
- No symptoms
- Seroreactive

Tertiary:
- Gummas (soft tissue destruction)
- Cardiovascular (aortitis)
- Neurosyphilis
- Ocular syphilis

**Diagnosis:**

Non-treponemal tests:
- RPR (Rapid Plasma Reagin)
- VDRL (Venereal Disease Research Laboratory)
- Quantitative
- Monitor treatment response

Treponemal tests:
- FTA-ABS
- TP-PA
- EIA/CIA
- Confirmatory

**Reverse Algorithm:**
- Start with treponemal EIA
- Confirm with RPR
- Discordant results need TP-PA

**Treatment:**

Primary, secondary, early latent:
- Benzathine penicillin G 2.4 million units IM x 1

Late latent, unknown duration:
- Benzathine penicillin G 2.4 million units IM weekly x 3

Neurosyphilis:
- Aqueous crystalline penicillin G 18-24 million units IV daily x 10-14 days

Penicillin allergy:
- Doxycycline 100 mg PO BID x 14 days (non-pregnant)
- Desensitization in pregnancy

**Follow-up:**
- RPR at 6 and 12 months
- 4-fold decline expected
- Retreatment if inadequate response

### HIV

**Epidemiology:**
- 1.2 million in US living with HIV
- 34,000 new infections annually
- Undiagnosed: 13%
- Disparities by race/ethnicity

**Pathogenesis:**
- CD4+ T-cell infection
- Immune system destruction
- Opportunistic infections
- AIDS-defining conditions

**Diagnosis:**

4th generation immunoassay:
- HIV-1/2 antibodies
- p24 antigen
- Window period: 18-45 days

HIV-1/HIV-2 differentiation:
- Distinguishes types

NAAT if indeterminate:
- Detects viral RNA
- Shortest window period

**Staging:**

CD4 count:
- >500: Normal
- 200-500: Moderate
- <200: AIDS-defining

Viral load:
- Undetectable: <20-50 copies/mL
- Goal of treatment

**Treatment:**

ART (Antiretroviral Therapy):
- 2 NRTIs + INSTI (preferred)
- Biktarvy, Triumeq, Dovato
- Single tablet regimens
- Initiate regardless of CD4

Goals:
- Viral suppression
- Immune restoration
- Prevent transmission
- Normal life expectancy

**Prevention:**

PrEP (Pre-Exposure Prophylaxis):
- TDF/FTC (Truvada) or TAF/FTC (Descovy)
- Daily dosing
- >99% effective
- For HIV-negative at risk

PEP (Post-Exposure Prophylaxis):
- Within 72 hours of exposure
- 28-day course
- TDF/FTC + raltegravir or dolutegravir

Treatment as Prevention:
- U=U (Undetectable = Untransmittable)
- Viral suppression prevents sexual transmission

### Syphilis and HIV Co-infection

**Clinical Impact:**
- Atypical presentation
- Higher RPR titers
- Faster progression
- Increased transmission risk

**Management:**
- Same syphilis treatment
- Consider CSF exam
- More frequent monitoring
- Evaluate for other STIs

### Pregnancy Considerations

**Syphilis:**
- Universal screening at first prenatal visit
- Repeat at 28 weeks if high risk
- Treat promptly
- Penicillin only
- Jarisch-Herxheimer reaction risk

**HIV:**
- Universal opt-out screening
- Immediate ART
- Viral suppression by delivery
- Cesarean if high viral load
- No breastfeeding in US
- Pediatric prophylaxis`,
      keyTerms: [
        { term: 'Jarisch-Herxheimer reaction', definition: 'Fever and chills after starting syphilis treatment' },
        { term: 'condyloma lata', definition: 'Broad, flat lesions of secondary syphilis' },
        { term: 'gummas', definition: 'Destructive lesions of tertiary syphilis' },
        { term: 'opportunistic infection', definition: 'Infection taking advantage of weakened immune system' },
        { term: 'viral suppression', definition: 'Reducing viral load to undetectable levels with ART' },
      ],
      clinicalNotes: 'The Jarisch-Herxheimer reaction occurs in approximately 50% of patients treated for primary syphilis and up to 90% with secondary syphilis. It is more common and severe in pregnancy and can cause fetal distress. Pregnant patients should be advised and monitored.',
    },
    3: {
      level: 3,
      summary: 'Syphilis and HIV management requires screening at-risk populations, treating according to stage, and monitoring treatment response. Neurosyphilis requires specialized CSF evaluation. HIV care focuses on rapid ART initiation and maintaining viral suppression.',
      explanation: `## Clinical Management

### Syphilis Complications

**Neurosyphilis:**
- Any stage can involve CNS
- Asymptomatic or symptomatic
- Cranial nerve palsies
- Meningitis
- General paresis
- Tabes dorsalis

Diagnosis:
- CSF exam (pleocytosis, elevated protein)
- CSF-VDRL specific but insensitive
- FTA-ABS sensitive
- Clinical judgment important

Treatment:
- Aqueous penicillin G IV x 10-14 days
- Alternative: procaine penicillin + probenecid
- Follow-up CSF at 6 months

**Ocular Syphilis:**
- Can occur any stage
- Uveitis, optic neuritis
- Treat as neurosyphilis
- Urgent ophthalmology

**Otosyphilis:**
- Hearing loss, tinnitus, vertigo
- Treat as neurosyphilis
- Hearing may not recover

**Congenital Syphilis:**
- Preventable with maternal treatment
- Increasing rates
- Stillbirth, neonatal death
- Early: hepatosplenomegaly, rash
- Late: bone/teeth abnormalities

### HIV Management

**Initial Evaluation:**
- CD4 count
- Viral load
- HIV genotype (resistance)
- HLA-B*5701 (if considering abacavir)
- HBV, HCV screening
- TB screening
- Pregnancy test
- STI screening
- Immunizations

**Opportunistic Infection Prophylaxis:**

CD4 <200:
- TMP-SMX for PCP

CD4 <50:
- Azithromycin for MAC

Toxoplasma IgG+ and CD4 <100:
- TMP-SMX

**ART Side Effects:**
- GI upset
- Lipodystrophy (older agents)
- Renal toxicity (tenofovir)
- Bone loss (tenofovir)
- CNS effects (efavirenz)

**Drug Interactions:**
- CYP3A4 interactions
- Contraceptive interactions
- Statin interactions
- Check before prescribing

### Special Populations

**Transgender Persons:**
- Gender-affirming hormone interactions
- Dosing considerations
- Supportive care

**Adolescents:**
- Confidential care
- Assent/consent laws
- Disclosure support
- Adherence challenges

**Older Adults:**
- Comorbidities
- Drug interactions
- Frailty
- Polypharmacy

**Incarcervated Persons:**
- High prevalence
- Screening on entry
- Treatment
- Linkage to care on release

### Adherence Support

**Barriers:**
- Stigma
- Depression/substance use
- Side effects
- Cost
- Complexity

**Strategies:**
- Simplified regimens
- Long-acting injectables
- Pharmacy support
- Text reminders
- Peer support

**Long-Acting Injectable ART:**
- Cabotegravir + rilpivirine
- Monthly or every 2 months
- IM injections
- Stable patients
- Improves adherence

### Prevention Strategies

**Syphilis:**
- Screening high-risk
- Prompt treatment
- Partner notification
- Condoms (partial protection)

**HIV:**
- Condoms
- PrEP for at-risk
- PEP after exposure
- Universal screening
- Treatment as prevention
- Harm reduction (needle exchange)

**Combination Approaches:**
- Address social determinants
- Structural interventions
- Behavioral counseling
- Biomedical prevention`,
      keyTerms: [
        { term: 'CSF', definition: 'Cerebrospinal fluid' },
        { term: 'pleocytosis', definition: 'Increased white blood cells in CSF' },
        { term: 'uveal', definition: 'Related to the middle layer of the eye' },
        { term: 'lipodystrophy', definition: 'Abnormal fat distribution' },
        { term: 'harm reduction', definition: 'Policies to reduce negative consequences of drug use' },
      ],
      clinicalNotes: 'All patients with syphilis should be tested for HIV due to high co-infection rates. Conversely, all HIV-positive patients should be screened regularly for syphilis as both infections can increase transmission of the other.',
    },
    4: {
      level: 4,
      summary: 'Advanced management includes addressing treatment failures, managing complex co-infections, and providing comprehensive care for people living with HIV. Pre-exposure prophylaxis has transformed HIV prevention.',
      explanation: `## Advanced Topics

### Syphilis Treatment Failures

**Criteria:**
- Persistent or recurring symptoms
- Four-fold increase in RPR
- Less than four-fold decrease after treatment

**Causes:**
- Re-infection
- Inadequate treatment
- Immunocompromise
- CNS involvement
- Resistant organism (rare)

**Evaluation:**
- CSF exam
- HIV test
- Re-treatment
- Longer follow-up

### HIV Drug Resistance

**Types:**
- Transmitted resistance
- Acquired resistance

**Testing:**
- Genotype before starting ART
- Phenotype if complex
- ULTRA for low-level resistance

**Management:**
- Consider resistance results
- Use at least 2 active agents
- Salvage regimens
- New agents (fostemsavir, ibalizumab)

### Latent TB and HIV

**Screening:**
- IGRA or TST
- Baseline and annually
- Higher risk with HIV

**Treatment:**
- Isoniazid + rifapentine weekly x 3 months (preferred)
- Rifamycin interactions with ART
- Timing with ART initiation

### Hepatitis Co-infection

**HBV:**
- Screen all HIV patients
- Vaccinate if non-immune
- TDF or TAF in ART regimen treats both
- Do not stop TDF/TAF abruptly (hepatic flare)

**HCV:**
- Screen all HIV patients
- Treat all (pan-genotypic regimens)
- Glecaprevir/pibrentasvir or sofosbuvir/velpatasvir
- Drug interactions minimal
- Cure >95%

### Reproductive Health

**Contraception:**
- All methods safe with HIV
- Drug interactions (rifamycins, some ARVs)
- Preferences respected

**Fertility:**
- Sperm washing for discordant couples
- U=U for conception
- Preconception optimization
- PMTCT protocols

**Pregnancy Planning:**
- Viral suppression before conception
- Preconception counseling
- Safe conception methods
- PMTCT

### Cancer Screening

**HIV-Associated Cancers:**
- Cervical (HPV-related)
- Anal (HPV-related)
- Non-Hodgkin lymphoma
- Kaposi sarcoma

**Screening:**
- Cervical: annual Pap (or per guidelines)
- Anal: consider in high-risk
- HPV vaccination if not done

### Aging with HIV

**Accelerated Aging:**
- Cardiovascular disease
- Bone disease
- Cognitive changes
- Frailty
- Polypharmacy

**Management:**
- Cardiovascular risk reduction
- Bone health (vitamin D, calcium)
- Cancer screening
- Cognitive screening
- Comprehensive geriatric assessment

### Quality Metrics

**HIV Care:**
- Viral suppression rate
- Retention in care
- ART initiation time
- CD4 monitoring
- Screening completion

**Syphilis:**
- Screening rates
- Treatment completion
- Partner notification
- Congenital syphilis rate`,
      keyTerms: [
        { term: 'genotype', definition: 'Genetic testing for drug resistance mutations' },
        { term: 'phenotype', definition: 'Testing virus growth in presence of drugs' },
        { term: 'IGRA', definition: 'Interferon-gamma release assay for TB' },
        { term: 'sperm washing', definition: 'Processing semen to remove HIV for conception' },
        { term: 'discordant', definition: 'Couple where one partner has HIV and one does not' },
      ],
      clinicalNotes: 'Tenofovir alafenamide (TAF) has replaced tenofovir disoproxil fumarate (TDF) in many ART regimens due to reduced renal and bone toxicity while maintaining efficacy. TAF should be used with caution with ritonavir/cobicistat as levels increase.',
    },
    5:{
      level: 5,
      summary: 'Expert care involves managing complex cases, contributing to elimination goals, and addressing health equity. Research into HIV cure and vaccines continues while optimizing prevention and treatment strategies.',
      explanation: `## Expert Topics

### HIV Cure Research

**Types:**
- Sterilizing cure (eradicate all virus)
- Functional cure (control without ART)

**Approaches:**
- Shock and kill (latency reversal)
- Block and lock (maintain latency)
- Gene therapy (CCR5 deletion)
- Stem cell transplant (Berlin, London patients)

**Clinical Trials:**
- Early phase
- Long way from implementation
- Safety concerns

### Vaccine Development

**Challenges:**
- Virus variability
- Immune evasion
- No natural immunity

**Approaches:**
- mRNA vaccines
- Broadly neutralizing antibodies
- Mosaic immunogens
- Step trial lessons

### Long-Acting Prevention

**Cabotegravir PrEP:**
- Injectable
- Every 2 months
- Non-inferior to oral
- Adherence advantage
- FDA approved

**Implants:**
- Research stage
- Yearly duration
- Novel delivery

### Global Health

**HIV:**
- 38 million living with HIV globally
- 1.5 million new infections annually
- 690,000 deaths
- 67% on ART
- 95-95-95 targets

**Syphilis:**
- 6 million cases annually
- Congenital syphilis: 600,000
- Elimination goal
- Vaccine development

**Disparities:**
- Sub-Saharan Africa
- Key populations
- Women and girls
- Children
- Resource limitations

**Interventions:**
- Treatment access
- Prevention programs
- Task-shifting
- Community engagement
- Health systems strengthening

### Health Equity

**Disparities:**
- Racial/ethnic minorities
- Geographic
- Socioeconomic
- Sexual/gender minorities
- Incarcerated

**Addressing:**
- Culturally competent care
- Social determinants
- Transportation
- Insurance coverage
- Stigma reduction

### Future Directions

**Technology:**
- Telemedicine
- Apps for adherence
- Home testing
- Virtual support groups
- AI for risk prediction

**Policy:**
- Decriminalization
- Funding for programs
- Insurance parity
- Privacy protection
- Anti-discrimination

**Integration:**
- Primary care
- Mental health
- Substance use
- Housing services
- Food security

### Education and Advocacy

**Provider Education:**
- Updates in treatment
- Prevention
- Stigma
- Cultural competence

**Patient Empowerment:**
- Knowledge
- Self-advocacy
- Peer support
- Shared decision-making

**Advocacy:**
- Funding
- Policy change
- Stigma reduction
- Human rights`,
      keyTerms: [
        { term: 'latency reversal', definition: 'Activating dormant HIV to eliminate it' },
        { term: 'broadly neutralizing antibodies', definition: 'Antibodies effective against many HIV strains' },
        { term: 'mosaic immunogens', definition: 'Vaccine antigens covering many HIV variants' },
        { term: 'task-shifting', definition: 'Delegating care to less specialized workers' },
        { term: '95-95-95 targets', definition: 'UNAIDS goal: 95% diagnosed, 95% on ART, 95% suppressed' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Syphilis and HIV co-infection is common. All patients diagnosed with syphilis should be tested for HIV, and all HIV-positive patients should be screened regularly for syphilis.

2. The Jarisch-Herxheimer reaction can occur after syphilis treatment, especially in early syphilis and pregnancy. It is more common with primary (50%) and secondary (90%) syphilis.

3. Neurosyphilis can occur at any stage of syphilis, not just tertiary. Ocular and otologic syphilis should be treated as neurosyphilis with the 10-14 day IV penicillin regimen.

4. U=U (Undetectable = Untransmittable) is a key message: people with HIV who maintain an undetectable viral load through ART cannot sexually transmit HIV to others.

5. Long-acting injectable cabotegravir for PrEP provides an important option for HIV prevention with dosing every 2 months, improving adherence compared to daily oral PrEP.`,
    },
  },

  media: [
    {
      id: 'syphilis-stages',
      type: 'diagram',
      filename: 'syphilis-stages.svg',
      title: 'Stages of Syphilis',
      description: 'Primary, secondary, latent, and tertiary syphilis',
    },
  ],

  citations: [
    {
      id: 'cdc-syphilis',
      type: 'article',
      title: 'Sexually Transmitted Infections Treatment Guidelines: Syphilis',
      authors: ['CDC'],
      source: 'MMWR',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-chlamydia-gonorrhea', targetType: 'condition', relationship: 'related', label: 'Chlamydia and Gonorrhea' },
    { targetId: 'reproductive-hpv-pathology', targetType: 'condition', relationship: 'related', label: 'HPV Pathology' },
  ],

  tags: {
    systems: ['reproductive', 'immune'],
    topics: ['pathology', 'infectious-disease', 'public-health'],
    keywords: ['syphilis', 'HIV', 'ART', 'PrEP', 'STI'],
    clinicalRelevance: 'critical',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default syphilisHiv;
