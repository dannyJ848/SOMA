/**
 * Infectious Disease Screening Guidelines
 *
 * Comprehensive infectious disease screening recommendations for
 * asymptomatic adults based on CDC and USPSTF guidelines.
 */

import { EducationalContent } from '../../types';

export const INFECTIOUS_SCREENING: EducationalContent = {
  id: 'concept-infectious-screening',
  type: 'concept',
  name: 'Infectious Disease Screening Guidelines',
  alternateNames: ['Infectious disease screening', 'Infection screening', 'Communicable disease testing'],

  levels: {
    1: {
      level: 1,
      summary: 'Infectious disease screening finds hidden infections that can harm your health or spread to others, even when you feel fine.',
      explanation: `Many serious infections can be present without symptoms. Screening finds these infections early so you can get treatment and protect others.

**Common Infectious Disease Screenings:**

**HIV (Human Immunodeficiency Virus)**
- Attacks immune system
- Everyone should be tested at least once
- People at higher risk need testing more often

**Hepatitis B and C**
- Viruses that damage the liver
- Baby boomers (born 1945-1965) should test for Hepatitis C
- Can cause serious liver problems if untreated

**Sexually Transmitted Infections (STIs)**
- Chlamydia and gonorrhea: Common in young adults
- Syphilis: Can affect whole body if untreated
- Sexually active adults should be tested regularly

**Tuberculosis (TB)**
- Bacterial infection in lungs
- Some people have "latent" TB (no symptoms)
- Can become active later and spread

**Who Should Be Screened:**
- Adults 18-79: HIV at least once
- Born 1945-1965: Hepatitis C once
- Sexually active: STI testing based on risk
- Healthcare workers: Various screenings
- Pregnant women: Multiple screenings

**Why Screen:**
- Early treatment works better
- Prevent spreading to others
- Prevent long-term complications
- Peace of mind`,
      keyTerms: [
        { term: 'HIV', definition: 'Human immunodeficiency virus; attacks immune system' },
        { term: 'hepatitis', definition: 'Inflammation of the liver, usually from viral infection' },
        { term: 'STI', definition: 'Sexually transmitted infection; infections spread through sexual contact' },
        { term: 'latent TB', definition: 'Tuberculosis bacteria in body but not causing symptoms yet' },
        { term: 'screening', definition: 'Testing for disease in people without symptoms' },
      ],
      analogies: [
        'Infectious disease screening is like checking for termites - you want to find them before they cause visible damage.',
        'Think of screening like airport security - catching potential problems before they cause harm.',
      ],
      examples: [
        'A routine HIV test caught the infection early. John started treatment and stayed healthy.',
        'Sarah was born in 1960 and had Hepatitis C without knowing. Treatment cured the infection.',
      ],
    },
    2: {
      level: 2,
      summary: 'Routine infectious disease screening includes one-time HIV testing for all adults, Hepatitis C testing for baby boomers, and risk-based STI and tuberculosis screening to enable early treatment and prevent transmission.',
      explanation: `**HIV Screening (USPSTF Grade A):**
- All adults 15-65: Test at least once
- All pregnant women: Test each pregnancy
- Risk factors: Repeat testing at least annually
- High risk: Every 3-6 months

*High-Risk Factors:*
- Men who have sex with men
- Injection drug use
- Multiple sex partners
- Sex workers
- Sex partners of HIV-positive individuals
- Other STIs
- Exchange of sex for drugs/money

**Hepatitis C Screening:**
- Born 1945-1965: One-time testing (Grade B)
- Other risk factors: One-time testing regardless of age
- Risk factors: Injection drug use (even once), incarceration, blood transfusion before 1992, dialysis, born to HCV+ mother, tattoos in unregulated setting
- Repeat annually if ongoing risk (injection drug use)

**Hepatitis B Screening:**
- Born in regions with prevalence ≥2% (Asia, Africa, Eastern Europe, parts of South America)
- US-born not vaccinated whose parents born in high-prevalence regions
- Injection drug users
- Men who have sex with men
- Dialysis patients
- Pregnant women (each pregnancy)

**STI Screening:**

*Chlamydia/Gonorrhea:*
- Women <25: Annual screening
- Women ≥25 with risk factors: Annual
- Men who have sex with men: Annual (more frequent if high risk)
- Pharyngeal, rectal, urethral sites for MSM

*Syphilis:*
- Men who have sex with men: Annual (more frequent if high risk)
- Pregnant women: First prenatal visit, again at 28 weeks if high risk
- People with HIV: At least annually
- Others with risk factors

**Tuberculosis Screening:**
- Healthcare workers: Baseline then periodic
- Incarcerated individuals
- Homeless populations
- Immigrants from high-prevalence countries
- Close contacts of active TB cases
- Immunosuppressed patients`,
      keyTerms: [
        { term: 'baby boomers', definition: 'People born between 1945-1965; high Hepatitis C prevalence' },
        { term: 'MSM', definition: 'Men who have sex with men' },
        { term: 'high prevalence', definition: 'Higher rate of disease in specific population or area' },
        { term: 'immunosuppressed', definition: 'Weakened immune system' },
      ],
      analogies: [],
    },
    3: {
      level: 3,
      summary: 'Infectious disease screening integrates risk assessment, appropriate test selection, interpretation of serologic markers, and understanding of window periods to optimize detection and early treatment.',
      explanation: `**HIV Testing Considerations:**

*Test Types:*
- Antigen/antibody combination lab tests: Detect HIV 18-45 days after exposure
- Antibody tests: Detect HIV 23-90 days after exposure
- Rapid tests: Point-of-care, results in minutes
- Self-testing: Oral fluid or blood fingerstick

*Window Period:*
- Time between infection and test detection
- Varies by test type
- Retest if recent exposure

*Confirmatory Testing:*
- Positive rapid tests need confirmatory lab test
- Differentiate HIV-1 vs HIV-2
- Baseline labs for treatment (viral load, CD4, resistance)

**Hepatitis C Testing:**
- HCV antibody: Screening test
- If positive: HCV RNA PCR for active infection
- Acute vs chronic: Recent infection vs >6 months
- Genotype: Guides treatment

**STI Testing Nuances:**

*Chlamydia/Gonorrhea:*
- NAAT (nucleic acid amplification test) from urine or swab
- More sensitive than culture
- Test extragenital sites in MSM (pharyngeal, rectal)

*Syphilis:*
- Serologic testing: RPR/VDRL (screening), FTA-ABS/TPPA (confirmatory)
- RPR titer correlates with disease activity
- Prozone phenomenon: False negative with very high titer

**TB Screening:**

*Latent TB Infection (LTBI):*
- IGRA (interferon-gamma release assay): Preferred for most, BCG-vaccinated
- TST (tubercin skin test/PPD): Alternative
- Positive screening requires chest X-ray to rule out active disease

*Diagnostic Approach:*
1. Screen with IGRA or TST
2. If positive: Chest X-ray
3. If X-ray abnormal: Sputum for AFB smear/culture

**Prenatal Screening:**
- HIV: Each pregnancy
- Hepatitis B: Each pregnancy
- Syphilis: First visit, 28 weeks if high risk, delivery if no prenatal care
- Gonorrhea/Chlamydia: First trimester, third trimester if high risk
- Hepatitis C: At first prenatal visit if risk factors`,
      keyTerms: [
        { term: 'window period', definition: 'Time between infection and when test can detect infection' },
        { term: 'NAAT', definition: 'Nucleic acid amplification test; highly sensitive molecular test' },
        { term: 'LTBI', definition: 'Latent tuberculosis infection; bacteria present but not active' },
        { term: 'IGRA', definition: 'Interferon-gamma release assay; blood test for TB' },
        { term: 'prozone', definition: 'False negative due to very high antibody levels blocking reaction' },
      ],
      analogies: [],
      clinicalNotes: 'Understand window periods. Confirm positive rapid tests. Test extragenital sites in MSM. Use IGRA for TB in BCG-vaccinated. Screen all pregnant women.',
    },
    4: {
      level: 4,
      summary: 'Advanced infectious disease screening incorporates pre-exposure prophylaxis (PrEP) management, understanding of drug resistance, screening in special populations, and emerging infectious threats.',
      explanation: `**HIV Prevention: PrEP and PEP:**

*Pre-Exposure Prophylaxis (PrEP):*
- Daily or on-demand medication to prevent HIV
- Indicated for high-risk individuals
- Screening required every 3 months: HIV, STIs, kidney function
- Options: Daily emtricitabine/tenofovir, cabotegravir (injectable)

*Post-Exposure Prophylaxis (PEP):*
- 28-day regimen after potential HIV exposure
- Start within 36 hours, ideally sooner
- HIV testing at baseline, 6 weeks, 3 months

**Antibiotic Resistance Screening:**

*MRSA (Methicillin-Resistant S. aureus):*
- Screen in high-risk settings (ICU, dialysis)
- Decolonization protocol
- Nasal swab testing

*MDR TB Screening:*
- Drug susceptibility testing
- Directly observed therapy (DOT)
- Contact investigation

**Special Populations:**

*Men Who Have Sex with Men:*
- Comprehensive STI screening (pharyngeal, rectal, urethral)
- HIV PrEP consideration
- Meningococcal vaccination
- Hepatitis A/B vaccination
- MPX (monkeypox) vaccination if at risk

*Sex Workers:*
- Frequent STI screening (quarterly or monthly)
- HIV PrEP
- Hepatitis B vaccination
- Condom distribution programs

*Incarcerated Individuals:*
- Mandatory HIV, syphilis, TB screening
- Hepatitis B vaccination
- STI treatment and prevention
- Linkage to care upon release

*Immigrants/Refugees:*
- TB screening (IGRA, chest X-ray)
- Hepatitis B screening
- Intestinal parasites
- Vaccination catch-up

**Emerging Infectious Threats:**

*COVID-19:*
- Testing when symptomatic
- Pre-procedure testing in some settings
- Home antigen tests available

*Monkeypox (Mpox):*
- Sexual health clinic screening
- Orthopoxvirus PCR
- Ring vaccination strategy

**Sexual Violence Victims:**
- Comprehensive STI panel
- HIV prophylaxis (PEP)
- Emergency contraception
- Follow-up testing

**Occupational Exposures:**
- Healthcare worker needle stick: HIV, HCV, HBV testing of source, PEP as indicated
- Body fluid exposure protocols`,
      keyTerms: [
        { term: 'PrEP', definition: 'Pre-exposure prophylaxis; medication to prevent HIV infection' },
        { term: 'PEP', definition: 'Post-exposure prophylaxis; medication after exposure to prevent infection' },
        { term: 'MRSA', definition: 'Methicillin-resistant Staphylococcus aureus; antibiotic-resistant bacteria' },
        { term: 'MDR TB', definition: 'Multidrug-resistant tuberculosis' },
        { term: 'DOT', definition: 'Directly observed therapy; watching patient take medications' },
      ],
      analogies: [],
      clinicalNotes: 'Screen PrEP users quarterly. Use extragenital STI testing in MSM. Start PEP within 36 hours. Understand drug resistance patterns. Screen special populations appropriately.',
    },
    5: {
      level: 5,
      summary: 'Contemporary infectious disease screening integrates molecular diagnostics, point-of-care testing, AI-enhanced surveillance, and public health implementation strategies while addressing global health challenges.',
      explanation: `**Molecular Diagnostics Revolution:**

*Next-Generation Sequencing:*
- Metagenomic sequencing for unknown pathogens
- Whole genome sequencing for outbreak investigation
- Resistance gene detection
- Strain typing and surveillance

*CRISPR-Based Diagnostics:*
- SHERLOCK and DETECTR platforms
- Rapid, point-of-care molecular testing
- COVID-19 applications
- Future: Home testing for multiple pathogens

*Digital Health Technologies:*
- Home testing kits with telehealth follow-up
- Mobile app result interpretation
- STI home testing expansion
- Digital adherence monitoring

**Artificial Intelligence Applications:**

*Diagnostic AI:*
- Image recognition for skin infections
- Symptom checker algorithms
- Chest X-ray interpretation (TB, pneumonia)
- Predictive modeling of outbreaks

*Surveillance AI:*
- Wastewater surveillance for pathogens
- Social media trend analysis
- Hospital prediction models
- Early warning systems

**Global Health Considerations:**

*WHO Screening Priorities:*
- HIV: 95-95-95 goals (diagnose, treat, suppress)
- Hepatitis C: Elimination by 2030
- TB: End TB strategy
- STIs: Global action plan

*Resource-Limited Settings:*
- Point-of-care test prioritization
- Task-shifting to community health workers
- Mobile clinic screening programs
- Syndromic management where testing unavailable

**Elimination Strategies:**

*Hepatitis C Elimination:*
- Micro-elimination approaches
- Birth cohort screening
- Prison/jail screening
- Harm reduction programs
- Direct-acting antivirals enable cure

*HIV Epidemic Control:*
- Treatment as prevention
- U=U (undetectable = untransmittable)
- Combination prevention
- Vaccine development ongoing

**Implementation Science:**

*Screening Barriers:*
- Stigma and discrimination
- Access to care
- Cost and insurance coverage
- Health literacy
- Trust in healthcare system

*Effective Interventions:*
- Opt-out testing (routine unless declined)
- Standing orders for screening
- Electronic health record prompts
- Community-based testing
- Partner services (contact tracing)

**Emerging Challenges:**

*Antimicrobial Resistance:*
- CARBA-R testing (CRE)
- Rapid resistance profiling
- Stewardship integration
- New drug development needs

*Climate Change Impacts:*
- Expanding geographic ranges
- Vector-borne disease emergence
- Waterborne disease patterns
- Refugee/migration health needs

**Future Directions:**

*Wearable Monitoring:*
- Fever detection
- Early symptom alerts
- Viral load monitoring (research)
- Environmental exposure tracking

*Multi-Pathogen Panels:*
- Respiratory panels (influenza, RSV, COVID, etc.)
- STI panels (multiple pathogens)
- GI panels
- Bloodstream infection panels

*Precision Public Health:*
- Geographic risk mapping
- Individual risk prediction
- Targeted screening algorithms
- Resource optimization`,
      keyTerms: [
        { term: 'metagenomic sequencing', definition: 'Sequencing all genetic material in sample to identify pathogens' },
        { term: 'CARBA-R', definition: 'Carbapenem resistance detection; tests for CRE' },
        { term: 'U=U', definition: 'Undetectable equals untransmittable; HIV cannot spread if viral load undetectable' },
        { term: 'syndromic management', definition: 'Treating based on symptoms when diagnostic testing unavailable' },
        { term: 'precision public health', definition: 'Using data and analytics to target public health interventions' },
      ],
      analogies: [],
      clinicalNotes: 'Implement opt-out testing. Use point-of-care molecular tests. Address stigma. Screen based on risk, not just symptoms. Understand elimination goals. Leverage AI for outbreak detection.',
    },
  },

  media: [
    {
      id: 'infectious-screening-table',
      type: 'diagram',
      filename: 'infectious-disease-screening-table.svg',
      title: 'Infectious Disease Screening Recommendations',
      description: 'Visual summary of screening recommendations for HIV, Hepatitis, STIs, and TB',
    },
  ],

  citations: [
    {
      id: 'cdc-sti-screening',
      type: 'website',
      title: 'STI Screening Recommendations',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/std/general/default.htm',
      accessedDate: '2025-01-25',
    },
    {
      id: 'cdc-hiv-testing',
      type: 'website',
      title: 'HIV Testing Recommendations',
      source: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/hiv/testing/index.html',
      accessedDate: '2025-01-25',
    },
  ],

  crossReferences: [
    { targetId: 'concept-vaccine-safety', targetType: 'concept', relationship: 'related', label: 'Vaccine Safety' },
    { targetId: 'concept-childhood-vaccines', targetType: 'concept', relationship: 'related', label: 'Childhood Vaccines' },
  ],

  tags: {
    systems: ['immune', 'infectious'],
    topics: ['preventive medicine', 'infectious disease', 'public health', 'screening'],
    keywords: ['HIV', 'Hepatitis C', 'STI', 'TB', 'screening', 'PrEP', 'infectious disease'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['medicine', 'family medicine', 'infectious disease'],
    },
  },

  createdAt: '2025-01-25T00:00:00.000Z',
  updatedAt: '2025-01-25T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
